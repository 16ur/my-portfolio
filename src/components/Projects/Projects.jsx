import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";
import Keycrafted from "../../assets/keycrafted.png";
import NearMTP from "../../assets/nearmtp.png";
import Finder from "../../assets/finder.png";
import "./Projects.css";
import { GrProjects } from "react-icons/gr";

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
        <GrProjects className="iconTitle" />
        Projets
      </h1>
      <div className="projectsContainer">
        {projects.map((project) => (
          <div className="projectCard" key={project.id}>
            <div className="projectImage">
              <img src={project.image} alt={project.title} />
            </div>

            <div className="projectContent">
              <h2 className="projectTitle">{project.title}</h2>
              <p className="projectDescription">{project.description}</p>

              <div className="projectTags">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tag">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="projectIcons">
                <button
                  className="Btn"
                  onClick={() => handleLinkClick(project.link)}
                >
                  <svg
                    stroke-linejoin="round"
                    stroke-linecap="round"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 24 24"
                    class="icon-svg"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                  <span class="tooltip">Voir le projet</span>
                </button>
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
