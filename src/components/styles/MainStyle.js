import styled from "styled-components";

export const MainStyle = styled.section`
 display: flex;
 flex-direction: column;
 justify-content: flex-end;
 margin: auto;
 width: ${({ theme }) => theme.width};
 height: 100vh;

 // for full HD
 @media only screen and (min-width: 1920px) and (max-width: 2560px) {
  width: 1440px;
  justify-content: center;
 }
 // for Quad HD (2k)
 @media only screen and (min-width: 2560px) and (max-width: 3840px) {
  width: 1440px;
  justify-content: center;
 }

 // UHD
 @media only screen and (min-width: 3840px) {
  width: 2060px;
  justify-content: center;
 }
`;
