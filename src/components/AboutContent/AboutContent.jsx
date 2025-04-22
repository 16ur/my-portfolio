import { useState, useEffect } from "react";
import "./AboutContent.css";
import aboutMe from "../../assets/aboutMePic.webp";
import { FaCode, FaServer, FaDatabase, FaTools } from "react-icons/fa";

function AboutContent() {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    setAnimated(true);
  }, []);

  const techSkills = [
    { name: "HTML5/CSS3", level: 95, category: "frontend" },

    { name: "Python", level: 50, category: "backend" },
    { name: "JavaScript/ReactJS", level: 80, category: "frontend" },
    { name: "MySQL", level: 75, category: "database" },
    { name: "PHP/Symfony/Laravel", level: 80, category: "backend" },
    { name: "PostgreSQL", level: 75, category: "database" },
  ];

  const tools = [
    { name: "Git", level: "Avancé" },
    { name: "UNIX", level: "Avancé" },
    { name: "Docker", level: "Intermédiaire" },
  ];

  return (
    <section className="about-section" id="aboutme">
      <div className="about-container">
        <h2 className="about-title">À propos de moi</h2>

        <div className="about-content">
          <div className="about-text-content">
            <p className="about-description">
              Passionné par le développement web et les nouvelles technologies,
              j'intègre en septembre 2025 le{" "}
              <span className="highlight">Master Of Science </span>
              à Epitech Marseille, avec une spécialisation en intelligence
              artificielle. Je recherche une{" "}
              <span className="highlight">alternance</span> pour mettre en
              pratique mes compétences et continuer à apprendre.
            </p>

            <div className="tech-stack-section">
              <h3 className="tech-stack-title">
                <FaCode className="icon" /> Mes compétences techniques
              </h3>

              <div className="tech-grid">
                {techSkills.map((tech, index) => (
                  <div className="tech-item" key={index}>
                    <div className="tech-info">
                      <span className="tech-name">{tech.name}</span>
                      <span className="tech-level">{tech.level}%</span>
                    </div>
                    <div className="tech-bar-container">
                      <div
                        className="tech-bar"
                        style={{
                          width: animated ? `${tech.level}%` : "0%",
                          "--fill-width": `${tech.level}%`,
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>

              <h3 className="tech-stack-title" style={{ marginTop: "2rem" }}>
                <FaTools className="icon" /> Outils & Environnements
              </h3>

              <div className="tools-grid">
                {tools.map((tool, index) => (
                  <div className="tool-item" key={index}>
                    <span className="tool-name">{tool.name}</span>
                    <span className={`tool-level ${tool.level.toLowerCase()}`}>
                      {tool.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="about-image-section">
            <div className="image-container">
              <img src={aboutMe} alt="Profil" className="profile-image" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutContent;
