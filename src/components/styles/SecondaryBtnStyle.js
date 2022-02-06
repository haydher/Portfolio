import styled from "styled-components";

export const SecondaryBtnStyle = styled.div`
 margin: ${({ margin }) => margin};

 .linkBtn {
  background-color: ${({ theme }) => theme.secondaryColor};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.8rem;
  border-radius: 100px;

  svg {
   height: 0.8rem;
   width: 0.8rem;
  }
 }

 // for mobile
 @media only screen and (max-device-width: 768px) {
  margin: 0 1rem 0 0;

  .linkBtn {
   background-color: ${({ theme }) => theme.secondaryColor};
   display: flex;
   justify-content: center;
   align-items: center;
   padding: 0.8rem;
   border-radius: ${({ hideBefore }) => !hideBefore && "5px"};

   svg {
    height: 0.8rem;
    width: 0.8rem;
   }

   :before {
    content: "${({ linkName }) => linkName}";
    display: ${({ hideBefore }) => (hideBefore ? "none" : "block")};
    margin-right: 0.6rem;
    color: ${({ theme }) => theme.textColor};
   }
  }
 }
 @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
  .linkBtn {
   padding: 0.6rem;

   svg {
    height: 0.6rem;
    width: 0.6rem;
   }
  }
 }

 // for full HD
 @media only screen and (min-width: 1920px) and (max-width: 2560px) {
  .linkBtn {
   padding: 0.9rem;

   svg {
    height: 0.9rem;
    width: 0.9rem;
   }
  }
 }
 // for Quad HD (2k)
 @media only screen and (min-width: 2560px) and (max-width: 3840px) {
  .linkBtn {
   padding: 1rem;

   svg {
    height: 1rem;
    width: 1rem;
   }
  }
 }

 // UHD
 @media only screen and (min-width: 3840px) {
  .linkBtn {
   padding: 1rem;

   svg {
    height: 1rem;
    width: 1rem;
   }
  }
 }
`;
