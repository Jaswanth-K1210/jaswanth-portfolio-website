import React from 'react';

import { ArrowRight } from 'lucide-react';
import './Projects.css';

const projects = [
  {
    id: 1,
    title: 'MarketPulse 📈',
    subtitle: 'AI Powered Market Intelligence Platform',
    githubUrl: 'https://github.com/Jaswanth-K1210/MarketPulse',
    desc: 'An autonomous multi-agent AI system designed to analyze global news streams and detect market-impacting events in real-time. Ingests 500-2000 articles daily utilizing LangGraph orchestrations and robust NLP frameworks to evaluate supply chain relationships.',
    arch: ['FastAPI', 'Redis', 'PostgreSQL', 'LangGraph', 'Celery']
  },
  {
    id: 2,
    title: 'Nexus Mail 📧',
    subtitle: 'AI Powered Email Workspace',
    githubUrl: 'https://github.com/Jaswanth-K1210/Nexus-Mail',
    desc: 'An intelligent email workspace leveraging LLMs to automate inbox triage, segmentation, and meeting coordination. Integrates heavily with Gmail and Google Calendar APIs through secure OAuth flows, featuring auto-draft generation.',
    arch: ['Next.js', 'Gmail API', 'Google Calendar', 'OpenAI API']
  },
  {
    id: 3,
    title: 'Private P2P Group Chat 🔒',
    subtitle: 'Decentralized Messaging System',
    githubUrl: 'https://github.com/Jaswanth-K1210/web-rtc-p2p',
    desc: 'A robust decentralized messaging architecture built entirely on WebRTC. The application allows secure real-time communication without persisting messages on any central server, ensuring high-grade privacy.',
    arch: ['WebRTC', 'Socket.IO', 'React', 'Node.js']
  },
  {
    id: 4,
    title: 'Automated ML Workflow 🤖',
    subtitle: 'Reproducible Research Workflows',
    githubUrl: 'https://github.com/Jaswanth-K1210',
    desc: 'An experiment tracking and automation platform designed to standardize machine learning research pipelines. Translates visual node layouts into fully executable Python scripts and programmatic ML workflows automatically.',
    arch: ['Python', 'React', 'Scikit-learn', 'Docker']
  },
  {
    id: 5,
    title: 'AI Surrogate Physic Simulator ⚛️',
    subtitle: 'Physics-Informed Neural Dynamics Simulator',
    githubUrl: 'https://github.com/Jaswanth-K1210',
    desc: 'A deep surrogate neural network designed to accurately predict Argon atom interactions. The model implements mathematically constrained "energy penalties", preventing standard networks from violating fundamental laws of physics and introducing artificial energy.',
    arch: ['PyTorch', 'JAX', 'Molecular Dynamics', 'NVIDIA CUDA']
  },
  {
    id: 6,
    title: 'Drug Discovery System 🧬',
    subtitle: 'Machine Learning Drug Combinations',
    githubUrl: 'https://github.com/Jaswanth-K1210',
    desc: 'An AI computational system designed to calculate synergistic interactions between complex drug combinations. It generates rapid molecular fingerprints utilizing RDKit and estimates predictions against multi-dimensional models.',
    arch: ['RDKit', 'Scikit-learn', 'PyTorch', 'Chemical Informatics']
  }
];

export default function Projects() {
  return (
    <section className="section container" id="projects">
      <h2 className="section-glow-title">Featured Projects</h2>

      <div className="proj-grid">
        {projects.map((proj) => (
          <div 
            key={proj.id}
            className="proj-card glass-panel"
          >
            <div className="proj-content">
              <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.25rem'}}>
                <h3 className="proj-title">{proj.title}</h3>
                <a href={proj.githubUrl} target="_blank" rel="noreferrer" className="proj-git-icon">
                  <svg xmlns="http://www.w7.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                </a>
              </div>
              <p className="proj-subtitle text-mono glow-text-pink">{proj.subtitle}</p>
              
              <p className="proj-desc text-mono text-muted">{proj.desc}</p>
              
              <div className="proj-arch-section">
                <h4 className="arch-heading text-mono text-primary">TECH STACK</h4>
                <div className="arch-tags">
                  {proj.arch.map((t, i) => (
                    <span key={i} className="pill-tag">{t}</span>
                  ))}
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', marginTop: 'auto' }}>
                <a href={proj.githubUrl} target="_blank" rel="noreferrer" className="proj-link text-mono">
                  Source Code <ArrowRight size={14} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
