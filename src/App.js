import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Links from './pages/Links';
import WorkExperince from './pages/WorkExperince';
import AddInfo from './pages/AddInfo';
import Skills from './pages/Skills';
import Education from './pages/Education';
import './App.css'; // Import the global styles



const App = () => {
  return (
    <Router>
      <div style={{ margin: 0, padding: 0 }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/workexperince" element={<WorkExperince />} />
          <Route path="/education" element={<Education />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/links" element={<Links />} />
          <Route path="/addinfo" element={<AddInfo />} />
        </Routes>
        <Footer />
  
      </div>
    </Router>
  );
}

export default App;
