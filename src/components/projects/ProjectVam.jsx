import React, { useState } from "react";
import { Link } from "react-router-dom";
import vam from '../../img/ProjectVam/vam.jpg';
import vam2 from '../../img/ProjectVam/vam2.jpg';
import vam3 from '../../img/ProjectVam/vam3.jpg';
import vam4 from '../../img/ProjectVam/vam4.jpg';
import "./Project.css";

const ProjectVam = () => {
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
      <h1>ТЦ «ВАМ»</h1>
      <div className="project-images">
        <img
          src={vam}
          alt="ТЦ «ВАМ» зовнішній вигляд"
          className="main-image"
          onClick={() => handleImageClick(vam)}
        />
        <div className="gallery">
          <img
            src={vam2}
            alt="ТЦ «ВАМ» інтер'єр 1"
            onClick={() => handleImageClick(vam2)}
          />
          <img
            src={vam3}
            alt="ТЦ «ВАМ» інтер'єр 2"
            onClick={() => handleImageClick(vam3)}
          />
          <img
            src={vam4}
            alt="ТЦ «ВАМ» інтер'єр 2"
            onClick={() => handleImageClick(vam4)}
          />
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

      {selectedImage && (
        <div className="modal" onClick={handleCloseModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <span className="close-button" onClick={handleCloseModal}>&times;</span>
            <img src={selectedImage} alt="Full size view" className="full-image" />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectVam;
