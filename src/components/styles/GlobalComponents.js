import { createGlobalStyle } from "styled-components";

export const GlobalComponents = createGlobalStyle`
 * {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Roboto", sans-serif;
  scroll-behavior: smooth;
 }

 /* width */
::-webkit-scrollbar {
  width: 10px;
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: #666; 
  border-radius: 100px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #888; 
}

 a:link,
 a:visited,
 a:hover,
 a:active {
  text-decoration: none;
  color: var(--textColor);
 }
 body {
  background-color:  ${({ theme }) => theme.bgColor};
  overflow-x: hidden;
 }
`;
