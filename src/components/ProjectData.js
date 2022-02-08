import NitroBg from "../assets/imgs/nitroBg.png";
import GoCryptoBg from "../assets/imgs/goCrypto.png";

export const projectsObj = [
 {
  side: "left",
  imgSrc: NitroBg,
  title: ["Nitro", "Engine", "#FFD369"],
  description:
   "Fully functional E-commerce website. Clothing items and other products are picked based on user needs. Fully functioning Admin panel to track remaining stock and update existing stock.",
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
   "Cryptocurrency tracking website. Data is fetched from third-party sources to show real-time price changes and to view historical prices for over 10k coins. Use of local storage with Redux to save the User's bookmarked coins.",
  tech: ["ReactJs", "Redux Toolkit", "Styled Components", "Node.Js", "REST API"],
  links: [
   ["github", "https://github.com/haydher/Crypto-tracker"],
   ["website", "https://go-crypto.netlify.app/"],
  ],
 },
];
