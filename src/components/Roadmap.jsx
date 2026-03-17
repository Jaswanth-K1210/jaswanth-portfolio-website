import React from 'react';
import { Route } from 'lucide-react';
import './Roadmap.css';

const timeline = [
  {
    year: '2023',
    title: 'SYS_INT: B.Tech CSE',
    desc: 'Started foundational systems and algorithmic engineering at Anurag University.',
  },
  {
    year: '2024',
    title: 'EXEC: AI Architectures',
    desc: 'Began building functional ML nodes and intelligent local applications focused on data automation.',
  },
  {
    year: '2025',
    title: 'DEPLOY: NLP Research @ IIIT Hyderabad',
    desc: 'Executed low-resource NLP pipelines for Telugu. Processed 100K+ entries / 50H+ audio.',
  },
  {
    year: '2025',
    title: 'SCALE: Large Deployments',
    desc: 'Built MarketPulse and Nexus Mail, deploying extensive real-time reasoning and distributed clusters.',
  },
  {
    year: 'FUTURE',
    title: 'EXPAND: Advanced AI Simulation',
    desc: 'Investigating autonomous coordination, uncertainty minimization, and reliable Physics-Informed surrogate architectures.',
  }
];

export default function Roadmap() {
  return (
    <section className="section container" id="roadmap">
      <div className="section-header-terminal">
        <h2><Route size={20}/> TRACE_ROUTE // SYS_TIMELINE</h2>
      </div>
      
      <div className="roadmap-container">
        <div className="timeline-line-bg"></div>
        <div className="timeline-line-fill" style={{ scaleY: 1 }}></div>
        
        {timeline.map((item, index) => (
          <div 
            key={index}
            className="timeline-block"
          >
            <div className="timeline-dot"></div>
            
            <div className="timeline-content glass-panel">
              <div className="panel-header" style={{ borderBottom: 'none', background: 'transparent', padding: '0 0 10px 0' }}>
                <span className="timeline-year text-primary text-mono">[{item.year}]</span>
                <span className="text-muted text-mono" style={{ fontSize: '0.7rem' }}>SEC_{index+1}</span>
              </div>
              
              <h4 className="timeline-title text-mono text-bright">{item.title}</h4>
              <p className="timeline-desc">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
