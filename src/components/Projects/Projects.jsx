import "./Projects.css";

function Projects() {
  const projects = [
    {
      id: 1,
      title: "Portfolio Personnel",
      description:
        "Mon site web personnel réalisé avec ReactJS, mettant en valeur mes compétences et mes projets.",
      image: "path/to/project1.jpg",
      link: "https://github.com/16ur/myPF",
    },
    {
      id: 2,
      title: "KeyCrafted",
      description:
        "Réalisé dans le cadre de ma formation, KeyCrafted est un site web de vente de claviers et d'accessoires pour les passionnés de claviers. (Projet en cours)",

      image: "path/to/project2.jpg",
      link: "https://github.com/16ur/keycrafted",
    },
    {
      id: 3,
      title: "Finder",
      description:
        "Réalisé dans le cadre de ma formation, Finder est un site web réalisé à plusieurs, permettant de mettre en relation des particuliers et des professionnels pour des services.",
      image: "path/to/project3.jpg",
      link: "https://github.com/ecommercefrontend",
    },
  ];

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
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="projectLink"
              >
                Voir le projet
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
