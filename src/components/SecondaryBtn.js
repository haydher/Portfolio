import { ReactComponent as Github } from "../assets/icons/github.svg";
import { ReactComponent as Website } from "../assets/icons/website.svg";
import { ReactComponent as Linkedin } from "../assets/icons/linkedin.svg";
import { SecondaryBtnStyle } from "./styles/SecondaryBtnStyle";

export const SecondaryBtn = ({ link, img, margin }) => {
 const capitalLetter = (string) => string.charAt(0).toUpperCase() + string.slice(1);
 return (
  <SecondaryBtnStyle margin={margin}>
   <a href={link} target="_blank" rel="noreferrer" title={`Link to ${capitalLetter(img)}`}>
    <div className="linkBtn">
     {img.toLowerCase() === "github" ? <Github /> : img.toLowerCase() === "website" ? <Website /> : <Linkedin />}
    </div>
   </a>
  </SecondaryBtnStyle>
 );
};
