import styled from "styled-components";

export const HeroStyle = styled.div`
 display: flex;

 .heroLeft {
  display: flex;
  align-items: center;
  width: 50%;

  .heading,
  .title,
  .description,
  .heroBtns {
   margin-bottom: 1.5rem;
  }

  .heading {
   position: relative;
   font-size: 2rem;
   font-weight: 500;
   color: ${({ theme }) => theme.textColor};

   .blur {
    position: absolute;
    top: -25vh;
    left: -50%;
    height: 80vh;
    z-index: -1;
    user-select: none;
   }

   /* ::after {
    content: url("../imgs/pointer.svg");
    position: absolute;
    top: -50%;
    right: 10%;
   } */
  }

  .title {
   display: flex;
   align-items: center;
   font-size: 4.5rem;
   font-weight: 600;
   margin-top: 3rem;

   #webDevTitle path {
    stroke: ${({ theme }) => theme.primaryColor};
    fill: transparent;

    :nth-child(1) {
     stroke-dasharray: 388.448;
     stroke-dashoffset: 388.448;
     animation: stroke 1.5s ease forwards 0.8s, fill 1s ease forwards 2.5s;
    }
    :nth-child(2) {
     stroke-dasharray: 211.225;
     stroke-dashoffset: 211.225;
     animation: stroke 1.5s ease forwards 0.9s, fill 1s ease forwards 2.5s;
    }
    :nth-child(3) {
     stroke-dasharray: 242.128;
     stroke-dashoffset: 242.128;
     animation: stroke 1.5s ease forwards 1s, fill 1s ease forwards 2.5s;
    }
    :nth-child(4) {
     stroke-dasharray: 277.114;
     stroke-dashoffset: 277.114;
     animation: stroke 1.5s ease forwards 1.1s, fill 1s ease forwards 2.5s;
    }
    :nth-child(5) {
     stroke-dasharray: 211.226;
     stroke-dashoffset: 211.226;
     animation: stroke 1.5s ease forwards 1.2s, fill 1s ease forwards 2.5s;
    }
    :nth-child(6) {
     stroke-dasharray: 163.876;
     stroke-dashoffset: 163.876;
     animation: stroke 1.5s ease forwards 1.3s, fill 1s ease forwards 2.5s;
    }
    :nth-child(7) {
     stroke-dasharray: 211.225;
     stroke-dashoffset: 211.225;
     animation: stroke 1.5s ease forwards 1.4s, fill 1s ease forwards 2.5s;
    }
    :nth-child(8) {
     stroke-dasharray: 122.836;
     stroke-dashoffset: 122.836;
     animation: stroke 1.5s ease forwards 1.5s, fill 1s ease forwards 2.5s;
    }
    :nth-child(9) {
     stroke-dasharray: 189.003;
     stroke-dashoffset: 189.003;
     animation: stroke 1.5s ease forwards 1.6s, fill 1s ease forwards 2.5s;
    }
    :nth-child(10) {
     stroke-dasharray: 241.904;
     stroke-dashoffset: 241.904;
     animation: stroke 1.5s ease forwards 1.7s, fill 1s ease forwards 2.5s;
    }
    :nth-child(11) {
     stroke-dasharray: 211.226;
     stroke-dashoffset: 211.226;
     animation: stroke 1.5s ease forwards 1.8s, fill 1s ease forwards 2.5s;
    }
    :nth-child(12) {
     stroke-dasharray: 126.39;
     stroke-dashoffset: 126.39;
     animation: stroke 1.5s ease forwards 1.9s, fill 1s ease forwards 2.5s;
    }

    @keyframes stroke {
     to {
      stroke-dashoffset: 0;
     }
    }
    @keyframes fill {
     from {
      fill: transparent;
     }
     to {
      fill: ${({ theme }) => theme.primaryColor};
     }
    }
   }
  }

  .description {
   font-size: 1rem;
   color: ${({ theme }) => theme.textColor};
  }

  .heroBtns {
   .CTA {
    position: relative;
    color: ${({ theme }) => theme.textColor};
    font-weight: 500;
    overflow: hidden;
    cursor: pointer;

    ::before {
     background-color: ${({ theme }) => theme.secondaryColor};
     content: "";
     position: absolute;
     left: 0%;
     transform: translateX(-100%);
     height: 100%;
     width: 100%;
     transition: transform 0.2s ease-out;
     z-index: -1;
    }
    ::after {
     background-color: ${({ theme }) => theme.primaryColor};
     content: "";
     position: absolute;
     left: 0;
     height: 100%;
     width: 100%;
     transition: transform 0.2s ease-out;
     z-index: -1;
    }

    :hover::before {
     transform: translateX(0%);
     transition: transform 0.4s ease-out;
    }
    :hover::after {
     transform: translateX(100%);
     transition: transform 0.4s ease-out;
     color: white;
    }
   }
   .resume {
    position: relative;
    color: ${({ theme }) => theme.textColor};
    border: 1px solid ${({ theme }) => theme.textColor};
    cursor: pointer;
    transition: color 0.4s ease-out;
    overflow: hidden;

    ::before {
     background-color: ${({ theme }) => theme.textColor};
     content: "";
     position: absolute;
     left: 0%;
     transform: translateX(-100%);
     height: 100%;
     width: 100%;
     transition: transform 0.2s ease-out;
     z-index: -1;
    }

    :hover::before {
     transform: translateX(0%);
     transition: transform 0.4s ease-out;
    }
    :hover {
     color: black;
     transition: color 0.3s ease-out;
    }
   }
  }
  .heroLinks {
   display: flex;
   margin-top: 2.5rem;
  }
 }

 .heroRight {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  width: 50%;

  canvas {
   height: 400px;
   width: 400px;
  }

  .memoji {
   position: absolute;
   display: flex;
   justify-content: center;
   align-items: center;
   height: 400px;
   width: 400px;

   img {
    height: 300px;
    user-select: none;
   }
  }
 }
`;
