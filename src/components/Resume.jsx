import '../styles/layout/Resume.scss';
import PropTypes from 'prop-types';

const Resume = (props) => {
  const jobs = props.jobsList.map((eachJob) => {
    return (
      <li key={eachJob.id} className="milestonesJobs__item">
        <div className="milestonesJobs__item--group">
          <div className="milestonesJobs__item--lineH1"></div>
          <div className="milestonesJobs__item--group2">
            <h5 className="milestonesJobs__item--text">{eachJob.company}</h5>
            <p className="milestonesJobs__item--text2">{eachJob.job}</p>
          </div>
        </div>
      </li>
    );
  });
  const titles = props.titlesList.map((eachTitle) => {
    return (
      <li key={eachTitle.id} className="milestonesEducation__item">
        <div className="milestonesEducation__item--group">
          <div className="milestonesEducation__item--text">
            {eachTitle.name}
          </div>
          <div className="milestonesEducation__item--lineH1"></div>
        </div>
      </li>
    );
  });

  return (
    <main className="mainResume">
      <section className="sectionResume">
        <div className="sectionResume__container">
          <h2 className="sectionResume__container--title">
            My professional journey
          </h2>
          <p className="sectionResume__container--text">Timeline</p>
        </div>
        <div className="timeline__container">
          <div className="timeline__lineV"></div>
          <ul className="milestonesEducation">{titles}</ul>
          <ul className="milestonesJobs">{jobs}</ul>
        </div>
      </section>
    </main>
  );
};

export default Resume;

Resume.propTypes = {
  jobsList: PropTypes.array.isRequired,
  titlesList: PropTypes.array.isRequired,
};
