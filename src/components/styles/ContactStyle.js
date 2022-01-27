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
    margin-bottom: 1.5rem;
   }

   .emailContainer {
    background-color: ${({ theme }) => theme.bgColor2};
    display: flex;
    align-items: center;
    width: 70%;
    margin-top: 1.5rem;
    padding: 1rem;
    border-radius: 10px;

    .emailIconContainer {
     background-color: ${({ theme }) => theme.bgColor3};
     display: flex;
     justify-content: center;
     align-items: center;
     padding: 0.8rem;
     margin-right: 3rem;
     border-radius: 8px;
    }

    .emailText {
     margin-bottom: 5px;
    }
    .email {
     color: ${({ theme }) => theme.primaryColor};
     font-size: 1.2rem;
    }
   }

   .linksContainer {
    display: flex;
    margin-top: 1.5rem;
   }
  }
 }

 .contactForm {
  background-color: ${({ theme }) => theme.bgColor2};
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem;
  border-radius: 10px;
  width: 45%;

  .header {
   margin-bottom: 2rem;
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
   input,
   textarea {
    background-color: ${({ theme }) => theme.bgColor3};
    padding: 0.8rem 1rem;
    border-radius: 6px;
    margin-bottom: 2rem;
    width: 100%;
    border: none;
    color: ${({ theme }) => theme.textColor};
    resize: none;
    line-height: 1.5rem;

    ::placeholder {
     color: ${({ theme }) => theme.textColor};
    }
   }

   textarea {
    width: 100%;
    height: 10rem;
   }
  }

  .sendBtn {
   button {
    background-color: ${({ theme }) => theme.primaryColor};
    margin-top: 0;
    padding: 0.8rem 2.5rem;
    font-size: 1rem;
    color: ${({ theme }) => theme.textColor};
    /* border: 1px solid ${({ theme }) => theme.textColor}; */
   }
  }
 }
`;
