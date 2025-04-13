import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import vam from '../../img/ProjectVam/vam.jpg';
import vam2 from '../../img/ProjectVam/vam2.jpg';
import vam3 from '../../img/ProjectVam/vam3.jpg';
import vam4 from '../../img/ProjectVam/vam4.jpg';
import "./Project.css";

const ProjectVam = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setModalVisible(true);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseModal = () => {
    setModalVisible(false);
    document.body.style.overflow = 'auto';
    setTimeout(() => setSelectedImage(null), 300);
  };

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        handleCloseModal();
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  return (
    <main className="project-detail-container">
      <Link to="/solutions" className="back-link">
        <span>←</span> Назад до проектів
      </Link>

      <header className="project-header">
        <h1 className="project-title">ТЦ «ВАМ»</h1>
      </header>

      <section className="project-images">
        <div className="main-image-container">
          <img
            src={vam}
            alt="ТЦ «ВАМ» зовнішній вигляд"
            className="main-image"
            onClick={() => handleImageClick(vam)}
          />
        </div>

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
            alt="ТЦ «ВАМ» інтер'єр 3"
            onClick={() => handleImageClick(vam4)}
          />
        </div>
      </section>

      <section className="project-description">
        <h2>Опис проекту</h2>
        <p>
          Торговий центр «ВАМ» - це сучасний торговий комплекс, де ми реалізували систему вентиляції та кондиціювання. 
          Проект включає в себе встановлення VRV-систем для забезпечення комфортного мікроклімату в приміщеннях, 
          а також ефективну систему вентиляції для підтримки якісного повітрообміну.
        </p>
      </section>

      {selectedImage && (
        <div className={`modal ${modalVisible ? 'show' : ''}`} onClick={handleCloseModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="close-button" onClick={handleCloseModal}>×</button>
            <img src={selectedImage} alt="Full size view" className="full-image" />
          </div>
        </div>
      )}
    </main>
  );
};

export default ProjectVam;
