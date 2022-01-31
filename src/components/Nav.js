import React from "react";
import { NavBarStyle } from "./styles/NavBarStyle";

export const Nav = React.forwardRef((props, navRef) => {
 return (
  <NavBarStyle>
   <div className="navContainer" ref={navRef}>
    <div className="logo">
     <a href="/">
      <h1>Haydher</h1>
     </a>
    </div>
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
