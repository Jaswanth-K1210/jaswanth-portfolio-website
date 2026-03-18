import React from 'react';

import { Github, FileText, Bot, Linkedin, Code, Mail, Activity } from 'lucide-react';
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
            <a href="https://www.linkedin.com/in/jaswanth-koppisetty/" target="_blank" rel="noreferrer" className="link-item">
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

            <div className="atom-system">
              {/* Nucleus */}
              <div className="center-nucleus">
                <img src="/Profile.jpg" alt="Jaswanth Koppisetty" className="profile-img" style={{ objectPosition: ' center', transform: 'scale(1.9)', transformOrigin: ' center' }} />
              </div>

              {/* Ring 1: LinkedIn, GitHub & LeetCode */}
              <div className="orbit-ring ring-1">
                <div className="electron-wrapper" style={{ animationDelay: '0s' }}>
                  <div className="electron-node node-1" style={{ animationDelay: '0s' }}>
                    <a href="https://www.linkedin.com/in/jaswanth-koppisetty/" target="_blank" rel="noreferrer" className="satellite-content">
                      <Linkedin size={20} color="#14f1d9" />
                      <span className="node-tooltip">LinkedIn Profile</span>
                    </a>
                  </div>
                </div>
                <div className="electron-wrapper" style={{ animationDelay: '-6.6s' }}>
                  <div className="electron-node node-1" style={{ animationDelay: '-6.6s' }}>
                    <a href="https://github.com/Jaswanth-K1210" target="_blank" rel="noreferrer" className="satellite-content">
                      <Github size={20} color="#14f1d9" />
                      <span className="node-tooltip">GitHub Profile</span>
                    </a>
                  </div>
                </div>
                <div className="electron-wrapper" style={{ animationDelay: '-13.3s' }}>
                  <div className="electron-node node-1" style={{ animationDelay: '-13.3s' }}>
                    <a href="https://leetcode.com/u/a5S3b6vtks/" target="_blank" rel="noreferrer" className="satellite-content">
                      <Code size={20} color="#14f1d9" />
                      <span className="node-tooltip">LeetCode Profile</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Ring 2: Nexus Mail & Market Pulse */}
              <div className="orbit-ring ring-2">
                <div className="electron-wrapper" style={{ animationDelay: '-4s' }}>
                  <div className="electron-node node-2" style={{ animationDelay: '-4s' }}>
                    <a href="https://nexus-mail.me" target="_blank" rel="noreferrer" className="satellite-content">
                      <Mail size={20} color="#14f1d9" />
                      <span className="node-tooltip">Nexus Mail Live</span>
                    </a>
                  </div>
                </div>
                <div className="electron-wrapper" style={{ animationDelay: '-14s' }}>
                  <div className="electron-node node-2" style={{ animationDelay: '-14s' }}>
                    <a href="https://market-pulse-jet.vercel.app" target="_blank" rel="noreferrer" className="satellite-content">
                      <Activity size={20} color="#14f1d9" />
                      <span className="node-tooltip">Market Pulse Live</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

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
