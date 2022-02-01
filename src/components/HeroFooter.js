import { HeroFooterStyle } from "./styles/HeroFooterStyle";

export const HeroFooter = () => {
 return (
  <HeroFooterStyle id="heroFooter" data-aos="fade-in" data-aos-delay="300" data-aos-duration="3000">
   <div className="scroll">
    <div className="circle">
     <div className="dot"></div>
    </div>
    <div className="pointers">
     <div className="pointer"></div>
     <div className="pointer"></div>
     <div className="pointer"></div>
    </div>
   </div>
  </HeroFooterStyle>
 );
};
