import styled from "styled-components";

export const ContactStyle = styled.section`
  scroll-margin-top: ${({ height }) => height}px;
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
    }
    .linksContainer {
      display: flex;
      margin-top: 2.5rem;
    }
  }

  // for mobile phones
  @media only screen and (max-width: 767px) {
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
  @media only screen and (min-width: 768px) and (max-width: 1024px) {
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
    width: 1080px;
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
