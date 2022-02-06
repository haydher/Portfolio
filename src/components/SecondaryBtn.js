import { ReactComponent as Github } from "../assets/icons/github.svg";
import { ReactComponent as Website } from "../assets/icons/website.svg";
import { ReactComponent as Linkedin } from "../assets/icons/linkedin.svg";
import { ReactComponent as Email } from "../assets/icons/mail.svg";
import { SecondaryBtnStyle } from "./styles/SecondaryBtnStyle";

export const SecondaryBtn = ({ link, img, margin, hideBefore }) => {
 const capitalLetter = (string) => string.charAt(0).toUpperCase() + string.slice(1);

 return (
  <SecondaryBtnStyle margin={margin} linkName={capitalLetter(img)} hideBefore={hideBefore}>
   <a href={link} target="_blank" rel="noreferrer" title={`Link to ${capitalLetter(img)}`}>
    <div className="linkBtn">
     {img.toLowerCase() === "github" ? (
      <Github />
     ) : img.toLowerCase() === "website" ? (
      <Website />
     ) : img.toLowerCase() === "linkedin" ? (
      <Linkedin />
     ) : img.toLowerCase() === "email" ? (
      <Email />
     ) : (
      ""
     )}
    </div>
   </a>
  </SecondaryBtnStyle>
 );
};
