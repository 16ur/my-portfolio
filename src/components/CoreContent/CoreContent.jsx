import "./CoreContent.css";
import CV from "../../assets/CV_AXEL_MANGUIAN.pdf";

function CoreContent() {
  return (
    <div className="coreContent" id="home">
      <div className="contentWrapper">
        <div className="textContainer">
          <p className="greeting">Bonjour, je suis</p>
          <h1 className="coreContentTitle">Axel Manguian</h1>
          <h2 className="coreContentSubtitle">
            Développeur Web Full-Stack basé à Marseille
          </h2>
          <p className="descriptionCore">
            Fraîchement diplômé, je me spécialise dans le développement web full-stack,
            avec l'envie constante d'apprendre et d'innover.
          </p>
          <div className="buttonsContainer">
            <a href="#aboutme" className="linkButton">
              En savoir plus
            </a>
            <a href={CV} download className="linkButton secondary">
              Télécharger mon CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CoreContent;
