import React from 'react';

import './Research.css';

const focusAreas = [
  'Physics-Informed Neural Networks (PINNs)',
  'Energy Conservation Constraints',
  'Adaptive Loss Weighting Algorithms',
  'Hamiltonian Mechanics in AI',
  'Molecular Dynamics Simulation',
  'Argon Atom Forecasting'
];

export default function Research() {
  return (
    <section className="section container" id="research">
      <h2 className="section-glow-title">Research</h2>

      <div 
        className="research-box glass-panel"
      >
        <div className="research-grid">
          <div className="focus-col">
            <h3 className="text-primary text-mono focus-header">Focus Areas</h3>
            <div className="focus-list">
              {focusAreas.map((area, idx) => (
                <div key={idx} className="focus-pill text-mono">
                  {area}
                </div>
              ))}
            </div>
          </div>
          
          <div className="desc-col text-mono text-muted">
            <p className="mb-4">
              <span className="text-bright font-bold">The Baseline System:</span> I am highly invested in building a Physics-Informed Neural Dynamics Simulator. This acts as an AI surrogate model trained to accurately predict how a complex system of interacting particles (specifically Argon atoms) moves and evolves over time based on their positions and momentum.
            </p>
            <p className="mb-4">
              <span className="text-bright font-bold">The Physics Constraint:</span> Because standard neural networks eventually violate the laws of physics and create "artificial energy", I engineer strict mathematical energy penalties into the AI's training architecture. By mathematically penalizing the network if it breaks the Hamiltonian law of energy conservation, the system generates highly stable, physically-accurate, long-term state simulations.
            </p>
            <p>
              <span className="text-bright font-bold">Adaptive Loss Research:</span> Getting a neural network to perfectly balance learning from raw data and learning from hard physics equations is exceptionally difficult because their mathematical gradients often clash. To solve this, my research involves programming and benchmarking state-of-the-art adaptive loss weighting algorithms—specifically <span className="text-accent">ReLoBRaLo</span>, <span className="text-accent">GradNorm</span>, and <span className="text-accent">AL-PINNs</span>—to discover the most efficient way to train these energy-conserving models.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
