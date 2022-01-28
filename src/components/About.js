import { ReactComponent as AboutFrame } from "../assets/icons/aboutFrame.svg";
import AboutPic from "../assets/imgs/aboutPic.png";
import { AboutStyle } from "./styles/AboutStyle";

export const About = (height) => {
 return (
  <AboutStyle height={height} id="about">
   <div className="aboutPageContainer">
    <div className="title">
     <h1>About Me</h1>
    </div>
    <div className="aboutContainer">
     <div className="aboutInfo" data-aos="fade-right">
      <p>
       Hi. My name is Ali Haider (Haydher).
       <br></br>
       <br></br>
       Over 3+ years. I had the opportunity to work in a vast spectrum of web technologies which let me get experience
       in user interface, testing, debugging, deployment, and numerous other full-stack technologies. This helped me
       build numerous websites for start-ups and businesses.
       <br></br>
       <br></br>I currently work remotely as a freelancer and I am open to new opportunities.
       <br></br>
       <br></br>Here are few technologies I’ve been working with recently:
       <br></br>
       <br></br>
      </p>
      <div className="tech">
       <div className="techContainer">
        <h1>Web & Database</h1>
        <p className="skills">
         <span>HTML</span> <span>CSS</span> <span>JavaScript</span> <span>Node.Js</span>
         <span style={{ whiteSpace: "nowrap" }}>REST API</span>
         <span>MangoDb</span> <span>Firebase</span>
        </p>
       </div>
       <div className="techContainer">
        <h1>Frameworks & Libraries</h1>
        <p className="skills">
         <span>ReactJs</span> <span>Redux</span> <span>EJS</span> <span>Mangoose</span> <span>ExpressJS</span>
         <span>Bootstrap</span> <span>JQuery</span>
        </p>
       </div>
       <div className="techContainer">
        <h1>Tech</h1>
        <p className="skills">
         <span>Github</span> <span>Figma</span> <span>PhotoShop</span> <span>Postman</span> <span>VSCode</span>
        </p>
       </div>
      </div>
     </div>
     <div className="aboutPic" data-aos="fade-left">
      <AboutFrame />
      <img src={AboutPic} alt="Picture of Haydher in about section" />
     </div>
    </div>
   </div>
  </AboutStyle>
 );
};
