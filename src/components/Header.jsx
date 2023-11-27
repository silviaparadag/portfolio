import '../styles/layout/Header.scss';
//import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import logo from '../images/s-p_logo.svg';

const Header = (props) => {
  const contactButton = props.isHomePage ? (
    <button onClick={props.scrollToContact} className="nav__link--button">
      Contact
    </button>
  ) : (
    <a href="#contact" className="nav__link--button">
      Contact
    </a>
  );

  return (
    <header className="header">
      <>
        <a href="/portfolio/">
          <img src={logo} alt="Silvia Parada Logo" className="header__logo" />
        </a>
        <nav className="nav">
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
      </>
    </header>
  );
};

export default Header;

Header.propTypes = {
  scrollToContact: PropTypes.func.isRequired,
  isHomePage: PropTypes.bool.isRequired,
};
