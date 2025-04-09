import React, { useState } from "react";
import { Link } from "react-router-dom";
import ukrpolMain from '../../img/ProjectUkrpol/ukrpol_main.jpg';
import ukrpol from '../../img/ProjectUkrpol/ukrpol.jpg';
import ukrpol2 from '../../img/ProjectUkrpol/ukrpol2.jpg';
import ukrpol3 from '../../img/ProjectUkrpol/ukrpol3.jpg';
import ukrpol4 from '../../img/ProjectUkrpol/ukrpol4.jpg';
import ukrpol5 from '../../img/ProjectUkrpol/ukrpol5.jpg';
import ukrpol6 from '../../img/ProjectUkrpol/ukrpol6.jpg';
import ukrpol7 from '../../img/ProjectUkrpol/ukrpol7.jpg';
import ukrpol8 from '../../img/ProjectUkrpol/ukrpol8.jpg';
import ukrpol9 from '../../img/ProjectUkrpol/ukrpol9.jpg';
import "./Project.css";

const ProjectUkrpol = () => {
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
      <h1>Укрпол</h1>
      <div className="project-images">
        <img
          src={ukrpolMain}
          alt="Ukrpol зовнішній вигляд"
          className="main-image"
          onClick={() => handleImageClick(ukrpolMain)}
        />
        <div className="gallery">
          <img
            src={ukrpol}
            alt="Ukrpol інтер'єр 1"
            onClick={() => handleImageClick(ukrpol)}
          />
          <img
            src={ukrpol2}
            alt="Ukrpol інтер'єр 2"
            onClick={() => handleImageClick(ukrpol2)}
          />
          <img
            src={ukrpol3}
            alt="Ukrpol інтер'єр 3"
            onClick={() => handleImageClick(ukrpol3)}
          />
          <img
            src={ukrpol4}
            alt="Ukrpol інтер'єр 4"
            onClick={() => handleImageClick(ukrpol4)}
          />
          <img
            src={ukrpol5}
            alt="Ukrpol інтер'єр 5"
            onClick={() => handleImageClick(ukrpol5)}
          />
          <img
            src={ukrpol6}
            alt="Ukrpol інтер'єр 6"
            onClick={() => handleImageClick(ukrpol6)}
          />
          <img
            src={ukrpol7}
            alt="Ukrpol інтер'єр 7"
            onClick={() => handleImageClick(ukrpol7)}
          />
          <img
            src={ukrpol8}
            alt="Ukrpol інтер'єр 8"
            onClick={() => handleImageClick(ukrpol8)}
          />
          <img
            src={ukrpol9}
            alt="Ukrpol інтер'єр 9"
            onClick={() => handleImageClick(ukrpol9)}
          />
        </div>
      </div>
      <div className="project-description">
        <h2>Опис проекту</h2>
        <p>
          Ми впровадили систему вентиляції, адаптовану до специфічних потреб поліграфічного заводу. Вона забезпечує ефективний
          повітрообмін, підтримання оптимального мікроклімату та відповідність виробничим вимогам.
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

export default ProjectUkrpol;
