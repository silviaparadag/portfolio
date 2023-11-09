import '../styles/layout/Main.scss';
import PropTypes from 'prop-types';

const HomeProjects = (props) => {
  const top3Projects = props.projectsList
    .sort((a, b) => b.score - a.score)
    .splice(0, 3);
  console.log(top3Projects);

  // const top3Projects = props.projectsList
  //   .map((eachProject) => {
  //     <li key={eachProject.id} className="section__container--project"></li>;
  //   })
  //   .slice(0, 3);

  return (
    <>
      <section className="section">
        <div className="section__container">
          <ul className="section__container--projects">
            <li className="section__container--project"></li>
            <li className="section__container--project"></li>
            <li className="section__container--project"></li>
          </ul>

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
  projectsList: PropTypes.array.isRequired,
};
