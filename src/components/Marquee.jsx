import React from 'react';

import './Marquee.css';
import { skills, workingKnowledge, assets } from '../data';
import { useImageStatus } from '../lib/useAsset';

/* Keywords come from the proof map, so the marquee can never advertise a
   skill the site cannot back up. */
const keywords = [...skills.map((s) => s.name), ...workingKnowledge];

export default function Marquee({ direction = 'left' }) {
  const portalStatus = useImageStatus(assets.portal);
  const hasPortal = portalStatus === 'ready';
  const reversed = direction === 'right';

  const row = (rowReversed) => (
    <div className="marquee__viewport">
      <div className={`marquee__track${rowReversed ? ' reverse' : ''}`}>
        {/* Duplicated back-to-back so the -50% loop is seamless. */}
        {[0, 1].map((copy) => (
          <span className="marquee__group" key={copy} aria-hidden={copy === 1}>
            {keywords.map((word) => (
              <span className="marquee__item text-mono" key={`${copy}-${word}`}>
                {word}
                <span className="marquee__bullet" aria-hidden="true">•</span>
              </span>
            ))}
          </span>
        ))}
      </div>
    </div>
  );

  return (
    <section
      className={`marquee${reversed ? ' is--reversed-marquee' : ''}${hasPortal ? ' has-portal' : ''}`}
      aria-label="Skills marquee"
    >
      {hasPortal && (
        <>
          <img src={assets.portal} alt="" className="marquee__frame marquee__frame--left" />
          <img src={assets.portal} alt="" className="marquee__frame marquee__frame--right" />
        </>
      )}

      {/* Two rows scrolling opposite ways for the crisscross effect. */}
      {row(reversed)}
      {row(!reversed)}
    </section>
  );
}
