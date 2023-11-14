import { useRef, useEffect, useState } from 'react';
//import { useLocation, matchPath } from 'react-router';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeHero from './components/HomeHero';
import HomeProjects from './components/HomeProjects';
import HomeContact from './components/HomeContact';
import HomeResume from './components/HomeResume';
import Landing from './components/Landing';
import AboutMe from './components/About';
import Projects from './components/Projects';
import Resume from './components/Resume';
import dataApi from './services/database';
//import NotFoundPage from './NotFoundPage';
import Loader from './components/Loader';
import './styles/App.scss';

function App() {
  const [projectsList, setProjectsList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  // const [forceRender, setForceRender] = useState(false);
  // const [imagesLoaded, setImagesLoaded] = useState(0);

  const contactRef = useRef();
  const scrollToContact = () => {
    contactRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  /* setIsLoading(true);*/
  useEffect(() => {
    dataApi().then((data) => {
      const result = data.projects.map((eachProject) => eachProject);
      setProjectsList(result);
      setIsLoading(true);
    });
  }, []);
  console.log(projectsList);

  const allProjectsList = projectsList.map((eachProject) => eachProject);
  console.log(allProjectsList);

  const top3Projects = projectsList
    .sort((a, b) => b.score - a.score)
    .splice(0, 3);
  console.log(top3Projects);

  const location = useLocation();
  const isLandingPage = location.pathname === '/';
  if (!isLoading) {
    return <Loader />;
  }

  return (
    <>
      {!isLandingPage && <Header scrollToContact={scrollToContact} />}
      <div className="App">
        {/* <Header
          // isLandingPage={isLandingPage}
          scrollToContact={scrollToContact}
        /> */}
        <Routes>
          <Route path="/" element={<Landing />}></Route>
          <Route
            path="/Home"
            element={
              <>
                {' '}
                <main className="main">
                  <HomeHero />
                  <HomeProjects
                    top3Projects={top3Projects}
                    // isLoading={isLoading}
                  />
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
          {/* <Route
          path="/project/:id"
          element={
            < />
          }
        /> */}
          {/* <Route path="*" element={<NotFoundPage />} /> */}
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
