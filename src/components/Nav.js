import React, { useState } from "react";
import { Hamburger } from "./Hamburger";
import { NavBarStyle } from "./styles/NavBarStyle";

export const Nav = React.forwardRef(({ height }, navRef) => {
 const [menuActive, setMenuActive] = useState(false);

 return (
  <NavBarStyle height={height} menuActive={menuActive}>
   <div className="navContainer" ref={navRef}>
    <div className="logo">
     <a href="/">
      <h1>Haydher</h1>
     </a>
    </div>
    <Hamburger menuActive={menuActive} setMenuActive={setMenuActive} />
    <ul>
     <li className="active">
      <a href="#main" onClick={() => setMenuActive(false)}>
       Home
      </a>
     </li>
     <li>
      <a href="#projects" onClick={() => setMenuActive(false)}>
       Projects
      </a>
     </li>
     <li>
      <a href="#about" onClick={() => setMenuActive(false)}>
       About
      </a>
     </li>
     <li>
      <a href="#contact" onClick={() => setMenuActive(false)}>
       Contact
      </a>
     </li>
    </ul>
   </div>
  </NavBarStyle>
 );
});
