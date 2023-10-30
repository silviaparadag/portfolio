import logo from '../images/faviconSP.png';
import '../styles/layout/Header.scss';

const Header = () => {
  return (
    <header className="header">
      <a to="/">
        <img src={logo} alt="Rick and Morty" className="header__img" />
      </a>
    </header>
  );
};

export default Header;
