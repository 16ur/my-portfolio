import "./AboutContent.css";

function AboutContent() {
  const techSkills = [
    "HTML/CSS",
    "JavaScript",
    "React.js",
    "Node.js",
    "Express.js",
    "PHP Symfony",
    "PHP Laravel",
    "C++",
    "MySQL",
    "PostgreSQL",
    "Python",
    "FastAPI",
  ];

  const tools = [
    "Git",
    "Linux",
    "Bash",
    "Docker",
  ];

  const softSkills = [
    "Travail en équipe",
    "Communication",
    "Résolution de problèmes",
    "Adaptabilité",
    "Gestion du temps",
    "Pensée critique",
  ];

  return (
    <section className="about-section" id="aboutme">
      <div className="about-container">
        <h2 className="about-title">À propos</h2>

        <div className="about-content">
          <p className="about-description">
            Diplômé d'un BUT Informatique, je continue mon parcours avec un
            <strong> Master of Science à Epitech Marseille</strong>, avec la volonté de me spécialiser
            dans deux domaines qui, selon moi, façonnent le futur : la <strong>data</strong> et <strong>l'intelligence artificielle</strong>.
          </p>

          <p className="about-description">
            Curieux, autonome et passionné, j'ai affiné mon intérêt pour le développement
            web au fil de ma formation et de mes expériences professionnelles.
            Ce qui m'anime aujourd'hui ? Participer à des projets porteurs de sens,
            apprendre sans cesse, et implémenter des solutions innovantes.
          </p>

          <div className="skills-section">
            <h3 className="skills-title">Compétences techniques</h3>
            <div className="skills-list">
              {techSkills.map((skill, index) => (
                <span className="skill-tag" key={index}>
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="skills-section">
            <h3 className="skills-title">Outils</h3>
            <div className="skills-list">
              {tools.map((tool, index) => (
                <span className="skill-tag" key={index}>
                  {tool}
                </span>
              ))}
            </div>
          </div>
          <div className="skills-section">
            <h3 className="skills-title">Compétences humaines</h3>
            <div className="skills-list">
              {softSkills.map((skill, index) => (
                <span className="skill-tag" key={index}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutContent;
