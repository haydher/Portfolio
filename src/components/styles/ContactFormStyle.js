import styled from "styled-components";

export const ContactFormStyle = styled.div`
 width: 45%;
 padding: 0;

 .formContainer {
  background-color: ${({ theme }) => theme.bgColor2};
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem;
  border-radius: 10px;
  /* width: 45%; */
  width: 100%;

  .header {
   margin-bottom: 2.5rem;
  }

  .error {
   box-sizing: border-box;
   border: 3px solid ${({ theme }) => theme.error};
   border-radius: 10px;

   .placeholder {
    color: ${({ theme }) => theme.error} !important;
    font-weight: 600;
   }
  }

  .error input:focus,
  .error textarea:focus {
   outline: 2px solid ${({ theme }) => theme.error};
  }

  .flexContainer {
   display: flex;
   justify-content: space-between;

   .inputContainer {
    width: 48%;

    input {
     width: 100%;
    }
   }
  }
  .inputContainer {
   position: relative;
   display: flex;
   align-items: center;
   margin-bottom: 2.5rem;
   height: auto;

   input,
   textarea {
    background-color: ${({ theme }) => theme.bgColor3};
    padding: 0.8rem 1rem;
    border-radius: 6px;
    width: 100%;
    border: none;
    color: ${({ theme }) => theme.textColor};
    resize: none;
    line-height: 1.5rem;
   }

   textarea {
    width: 100%;
    min-height: 10rem;
    resize: vertical;
   }

   .placeholder {
    position: absolute;
    margin: auto;
    top: 50%;
    left: 0;
    transform: translate(1rem, -50%);
    color: ${({ theme }) => theme.textColor};
    user-select: none;
    pointer-events: none;
    font-size: 0.8rem;
    transition: transform 0.2s ease, font-size 0.2s ease;
   }

   textarea ~ .placeholder {
    top: 1.5rem;
   }

   // animate the placeholder text to the top of form field
   input:focus ~ .placeholder,
   textarea:focus ~ .placeholder,
   input:not(:placeholder-shown) ~ .placeholder,
   textarea:not(:placeholder-shown) ~ .placeholder {
    transform: translate(0, -300%);
    font-size: 0.9rem;
    transition: transform 0.2s ease, font-size 0.2s ease;
   }
  }

  .sendBtn {
   display: flex;
   align-items: center;

   .formError p {
    color: ${({ theme }) => theme.error};
    font-size: 0.9rem;

    :first-child {
     margin-bottom: 0.5rem;
    }
   }
   button {
    background-color: ${({ theme }) => theme.primaryColor};
    position: relative;
    margin-top: 0;
    padding: 0.8rem 2.5rem;
    font-size: 1rem;
    color: ${({ theme }) => theme.textColor};
    transition: background 0.1s ease;

    :hover {
     background-color: ${({ theme }) => theme.secondaryColor};
     transition: background 0.2s ease;
    }
   }

   .checkMarkContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 2.2rem;
    height: 2.2rem;

    svg {
     width: 100%;
     height: 100%;
     border-radius: 50%;
     display: block;
     stroke-width: 2;
     stroke: white;
     stroke-miterlimit: 10;
     box-shadow: inset 0px 0px 0px #399a20;
     /* animation: checkFill 0.4s ease-in-out 0.4s forwards, scale 0.3s ease-in-out 0.9s both, hideSvg 0.2s ease forwards 3s; */
     animation: ${({ showCheckMark }) =>
      showCheckMark === "success" &&
      "checkFill 0.4s ease-in-out 0.4s forwards, scale 0.3s ease-in-out 0.9s both, hideSvg 0.2s ease forwards 3s;"};

     circle {
      stroke-dasharray: 166;
      stroke-dashoffset: ${({ showCheckMark }) => (showCheckMark === "pending" ? "86" : "166")};
      stroke-width: 2;
      stroke-miterlimit: 10;
      stroke: #399a20;
      fill: none;
      /* animation: stroke 0.6s cubic-bezier(0.65, 0, 0.45, 1) forwards; */
      animation: ${({ showCheckMark }) =>
       showCheckMark === "pending"
        ? "rotate 01s linear infinite"
        : "stroke 0.6s cubic-bezier(0.65, 0, 0.45, 1) forwards"};
      transform-origin: center center;
     }

     path {
      transform-origin: 50% 50%;
      stroke-dasharray: 48;
      stroke-dashoffset: 48;
      animation: ${({ showCheckMark }) =>
       showCheckMark === "success" && "stroke 0.3s cubic-bezier(0.65, 0, 0.45, 1) 0.8s forwards"};
     }

     // rotate a spinner if pending
     @keyframes rotate {
      100% {
       transform: rotate(360deg);
      }
     }

     // fill stroke if success
     @keyframes stroke {
      100% {
       stroke-dashoffset: 0;
      }
     }

     @keyframes scale {
      0%,
      100% {
       transform: none;
      }
      50% {
       transform: scale3d(1.1, 1.1, 1);
      }
     }

     // fill stroke if success
     @keyframes checkFill {
      100% {
       box-shadow: inset 0px 0px 0px 30px #399a20;
      }
     }

     // scale down svg after Xs to hide it
     @keyframes hideSvg {
      from {
       width: 100%;
       height: 100%;
      }
      to {
       height: 0rem;
       width: 0rem;
      }
     }
    }
   }
  }
 }

 // for mobile
 @media only screen and (max-device-width: 767px) {
  width: 100%;

  .formContainer {
   margin-top: 2rem;
   padding: 1rem;
   border-radius: 10px;

   .header {
    margin-bottom: 2rem;
    font-size: 1.2rem;
   }

   .flexContainer {
    display: block;

    .inputContainer {
     width: 100%;
    }
   }

   .inputContainer {
    margin-bottom: 2rem;
   }

   input,
   textarea {
    line-height: 1.1rem;
   }

   textarea {
    height: 12rem;
   }

   .sendBtn {
    display: flex;
    align-items: center;

    .formError p {
     font-size: 0.7rem;

     :first-child {
      margin-bottom: 0.3rem;
     }
    }
    button {
     padding: 0.8rem 2rem;
     font-size: 1rem;
     margin-right: 1rem;
    }
   }
  }
 }

 // for tablets
 @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
  width: 50%;
  .formContainer {
   padding: 1.5rem;
   border-radius: 8px;

   .header {
    margin-bottom: 2rem;
   }

   .flexContainer {
    display: block;

    .inputContainer {
     width: 100%;
    }
   }
   .inputContainer {
    margin-bottom: 2rem;

    textarea {
     width: 100%;
     height: 12rem;
    }
   }
  }
 }

 // for HD
 @media only screen and (min-width: 1080px) {
  width: 1080px;

  padding: 2rem;
  width: 40%;

  .header {
   margin-bottom: 2rem;
  }

  .inputContainer {
   margin-bottom: 2rem;

   textarea {
    height: 14rem;
   }
  }
 }

 // for full HD
 @media only screen and (min-width: 1920px) {
  width: 1400px;

  padding: 2.5rem;
  width: 40%;

  .header {
   margin-bottom: 3rem;
  }

  .inputContainer {
   margin-bottom: 3rem;

   textarea {
    height: 15rem;
   }
  }
 }

 // UHD
 @media only screen and (min-width: 3840px) {
  .header {
   margin-bottom: 3rem;
  }

  .flexContainer {
   .inputContainer {
    input {
     font-size: 1.3rem;
    }
   }
  }
  .inputContainer {
   margin-bottom: 3rem;

   .placeholder {
    font-size: 1.3rem;
   }
   input,
   textarea {
    background-color: ${({ theme }) => theme.bgColor3};
    padding: 1rem 1.2rem;
    line-height: 1.5rem;
   }

   textarea {
    font-size: 1.3rem;
    height: 25rem;
   }

   textarea ~ .placeholder {
    top: 1.5rem;
   }

   // animate the placeholder text to the top of form field
   input:focus ~ .placeholder,
   textarea:focus ~ .placeholder,
   input:not(:placeholder-shown) ~ .placeholder,
   textarea:not(:placeholder-shown) ~ .placeholder {
    font-size: 1rem;
   }
  }

  .sendBtn {
   .formError p {
    font-size: 1.3rem;
   }
   button {
    margin-top: 0;
    padding: 1rem 2.5rem;
    font-size: 1.2rem;
   }
  }
 }
`;
