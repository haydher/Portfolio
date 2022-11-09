import NitroBg from "../assets/imgs/nitroBg.png";
import GoCryptoBg from "../assets/imgs/goCrypto.png";
import Placeholder from "../assets/imgs/placeholder.png";
import Game2048 from "../assets/imgs/2048.png";

export const projectsObj = [
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
 {
  side: "left",
  imgSrc: Game2048,
  title: ["2048", " Game", "#ffbb88"],
  description:
   "One-to-one clone of the early 2010s 2048 game. The game is built using ReactJs for the UI and animations of the tiles.",
  tech: ["ReactJs", "Redux", "Styled Components", "React-simple-animations", "Netlify"],
  links: [
   ["github", "https://github.com/haydher/2048"],
   ["website", "https://play-2048.netlify.app/"],
  ],
 },
 {
  side: "right",
  imgSrc: Placeholder,
  title: ["Place", "holder", "#4A86E8"],
  description:
   "Placeholder provides randomly generated JSON data for front-end developers to test their API or use it for showing quick demos or examples of fetch API. Requests can have multiple properties and queries to change what the API responds with.",
  tech: ["Node.js", "Express.js", "EJS", "Heroku", "Unsplash API"],
  links: [
   ["github", "https://github.com/haydher/dev-api"],
   ["website", "https://placeholder-api-dev.herokuapp.com/"],
  ],
 },
 {
  side: "left",
  imgSrc: NitroBg,
  title: ["Nitro", "Engine", "#FFD369"],
  description:
   "Fully functional E-commerce website. Clothing items and other products are picked based on user needs. Fully functioning Admin panel to track remaining stock and update existing stock.",
  tech: ["Node.js", "Express.js", "MongoDb", "Mongoose", "EJS", "Heroku"],
  links: [
   ["github", "https://github.com/haydher/NitroEngine-Heroku"],
   ["website", "https://nitroengine.herokuapp.com/"],
  ],
 },
];
