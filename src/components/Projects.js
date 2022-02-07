import { SecondaryBtn } from "./SecondaryBtn";
import { ProjectsStyle } from "./styles/ProjectsStyle";
import { useGetScreenWidth } from "./utils";

export const Projects = ({ imgSrc, title, description, tech, links, side }) => {
 const fadeDelay = 50;

 const mobileView = useGetScreenWidth();
 const mobileWidth = 767;

 return (
  <ProjectsStyle titleColor={title[2]} side={side}>
   <div
    className="imgContainer"
    data-aos={mobileView <= mobileWidth ? "fade-up" : side === "left" ? "fade-right" : "fade-left"}
   >
    <img src={imgSrc} alt="Background for project" />
   </div>
   <div className="projectInfo">
    <div
     className="projectTitle"
     data-aos={mobileView <= mobileWidth ? "fade-up" : side === "right" ? "fade-right" : "fade-left"}
    >
     <h1>
      <span>{title[0]}</span>
      {title[1]}
     </h1>
    </div>
    <div
     className="descriptionContainer"
     data-aos={mobileView <= mobileWidth ? "fade-up" : side === "right" ? "fade-right" : "fade-left"}
     data-aos-delay={fadeDelay + 100}
    >
     <p>{description}</p>
    </div>
    <div
     className="techContainer"
     data-aos={mobileView <= mobileWidth ? "fade-up" : side === "right" ? "fade-right" : "fade-left"}
     data-aos-delay={fadeDelay + 200}
    >
     {mobileView <= mobileWidth && <p className="techStack">Tech used:</p>}
     <ul>
      {tech.map((tech, index) => {
       return <li key={index}>{tech} </li>;
      })}
     </ul>
    </div>
    <div
     className="linksContainer"
     data-aos={mobileView <= mobileWidth ? "fade-up" : side === "right" ? "fade-right" : "fade-left"}
     data-aos-delay={fadeDelay + 300}
    >
     {links.map((link, index) => {
      return (
       <SecondaryBtn
        key={index}
        img={link[0]}
        link={link[1]}
        margin={mobileView <= mobileWidth ? "fade-up" : side === "right" ? "0 1rem 0 0 " : "  0 0 0 1rem"}
       />
      );
     })}
    </div>
   </div>
  </ProjectsStyle>
 );
};
