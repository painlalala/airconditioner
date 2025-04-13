import './Home.css';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSolutionsClick = () => {
    navigate("/solutions");
  };

  const handleContactClick = () => {
    navigate("/contact");
  };

  return (
    <main className="home-page">
      <section className="hero">
        <div className="hero-content">
          <div className="logo-container">
            <img src={logo} alt="Eurovent Logo" className="main-logo-img" />
          </div>
          <div className="hero-text">
            <h1 className="hero-title">Eurovent</h1>
            <div className="hero-divider"></div>
            <p className="hero-description">
              We are Eurovent, an end-to-end provider of ventilation and air conditioning solutions.
            </p>
            <div className="hero-buttons">
              <button className="button primary" onClick={handleSolutionsClick}>
                Solutions
              </button>
              <button className="button secondary" onClick={handleContactClick}>
                Contact us
              </button>
            </div>
          </div>
        </div>
        <div className="hero-image-wrapper">
          <div 
            className="hero-image-overlay"
            style={{ transform: `translateY(${scrollPosition * 0.5}px)` }}
          >
            <img
              src={mainPhoto}
              alt="Modern Building with HVAC Systems"
              className="hero-image"
            />
          </div>
          <div className="hero-image-gradient"></div>
        </div>
      </section>

      <section className="clients-section">
        <div className="clients-container">
          <h2 className="clients-title">Наші клієнти</h2>
          <div className="clients-grid">
            <div className="client-logo-wrapper">
              <img src={global} alt="Global Logic" className="client-logo" />
            </div>
            <div className="client-logo-wrapper">
              <img src={gallery} alt="Gallery" className="client-logo" />
            </div>
            <div className="client-logo-wrapper">
              <img src={nobilis} alt="Nobilis" className="client-logo" />
            </div>
            <div className="client-logo-wrapper">
              <img src={parus} alt="Parus" className="client-logo" />
            </div>
            <div className="client-logo-wrapper">
              <img src={riel} alt="Riel" className="client-logo" />
            </div>
            <div className="client-logo-wrapper">
              <img src={vam} alt="VAM" className="client-logo" />
            </div>
            <div className="client-logo-wrapper">
              <img src={tmd} alt="TMD" className="client-logo" />
            </div>
            <div className="client-logo-wrapper">
              <img src={km} alt="KM" className="client-logo" />
            </div>
            <div className="client-logo-wrapper">
              <img src={soft} alt="Soft" className="client-logo" />
            </div>
            <div className="client-logo-wrapper">
              <img src={cvg} alt="CVG" className="client-logo" />
            </div>
            <div className="client-logo-wrapper">
              <img src={ukr} alt="Ukr" className="client-logo" />
            </div>
            <div className="client-logo-wrapper">
              <img src={gw} alt="GW" className="client-logo" />
            </div>
            <div className="client-logo-wrapper">
              <img src={leleka} alt="Leleka" className="client-logo" />
            </div>
            <div className="client-logo-wrapper">
              <img src={cypress} alt="Cypress" className="client-logo" />
            </div>
            <div className="client-logo-wrapper">
              <img src={citadel} alt="Citadel" className="client-logo" />
            </div>
            <div className="client-logo-wrapper">
              <img src={okko} alt="OKKO" className="client-logo" />
            </div>
            <div className="client-logo-wrapper">
              <img src={kredo} alt="Kredo" className="client-logo" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
