import React, { useRef } from 'react';

import './Marquee.css';
import { skills } from '../data';
import { useInViewport, usePrefersReducedMotion } from '../lib/useAsset';

/* Keywords come from the proof map, so the band can never advertise a skill
   the site cannot back up. Capped so each track stays a short DOM list
   instead of the 200+ nodes the first version rendered. */
const keywords = skills.slice(0, 16).map((s) => s.name);

export default function Marquee({ direction = 'left' }) {
  const ref = useRef(null);
  const inView = useInViewport(ref);
  const reducedMotion = usePrefersReducedMotion();
  const running = inView && !reducedMotion;

  return (
    <section
      ref={ref}
      className={`marquee${direction === 'right' ? ' is--reversed' : ''}`}
      aria-label="Skills marquee"
    >
      <div className="marquee__viewport">
        <div
          className="marquee__track"
          /* Parked entirely when off-screen — no compositor work for a band
             the user cannot see. */
          style={{ animationPlayState: running ? 'running' : 'paused' }}
        >
          {[0, 1].map((copy) => (
            <span className="marquee__group" key={copy} aria-hidden={copy === 1}>
              {keywords.map((word) => (
                <span className="marquee__item text-mono" key={`${copy}-${word}`}>
                  {word}
                  <span className="marquee__bullet" aria-hidden="true">/</span>
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
