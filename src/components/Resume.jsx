import '../styles/layout/Resume.scss';
import PropTypes from 'prop-types';
// import route from '../images/route-white.png';

const Resume = (props) => {
  const jobs = props.jobsList.map((eachJob) => {
    return (
      <li key={eachJob.id} className="milestonesJobs__item">
        <div className="milestonesJobs__item--group">
          <div className="milestonesJobs__item--text">{eachJob.company}</div>
          <div className="milestonesJobs__group--lineV1"></div>
        </div>
      </li>
    );
  });
  const degrees = props.degreeList.map((eachTitle) => {
    return (
      <li key={eachTitle.id} className="milestonesEducation__item">
        <div className="milestonesEducation__item--group">
          <div className="milestonesEducation__item--text">
            {eachTitle.name}
          </div>
          <div className="milestonesEducation__group--lineV1"></div>
        </div>
      </li>
    );
  });

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
        <div className="timeline__lineH"></div>
        <ul className="milestonesJobs">{jobs}</ul>
        <div className="circle-container"></div>
        <ul className="milestonesEducation">{degrees}</ul>
      </section>
    </main>
  );
};

export default Resume;

Resume.propTypes = {
  jobsList: PropTypes.array.isRequired,
  degreeList: PropTypes.array.isRequired,
};
