import '../styles/layout/Header.scss';
//import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import logo from '../images/s-p_logo.svg';

const Header = ({ scrollToContact }) => {
  // const scrollToContact = () => {
  //   // ev.current.scrollIntoView({ behavior: 'smooth' });
  //   const contactSection = document.getElementById('contact');
  //   contactSection.scrollIntoView({ behavior: 'smooth' });
  // };

  return (
    <header className="header">
      <a to="/">
        <img src={logo} alt="Silvia Logo" className="header__logo" />
      </a>
      {/* <div className="container"></div> */}
      <nav className="nav">
        <a href="#aboutme" className="nav__link">
          About me
        </a>
        <a href="#projects" className="nav__link">
          Projects
        </a>
        <a href="#cv" className="nav__link">
          CV | Resume
        </a>
        {/* <a href="#contact" className="nav__link--button">
          Contact
        </a> */}
        <button
          onClick={scrollToContact}
          // to="/contact"
          className="nav__link--button"
        >
          Contact
        </button>
      </nav>
    </header>
  );
};

export default Header;

Header.propTypes = {
  scrollToContact: PropTypes.func.isRequired,
};
