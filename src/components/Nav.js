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
      <a href="#main">Home</a>
     </li>
     <li>
      <a href="#projects">Projects</a>
     </li>
     <li>
      <a href="#about">About</a>
     </li>
     <li>
      <a href="#contact">Contact</a>
     </li>
    </ul>
   </div>
  </NavBarStyle>
 );
});
