import "./Contact.css";

function Contact() {
  return (
    <div className="contactPage" id="contact">
      <h1 className="contactTitle" id="contact">
        Contactez-moi
      </h1>
      <p className="alternanceText">
        (Actuellement à la recherche d'une alternance pour l'année 2025)
      </p>
      <div className="contactContainer">
        <div className="contactInfo">
          <h2>Mes coordonnées</h2>
          <p>
            Email :{" "}
            <a href="mailto:axelmanguian@gmail.com">axelmanguian@gmail.com</a>
          </p>
          <p>
            Téléphone : <a href="tel:+33783515141">+33 7 83 51 51 41</a>
          </p>
          <p>Réseaux sociaux :</p>
          <div className="socialIcons">
            <a href="https://github.com/16ur" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/axel-manguian/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
