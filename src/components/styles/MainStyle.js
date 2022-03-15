import styled from "styled-components";

export const MainStyle = styled.section`
 display: flex;
 flex-direction: column;
 justify-content: center;
 margin: auto;
 width: ${({ theme }) => theme.width};
 height: 100vh;

 // for mobile phones
 @media only screen and (max-width: 767px) {
  width: 90%;
  height: auto;
 }

 // for tablets
 @media only screen and (min-width: 768px) and (max-width: 1024px) {
  width: 90%;
  justify-content: center;
 }

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
