import styled from "styled-components";

export const HamburgerStyle = styled.button`
 display: none;
 position: relative;
 width: 26px;
 height: 20px;
 cursor: pointer;
 border: none;
 outline: none;
 background-color: transparent;

 span {
  position: absolute;
  width: 100%;
  height: 2px;
  background-color: ${({ theme }) => theme.primaryColor} !important;
  left: 0;
  border-radius: 5px;
  transition: 225ms;

  :nth-child(1) {
   width: 50%;
   top: ${({ menuActive }) => (menuActive ? "calc(25% - 2px)" : 0)};
   left: ${({ menuActive }) => menuActive && "2px"};
   transform: ${({ menuActive }) => menuActive && "rotate(225deg)"};
  }

  :nth-child(2) {
   top: calc(50% - 2px);
   transform: ${({ menuActive }) => menuActive && "rotate(-45deg)"};
  }

  :nth-child(3) {
   width: 50%;
   left: ${({ menuActive }) => (menuActive ? "12px" : "13px")};
   bottom: ${({ menuActive }) => (menuActive ? "25%" : "0")};
   transform: ${({ menuActive }) => menuActive && "rotate(225deg)"};
  }
 }

 @media only screen and (max-device-width: 767px) {
  display: flex;
 }
`;
