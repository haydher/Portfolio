import styled from "styled-components";

export const HamburgerStyle = styled.button`
 display: none;
 position: relative;
 width: 40px;
 height: 30px;
 cursor: pointer;
 border: none;
 outline: none;
 background-color: transparent;

 span {
  position: absolute;
  width: 100%;
  height: 4px;
  background-color: ${({ theme }) => theme.textColor};
  left: 0;
  border-radius: 5px;
  transition: 225ms;

  :nth-child(1) {
   width: 50%;
   top: ${({ menuActive }) => (menuActive ? "calc(25% - 4px)" : 0)};
   left: ${({ menuActive }) => menuActive && "2px"};
   transform: ${({ menuActive }) => menuActive && "rotate(225deg)"};
  }

  :nth-child(2) {
   top: calc(50% - 2px);
   transform: ${({ menuActive }) => menuActive && "rotate(-45deg)"};
  }

  :nth-child(3) {
   width: 50%;
   left: ${({ menuActive }) => (menuActive ? "calc(18px)" : "20px")};
   bottom: ${({ menuActive }) => (menuActive ? "calc(25% - 1px)" : "0")};
   transform: ${({ menuActive }) => menuActive && "rotate(225deg)"};
  }
 }

 @media only screen and (max-device-width: 768px) {
  display: flex;
 }
`;
