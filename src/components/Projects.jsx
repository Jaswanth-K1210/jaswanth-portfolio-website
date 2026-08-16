import React from 'react';

import { ArrowRight } from 'lucide-react';
import './Projects.css';
import { projects } from '../data';

const STATUS_LABEL = {
  shipped: 'SHIPPED',
  active: 'IN PROGRESS',
  research: 'RESEARCH',
  local: 'LOCAL / UNRELEASED',
};

export default function Projects() {
  return (
    <section className="section container" id="projects">
      <h2 className="section-glow-title">Featured Projects</h2>

      <div className="proj-grid">
        {projects.map((proj) => {
          const repo = proj.links.find((l) => l.kind === 'repo');

          return (
            <div key={proj.slug} className="proj-card glass-panel">
              <div className="proj-content">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.25rem' }}>
                  <h3 className="proj-title">{proj.title}</h3>
                  {repo && (
                    <a href={repo.href} target="_blank" rel="noreferrer" className="proj-git-icon" aria-label={`${proj.title} repository`}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
                    </a>
                  )}
                </div>

                <p className="proj-subtitle text-mono glow-text-pink">{proj.tagline}</p>

                <p className="proj-desc text-mono text-muted">{proj.summary}</p>

                {proj.metrics.length > 0 && (
                  <div className="proj-arch-section">
                    <h4 className="arch-heading text-mono text-primary">METRICS</h4>
                    <div className="arch-tags">
                      {proj.metrics.map((m) => (
                        <span key={m.label} className="pill-tag">{m.label}: {m.value}</span>
                      ))}
                    </div>
                  </div>
                )}

                {proj.stack.length > 0 && (
                  <div className="proj-arch-section">
                    <h4 className="arch-heading text-mono text-primary">TECH STACK</h4>
                    <div className="arch-tags">
                      {proj.stack.map((t) => (
                        <span key={t} className="pill-tag">{t}</span>
                      ))}
                    </div>
                  </div>
                )}

                <div style={{ display: 'flex', gap: '1rem', marginTop: 'auto', flexWrap: 'wrap', alignItems: 'center' }}>
                  <span className="text-mono text-muted" style={{ fontSize: '0.7rem', letterSpacing: '0.08em' }}>
                    {STATUS_LABEL[proj.status]} · {proj.year}
                  </span>
                  {proj.links.filter((l) => l.href).map((l) => (
                    <a key={l.label} href={l.href} target="_blank" rel="noreferrer" className="proj-link text-mono" title={l.note || undefined}>
                      {l.label} <ArrowRight size={14} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
