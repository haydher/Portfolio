import { ReactComponent as EmailIcon } from "../assets/icons/email.svg";
import { ReactComponent as Clipboard } from "../assets/icons/clipboard.svg";
import { SecondaryBtn } from "./SecondaryBtn";
import { ContactStyle } from "./styles/ContactStyle";
import { useEffect, useState } from "react";
import { ContactForm } from "./ContactForm";

export const Contact = ({ height }) => {
 const email = "email@email.com";

 // show confirmation when user copies email
 const arr = [". . .", "Copied!", "Copied, again!", "hmmm.. Copied!", "OKK, ITS COPIED!", "Want it in the mail?"];
 const [copyText, setCopyText] = useState(arr[0]);
 // update the state after copy to allow copying again
 // this is used only for animating the approved color
 const [clipboard, setClipboard] = useState(false);

 useEffect(() => {
  const timer = setTimeout(() => {
   setClipboard(false);
  }, 2000);
  return () => clearTimeout(timer);
 }, [clipboard]);

 const copyToClipBoard = () => {
  !clipboard && setCopyText(arr[arr.indexOf(copyText) + 1 < arr.length ? arr.indexOf(copyText) + 1 : 0]);

  navigator.clipboard.writeText(email);
  setClipboard(true);
 };

 return (
  <ContactStyle height={height} id="contact" clipboard={clipboard} copyText={copyText}>
   <div className="title">
    <h1>Contact</h1>
   </div>
   <div className="aboutContainer">
    <div className="contactInfo" data-aos="fade-right">
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
       <div className="emailTextContainer">
        <p className="emailText">Email me at:</p>
        <p className="email">{email}</p>
       </div>
      </div>
     </div>
     <div className="linksContainer">
      <SecondaryBtn link="https://github.com/haydher" img="Github" margin="0 1rem 0 0" />
      <SecondaryBtn link="https://www.linkedin.com/in/haydher/" img="Linkedin" />
     </div>
    </div>
    <ContactForm />
   </div>
  </ContactStyle>
 );
};