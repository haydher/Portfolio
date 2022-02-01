import styled from "styled-components";

export const MainStyle = styled.section`
 display: flex;
 flex-direction: column;
 justify-content: flex-end;
 margin: auto;
 width: ${({ theme }) => theme.width};
 height: 100vh;

 // for full HD
 @media only screen and (min-width: 1920px) {
  width: 1440px;
  justify-content: flex-end;
 }
 // for Quad HD (2k)
 @media only screen and (min-width: 2560px) {
  width: 1440px;
  justify-content: center;
 }
`;
