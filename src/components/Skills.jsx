import React from 'react';

import { Code2, Monitor, Database, Brain, Server, Cpu, Wrench } from 'lucide-react';
import './Skills.css';
import { skills, workingKnowledge, getProject } from '../data';

/* Icons are presentation, not content — mapped by group, never stored in data.js. */
const GROUP_ICON = {
  Languages: Code2,
  'ML / AI': Brain,
  Backend: Server,
  Frontend: Monitor,
  'Systems & Infra': Cpu,
};
const FallbackIcon = Database;

/* Group in first-seen order so data.js controls the ordering. */
const groups = skills.reduce((acc, skill) => {
  if (skill.proofSlugs.length === 0) return acc; // no proof, no entry
  const bucket = acc.find((g) => g.title === skill.group);
  if (bucket) bucket.skills.push(skill);
  else acc.push({ title: skill.group, skills: [skill] });
  return acc;
}, []);

const proofNames = (skill) =>
  skill.proofSlugs.map((s) => getProject(s)?.title).filter(Boolean).join(', ');

export default function Skills() {
  return (
    <section className="section container" id="skills">
      <h2 className="section-glow-title">Skills</h2>

      <div className="skills-block-grid">
        {groups.map((block) => {
          const Icon = GROUP_ICON[block.title] || FallbackIcon;
          return (
            <div key={block.title} className="skill-box glass-panel">
              <div className="skill-box-header">
                <h3 className="text-primary text-mono">{block.title}</h3>
                <Icon size={20} className="text-accent" />
              </div>

              <div className="skill-pills">
                {block.skills.map((s) => (
                  <span key={s.name} className="pill-tag" title={`Proven by: ${proofNames(s)}`}>
                    {s.name}
                  </span>
                ))}
              </div>
            </div>
          );
        })}

        {workingKnowledge.length > 0 && (
          <div className="skill-box glass-panel">
            <div className="skill-box-header">
              <h3 className="text-primary text-mono">Working Knowledge</h3>
              <Wrench size={20} className="text-accent" />
            </div>

            <div className="skill-pills">
              {workingKnowledge.map((name) => (
                <span key={name} className="pill-tag" title="Used, but no project on this site proves it.">
                  {name}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
