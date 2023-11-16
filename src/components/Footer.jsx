import '../styles/layout/Footer.scss';
import logo from '../images/s-p_logo.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__grid">
        <a href="/portfolio/">
          <img src={logo} alt="Silvia Parada Logo" className="header__logo" />
        </a>
        <div></div>
      </div>
      <div className="footer__text">
        <p className="footer__text--p">© Silvia Parada | 2023</p>
        <p className="footer__text--italic">All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
