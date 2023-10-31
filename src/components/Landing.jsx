import logo from '../images/faviconSP.png';
import { Link } from 'react-router-dom';
import '../styles/layout/Landing.scss';

const Landing = () => {
  return (
    <div className="landing">
      <p className="landing__title">
        Discover more about me
        {/* <span className="landing__title--strong">Silvia Parada</span> */}
      </p>
      <Link className="landing__btn" to="/Home">
        {/* <img src={logo} alt="Silvia Parada Logo" className="landing__img" /> */}
        <p className="landing__btn--text">Enter</p>
      </Link>
    </div>
  );
};

export default Landing;
