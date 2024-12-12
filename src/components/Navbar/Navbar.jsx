import "./Navbar.css";

function Navbar() {
  return (
    <nav className="sidebar">
      <ul className="navLinks">
        <li>
          <a href="#home">accueil</a>
        </li>
        <li>
          <a href="#aboutme">about me</a>
        </li>
        <li>
          <a href="#work">parcours</a>
        </li>
        <li>
          <a href="#projects">projets</a>
        </li>
        <li>
          <a href="#contact">contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
