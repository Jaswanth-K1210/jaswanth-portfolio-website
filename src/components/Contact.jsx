import React, { useRef } from 'react';
import { motion as Motion, useScroll, useTransform } from 'framer-motion';

import './Contact.css';
import MagicCard from './MagicCard';
import { profile, links, assets } from '../data';
import { useImageStatus, usePrefersReducedMotion } from '../lib/useAsset';

const email = profile.email || links.email;

/* Only links that exist in data.js are rendered — no dead entries. */
const contactLinks = [
  email && { label: 'Email', href: `mailto:${email}` },
  links.linkedin && { label: 'LinkedIn', href: links.linkedin, external: true },
  links.github && { label: 'GitHub', href: links.github, external: true },
  links.leetcode && { label: 'LeetCode', href: links.leetcode, external: true },
  links.huggingface && { label: 'HuggingFace', href: links.huggingface, external: true },
].filter(Boolean);

export default function Contact() {
  const ref = useRef(null);
  const reducedMotion = usePrefersReducedMotion();
  const skyStatus = useImageStatus(assets.nightSky);
  const llamaStatus = useImageStatus(assets.llama);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const skyY = useTransform(scrollYProgress, [0, 1], ['-14%', '6%']);

  return (
    <footer className="cta-section" id="contact" ref={ref}>
      {/* Oversized, offset upward, drifting slowly as the section scrolls past. */}
      {skyStatus === 'ready' ? (
        <Motion.div
          className="cta-sky"
          style={{
            backgroundImage: `url(${assets.nightSky})`,
            y: reducedMotion ? 0 : skyY,
          }}
          aria-hidden="true"
        />
      ) : (
        <div className="cta-sky cta-sky--fallback" aria-hidden="true" />
      )}

      <div className="cta-top-fade" aria-hidden="true" />

      <div className="cta-inner container">
        {llamaStatus === 'ready' && (
          <img src={assets.llama} alt="" className="cta-mascot" />
        )}

        <MagicCard className={llamaStatus === 'ready' ? 'cta-card has-mascot' : 'cta-card'} disabled={reducedMotion}>
          <div className="cta-card__content">
            <p className="cta-eyebrow text-mono">Get in touch</p>
            <h2 className="cta-heading">Let&rsquo;s build something worth measuring.</h2>
            <p className="cta-body text-muted">
              {profile.status}. Based in {profile.location}.
            </p>

            <nav className="cta-links text-mono" aria-label="Contact links">
              {contactLinks.map((l, i) => (
                <React.Fragment key={l.label}>
                  {i > 0 && <span className="cta-dot" aria-hidden="true">•</span>}
                  <a
                    href={l.href}
                    className="cta-link"
                    {...(l.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  >
                    {l.label}
                  </a>
                </React.Fragment>
              ))}
            </nav>
          </div>
        </MagicCard>

        <p className="cta-colophon text-mono text-muted">
          &copy; {new Date().getFullYear()} {profile.name}
        </p>
      </div>
    </footer>
  );
}
