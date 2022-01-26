import styled from "styled-components";

export const MainStyle = styled.section`
 display: flex;
 flex-direction: column;
 justify-content: flex-end;
 margin: auto;
 width: ${({ theme }) => theme.width};
 height: 100vh;
`;
