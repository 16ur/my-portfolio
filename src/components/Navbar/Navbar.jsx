import "./Navbar.css";
import { useState, useEffect } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState("light");
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);

      // Detect active section
      const sections = ["home", "about", "experience", "projects", "contact"];
      for (const section of sections.reverse()) {
        const el = document.getElementById(section);
        if (el && window.scrollY >= el.offsetTop - 200) {
          setActiveSection(section);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = !isOpen ? "hidden" : "";
  };

  const closeMenu = () => {
    setIsOpen(false);
    document.body.style.overflow = "";
  };

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  const navItems = [
    { href: "#home", label: "Accueil", number: "01" },
    { href: "#about", label: "À propos", number: "02" },
    { href: "#experience", label: "Parcours", number: "03" },
    { href: "#projects", label: "Projets", number: "04" },
    { href: "#contact", label: "Contact", number: "05" },
  ];

  return (
    <>
      {/* Main Navbar */}
      <header className={`navbar ${scrolled ? "hidden" : ""}`}>
        <nav className="navbar-inner">
          <a href="#home" className="logo">
            <span className="logo-text">AM</span>
            <span className="logo-dot"></span>
          </a>

          <div className="nav-center">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`nav-link ${activeSection === item.href.slice(1) ? "active" : ""}`}
              >
                <span className="nav-link-number">{item.number}</span>
                <span className="nav-link-text">{item.label}</span>
              </a>
            ))}
          </div>

          <div className="nav-actions">
            <button
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label={theme === "light" ? "Mode sombre" : "Mode clair"}
            >
              <span className="theme-toggle-track">
                <span className="theme-toggle-thumb"></span>
              </span>
            </button>

            <button
              className={`menu-toggle ${isOpen ? "open" : ""}`}
              onClick={toggleMenu}
              aria-label={isOpen ? "Fermer" : "Menu"}
              aria-expanded={isOpen}
            >
              <span className="menu-toggle-line"></span>
              <span className="menu-toggle-line"></span>
            </button>
          </div>
        </nav>
      </header>

      {/* Floating Mini Navbar (appears on scroll) */}
      <div className={`navbar-float ${scrolled ? "visible" : ""}`}>
        <a href="#home" className="navbar-float-logo">AM</a>

        <div className="navbar-float-indicator">
          <span className="navbar-float-section">{activeSection}</span>
        </div>

        <div className="navbar-float-actions">
          <button
            className="navbar-float-theme"
            onClick={toggleTheme}
            aria-label={theme === "light" ? "Mode sombre" : "Mode clair"}
          >
            {theme === "light" ? (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </svg>
            )}
          </button>

          <button
            className={`menu-toggle ${isOpen ? "open" : ""}`}
            onClick={toggleMenu}
            aria-label={isOpen ? "Fermer" : "Menu"}
          >
            <span className="menu-toggle-line"></span>
            <span className="menu-toggle-line"></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
        <div className="mobile-menu-content">
          <nav className="mobile-nav">
            {navItems.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                className={`mobile-nav-link ${activeSection === item.href.slice(1) ? "active" : ""}`}
                onClick={closeMenu}
                style={{ "--index": index }}
              >
                <span className="mobile-nav-number">{item.number}</span>
                <span className="mobile-nav-text">{item.label}</span>
                <span className="mobile-nav-arrow">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M7 17L17 7M17 7H9M17 7V15" />
                  </svg>
                </span>
              </a>
            ))}
          </nav>

          <div className="mobile-menu-footer">
            <button className="mobile-theme-toggle" onClick={toggleTheme}>
              <span>{theme === "light" ? "Mode sombre" : "Mode clair"}</span>
              <span className="mobile-theme-icon">
                {theme === "light" ? "●" : "○"}
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
