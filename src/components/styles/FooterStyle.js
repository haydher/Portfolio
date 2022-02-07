import styled from "styled-components";

export const FooterStyle = styled.footer`
 background-color: ${({ theme }) => theme.bgColor2};
 width: 100%;
 margin-top: 2rem;
 padding: 1rem;
 font-size: 0.8rem;
 text-align: center;
 color: ${({ theme }) => theme.textColor};
`;
