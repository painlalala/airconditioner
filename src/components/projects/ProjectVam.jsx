import React from "react";
import { Link } from "react-router-dom";
import vam from '../../img/ProjectVam/vam.jpg';
import vam2 from '../../img/ProjectVam/vam2.jpg';
import vam3 from '../../img/ProjectVam/vam3.jpg';
import vam4 from '../../img/ProjectVam/vam4.jpg';
import "./Project.css";

const ProjectVam = () => {
  return (
    <div className="project-detail-container">
      <Link to="/solutions" className="back-link">← Назад до проектів</Link>
      <h1>ТЦ «ВАМ»</h1>
      <div className="project-images">
        <img src={vam} alt="ТЦ «ВАМ» зовнішній вигляд" className="main-image" />
        <div className="gallery">
          <img src={vam2} alt="ТЦ «ВАМ» інтер'єр 1" />
          <img src={vam3} alt="ТЦ «ВАМ» інтер'єр 2" />
          <img src={vam4} alt="ТЦ «ВАМ» інтер'єр 2" />
        </div>
      </div>
      <div className="project-description">
        <h2>Опис проекту</h2>
        <p>
          У торговому центрі «ВАМ» було реалізовано комплекс інженерних систем, зокрема вентиляцію, опалення та кондиціювання.
          Для цього використовувалися сучасні вентиляційні установки, чилери та кондиціонери, що забезпечують комфортний
          мікроклімат для відвідувачів та персоналу.
        </p>
      </div>
    </div>
  );
};

export default ProjectVam;
