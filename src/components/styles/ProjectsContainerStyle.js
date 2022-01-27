import styled from "styled-components";

export const ProjectsContainerStyle = styled.section`
 width: ${({ theme }) => theme.width};
 margin: 2rem auto 0 auto;
 /* padding-top: 9rem; */

 .title {
  position: sticky;
  top: ${({ height }) => height + 20}px;
  margin-bottom: ${({ height }) => height + 20}px;
  bottom: 100px;
  color: ${({ theme }) => theme.textColor};
  font-size: 2rem;

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
`;
