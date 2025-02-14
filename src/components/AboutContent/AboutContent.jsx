import "./AboutContent.css";
import aboutMe from "../../assets/aboutMePic.webp";
import { FaLaptopCode } from "react-icons/fa";

function AboutContent() {
  return (
    <div className="aboutContent" id="aboutme">
      <h1 className="aboutTitle">
        <FaLaptopCode className="iconTitle" /> À propos de moi
      </h1>{" "}
      <div className="aboutContentContainer">
        <div className="aboutContentImage">
          <img src={aboutMe} alt="aboutMe" />
        </div>

        <div className="aboutContentText">
          <p>
            🎓 À 20 ans, je suis actuellement en troisième année de BUT
            Informatique. <br></br>💻 Au cours de mes deux premières années
            d’études, j'ai eu l'opportunité de travailler avec plusieurs
            langages de programmation tels que
            <span className="progColor">
              {" "}
              HTML, CSS, JavaScript, PHP, C++, Java...{" "}
            </span>{" "}
            et frameworks modernes tels que
            <span className="progColor">
              {" "}
              ReactJS, NextJS, Ionic, Laravel...{" "}
            </span>
          </p>

          <p>
            🚀 Après mon BUT, je souhaite continuer mes études et m'orienter
            vers un master ou une école d'ingénieur spécialisé en développement
            d'applications.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutContent;
