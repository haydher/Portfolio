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
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

const App = () => {
 useEffect(() => {
  AOS.init({
   // Global settings:
   disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
   // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
   duration: 400, // values from 0 to 3000, with step 50ms
   once: true, // whether animation should happen only once - while scrolling down
  });

  getNavHeight();
 }, []);

 // get height of nav since fixed. help push down anchor links
 const navRef = useRef(null);
 const [height, setHeight] = useState(0);
 const getNavHeight = () => setHeight(navRef.current.offsetHeight);

 return (
  <ThemeProvider theme={darkTheme}>
   <GlobalComponents />
   <div className="App">
    <Nav id="nav" ref={navRef} height={height} />
    <Main />
    <ProjectsContainer height={height} />
    <About height={height} />
    <Contact height={height} />
    <Footer />
   </div>
  </ThemeProvider>
 );
};

export default App;
