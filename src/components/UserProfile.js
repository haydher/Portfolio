import { ReactComponent as AboutFrame } from "../assets/icons/aboutFrame.svg";
import AboutPic from "../assets/imgs/aboutPic.png";
import { UserProfileStyle } from "./styles/UserProfileStyle";

export const UserProfile = () => {
 return (
  <UserProfileStyle className="aboutPic">
   <AboutFrame />
   <img src={AboutPic} alt="Author in about section" />
  </UserProfileStyle>
 );
};
