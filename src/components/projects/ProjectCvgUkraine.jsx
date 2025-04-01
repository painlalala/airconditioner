// components/ProjectVam.jsx
import React from "react";
import { Link } from "react-router-dom";
import cvgMain from '../../img/ProjectCvgUkraine/cvg_main.jpg';
import cvg from '../../img/ProjectCvgUkraine/cvg.jpg';
import cvg2 from '../../img/ProjectCvgUkraine/cvg2.jpg';
import cvg3 from '../../img/ProjectCvgUkraine/cvg3.jpg';
import cvg4 from '../../img/ProjectCvgUkraine/cvg4.jpg';
import cvg5 from '../../img/ProjectCvgUkraine/cvg5.jpg';

import "./Project.css";

const ProjectCvg = () => {
  return (
    <div className="project-detail-container">
      <Link to="/solutions" className="back-link">← Назад до проектів</Link>
      <h1>ЦВГ Україна</h1>
      <div className="project-images">
        <img src={cvgMain} alt="«CVG» зовнішній вигляд" className="main-image" />
        <div className="gallery">
          <img src={cvg} alt="«CVG» інтер'єр 2" />
          <img src={cvg2} alt="«CVG» інтер'єр 2" />
          <img src={cvg3} alt="«CVG» інтер'єр 2" />
          <img src={cvg4} alt="«CVG» інтер'єр 2" />
          <img src={cvg5} alt="«CVG» інтер'єр 2" />
        </div>
      </div>
      <div className="project-description">
        <h2>Опис проекту</h2>
        <p>
          На даному об’єкті було реалізовано систему вентиляції та кондиціювання на базі Rooftop-системи, а також змонтовано
          вентиляційні установки та VRV-системи кондиціювання. Це забезпечує ефективний розподіл повітря та підтримання
          оптимального мікроклімату в приміщеннях для підприємства.
        </p>
      </div>
    </div>
  );
};

export default ProjectCvg;
