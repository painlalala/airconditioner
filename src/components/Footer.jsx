import "./Footer.css";
import React from 'react';
import logo from '../img/logo.jpg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <div className="footer-logo-container">
            <a href="/" className="footer-logo">
              <img src={logo} alt="Logo" className="footer-logo-img" />
            </a>
          </div>
          <p className="footer-text">
            Ми кваліфікована компанія яка займається встановленням вентиляції та кондиціонерів по Львову та Львівській області.
          </p>
        </div>

        <div className="footer-middle">
          <address className="footer-address">
            вул.Станція Личаків 7<br />
            Львівська обл. Львів, 79014<br />
            v.gakivnyk@gmail.com<br />
            +380984442888
          </address>
          <h3 className="footer-newsletter-title">Keep Up With Our Latest News</h3>
        </div>
      </div>

      <div className="footer-down">
        <p className="footer-copyright">
          © 2025 by Eurovent. Powered and secured by Nazarii Lozynskyi.
        </p>
      </div>
    </footer>
  )
}

export default Footer;
