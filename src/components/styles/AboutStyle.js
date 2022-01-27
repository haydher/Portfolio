import styled from "styled-components";

export const AboutStyle = styled.section`
 width: ${({ theme }) => theme.width};
 margin: auto;
 height: 100vh;

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
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70%;
  color: ${({ theme }) => theme.textColor};

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

      :first-child {
       content: "asd";
      }
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
`;
