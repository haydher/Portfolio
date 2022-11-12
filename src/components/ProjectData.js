import Game2048 from "../assets/imgs/2048.png";
import GoCryptoBg from "../assets/imgs/goCrypto.png";
import NitroBg from "../assets/imgs/nitroBg.png";
import Placeholder from "../assets/imgs/placeholder.png";

export const projectsObj = [
  {
    side: "right",
    imgSrc: GoCryptoBg,
    title: {
      color: `#5D78F9`,
      themedName: "Go",
      secondaryName: "Crypto",
    },
    description:
      "Cryptocurrency tracking website. Data is fetched from third-party sources to show real-time price changes and to view historical prices for over 10k coins. Use of local storage with Redux to save the User's bookmarked coins.",
    tech: ["ReactJs", "Redux Toolkit", "Styled Components", "Node.Js", "REST API"],
    links: [
      { imgName: "github", url: "https://github.com/haydher/Crypto-tracker" },
      { imgName: "website", url: "https://go-crypto.netlify.app/" },
    ],
  },
  {
    side: "left",
    imgSrc: Game2048,
    title: {
      color: `#ffbb88`,
      themedName: "2048",
      secondaryName: " Game",
    },
    description:
      "One-to-one clone of the early 2010s 2048 game. The game is built using ReactJs for the UI and animations of the tiles.",
    tech: ["ReactJs", "Redux", "Styled Components", "React-simple-animations", "Netlify"],
    links: [
      { imgName: "github", url: "https://github.com/haydher/2048" },
      { imgName: "website", url: "https://play-2048.netlify.app/" },
    ],
  },
  {
    side: "right",
    imgSrc: Placeholder,
    title: {
      color: `#4A86E8`,
      themedName: "Place",
      secondaryName: "holder",
    },
    description:
      "Placeholder provides randomly generated JSON data for front-end developers to test their API or use it for showing quick demos or examples of fetch API. Requests can have multiple properties and queries to change what the API responds with.",
    tech: ["Node.js", "Express.js", "EJS", "Heroku", "Unsplash API"],
    links: [
      { imgName: "github", url: "https://github.com/haydher/dev-api" },
      { imgName: "website", url: "https://placeholder-api-dev.herokuapp.com/" },
    ],
  },
  {
    side: "left",
    imgSrc: NitroBg,
    title: {
      color: `#FFD369`,
      themedName: "Nitro",
      secondaryName: " Engine",
    },
    description:
      "Fully functional E-commerce website. Clothing items and other products are picked based on user needs. Fully functioning Admin panel to track remaining stock and update existing stock.",
    tech: ["Node.js", "Express.js", "MongoDb", "Mongoose", "EJS", "Heroku"],
    links: [
      { imgName: "github", url: "https://github.com/haydher/NitroEngine-Heroku" },
      { imgName: "website", url: "https://nitroengine.herokuapp.com/" },
    ],
  },
];
