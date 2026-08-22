import React from 'react';

import './SiteNav.css';
import { profile } from '../data';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#research', label: 'Research' },
  { href: '#skills', label: 'Skills' },
];

/* Lives at the top of the tree, not inside Hero. A fixed bar nested in a
   section is trapped in that section's stacking context, so every later
   section paints straight over it. */
export default function SiteNav() {
  return (
    <nav className="top-nav container">
      <a className="nav-logo" href="#home">{profile.name}</a>
      <div className="nav-links text-mono text-muted">
        {navLinks.map((l) => <a href={l.href} key={l.href}>{l.label}</a>)}
      </div>
      <a href="#contact" className="btn-contact btn-purple">Contact Me</a>
    </nav>
  );
}
