import '../styles/layout/Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <span className="footer__text">
        ©
        <a
          href="https://www.linkedin.com/in/silviaparadag/"
          target="_blank"
          rel="noreferrer"
          className="footer__text--link"
        >
          {' '}
          Silvia Parada |
        </a>
      </span>
      <span className="footer__text">| 2023</span>
    </footer>
  );
};

export default Footer;
