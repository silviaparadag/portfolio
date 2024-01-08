import '../styles/layout/Main.scss';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const HomeProjects = (props) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const homeProjects = props.top3Projects.map((eachProject, index) => {
    return (
      <li key={index} className="section__container--project">
        <article className="project">
          <img
            src={`https://silviaparadag.github.io/api-sp/projects-portfolio/avatars/${eachProject.avatar}`}
            alt={eachProject.title}
            className="project__avatar"
          />
        </article>
      </li>
    );
  });

  const oneProject = props.top3Projects
    .map((eachProject, index) => {
      return (
        <li key={index} className="section__container--project">
          <article className="project">
            <img
              src={`https://silviaparadag.github.io/api-sp/projects-portfolio/avatars/${eachProject.avatar}`}
              alt={eachProject.title}
              className="project__avatar"
            />
          </article>
        </li>
      );
    })
    .slice(0, 1);

  console.log(oneProject);

  return (
    <>
      <section className="section">
        <ul className="section__container--projects">
          {windowWidth < 480 ? oneProject : homeProjects}
        </ul>
        <div className="section__container">
          <a href="#projects" className="section__container--link">
            <h2 className="section__container--title">Featured projects</h2>
          </a>
          <p className="section__container--text">
            Explore a portfolio of my technological works, where you will
            discover the main projects I have done during the last year.
          </p>
        </div>
      </section>
    </>
  );
};

export default HomeProjects;

HomeProjects.propTypes = {
  top3Projects: PropTypes.array.isRequired,
};

/* 
//import Loader from './Loader';
 <h2 className="project__avatar"> {eachProject.title}</h2>
 */
