import "./CoreContent.css";
import CV from "../../assets/CV_AXEL_MANGUIAN.pdf";

function CoreContent() {
  return (
    <div className="coreContent" id="home">
      <div className="textContainer">
        <h1 className="coreContentTitle">
          Hello 👋, je suis <span className="colorText">Axel Manguian</span>
        </h1>
        <h2 className="coreContentSubtitle">
          Développeur Web Full-Stack basé en France 🇫🇷
        </h2>
        <p className="description">
          J'adore créer des interfaces modernes et des sites web interactifs,
          en me concentrant sur des expériences utilisateur optimales.
        </p>
        <div className="buttonsContainer">
          <a href="#projects">
            <button className="primaryButton">À propos de moi 🚀</button>
          </a>
          <a href={CV} download>
            <button className="secondaryButton">Télécharger mon CV</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default CoreContent;
