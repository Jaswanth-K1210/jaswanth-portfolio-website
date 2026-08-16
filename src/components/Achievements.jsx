import React from 'react';

import { Award } from 'lucide-react';
import './Achievements.css';
import { achievements } from '../data';

export default function Achievements() {
  return (
    <section className="section container" id="achievements">
      <h2 className="section-glow-title">Milestones</h2>

      <div className="achievements-layout glass-panel">
        <div className="achievements-list">
          {achievements.map((item) => (
            <div key={item.title} className="ach-item-box">
              <div className="ach-icon-circle text-accent">
                <Award size={16} />
              </div>
              <span className="ach-text text-bright">
                {item.title}
                {item.detail && <span className="text-muted"> — {item.detail}</span>}
                {item.year && <span className="text-muted text-mono"> [{item.year}]</span>}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
