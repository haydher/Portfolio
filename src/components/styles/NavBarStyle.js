import styled from "styled-components";

export const NavBarStyle = styled.nav`
 background-color: ${({ theme }) => theme.bgColor};
 position: fixed;
 left: 0;
 right: 0;
 top: 0;
 z-index: 5;

 .navContainer {
  max-width: ${({ theme }) => theme.width};
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
`;
