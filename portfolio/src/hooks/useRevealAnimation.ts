
import { useEffect, useRef } from 'react';

export const useRevealAnimation = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Create observer instance
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          // Once revealed, stop observing to prevent re-animation
          observerRef.current?.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1, // Trigger when at least 10% of the element is visible
      rootMargin: '0px 0px -50px 0px' // Negative bottom margin to trigger earlier
    });

    // Start observing all elements with reveal-animation class
    const elements = document.querySelectorAll('.reveal-animation');
    elements.forEach(el => observerRef.current?.observe(el));

    return () => {
      if (observerRef.current) {
        elements.forEach(el => observerRef.current?.unobserve(el));
        observerRef.current.disconnect();
      }
    };
  }, []);
};

export default useRevealAnimation;
