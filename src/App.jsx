import { useState } from 'react';
//import { useLocation, matchPath } from 'react-router';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Landing from './components/Landing';
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
                <Hero />
                <Projects />
                <Resume />
                <Contact />
              </main>
            </div>
          }
        />
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
