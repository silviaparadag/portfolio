import { useRef, useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
//import { animateScroll as scroll } from 'react-scroll';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeHero from './components/HomeHero';
import HomeProjects from './components/HomeProjects';
import HomeContact from './components/HomeContact';
import Contact from './components/Contact';
import HomeResume from './components/HomeResume';
import AboutMe from './components/About';
import Projects from './components/Projects';
import Resume from './components/Resume';
import dataApi from './services/database';
import ls from './services/localStorage';
import './styles/App.scss';

function App() {
  const [projectsList, setProjectsList] = useState(ls.get('projects', []));
  const [searchByText, setSearchByText] = useState('');
  const [searchByTech, setSearchByTech] = useState('All');
  const [jobsList, setJobsList] = useState(ls.get('jobs', []));
  const [titlesList, setTitlesList] = useState(ls.get('education', []));

  const contactRef = useRef();

  const scrollToContact = () => {
    if (contactRef.current) {
      const offsetTop = contactRef.current.offsetTop;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    if (ls.get('projects', null) === null) {
      dataApi.getProjectsFromApi().then((data) => {
        const result = data.projects.map((eachProject) => eachProject);
        setProjectsList(result);
        ls.set('projects', result);
      });
    }
  }, []);
  console.log(projectsList);

  useEffect(() => {
    if (ls.get('jobs', null) === null) {
      dataApi.getJobsFromApi().then((data) => {
        const result = data.map((eachJob) => eachJob);
        setJobsList(result);
        ls.set('jobs', result);
      });
    }
  }, []);
  console.log(jobsList);

  useEffect(() => {
    if (ls.get('education', null) === null) {
      dataApi.getEducationFromApi().then((data) => {
        const result = data.education.map((eachTitle) => eachTitle);
        setTitlesList(result);
        ls.set('education', result);
      });
    }
  }, []);
  console.log(titlesList);

  const orderedJobs = jobsList.sort((a, b) => b.year - a.year);
  console.log(orderedJobs);

  const allProjectsList = projectsList.map((eachProject) => eachProject);
  console.log(allProjectsList);

  const top3Projects = projectsList
    .slice()
    .sort((a, b) => b.score - a.score)
    .slice(0, 3);
  console.log(top3Projects);

  const handleFilters = (varName, varValue) => {
    if (varName === 'name') {
      setSearchByText(varValue.toLowerCase());
    } else if (varName === 'tech') setSearchByTech(varValue);
  };

  const filteredProjects = allProjectsList
    .filter((eachProject) => {
      const text = `${eachProject.title}+${eachProject.desc}`;
      return text.toLowerCase().includes(searchByText.toLowerCase());
    })
    .filter((eachProject) =>
      searchByTech === 'All' ? true : eachProject.tech.includes(searchByTech)
    );
  console.log(filteredProjects);

  const techStack = allProjectsList.map((eachProject) => eachProject.tech);
  const flatTechStack = techStack.flat();
  const allTechStack = [...new Set(flatTechStack)];
  console.log(allTechStack);

  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <>
      <div className="App">
        <Header scrollToContact={scrollToContact} isHomePage={isHomePage} />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <main className="main">
                  <HomeHero />
                  <HomeProjects top3Projects={top3Projects} />
                  <HomeResume />
                  <HomeContact contactRef={contactRef} />
                </main>
              </>
            }
          />
          <Route path="/aboutme" element={<AboutMe />} />
          <Route
            path="/projects"
            element={
              <>
                <Projects
                  handleFilters={handleFilters}
                  searchByTech={searchByTech}
                  allTechStack={allTechStack}
                  filteredProjects={filteredProjects}
                />
              </>
            }
          />
          <Route
            path="/resume"
            element={<Resume jobsList={orderedJobs} titlesList={titlesList} />}
          />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
