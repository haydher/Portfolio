import styled from "styled-components";

export const ProjectsStyle = styled.div`
 display: flex;
 flex-direction: ${({ side }) => side === "right" && "row-reverse"};
 height: 70vh;
 margin: 4rem 0;

 .imgContainer {
  order: 0;
  height: 100%;
  width: 70%;
  display: flex;
  align-items: center;
  img {
   width: 100%;
  }
 }
 .projectInfo {
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: ${({ side }) => side !== "right" && "flex-end"};
  margin: auto;

  .projectTitle {
   font-size: 1.3rem;
   color: ${({ theme }) => theme.textColor};
   margin-bottom: 2rem;

   span {
    color: ${({ titleColor }) => titleColor};
   }
  }

  .descriptionContainer {
   background-color: ${({ theme }) => theme.secondaryColor};
   width: 130%;
   margin-bottom: 2rem;
   text-align: ${({ side }) => side !== "right" && "end"};
   color: ${({ theme }) => theme.textColor};
   border-radius: 4px;
   padding: 1.5rem;
   line-height: 1.5rem;
  }

  .techContainer {
   margin-bottom: 2rem;
   width: 90%;
   color: ${({ theme }) => theme.textColor};
   font-size: 0.9rem;

   ul {
    display: flex;
    justify-content: ${({ side }) => side !== "right" && "flex-end"};
    flex-wrap: wrap;
    list-style: none;

    li {
     margin: ${({ side }) => (side === "right" ? "0  1rem 0 0" : "0 0 0 1rem")};
     padding: 0.5rem 0;
     :first-child {
      margin: ${({ side }) => side !== "right" && "0"};
     }
    }
   }

   span {
    margin: 1rem;
    background-color: brown;
   }
  }
  .linksContainer {
   display: flex;
  }
 }

 @media only screen and (min-width: 1080px) {
  width: 1400px;
  height: 65vh;
  margin: 0rem 0;

  .imgContainer {
   width: 75%;
  }
  .projectInfo {
   .projectTitle {
    font-size: 1.8rem;
    margin-bottom: 3rem;
   }

   .descriptionContainer {
    width: 150%;
    margin-bottom: 3rem;
    padding: 2rem;
    line-height: 1.7rem;
   }

   .techContainer {
    margin-bottom: 3rem;
    font-size: 1.1rem;

    ul {
     li {
      padding: 0.8rem 0;
     }
    }
   }
  }
 }
`;
