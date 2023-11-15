import '../styles/layout/Main.scss';
import heroImage from '../images/sp-cap-bis.svg';

const HomeHero = () => {
  return (
    <>
      <section className="hero">
        <div className="hero__container">
          <h1 className="hero__container--title">Introducing Silvia</h1>
          <div className="hero__container--subtitle">
            Jr. Frontend Developer & Architect{' '}
          </div>
          <p className="hero__container--text">
            Looking for new challenges in IT sector as Devoloper or Product
            Manager where I bring my experience of 15+ years in management and
            design. <br />
            Enthusiasm and passion for everything I work on. <br />
            Ask me about design, restaurants and speciality coffee, and find me
            under a cap.
          </p>
        </div>
        <div className="hero__container2">
          <img
            src={heroImage}
            alt="Silvia Parada Cap sketch"
            className="hero__container2--img"
          />
        </div>
      </section>
    </>
  );
};

export default HomeHero;
