import { useEffect } from 'react';

const useRevealObserver = () => {
  useEffect(() => {
    const isMobile = window.matchMedia("(max-width: 600px)").matches;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const target = entry.target;
        const siblings = Array.from(document.querySelectorAll('.reveal'));
        const index = siblings.indexOf(target);

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

    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach((reveal) => observer.observe(reveal));

    return () => {
      reveals.forEach((reveal) => observer.unobserve(reveal));
    };
  }, []);
};

export default useRevealObserver;


    