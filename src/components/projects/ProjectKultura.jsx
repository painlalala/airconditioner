// components/ProjectVam.jsx
import React from "react";
import { Link } from "react-router-dom";
import kultura from '../../img/ProjectKultura/resturaunt.jpg';
import kulturaMain from '../../img/ProjectKultura/kultura_main.jpg';
import kultura2 from '../../img/ProjectKultura/resturaunt2.jpg';
import kultura3 from '../../img/ProjectKultura/resturaunt3.jpg';
import kultura4 from '../../img/ProjectKultura/resturaunt4.jpg';
import kultura5 from '../../img/ProjectKultura/resturaunt5.jpg';
import "./Project.css";
const ProjectKultura = () => {
  return (
    <div className="project-detail-container">
      <Link to="/solutions" className="back-link">← Назад до проектів</Link>
      <h1>Культура</h1>
      <div className="project-images">
        <img src={kulturaMain} alt="Культура зовнішній вигляд" className="main-image" />
        <div className="gallery">
          <img src={kultura} alt="інтер'єр 1" />
          <img src={kultura2} alt="інтер'єр 2" />
          <img src={kultura3} alt="інтер'єр 3" />
          <img src={kultura4} alt="інтер'єр 4" />
          <img src={kultura5} alt="інтер'єр 5" />
        </div>
      </div>
      <div className="project-description">
        <h2>Опис проекту</h2>
        <p>
          Даний об’єкт – ресторан «Культура», у якому було змонтовано систему вентиляції з високоефективними рекуператорами.
          Опалення реалізовано на базі системи кондиціювання, що забезпечує як обігрів у холодний період, так і охолодження
          влітку, створюючи комфортний мікроклімат у приміщенні.
        </p>
      </div>
    </div>
  );
};

export default ProjectKultura;
