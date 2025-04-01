import React from "react";
import { Link } from "react-router-dom";
import leleka from '../../img/ProjectLeleka/leleka.jpg';
import leleka2 from '../../img/ProjectLeleka/leleka2.jpg';
import leleka3 from '../../img/ProjectLeleka/leleka3.jpg';
import leleka4 from '../../img/ProjectLeleka/leleka4.jpg';
import leleka5 from '../../img/ProjectLeleka/leleka5.jpg';
import leleka6 from '../../img/ProjectLeleka/leleka6.jpg';
import leleka7 from '../../img/ProjectLeleka/leleka7.jpg';
import leleka8 from '../../img/ProjectLeleka/leleka8.jpg';

import "./Project.css";

const ProjectLeleka = () => {
  return (
    <div className="project-detail-container">
      <Link to="/solutions" className="back-link">← Назад до проектів</Link>
      <h1>Лелека</h1>
      <div className="project-images">
        <img src={leleka} alt="Leleka зовнішній вигляд" className="main-image" />
        <div className="gallery">
          <img src={leleka2} alt="Leleka інтер'єр 1" />
          <img src={leleka3} alt="Leleka інтер'єр 2" />
          <img src={leleka4} alt="Leleka інтер'єр 3" />
          <img src={leleka5} alt="Leleka інтер'єр 4" />
          <img src={leleka6} alt="Leleka інтер'єр 5" />
          <img src={leleka7} alt="Leleka інтер'єр 6" />
          <img src={leleka8} alt="Leleka інтер'єр 7" />
        </div>
      </div>
      <div className="project-description">
        <h2>Опис проекту</h2>
        <p>
          Даний об’єкт розташований у Києві та є приватним пологовим будинком. У рамках проєкту було виконано монтаж систем
          вентиляції, кондиціювання, а також чилера з виносними конденсаторами для забезпечення роботи вентиляційних установок в
          операційному блоці. Окрім цього, було змонтовано систему вентиляції для чистих приміщень, що відповідає високим
          стандартам стерильності та комфорту.
        </p>
      </div>
    </div>
  );
};

export default ProjectLeleka;
