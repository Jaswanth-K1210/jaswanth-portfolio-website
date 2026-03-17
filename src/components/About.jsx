import React from 'react';

import './About.css';

export default function About() {
  return (
    <section className="section container" id="about">
      <h2 className="section-glow-title">About Me</h2>

      <div className="about-layout-split">
        <div 
          className="about-text-content text-mono"
        >
          <p>
            My name is Jaswanth Koppisetty and I am a computer science engineer focused on building intelligent software systems that combine machine learning, distributed infrastructure, and real-time analytics.
          </p>
          <p>
            I am currently pursuing a Bachelor of Technology in Computer Science and Engineering at Anurag University with a CGPA of 8.7.
          </p>
          <p>
            My work focuses on transforming machine learning research ideas into deployable engineering systems. I enjoy designing architectures that integrate artificial intelligence, distributed services, and large-scale data processing.
          </p>
          <p>
            I have experience building systems involving multi-agent AI architectures, NLP pipelines, decentralized real-time communication systems, and automated machine learning platforms.
          </p>
          <p>
            During my machine learning research internship with the Swecha initiative at IIIT Hyderabad, I worked on low-resource NLP research for Telugu language systems. My work involved building data preparation pipelines, cleaning over 100K data points, and mapping 50+ hours of audio to textual pairs for ASR model training using deep learning frameworks.
          </p>
        </div>

        <div 
          className="about-ide-blocks"
        >
          {/* Mock Code Block 1 */}
          <div className="code-block block-1 glass-panel text-mono">
            <span style={{color: '#c678dd'}}>def</span> <span style={{color: '#61afef'}}>build_system</span>(self):<br/>
            &nbsp;&nbsp;<span style={{color: '#5c6370'}}># Autonomous AI</span><br/>
            &nbsp;&nbsp;self.pipeline.run()
          </div>
          
          {/* Mock Code Block 2 */}
          <div className="code-block block-2 glass-panel text-mono">
            <span style={{color: '#c678dd'}}>import</span><br/>
            MultiAgentEnv
          </div>

          {/* HTML Decorator */}
          <div className="decor-brackets">
            &lt;/&gt;
          </div>

          {/* Mock Code Block 3 */}
          <div className="code-block block-3 glass-panel text-mono">
            <span style={{color: '#98c379'}}>// Distributed Infra</span><br/>
            <span style={{color: '#e5c07b'}}>new</span><br/>
            <span style={{color: '#c678dd'}}>ScalableDataPipeline</span>();
          </div>
        </div>
      </div>
    </section>
  );
}
