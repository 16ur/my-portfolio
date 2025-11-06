import "./AboutContent.css";

function AboutContent() {
  const techSkills = [
    "HTML5/CSS3",
    "JavaScript/ReactJS",
    "PHP/Symfony/Laravel",
    "MySQL",
    "PostgreSQL",
    "Python",
  ];

  const tools = [
    "Git",
    "UNIX",
    "Agilité",
    "Docker",
  ];

  return (
    <section className="about-section" id="aboutme">
      <div className="about-container">
        <h2 className="about-title">À propos</h2>

        <div className="about-content">
          <p className="about-description">
            Tout juste diplômé d'un BUT Informatique, j'intègre en septembre 2025 le
            Master of Science d'Epitech Marseille, avec la volonté de me spécialiser
            dans deux domaines qui façonnent le futur : la data et l'intelligence artificielle.
          </p>

          <p className="about-description">
            Curieux, autonome et passionné, j'ai affiné mon intérêt pour le développement
            web au fil de ma formation et de mes expériences professionnelles.
            Ce qui m'anime aujourd'hui ? Participer à des projets qui ont du sens,
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
        </div>
      </div>
    </section>
  );
}

export default AboutContent;
