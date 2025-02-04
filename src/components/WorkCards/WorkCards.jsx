import React, { useState } from "react";
import "./WorkCards.css";
import { FaBriefcase, FaCode, FaFilter } from "react-icons/fa";

function WorkCards() {
  const [filter, setFilter] = useState("all");

  const experiences = [
    {
      id: 1,
      title: "Alternance Développeur Web Back-end",
      date: "📅 Septembre 2024 - Décembre 2024",
      company: "🏢 Winlink Systems",
      location: "📍 Marseille, France",
      description:
        "J'ai réalisé une alternance de 4 mois chez Winlink Systems en tant que développeur web, où je m'occupais de la maintenance corrective et évolutive de la plateforme ainsi que de la participation au support logiciel.",
      category: "informatique",
    },
    {
      id: 2,
      title: "Vendeur multimédia",
      date: "📅 Été 2024",
      company: "🏢 Boulanger",
      location: "📍 Marseille, France",
      description:
        "J'ai travaillé en tant que vendeur multimédia chez Boulanger durant l'été 2024. J'ai pu développer mes compétences en communication et en vente.",
      category: "autre",
    },
    {
      id: 3,
      title: "Stage Développeur Web",
      date: "📅 Avril 2024 - Juin 2024",
      company: "🏢 bluedrop.fr",
      location: "📍 Marseille, France",
      description:
        "J'ai réalisé un stage de 3 mois au sein de la société bluedrop.fr en tant que développeur web. J'ai pu mettre en pratique mes compétences en développement web et apprendre de nouvelles technologies comme Drupal.",
      category: "informatique",
    },
    {
      id: 4,
      title: "Employé polyvalant",
      date: "📅 Été 2023",
      company: "🏢 McDonald's",
      location: "📍 Marseille, France",
      description:
        "J'ai travaillé en tant qu'employé polyvalent chez McDonald's durant l'été 2023. J'ai pu développer mes compétences en communication et en travail d'équipe.",
      category: "autre",
    },
  ];

  const filteredExperiences =
    filter === "all"
      ? experiences
      : experiences.filter((exp) => exp.category === filter);

  return (
    <div className="workCards" id="work">
      <h1 className="workTitle">📌 Parcours</h1>

      <div className="filterButtons">
        <button
          className={`filterButton ${filter === "all" ? "active" : ""}`}
          onClick={() => setFilter("all")}
        >
          <FaFilter /> Tous
        </button>
        <button
          className={`filterButton ${
            filter === "informatique" ? "active" : ""
          }`}
          onClick={() => setFilter("informatique")}
        >
          <FaCode /> Informatique
        </button>
        <button
          className={`filterButton ${filter === "autre" ? "active" : ""}`}
          onClick={() => setFilter("autre")}
        >
          <FaBriefcase /> Autres Expériences
        </button>
      </div>

      <div className="workCardsContainer">
        <div className="timeline">
          {filteredExperiences.map((experience) => (
            <div className="workCard" key={experience.id}>
              <div className="workIcon">
                <FaBriefcase />
              </div>
              <div className="workCardContent">
                <h2>{experience.title}</h2>
                <p className="date">{experience.date}</p>
                <p className="company">{experience.company}</p>
                <p className="location">{experience.location}</p>
                <p className="description">{experience.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WorkCards;
