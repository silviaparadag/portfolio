import { useState } from 'react';
//import { useLocation, matchPath } from 'react-router';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
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
                <section className="hero">
                  <div className="hero__container">
                    <h1 className="hero__container--title">
                      Introducing Silvia
                    </h1>
                    <div className="hero__container--subtitle">
                      Jr. Frontend Developer & Architect{' '}
                    </div>
                    <p className="hero__container--text">
                      Ipsum praesentium similique ratione laborum nostrum
                      laudantium, assumenda optio consequatur neque provident
                      dolore libero atque, molestias exercitationem tempora
                      consequuntur repellat magnam nisi!
                    </p>
                  </div>
                </section>
                <section className="section">
                  <div className="section__container">
                    <h2 className="section__container--title">Projects</h2>
                    <p className="section__container--text">
                      Ipsum praesentium similique ratione laborum nostrum
                      laudantium, assumenda optio consequatur neque provident
                      dolore libero atque, molestias exercitationem tempora
                      consequuntur repellat magnam nisi!
                    </p>
                  </div>
                </section>
                <section className="section">
                  <div className="section__container">
                    <h2 className="section__container--title">
                      My profesional journey
                    </h2>
                    <p className="section__container--text">
                      Ipsum praesentium similique ratione laborum nostrum
                      laudantium, assumenda optio consequatur neque provident
                      dolore libero atque, molestias exercitationem tempora
                      consequuntur repellat magnam nisi!
                    </p>
                  </div>
                </section>
                <section className="section">
                  <div className="section__container">
                    <h2 className="section__container--title">Contact me</h2>
                    <form className="form" action="">
                      <label htmlFor="name" className="form__label">
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Paquita Salas"
                        className="form__input"
                      />
                      <label htmlFor="email" className="form__label">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="paquita@psmanagemenet.com"
                        className="form__input"
                      />
                      <label htmlFor="message" className="form__label">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        placeholder="Your message"
                        className="form__textarea"
                      />
                    </form>
                  </div>
                </section>
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
