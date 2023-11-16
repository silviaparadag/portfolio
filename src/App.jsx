import { useRef, useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeHero from './components/HomeHero';
import HomeProjects from './components/HomeProjects';
import HomeContact from './components/HomeContact';
import HomeResume from './components/HomeResume';
import AboutMe from './components/About';
import Projects from './components/Projects';
import Resume from './components/Resume';
import dataApi from './services/database';
// import dataJson from './services/db.json';
import ls from './services/localStorage';
import './styles/App.scss';

function App() {
  const [projectsList, setProjectsList] = useState([]);
  const [searchByText, setSearchByText] = useState('');
  const [searchByTech, setSearchByTech] = useState('All');
  const contactRef = useRef();
  const scrollToContact = () => {
    contactRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  /*  

*/
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

  const allProjectsList = projectsList.map((eachProject) => eachProject);
  console.log(allProjectsList);

  const top3Projects = projectsList
    .sort((a, b) => b.score - a.score)
    .splice(0, 3);
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

  return (
    <>
      <div className="App">
        <Header scrollToContact={scrollToContact} />
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
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<HomeContact />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
