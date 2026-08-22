import React, { useEffect, useRef, useState } from 'react';

import './About.css';
import { about } from '../data';
import { usePrefersReducedMotion, useInViewport } from '../lib/useAsset';

/* Syntax colour is presentation, so it is decided here rather than stored in
   data.js — the same contract Skills.jsx uses for its group icons. The palette
   is the site's own: one accent for keywords, the text ramp for everything
   else. No second colour scheme gets introduced to look like an editor. */
const Str = ({ children }) => (
  <span className="tok-str">
    <span className="tok-punct">&quot;</span>
    {children}
    <span className="tok-punct">&quot;</span>
  </span>
);

function Line({ n, children }) {
  return (
    <div className="code-line">
      <span className="code-gutter" aria-hidden="true">{n}</span>
      <code className="code-text">{children}</code>
    </div>
  );
}

/* Types a role, holds it, deletes it, moves to the next. The timer only runs
   while the pane is actually on screen and the visitor has not asked for
   reduced motion — an always-running interval behind the fold is exactly the
   scroll jank this codebase already had to fix once. */
const TYPE_MS = 55;
const DELETE_MS = 28;
const HOLD_MS = 1900;
const GAP_MS = 240;

function useTypedRole(roles, active) {
  const [index, setIndex] = useState(0);
  const [count, setCount] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (!active) return undefined;

    const full = roles[index];
    let delay = GAP_MS;
    if (!deleting && count < full.length) delay = TYPE_MS;
    else if (!deleting) delay = HOLD_MS;
    else if (count > 0) delay = DELETE_MS;

    const timer = setTimeout(() => {
      if (!deleting && count < full.length) setCount(count + 1);
      else if (!deleting) setDeleting(true);
      else if (count > 0) setCount(count - 1);
      else {
        setDeleting(false);
        setIndex((index + 1) % roles.length);
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [roles, active, index, count, deleting]);

  return active ? roles[index].slice(0, count) : roles[0];
}

export default function About() {
  const { availability } = about;
  const paneRef = useRef(null);
  const reducedMotion = usePrefersReducedMotion();
  const inView = useInViewport(paneRef);
  const active = inView && !reducedMotion;

  const typed = useTypedRole(availability.roles, active);
  const closingLine = 6;

  return (
    <section className="section container" id="about">
      <h2 className="section-glow-title">About</h2>

      <div className="about-plate-split">
        <div className="about-prose">
          {about.paragraphs.map((para) => (
            <p key={para.slice(0, 32)}>{para}</p>
          ))}
        </div>

        <div className="about-editor glass-panel" ref={paneRef}>
          <div className="editor-bar">
            <span className="editor-tab text-mono">{availability.filename}</span>
            <span className="editor-open" aria-hidden="true" />
          </div>

          <div className="editor-body text-mono">
            <Line n={1}>
              <span className="tok-kw">const</span>{' '}
              <span className="tok-id">{availability.declaration}</span>
              <span className="tok-op"> = </span>
              <span className="tok-punct">&#123;</span>
            </Line>

            <Line n={2}>
              <span className="code-indent">
                <span className="tok-key">open</span>
                <span className="tok-punct">: </span>
                <span className="tok-kw">true</span>
                <span className="tok-punct">,</span>
              </span>
            </Line>

            <Line n={3}>
              <span className="code-indent">
                <span className="tok-key">role</span>
                <span className="tok-punct">: </span>
                <span className="tok-str">
                  <span className="tok-punct">&quot;</span>
                  {/* The visible text changes every few hundred ms, so it is
                      hidden from assistive tech and the full list is announced
                      once, below, instead. */}
                  <span aria-hidden="true">{typed}</span>
                  <span
                    className={active ? 'code-caret is-typing' : 'code-caret'}
                    aria-hidden="true"
                  />
                  <span className="tok-punct">&quot;</span>
                </span>
                <span className="tok-punct">,</span>
                <span className="visually-hidden">
                  Open to: {availability.roles.join(', ')}.
                </span>
              </span>
            </Line>

            <Line n={4}>
              <span className="code-indent">
                <span className="tok-key">start</span>
                <span className="tok-punct">: </span>
                <Str>{availability.start}</Str>
                <span className="tok-punct">,</span>
              </span>
            </Line>

            <Line n={5}>
              <span className="code-indent">
                <span className="tok-key">stack</span>
                <span className="tok-punct">: </span>
                <span className="tok-punct">[</span>
                {availability.stack.map((item, i) => (
                  <React.Fragment key={item}>
                    <Str>{item}</Str>
                    {i < availability.stack.length - 1 && <span className="tok-punct">, </span>}
                  </React.Fragment>
                ))}
                <span className="tok-punct">]</span>
                <span className="tok-punct">,</span>
              </span>
            </Line>

            <Line n={closingLine}>
              <span className="tok-punct">&#125;;</span>
            </Line>
          </div>
        </div>
      </div>
    </section>
  );
}
