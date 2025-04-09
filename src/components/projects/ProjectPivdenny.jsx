import React, { useState } from "react";
import { Link } from "react-router-dom";
import pivdennyMain from '../../img/ProjectPivdenny/pivdenny_main.jpg';
import pivdenny from '../../img/ProjectPivdenny/pivdenny.jpg';
import pivdenny2 from '../../img/ProjectPivdenny/pivdenny2.jpg';
import pivdenny3 from '../../img/ProjectPivdenny/pivdenny3.jpg';
import pivdenny4 from '../../img/ProjectPivdenny/pivdenny4.jpg';
import pivdenny5 from '../../img/ProjectPivdenny/pivdenny5.jpg';
import "./Project.css";

const ProjectPivdenny = () => {
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
      <h1>Південний</h1>
      <div className="project-images">
        <img
          src={pivdennyMain}
          alt="ТЦ «Південний» зовнішній вигляд"
          className="main-image"
          onClick={() => handleImageClick(pivdennyMain)}
        />
        <div className="gallery">
          <img
            src={pivdenny}
            alt="ТЦ «Південний» інтер'єр 1"
            onClick={() => handleImageClick(pivdenny)}
          />
          <img
            src={pivdenny2}
            alt="ТЦ «Південний» інтер'єр 2"
            onClick={() => handleImageClick(pivdenny2)}
          />
          <img
            src={pivdenny3}
            alt="ТЦ «Південний» інтер'єр 3"
            onClick={() => handleImageClick(pivdenny3)}
          />
          <img
            src={pivdenny4}
            alt="ТЦ «Південний» інтер'єр 4"
            onClick={() => handleImageClick(pivdenny4)}
          />
          <img
            src={pivdenny5}
            alt="ТЦ «Південний» інтер'єр 5"
            onClick={() => handleImageClick(pivdenny5)}
          />
        </div>
      </div>
      <div className="project-description">
        <h2>Опис проекту</h2>
        <p>
          Даний об’єкт є офісним центром, у якому реалізовано систему вентиляції, кондиціювання та опалення на базі VRV-системи.
          Це забезпечує ефективне регулювання мікроклімату та енергоефективність будівлі.
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

export default ProjectPivdenny;
