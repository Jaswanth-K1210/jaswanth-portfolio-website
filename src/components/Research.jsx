import React from 'react';

import { ArrowRight } from 'lucide-react';
import './Research.css';
import { research, getProject } from '../data';

export default function Research() {
  return (
    <section className="section plate-invert" id="research">
      <div className="container">
      <h2 className="section-glow-title">Research</h2>

      <div className="research-stack">
        {research.map((entry) => {
          const proof = entry.projectSlug ? getProject(entry.projectSlug) : null;
          const findings = entry.findings || [];
          /* The headline result, when the linked project records one. */
          const identity = proof?.metrics?.[0];

          return (
            <article className="research-entry glass-panel" key={entry.title}>
              <header className="research-entry__head">
                <div className="research-entry__badges">
                  <span className="research-status text-mono">{entry.status}</span>
                  {entry.collaborator && (
                    <span className="research-collab text-mono">{entry.collaborator}</span>
                  )}
                </div>
                <h3 className="research-entry__title text-bright">{entry.title}</h3>
                <p className="research-entry__summary text-muted">{entry.summary}</p>
              </header>

              {identity && (
                <div className="research-identity">
                  <span className="research-identity__label text-mono">{identity.label}</span>
                  <code className="research-identity__value text-mono">{identity.value}</code>
                </div>
              )}

              {findings.length > 0 && (
                <div className="research-findings">
                  <h4 className="research-findings__label text-mono">Verdicts</h4>
                  <dl className="verdict-table">
                    {findings.map((f) => (
                      <div className={`verdict verdict--${f.outcome}`} key={f.probe}>
                        <dt className="verdict__probe text-mono">{f.probe}</dt>
                        <dd className="verdict__result text-mono">
                          {f.verdict}
                          <span className="verdict__flag">{f.outcome}</span>
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              )}

              <footer className="research-entry__foot">
                {proof?.stack?.length > 0 && (
                  <div className="research-stack-tags">
                    {proof.stack.map((s) => (
                      <span className="pill-tag" key={s}>{s}</span>
                    ))}
                  </div>
                )}

                {proof?.links?.filter((l) => l.href).map((l) => (
                  <a
                    key={l.label}
                    href={l.href}
                    target="_blank"
                    rel="noreferrer"
                    className="proj-link text-mono"
                  >
                    {l.label} <ArrowRight size={14} />
                  </a>
                ))}
              </footer>
            </article>
          );
        })}
      </div>
      </div>
    </section>
  );
}
