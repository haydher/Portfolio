import { ReactComponent as EmailIcon } from "../assets/icons/email.svg";
import { Button } from "./Button";
import { SecondaryBtn } from "./SecondaryBtn";
import { ContactStyle } from "./styles/ContactStyle";

export const Contact = ({ height }) => {
 return (
  <ContactStyle height={height} id="contact">
   <div className="title">
    <h1>Contact</h1>
   </div>
   <div className="aboutContainer">
    <div className="contactInfo">
     <h1>Lets Chat!</h1>
     <p>Got a question, or proposal, or just want to say hello? Send me a message!</p>

     <div className="emailContainer">
      <div className="emailIconContainer">
       <EmailIcon />
      </div>
      <div className="emailInfoContainer">
       <p className="emailText">Email me at:</p>
       <p className="email">email@email.com</p>
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
       <input type="text" placeholder="Full Name*" name="name" />
      </div>
      <div className="inputContainer">
       <input type="email" placeholder="Email*" name="email" />
      </div>
     </div>

     <div className="inputContainer">
      <textarea placeholder="Message*" name="message" />
     </div>

     <div className="sendBtn">
      <Button btnText="Send" />
     </div>
    </div>
   </div>
  </ContactStyle>
 );
};
