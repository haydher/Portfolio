import styled from "styled-components";
import blur from "../../assets/imgs/blur.png";

export const AboutStyle = styled.section`
 width: auto;
 height: 100vh;

 .aboutPageContainer {
  width: ${({ theme }) => theme.width};
  margin: auto;
 }

 .title {
  position: relative;
  padding-top: ${({ height }) => height.height + 20}px;
  color: ${({ theme }) => theme.textColor};
  font-size: 2rem;

  h1 {
   font-size: 2rem;
  }

  ::after {
   content: "";
   position: absolute;
   top: calc(${({ height }) => height.height}px + 40px);
   left: 11rem;
   transform: translateY(-50%);
   background-color: ${({ theme }) => theme.textColor};
   opacity: 0.8;
   height: 2px;
   width: 47vw;
   border-radius: 100px;
  }
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
      font-size: 1rem;
      width: 30%;
      position: relative;
     }
     .skills {
      width: 65%;
      line-height: 2rem;
      span {
       margin-right: 0.9rem;
      }
     }
    }
   }
  }

  .aboutPic {
   position: relative;

   img {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -51%);
   }

   svg rect:first-child {
    stroke-dasharray: 606;
    stroke-dashoffset: 1216;
    animation: dash 24s linear infinite;
   }
   svg rect:last-child {
    stroke-dasharray: 664;
    stroke-dashoffset: -1328;
    animation: dash 24s linear infinite;
   }

   @keyframes dash {
    to {
     stroke-dashoffset: 0;
    }
   }
  }
 }

 @media only screen and (min-width: 1080px) {
  /* width: 1400px; */
  height: auto;

  .aboutPageContainer {
   width: 1400px;
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
      }
     }
    }
   }
  }
 }
`;
