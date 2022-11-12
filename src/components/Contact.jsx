import { ContactForm } from "./ContactForm";
import { ContactStyle } from "./styles/ContactStyle";
import { SecondaryBtn } from "./SecondaryBtn";
import { Title } from "./Title";
import { useGetScreenWidth } from "./utils";
import EmailContainer from "./EmailContainer";

const mobileWidth = 767;
const email = "haider0612@gmail.com";

export const Contact = ({ height }) => {
  const mobileView = useGetScreenWidth();

  return (
    <ContactStyle height={height} id="contact">
      <Title height={height} titleText="Contact" />
      <div className="aboutContainer">
        <div className="contactInfo" data-aos={mobileView <= mobileWidth ? "fade-up" : "fade-right"}>
          <h1>Lets Chat!</h1>
          <p className="contactText">Got a question, or proposal, or just want to say hello? Send me a message!</p>

          <EmailContainer email={email} />

          {mobileView > mobileWidth && (
            <div className="linksContainer">
              <SecondaryBtn link="https://github.com/haydher" img="Github" margin="0 1rem 0 0" />
              <SecondaryBtn link="https://www.linkedin.com/in/haydher/" img="Linkedin" />
            </div>
          )}
        </div>

        <ContactForm />

        {mobileView <= mobileWidth && (
          <div className="linksContainer">
            <SecondaryBtn link="https://github.com/haydher" img="Github" margin="0 1rem 0 0" hideBefore={true} />
            <SecondaryBtn link="https://www.linkedin.com/in/haydher/" img="Linkedin" hideBefore={true} />
            <SecondaryBtn link={`mailto:${email}`} img="email" hideBefore={true} />
          </div>
        )}
      </div>
    </ContactStyle>
  );
};
