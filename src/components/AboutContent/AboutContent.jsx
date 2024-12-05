import "./AboutContent.css";
import aboutMe from "../../assets/aboutMePic.jpg";

function AboutContent() {
  return (
    <div className="aboutContent" id="aboutme">
      <h1 className="aboutTitle">A propos de moi</h1>
      <div className="aboutContentContainer">
        <div className="aboutContentImage">
          <img src={aboutMe} alt="aboutMe" />
        </div>

        <div className="aboutContentText">
          <p>
            À 20 ans, je suis actuellement en troisième année de BUT
            Informatique. <br></br>Au cours de mes deux premières années d’études, j'ai eu
            l'opportunité de travailler avec plusieurs langages de programmation tels que
            <span className="progColor"> HTML, CSS, JavaScript, PHP, C++, Java... </span> et frameworks modernes tels que
            <span className="progColor"> ReactJS, NextJS, Ionic, Laravel... </span>
          </p>
          <p>
            J’ai ensuite pu mette en pratique ces connaissances avec un stage
            de 3 mois aux côtés d’un lead développeur web, et durant mon alternance en tant que développeur web.
          </p>
          <p>
            Après mon BUT, je souhaite m'orienter vers un master en développement d'applications web ainsi que me spécialiser en gestion de projet. 
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutContent;
