import { useState, useEffect, useCallback, RefObject } from 'react';

interface MousePosition {
  x: number;
  y: number;
}

export function useMousePosition(containerRef?: RefObject<HTMLElement>) {
  const [position, setPosition] = useState<MousePosition>({ x: 50, y: 50 });

  const handleMouseMove = useCallback((e: MouseEvent) => {
    const container = containerRef?.current;
    
    if (container) {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      setPosition({ x, y });
    } else {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      setPosition({ x, y });
    }
  }, [containerRef]);

  useEffect(() => {
    const target = containerRef?.current || window;
    target.addEventListener('mousemove', handleMouseMove as EventListener);
    
    return () => {
      target.removeEventListener('mousemove', handleMouseMove as EventListener);
    };
  }, [handleMouseMove, containerRef]);

  return position;
}
