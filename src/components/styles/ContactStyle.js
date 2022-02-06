import styled from "styled-components";

export const ContactStyle = styled.section`
 width: ${({ theme }) => theme.width};
 margin: auto;
 height: 100vh;

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
  }
  .linksContainer {
   display: flex;
   margin-top: 2.5rem;
  }
 }

 // for mobile phones
 @media only screen and (max-device-width: 768px) {
  width: 90%;
  margin: auto;
  height: auto;

  .aboutContainer {
   display: block;
   height: auto;

   .contactInfo {
    h1 {
     font-size: 1.5rem;
     margin: 3rem 0 2rem 0;
    }

    .contactText {
     font-size: 0.8rem;
     line-height: 1.1rem;
    }

    .emailContainer {
     display: none;
    }

    .linksContainer {
     display: flex;
     margin-top: 2rem;
    }
   }
  }
 }

 // tablet
 @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
  width: 90%;
  margin: auto;
  height: auto;

  .aboutContainer {
   margin: 4rem auto 0 auto;
   height: auto;

   .contactInfo {
    width: 50%;
    padding-right: 1rem;

    h1 {
     margin-bottom: 2rem;
    }

    .emailContainer {
     width: auto;
     margin-top: 2rem;
     padding: 1rem;
     border-radius: 8px;
     overflow: hidden;

     .emailIconContainer {
      margin-right: 2rem;
      border-radius: 6px;
     }

     .emailTextContainer {
      .email {
       font-size: 1rem;
      }
     }
    }

    .linksContainer {
     margin-top: 2rem;
    }
   }
  }
 }

 // hd
 @media only screen and (min-width: 1024px) {
  width: 1000px;
  height: auto;

  .aboutContainer {
   margin: 8rem 0 11rem 0;

   .contactInfo {
    h1 {
     font-size: 3rem;
     margin-bottom: 3rem;
    }

    p {
     font-size: 1rem;
    }

    .emailContainer {
     margin-top: 3rem;
     width: 60%;
    }
   }
  }
 }

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

 // UHD
 @media only screen and (min-width: 3840px) {
  width: 2160px;
  margin: auto;
  height: auto;

  .aboutContainer {
   height: auto;

   .contactInfo {
    h1 {
     font-size: 3rem;
     margin-bottom: 3rem;
    }

    p {
     font-size: 1.8rem;
    }

    .emailContainer {
     width: 55%;
     margin-top: 3rem;
     padding: 1.5rem;

     .emailIconContainer {
      padding: 1rem;
      margin-right: 5rem;
     }

     .emailTextContainer {
      position: relative;

      .emailText {
       margin-bottom: 8px;
       font-size: 1.2rem;
      }
      .email {
       font-size: 1.4rem;
      }

      ::after {
       font-size: 1.4rem;
      }
     }
    }

    .linksContainer {
     margin-top: 3rem;
    }
   }
  }
 }
`;
