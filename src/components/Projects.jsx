import '../styles/layout/MainProjects.scss';
import PropTypes from 'prop-types';

const Projects = (props) => {
  const projects = props.allProjectsList.map((eachProject, index) => {
    return (
      <li key={index} className="sectionProjects__container--project">
        <article className="projectCard">
          <img
            src={eachProject.img}
            alt={eachProject.title}
            className="projectCard__img"
          />
          <div className="projectCard__info">
            <h2 className="projectCard__info--title">{eachProject.title}</h2>
            <p className="projectCard__info--text1">{eachProject.desc}</p>
            <p className="projectCard__info--text2">{eachProject.type}</p>
          </div>
          <div className="projectCard__icons">
            <a
              href={eachProject.repo}
              className="projectCard__icons--link"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-github-alt"></i>
            </a>
            <a
              href={eachProject.url}
              className="projectCard__icons--link"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-solid fa-globe"></i>
            </a>

            <a
              href={eachProject.repo}
              className="projectCard__icons--link"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-solid fa-gear"></i>
            </a>
          </div>
        </article>
      </li>
    );
  });
  return (
    <main className="mainProjects">
      <section className="heroProjects">
        <div className="heroProjects__container">
          <h2 className="heroProjects__container--title">Projects</h2>
          <p className="heroProjects__container--text">
            Explore a portfolio of my technological works, where you will
            discover the main projects I have done during the last year.
          </p>
        </div>
        <form className="filters">
          <fieldset className="filters__fieldset">
            <label className="filters__label" htmlFor="search_name">
              Project name
            </label>
            <input
              className="filters__field"
              type="text"
              name="search_name"
              placeholder="Project name"
              id="search_name"
              value="search_name"
              // onChange={handleChangeSearchName}
            />
          </fieldset>
          <fieldset className="filters__fieldset">
            <label className="filters__label" htmlFor="search_technology">
              Tech stack
            </label>
            <select
              className="filters__select"
              name="search_technology"
              id="search_technology"
              value="Technology"
              //onChange={handleChangeSearchTechnology}
            >
              <option value="All">Todas</option>
              <option value="html">HTML/CSS</option>
              <option value="JavaScript">JavaScript</option>
              <option value="ReactJS">React JS</option>
              <option value="ReactJS">MySQL</option>
            </select>
          </fieldset>
        </form>
      </section>
      <section className="sectionProjects">
        <ul className="sectionProjects__container--projects">{projects}</ul>
      </section>
    </main>
  );
};

export default Projects;

Projects.propTypes = {
  allProjectsList: PropTypes.array.isRequired,
};
