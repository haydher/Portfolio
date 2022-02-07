import React, { useState } from "react";
import { Hamburger } from "./Hamburger";
import { NavBarStyle } from "./styles/NavBarStyle";

const navArr = [
 {
  link: "#main",
  name: "Home",
  active: true,
 },
 {
  link: "#projects",
  name: "Projects",
  active: false,
 },
 {
  link: "#about",
  name: "About",
  active: false,
 },
 {
  link: "#contact",
  name: "Contact",
  active: false,
 },
];

export const Nav = React.forwardRef(({ height }, navRef) => {
 const [menuActive, setMenuActive] = useState(false);

 const [menuList, setMenuList] = useState(navArr);

 const menuClicked = (index) => {
  setMenuActive(false);
  setMenuList((val) => val.map((x, idx) => ({ ...x, active: idx === index })));
 };

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
     {menuList.map((li, index) => (
      <li key={index} className={li.active && li.name !== "Contact" ? "active" : ""}>
       <a href={li.link} onClick={() => menuClicked(index)}>
        {li.name}
       </a>
      </li>
     ))}
    </ul>
   </div>
  </NavBarStyle>
 );
});
