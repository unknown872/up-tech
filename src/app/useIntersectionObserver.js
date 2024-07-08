"use client"
import { useEffect } from 'react';

const useIntersectionObserver = (setAnimationClass) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(setAnimationClass);
          } else {
            entry.target.classList.remove(setAnimationClass);
          }
        });
      },
      {
        threshold: 0.1, // Ajustez ce seuil selon vos besoins
      }
    );

    const elements = document.querySelectorAll('.animate-section');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, [setAnimationClass]);
};

export default useIntersectionObserver;
