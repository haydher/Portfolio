export const About = () => {
 return (
  <section>
   <div className="title">
    <h1>About Me</h1>
   </div>
   <div className="aboutContainer">
    <div className="aboutInfo">
     <p>
      Hi. My name is Ali Haider (Haydher). Over 3+ years. I had the opportunity to work in a vast spectrum of web
      technologies which let me get experience in user interface, testing, debugging, deployment, and numerous other
      full-stack technologies. This helped me build numerous websites for start-ups and businesses. I currently work
      remotely as a freelancer and I am open to new opportunities Here are few technologies I’ve been working with
      recently:
     </p>
     <div className="tech">
      <div className="techContainer">
       <h1>Web & Database</h1>
       <p>HTML CSS JavaScript NodeJs REST API MangoDb Firebase </p>
      </div>
      <div className="techContainer">
       <h1>Frameworks & Libraries</h1>
       <p>ReactJs Redux EJS Mangoose ExpressJS Bootstrap JQuery</p>
      </div>
      <div className="techContainer">
       <h1>Tech</h1>
       <p>Github Figma Photoshop Postman VSCode </p>
      </div>
     </div>
    </div>
    <div className="aboutPic"></div>
   </div>
  </section>
 );
};
