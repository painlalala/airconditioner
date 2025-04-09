import React, { useState } from "react";
import { Link } from "react-router-dom";
import cvgMain from '../../img/ProjectCvgUkraine/cvg_main.jpg';
import cvg from '../../img/ProjectCvgUkraine/cvg.jpg';
import cvg2 from '../../img/ProjectCvgUkraine/cvg2.jpg';
import cvg3 from '../../img/ProjectCvgUkraine/cvg3.jpg';
import "./Project.css";

const ProjectCvg = () => {
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
      <h1>ЦВГ Україна</h1>
      <div className="project-images">
        <img
          src={cvgMain}
          alt="«CVG» зовнішній вигляд"
          className="main-image"
          onClick={() => handleImageClick(cvgMain)}
        />
        <div className="gallery">
          <img
            src={cvg}
            alt="«CVG» інтер'єр 1"
            onClick={() => handleImageClick(cvg)}
          />
          <img
            src={cvg2}
            alt="«CVG» інтер'єр 2"
            onClick={() => handleImageClick(cvg2)}
          />
          <img
            src={cvg3}
            alt="«CVG» інтер'єр 3"
            onClick={() => handleImageClick(cvg3)}
          />
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

export default ProjectCvg;
