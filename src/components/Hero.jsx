import React, { useEffect, useRef } from 'react';

import { Github, Linkedin, Code, Boxes, ArrowRight } from 'lucide-react';
import './Hero.css';
import { profile, links, assets } from '../data';
import { useImageStatus, useImagesSettled, usePrefersReducedMotion } from '../lib/useAsset';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#research', label: 'Research' },
  { href: '#skills', label: 'Skills' },
];

const socialLinks = [
  { href: links.github, label: 'GitHub', Icon: Github },
  { href: links.linkedin, label: 'LinkedIn', Icon: Linkedin },
  { href: links.leetcode, label: 'LeetCode', Icon: Code },
  { href: links.huggingface, label: 'HuggingFace', Icon: Boxes },
].filter((l) => l.href);

/** Splits the headline into spans so each word can cascade in on mount. */
function WordReveal({ text, className, delayStep = 0.05, disabled }) {
  return (
    <h1 className={className}>
      {text.split(' ').map((word, i) => (
        <span
          key={`${word}-${i}`}
          className={disabled ? undefined : 'word-reveal'}
          style={disabled ? undefined : { animationDelay: `${i * delayStep}s` }}
        >
          {word}
          {' '}
        </span>
      ))}
    </h1>
  );
}

export default function Hero() {
  const flameRef = useRef(null);
  const reducedMotion = usePrefersReducedMotion();

  const baseStatus = useImageStatus(assets.avatarBase);
  const flameStatus = useImageStatus(assets.avatarFlame);
  const settled = useImagesSettled([assets.avatarBase, assets.avatarFlame, assets.avatarFallback]);

  /* Until the voxel art exists, fall back to the real photo so the hero is
     never empty. The flame layer simply does not render if its file is absent. */
  const usingVoxel = baseStatus === 'ready';
  const baseSrc = usingVoxel ? assets.avatarBase : assets.avatarFallback;
  const showFlame = flameStatus === 'ready' && !reducedMotion;

  useEffect(() => {
    if (!showFlame) return undefined;
    const el = flameRef.current;
    if (!el) return undefined;

    /* Spotlight starts centred, then eases toward the pointer each frame
       rather than snapping to raw coordinates. */
    let target = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    let smooth = { ...target };
    let frame;

    const onMouse = (e) => { target = { x: e.clientX, y: e.clientY }; };
    const onTouch = (e) => {
      const t = e.touches?.[0];
      if (t) target = { x: t.clientX, y: t.clientY };
    };

    const tick = () => {
      smooth.x += (target.x - smooth.x) * 0.1;
      smooth.y += (target.y - smooth.y) * 0.1;
      const rect = el.getBoundingClientRect();
      el.style.setProperty('--x', `${smooth.x - rect.left}px`);
      el.style.setProperty('--y', `${smooth.y - rect.top}px`);
      frame = requestAnimationFrame(tick);
    };

    window.addEventListener('mousemove', onMouse, { passive: true });
    window.addEventListener('touchmove', onTouch, { passive: true });
    window.addEventListener('touchstart', onTouch, { passive: true });
    frame = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('mousemove', onMouse);
      window.removeEventListener('touchmove', onTouch);
      window.removeEventListener('touchstart', onTouch);
      cancelAnimationFrame(frame);
    };
  }, [showFlame]);

  return (
    <section className="hero-viewport" id="home">
      <nav className="top-nav container">
        <div className="nav-logo">{profile.name}</div>
        <div className="nav-links text-mono text-muted">
          {navLinks.map((l) => (
            <a href={l.href} key={l.href}>{l.label}</a>
          ))}
        </div>
        <a href="#contact" className="btn-contact btn-purple">Contact Me</a>
      </nav>

      <div className={`hero-stage${settled ? ' is-loaded' : ''}`}>
        {/* Skeleton holds the layout until both avatar layers have resolved. */}
        {!settled && <div className="hero-skeleton" aria-hidden="true" />}

        <div className={`hero-avatar-layers${usingVoxel ? '' : ' is-fallback'}`} aria-hidden="true">
          <div
            className="hero-reveal-img hero-reveal-img--base"
            style={{ backgroundImage: `url(${baseSrc})` }}
          />
          {showFlame && (
            <div
              ref={flameRef}
              className="hero-reveal-img hero-reveal-img--flame"
              style={{ backgroundImage: `url(${assets.avatarFlame})` }}
            />
          )}
        </div>

          <div className="hero-scrim" aria-hidden="true" />

        <div className="hero-copy container">
          <p
            className={`hero-wordmark${usingVoxel ? '' : ' is-fallback'}`}
            style={{ backgroundImage: `url(${baseSrc})` }}
          >
            {profile.name}
          </p>

          <WordReveal
            text={profile.headline}
            className="hero-headline"
            disabled={reducedMotion}
          />

          <p className="hero-sub">{profile.subheadline}</p>

          <p className="hero-status text-mono">
            <span className="hero-status-dot" aria-hidden="true" />
            {profile.status}
          </p>

          <div className="hero-actions">
            <a className="cta-button" href={profile.resumeUrl}>
              <span className="cta-button__fill" aria-hidden="true" />
              <span className="cta-button__label">View Résumé</span>
              <span className="cta-button__icon" aria-hidden="true">
                <ArrowRight size={16} />
              </span>
            </a>

            <div className="hero-socials text-mono">
              {socialLinks.map((social) => {
                const { Icon } = social;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="hero-social"
                  >
                    <Icon size={16} />
                    {social.label}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="hero-bottom-fade" aria-hidden="true" />
    </section>
  );
}
