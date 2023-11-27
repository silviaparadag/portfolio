import '../styles/layout/Header.scss';
//import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import logo from '../images/s-p_logo.svg';

const Header = (props) => {
  return (
    <header className="header">
      <>
        <a href="/portfolio/">
          <img src={logo} alt="Silvia Parada Logo" className="header__logo" />
        </a>
        <nav className="nav">
          {/* <a href="#home" className="nav__link">
            Home
          </a> */}
          <a href="#aboutme" className="nav__link">
            About me
          </a>
          <a href="#projects" className="nav__link">
            Projects
          </a>
          <a href="#resume" className="nav__link">
            CV
          </a>

          <button onClick={props.scrollToContact} className="nav__link--button">
            Contact
          </button>
        </nav>
      </>
    </header>
  );
};

export default Header;

Header.propTypes = {
  scrollToContact: PropTypes.func.isRequired,
  //isLandingPage: PropTypes.bool.isRequired,
};
