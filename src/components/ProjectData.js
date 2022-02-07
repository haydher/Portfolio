import NitroBg from "../assets/imgs/nitroBg.png";
import GoCryptoBg from "../assets/imgs/goCrypto.png";

export const projectsObj = [
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
