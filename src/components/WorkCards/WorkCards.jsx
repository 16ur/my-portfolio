import { useState } from "react";
import "./WorkCards.css";

function WorkCards() {
  const [expandedExperience, setExpandedExperience] = useState(null);

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
      technologies: ["Python", "FastAPI", "ReactJS", "JavaScript", "MySQL", "Git", "Docker"],
      details: [
        "Maintenance d'interfaces utilisateur avec React-Admin et intégration avec le backend",
        "Développement de nouvelles fonctionnalités backend avec FastAPI",
        "Rédaction de scripts d'automatisation pour des tâches récurrentes et critique",
        "Participation aux revues de code et aux méthodologies agiles",
      ],
    },
    {
      id: 1,
      title: "Stage Développeur Web Full-Stack",
      date: "Février 2025 - Juin 2025",
      company: "Albalogic",
      location: "Aubagne, France",
      contractType: "Stage",
      description:
        "Lors de mon stage chez Albalogic en tant que développeur web full-stack, j'étais en charge de la maintenance évolutive et corrective de l'application web AutoPrecision.",
      technologies: ["PHP", "Symfony", "JavaScript", "ReactJS", "MySQL", "Git"],
      details: [
        "Développement de nouvelles fonctionnalités avec Symfony et React",
        "Correction de bugs et optimisation des performances",
        "Manipulation de l'API Tecdoc pour la gestion des données automobiles",
        "Documentation technique et tests unitaires",
        "Collaboration avec l'équipe pour améliorer les processus de développement",
      ],
    },
    {
      id: 2,
      title: "Développeur Web Back-end",
      date: "Septembre 2024 - Décembre 2024",
      company: "Winlink Systems",
      location: "Marseille, France",
      contractType: "Alternance",
      description:
        "Lors de mon alternance chez Winlink Systems en tant que développeur web back-end, j'ai assuré la maintenance corrective et évolutive d'une plateforme utilisée par les secrétaires hospitalières pour la gestion des patients, tout en contribuant activement au support logiciel.",
      technologies: [
        "PHP",
        "Laravel",
        "JavaScript",
        "ReactJS",
        "MySQL",
        "Git",
        "Agile",
      ],
      details: [
        "Amélioration de l'interface utilisateur avec React",
        "Résolution d'incidents en production et support technique",
        "Développement de nouvelles fonctionnalités backend avec Laravel",
        "Optimisation des requêtes SQL pour améliorer les performances",
        "Totale autonomie dans la gestion des tâches assignées",
        "Collaboration avec l'APHM afin de mieux cibler leurs besoins",
      ],
    },

    {
      id: 4,
      title: "Développeur Web Drupal",
      date: "Avril 2024 - Juin 2024",
      company: "bluedrop.fr",
      location: "Marseille, France",
      contractType: "Stage",
      description:
        "J'ai effectué un stage de trois mois au sein de la société Bluedrop.fr en tant que développeur web Drupal. Cela m'a permis de mettre en pratique mes compétences en développement web et d'apprendre de nouvelles technologies, notamment Drupal.",
      technologies: ["Drupal", "PHP", "JavaScript", "HTML/CSS"],
      details: [
        "Apprentissage du CMS Drupal et de son écosystème",
        "Développement de modules personnalisés Drupal",
        "Intégration de maquettes dans des thèmes spécifiques",
        "Maintenance et mise à jour de l'intranet de l'entreprise",
      ],
    },
  
  ];

  const toggleDetails = (expId) => {
    setExpandedExperience(expandedExperience === expId ? null : expId);
  };

  return (
    <section className="work-section" id="work">
      <div className="work-container">
        <h2 className="work-title">Expériences professionnelles</h2>

        <div className="experiences-list">
          {experiences.map((exp) => (
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

              {exp.details && (
                <>
                  <button
                    className="details-toggle"
                    onClick={() => toggleDetails(exp.id)}
                    aria-label="Afficher les détails"
                  >
                    <span>Détails</span>
                    <span className={`arrow ${expandedExperience === exp.id ? "expanded" : ""}`}>
                      ›
                    </span>
                  </button>

                  <div className={`experience-details ${expandedExperience === exp.id ? "expanded" : ""}`}>
                    <ul className="details-list">
                      {exp.details.map((detail, index) => (
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
    </section>
  );
}

export default WorkCards;
