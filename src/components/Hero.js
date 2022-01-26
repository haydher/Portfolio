import { Button } from "./Button";
import { Canvas } from "./Canvas";
import { HeroStyle } from "./styles/HeroStyle";
import { ReactComponent as Arrow } from "../assets/icons/arrow.svg";
import { ReactComponent as Title } from "../assets/icons/webDeveloper.svg";
import { useEffect, useRef } from "react";

export const Hero = () => {
 const titleRef = useRef();

 useEffect(() => {
  console.log(titleRef.current);
 }, []);

 return (
  <HeroStyle>
   <div className="heroLeft">
    <div className="heroLeftContainer">
     <div className="heading">
      <p>Hello, I'm Haydher</p>
      <img className="blur" src="./imgs/blur.png" alt="background image" draggable="false" />
     </div>
     <div className="title">
      <Title ref={titleRef} />
     </div>
     <div className="description">
      <p>Full Stack Developer | UI Designer | UX Designer</p>
     </div>
     <div className="heroBtns">
      {/* <button className="btn CTA">
       Contact <img src="imgs/msg.svg" alt="A message icon" />
      </button> */}
      <Button btnText="Contact" btnClass="CTA" imgSrc={<Arrow />} />
      <Button btnText="Resume" btnClass="resume" />
     </div>
     <div className="heroLinks">
      <a href="https://github.com/haydher" target="_blank">
       <div className="linkBtn">
        <img src="imgs/github.svg" alt="Github external Link" />
       </div>
      </a>
      <a href="https://www.linkedin.com/in/haydher/" target="_blank">
       <div className="linkBtn">
        <img src="imgs/linkedin.svg" alt="Linkedin profile external Link" />
       </div>
      </a>
     </div>
    </div>
   </div>
   <div className="heroRight">
    {/* <canvas className="magnet" id="canvas" width="500" height="500"></canvas> */}
    <Canvas />
    <div className="memoji">
     <img src="imgs/memoji.png" alt="face memoji" draggable="false" />
    </div>
   </div>
  </HeroStyle>
 );
};
