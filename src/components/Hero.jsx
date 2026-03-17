import React from 'react';

import { Github, FileText, Bot, Linkedin } from 'lucide-react';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero-viewport" id="home">

      {/* Navbar integrated into Hero Section to match static placement in design */}
      <nav className="top-nav container">
        <div className="nav-logo">Jaswanth Koppisetty</div>
        <div className="nav-links text-mono text-muted">
          <a href="#about">About</a>
          <a href="#projects">Projects <span className="dot-decor"></span></a>
          <a href="#research">Research</a>
          <a href="#skills">Skills</a>
        </div>
        <a href="#contact" className="btn-contact btn-purple">Contact Me</a>
      </nav>

      {/* Hero Grid Structure */}
      <div className="hero-grid container">

        {/* Left Side: Glowing Title and Info */}
        <div
          className="hero-left"
        >
          <h1 className="hero-glow-title">
            Hi,<br />
            I'm Jaswanth <span style={{ display: 'inline-block' }} role="img" aria-label="wave">👋</span>
          </h1>

          <p className="hero-desc text-mono text-muted">
            I build intelligent software systems that combine machine learning, distributed infrastructure, and real-time applications. My work focuses on designing autonomous AI systems, scalable data pipelines, and experimental architectures that operate under real-world conditions.
          </p>

          <div className="hero-links text-mono text-muted">
            <a href="https://github.com/Jaswanth-K1210" target="_blank" rel="noreferrer" className="link-item">
              <Github size={18} /> Github Profile
            </a>
            <a href="https://linkedin.com/in/jaswanthkoppisetty" target="_blank" rel="noreferrer" className="link-item">
              <Linkedin size={18} /> LinkedIn Profile
            </a>
            <a href="#research" className="link-item">
              <FileText size={18} /> Read Research
            </a>
          </div>
        </div>

        {/* Right Side: Circular Visualization and Cards */}
        <div
          className="hero-right"
        >
          <div className="profile-visual-wrapper">

            {/* The Outer Dashed Purple Ring */}
            <div className="circle-dashed"></div>

            <div className="circle-solid">
              <img src="/Profile.jpg" alt="Jaswanth Koppisetty" className="profile-img" style={{ objectPosition: ' center', transform: 'scale(1.9)', transformOrigin: ' center' }} />
            </div>

            {/* Floating Card: Connect LinkedIn */}
            <a
              href="https://linkedin.com/in/jaswanthkoppisetty"
              target="_blank"
              rel="noreferrer"
              className="float-card feedback-card"
            >
              <div className="follow-icon"><Linkedin size={20} color="#8b5cf6" /></div>
              <div className="follow-info text-mono">
                <span className="text-muted" style={{ fontSize: '0.75rem' }}>Connect on LinkedIn</span>
                <span className="text-bright font-bold" style={{ textDecoration: 'none' }}>@jaswanth</span>
              </div>
            </a>

            {/* Floating Card: Follow Github */}
            <a
              href="https://github.com/Jaswanth-K1210"
              target="_blank"
              rel="noreferrer"
              className="float-card follow-card"
            >
              <div className="follow-icon"><Github size={20} fill="#8b5cf6" stroke="none" /></div>
              <div className="follow-info text-mono">
                <span className="text-muted" style={{ fontSize: '0.75rem' }}>Follow on Github</span>
                <span className="text-bright font-bold" style={{ textDecoration: 'none' }}>@Jaswanth-K1210</span>
              </div>
            </a>

          </div>
        </div>

      </div>

      {/* Decorative Blur Blobs mirroring layout */}
      <div className="blur-blob blob-purple shape-1"></div>
      <div className="blur-blob blob-purple shape-2"></div>

      {/* Bottom Right Floating Chat Action Button */}
      <a href="#contact" className="floating-chat-btn">
        <Bot size={20} />
      </a>
    </section>
  );
}
