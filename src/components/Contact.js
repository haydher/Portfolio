import { ReactComponent as EmailIcon } from "../assets/icons/email.svg";
import { ReactComponent as Clipboard } from "../assets/icons/clipboard.svg";
import { ReactComponent as CheckMark } from "../assets/icons/checkmark.svg";
import { Button } from "./Button";
import { SecondaryBtn } from "./SecondaryBtn";
import { ContactStyle } from "./styles/ContactStyle";
import { useEffect, useState } from "react";

export const Contact = ({ height }) => {
 const email = "email@email.com";

 // update the state after copy to allow copying again
 // this is used only for animating the approved color
 const [clipboard, setClipboard] = useState(false);

 useEffect(() => {
  const timer = setTimeout(() => {
   setClipboard(false);
  }, 1000);
  return () => clearTimeout(timer);
 }, [clipboard]);

 const copyToClipBoard = () => {
  navigator.clipboard.writeText(email);
  setClipboard(true);
 };

 // show a check mark when message is sent
 const [msgSend, setMsgSend] = useState(false);

 const sendMessage = () => setMsgSend(true);

 useEffect(() => {
  const timer = setTimeout(() => {
   setMsgSend(false);
  }, 4000);
  return () => clearTimeout(timer);
 }, [msgSend]);

 return (
  <ContactStyle height={height} id="contact" clipboard={clipboard}>
   <div className="title">
    <h1>Contact</h1>
   </div>
   <div className="aboutContainer">
    <div className="contactInfo">
     <h1>Lets Chat!</h1>
     <p>Got a question, or proposal, or just want to say hello? Send me a message!</p>

     <div className="emailContainer" title="Click to copy to clipboard" onClick={copyToClipBoard}>
      <div className="emailIconContainer">
       <EmailIcon />
       <div className="clipboard">
        <Clipboard />
       </div>
      </div>
      <div className="emailInfoContainer">
       <p className="emailText">Email me at:</p>
       <p className="email">{email}</p>
      </div>
     </div>
     <div className="linksContainer">
      <SecondaryBtn link="github.com" img="github" margin="0 1rem 0 0" />
      <SecondaryBtn link="linkedin.com" img="linkedin" />
     </div>
    </div>
    <div className="contactForm">
     <h1 className="header">Send me a message</h1>
     <div className="flexContainer">
      <div className="inputContainer">
       <input type="text" placeholder=" " name="name" />
       <span className="placeholder">Full Name*</span>
      </div>
      <div className="inputContainer">
       <input type="email" placeholder=" " name="email" />
       <span className="placeholder">Email*</span>
      </div>
     </div>

     <div className="inputContainer">
      <textarea placeholder=" " name="message" />
      <span className="placeholder">Message*</span>
     </div>

     <div className="sendBtn">
      <Button btnText="Send" onClick={sendMessage} />
      <div className="checkMarkContainer">{msgSend && <CheckMark className="svgCheck" />}</div>
     </div>
    </div>
   </div>
  </ContactStyle>
 );
};
