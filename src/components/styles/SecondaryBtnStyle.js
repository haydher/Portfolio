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
`;
