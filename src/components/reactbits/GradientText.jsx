import React from 'react';

/**
 * ReactBits: GradientText
 * Categoria: Text Animations
 * https://reactbits.dev/text-animations/gradient-text
 *
 * Degradê multicolorido dinâmico com ciclo contínuo sobre a tipografia.
 */
export default function GradientText({
  children,
  className = '',
  colors = ['#10b981', '#06b6d4', '#a855f7', '#10b981'],
}) {
  return (
    <span
      className={`bg-clip-text text-transparent font-bold transition-all duration-500 ${className}`}
      style={{
        backgroundImage: `linear-gradient(90deg, ${colors.join(', ')})`,
        backgroundSize: '300% 100%',
        animation: 'shine 6s ease infinite',
      }}
    >
      {children}
    </span>
  );
}
