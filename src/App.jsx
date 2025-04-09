import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Footer from './components/Footer.jsx';
import Header from './components/Header';
import Home from './components/Home';
import Projects from './components/Projects';
import Company from './components/Company';
import Contact from './components/Contact';
import ProjectVam from './components/projects/ProjectVam';
import ProjectLeleka from './components/projects/ProjectLeleka';
import ProjectPivdenny from './components/projects/ProjectPivdenny';
import ProjectGlobalLogic from './components/projects/ProjectGlobalLogic';
import ProjectKultura from './components/projects/ProjectKultura';
import ProjectSharbel from './components/projects/ProjectSharbel';
import ProjectCvgUkraine from './components/projects/ProjectCvgUkraine';
import ProjectUkrpol from './components/projects/ProjectUkrpol';
import './App.css';
import ScrollToTop from './components/ScrollToTop.jsx';

function App() {
  return (
    <Router>
      <Header />
      <div className="main-content">
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/solutions" element={<Projects />} />
          <Route path="/company" element={<Company />} />
          <Route path="/contact" element={<Contact />} />
          {/* Project routes */}
          <Route path="/solutions/vam" element={<ProjectVam />} />
          <Route path="/solutions/leleka" element={<ProjectLeleka />} />
          <Route path="/solutions/pivdenny" element={<ProjectPivdenny />} />
          <Route path="/solutions/global-logic" element={<ProjectGlobalLogic />} />
          <Route path="/solutions/kultura" element={<ProjectKultura />} />
          <Route path="/solutions/sharbel" element={<ProjectSharbel />} />
          <Route path="/solutions/cvg-ukraine" element={<ProjectCvgUkraine />} />
          <Route path="/solutions/ukrpol" element={<ProjectUkrpol />} />
          {/* Fallback route */}
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
