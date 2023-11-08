import '../styles/layout/Footer.scss';
import logo from '../images/s-p_logo.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__grid">
        <a to="/">
          <img src={logo} alt="Silvia Logo" className="header__logo" />
        </a>
        <div></div>
      </div>
      <div className="footer__footer">
        {/* <p>©</p>
        <a
          href="https://www.linkedin.com/in/silviaparadag/"
          target="_blank"
          rel="noreferrer"
          className="footer__text--link"
        >
          {' '}
          Silvia Parada |
        </a> */}
        <p className="footer__text">© Silvia Parada | 2023</p>
      </div>
    </footer>
  );
};

export default Footer;
