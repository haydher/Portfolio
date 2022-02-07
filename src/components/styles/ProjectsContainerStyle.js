import styled from "styled-components";

export const ProjectsContainerStyle = styled.section`
 scroll-margin-top: ${({ height }) => height}px;
 width: ${({ theme }) => theme.width};
 margin: auto;

 // for mobile phones
 @media only screen and (max-device-width: 767px) {
  width: 90%;
 }

 @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
  width: 90%;
 }

<<<<<<< HEAD
=======
 // HD
 @media only screen and (min-width: 1080px) {
  width: 1080px;
 }

 // FHD
>>>>>>> 6d636346eff2de5c89114b2a3cb9881d77c92868
 @media only screen and (min-width: 1920px) {
  width: 1440px;
 }

 // UHD
 @media only screen and (min-width: 3840px) {
  width: 2160px;
 }
`;
