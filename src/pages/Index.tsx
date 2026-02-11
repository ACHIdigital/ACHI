import { useEffect, useRef } from 'react';
import { Header } from '@/components/layout/Header';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Services } from '@/components/sections/Services';
import { ProcessTimeline } from '@/components/sections/ProcessTimeline';
import { FAQ } from '@/components/sections/FAQ';
import { Contact } from '@/components/sections/Contact';
import { Footer } from '@/components/layout/Footer';
import { useMousePosition } from '@/hooks/useMousePosition';

export default function Index() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mousePosition = useMousePosition(containerRef);

  // Set light mode by default (remove dark class if present)
  useEffect(() => {
    document.documentElement.classList.remove('dark');
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen bg-background text-foreground relative">
      {/* Global mouse-tracked spotlight */}
      <div
        className="fixed inset-0 hero-spotlight pointer-events-none z-[1]"
        style={{
          '--mouse-x': `${mousePosition.x}%`,
          '--mouse-y': `${mousePosition.y}%`
        } as React.CSSProperties}
        aria-hidden="true"
      />
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <ProcessTimeline />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
