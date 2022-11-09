import { MainStyle } from "./styles/MainStyle";
import { Hero } from "./Hero";
import { HeroFooter } from "./HeroFooter";

export const Main = () => {
 return (
  <MainStyle id="main">
   <div className="mainContainer">
    <Hero />
    <HeroFooter />
   </div>
  </MainStyle>
 );
};
