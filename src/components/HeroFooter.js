import { HeroFooterStyle } from "./styles/HeroFooterStyle";

export const HeroFooter = () => {
 return (
  <HeroFooterStyle>
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
