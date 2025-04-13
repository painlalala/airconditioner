import React, { useRef, useState, useEffect } from "react";
import "./Contact.new.css";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div className="contact-wrapper" ref={sectionRef}>
      <h1 className={`contact-head ${isVisible ? 'visible' : ''}`}>Контакти</h1>
      <div className="contact-container">
        <div className="contact-details">
          <div className={`map ${isVisible ? 'visible' : ''}`}>
            <h2>Ми знаходимось</h2>
            <iframe
              title="Office Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2573.194912492516!2d24.061015976943757!3d49.838795071481975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473add37ce780957%3A0x1e1d49caa26b0c99!2z0LLRg9C70LjRhtGPINCh0YLQsNC90YbRltGPIMKr0JvQuNGH0LDQutGW0LLCuywgNywg0JvRjNCy0ZbQsiwg0JvRjNCy0ZbQstGB0YzQutCwINC-0LHQu9Cw0YHRgtGMLCA3OTAwMA!5e0!3m2!1suk!2sua!4v1741550575262!5m2!1suk!2sua"
              allowFullScreen=""
              loading="lazy"
            />
          </div>
          <div className={`info ${isVisible ? 'visible' : ''}`}>
            <h2>Контактна інформація</h2>
            <div className="contact-info">
              <div className="contact-item">
                <span className="icon">📧</span>
                <div className="contact-text">
                  <strong>Email:</strong>
                  <span>v.gakivnyk@gmail.com</span>
                </div>
              </div>
              <div className="contact-item">
                <span className="icon">📱</span>
                <div className="contact-text">
                  <strong>Телефон:</strong>
                  <span>+380984442888</span>
                </div>
              </div>
              <div className="contact-item">
                <span className="icon">⏰</span>
                <div className="contact-text">
                  <strong>Час роботи:</strong>
                  <span>Пн-Пт 9:00 - 18:00</span>
                </div>
              </div>
              <div className="contact-item">
                <span className="icon">📍</span>
                <div className="contact-text">
                  <strong>Адреса:</strong>
                  <span>Львівська обл. Львів, вул.Станція Личаків 7</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
