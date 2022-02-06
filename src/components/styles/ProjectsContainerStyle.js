import styled from "styled-components";

export const ProjectsContainerStyle = styled.section`
 width: ${({ theme }) => theme.width};
 margin: -3rem auto 0 auto;
 padding-top: 3rem;

 // for mobile phones
 @media only screen and (max-device-width: 767px) {
  width: 90%;
 }

 @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
  width: 90%;
 }

 // HD
 @media only screen and (min-width: 1080px) {
  width: 1080px;
 }

 // FHD
 @media only screen and (min-width: 1920px) {
  width: 1440px;
 }

 // UHD
 @media only screen and (min-width: 3840px) {
  width: 2160px;
 }
`;
