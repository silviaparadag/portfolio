import { useState } from 'react';
//import { useLocation, matchPath } from 'react-router';
import { Routes, Route } from 'react-router-dom';
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
//import NotFoundPage from './NotFoundPage';
import './styles/App.scss';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route
          path="/Home"
          element={
            <div className="App">
              <Header />
              <main className="main">
                <HomeHero />
                <HomeProjects />
                <HomeResume />
                <HomeContact />
              </main>
            </div>
          }
        />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
        {/* <Route
          path="/project/:id"
          element={
            < />
          }
        /> */}
        {/* <Route path="*" element={<NotFoundPage />} /> */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
