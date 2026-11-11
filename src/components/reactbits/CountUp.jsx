import React, { useState, useEffect, useRef } from 'react';

/**
 * ReactBits: CountUp
 * Categoria: Text Animations
 * https://reactbits.dev/text-animations/count-up
 *
 * Contador numérico interpolado ativado via IntersectionObserver na rolagem da página.
 */
export default function CountUp({
  end = 100,
  duration = 2,
  prefix = '',
  suffix = '',
  className = '',
}) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let startTime = null;

          const step = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
            const currentVal = Math.floor(progress * end);
            setCount(currentVal);

            if (progress < 1) {
              requestAnimationFrame(step);
            } else {
              setCount(end);
            }
          };

          requestAnimationFrame(step);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration, hasAnimated]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {count}
      {suffix}
    </span>
  );
}
