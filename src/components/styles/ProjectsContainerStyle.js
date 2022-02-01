import styled from "styled-components";

export const ProjectsContainerStyle = styled.section`
 width: ${({ theme }) => theme.width};
 margin: -3rem auto 0 auto;
 padding-top: 3rem;

 .title {
  background-color: ${({ theme }) => theme.bgColor};
  color: ${({ theme }) => theme.textColor};
  font-size: 2rem;
  padding: 1rem 0;

  ::after {
   content: "";
   position: absolute;
   top: 50%;
   left: 9rem;
   transform: translateY(-50%);
   background-color: ${({ theme }) => theme.textColor};
   opacity: 0.8;
   height: 2px;
   width: 50vw;
   border-radius: 100px;
  }
 }

 @media only screen and (min-width: 1080px) {
  width: 1440px;
 }
`;
