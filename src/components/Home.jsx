import './Home.css';
import React from 'react';
import {useNavigate} from 'react-router-dom';
import logo from '../img/logo.jpg';
import mainPhoto from '../img/main_photo.jpg';
import global from '../img/global.png';
import gallery from '../img/gallery.png';
import nobilis from '../img/nobilis.png';
import parus from '../img/parus.png';
import riel from '../img/riel.png';
import vam from '../img/vam.png';
import tmd from '../img/tmd.png';
import soft from '../img/soft.png';
import km from '../img/km.png';
import gw from '../img/gw.png';
import ukr from '../img/ukr.png';
import cvg from '../img/cvg.png';
import leleka from '../img/leleka.png';
import cypress from '../img/cypress.png';
import citadel from '../img/Cidatel.png';
import okko from '../img/okko.png';
import kredo from '../img/kredo.png';

const Home = () => {
  const navigate = useNavigate(); // Ініціалізуємо хук useNavigate

  // Функція для редіректу на /solutions
  const handleSolutionsClick = () => {
    navigate("/solutions");
  };

  const handleContactClick = () => {
    navigate("/contact");
  };
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <a href="/" className="main-logo">
            <img src={logo} alt="Logo" className="main-logo-img" />
          </a>
          {/*<h1 className="hero-title">Eurovent</h1>*/}
          <div className="hero-divider"></div>
          <div className="hero-text">
            <p className="hero-description">
              We are Eurovent, an end-to-end provider of ventilation and air conditioning solutions.
            </p>
            <div className="hero-buttons">
              <button className="button" onClick={handleSolutionsClick}>
                Solutions
              </button>
              <button className="button" onClick={handleContactClick}>
                Contact us
              </button>
            </div>
          </div>
        </div>
        <div className="hero-image-wrapper">
          <img
            src={mainPhoto}
            alt="Building"
            className="hero-image"
          />
        </div>
        <div className="our-clients">
          <h1 className="our-clients-header">Наші клієнти</h1>
          <div className="our-clients-grid">
            <img src={global} alt="logo" className="client-logo" />
            <img src={gallery} alt="logo" className="client-logo" />
            <img src={nobilis} alt="logo" className="client-logo" />
            <img src={parus} alt="logo" className="client-logo" />
            <img src={riel} alt="logo" className="client-logo" />
            <img src={vam} alt="logo" className="client-logo" />
            <img src={tmd} alt="logo" className="client-logo" />
            <img src={km} alt="logo" className="client-logo" />
            <img src={soft} alt="logo" className="client-logo" />
            <img src={cvg} alt="logo" className="client-logo" />
            <img src={ukr} alt="logo" className="client-logo" />
            <img src={gw} alt="logo" className="client-logo" />
            <img src={leleka} alt="logo" className="client-logo" />
            <img src={cypress} alt="logo" className="client-logo" />
            <img src={citadel} alt="logo" className="client-logo" />
            <img src={okko} alt="logo" className="client-logo" />
            <img src={kredo} alt="logo" className="client-logo" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
