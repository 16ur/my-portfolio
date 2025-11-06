import { useState } from "react";
import "./Projects.css";

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
    },
    {
      id: 3,
      title: "Finder",
      description:
        "Plateforme de mise en relation entre particuliers et professionnels pour des services à domicile.",
      link: null,
      technologies: ["Laravel", "MySQL", "WebSockets", "Docker"],
    },
    {
      id: 4,
      title: "nearMTP",
      description:
        "Application de découverte d'activités locales à Montpellier avec filtres avancés de recherche.",
      link: "https://github.com/16ur/nearMTP",
      technologies: ["React.js", "Express.js", "MongoDB"],
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
        <h2 className="projects-title">Projets</h2>

        <div className="projects-list">
          {projects.map((project) => (
            <div className="project-item" key={project.id}>
              <div className="project-header">
                <h3 className="project-name">{project.title}</h3>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    Voir sur GitHub
                  </a>
                )}
                {!project.link && (
                  <button
                    onClick={() => setShowModal(true)}
                    className="project-link-btn"
                  >
                    Projet confidentiel
                  </button>
                )}
              </div>

              <p className="project-description">{project.description}</p>

              <div className="project-technologies">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {showModal && (
        <div className="modal-backdrop" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h3 className="modal-title">Projet académique confidentiel</h3>
            <p className="modal-text">
              Ce projet a été réalisé dans le cadre de ma formation et ne peut
              être partagé publiquement pour des raisons de confidentialité.
            </p>
            <p className="modal-text">
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
