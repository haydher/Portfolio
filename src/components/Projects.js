import { SecondaryBtn } from "./SecondaryBtn";
import { ProjectsStyle } from "./styles/ProjectsStyle";

export const Projects = ({ imgSrc, title, description, tech, links, side }) => {
 const fadeDelay = 50;
 return (
  <ProjectsStyle titleColor={title[2]} side={side}>
   <div className="imgContainer" data-aos={side === "left" ? "fade-right" : "fade-left"}>
    <img src={imgSrc} alt="Background image for project" />
   </div>
   <div className="projectInfo">
    <div className="projectTitle" data-aos={side === "right" ? "fade-right" : "fade-left"}>
     <h1>
      <span>{title[0]}</span>
      {title[1]}
     </h1>
    </div>
    <div
     className="descriptionContainer"
     data-aos={side === "right" ? "fade-right" : "fade-left"}
     data-aos-delay={fadeDelay + 100}
    >
     <p>{description}</p>
    </div>
    <div
     className="techContainer"
     data-aos={side === "right" ? "fade-right" : "fade-left"}
     data-aos-delay={fadeDelay + 200}
    >
     <ul>
      {tech.map((tech) => {
       return <li>{tech} </li>;
      })}
     </ul>
    </div>
    <div
     className="linksContainer"
     data-aos={side === "right" ? "fade-right" : "fade-left"}
     data-aos-delay={fadeDelay + 300}
    >
     {links.map((link) => {
      return <SecondaryBtn img={link[0]} link={link[1]} margin={side === "right" ? "0 1rem 0 0 " : "  0 0 0 1rem"} />;
     })}
    </div>
   </div>
  </ProjectsStyle>
 );
};
