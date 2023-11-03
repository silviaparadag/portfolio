import logo from '../images/sp_logo-white.svg';
import '../styles/layout/Header.scss';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <a to="/">
          <img src={logo} alt="Rick and Morty" className="header__logo" />
        </a>
        <nav className="nav">
          <a href="#about-me" className="nav__link">
            About me
          </a>
          <a href="#projects" className="nav__link">
            Projects
          </a>
          <a href="#resume" className="nav__link">
            CV | Resume
          </a>
          <a href="#contact" className="nav__link--button">
            Contact
          </a>
          {/* */}
        </nav>
      </div>
    </header>
  );
};

export default Header;
