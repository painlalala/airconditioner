import React from 'react';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import Footer from './components/Footer.jsx';
import Header from './components/Header';
import Home from './components/Home';
import Projects from './components/Projects';
import Company from './components/Company';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/solutions" element={<Projects />} />
          <Route path="/company" element={<Company />} />
          <Route path="/contact" element={<Contact />} />
          {/* Фолбек: якщо URL не співпадає з жодним з визначених маршрутів, редірект на домашню сторінку */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
      <footer>
        <Footer />
      </footer>
    </Router>
  );
}

export default App;
