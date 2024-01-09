import '../styles/layout/MainProjects.scss';
import PropTypes from 'prop-types';
import FilterForm from '../components/FilterForm';

const ProjectsHero = (props) => {
  return (
    <section className="heroProjects">
      <div className="heroProjects__container">
        <h2 className="heroProjects__container--title">Projects</h2>
        <p className="heroProjects__container--text">
          Welcome to my Projects page, explore a portfolio of my latest tech
          work, where you'll discover the main projects I've done during the
          last year, mainly during my bootcamp at Adalab. Whether you are a
          fellow developer, a potential client, or just a curious soul or
          recruiter, I invite you to browse through them, in fact, you can
          discover more in each GitHub repository! I hope you find something
          that interests you.
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
