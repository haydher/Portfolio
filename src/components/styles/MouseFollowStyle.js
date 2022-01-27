import styled from "styled-components";

export const MouseFollowStyle = styled.div`
 position: absolute;
 height: 40px;
 width: 40px;
 border: 3px solid ${({ theme }) => theme.primaryColor};
 border-radius: 100px;
 transform: translate(-40%, -40%);
 z-index: 50;
`;
