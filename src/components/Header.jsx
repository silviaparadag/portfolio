import '../styles/layout/Header.scss';
//import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import logo from '../images/s-p_logo.svg';
import { useState } from 'react';

const Header = (props) => {
  const [isNavShown, setIsNavShown] = useState(false);

  const toggleNav = () => {
    setIsNavShown(!isNavShown);
    console.log();
  };

  const contactButton = props.isHomePage ? (
    <button onClick={props.scrollToContact} className="nav__link--button">
      Contact
    </button>
  ) : (
    <a href="#contact" className="nav__link--button">
      Contact
    </a>
  );

  const navigationMenu = () => (
    <nav className={`nav ${isNavShown ? 'nav--shown' : ''}`}>
      <a href="#aboutme" className="nav__link">
        About me
      </a>
      <a href="#projects" className="nav__link">
        Projects
      </a>
      <a href="#resume" className="nav__link">
        CV
      </a>
      {contactButton}
    </nav>
  );

  return (
    <header className="header">
      <>
        <a href="/portfolio/">
          <img src={logo} alt="Silvia Parada Logo" className="header__logo" />
        </a>
        {/* <nav className="nav">
          <a href="#aboutme" className="nav__link">
            About me
          </a>
          <a href="#projects" className="nav__link">
            Projects
          </a>
          <a href="#resume" className="nav__link">
            CV
          </a>
          {contactButton}
        </nav> */}
        <div className="menu">
          <div className="menu__icon" onClick={toggleNav}>
            ☰
          </div>
        </div>
        {navigationMenu()}
      </>
    </header>
  );
};

export default Header;

Header.propTypes = {
  scrollToContact: PropTypes.func.isRequired,
  isHomePage: PropTypes.bool.isRequired,
};
