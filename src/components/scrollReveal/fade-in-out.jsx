import React, { useEffect, useRef } from 'react';

const Reveal = ({ children, className = '' }) => {
  const ref = useRef(null);

  useEffect(() => {
    const isMobile = window.matchMedia("(max-width: 600px)").matches;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        const target = entry.target;

        if (entry.isIntersecting) {
          target.style.transitionDelay = `${index * 100}ms`;
          target.classList.add('active');
          target.classList.remove('inactive');
        } else {
          target.style.transitionDelay = '0ms';
          target.classList.remove('active');
          target.classList.add('inactive');
        }
      });
    }, {
      threshold: isMobile ? 0.1 : 0.2,
      rootMargin: isMobile ? "0px 0px -15% 0px" : "0px 0px -10% 0px",
    });

    const element = ref.current;
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <div ref={ref} className={`reveal inactive ${className}`}>
      {children}
    </div>
  );
};

export default Reveal;
