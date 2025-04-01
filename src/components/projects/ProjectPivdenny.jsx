// components/ProjectVam.jsx
import React from "react";
import { Link } from "react-router-dom";
import pivdennyMain from '../../img/ProjectPivdenny/pivden_main.jpg';
import pivdenny from '../../img/ProjectPivdenny/pivdenny.jpg';
import pivdenny2 from '../../img/ProjectPivdenny/pivdenny2.jpg';
import pivdenny3 from '../../img/ProjectPivdenny/pivdenny3.jpg';
import pivdenny4 from '../../img/ProjectPivdenny/pivdenny4.jpg';
import pivdenny5 from '../../img/ProjectPivdenny/pivdenny5.jpg';
import "./Project.css"; // Create this CSS file for project-specific styling

const ProjectPivdenny = () => {
  return (
    <div className="project-detail-container">
      <Link to="/solutions" className="back-link">← Назад до проектів</Link>
      <h1>Південний</h1>
      <div className="project-images">
        <img src={pivdennyMain} alt="ТЦ «Південний» зовнішній вигляд" className="main-image" />
        <div className="gallery">
          <img src={pivdenny} alt="ТЦ «Південний» інтер'єр 1" />
          <img src={pivdenny2} alt="ТЦ «Південний» інтер'єр 2" />
          <img src={pivdenny3} alt="ТЦ «Південний» інтер'єр 3" />
          <img src={pivdenny4} alt="ТЦ «Південний» інтер'єр 4" />
          <img src={pivdenny5} alt="ТЦ «Південний» інтер'єр 5" />
        </div>
      </div>
      <div className="project-description">
        <h2>Опис проекту</h2>
        <p>
          Даний об’єкт є офісним центром, у якому реалізовано систему вентиляції, кондиціювання та опалення на базі VRV-системи.
          Це забезпечує ефективне регулювання мікроклімату та енергоефективність будівлі.
        </p>
      </div>
    </div>
  );
};

export default ProjectPivdenny;
