import { useState } from "react";
import "./WorkCards.css";

function WorkCards() {
  const [filter, setFilter] = useState("all");

  const experiences = [
    {
      id: 0,
      title: "Développeur Web Full-Stack",
      date: "Septembre 2025 - Aujourd'hui",
      company: "Free Pro",
      location: "Marseille, France",
      contractType: "Alternance",
      description:
        "Actuellement chez Free Pro en tant que développeur web full-stack, je participe au développement d'une plateforme de gestion de réseaux privés.",
      category: "informatique",
      technologies: ["Python", "FastAPI", "ReactJS", "JavaScript", "MySQL", "Git"],
    },
    {
      id: 1,
      title: "Stage Développeur Web Back-end",
      date: "Février 2025 - Juin 2025",
      company: "Albalogic",
      location: "Aubagne, France",
      contractType: "Stage",
      description:
        "Actuellement chez Albalogic en tant que stagiaire développeur web back-end, je suis en charge de la maintenance évolutive et corrective de l'application AutoPrecision.",
      category: "informatique",
      technologies: ["PHP", "Symfony", "JavaScript", "ReactJS", "MySQL", "Git"],
    },
    {
      id: 2,
      title: "Développeur Web Back-end",
      date: "Septembre 2024 - Décembre 2024",
      company: "Winlink Systems",
      location: "Marseille, France",
      contractType: "Alternance",
      description:
        "Lors de mon alternance chez Winlink Systems en tant que développeur web, j'ai assuré la maintenance corrective et évolutive d'une plateforme utilisée par les secrétaires hospitalières pour la gestion des patients, tout en contribuant activement au support logiciel.",
      category: "informatique",
      technologies: [
        "PHP",
        "Laravel",
        "JavaScript",
        "ReactJS",
        "MySQL",
        "Git",
        "Agile",
      ],
    },
    {
      id: 3,
      title: "Conseiller vendeur multimédia",
      date: "Juillet 2024 - Août 2024",
      company: "Boulanger",
      location: "Marseille, France",
      contractType: "CDD",
      description:
        "Vendeur multimédia chez Boulanger durant l'été 2024, j'ai renforcé mes compétences en communication, en conseil client et en techniques de vente, en accompagnant les clients dans leurs choix de produits technologiques.",
      category: "autre",
      skills: ["Relation client", "Vente", "Travail d'équipe"],
    },
    {
      id: 4,
      title: "Développeur Web",
      date: "Avril 2024 - Juin 2024",
      company: "bluedrop.fr",
      location: "Marseille, France",
      contractType: "Stage",
      description:
        "J'ai effectué un stage de trois mois au sein de la société Bluedrop.fr en tant que développeur web. Cela m'a permis de mettre en pratique mes compétences en développement web et d'apprendre de nouvelles technologies, comme Drupal.",
      category: "informatique",
      technologies: ["Drupal", "PHP", "JavaScript", "HTML/CSS"],
    },
    {
      id: 5,
      title: "Employé polyvalent",
      date: "Juillet 2023 - Août 2023",
      company: "McDonald's",
      location: "Marseille, France",
      contractType: "CDD",
      description:
        "Employé polyvalent chez McDonald's durant l'été 2023, j'ai développé mes compétences en communication, en gestion du stress et en travail d'équipe dans un environnement dynamique et exigeant.",
      category: "autre",
      skills: ["Polyvalence", "Gestion du stress", "Organisation"],
    },
    {
      id: 6,
      title: "Ouvrier agricole",
      date: "Juillet 2022 - Août 2022",
      company: "Exploitation agricole",
      location: "Marseille",
      contractType: "CDD",
      description:
        "Ouvrier agricole durant l'été 2022, j'ai participé à la récolte de salades, développant ainsi mon endurance, ma rigueur et ma capacité à travailler en équipe dans des conditions physiques exigeantes.",
      category: "autre",
      skills: ["Endurance", "Rigueur", "Travail en équipe"],
    },
  ];

  const filteredExperiences =
    filter === "all"
      ? experiences
      : experiences.filter((exp) => exp.category === filter);

  return (
    <section className="work-section" id="work">
      <div className="work-container">
        <h2 className="work-title">Expériences</h2>

        <div className="filter-buttons">
          <button
            className={`filter-btn ${filter === "all" ? "active" : ""}`}
            onClick={() => setFilter("all")}
          >
            Toutes
          </button>
          <button
            className={`filter-btn ${filter === "informatique" ? "active" : ""}`}
            onClick={() => setFilter("informatique")}
          >
            Informatique
          </button>
          <button
            className={`filter-btn ${filter === "autre" ? "active" : ""}`}
            onClick={() => setFilter("autre")}
          >
            Autres
          </button>
        </div>

        <div className="experiences-list">
          {filteredExperiences.map((exp) => (
            <div className="experience-item" key={exp.id}>
              <div className="experience-header">
                <h3 className="experience-title">{exp.title}</h3>
                <p className="experience-company">{exp.company}</p>
              </div>

              <div className="experience-meta">
                <span className="experience-date">{exp.date}</span>
                <span className="experience-divider">•</span>
                <span className="experience-location">{exp.location}</span>
                {exp.contractType && (
                  <>
                    <span className="experience-divider">•</span>
                    <span className="experience-type">{exp.contractType}</span>
                  </>
                )}
              </div>

              <p className="experience-description">{exp.description}</p>

              {exp.technologies && (
                <div className="experience-tags">
                  {exp.technologies.map((tech, index) => (
                    <span key={index} className="tag">
                      {tech}
                    </span>
                  ))}
                </div>
              )}

              {exp.skills && (
                <div className="experience-tags">
                  {exp.skills.map((skill, index) => (
                    <span key={index} className="tag">
                      {skill}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WorkCards;
