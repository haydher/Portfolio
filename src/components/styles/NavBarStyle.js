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
