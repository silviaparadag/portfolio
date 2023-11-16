import '../styles/layout/MainProjects.scss';
import PropTypes from 'prop-types';
import FilterForm from '../components/FilterForm';

const ProjectsHero = (props) => {
  return (
    <section className="heroProjects">
      <div className="heroProjects__container">
        <h2 className="heroProjects__container--title">Projects</h2>
        <p className="heroProjects__container--text">
          Explore a portfolio of my technological works, where you will discover
          the main projects I have done during the last year.
        </p>
      </div>
      <FilterForm
        handleFilters={props.handleFilters}
        searchByText={props.searchByText}
        searchByTech={props.searchByTech}
        allTechStack={props.allTechStack}
      />
    </section>
  );
};

export default ProjectsHero;

ProjectsHero.propTypes = {
  projectsList: PropTypes.array,
  handleFilters: PropTypes.func.isRequired,
  searchByText: PropTypes.string.isRequired,
  searchByTech: PropTypes.string.isRequired,
  allTechStack: PropTypes.array.isRequired,
};
