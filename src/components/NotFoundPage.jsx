import { Link } from 'react-router-dom';

import errorPhoto from '../images/sp_bg.svg';

import '../styles/layout/NotFoundPage.scss';

const NotFoundPage = () => {
  return (
    <div className="notfound">
      <h2 className="notfound__title">Error 404: project not found</h2>
      <img
        className="notfound__img"
        src={errorPhoto}
        alt="Silvia Parada logo project not found"
      />
      <Link className="notfound__link" to="/Home">
        <i className="notfound__link--icon fa-solid fa-arrow-left"></i>
      </Link>
    </div>
  );
};

export default NotFoundPage;
