import { useEffect, useRef, useState, useCallback } from 'react';

export function useScrollHighlight<T extends HTMLElement>(threshold = 0.3) {
  const ref = useRef<T>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleScroll = () => {
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const elementTop = rect.top;
      const elementHeight = rect.height;
      
      // Calculate how much of the element is visible
      const visibleStart = Math.max(0, windowHeight - elementTop);
      const visibleEnd = windowHeight + elementHeight;
      const visibleRatio = Math.min(1, Math.max(0, visibleStart / visibleEnd));
      
      setProgress(visibleRatio);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { ref, progress };
}

export function useTextReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsRevealed(true);
          observer.unobserve(element);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(element);

    return () => observer.unobserve(element);
  }, []);

  return { ref, isRevealed };
}

// Hook for staggered word animation
export function useStaggeredText(text: string, isVisible: boolean, delayMs = 50) {
  const words = text.split(' ');
  
  return words.map((word, index) => ({
    word,
    style: {
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
      transition: `opacity 0.5s ease ${index * delayMs}ms, transform 0.5s ease ${index * delayMs}ms`,
    },
  }));
}
