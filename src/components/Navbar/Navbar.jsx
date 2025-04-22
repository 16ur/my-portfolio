import "./Navbar.css";
import { useState, useEffect } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [menuClass, setMenuClass] = useState("");

  const toggleMenu = () => {
    if (isOpen) {
      setMenuClass("close");
      setTimeout(() => {
        setIsOpen(false);
        setMenuClass("");
      }, 300);
    } else {
      setIsOpen(true);
      setMenuClass("open");
    }
  };

  return (
    <nav className="navbar">
      <a href="#home" className="logo">
        <span className="logo-full">Axel Manguian</span>
        <span className="logo-short">AM</span>
      </a>

      <ul className={`navLinks ${menuClass}`}>
        <li>
          <a href="#home" onClick={toggleMenu}>
            Accueil
          </a>
        </li>
        <li>
          <a href="#aboutme" onClick={toggleMenu}>
            À propos
          </a>
        </li>
        <li>
          <a href="#work" onClick={toggleMenu}>
            Parcours
          </a>
        </li>
        <li>
          <a href="#projects" onClick={toggleMenu}>
            Projets
          </a>
        </li>
        <li>
          <a href="#contact" onClick={toggleMenu}>
            Contact
          </a>
        </li>
      </ul>

      <a
        href="https://www.linkedin.com/in/axel-manguian/"
        className="contactButton"
        target="_blank"
        rel="noopener noreferrer"
      >
        LinkedIn
      </a>

      <div className={`burger ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </nav>
  );
}

export default Navbar;
