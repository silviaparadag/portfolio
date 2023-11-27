import '../styles/layout/Resume.scss';
// import route from '../images/route-white.png';
import timelineData from '../services/timeline.json';

const Resume = () => {
  return (
    <main className="mainResume">
      <section className="sectionResume">
        <div className="sectionResume__container">
          {/* <img src={route} alt="" className="section__container--img" /> */}

          <h2 className="sectionResume__container--title">
            My profesional journey
          </h2>
          <p className="sectionResume__container--text">Timeline</p>
        </div>
        <div id="timeline"></div>
        <div className="timeline2">
          <div className="timeline2__lineH"></div>
          <div className="timeline2__group">
            <div className="timeline2__group--lineV1"></div>
            <p className="timeline2__group--text">
              2007 - 2008. Scholarships: Collaboration with the Chair of History
              of Architecture in research tasks | Management and assessment of
              model-making workshop.
            </p>
          </div>
          <div className="timeline2__group--lineV1"></div>
          <div className="timeline2__group--lineV2"></div>
        </div>
      </section>
    </main>
  );
};

export default Resume;
