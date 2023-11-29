import '../styles/layout/Resume.scss';
import PropTypes from 'prop-types';

const Resume = (props) => {
  const jobDescriptionClassName = `milestonesJobs2__item ${
    props.isShown ? 'focused' : ''
  }`;

  const jobDescription = props.jobsList.map((eachJob) => {
    return (
      <li key={eachJob.id} className={jobDescriptionClassName}>
        {/* <div className="milestonesJobs2__item--group"> </div> */}
        <div className="milestonesJobs2__item--group2">
          <h5 className="milestonesJobs2__item--text">{eachJob.year}</h5>
          <p className="milestonesJobs2__item--text">{eachJob.desc}</p>
        </div>
        {/* <div className="milestonesJobs2__item--lineH2"></div> */}
      </li>
    );
  });

  const jobs = props.jobsList.map((eachJob) => {
    return (
      <li
        key={eachJob.id}
        className="milestonesJobs__item"
        onMouseEnter={props.handleMouseOn}
        onMouseLeave={props.handleMouseOff}
      >
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
  // const titles = props.titlesList.map((eachTitle) => {
  //   return (
  //     <li key={eachTitle.id} className="milestonesEducation__item">
  //       <div className="milestonesEducation__item--group">
  //         <div className="milestonesEducation__item--text">
  //           {eachTitle.name}
  //         </div>
  //         <div className="milestonesEducation__item--lineH1"></div>
  //       </div>
  //     </li>
  //   );
  // });

  return (
    <main className="mainResume">
      <section className="sectionResume">
        <div className="sectionResume__container">
          <h2 className="sectionResume__container--title">
            My{' '}
            <span className="sectionResume__container--titleSpan">
              professional
            </span>{' '}
            journey
          </h2>
          {/* <div className="sectionResume__container--text"> </div> */}
          <p className="sectionResume__container--text">
            My professional journey in management and architecture, and my
            exciting transition into frontend development. Discover more about
            my experience and skills.
          </p>
        </div>
        <div className="timeline__container">
          <div className="timeline__lineV"></div>
          {/* <ul className="milestonesEducation">{titles}</ul> */}
          <ul className="milestonesJobs2">{jobDescription}</ul>
          <ul className="milestonesJobs">{jobs}</ul>
        </div>
      </section>
      <section className="sectionResume"></section>
    </main>
  );
};

export default Resume;

Resume.propTypes = {
  jobsList: PropTypes.array.isRequired,
  titlesList: PropTypes.array.isRequired,
  handleMouseOff: PropTypes.func,
  handleMouseOn: PropTypes.func,
  isShown: PropTypes.bool,
};
