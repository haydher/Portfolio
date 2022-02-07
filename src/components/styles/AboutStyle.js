import styled from "styled-components";
import blur from "../../assets/imgs/blur.png";

export const AboutStyle = styled.section`
 scroll-margin-top: ${({ height }) => height}px;
 width: auto;
 height: 100vh;

 .aboutPageContainer {
  width: ${({ theme }) => theme.width};
  margin: auto;
 }
 .aboutContainer {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70%;
  color: ${({ theme }) => theme.textColor};

  ::before {
   content: url(${blur});
   position: absolute;
   left: -30%;
   top: -0%;
  }

  .aboutInfo {
   margin-top: 3rem;
   width: 65%;
   line-height: 1.8rem;

   .tech {
    .techContainer {
     display: flex;
     margin-bottom: 1rem;

     h1 {
      width: 30%;
      color: ${({ theme }) => theme.primaryColor};
      font-size: 1rem;
      font-weight: 600;
     }
     .skills {
      width: auto;
      line-height: 2rem;
      span {
       margin-right: 0.9rem;
      }
     }
    }
   }
  }
 }

 // for mobile phones
 @media only screen and (max-width: 767px) {
  width: auto;
  height: auto;

  .aboutPageContainer {
   width: 90%;
  }

  .aboutContainer {
   display: block;
   height: auto;

   ::before {
    content: none;
   }

   .aboutInfo {
    width: 100%;
    font-size: 0.8rem;
    line-height: 1.2rem;
    text-align: justify;

    .tech {
     .techContainer {
      display: block;
      margin-bottom: 1rem;

      h1 {
       width: 100%;
       margin-bottom: 0.6rem;
       font-size: 0.9rem;
       font-weight: 600;
      }
      .skills {
       width: 100%;
       line-height: 1.2rem;
       text-align: left;
       span {
        margin: 0 0.5rem 0 0;

        :last-child {
         margin: 0;
        }
       }
      }
     }
    }
   }
  }
 }

 // tablets
 @media only screen and (min-width: 768px) and (max-width: 1024px) {
  width: 100%;
  height: auto;

  .aboutPageContainer {
   width: 90%;
   margin: auto;
  }

  .aboutContainer {
   margin: 2rem auto auto auto;
   position: relative;
   height: auto;

   .aboutInfo {
    margin-top: 2rem;
    width: 55%;
    line-height: 1.7rem;

    .tech {
     width: 90vw;
     .techContainer {
      margin-bottom: 1rem;

      h1 {
       font-size: 1rem;
       width: 30%;
      }
      .skills {
       display: flex;
       flex-wrap: wrap;
       width: auto;
       line-height: 2rem;
       span {
        margin-right: 0.9rem;
       }
      }
     }
    }
   }
  }
 }

 // for HD
 @media only screen and (min-width: 1024px) {
  width: auto;
  height: auto;

  .aboutPageContainer {
   width: 1080px;
   margin: auto;
  }

  .aboutContainer {
   height: auto;
   margin: 4rem 0 6rem 0;
  }
 }
 // for full HD
 @media only screen and (min-width: 1920px) {
  width: auto;
  height: auto;

  .aboutPageContainer {
   width: 1440px;
   margin: auto;
  }

  .aboutContainer {
   height: auto;
   margin: 4rem 0 6rem 0;
  }
 }

 // for Quad HD (2k)
 @media only screen and (min-width: 2560px) {
  height: auto;

  .aboutPageContainer {
   width: 1440px;
   margin: auto;
  }

  .aboutContainer {
   .aboutInfo {
    font-size: 1.2rem;
    margin: 10rem 0 11rem 0;
    line-height: 2rem;

    .tech {
     .techContainer {
      h1 {
       font-size: 1.2rem;
      }
      .skills {
       line-height: 2.2rem;
       width: auto;
      }
     }
    }
   }
  }
 }

 // UHD
 @media only screen and (min-width: 3840px) {
  /* width: 2160px; */
  width: auto;
  height: auto;

  .aboutPageContainer {
   width: 2160px;
   margin: auto;
  }

  .aboutContainer {
   height: auto;

   .aboutInfo {
    margin-top: 3rem;
    width: 65%;
    font-size: 1.5rem;
    line-height: 2.8rem;

    .tech {
     .techContainer {
      display: flex;
      margin-bottom: 1rem;

      h1 {
       font-size: inherit;
       width: 30%;
       position: relative;
      }
     }
    }
   }
  }
 }
`;
