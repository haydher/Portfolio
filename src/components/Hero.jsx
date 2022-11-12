import { Button } from "./Button";
import { HeroStyle } from "./styles/HeroStyle";
import { ReactComponent as Arrow } from "../assets/icons/arrow.svg";
import { ReactComponent as Title } from "../assets/icons/webDeveloper.svg";
import { ReactComponent as Website } from "../assets/icons/website.svg";
import { SecondaryBtn } from "./SecondaryBtn";
import { useGetScreenWidth } from "./utils";
import { UserProfile } from "./UserProfile";
import Blur from "../assets/imgs/blur.png";
import Memoji from "../assets/imgs/memoji.png";
import Resume from "../assets/Haydher_Resume.pdf";

export const Hero = () => {
  const mobileView = useGetScreenWidth();
  const mobileWidth = 767;

  return (
    <HeroStyle>
      <div className="heroLeft">
        <div className="heroLeftContainer">
          <div className="heading" data-aos="fade-right">
            <p>Hi, I'm Haydher</p>
            <img className="blur" src={Blur} alt="background placeholder" draggable="false" />
          </div>
          <div className="title">
            <Title id="webDevTitle" />
          </div>
          <div className="description" data-aos="fade-right" data-aos-delay="100">
            <p>I am a Full-Stack developer and I bring cool ideas to life.</p>
          </div>
          <div className="heroBtns" data-aos="fade-right" data-aos-delay="200">
            <a href="#contact" tabIndex={-1}>
              <Button btnText="Contact" btnClass="CTA" imgSrc={<Arrow />} />
            </a>
            <a href={Resume} target="_blank" rel="noreferrer" tabIndex={-1}>
              <Button btnText="Resume" btnClass="resume" imgSrc={<Website />} />
            </a>
          </div>
          <div className="heroLinks" data-aos="fade-right" data-aos-delay="300">
            <SecondaryBtn link="https://github.com/haydher" img="github" margin="0 1rem 0 0" />
            <SecondaryBtn link="https://www.linkedin.com/in/haydher/" img="linkedin" />
          </div>
        </div>
      </div>
      <div className="heroRight">
        {mobileView <= mobileWidth ? (
          <UserProfile dataAos="fade-left" />
        ) : (
          <div className="memoji" data-aos="fade-left">
            <img src={Memoji} alt="face memoji" draggable="false" />
          </div>
        )}
      </div>
    </HeroStyle>
  );
};
