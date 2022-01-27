import { ThemeProvider } from "styled-components";
import { GlobalComponents } from "./components/styles/GlobalComponents";
import { darkTheme } from "./components/styles/Theme";
import { Nav } from "./components/Nav";
import { Main } from "./components/Main";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useRef, useState } from "react";
import { ProjectsContainer } from "./components/ProjectsContainer";
import { About } from "./components/About";
import { MouseFollowStyle } from "./components/styles/MouseFollowStyle";
import { Contact } from "./components/Contact";

const App = () => {
 useEffect(() => {
  AOS.init({
   // Global settings:
   disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
   startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
   initClassName: "aos-init", // class applied after initialization
   animatedClassName: "aos-animate", // class applied on animation
   useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
   disableMutationObserver: false, // disables automatic mutations' detections (advanced)
   debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
   throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

   // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
   offset: 120, // offset (in px) from the original trigger point
   delay: 0, // values from 0 to 3000, with step 50ms
   duration: 400, // values from 0 to 3000, with step 50ms
   easing: "ease-out", // default easing for AOS animations
   once: true, // whether animation should happen only once - while scrolling down
   mirror: false, // whether elements should animate out while scrolling past them
   anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
  });

  getNavHeight();

  // window.addEventListener("mousemove", mouseFollow);
  // return () => {
  //  window.removeEventListener("mousemove", mouseFollow);
  // };
 }, []);

 // move the circle div as a mouse around
 const divRef = useRef();
 const mouseFollow = (e) => {
  divRef.current.style.top = `${e.clientY}px`;
  divRef.current.style.left = `${e.clientX}px`;
 };

 // get height of nav since fixed. help push down anchor links
 const [height, setHeight] = useState(0);
 const getNavHeight = () => {
  setHeight(document.querySelector("nav").offsetHeight);
 };

 return (
  <ThemeProvider theme={darkTheme}>
   <GlobalComponents />
   <div className="App">
    {/* <MouseFollowStyle ref={divRef}></MouseFollowStyle> */}
    <Nav />
    <Main />
    <ProjectsContainer height={height} />
    <About height={height} />
    <Contact height={height} />
    {/* <section style={{ height: "200vh", width: "90vw", background: "red" }}>asd</section> */}
   </div>
  </ThemeProvider>
 );
};

export default App;
