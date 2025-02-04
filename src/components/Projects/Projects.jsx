import React, { useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Keycrafted from "../../assets/keycrafted.png";
import NearMTP from "../../assets/nearmtp.png";
import Finder from "../../assets/finder.png";
import "./Projects.css";

function Projects() {
  const [showModal, setShowModal] = useState(false);

  const projects = [
    {
      id: 2,
      title: "KeyCrafted",
      description:
        "Réalisé dans le cadre de ma formation, KeyCrafted est un site web de vente de claviers et d'accessoires.",
      link: "https://github.com/16ur/keycrafted",
      technologies: ["React.js", "CSS", "ExpressJS", "MongoDB"],
      image: Keycrafted,
    },
    {
      id: 3,
      title: "Finder",
      description:
        "Finder est un site web réalisé en groupe, permettant de mettre en relation des particuliers et des professionnels.",
      link: null,
      technologies: ["PHP Laravel", "CSS", "MySQL"],
      image: Finder,
    },
    {
      id: 4,
      title: "nearMTP",
      description:
        "nearMTP permet aux utilisateurs de rechercher des activités autour de Montpellier et de les filtrer.",
      link: "https://github.com/16ur/nearMTP",
      technologies: ["React.js", "CSS", "ExpressJS", "MongoDB"],
      image: NearMTP,
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
        PROJETS
      </h1>
      <div className="projectsContainer">
        {projects.map((project) => (
          <div className="projectCard" key={project.id}>
            {/* Image du projet */}
            <div className="projectImage">
              <img src={project.image} alt={project.title} />
            </div>

            {/* Contenu du projet */}
            <div className="projectContent">
              <h2 className="projectTitle">{project.title}</h2>
              <p className="projectDescription">{project.description}</p>

              {/* Technologies utilisées */}
              <div className="projectTags">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tag">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="projectIcons">
                <a
                  href={project.link ? project.link : "#"}
                  onClick={(e) => {
                    if (!project.link) {
                      e.preventDefault();
                      handleLinkClick(null);
                    }
                  }}
                >
                  <FaGithub />
                </a>
              </div>
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
              moment. Merci de votre compréhension.
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
