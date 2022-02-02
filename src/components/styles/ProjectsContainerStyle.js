import styled from "styled-components";

export const ProjectsContainerStyle = styled.section`
 width: ${({ theme }) => theme.width};
 margin: -3rem auto 0 auto;
 padding-top: 3rem;

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
