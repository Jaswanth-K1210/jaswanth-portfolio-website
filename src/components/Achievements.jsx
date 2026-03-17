import React from 'react';

import { Trophy, Code, Award, Target } from 'lucide-react';
import './Achievements.css';

const achievements = [
  { icon: <Trophy size={16}/>, text: 'Runner Up at IIT Hyderabad Hackathon' },
  { icon: <Code size={16}/>, text: 'Solved 300+ algorithms on LeetCode' },
  { icon: <Award size={16}/>, text: 'ML Research Intern at IIIT Hyderabad' },
  { icon: <Target size={16}/>, text: 'Participant - JPMC Software Eng Virtual Experience' },
];

export default function Achievements() {
  return (
    <section className="section container" id="achievements">
      <h2 className="section-glow-title">Milestones</h2>

      <div className="achievements-layout glass-panel">
        <div className="achievements-list">
          {achievements.map((item, index) => (
            <div 
              key={index}
              className="ach-item-box"
            >
              <div className="ach-icon-circle text-accent">
                {item.icon}
              </div>
              <span className="ach-text text-bright">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
