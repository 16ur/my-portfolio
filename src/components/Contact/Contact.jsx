import "./Contact.css";

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <h2 className="contact-title">Contact</h2>

        <div className="contact-list">
          <div className="contact-item">
            <span className="contact-label">Email</span>
            <a href="mailto:axelmanguian@gmail.com" className="contact-link">
              axelmanguian@gmail.com
            </a>
          </div>

          <div className="contact-item">
            <span className="contact-label">Téléphone</span>
            <a href="tel:+33783515141" className="contact-link">
              +33 7 83 51 51 41
            </a>
          </div>

          <div className="contact-item">
            <span className="contact-label">Localisation</span>
            <span className="contact-text">Marseille, France</span>
          </div>

          <div className="contact-item">
            <span className="contact-label">GitHub</span>
            <a
              href="https://github.com/16ur"
              target="_blank"
              rel="noreferrer"
              className="contact-link"
            >
              github.com/16ur
            </a>
          </div>

          <div className="contact-item">
            <span className="contact-label">LinkedIn</span>
            <a
              href="https://www.linkedin.com/in/axel-manguian/"
              target="_blank"
              rel="noreferrer"
              className="contact-link"
            >
              linkedin.com/in/axel-manguian
            </a>
          </div>
        </div>
      </div>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Axel Manguian</p>
      </footer>
    </section>
  );
}

export default Contact;
