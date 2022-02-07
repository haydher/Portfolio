import styled from "styled-components";

export const HeroFooterStyle = styled.div`
 padding: 3rem;
 .circle {
  position: relative;
  display: flex;
  justify-content: center;
  height: 50px;
  width: 30px;
  margin: auto;
  border: 2px solid ${({ theme }) => theme.textColor};
  border-radius: 100px;
 }

 .dot {
  position: absolute;
  background: ${({ theme }) => theme.textColor};
  height: 2px;
  width: 2px;
  border: 3px solid ${({ theme }) => theme.textColor};
  border-radius: 100px;
  transform: translateY(10px);
  animation: scrollWheel ease-in-out 1.5s infinite alternate;
 }

 @keyframes scrollWheel {
  0% {
   transform: translateY(10px);
  }
  100% {
   transform: translateY(30px);
  }
 }

 .pointer {
  height: 10px;
  width: 10px;
  margin: 4px auto;
  border: 3px solid ${({ theme }) => theme.textColor};
  border-top: none;
  border-left: none;
  transform: rotate(45deg);
 }

 .pointer:first-child {
  opacity: 1;
  animation: opacity ease 1s infinite alternate;
  animation-delay: 1s;
 }

 .pointer:nth-child(even) {
  animation: opacity ease 1s infinite alternate;
  animation-delay: 1.3s;
 }

 .pointer:last-child {
  animation: opacity ease 1s infinite alternate;
  animation-delay: 1.6s;
 }

 @keyframes opacity {
  0% {
   opacity: 1;
  }
  100% {
   opacity: 0.2;
  }
 }

 // for mobile phones
 @media only screen and (max-width: 767px) {
  padding: 3rem 0 0 0;
  .circle {
   display: none;
   visibility: none;
  }

  .dot {
   display: none;
   visibility: none;
  }
 }

 // for tablets
 @media only screen and (min-width: 768px) and (max-width: 1024px) {
  margin: 5rem 0 -15rem 0;
 }
 // for Full HD
 @media only screen and (min-width: 1920px) and (max-width: 2560px) {
  padding: 8rem;
  width: 1440px;
  justify-content: center;
 }

 // for Quad HD (2k)
 @media only screen and (min-width: 2560px) and (max-width: 3840px) {
  padding: 12rem 0 0 0;
  width: 1440px;
  justify-content: center;
 }
 // UHD
 @media only screen and (min-width: 3840px) {
  width: 2160px;
  padding: 3rem;
  .circle {
   height: 80px;
   width: 50px;
   border: 3px solid ${({ theme }) => theme.textColor};
  }

  .dot {
   height: 5px;
   width: 5px;
   border: 5px solid ${({ theme }) => theme.textColor};
   transform: translateY(15px);
  }

  @keyframes scrollWheel {
   0% {
    transform: translateY(15px);
   }
   100% {
    transform: translateY(40px);
   }
  }

  .pointer {
   height: 20px;
   width: 20px;
   margin: 14px auto;
   border: 3px solid ${({ theme }) => theme.textColor};
   border-top: none;
   border-left: none;
   transform: rotate(45deg);
  }

  @keyframes opacity {
   0% {
    opacity: 1;
   }
   100% {
    opacity: 0.2;
   }
  }
 }
`;
