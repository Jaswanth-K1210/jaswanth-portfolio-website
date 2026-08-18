import React from 'react';
import './App.css';
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
    <div className="app-content">
      <Hero />
      <main id="main">
        <About />
        <Projects />
        <Research />
        <Skills />
        <Roadmap />
        <Achievements />
      </main>
      <Contact />
    </div>
  );
}

export default App;
