import { ReactComponent as AboutFrame } from "../assets/icons/aboutFrame.svg";
import AboutPic from "../assets/imgs/aboutPic.png";
import { UserProfileStyle } from "./styles/UserProfileStyle";

export const UserProfile = ({ dataAos }) => {
 return (
  <UserProfileStyle className="aboutPic" data-aos={dataAos}>
   <AboutFrame />
   <img src={AboutPic} alt="Author in about section" />
  </UserProfileStyle>
 );
};
