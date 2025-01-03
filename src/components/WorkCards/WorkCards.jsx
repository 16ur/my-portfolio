import "./WorkCards.css";

function WorkCards() {
  return (
    <div className="workCards" id="work">
      <h1 className="workTitle">Parcours</h1>
      <div className="workCardsContainer">
        <div className="workCard">
          <div className="workCardContent">
            <h2>Alternance Développeur Mobile</h2>
            <p className="date">Janvier 2025 - Aujourd'hui</p>
            <p className="company">Kouer</p>
            <p className="location">Full remote</p>
            <p className="description">
              Je suis actuellement en alternance chez{" "}
              <span className="highlight">Kouer</span> en tant que développeur
              d'application mobile. Je m'occupe alors de la réalisation d'une
              market place, à l'image du site{" "}
              <a
                href="https://www.kouer.fr/"
                target="_blank"
                className="highlight"
                rel="noopener noreferrer"
              >
                Kouer.fr
              </a>
            </p>
          </div>
        </div>
        <div className="workCard">
          <div className="workCardContent">
            <h2>Alternance Développeur Web Back-end</h2>
            <p className="date">Septembre 2024 - Décembre 2024</p>
            <p className="company">Winlink Systems</p>
            <p className="location">Marseille, France</p>
            <p className="description">
              J'ai réalisé une alternance de 4 mois chez{" "}
              <span className="highlight">Winlink Systems</span> en tant que
              développeur web, où je m'occupais de la maintenance corrective et
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
