import logo from '../images/s-p_logo.svg';
import '../styles/layout/Header.scss';

const Header = () => {
  return (
    <header className="header">
      <a to="/">
        <img src={logo} alt="Silvia Logo" className="header__logo" />
      </a>
      <div className="container"></div>
      <nav className="nav">
        <a href="#aboutme" className="nav__link">
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
        {/* Here, go to form in homepage, not in a new page*/}
      </nav>
    </header>
  );
};

export default Header;
