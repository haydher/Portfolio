import { Projects } from "./Projects";
import { ProjectsContainerStyle } from "./styles/ProjectsContainerStyle";
import { projectsObj } from "./ProjectData";
import { Title } from "./Title";

export const ProjectsContainer = ({ height }) => {
  return (
    <ProjectsContainerStyle id="projects" height={height}>
      <Title height={height} titleText="Projects" />
      {projectsObj.map((project, index) => {
        return <Projects key={index} project={project} />;
      })}
    </ProjectsContainerStyle>
  );
};
