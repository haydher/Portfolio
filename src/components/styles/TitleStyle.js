import styled from "styled-components";

export const TitleStyle = styled.div`
 background-color: ${({ theme }) => theme.bgColor};
 position: relative;
 margin-top: ${({ height }) => height + 20}px;
 color: ${({ theme }) => theme.textColor};
 font-size: 2rem;

 h1 {
  font-size: 2rem;
  width: fit-content;
 }

 ::after {
  content: "";
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  background-color: ${({ theme }) => theme.textColor};
  opacity: 0.8;
  height: 2px;
  width: calc(100% - ${({ titleWidth }) => titleWidth + 20}px);
  border-radius: 100px;
 }

 @media only screen and (max-device-width: 768px) {
  h1 {
   font-size: 1.5rem;
   width: fit-content;
  }
 }
`;
