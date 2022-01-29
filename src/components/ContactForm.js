import { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Button } from "./Button";
import { ReactComponent as CheckMark } from "../assets/icons/checkmark.svg";

export const ContactForm = ({}) => {
 //
 // form validation
 const { handleSubmit, handleChange, values, touched, errors, handleReset } = useFormik({
  initialValues: {
   fullName: "",
   email: "",
   message: "",
  },
  // using yup validator to validate form
  validationSchema: Yup.object({
   email: Yup.string().email().required(),
   message: Yup.string().required(),
  }),
  onSubmit: ({ fullName, email, message }) => {
   console.log("fullName", fullName);
   console.log("email", email);
   console.log("message", message);

   //
   showCheckMarkFun();
   handleReset();
  },
 });

 // keep log of errors
 const [emailError, setEmailError] = useState(false);
 const [messageError, setMessageError] = useState(false);
 // update the errors
 useEffect(() => {
  touched.email && errors.email ? setEmailError(true) : setEmailError(false);
  touched.message && errors.message ? setMessageError(true) : setMessageError(false);
 }, [errors.email, errors.message]);
 //

 // show a check mark when message is sent
 const [showCheckMark, setShowCheckMark] = useState(false);
 const showCheckMarkFun = () => setShowCheckMark(true);

 // reset state to hide check mark
 useEffect(() => {
  const timer = setTimeout(() => {
   setShowCheckMark(false);
  }, 4000);
  return () => clearTimeout(timer);
 }, [showCheckMark]);

 // submit form
 const formSubmit = (e) => {
  e.preventDefault();
  handleSubmit();
 };

 return (
  <div className="contactForm" data-aos="fade-left">
   <h1 className="header">Send me a message</h1>
   <form onSubmit={formSubmit}>
    <div className="flexContainer">
     <div className="inputContainer">
      <input type="text" placeholder=" " name="fullName" onChange={handleChange} value={values.fullName} />
      <span className="placeholder">Full Name</span>
     </div>
     <div className={emailError ? "error inputContainer" : "inputContainer"}>
      <input type="email" placeholder=" " name="email" onChange={handleChange} value={values.email} touched={touched} />
      <span className="placeholder">Email*</span>
     </div>
    </div>
    <div className={messageError ? "error inputContainer" : "inputContainer"}>
     <textarea placeholder=" " name="message" onChange={handleChange} value={values.message} touched={touched} />
     <span className="placeholder">Message*</span>
    </div>

    <div className="sendBtn">
     <Button btnText="Send" type="submit" />
     <div className="checkMarkContainer">{showCheckMark && <CheckMark className="svgCheck" />}</div>
    </div>
   </form>
  </div>
 );
};
