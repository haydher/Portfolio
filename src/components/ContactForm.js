import { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Button } from "./Button";
import { ReactComponent as CheckMark } from "../assets/icons/checkmark.svg";
import { submitForm } from "./utils";
import { ContactFormStyle } from "./styles/ContactFormStyle";

export const ContactForm = () => {
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
  onSubmit: async ({ fullName, email, message }) => {
   // set spinner on pending when `send` is clicked
   setShowCheckMark("pending");
   // set the error back to false to hide the error
   setFormError(false);

   // get the result of the form
   const result = await submitForm({ fullName, email, message });

   if (result === 1) {
    setShowCheckMark("success");
    setFormError(false);
    handleReset();
   } else {
    setShowCheckMark(null);
    setFormError(true);
   }
  },
 });

 // keep log of errors
 const [emailError, setEmailError] = useState(false);
 const [messageError, setMessageError] = useState(false);
 // update the errors
 useEffect(() => {
  touched.email && errors.email ? setEmailError(true) : setEmailError(false);
  touched.message && errors.message ? setMessageError(true) : setMessageError(false);
 }, [touched.email, touched.message, errors.email, errors.message]);

 // show error if form wasnt submitted successfully
 const [formError, setFormError] = useState(false);
 // show a check mark when message is sent
 const [showCheckMark, setShowCheckMark] = useState(null);

 // reset state to hide check mark
 useEffect(() => {
  const timer = setTimeout(() => {
   showCheckMark === "success" && setShowCheckMark(null);
  }, 4000);
  return () => clearTimeout(timer);
 }, [showCheckMark]);

 // submit form
 const formSubmit = (e) => {
  e.preventDefault();
  handleSubmit();
 };

 return (
  <ContactFormStyle showCheckMark={showCheckMark} data-aos="fade-left">
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
     {showCheckMark && (
      <div className="checkMarkContainer">
       <CheckMark className="svgCheck" />
      </div>
     )}
     {formError && (
      <div className="formError">
       <p>Sorry, the form didn't submit.</p>
       <p>Please send me an email instead.</p>
      </div>
     )}
    </div>
   </form>
  </ContactFormStyle>
 );
};
