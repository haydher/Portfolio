import styled from "styled-components";

export const ContactStyle = styled.section`
 width: ${({ theme }) => theme.width};
 margin: auto;
 height: 100vh;

 .title {
  position: relative;
  padding-top: ${({ height }) => height + 20}px;
  color: ${({ theme }) => theme.textColor};

  h1 {
   font-size: 2rem;
  }

  ::after {
   content: "";
   position: absolute;
   top: calc(${({ height }) => height}px + 40px);
   left: 9rem;
   transform: translateY(-50%);
   background-color: ${({ theme }) => theme.textColor};
   opacity: 0.8;
   height: 2px;
   width: 50vw;
   border-radius: 100px;
  }
 }

 .aboutContainer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80%;
  color: ${({ theme }) => theme.textColor};

  .contactInfo {
   h1 {
    color: ${({ theme }) => theme.primaryColor};
    font-size: 2rem;
    margin-bottom: 2.5rem;
   }

   .emailContainer {
    background-color: ${({ theme }) => theme.bgColor2};
    position: relative;
    display: flex;
    align-items: center;
    width: 70%;
    margin-top: 2.5rem;
    padding: 1rem;
    border-radius: 10px;
    overflow: hidden;

    cursor: pointer;

    .emailIconContainer {
     background-color: ${({ theme }) => theme.bgColor3};
     position: relative;
     display: flex;
     flex-direction: column;
     justify-content: center;
     align-items: center;
     padding: 0.8rem;
     margin-right: 3rem;
     border-radius: 8px;
     overflow: hidden;

     svg {
      transform: translateY(0%);
      transition: transform 0.2s cubic-bezier(0.71, 0.15, 0.76, 1.4);
     }

     .clipboard {
      position: absolute;
      bottom: -80%;
     }

     // changed the background to show copy confirm
     ::after {
      content: "";
      position: absolute;
      background-color: ${({ theme }) => theme.primaryColor};
      height: 150%;
      width: 150%;
      border-radius: 100px;
      opacity: 0;
      transform: ${({ clipboard }) => (clipboard ? "scale(1)" : "scale(0)")};
      transition: transform 0.5s ease;
      animation: ${({ clipboard }) => clipboard && "opacity 1s ease forwards"};

      @keyframes opacity {
       from {
        opacity: 1;
       }
       to {
        opacity: 0;
       }
      }
     }
    }

    .emailTextContainer {
     position: relative;
     transform: ${({ clipboard }) => clipboard && "translateY(-150%)"};
     transition: transform 0.2s cubic-bezier(0.71, 0.15, 0.76, 1.4);

     .emailText {
      margin-bottom: 5px;
     }
     .email {
      color: ${({ theme }) => theme.primaryColor};
      font-size: 1.2rem;
     }

     ::after {
      content: "${({ copyText }) => copyText}";
      position: absolute;
      bottom: -120%;
      font-weight: 600;
     }
    }

    :hover {
     .emailIconContainer {
      svg {
       transform: translateY(-200%);
       transition: transform 0.3s cubic-bezier(0.26, -0.49, 0.11, 0.8);
      }
     }
    }

    @keyframes hideEmailIcon {
     to {
      transform: translateY(-150%);
     }
    }
   }

   .linksContainer {
    display: flex;
    margin-top: 2.5rem;
   }
  }
 }

 /*  
 // for full HD
 @media only screen and (min-width: 1920px) {
  background: green;
  width: 1440px;
  justify-content: center;
 }
 // for Quad HD (2k)
 @media only screen and (min-width: 2560px) {
  background: red;
  justify-content: center;
 } */

 // for full HD
 @media only screen and (min-width: 1920px) {
  width: 1440px;
  height: auto;

  .aboutContainer {
   margin: 6rem 0 11rem 0;

   .contactInfo {
    h1 {
     font-size: 3rem;
     margin-bottom: 3rem;
    }

    p {
     font-size: 1.3rem;
    }

    .emailContainer {
     margin-top: 3rem;
     width: 60%;
    }
   }
  }
 }

 // for Quad HD (2k)
 @media only screen and (min-width: 2560px) {
  width: 1440px;
  height: auto;
  .title {
   ::after {
    width: 49vw;
   }
  }

  .aboutContainer {
   margin: 10rem 0 11rem 0;

   .contactInfo {
    h1 {
     font-size: 3rem;
     margin-bottom: 3rem;
    }

    p {
     font-size: 1.3rem;
    }

    .emailContainer {
     margin-top: 3rem;
     width: 60%;
    }
   }
  }
 }
`;
