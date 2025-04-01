// components/ProjectVam.jsx
import React from "react";
import { Link } from "react-router-dom";
import sharbelMain from '../../img/ProjectSharbel/sharbel_main.jpg';
import sharbel from '../../img/ProjectSharbel/sharbel.jpg';
import sharbel2 from '../../img/ProjectSharbel/sharbel2.jpg';
import sharbel3 from '../../img/ProjectSharbel/sharbel3.jpg';
import sharbel4 from '../../img/ProjectSharbel/sharbel4.jpg';
import sharbel5 from '../../img/ProjectSharbel/sharbel5.jpg';
import sharbel6 from '../../img/ProjectSharbel/sharbel6.jpg';
import sharbel7 from '../../img/ProjectSharbel/sharbel7.jpg';
import sharbel8 from '../../img/ProjectSharbel/sharbel8.jpg';
import sharbel9 from '../../img/ProjectSharbel/sharbel9.jpg';
import "./Project.css";

const ProjectSharbel= () => {
  return (
    <div className="project-detail-container">
      <Link to="/solutions" className="back-link">← Назад до проектів</Link>
      <h1>Проект Готельно-оздоровчий комплекс «Святий Шарбель»</h1>
      <div className="project-images">
        <img src={sharbelMain} alt="Sharbel зовнішній вигляд" className="main-image" />
        <div className="gallery">
          <img src={sharbel} alt="Sharbel інтер'єр 1" />
          <img src={sharbel2} alt="Sharbel інтер'єр 1" />
          <img src={sharbel3} alt="Sharbel інтер'єр 1" />
          <img src={sharbel4} alt="Sharbel інтер'єр 1" />
          <img src={sharbel5} alt="Sharbel інтер'єр 1" />
          <img src={sharbel6} alt="Sharbel інтер'єр 1" />
          <img src={sharbel7} alt="Sharbel інтер'єр 1" />
          <img src={sharbel8} alt="Sharbel інтер'єр 1" />
          <img src={sharbel9} alt="Sharbel інтер'єр 1" />
        </div>
      </div>
      <div className="project-description">
        <h2>Опис проекту</h2>
        <p>
          Готельно-оздоровчий відпочинковий комплекс, у якому по всій території було реалізовано VRV-системи кондиціювання та
          вентиляції. Це забезпечує ефективний контроль мікроклімату в усіх зонах комплексу, створюючи комфортні умови для
          відпочинку та оздоровлення.
        </p>
      </div>
    </div>
  );
};

export default ProjectSharbel;
