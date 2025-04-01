import React from "react";
import { Link } from "react-router-dom";
import glMain from '../../img/ProjectGlobalLogic/global_main_1.jpg';
import gl from '../../img/ProjectGlobalLogic/gl.jpg';
import gl2 from '../../img/ProjectGlobalLogic/gl2.jpg';
import gl3 from '../../img/ProjectGlobalLogic/gl3.jpg';
import gl4 from '../../img/ProjectGlobalLogic/gl4.jpg';
import gl5 from '../../img/ProjectGlobalLogic/gl5.jpg';
import gl6 from '../../img/ProjectGlobalLogic/gl6.jpg';
import gl7 from '../../img/ProjectGlobalLogic/gl7.jpg';

import "./Project.css";

const ProjectGlobalLogic = () => {
  return (
    <div className="project-detail-container">
      <Link to="/solutions" className="back-link">← Назад до проектів</Link>
      <h1>Global Logic</h1>
      <div className="project-images">
        <img src={glMain} alt="«Global Logic» зовнішній вигляд" className="main-image" />
        <div className="gallery">
          <img src={gl} alt="«GL» інтер'єр 1" />
          <img src={gl2} alt="«GL» інтер'єр 2" />
          <img src={gl3} alt="«GL» інтер'єр 3" />
          <img src={gl4} alt="«GL» інтер'єр 4" />
          <img src={gl5} alt="«GL» інтер'єр 5" />
          <img src={gl6} alt="«GL» інтер'єр 6" />
          <img src={gl7} alt="«GL» інтер'єр 7" />
        </div>
      </div>
      <div className="project-description">
        <h2>Опис проекту</h2>
        <p>
          В офісному центрі компанії “Global Logic” було встановлено сучасні інженерні системи, зокрема вентиляцію,
          кондиціювання, опалення, індивідуальний тепловий пункт (ІТП) та каналізацію.
          Проєкт передбачає ефективне охолодження приміщень за допомогою системи чилер-фанкойл, а також монтаж вентиляційної
          системи з високоефективними рекуператорами. Це забезпечує комфортний мікроклімат та енергоефективність будівлі.
        </p>
      </div>
    </div>
  );
};

export default ProjectGlobalLogic;
