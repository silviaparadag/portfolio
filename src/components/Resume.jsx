import '../styles/layout/Resume.scss';
import cap from '../images/sp-cap-bis.svg';
import fromWhere from '../images/from-where.svg';
import fromWhereMobile from '../images/from-where-mobile.svg';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import SliderOldProjects from './SliderOldProjects';

const Resume = (props) => {
  const [isShown, setIsShown] = useState(false);
  const [jobId, setJobId] = useState('');

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleMouseOn = (id) => {
    setJobId(id);
    setIsShown(true);
  };
  const handleMouseOff = () => {
    setJobId('');
    setIsShown(false);
  };
  const jobDescriptionClassName = `jobDescription__item ${
    isShown ? 'focused' : ''
  }`;

  const jobDescription = props.jobsList.map((eachJob) =>
    isShown && eachJob.id === jobId ? (
      <li key={eachJob.id} className={jobDescriptionClassName}>
        <div className="jobDescription__item--group2">
          <h5 className="jobDescription__item--title">{eachJob.period}</h5>
          <p className="jobDescription__item--text wrap">{eachJob.desc}</p>
        </div>
      </li>
    ) : (
      <li key={eachJob.id} className="jobDescription__item"></li>
    )
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
        <div className="milestonesEducation__item--title">
          <div className="milestonesEducation__item--text">
            {eachTitle.name}
          </div>{' '}
          <div className="milestonesEducation__item--text2">
            {eachTitle.year}
            <br />
            <p className="padding"> {eachTitle.institution}</p>
          </div>
        </div>
        <div className="milestonesEducation__item--dot"></div>
        <div className="milestonesEducation__item--lineV"></div>
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
            Let's discover more about my professional career in management and
            architecture, before my exciting transition to web development. Find
            out more about my experience and skills.
          </p>
        </div>
        <div className="sectionResume__container2">
          <div className="sectionResume__container2--left">
            <div className="sectionResume__container2--lineV"></div>
            <ul className="milestonesJobs">{jobs}</ul>
          </div>
          <ul className="jobDescription">{jobDescription}</ul>
        </div>
      </section>{' '}
      <section className="sectionResume3">
        <div className="sectionResume3__container">
          <h2 className="sectionResume3__container--title">Some of </h2>{' '}
          <h2 className="sectionResume3__container--title2">me</h2>{' '}
          <p className="sectionResume3__container--text">
            Each of the following projects contains something of me, designing,
            managing or building.{' '}
          </p>{' '}
        </div>

        <div className="sectionResume3__container2"></div>
        <SliderOldProjects jobsList={props.jobsList} />
      </section>
      <section className="sectionResume2">
        <div className="sectionResume2__container">
          <h2 className="sectionResume2__container--title">
            Education & skills
          </h2>
          <p className="sectionResume2__container--text">
            A brief overview of my educational background and skillset.
          </p>
        </div>
        <div className="milestonesEducation">
          <div className="milestonesEducation__lineH"></div>
          <ul className="milestonesEducation__items">{titles}</ul>
        </div>
      </section>{' '}
      <section className="sectionResume5">
        <div className="sectionResume5__container">
          <h2 className="sectionResume5__container--title">From </h2>{' '}
          <h2 className="sectionResume5__container--title2">where</h2>{' '}
        </div>
        <div className="sectionResume5__container2">
          <img
            src={windowWidth < 480 ? fromWhereMobile : fromWhere}
            alt="Location timeline"
            className="sectionResume5__container2--img"
          />
        </div>
      </section>
      <section className="sectionResume4">
        <div className="sectionResume4__container">
          <img
            src={cap}
            alt="Silvia Parada Cap sketch"
            className="sectionResume4__container--img"
          />
          <h2 className="sectionResume4__container--title">It's almost here</h2>{' '}
          <p className="sectionResume4__container--text">
            You can't take a look at my resume in the following links.
          </p>
        </div>
        <div className="sectionResume4__link">
          <a
            href="https://drive.google.com/file/d/1-0pgFZxXrXMVum27wIPfUbcsHS-FMhWb/view?usp=sharing"
            className="sectionResume4__link--button1"
            target="_blank"
            rel="noreferrer"
          >
            EN
          </a>
          <a
            href="https://drive.google.com/file/d/1-2D-XpJWCfx_47f97NA-0S-YBoiKmq8k/view?usp=sharing"
            className="sectionResume4__link--button2"
            target="_blank"
            rel="noreferrer"
          >
            ES
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
};
