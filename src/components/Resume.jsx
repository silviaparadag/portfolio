import '../styles/layout/Resume.scss';
import img from '../images/ag-cm.jpeg';
import img2 from '../images/ap-cc.jpg';
import img3 from '../images/rta-hl.jpg';
import { useState } from 'react';
import PropTypes from 'prop-types';

const Resume = (props) => {
  const [isShown, setIsShown] = useState(false);
  const [jobId, setJobId] = useState('');

  const handleMouseOn = (id) => {
    setJobId(id);
    setIsShown(true);
  };
  const handleMouseOff = () => {
    setJobId('');
    setIsShown(false);
  };
  const jobDescriptionClassName = `milestonesJobs2__item ${
    isShown ? 'focused' : ''
  }`;

  const jobDescription = props.jobsList.map((eachJob) =>
    isShown && eachJob.id === jobId ? (
      <li key={eachJob.id} className={jobDescriptionClassName}>
        <div className="milestonesJobs2__item--group2">
          <h5 className="milestonesJobs2__item--text">{eachJob.year}</h5>
          <p className="milestonesJobs2__item--text">{eachJob.desc}</p>
        </div>
      </li>
    ) : null
  );

  const jobs = props.jobsList.map((eachJob) => {
    return (
      <li
        key={eachJob.id}
        className="milestonesJobs__item"
        onMouseEnter={() => handleMouseOn(eachJob.id)}
        onMouseLeave={handleMouseOff}
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
            My{' '}
            <span className="sectionResume__container--titleSpan">
              professional
            </span>{' '}
            journey
          </h2>
          <p className="sectionResume__container--text">
            My professional journey in management and architecture, and my
            exciting transition into frontend development. Discover more about
            my experience and skills.
          </p>
        </div>
        <div className="timeline__container">
          <div className="timeline__lineV"></div>
          <ul className="milestonesJobs2">{jobDescription}</ul>
          <ul className="milestonesJobs">{jobs}</ul>
        </div>
      </section>
      <section className="sectionResume2">
        <div className="sectionResume2__container">
          <h2 className="sectionResume2__container--title">Education</h2>
          <p className="sectionResume2__container--text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className="milestonesEducation">
          <ul className="milestonesEducation">{titles}</ul>
        </div>
      </section>
      <section className="sectionResume3">
        <div className="sectionResume3__container">
          <h2 className="sectionResume3__container--title">Some of </h2>{' '}
          <h2 className="sectionResume3__container--title2">me</h2>{' '}
        </div>
        <div className="sectionResume3__container2">
          <img
            src={img2}
            alt="Image El Cuartel del Mar"
            className="sectionResume3__container2--img2"
          />
          <img
            src={img}
            alt="Image El Cuartel del Mar"
            className="sectionResume3__container2--img"
          />
          <img
            src={img3}
            alt="Image El Cuartel del Mar"
            className="sectionResume3__container2--img2"
          />
        </div>
      </section>
      <section className="sectionResume4">
        <div className="sectionResume4__container">
          <h2 className="sectionResume4__container--title">
            Take a look at my CV
          </h2>{' '}
        </div>
        <div className="mainResume__link">
          <a href="#" className="mainResume__link--button">
            English
          </a>
          <a href="#" className="mainResume__link--button">
            Español
          </a>
        </div>
      </section>
    </main>
  );
};

export default Resume;

Resume.propTypes = {
  jobsList: PropTypes.array.isRequired,
  titlesList: PropTypes.array.isRequired,
  // handleMouseOff: PropTypes.func,
  // handleMouseOn: PropTypes.func,
  // isShown: PropTypes.bool,
};
