import React from 'react';
import './App.css';
import NetworkBackground from './components/NetworkBackground';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Research from './components/Research';
import Achievements from './components/Achievements';
import Skills from './components/Skills';
import Roadmap from './components/Roadmap';
import Contact from './components/Contact';

function App() {
  return (
    <>
      {/* 3D Global Scene */}
      <NetworkBackground />

      {/* Scrollable Content */}
      <div className="app-content">
        <Hero />
        <About />
        <Projects />
        <Research />
        <Achievements />
        <Skills />
        <Roadmap />
        <Contact />
      </div>
    </>
  );
}

export default App;
