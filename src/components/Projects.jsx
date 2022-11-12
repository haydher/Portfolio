import { SecondaryBtn } from "./SecondaryBtn";
import { ProjectsStyle } from "./styles/ProjectsStyle";
import { useGetScreenWidth } from "./utils";

export const Projects = ({ project }) => {
  const fadeDelay = 50;
  const mobileView = useGetScreenWidth();
  const mobileWidth = 767;

  return (
    <ProjectsStyle titleColor={project.title.color} side={project.side}>
      <div
        className="imgContainer"
        data-aos={mobileView <= mobileWidth ? "fade-up" : project.side === "left" ? "fade-right" : "fade-left"}
      >
        <img
          alt={`Screenshot for ${project.title.themedName} ${project.title.secondaryName} project`}
          src={project.imgSrc}
        />
      </div>
      <div className="projectInfo">
        <div
          className="projectTitle"
          data-aos={mobileView <= mobileWidth ? "fade-up" : project.side === "right" ? "fade-right" : "fade-left"}
        >
          <a href={project.links[1].url}>
            <h1>
              <span>{project.title.themedName}</span>
              {project.title.secondaryName}
            </h1>
          </a>
        </div>
        <div
          className="descriptionContainer"
          data-aos={mobileView <= mobileWidth ? "fade-up" : project.side === "right" ? "fade-right" : "fade-left"}
          data-aos-delay={fadeDelay + 100}
        >
          <p>{project.description}</p>
        </div>
        <div
          className="techContainer"
          data-aos={mobileView <= mobileWidth ? "fade-up" : project.side === "right" ? "fade-right" : "fade-left"}
          data-aos-delay={fadeDelay + 200}
        >
          {mobileView <= mobileWidth && <p className="techStack">Tech used:</p>}
          <ul>
            {project.tech.map((tech, index) => {
              return <li key={index}>{tech} </li>;
            })}
          </ul>
        </div>
        <div
          className="linksContainer"
          data-aos={mobileView <= mobileWidth ? "fade-up" : project.side === "right" ? "fade-right" : "fade-left"}
          data-aos-delay={fadeDelay + 300}
        >
          {project.links.map((link, index) => {
            return (
              <SecondaryBtn
                key={index}
                img={link.imgName}
                link={link.url}
                margin={
                  mobileView <= mobileWidth ? "fade-up" : project.side === "right" ? "0 1rem 0 0 " : "  0 0 0 1rem"
                }
              />
            );
          })}
        </div>
      </div>
    </ProjectsStyle>
  );
};
