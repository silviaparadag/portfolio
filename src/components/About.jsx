import '../styles/layout/About.scss';
import avatar from '../images/sp-funko.png';

const About = () => {
  return (
    <main className="aboutProjects">
      <section className="heroAbout">
        <div className="heroAbout__container">
          <div className="heroAbout__container--img">
            <img
              src={avatar}
              alt="My personalized funko"
              className="heroAbout__container--avatar"
            />
          </div>
          <h1 className="heroAbout__container--title">Hi, I'm Silvia!</h1>
          <div className="heroAbout__container--subtitle">
            Jr. Frontend Developer & Architect{' '}
          </div>
          <p className="heroAbout__container--text">
            I am looking for new challenges in IT where I bring my experience of
            15+ years in management and design. <br />
            My journey has also led me to explore the world of web development,
            and I recently completed a Web Developer program at Adalab. This
            adventure has helped me to further my passion for the world of
            technology, focusing on frontend and backend technologies such as
            HTML5, CSS, JavaScript, ReactJS, NodeJS and Express, AgileTools,
            Git&GitHub <br />
            As an adaptable and collaborative professional, I am confident in my
            ability to pair program effectively, drive technical improvements,
            and contribute to the growth of any organization.
            <br />I am well-versed in working with cross-functional teams and am
            used to adapting to diverse and dynamic work environments.
          </p>
        </div>
      </section>
    </main>
  );
};

export default About;
