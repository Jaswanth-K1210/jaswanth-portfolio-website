import React from 'react';

import { Github, Linkedin, Code, Boxes, ArrowRight, Mail, Activity, Coins } from 'lucide-react';
import './Hero.css';
import { profile, links, orbit, assets, getProject } from '../data';
import { usePrefersReducedMotion } from '../lib/useAsset';

const socialLinks = [
  { href: links.github, label: 'GitHub', Icon: Github },
  { href: links.linkedin, label: 'LinkedIn', Icon: Linkedin },
  { href: links.leetcode, label: 'LeetCode', Icon: Code },
  { href: links.huggingface, label: 'HuggingFace', Icon: Boxes },
].filter((l) => l.href);

/* Icons are presentation, so the mapping lives here and data.js only names
   one — same contract Skills.jsx uses for its group icons. */
const ORBIT_ICON = {
  linkedin: Linkedin,
  github: Github,
  code: Code,
  boxes: Boxes,
  mail: Mail,
  activity: Activity,
  coins: Coins,
};

/* A node is either a profile off `links` or a project's live deployment.
   Anything that cannot be resolved to a real URL is dropped rather than
   rendered as a dead orbiting dot. */
function resolveNode(node) {
  const Icon = ORBIT_ICON[node.icon] || Boxes;

  if (node.project) {
    const project = getProject(node.project);
    const live = project?.links.find((l) => l.kind === 'live' && l.href);
    if (!live) return null;
    return { href: live.href, label: `${project.title} — live`, Icon };
  }

  const href = links[node.link];
  if (!href) return null;
  return { href, label: `${node.label} profile`, Icon };
}

const innerNodes = orbit.inner.map(resolveNode).filter(Boolean);
const outerNodes = orbit.outer.map(resolveNode).filter(Boolean);

const ORBIT_PERIOD = 26;
const delayFor = (i, total) => `${-(ORBIT_PERIOD / total) * i}s`;

/* One pill, used by every action in the hero. */
function PillButton(props) {
  const { Icon } = props;
  return (
    <a
      className="cta-button"
      href={props.href}
      {...(props.external ? { target: '_blank', rel: 'noreferrer' } : {})}
    >
      <span className="cta-button__fill" aria-hidden="true" />
      <span className="cta-button__label">{props.label}</span>
      <span className="cta-button__icon" aria-hidden="true"><Icon size={15} /></span>
    </a>
  );
}

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
            <PillButton href={profile.resumeUrl} label="View Résumé" Icon={ArrowRight} external />

            {socialLinks.map((social) => (
              <PillButton
                key={social.label}
                href={social.href}
                label={social.label}
                Icon={social.Icon}
                external
              />
            ))}
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
