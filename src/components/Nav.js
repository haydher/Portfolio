import { NavBarStyle } from "./styles/NavBarStyle";

export const Nav = () => {
 return (
  <NavBarStyle>
   <div className="navContainer">
    <div className="logo">
     <h1>Haydher</h1>
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
};
