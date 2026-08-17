import React, { useRef } from 'react';

import './MagicCard.css';

/**
 * A card that tracks the pointer relative to itself and renders a radial
 * glow at that position, using the same CSS-variable technique as the hero
 * spotlight. Pointer tracking is skipped entirely for reduced-motion users.
 */
export default function MagicCard({ children, className = '', disabled = false }) {
  const ref = useRef(null);

  const onPointerMove = (e) => {
    if (disabled) return;
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty('--mx', `${e.clientX - rect.left}px`);
    el.style.setProperty('--my', `${e.clientY - rect.top}px`);
  };

  return (
    <div
      ref={ref}
      className={`magic-card ${className}`.trim()}
      onPointerMove={onPointerMove}
    >
      <span className="magic-card__glow" aria-hidden="true" />
      <div className="magic-card__body">{children}</div>
    </div>
  );
}
