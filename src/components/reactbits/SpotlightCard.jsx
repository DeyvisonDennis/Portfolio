import React, { useState, useRef } from 'react';

/**
 * ReactBits: SpotlightCard
 * Categoria: Components
 * https://reactbits.dev/components/spotlight-card
 *
 * Card com foco de luz radial interativo que segue a posição do cursor (X, Y).
 */
export default function SpotlightCard({
  children,
  className = '',
  spotlightColor = 'rgba(16, 185, 129, 0.15)',
}) {
  const cardRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0c1210]/80 backdrop-blur-md transition-all duration-300 hover:border-emerald-500/30 hover:shadow-2xl hover:shadow-emerald-950/30 ${className}`}
    >
      {/* Luz do Spotlight seguindo o cursor */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, ${spotlightColor}, transparent 60%)`,
        }}
      />
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
}
