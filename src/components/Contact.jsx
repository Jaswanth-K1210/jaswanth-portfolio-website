import React from 'react';

import { Mail, Github, Linkedin, ExternalLink, Radio } from 'lucide-react';
import './Contact.css';

export default function Contact() {
  return (
    <footer className="section container" id="contact" style={{ marginBottom: '4rem' }}>
      <div className="section-header-terminal">
        <h2><Radio size={20}/> SECURE_COMMS // TRANSMISSION_PORT</h2>
        <div className="section-stats text-primary blink">
           UPLINK: ACTIVE
        </div>
      </div>

      <div 
        className="contact-panel glass-panel"
      >
        <div className="panel-header" style={{ borderColor: 'var(--color-primary-dim)' }}>
          <span className="text-muted">[ NODE_ACCESS: OPEN ]</span>
          <span className="text-primary text-mono">AWAITING_HANDSHAKE</span>
        </div>
        
        <div className="contact-grid">
          <div className="contact-intel">
            <h3 className="text-primary text-mono mb-2" style={{ fontSize: '1.2rem' }}>&gt; INITIATE_DIALOGUE</h3>
            <p className="text-muted" style={{ lineHeight: '1.6', fontSize: '0.95rem' }}>
              Whether you want to discuss Physics-Informed Neural Dynamics, deployable multi-agent environments, or full-stack engineering roles—my communication ports are open and polling.
            </p>
          </div>
          
          <div className="contact-links text-mono text-primary">
            <a href="mailto:jaswanth.koppisetty@example.com" className="contact-btn">
              <Mail size={18} className="mr-3 text-accent" />
              <span>&gt; SMTP // E-MAIL</span>
              <ExternalLink size={14} className="ml-auto text-muted" />
            </a>
            
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="contact-btn">
              <Github size={18} className="mr-3 text-accent" />
              <span>&gt; REPO // GITHUB</span>
              <ExternalLink size={14} className="ml-auto text-muted" />
            </a>
            
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="contact-btn">
              <Linkedin size={18} className="mr-3 text-accent" />
              <span>&gt; NET // LINKEDIN</span>
              <ExternalLink size={14} className="ml-auto text-muted" />
            </a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom text-mono text-muted mt-5">
        <p>SYSTEM_HALTED. &copy; {new Date().getFullYear()} Jaswanth Koppisetty. AI Systems Engineer.</p>
      </div>
    </footer>
  );
}
