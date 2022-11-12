import styled from "styled-components";

export const EmailContainerStyle = styled.div`
  align-items: center;
  background-color: ${({ theme }) => theme.bgColor2};
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  margin-top: 2.5rem;
  overflow: hidden;
  padding: 1rem;
  position: relative;
  width: 70%;

  .emailIconContainer {
    align-items: center;
    background-color: ${({ theme }) => theme.bgColor3};
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-right: 3rem;
    overflow: hidden;
    padding: 0.8rem;
    position: relative;

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
      animation: ${({ clipboard }) => clipboard && "opacity 1s ease forwards"};
      background-color: ${({ theme }) => theme.primaryColor};
      border-radius: 100px;
      content: "";
      height: 150%;
      opacity: 0;
      position: absolute;
      transform: ${({ clipboard }) => (clipboard ? "scale(1)" : "scale(0)")};
      transition: transform 0.5s ease;
      width: 150%;

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
`;
