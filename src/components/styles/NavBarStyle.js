import styled from "styled-components";

export const NavBarStyle = styled.nav`
 background-color: ${({ theme }) => theme.bgColor};
 position: fixed;
 left: 0;
 right: 0;
 top: 0;
 z-index: 5;

 .navContainer {
  width: ${({ theme }) => theme.width};
  margin: auto;
  padding: 1.5rem 0;
  display: flex;
  justify-content: space-between;
 }

 .logo {
  font-size: 1.5rem;
  color: ${({ theme }) => theme.primaryColor};
 }

 ul {
  display: flex;
  align-items: center;
  list-style: none;
  font-size: 1.1rem;
 }

 ul li {
  margin-left: 3rem;
  color: ${({ theme }) => theme.textColor};
 }

 ul .active a {
  color: ${({ theme }) => theme.primaryColor};
  font-weight: 500;
 }

 ul li:last-child {
  background-color: ${({ theme }) => theme.primaryColor};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  font-weight: 500;
 }

 ul li a:link {
  padding: 0.5rem 1rem;
 }

 // for phones
 @media only screen and (max-device-width: 767px) {
  .navContainer {
   display: flex;
   justify-content: space-between;
   align-items: center;
   width: 90%;
   padding: 1rem 0;
   margin: auto;
  }

  .logo {
   font-size: 1rem;
   color: ${({ theme }) => theme.primaryColor};
  }

  ul {
   background: ${({ theme }) => theme.bgColor2};
   position: absolute;
   top: ${({ height }) => height + 10}px;
   display: block;
   visibility: ${({ menuActive }) => (menuActive ? "visible" : "hidden")};
   width: 90%;
   list-style: none;
   border-radius: 10px;
   transform-origin: top right;
   transform: ${({ menuActive }) => (menuActive ? "scale(1)" : "scale(0)")};
   transition: transform 0.2s cubic-bezier(0.47, 0.68, 0.58, 1.18);

   :after {
    content: "";
    background: inherit;
    position: absolute;
    top: -10px;
    right: 6px;
    height: 30px;
    width: 30px;
    border-top-left-radius: 5px;
    transform: rotate(45deg);
    pointer-events: none;
    user-select: none;
   }
  }

  ul li {
   margin: auto;
   text-align: center;
   padding: 1.5rem 0;
   font-size: 1rem;
  }

  ul li:last-child {
   background-color: transparent;
  }
 }
 // for tablets
 @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
  width: 100%;

  .navContainer {
   width: 90%;
   padding: 0.8rem 0;
  }

  .logo {
   font-size: 1.1rem;
  }

  ul {
   font-size: 0.9rem;
   font-weight: 600;
  }

  ul li {
   margin-left: 2rem;
  }
 }
 // for full HD
 @media only screen and (min-width: 1920px) {
  .navContainer {
   width: 1440px;
  }
 }
 // for Quad HD (2k)
 @media only screen and (min-width: 2560px) {
  .navContainer {
   width: 1440px;
  }
 }

 // for Ultra HD (4k)
 @media only screen and (min-width: 3840px) {
  .navContainer {
   width: 2160px;
   padding: 2rem 0;
  }

  .logo {
   font-size: 2.5rem;
  }

  ul {
   font-size: 1.9rem;
  }
 }
`;
