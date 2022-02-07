import { HamburgerStyle } from "./styles/HamburgerStyle";

export const Hamburger = ({ menuActive, setMenuActive }) => {
 return (
  <HamburgerStyle menuActive={menuActive} onClick={() => setMenuActive(!menuActive)}>
   <span></span>
   <span></span>
   <span></span>
  </HamburgerStyle>
 );
};
