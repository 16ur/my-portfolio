import "./CoreContent.css";
import { FaArrowDown } from "react-icons/fa";
import CV from "../../assets/CV_AXEL_MANGUIAN.pdf";
import { ReactComponent as Avatar } from "../../assets/avatar_smile.svg";
function CoreContent() {
  return (
    <div className="coreContent" id="home">
      <div className="contentWrapper">
        <div className="textContainer">
          <h1 className="coreContentTitle">
            Hello{" "}
            <span role="img" aria-label="wave">
              👋
            </span>
            , je suis <span className="colorText">Axel Manguian</span>
          </h1>
          <h2 className="coreContentSubtitle">
            Développeur Web Full-Stack basé en France 🇫🇷
          </h2>
          <p className="descriptionCore">
            J'adore créer des interfaces modernes et des sites web interactifs,
            en me concentrant sur des expériences utilisateur optimales.
          </p>
          <div className="buttonsContainer">
            <a href="#aboutme">
              <button className="primaryButton">À propos de moi 🚀</button>
            </a>
            <a href={CV} download>
              <button className="secondaryButton">Télécharger mon CV</button>
            </a>
          </div>
        </div>
        <div className="avatarContainer">
          <Avatar className="avatarImage" />
        </div>
      </div>
      <a href="#aboutme" className="scrollDownArrow">
        <FaArrowDown />
      </a>
    </div>
  );
}

export default CoreContent;
