import React, { useState } from "react";
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

const ProjectSharbel = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="project-detail-container">
      <Link to="/solutions" className="back-link">← Назад до проектів</Link>
      <h1>Проект Готельно-оздоровчий комплекс «Святий Шарбель»</h1>
      <div className="project-images">
        <img
          src={sharbelMain}
          alt="Sharbel зовнішній вигляд"
          className="main-image"
          onClick={() => handleImageClick(sharbelMain)}
        />
        <div className="gallery">
          <img
            src={sharbel}
            alt="Sharbel інтер'єр 1"
            onClick={() => handleImageClick(sharbel)}
          />
          <img
            src={sharbel2}
            alt="Sharbel інтер'єр 2"
            onClick={() => handleImageClick(sharbel2)}
          />
          <img
            src={sharbel3}
            alt="Sharbel інтер'єр 3"
            onClick={() => handleImageClick(sharbel3)}
          />
          <img
            src={sharbel4}
            alt="Sharbel інтер'єр 4"
            onClick={() => handleImageClick(sharbel4)}
          />
          <img
            src={sharbel5}
            alt="Sharbel інтер'єр 5"
            onClick={() => handleImageClick(sharbel5)}
          />
          <img
            src={sharbel6}
            alt="Sharbel інтер'єр 6"
            onClick={() => handleImageClick(sharbel6)}
          />
          <img
            src={sharbel7}
            alt="Sharbel інтер'єр 7"
            onClick={() => handleImageClick(sharbel7)}
          />
          <img
            src={sharbel8}
            alt="Sharbel інтер'єр 8"
            onClick={() => handleImageClick(sharbel8)}
          />
          <img
            src={sharbel9}
            alt="Sharbel інтер'єр 9"
            onClick={() => handleImageClick(sharbel9)}
          />
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

      {selectedImage && (
        <div className="modal" onClick={handleCloseModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <span className="close-button" onClick={handleCloseModal}>×</span>
            <img src={selectedImage} alt="Full size view" className="full-image" />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectSharbel;
