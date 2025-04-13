import "./footer.new.css";
import logo from "../img/logo.jpg";
import React from 'react';
import { Link } from 'react-router-dom';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <p className="footer-text">
            Ми кваліфікована компанія, яка займається встановленням вентиляції та кондиціонерів 
            по Львову та Львівській області. Надаємо професійні послуги з проектування, 
            монтажу та обслуговування систем вентиляції та кондиціонування.
          </p>
          <div className="social-links">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link">
              <FaFacebook />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link">
              <FaInstagram />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">
              <FaLinkedin />
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">Швидкі посилання</h3>
          <nav className="footer-nav">
            <Link to="/" className="footer-link">Домашня</Link>
            <Link to="/solutions" className="footer-link">Наші проекти</Link>
            <Link to="/company" className="footer-link">Про нас</Link>
            <Link to="/contact" className="footer-link">Контакти</Link>
          </nav>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">Контакти</h3>
          <div className="contact-info">
            <div className="contact-item">
              <FaMapMarkerAlt className="contact-icon" />
              <p className="contact-text">вул.Станція Личаків 7, Львівська обл. Львів, 79014</p>
            </div>
            <div className="contact-item">
              <FaEnvelope className="contact-icon" />
              <p className="contact-text">
                <a href="mailto:v.gakivnyk@gmail.com">v.gakivnyk@gmail.com</a>
              </p>
            </div>
            <div className="contact-item">
              <FaPhone className="contact-icon" />
              <p className="contact-text">
                <a href="tel:+380984442888">+380984442888</a>
              </p>
            </div>
          </div>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">Робочий час</h3>
          <div className="working-hours">
            <p className="working-hours-text">Понеділок - П'ятниця: 9:00 - 18:00</p>
            <p className="working-hours-text">Субота: 10:00 - 15:00</p>
            <p className="working-hours-text">Неділя: Вихідний</p>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p className="footer-copyright">
            {`© ${currentYear} by Eurovent. Всі права захищені.`}
          </p>
          <p className="footer-credits">
            Розроблено та підтримується <a href="https://github.com/nazarii-lozynskyi" target="_blank" rel="noopener noreferrer">Nazarii Lozynskyi</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
