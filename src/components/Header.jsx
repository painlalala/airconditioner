import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../img/logo.jpg";
import "./Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = isMenuOpen ? 'auto' : 'hidden';
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = 'auto';
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <Link to="/" className="logo" onClick={closeMenu}>
          <img src={logo} alt="Eurovent Logo" />
        </Link>

        <button 
          className={`burger-menu ${isMenuOpen ? 'open' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`navbar ${isMenuOpen ? 'open' : ''}`}>
          <Link 
            to="/" 
            className={isActive('/') ? 'active' : ''}
            onClick={closeMenu}
          >
            <span>Домашня</span>
            <div className="nav-indicator"></div>
          </Link>
          <Link 
            to="/solutions" 
            className={isActive('/solutions') ? 'active' : ''}
            onClick={closeMenu}
          >
            <span>Наші проекти</span>
            <div className="nav-indicator"></div>
          </Link>
          <Link 
            to="/company" 
            className={isActive('/company') ? 'active' : ''}
            onClick={closeMenu}
          >
            <span>Про нас</span>
            <div className="nav-indicator"></div>
          </Link>
          <Link 
            to="/contact" 
            className={isActive('/contact') ? 'active' : ''}
            onClick={closeMenu}
          >
            <span>Контакти</span>
            <div className="nav-indicator"></div>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
