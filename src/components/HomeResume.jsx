import '../styles/layout/Main.scss';
import route from '../images/route-white.png';

const HomeResume = () => {
  return (
    <>
      {' '}
      <section className="section" id="cv">
        <img
          src={route}
          alt="Route map sketch"
          className="section__container--img"
        />
        <div className="section__container">
          <h2 className="section__container--title">My professional journey</h2>
          <p className="section__container--text">
            My professional journey in management and architecture, and my
            exciting transition into frontend development. Discover more about
            my experience and skills.
          </p>
        </div>
      </section>
    </>
  );
};

export default HomeResume;
