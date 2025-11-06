import { useState } from "react";
import "./Projects.css";

function Projects() {
  const [showModal, setShowModal] = useState(false);
  const [expandedProject, setExpandedProject] = useState(null);

  const projects = [
    {
      id: 2,
      title: "KeyCrafted",
      description:
        "Site e-commerce de claviers mécaniques personnalisés avec fonctionnalités avancées et paiement sécurisé.",
      link: "https://github.com/16ur/keycrafted",
      technologies: ["React.js", "Express.js", "MongoDB", "Docker"],
      details: [
        "Système d'authentification JWT avec gestion des sessions",
        "Intégration de Stripe pour les paiements sécurisés",
        "Gestion complète du panier et des commandes",
        "Interface d'administration pour la gestion des produits, des commandes et des utilisateurs"
      ],
    },
    {
      id: 3,
      title: "Finder",
      description:
        "Plateforme de mise en relation entre particuliers et professionnels pour des services à domicile.",
      link: null,
      technologies: ["Laravel", "MySQL", "WebSockets", "Docker"],
      details: [
        "Chat en temps réel entre utilisateurs via WebSockets",
        "Recherche avancée avec filtres par localisation, disponibilité et avis",
        "Système d'évaluation et de notation",
        "Conteneurisation avec Docker pour un déploiement simplifié",
        "Interface d'administration pour la validation des professionnels et la gestion des contenus"
      ],
    },
    {
      id: 4,
      title: "Horas",
      description:
        "Plateforme permettant aux employés d'émarger et de suivre leurs heures de travail facilement.",
      link: "https://github.com/AadiDevv/Horas/",
      technologies: ["React.js", "Express.js", "PostgreSQL", "Docker"],
      details: [
        "Système d'authentification sécurisé avec JWT",
        "Tableau de bord interactif pour le suivi des heures",
        "Génération de KPI et rapports personnalisés",
        "Interface d'administration pour la gestion des utilisateurs et des données"
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

  const toggleDetails = (projectId) => {
    setExpandedProject(expandedProject === projectId ? null : projectId);
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

              {project.details && (
                <>
                  <button
                    className="details-toggle"
                    onClick={() => toggleDetails(project.id)}
                    aria-label="Afficher les détails"
                  >
                    <span>Détails</span>
                    <span className={`arrow ${expandedProject === project.id ? "expanded" : ""}`}>
                      ›
                    </span>
                  </button>

                  <div className={`project-details ${expandedProject === project.id ? "expanded" : ""}`}>
                    <ul className="details-list">
                      {project.details.map((detail, index) => (
                        <li key={index}>{detail}</li>
                      ))}
                    </ul>
                  </div>
                </>
              )}
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
