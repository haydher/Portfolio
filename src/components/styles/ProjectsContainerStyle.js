import styled from "styled-components";

export const ProjectsContainerStyle = styled.section`
 scroll-margin-top: ${({ height }) => height}px;
 width: ${({ theme }) => theme.width};
 margin: auto;

 // for mobile phones
 @media only screen and (max-width: 767px) {
  width: 90%;
 }

 @media only screen and (min-width: 768px) and (max-width: 1024px) {
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
