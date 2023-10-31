import { useState } from 'react';
//import { useLocation, matchPath } from 'react-router';
import { Routes, Route } from 'react-router-dom';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import Header from './components/Header';
import Footer from './components/Footer';
import Landing from './components/Landing';
//import NotFoundPage from './NotFoundPage';
import './styles/App.scss';

function App() {
  const [count, setCount] = useState(0);

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
                <div>
                  <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                  </a>
                  <a href="https://react.dev" target="_blank" rel="noreferrer">
                    <img
                      src={reactLogo}
                      className="logo react"
                      alt="React logo"
                    />
                  </a>
                </div>
                <h1>Vite + React</h1>
                <div className="card">
                  <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                  </button>
                  <p>
                    Edit <code>src/App.jsx</code> and save to test HMR
                  </p>
                </div>
                <p className="read-the-docs">
                  Click on the Vite and React logos to learn more
                </p>
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
