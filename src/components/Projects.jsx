import React, { useRef, useState } from 'react';
import { motion as Motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';

import { ArrowRight, Github, ExternalLink } from 'lucide-react';
import './Projects.css';
import { projects, getFeatured, assets } from '../data';
import { useImageStatus, usePrefersReducedMotion } from '../lib/useAsset';

const STATUS_LABEL = {
  shipped: 'SHIPPED',
  active: 'IN PROGRESS',
  research: 'RESEARCH',
  local: 'LOCAL / UNRELEASED',
};

/* data.js already marks which projects lead; the rest live behind View More. */
const featured = getFeatured();
const rest = projects.filter((p) => !p.featured);

function ProjectCard({ proj }) {
  const repo = proj.links.find((l) => l.kind === 'repo');
  const live = proj.links.find((l) => l.kind === 'live');

  return (
    <article className="proj-card glass-panel">
      <div className="proj-content">
        <div className="proj-head">
          <h3 className="proj-title">{proj.title}</h3>
          <span className="proj-status text-mono">{STATUS_LABEL[proj.status]}</span>
        </div>

        <p className="proj-subtitle text-mono">{proj.tagline}</p>

        {proj.summary && <p className="proj-desc text-muted">{proj.summary}</p>}

        {proj.metrics.length > 0 && (
          <dl className="proj-metrics text-mono">
            {proj.metrics.map((m) => (
              <div className="proj-metric" key={m.label}>
                <dt>{m.label}</dt>
                <dd>{m.value}</dd>
              </div>
            ))}
          </dl>
        )}

        {proj.stack.length > 0 && (
          <div className="arch-tags">
            {proj.stack.map((t) => <span className="pill-tag" key={t}>{t}</span>)}
          </div>
        )}

        <div className="proj-foot">
          <span className="proj-year text-mono">{proj.year}</span>
          <div className="proj-links">
            {live?.href && (
              <a href={live.href} target="_blank" rel="noreferrer" className="proj-link text-mono" title={live.note || undefined}>
                <ExternalLink size={14} /> Live
              </a>
            )}
            {repo?.href && (
              <a href={repo.href} target="_blank" rel="noreferrer" className="proj-link text-mono">
                <Github size={14} /> Code
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  const [expanded, setExpanded] = useState(false);
  const sectionRef = useRef(null);
  const reducedMotion = usePrefersReducedMotion();
  const bookStatus = useImageStatus(assets.book);
  const cloudStatus = useImageStatus(assets.cloud);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  const cloudA = useTransform(scrollYProgress, [0, 1], ['-12%', '18%']);
  const cloudB = useTransform(scrollYProgress, [0, 1], ['16%', '-14%']);

  const collapse = () => {
    setExpanded(false);
    sectionRef.current?.scrollIntoView({ block: 'start' });
  };

  return (
    <section className="section container projects-section" id="projects" ref={sectionRef}>
      {cloudStatus === 'ready' && !reducedMotion && (
        <>
          <Motion.img src={assets.cloud} alt="" className="proj-cloud proj-cloud--a" style={{ y: cloudA }} />
          <Motion.img src={assets.cloud} alt="" className="proj-cloud proj-cloud--b" style={{ y: cloudB }} />
        </>
      )}

      <header className="projects-header">
        <div className="projects-title-row">
          {bookStatus === 'ready' && (
            <img src={assets.book} alt="" className="projects-book" />
          )}
          <h2 className="section-glow-title">Featured Projects</h2>
        </div>
        <p className="projects-blurb text-muted">
          Every metric below is traceable to a repository, log, or scorecard.
        </p>
      </header>

      <div className="proj-grid">
        {featured.map((proj) => (
          <ProjectCard key={proj.slug} proj={proj} />
        ))}

        <AnimatePresence>
          {expanded && rest.map((proj, i) => (
            <Motion.div
              key={proj.slug}
              initial={{ opacity: 0, y: 24, filter: 'blur(6px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: 16, filter: 'blur(6px)' }}
              transition={{ duration: 0.4, delay: reducedMotion ? 0 : i * 0.06, ease: 'easeOut' }}
            >
              <ProjectCard proj={proj} />
            </Motion.div>
          ))}
        </AnimatePresence>
      </div>

      <div className="projects-more">
        <button
          type="button"
          className="more-pill text-mono"
          onClick={() => (expanded ? collapse() : setExpanded(true))}
          aria-expanded={expanded}
        >
          {expanded ? 'View Less' : `View More (${rest.length})`}
          <ArrowRight size={14} className={expanded ? 'more-pill__icon is-up' : 'more-pill__icon'} />
        </button>
      </div>
    </section>
  );
}
