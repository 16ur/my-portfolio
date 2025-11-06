import "./Navbar.css";
import { useState, useEffect } from "react";
import { MdOutlineNightlight } from "react-icons/md";
import { MdSunny } from "react-icons/md";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [menuClass, setMenuClass] = useState("");
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

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

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
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

      <button
        className="themeToggle"
        onClick={toggleTheme}
        aria-label="Changer de thème"
      >
        {theme === "light" ? <MdOutlineNightlight /> : <MdSunny />}
      </button>

      <div className={`burger ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </nav>
  );
}

export default Navbar;
