import React from 'react';

import './About.css';
import { profile } from '../data';

export default function About() {
  const { education } = profile;

  return (
    <section className="section container" id="about">
      <h2 className="section-glow-title">About Me</h2>

      <div className="about-layout-split">
        <div className="about-text-content text-mono">
          <p>
            My name is {profile.name}. {profile.headline}
          </p>
          <p>{profile.subheadline}</p>
          <p>
            I am currently pursuing a {education.degree} at {education.institution} ({education.batch}),
            graduating {education.graduation}, with a CGPA of {education.cgpa}.
          </p>
          <p>{profile.status}. Based in {profile.location}.</p>
          {profile.languages?.length > 0 && (
            <p>Languages: {profile.languages.join(' · ')}.</p>
          )}
        </div>

        <div className="about-ide-blocks">
          {/* Mock Code Block 1 */}
          <div className="code-block block-1 glass-panel text-mono">
            <span style={{ color: '#c678dd' }}>def</span> <span style={{ color: '#61afef' }}>build_system</span>(self):<br />
            &nbsp;&nbsp;<span style={{ color: '#5c6370' }}># Autonomous AI</span><br />
            &nbsp;&nbsp;self.pipeline.run()
          </div>

          {/* Mock Code Block 2 */}
          <div className="code-block block-2 glass-panel text-mono">
            <span style={{ color: '#c678dd' }}>import</span><br />
            MultiAgentEnv
          </div>

          {/* HTML Decorator */}
          <div className="decor-brackets">
            &lt;/&gt;
          </div>

          {/* Mock Code Block 3 */}
          <div className="code-block block-3 glass-panel text-mono">
            <span style={{ color: '#98c379' }}>// Distributed Infra</span><br />
            <span style={{ color: '#e5c07b' }}>new</span><br />
            <span style={{ color: '#c678dd' }}>ScalableDataPipeline</span>();
          </div>
        </div>
      </div>
    </section>
  );
}
