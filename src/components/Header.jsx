import React from 'react';
import '../styles/layout/Header.scss';
//import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import logo from '../images/s-p_logo.svg';
import { useState, useEffect } from 'react';

const Header = (props) => {
  const [isNavShown, setIsNavShown] = useState(false);

  const toggleNav = () => {
    setIsNavShown(!isNavShown);
  };
  const handleClick = () => {
    setIsNavShown(false);
  };

  useEffect(() => {
    setIsNavShown(false);
  }, []);

  const contactButton = props.isHomePage ? (
    <button
      onClick={() => {
        props.scrollToContact();
        handleClick();
      }}
      className="nav__link--button"
    >
      Contact
    </button>
  ) : (
    <a onClick={handleClick} href="#contact" className="nav__link--button">
      Contact
    </a>
  );

  const navigationMenu = () => (
    <nav className={`nav ${isNavShown ? '' : 'nav--shown'}`}>
      <a onClick={handleClick} href="#aboutme" className="nav__link">
        About me
      </a>
      <a onClick={handleClick} href="#projects" className="nav__link">
        Projects
      </a>
      <a onClick={handleClick} href="#resume" className="nav__link">
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
