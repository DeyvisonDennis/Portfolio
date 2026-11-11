import React from 'react';

/**
 * ReactBits: ShinyText
 * Categoria: Text Animations
 * https://reactbits.dev/text-animations/shiny-text
 *
 * Efeito de reflexo de luz metálico contínuo percorrendo o texto.
 */
export default function ShinyText({ text = '', speed = 3, className = '' }) {
  return (
    <span
      className={`inline-block font-medium bg-clip-text text-transparent ${className}`}
      style={{
        backgroundImage:
          'linear-gradient(120deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 1) 50%, rgba(255, 255, 255, 0.4) 100%)',
        backgroundSize: '200% 100%',
        animation: `shine ${speed}s linear infinite`,
      }}
    >
      {text}
    </span>
  );
}
