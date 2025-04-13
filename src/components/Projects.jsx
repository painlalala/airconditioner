import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./Projects.css";
import vam from '../img//ProjectVam/vam.jpg';
import leleka from '../img/ProjectLeleka/leleka.jpg';
import pivdenny from '../img/ProjectPivdenny/pivdenny_main.jpg';
import resturaunt from '../img/ProjectKultura/kultura_main.jpg';
import sharbel from '../img/ProjectSharbel/sharbel_main.jpg';
import ukrpol from '../img/ProjectUkrpol/ukrpol_main.jpg';
import gl from '../img/ProjectGlobalLogic/global_main_1.jpg';
import cvgMain from '../img/ProjectCvgUkraine/cvg_main.jpg';

const Projects = () => {
  const projectBlocks = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    projectBlocks.current = [];
    
    const blocks = document.querySelectorAll('.project-block');
    blocks.forEach((block, index) => {
      projectBlocks.current[index] = block;
      observer.observe(block);
    });

    return () => {
      blocks.forEach(block => {
        observer.unobserve(block);
      });
    };
  }, []);

  return (
    <section className="projects-section">
      <div className="projects-container">
        <h1 className="projects-title">Наші проекти</h1>
        
        <div className="projects-grid">
          {/* Перший блок */}
          <article className="project-block">
            <Link to="/solutions/vam" className="project-link">
              <div className="project-content">
                <div className="project-image">
                  <img src={vam} alt="Проект ТЦ «ВАМ»" className="project-img" />
                </div>
                <div className="project-info">
                  <h2 className="project-title">ТЦ «ВАМ»</h2>
                </div>
              </div>
            </Link>
          </article>

          {/* Другий блок */}
          <article className="project-block">
            <Link to="/solutions/leleka" className="project-link">
              <div className="project-content reverse">
                <div className="project-info">
                  <h2 className="project-title">Пологовий будинок «Лелека»</h2>
                </div>
                <div className="project-image">
                  <img src={leleka} alt="Проект Пологовий будинок «Лелека»" className="project-img" />
                </div>
              </div>
            </Link>
          </article>

          {/* Третій блок */}
          <article className="project-block">
            <Link to="/solutions/pivdenny" className="project-link">
              <div className="project-content">
                <div className="project-image">
                  <img src={pivdenny} alt="Проект ТЦ «Південний»" className="project-img" />
                </div>
                <div className="project-info">
                  <h2 className="project-title">ТЦ «Південний»</h2>
                </div>
              </div>
            </Link>
          </article>

          <article className="project-block">
            <Link to="/solutions/global-logic" className="project-link">
              <div className="project-content reverse">
                <div className="project-info">
                  <h2 className="project-title">IT «Global Logic»</h2>
                </div>
                <div className="project-image">
                  <img src={gl} alt="Проект IT «Global Logic»" className="project-img" />
                </div>
              </div>
            </Link>
          </article>

          <article className="project-block">
            <Link to="/solutions/kultura" className="project-link">
              <div className="project-content">
                <div className="project-image">
                  <img src={resturaunt} alt="Проект Ресторан «Культура»" className="project-img" />
                </div>
                <div className="project-info">
                  <h2 className="project-title">Ресторан «Культура»</h2>
                </div>
              </div>
            </Link>
          </article>

          <article className="project-block">
            <Link to="/solutions/sharbel" className="project-link">
              <div className="project-content reverse">
                <div className="project-info">
                  <h2 className="project-title">Готельно-оздоровчий комплекс «Святий Шарбель»</h2>
                </div>
                <div className="project-image">
                  <img src={sharbel} alt="Проект Готельно-оздоровчий комплекс «Святий Шарбель»" className="project-img" />
                </div>
              </div>
            </Link>
          </article>

          <article className="project-block">
            <Link to="/solutions/cvg-ukraine" className="project-link">
              <div className="project-content">
                <div className="project-image">
                  <img src={cvgMain} alt="Проект «ЦВГ Україна»" className="project-img" />
                </div>
                <div className="project-info">
                  <h2 className="project-title">«ЦВГ Україна»</h2>
                </div>
              </div>
            </Link>
          </article>

          <article className="project-block">
            <Link to="/solutions/ukrpol" className="project-link">
              <div className="project-content reverse">
                <div className="project-info">
                  <h2 className="project-title">«Укрпол»</h2>
                </div>
                <div className="project-image">
                  <img src={ukrpol} alt="Проект «Укрпол»" className="project-img" />
                </div>
              </div>
            </Link>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Projects;
