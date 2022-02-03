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

 //tablets
 @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
  display: flex;
  height: auto;
  margin: 4rem 0 6rem 0;

  .imgContainer {
   order: 0;
   height: 100%;
   width: 70%;

   img {
    width: 100%;
   }
  }
  .projectInfo {
   width: 40%;

   .projectTitle {
    font-size: 1.1rem;
    margin-bottom: 1rem;
   }

   .descriptionContainer {
    width: 140%;
    padding: 1rem;
    margin-bottom: 1rem;
    line-height: 1.2rem;
    font-size: 0.85rem;
   }

   .techContainer {
    margin-bottom: 1rem;
    width: 100%;
    font-size: 0.7rem;

    ul {
     li {
      margin: ${({ side }) => (side === "right" ? "0  0.9rem 0 0" : "0 0 0 0.9rem")};
      padding: 0.5rem 0;
      :first-child {
       margin: ${({ side }) => side !== "right" && "0"};
      }
     }
    }
   }
  }
 }
 // for full HD
 @media only screen and (min-width: 1024px) {
  width: 1000px;
  margin: 8rem 0 8rem 0;
  height: auto;

  .projectInfo {
   .projectTitle {
    font-size: 1.4rem;
    margin-bottom: 3rem;
   }

   .descriptionContainer {
    width: 150%;
    margin-bottom: 3rem;
    padding: 1.5rem;
    line-height: 1.7rem;
   }

   .techContainer {
    margin-bottom: 3rem;
    font-size: 1rem;

    ul {
     li {
      padding: 0.8rem 0;
     }
    }
   }
  }
 }

 // for full HD
 @media only screen and (min-width: 1920px) {
  width: 1440px;
 }

 // for Quad HD (2k)
 @media only screen and (min-width: 2560px) {
  width: 1440px;
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

 // UHD
 @media only screen and (min-width: 3840px) {
  width: 2160px;

  height: auto;
  margin: 8rem 0 10rem 0;

  .projectInfo {
   .projectTitle {
    font-size: 2.5rem;
    margin-bottom: 3rem;
   }

   .descriptionContainer {
    font-size: 1.4rem;
    margin-bottom: 3rem;
    padding: 1.8rem;
    line-height: 1.9rem;
   }

   .techContainer {
    margin-bottom: 3rem;
    font-size: 1.3rem;
   }
  }
 }
`;
