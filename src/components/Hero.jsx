import React from 'react';

import { Github, Linkedin, Code, Boxes, ArrowRight, Mail, Activity } from 'lucide-react';
import './Hero.css';
import { profile, links, projects, assets } from '../data';
import { usePrefersReducedMotion } from '../lib/useAsset';

const socialLinks = [
  { href: links.github, label: 'GitHub', Icon: Github },
  { href: links.linkedin, label: 'LinkedIn', Icon: Linkedin },
  { href: links.leetcode, label: 'LeetCode', Icon: Code },
  { href: links.huggingface, label: 'HuggingFace', Icon: Boxes },
].filter((l) => l.href);

/* Inner ring: profile destinations. Outer ring: live deployments, pulled
   from whichever projects actually expose a live URL. */
const innerNodes = [
  { href: links.linkedin, label: 'LinkedIn Profile', Icon: Linkedin },
  { href: links.github, label: 'GitHub Profile', Icon: Github },
  { href: links.leetcode, label: 'LeetCode Profile', Icon: Code },
].filter((n) => n.href);

const outerNodes = projects
  .flatMap((p) => p.links.filter((l) => l.kind === 'live' && l.href).map((l) => ({ ...l, title: p.title })))
  .slice(0, 2)
  .map((l, i) => ({ href: l.href, label: `${l.title} Live`, Icon: i === 0 ? Mail : Activity }));

const ORBIT_PERIOD = 26;
const delayFor = (i, total) => `${-(ORBIT_PERIOD / total) * i}s`;

/* Splits the headline into spans so each word can cascade in on mount. */
function WordReveal({ text, className, delayStep = 0.05, disabled }) {
  return (
    <h1 className={className}>
      {text.split(' ').map((word, i) => (
        <React.Fragment key={`${word}-${i}`}>
          {/* The space lives OUTSIDE the span: a trailing space inside an
              inline-block is collapsed away, which welds the words together. */}
          <span
            className={disabled ? undefined : 'word-reveal'}
            style={disabled ? undefined : { animationDelay: `${i * delayStep}s` }}
          >
            {word}
          </span>
          {' '}
        </React.Fragment>
      ))}
    </h1>
  );
}

function Ring({ nodes, ringClass, nodeClass }) {
  return (
    <div className={`orbit-ring ${ringClass}`}>
      {nodes.map((node, i) => {
        const delay = delayFor(i, nodes.length);
        const { Icon } = node;
        return (
          <div className="electron-wrapper" key={node.label} style={{ animationDelay: delay }}>
            <div className={`electron-node ${nodeClass}`} style={{ animationDelay: delay }}>
              <a href={node.href} target="_blank" rel="noreferrer" className="satellite-content">
                <Icon size={17} />
                <span className="node-tooltip text-mono">{node.label}</span>
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function Hero() {
  const reducedMotion = usePrefersReducedMotion();
  const [first, ...rest] = profile.name.split(' ');

  return (
    <section className="hero-viewport" id="home">

      <div className="hero-stage">
        <div className="hero-copy container">
          {/* The wordmark is type only — the portrait lives in the nucleus. */}
          <p className="hero-wordmark" aria-label={profile.name}>
            <span className="hero-wordmark__solid">{first}</span>
            {rest.length > 0 && (
              <span className="hero-wordmark__outline">{rest.join(' ')}</span>
            )}
          </p>

          <WordReveal text={profile.headline} className="hero-headline" disabled={reducedMotion} />

          <p className="hero-sub">{profile.subheadline}</p>

          <p className="hero-status text-mono">
            <span className="hero-status-dot" aria-hidden="true" />
            {profile.status}
          </p>

          <div className="hero-actions">
            <a className="cta-button" href={profile.resumeUrl}>
              <span className="cta-button__fill" aria-hidden="true" />
              <span className="cta-button__label">View Résumé</span>
              <span className="cta-button__icon" aria-hidden="true"><ArrowRight size={16} /></span>
            </a>

            <div className="hero-socials text-mono">
              {socialLinks.map((social) => {
                const { Icon } = social;
                return (
                  <a key={social.label} href={social.href} target="_blank" rel="noreferrer" className="hero-social">
                    <Icon size={16} />
                    {social.label}
                  </a>
                );
              })}
            </div>
          </div>

          {/* Nucleus + orbits */}
          <div className="hero-orbit">
            <div className="atom-system">
              <div className="orbit-plate" aria-hidden="true" />

              <div className="center-nucleus">
                <img src={assets.avatarFallback} alt={profile.name} className="profile-img" />
              </div>

              <Ring nodes={innerNodes} ringClass="ring-1" nodeClass="node-1" />
              <Ring nodes={outerNodes} ringClass="ring-2" nodeClass="node-2" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
