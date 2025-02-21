import { useEffect } from 'react';

const useScrollAnimation = () => {
  useEffect(() => {
    const animatedElements = document.querySelectorAll('.animated');
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          } else {
            entry.target.classList.remove('in-view');
          }
        });
      },
      { threshold: 0.3 }
    );
    animatedElements.forEach(section => observer.observe(section));
    return () =>
      animatedElements.forEach(section => observer.unobserve(section));
  }, []);
};

export default useScrollAnimation;
