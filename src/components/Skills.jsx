import React from 'react';

import { Code2, Monitor, Database, Brain, Workflow, Server, Wrench, ShieldCheck, Cpu } from 'lucide-react';
import './Skills.css';

const skillBlocks = [
  {
    icon: <Code2 size={20} className="text-accent" />,
    title: 'Programming',
    skills: ['Python', 'JavaScript', 'Java', 'C', 'C++']
  },
  {
    icon: <Server size={20} className="text-accent" />,
    title: 'Backend & APIs',
    skills: ['FastAPI', 'Node.js', 'Express.js', 'REST API Design', 'JWT / OAuth', 'Microservices', 'Asynchronous Processing']
  },
  {
    icon: <Monitor size={20} className="text-accent" />,
    title: 'Frontend',
    skills: ['React', 'React Native', 'HTML', 'CSS', 'Tailwind CSS', 'Component-based UI', 'State Management']
  },
  {
    icon: <Database size={20} className="text-accent" />,
    title: 'Databases & Storage',
    skills: ['PostgreSQL', 'MongoDB', 'Redis', 'SQLite', 'Schema Design', 'Query Optimization']
  },
  {
    icon: <Brain size={20} className="text-accent" />,
    title: 'AI & Machine Learning',
    skills: ['NLP', 'Transformers (FinBERT/DistilBERT)', 'LLM APIs', 'Scikit-learn', 'Feature Engineering', 'Model Evaluation', 'Data Preprocessing', 'Experimental ML Pipelines']
  },
  {
    icon: <Workflow size={20} className="text-accent" />,
    title: 'Distributed Space & Real-Time',
    skills: ['WebRTC (P2P)', 'WebSockets', 'Event-Driven Arch', 'Task Queues', 'Redis + Celery', 'High-throughput Data Pipelines']
  },
  {
    icon: <Cpu size={20} className="text-accent" />,
    title: 'DevOps & Automation',
    skills: ['Docker', 'Git / GitHub', 'Linux', 'CI/CD Basics', 'AWS (EC2, S3)', 'Data Cleaning', 'Batch Processing']
  },
  {
    icon: <Wrench size={20} className="text-accent" />,
    title: 'Tools & Frameworks',
    skills: ['GitHub Actions', 'PyQt', 'RDKit', 'Firebase Auth', 'OAuth2', 'Server-Sent Events']
  },
  {
    icon: <ShieldCheck size={20} className="text-accent" />,
    title: 'Software Engineering Core',
    skills: ['Data Structures & Algorithms', 'OOP', 'System Design', 'Backend Architecture', 'Debugging', 'Testing Concepts']
  }
];

export default function Skills() {
  return (
    <section className="section container" id="skills">
      <h2 className="section-glow-title">Skills</h2>

      <div className="skills-block-grid">
        {skillBlocks.map((block, idx) => (
          <div
            key={idx}
            className="skill-box glass-panel"
          >
            <div className="skill-box-header">
              <h3 className="text-primary text-mono">{block.title}</h3>
              {block.icon}
            </div>

            <div className="skill-pills">
              {block.skills.map((s, i) => (
                <span key={i} className="pill-tag">{s}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
