import React, { useState } from "react";
import "./WorkCards.css";
import {
  FaCode,
  FaBriefcase,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaBuilding,
} from "react-icons/fa";

function WorkCards() {
  const [filter, setFilter] = useState("all");

  const experiences = [
    {
      id: 0,
      title: "Stage Développeur Web Back-end",
      date: "Février 2025 - Juin 2025",
      company: "Albalogic",
      location: "Aubagne, France",
      description:
        "Actuellement chez Albalogic en tant que stagiaire développeur web back-end, je suis en charge de la maintenance évolutive et corrective de l'application AutoPrecision.",
      category: "informatique",
      technologies: ["PHP", "Symfony", "JavaScript", "ReactJS", "MySQL", "Git"],
    },
    {
      id: 1,
      title: "Alternance Développeur Web Back-end",
      date: "Septembre 2024 - Décembre 2024",
      company: "Winlink Systems",
      location: "Marseille, France",
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
      id: 2,
      title: "Conseiller vendeur multimédia",
      date: "Juillet 2024 - Août 2024",
      company: "Boulanger",
      location: "Marseille, France",
      description:
        "Vendeur multimédia chez Boulanger durant l'été 2024, j'ai renforcé mes compétences en communication, en conseil client et en techniques de vente, en accompagnant les clients dans leurs choix de produits technologiques.",
      category: "autre",
      skills: ["Relation client", "Vente", "Travail d'équipe"],
    },
    {
      id: 3,
      title: "Stage Développeur Web",
      date: "Avril 2024 - Juin 2024",
      company: "bluedrop.fr",
      location: "Marseille, France",
      description:
        "J'ai effectué un stage de trois mois au sein de la société Bluedrop.fr en tant que développeur web. Cela m'a permis de mettre en pratique mes compétences en développement web et d'apprendre de nouvelles technologies, comme Drupal.",
      category: "informatique",
      technologies: ["Drupal", "PHP", "JavaScript", "HTML/CSS"],
    },
    {
      id: 4,
      title: "Employé polyvalent",
      date: "Juillet 2023 - Août 2023",
      company: "McDonald's",
      location: "Marseille, France",
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
        <h2 className="work-title">Mes Expériences Professionnelles</h2>

        <div className="filter-buttons">
          <button
            className={`filter-btn ${filter === "all" ? "active" : ""}`}
            onClick={() => setFilter("all")}
          >
            Toutes
          </button>
          <button
            className={`filter-btn ${
              filter === "informatique" ? "active" : ""
            }`}
            onClick={() => setFilter("informatique")}
          >
            Développement
          </button>
          <button
            className={`filter-btn ${filter === "autre" ? "active" : ""}`}
            onClick={() => setFilter("autre")}
          >
            Autres
          </button>
        </div>

        <div className="experiences-grid">
          {filteredExperiences.map((exp) => (
            <div className="experience-card" key={exp.id}>
              <div className="card-header">
                <h3>{exp.title}</h3>
                <div className="company-badge">
                  <FaBuilding className="icon" />
                  <span>{exp.company}</span>
                </div>
              </div>

              <div className="card-details">
                <div className="detail-item">
                  <FaCalendarAlt className="icon" />
                  <span>{exp.date}</span>
                </div>
                <div className="detail-item">
                  <FaMapMarkerAlt className="icon" />
                  <span>{exp.location}</span>
                </div>
              </div>

              <p className="card-description">{exp.description}</p>

              {exp.technologies && (
                <div className="tech-tags">
                  {exp.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              )}

              {exp.skills && (
                <div className="skill-tags">
                  {exp.skills.map((skill, index) => (
                    <span key={index} className="skill-tag">
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
