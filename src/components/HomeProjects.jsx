import '../styles/layout/Main.scss';
import PropTypes from 'prop-types';

const HomeProjects = (props) => {
  const homeProjects = props.top3Projects.map((eachProject, index) => {
    return (
      <li key={index} className="section__container--project">
        <article className="project">
          <img
            src={eachProject.avatar}
            alt={eachProject.title}
            className="project__avatar"
          />
          {/* <h2 className="project__avatar"> {eachProject.title}</h2> */}
        </article>
      </li>
    );
  });

  return (
    <>
      <section className="section">
        <div className="section__container">
          <ul className="section__container--projects">{homeProjects}</ul>
          <h2 className="section__container--title">Featured projects</h2>
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

/* */
