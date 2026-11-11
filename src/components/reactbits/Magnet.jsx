import React, { useState, useRef } from 'react';

/**
 * ReactBits: Magnet
 * Categoria: Animations / Micro-interactions
 * https://reactbits.dev/animations/magnet
 *
 * Efeito magnético que atrai suavemente o elemento interativo em direção ao cursor do mouse.
 */
export default function Magnet({ children, strength = 0.25, className = '' }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const ref = useRef(null);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const deltaX = (e.clientX - centerX) * strength;
    const deltaY = (e.clientY - centerY) * strength;
    setPosition({ x: deltaX, y: deltaY });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`inline-block transition-transform duration-200 ease-out ${className}`}
      style={{ transform: `translate3d(${position.x}px, ${position.y}px, 0)` }}
    >
      {children}
    </div>
  );
}
