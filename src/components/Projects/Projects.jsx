import { useState } from "react";
import "./Projects.css";

function Projects() {
  const [showModal, setShowModal] = useState(false);
  const [hoveredId, setHoveredId] = useState(null);

  const projects = [
    {
      id: 1,
      number: "01",
      title: "KeyCrafted",
      category: "E-commerce",
      description: "Site e-commerce de claviers mécaniques personnalisés avec paiement sécurisé.",
      technologies: ["React.js", "Express.js", "MongoDB", "Docker"],
      link: "https://github.com/16ur/keycrafted",
      features: [
        "Authentification JWT",
        "Integration Stripe",
        "Gestion du panier",
        "Interface d'administration",
      ],
    },
    {
      id: 2,
      number: "02",
      title: "Finder",
      category: "Marketplace",
      description: "Plateforme de mise en relation pour des services à domicile.",
      technologies: ["Laravel", "MySQL", "WebSockets", "Docker"],
      link: null,
      features: [
        "Chat en temps réel",
        "Recherche avancée",
        "Système de notation",
        "Panel admin",
      ],
    },
    {
      id: 3,
      number: "03",
      title: "Horas",
      category: "SaaS",
      description: "Plateforme de suivi des heures de travail pour les employés.",
      technologies: ["React.js", "Express.js", "PostgreSQL", "Docker"],
      link: "https://github.com/AadiDevv/Horas/",
      features: [
        "Tableau de bord interactif",
        "Génération de KPI",
        "Rapports personnalisés",
        "Gestion des utilisateurs",
      ],
    },
  ];

  return (
    <section className="projects" id="projects" data-section="04 — PROJETS">
      <div className="projects-content">
        <header className="projects-header">
          <span className="projects-label">Projets</span>
          <h2 className="projects-title">
            Mes<br />
            <span className="projects-title-accent">projets</span>
          </h2>
        </header>

        <div className="projects-grid">
          {projects.map((project) => (
            <article
              key={project.id}
              className={`project-card ${hoveredId === project.id ? "hovered" : ""}`}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="project-card-header">
                <span className="project-number">{project.number}</span>
                <span className="project-category">{project.category}</span>
              </div>

              <div className="project-card-body">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <ul className="project-features">
                  {project.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div className="project-card-footer">
                <div className="project-technologies">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="project-tech">{tech}</span>
                  ))}
                </div>

                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <span>Voir le projet</span>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M4 10L10 4M10 4H5M10 4V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                ) : (
                  <button
                    onClick={() => setShowModal(true)}
                    className="project-link project-link-private"
                  >
                    <span>Projet confidentiel</span>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <rect x="2" y="6" width="10" height="7" rx="1" stroke="currentColor" strokeWidth="1.5"/>
                      <path d="M4 6V4a3 3 0 116 0v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </button>
                )}
              </div>

              <div className="project-card-accent"></div>
            </article>
          ))}
        </div>
      </div>

      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <span className="modal-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <rect x="3" y="11" width="18" height="11" rx="2" stroke="currentColor" strokeWidth="2"/>
                  <path d="M7 11V7a5 5 0 0110 0v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </span>
              <h3 className="modal-title">Projet confidentiel</h3>
            </div>
            <div className="modal-body">
              <p>
                Ce projet a été réalisé dans le cadre de ma formation et ne peut être
                partagé publiquement pour des raisons de confidentialité.
              </p>
              <p>
                Je serais ravi d'en discuter en entretien et de vous présenter des
                extraits de code si nécessaire.
              </p>
            </div>
            <button className="modal-close" onClick={() => setShowModal(false)}>
              Compris
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;
