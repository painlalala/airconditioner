import React from "react";
import { Link } from "react-router-dom";
import "./Projects.css";
import vam from '../img//ProjectVam/vam.jpg';
import leleka from '../img/ProjectLeleka/leleka.jpg';
import pivdenny from '../img/ProjectPivdenny/pivden_main.jpg';
import resturaunt from '../img/ProjectKultura/kultura_main.jpg';
import sharbel from '../img/ProjectSharbel/sharbel_main.jpg';
import ukrpol from '../img/ProjectUkrpol/ukrpol_main.jpg';
import gl from '../img/ProjectGlobalLogic/global_main_1.jpg';
import cvgMain from '../img/ProjectCvgUkraine/cvg_main.jpg';

const Projects = () => {
  return (
    <div className="projects-container">
      <h1>Наші проекти</h1>
      {/* Перший блок */}
      <Link to="/solutions/vam" className="project-block">
        <div className="project-info">
          <h2>ТЦ «ВАМ»</h2>
        </div>
        <div className="project-image">
          <img src={vam} alt="Проект ТЦ «ВАМ»" />
        </div>
      </Link>

      {/* Другий блок */}
      <Link to="/solutions/leleka" className="project-block">
        <div className="project-image">
          <img src={leleka} alt="Проект Пологовий будинок «Лелека»" />
        </div>
        <div className="project-info">
          <h2>Пологовий будинок «Лелека»</h2>
        </div>
      </Link>

      {/* Третій блок */}
      <Link to="/solutions/pivdenny" className="project-block">
        <div className="project-info">
          <h2>ТЦ «Південний»</h2>
        </div>
        <div className="project-image">
          <img src={pivdenny} alt="Проект ТЦ «Південний»" />
        </div>
      </Link>

      <Link to="/solutions/global-logic" className="project-block">
        <div className="project-image">
          <img src={gl} alt="Проект IT «Global Logic»" />
        </div>
        <div className="project-info">
          <h2>IT «Global Logic»</h2>
        </div>
      </Link>

      <Link to="/solutions/kultura" className="project-block">
        <div className="project-info">
          <h2>Ресторан «Культура»</h2>
        </div>
        <div className="project-image">
          <img src={resturaunt} alt="Проект Ресторан «Культура»" />
        </div>
      </Link>

      <Link to="/solutions/sharbel" className="project-block">
        <div className="project-image">
          <img src={sharbel} alt="Проект Готельно-оздоровчий комплекс «Святий Шарбель»" />
        </div>
        <div className="project-info">
          <h2>Готельно-оздоровчий комплекс «Святий Шарбель»</h2>
        </div>
      </Link>

      <Link to="/solutions/cvg-ukraine" className="project-block">
        <div className="project-info">
          <h2>«ЦВГ Україна»</h2>
        </div>
        <div className="project-image">
          <img src={cvgMain} alt="Проект «ЦВГ Україна»" />
        </div>
      </Link>

      <Link to="/solutions/ukrpol" className="project-block">
        <div className="project-image">
          <img src={ukrpol} alt="Проект «Укрпол»" />
        </div>
        <div className="project-info">
          <h2>«Укрпол»</h2>
        </div>
      </Link>
    </div>
  );
};

export default Projects;
