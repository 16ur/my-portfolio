import React, { useState } from "react";
import "./Projects.css";
import Keycrafted from "../../assets/keycrafted.webp";
import NearMTP from "../../assets/nearmtp.webp";
import Finder from "../../assets/finder.webp";
import { FaGithub, FaExternalLinkAlt, FaCode } from "react-icons/fa";

function Projects() {
  const [showModal, setShowModal] = useState(false);

  const projects = [
    {
      id: 2,
      title: "KeyCrafted",
      description:
        "Site e-commerce de claviers mécaniques personnalisés avec fonctionnalités avancées et paiement sécurisé.",
      link: "https://github.com/16ur/keycrafted",
      technologies: ["React.js", "Express.js", "MongoDB", "Stripe API"],
      image: Keycrafted,
      features: [
        "Paiement sécurisé avec Stripe",
        "Backend performant avec Express.js",
      ],
    },
    {
      id: 3,
      title: "Finder",
      description:
        "Plateforme de mise en relation entre particuliers et professionnels pour des services à domicile.",
      link: null,
      technologies: ["Laravel", "MySQL", "WebSockets", "Docker"],
      image: Finder,
      features: [
        "Messagerie en temps réel",
        "Système de notation et avis",
        "Sécurité des données avec Laravel",
      ],
    },
    {
      id: 4,
      title: "nearMTP",
      description:
        "Application de découverte d'activités locales à Montpellier avec filtres avancés de recherche.",
      link: "https://github.com/16ur/nearMTP",
      technologies: ["React.js", "Express.js", "MongoDB"],
      image: NearMTP,
      features: [
        "Filtres personnalisables",
        "Interface utilisateur intuitive",
        "Création d'API RESTful avec Express.js",
      ],
    },
  ];

  const handleLinkClick = (link) => {
    if (!link) {
      setShowModal(true);
    } else {
      window.open(link, "_blank", "noopener,noreferrer");
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">
        <h2 className="projects-title">
          <FaCode className="icon" /> Mes Projets
        </h2>
        <p className="projects-subtitle">
          Une sélection de mes réalisations les plus significatives
        </p>

        <div className="projects-grid">
          {projects.map((project) => (
            <div className="project-card" key={project.id}>
              <div className="project-image-container">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                  loading="lazy"
                />
                <div className="project-overlay">
                  <h3>{project.title}</h3>
                  <div className="project-links">
                    {project.link ? (
                      <>
                        <button
                          onClick={() => handleLinkClick(project.link)}
                          className="project-link"
                        >
                          <FaGithub /> Code
                        </button>
                        {project.demo && (
                          <button className="project-link">
                            <FaExternalLinkAlt /> Demo
                          </button>
                        )}
                      </>
                    ) : (
                      <button
                        onClick={() => setShowModal(true)}
                        className="project-link"
                      >
                        <FaCode /> Détails
                      </button>
                    )}
                  </div>
                </div>
              </div>

              <div className="project-content">
                <h3 className="project-name">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-features">
                  <h4>Fonctionnalités clés :</h4>
                  <ul>
                    {project.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {showModal && (
        <div className="modal-backdrop" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h3>Projet académique confidentiel</h3>
            <p>
              Ce projet a été réalisé dans le cadre de ma formation et ne peut
              être partagé publiquement pour des raisons de confidentialité.
            </p>
            <p>
              Je serais ravi d'en discuter en entretien et de vous présenter des
              extraits de code si nécessaire.
            </p>
            <button className="modal-close-btn" onClick={closeModal}>
              Compris
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;
