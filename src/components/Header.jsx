import React from "react";
import { Link } from "react-router-dom";
import logo from "../img/logo.jpg";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <Link to="/" className="logo">
        <img src={logo} alt="Logo" />
      </Link>
      <nav className="navbar">
        <Link to="/">Домашня</Link>
        <Link to="/solutions">Наші проекти</Link>
        <Link to="/company">Про нас</Link>
        <Link to="/contact">Контакти</Link>
      </nav>
    </header>
  );
};

export default Header;
