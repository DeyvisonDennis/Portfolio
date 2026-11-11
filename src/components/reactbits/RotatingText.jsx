import React, { useState, useEffect } from 'react';

/**
 * ReactBits: RotatingText
 * Categoria: Text Animations
 * https://reactbits.dev/text-animations/rotating-text
 *
 * Alternância cíclica de palavras ou frases com transições suaves de escala e opacidade.
 */
export default function RotatingText({
  texts = [],
  interval = 2500,
  className = '',
}) {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    if (!texts.length) return;
    const timer = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % texts.length);
        setFade(true);
      }, 300);
    }, interval);

    return () => clearInterval(timer);
  }, [texts, interval]);

  if (!texts.length) return null;

  return (
    <span
      className={`inline-block transition-all duration-300 transform ${
        fade
          ? 'opacity-100 translate-y-0 scale-100'
          : 'opacity-0 translate-y-2 scale-95'
      } ${className}`}
    >
      {texts[index]}
    </span>
  );
}
