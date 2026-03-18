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
            My name is Jaswanth Koppisetty and I am a rigorous systems engineer and AI researcher. My work sits at the intersection of deep machine learning and physics equations, focusing on building neural network architectures that operate under strict mathematical constraints.
          </p>
          <p>
            I am currently pursuing a Bachelor of Technology in Computer Science and Engineering at Anurag University with a CGPA of 8.7.
          </p>
          <p>
            I specialize in developing Physics-Informed Neural Dynamics Simulators. It's incredibly difficult to get standard neural networks to perfectly balance learning from raw data while simultaneously obeying the laws of physical conservation, which is why my current research involves evaluating adaptive loss weighting algorithms to forge stable, long-term AI surrogate models.
          </p>
          <p>
            Alongside my core research, I have engineered full-scale, distributed production systems involving multi-agent AI orchestrations, asynchronous task queues, and real-time decentralized communication arrays.
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
