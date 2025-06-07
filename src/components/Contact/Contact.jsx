import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import "./Contact.css";

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <h2 className="section-title">
          <span>Contact</span>
        </h2>

        <div className="contact-grid">
          <div className="contact-card">
            <div className="contact-icon">
              <FaEnvelope />
            </div>
            <div className="contact-content">
              <h3>Email</h3>
              <a href="mailto:axelmanguian@gmail.com" className="contact-link">
                axelmanguian@gmail.com
              </a>
            </div>
          </div>

          <div className="contact-card">
            <div className="contact-icon">
              <FaPhone />
            </div>
            <div className="contact-content">
              <h3>Téléphone</h3>
              <a href="tel:+33783515141" className="contact-link">
                +33 7 83 51 51 41
              </a>
            </div>
          </div>

          <div className="contact-card">
            <div className="contact-icon">
              <MdLocationOn />
            </div>
            <div className="contact-content">
              <h3>Localisation</h3>
              <p>Marseille, France</p>
            </div>
          </div>

          <div className="contact-card">
            <div className="contact-icon">
              <FaGithub />
            </div>
            <div className="contact-content">
              <h3>GitHub</h3>
              <a
                href="https://github.com/16ur"
                target="_blank"
                rel="noreferrer"
                className="contact-link"
              >
                /16ur
              </a>
            </div>
          </div>

          <div className="contact-card">
            <div className="contact-icon">
              <FaLinkedin />
            </div>
            <div className="contact-content">
              <h3>LinkedIn</h3>
              <a
                href="https://www.linkedin.com/in/axel-manguian/"
                target="_blank"
                rel="noreferrer"
                className="contact-link"
              >
                /in/axel-manguian
              </a>
            </div>
          </div>
        </div>
      </div>

      <footer className="footer">
        <p>
          &copy; {new Date().getFullYear()} Axel Manguian. Tous droits réservés.
        </p>
      </footer>
    </section>
  );
}

export default Contact;
