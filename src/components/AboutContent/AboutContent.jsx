import { useState } from "react";
import "./AboutContent.css";
import aboutMe from "../../assets/aboutMePic.webp";
import { FaLaptopCode, FaUserAlt, FaHeart } from "react-icons/fa";

function AboutContent() {
  const [activeTab, setActiveTab] = useState("parcours");

  return (
    <div className="aboutContent" id="aboutme">
      <h1 className="aboutTitle">
        <FaLaptopCode className="iconTitle" /> À propos de moi
      </h1>

      <div className="aboutTabs">
        <button
          className={`tabButton ${activeTab === "parcours" ? "active" : ""}`}
          onClick={() => setActiveTab("parcours")}
        >
          <FaLaptopCode /> Parcours
        </button>
        <button
          className={`tabButton ${activeTab === "softskills" ? "active" : ""}`}
          onClick={() => setActiveTab("softskills")}
        >
          <FaUserAlt /> Soft Skills
        </button>
        <button
          className={`tabButton ${activeTab === "passions" ? "active" : ""}`}
          onClick={() => setActiveTab("passions")}
        >
          <FaHeart /> Passions
        </button>
      </div>

      <div className="aboutContentContainer">
        <div className="aboutContentImage">
          <img src={aboutMe} alt="aboutMe" />
        </div>

        <div className="aboutContentText">
          {activeTab === "parcours" && (
            <>
              <p>
                🎓 À 20 ans, je suis actuellement en troisième année de{" "}
                <span className="progColor">BUT Informatique.</span>
                <br />
                <br></br>💻 Au cours de mes études, j'ai eu l'opportunité de
                travailler avec plusieurs langages de programmation tels que
                <span className="progColor">
                  {" "}
                  HTML, CSS, JavaScript, PHP, C++, Java...{" "}
                </span>
                et frameworks modernes comme
                <span className="progColor">
                  {" "}
                  ReactJS, NextJS, Ionic, Laravel...
                </span>
                <br />
                <br />
              </p>
              <p>
                🚀 Après mon BUT, je souhaite poursuivre mes études vers un
                <span className="progColor"> mastère</span> spécialisé dans le
                domaine de l'intelligence artificielle.
              </p>
            </>
          )}

          {activeTab === "softskills" && (
            <>
              <p>🗣️ Soft Skills / Compétences humaines:</p>
              <ul className="softSkillsList">
                <br />
                <li>💡 Créativité et capacité d’innovation</li>
                <li>🤝 Travail en équipe et collaboration</li>
                <li>🎯 Gestion du temps et organisation</li>
                <li>📢 Communication et esprit de synthèse</li>
              </ul>
            </>
          )}

          {activeTab === "passions" && (
            <>
              <p>🎭 Mes passions et centres d'intérêt :</p>
              <br />
              <ul className="passionsList">
                <li>💻 Développement Web</li>
                <li>🩻 L'ergonomie</li>
                <li>🖦 La création de claviers customisés</li>
              </ul>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default AboutContent;
