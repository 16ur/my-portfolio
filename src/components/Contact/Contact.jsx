import "./Contact.css";
import { FiGithub, FiLinkedin } from "react-icons/fi";

function Contact() {
  return (
    <div className="contactPage" id="contact">
      <h1 className="contactTitle" id="contact">
        Contactez-moi
      </h1>
      <div className="contactContainer">
        <div className="contactInfo">
          <h2>Mes coordonnées</h2>
          <p>
            Email :{" "}
            <a href="mailto:axelmanguian@gmail.com">axelmanguian@gmail.com</a>
          </p>
          <p>Réseaux sociaux :</p>
          <div className="socialIcons">
            <a href="https://github.com/16ur" target="_blank" rel="noreferrer">
              <FiGithub className="icon githubIcon" />
            </a>
            <a
              href="https://www.linkedin.com/in/axel-manguian/"
              target="_blank"
              rel="noreferrer"
            >
              <FiLinkedin className="icon linkedinIcon" />
            </a>
          </div>
        </div>
      </div>
      <footer className="footer">
        <p>
          &copy; {new Date().getFullYear()} Axel Manguian. Tous droits réservés.
        </p>
      </footer>
    </div>
  );
}

export default Contact;
