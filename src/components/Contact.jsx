import React from 'react';

import { Mail, Github, Linkedin, ExternalLink, Radio } from 'lucide-react';
import './Contact.css';
import { profile, links } from '../data';

const email = profile.email || links.email;

/* Only links that actually exist in data.js are rendered. */
const contactLinks = [
  email && { label: '> SMTP // E-MAIL', href: `mailto:${email}`, Icon: Mail, external: false },
  links.github && { label: '> REPO // GITHUB', href: links.github, Icon: Github, external: true },
  links.linkedin && { label: '> NET // LINKEDIN', href: links.linkedin, Icon: Linkedin, external: true },
].filter(Boolean);

export default function Contact() {
  return (
    <footer className="section container" id="contact" style={{ marginBottom: '4rem' }}>
      <div className="section-header-terminal">
        <h2><Radio size={20} /> SECURE_COMMS // TRANSMISSION_PORT</h2>
        <div className="section-stats text-primary blink">
          UPLINK: ACTIVE
        </div>
      </div>

      <div className="contact-panel glass-panel">
        <div className="panel-header" style={{ borderColor: 'var(--color-primary-dim)' }}>
          <span className="text-muted">[ NODE_ACCESS: OPEN ]</span>
          <span className="text-primary text-mono">AWAITING_HANDSHAKE</span>
        </div>

        <div className="contact-grid">
          <div className="contact-intel">
            <h3 className="text-primary text-mono mb-2" style={{ fontSize: '1.2rem' }}>&gt; INITIATE_DIALOGUE</h3>
            <p className="text-muted" style={{ lineHeight: '1.6', fontSize: '0.95rem' }}>
              {profile.status}. Based in {profile.location}.
            </p>
          </div>

          <div className="contact-links text-mono text-primary">
            {contactLinks.map((link) => {
              const { Icon } = link;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="contact-btn"
                >
                  <Icon size={18} className="mr-3 text-accent" />
                  <span>{link.label}</span>
                  <ExternalLink size={14} className="ml-auto text-muted" />
                </a>
              );
            })}
          </div>
        </div>
      </div>

      <div className="footer-bottom text-mono text-muted mt-5">
        <p>SYSTEM_HALTED. &copy; {new Date().getFullYear()} {profile.name}.</p>
      </div>
    </footer>
  );
}
