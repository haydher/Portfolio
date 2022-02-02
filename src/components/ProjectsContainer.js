import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import { ProjectsContainerStyle } from "./styles/ProjectsContainerStyle";
import { Projects } from "./Projects";
import NitroBg from "../assets/imgs/nitroBg.png";
import GoCryptoBg from "../assets/imgs/goCrypto.png";
import { Title } from "./Title";

const projectsObj = [
 {
  side: "left",
  imgSrc: NitroBg,
  title: ["Nitro", "Engine", "#FFD369"],
  description:
   "E-Commerce website where you can buy items for any season. Clothing items and shoes are picked based on user location. Fully functioning Admin panel to track remaining stock and update current items.",
  tech: ["Node.js", "Express.js", "MangoDB", "Mangoose", "EJS", "Heroku"],
  links: [
   ["github", "https://github.com/haydher/NitroEngine-Heroku"],
   ["website", "https://nitroengine.herokuapp.com/"],
  ],
 },
 {
  side: "right",
  imgSrc: GoCryptoBg,
  title: ["Go", "Crypto", "#5D78F9"],
  description:
   "E-Commerce website where you can buy items for any season. Clothing items and shoes are picked based on user location. Fully functioning Admin panel to track remaining stock and update current items.",
  tech: ["ReactJs", "Redux Toolkit", "Styled Components", "Node.Js", "REST API"],
  links: [
   ["github", "https://github.com/haydher/Crypto-tracker"],
   ["website", "https://go-crypto.netlify.app/"],
  ],
 },
];

export const ProjectsContainer = ({ height }) => {
 const title = useRef(null);
 const titleContainer = useRef(null);

 useEffect(() => {
  const elemHeight = titleContainer.current;
  // get the parent element of the div to get the nav
  const navHeight = elemHeight.parentElement.firstChild.offsetHeight;
  const end = elemHeight.lastChild.offsetHeight + 50;

  titleSticky(navHeight, end);

  return () => {
   // titleSticky.scrollTrigger.kill();
  };
 }, [height]);

 const titleSticky = (navHeight, end) => {
  gsap.registerPlugin(ScrollTrigger);
  gsap.to(titleContainer.current, {
   scrollTrigger: {
    // trigger: title.current,
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
   {/* <h1 className="title">Projects</h1> */}
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
