import styled from "styled-components";

export const UserProfileStyle = styled.div`
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

 // for mobile
 @media only screen and (max-device-width: 768px) {
  width: 65%;

  img {
   position: absolute;
   width: 80%;
   left: 50%;
   top: 50%;
   transform: translate(-50%, -51%);
  }
  svg {
   width: 100%;
  }

  @keyframes dash {
   to {
    stroke-dashoffset: 0;
   }
  }
 }

 @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
  position: absolute;
  right: 0;
  top: 30%;
  transform: translate(0, 0);
  img {
   position: relative;
   height: 15rem;
  }
  svg {
   display: none;
  }
 }
`;
