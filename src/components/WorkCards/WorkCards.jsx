import "./WorkCards.css";

function WorkCards() {
  return (
    <div className="workCards" id="work">
      <h1 className="workTitle">Parcours</h1>
      <div className="workCardsContainer">
        <div className="workCard">
          <div className="workCardContent">
            <h2>Alertance Développeur Web</h2>
            <p className="date">Septembre 2024 - Décembre 2024</p>
            <p className="company">Winlink Systems</p>
            <p className="location">Marseille, France</p>
            <p className="description">
              Actuellement en alternance chez{" "}
              <span className="highlight">Winlink Systems</span> en tant que
              développeur web, je m'occupe de la maintenance corrective et
              évolutive de la plateforme ainsi que de la participation au
              support logiciel.
            </p>
          </div>
        </div>

        <div className="workCard">
          <div className="workCardContent">
            <h2>Stage Développeur Web</h2>
            <p className="date">Avril 2024 - Juin 2024</p>
            <p className="company">bluedrop.fr</p>
            <p className="location">Marseille, France</p>
            <p className="description">
              J'ai réalisé un stage de 3 mois au sein de la société{" "}
              <span className="highlight">bluedrop.fr</span> en tant que
              développeur web. J'ai pu mettre en pratique mes compétences en
              développement web et apprendre de nouvelles technologies comme{" "}
              <span className="highlight">Drupal</span>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkCards;
