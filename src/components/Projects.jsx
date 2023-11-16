import '../styles/layout/MainProjects.scss';
import PropTypes from 'prop-types';
import ProjectsHero from '../components/ProjectsHero';

const Projects = (props) => {
  const projects = props.filteredProjects.map((eachProject) => {
    return (
      <li key={eachProject.id} className="sectionProjects__container--project">
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
  console.log(projects);

  return (
    <main className="mainProjects">
      <ProjectsHero
        handleFilters={props.handleFilters}
        searchByTech={props.searchByTech}
        allTechStack={props.allTechStack}
      />
      <section className="sectionProjects">
        <ul className="sectionProjects__container--projects">{projects}</ul>
      </section>
    </main>
  );
};

export default Projects;

Projects.propTypes = {
  filteredProjects: PropTypes.array.isRequired,
  handleFilters: PropTypes.func.isRequired,
  searchByText: PropTypes.string,
  searchByTech: PropTypes.string.isRequired,
  allTechStack: PropTypes.array.isRequired,
};
