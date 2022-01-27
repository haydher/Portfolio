import { createGlobalStyle } from "styled-components";

export const GlobalComponents = createGlobalStyle`
 * {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Roboto", sans-serif;
  scroll-behavior: smooth;
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
 }
`;
