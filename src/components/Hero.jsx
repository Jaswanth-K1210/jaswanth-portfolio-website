import React from 'react';

import { Github, FileText, Bot, Linkedin, Mail, Activity, Boxes, Code } from 'lucide-react';
import './Hero.css';
import { profile, links, projects } from '../data';

/* Ring 1 = profile links. Anything empty in data.js is simply not rendered. */
const profileNodes = [
  { href: links.linkedin, label: 'LinkedIn Profile', Icon: Linkedin },
  { href: links.github, label: 'GitHub Profile', Icon: Github },
  { href: links.leetcode, label: 'LeetCode Profile', Icon: Code },
  { href: links.huggingface, label: 'HuggingFace Profile', Icon: Boxes },
].filter((n) => n.href);

/* Ring 2 = the first two projects that expose a live URL. */
const liveNodes = projects
  .flatMap((p) => p.links.filter((l) => l.kind === 'live').map((l) => ({ ...l, title: p.title })))
  .slice(0, 2)
  .map((l, i) => ({ href: l.href, label: `${l.title} Live`, Icon: i === 0 ? Mail : Activity }));

/* Both orbit animations run on a 20s cycle; spread nodes evenly around it
   so the ring stays balanced whatever number of links data.js provides. */
const ORBIT_PERIOD = 20;
const delayFor = (i, total) => `${-(ORBIT_PERIOD / total) * i}s`;

const firstName = profile.name.split(' ')[0];

export default function Hero() {
  return (
    <section className="hero-viewport" id="home">

      {/* Navbar integrated into Hero Section to match static placement in design */}
      <nav className="top-nav container">
        <div className="nav-logo">{profile.name}</div>
        <div className="nav-links text-mono text-muted">
          <a href="#about">About</a>
          <a href="#projects">Projects <span className="dot-decor"></span></a>
          <a href="#research">Research</a>
          <a href="#skills">Skills</a>
        </div>
        <a href="#contact" className="btn-contact btn-purple">Contact Me</a>
      </nav>

      {/* Hero Grid Structure */}
      <div className="hero-grid container">

        {/* Left Side: Glowing Title and Info */}
        <div className="hero-left">
          <h1 className="hero-glow-title">
            Hi,<br />
            I'm {firstName} <span style={{ display: 'inline-block' }} role="img" aria-label="wave">👋</span>
          </h1>

          <p className="hero-desc text-mono text-muted">
            {profile.headline} {profile.subheadline}
          </p>

          <div className="hero-links text-mono text-muted">
            {links.github && (
              <a href={links.github} target="_blank" rel="noreferrer" className="link-item">
                <Github size={18} /> Github Profile
              </a>
            )}
            {links.linkedin && (
              <a href={links.linkedin} target="_blank" rel="noreferrer" className="link-item">
                <Linkedin size={18} /> LinkedIn Profile
              </a>
            )}
            <a href="#research" className="link-item">
              <FileText size={18} /> Read Research
            </a>
          </div>
        </div>

        {/* Right Side: Circular Visualization and Cards */}
        <div className="hero-right">
          <div className="profile-visual-wrapper">

            <div className="atom-system">
              {/* Nucleus */}
              <div className="center-nucleus">
                <img
                  src="/Profile.jpg"
                  alt={profile.name}
                  className="profile-img"
                  style={{ objectPosition: ' center', transform: 'scale(1.9)', transformOrigin: ' center' }}
                />
              </div>

              {/* Ring 1: profile links */}
              <div className="orbit-ring ring-1">
                {profileNodes.map((node, i) => {
                  const delay = delayFor(i, profileNodes.length);
                  const { Icon } = node;
                  return (
                    <div className="electron-wrapper" key={node.label} style={{ animationDelay: delay }}>
                      <div className="electron-node node-1" style={{ animationDelay: delay }}>
                        <a href={node.href} target="_blank" rel="noreferrer" className="satellite-content">
                          <Icon size={20} color="#14f1d9" />
                          <span className="node-tooltip">{node.label}</span>
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Ring 2: live project deployments */}
              <div className="orbit-ring ring-2">
                {liveNodes.map((node, i) => {
                  const delay = delayFor(i, liveNodes.length);
                  const { Icon } = node;
                  return (
                    <div className="electron-wrapper" key={node.label} style={{ animationDelay: delay }}>
                      <div className="electron-node node-2" style={{ animationDelay: delay }}>
                        <a href={node.href} target="_blank" rel="noreferrer" className="satellite-content">
                          <Icon size={20} color="#14f1d9" />
                          <span className="node-tooltip">{node.label}</span>
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* Decorative Blur Blobs mirroring layout */}
      <div className="blur-blob blob-purple shape-1"></div>
      <div className="blur-blob blob-purple shape-2"></div>

      {/* Bottom Right Floating Chat Action Button */}
      <a href="#contact" className="floating-chat-btn">
        <Bot size={20} />
      </a>
    </section>
  );
}
