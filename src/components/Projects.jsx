import '../styles/layout/Main.scss';

const Projects = () => {
  return (
    <>
      <section className="section">
        <div className="section__container">
          <div className="section__container--projects">
            <div className="section__container--project"></div>
            <div className="section__container--project"></div>
            <div className="section__container--project"></div>
          </div>

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

export default Projects;
