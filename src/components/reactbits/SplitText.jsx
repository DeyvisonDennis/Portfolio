import React, { useState, useEffect } from 'react';

/**
 * ReactBits: SplitText
 * Categoria: Text Animations
 * https://reactbits.dev/text-animations/split-text
 *
 * Divide o texto em caracteres individuais com animação staggered na entrada.
 */
export default function SplitText({ text = '', className = '', delay = 40 }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <span className={`inline-block overflow-hidden ${className}`}>
      {text.split('').map((char, index) => (
        <span
          key={index}
          className="inline-block transition-all duration-700 ease-out"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? 'translateY(0) rotate(0deg)' : 'translateY(100%) rotate(5deg)',
            transitionDelay: `${index * delay}ms`,
            display: char === ' ' ? 'inline' : 'inline-block',
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </span>
  );
}
