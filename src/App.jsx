import React from 'react';
import './App.css';
import SiteNav from './components/SiteNav';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
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
      <SiteNav />
      <Hero />
      <Marquee direction="left" />
      <main id="main">
        <About />
        <Projects />
        <Marquee direction="right" />
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
