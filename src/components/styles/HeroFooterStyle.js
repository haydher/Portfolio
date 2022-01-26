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
`;
