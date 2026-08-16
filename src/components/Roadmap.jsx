import React from 'react';
import { Route } from 'lucide-react';
import './Roadmap.css';
import { experience } from '../data';

export default function Roadmap() {
  return (
    <section className="section container" id="roadmap">
      <div className="section-header-terminal">
        <h2><Route size={20} /> TRACE_ROUTE // SYS_TIMELINE</h2>
      </div>

      <div className="roadmap-container">
        <div className="timeline-line-bg"></div>
        <div className="timeline-line-fill" style={{ scaleY: 1 }}></div>

        {experience.map((item, index) => {
          const points = item.points.filter((p) => p.trim());
          return (
            <div key={`${item.org}-${item.period}`} className="timeline-block">
              <div className="timeline-dot"></div>

              <div className="timeline-content glass-panel">
                <div className="panel-header" style={{ borderBottom: 'none', background: 'transparent', padding: '0 0 10px 0' }}>
                  <span className="timeline-year text-primary text-mono">[{item.period}]</span>
                  <span className="text-muted text-mono" style={{ fontSize: '0.7rem' }}>SEC_{index + 1}</span>
                </div>

                <h4 className="timeline-title text-mono text-bright">{item.role} — {item.org}</h4>
                {item.orgNote && <p className="timeline-desc text-muted">{item.orgNote}</p>}
                {points.map((p) => (
                  <p className="timeline-desc" key={p}>{p}</p>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
