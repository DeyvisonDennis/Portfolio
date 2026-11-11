import React, { useState, useEffect, useRef } from 'react';

/**
 * ReactBits: BlurText
 * Categoria: Text Animations
 * https://reactbits.dev/text-animations/blur-text
 *
 * Anima as palavras transicionando de blur(10px) para foco nítido ao entrar na tela.
 */
export default function BlurText({
  text = '',
  className = '',
  delay = 60,
  as: Component = 'p',
}) {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const words = text.split(' ');

  return (
    <Component ref={ref} className={`inline-flex flex-wrap gap-x-1.5 ${className}`}>
      {words.map((word, idx) => (
        <span
          key={idx}
          className="inline-block transition-all duration-700"
          style={{
            filter: visible ? 'blur(0px)' : 'blur(10px)',
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(12px)',
            transitionDelay: `${idx * delay}ms`,
          }}
        >
          {word}
        </span>
      ))}
    </Component>
  );
}
