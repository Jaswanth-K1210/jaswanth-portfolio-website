import React from 'react';

import './Research.css';

const focusAreas = [
  'Agentic AI Systems',
  'Multi-Agent Coordination',
  'LLM Reasoning Architectures',
  'Human-Aligned AI Systems',
  'Decision Making Under Uncertainty',
  'Explainable Machine Learning'
];

export default function Research() {
  return (
    <section className="section container" id="research">
      <h2 className="section-glow-title">Research</h2>

      <div 
        className="research-box glass-panel"
      >
        <div className="research-grid">
          <div className="focus-col">
            <h3 className="text-primary text-mono focus-header">Focus Areas</h3>
            <div className="focus-list">
              {focusAreas.map((area, idx) => (
                <div key={idx} className="focus-pill text-mono">
                  {area}
                </div>
              ))}
            </div>
          </div>
          
          <div className="desc-col text-mono text-muted">
            <p>
              My research explores how autonomous AI systems can reason, collaborate, and adapt in dynamic environments.
            </p>
            <p>
              I study how multiple AI agents can coordinate to solve complex problems that require reasoning, planning, and data synthesis.
            </p>
            <p>
              My work involves designing experimental pipelines, evaluating system behavior, and analyzing failure modes in real-world AI systems.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
