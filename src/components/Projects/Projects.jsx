import React, { useState } from "react";
import "./Projects.css";

function Projects() {
  const [showModal, setShowModal] = useState(false);

  const projects = [
    {
      id: 1,
      title: "Portfolio Personnel",
      description:
        "Mon site web personnel réalisé avec ReactJS, mettant en valeur mes compétences et mes projets.",
      link: "https://github.com/16ur/myPF",
    },
    {
      id: 2,
      title: "KeyCrafted",
      description:
        "Réalisé dans le cadre de ma formation, KeyCrafted est un site web de vente de claviers et d'accessoires pour les passionnés de claviers. (Projet en cours)",
      link: "https://github.com/16ur/keycrafted",
    },
    {
      id: 3,
      title: "Finder",
      description:
        "Réalisé dans le cadre de ma formation, Finder est un site web réalisé en groupe, permettant de mettre en relation des particuliers et des professionnels afin de rendre des services.",
      link: null,
    },
    {
      id: 4,
      title: "nearMTP",
      description:
        "nearMTP est une application web permettant aux utilisateurs de rechercher des activités autour de Montpellier. Elle offre une interface permettant d'explorer, de filtrer et découvrir des activités locales.",
      link: "https://github.com/16ur/nearMTP",
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
    <div className="projectsPage">
      <h1 className="projectsTitle" id="projects">
        Mes Projets
      </h1>
      <div className="projectsContainer">
        {projects.map((project) => (
          <div className="projectCard" key={project.id}>
            <div className="projectContent">
              <h2 className="projectTitle">{project.title}</h2>
              <p className="projectDescription">{project.description}</p>
              <button
                className="projectLink"
                onClick={() => handleLinkClick(project.link)}
              >
                Voir le projet
              </button>
            </div>
          </div>
        ))}
      </div>

      {showModal && (
        <div className="modalBackdrop" onClick={closeModal}>
          <div className="modalContent" onClick={(e) => e.stopPropagation()}>
            <h2>Projet non disponible</h2>
            <p>
              Ce projet est académique et ne peut pas être divulgué pour le
              moment. <br />
              <br /> Merci de votre compréhension.
            </p>
            <button className="closeButton" onClick={closeModal}>
              Fermer
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Projects;
