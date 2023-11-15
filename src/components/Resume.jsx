import '../styles/layout/Main.scss';
import route from '../images/route-white.png';

const HomeResume = () => {
  return (
    <>
      {' '}
      <section className="section">
        <div className="section__container">
          <img src={route} alt="" className="section__container--img" />

          <h2 className="section__container--title">My profesional journey</h2>
          <p className="section__container--text">Timeline</p>
        </div>
      </section>
    </>
  );
};

export default HomeResume;