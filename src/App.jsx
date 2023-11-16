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
import './styles/App.scss';

function App() {
  const [projectsList, setProjectsList] = useState([]);

  const contactRef = useRef();
  const scrollToContact = () => {
    contactRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    dataApi().then((data) => {
      const result = data.projects.map((eachProject) => eachProject);
      setProjectsList(result);
    });
  }, []);
  console.log(projectsList);

  const allProjectsList = projectsList.map((eachProject) => eachProject);
  console.log(allProjectsList);

  const top3Projects = projectsList
    .sort((a, b) => b.score - a.score)
    .splice(0, 3);
  console.log(top3Projects);

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
            element={<Projects allProjectsList={allProjectsList} />}
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
