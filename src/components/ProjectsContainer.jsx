import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import { ProjectsContainerStyle } from "./styles/ProjectsContainerStyle";
import { Projects } from "./Projects";
import { Title } from "./Title";
import { projectsObj } from "./ProjectData";

export const ProjectsContainer = ({ height }) => {
 const titleContainer = useRef(null);

 useEffect(() => {
  const elemHeight = titleContainer.current;
  // get the parent element of the div to get the nav
  const navHeight = elemHeight.parentElement.firstChild.offsetHeight;
  const end = elemHeight.lastChild.offsetHeight;

  titleSticky(navHeight, end);
 }, [height]);

 const titleSticky = (navHeight, end) => {
  gsap.registerPlugin(ScrollTrigger);
  gsap.to(titleContainer.current, {
   scrollTrigger: {
    trigger: document.querySelector("#projects .title"),
    pin: true, // pin the trigger element while active
    start: `top ${navHeight - 5}`, // when the top of the trigger hits the top of the viewport
    end: `${end}`, // end after scrolling 500px beyond the start
    pinSpacing: false,
   },
  });
 };

 return (
  <ProjectsContainerStyle ref={titleContainer} id="projects" height={height}>
   <Title height={height} titleText="Projects" />
   {projectsObj.map((project, index) => {
    return (
     <Projects
      key={index}
      side={project.side}
      imgSrc={project.imgSrc}
      title={project.title}
      description={project.description}
      tech={project.tech}
      links={project.links}
     />
    );
   })}
  </ProjectsContainerStyle>
 );
};
