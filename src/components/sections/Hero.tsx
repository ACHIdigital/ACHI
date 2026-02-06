import { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { useMagneticButton } from '@/hooks/useMagneticButton';
import { useMousePosition } from '@/hooks/useMousePosition';
import { ArrowRight, Play } from 'lucide-react';

export function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const mousePosition = useMousePosition(containerRef);
  const primaryBtnProps = useMagneticButton<HTMLButtonElement>(0.2);
  const secondaryBtnProps = useMagneticButton<HTMLButtonElement>(0.2);

  const handleScroll = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      aria-labelledby="hero-heading"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        {/* Gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl floating-shape" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/20 rounded-full blur-3xl floating-shape" style={{ animationDelay: '-3s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neon-purple/5 rounded-full blur-3xl" />
        
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                             linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      {/* Mouse-tracked spotlight */}
      <div
        className="absolute inset-0 hero-spotlight pointer-events-none -z-5"
        style={{
          '--mouse-x': `${mousePosition.x}%`,
          '--mouse-y': `${mousePosition.y}%`,
        } as React.CSSProperties}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="container mx-auto px-6 py-20 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 glass-panel px-4 py-2 rounded-full mb-8 badge-pulse">
          <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
          <span className="text-sm font-medium text-muted-foreground">
            Pioneering Digital Excellence
          </span>
        </div>

        {/* Main Headline */}
        <h1 
          id="hero-heading"
          className="text-display-lg md:text-display-xl font-display mb-6 max-w-5xl mx-auto text-balance"
        >
          We Build{' '}
          <span className="gradient-text">Digital Experiences</span>
          {' '}That Drive Growth
        </h1>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto text-balance">
          Transform your vision into reality with cutting-edge web solutions, 
          AI-powered innovation, and strategic digital marketing.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            {...primaryBtnProps}
            variant="hero"
            size="xl"
            className="magnetic-btn micro-bounce group"
            onClick={() => handleScroll('#contact')}
          >
            Start Your Project
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Button>
          
          <Button
            {...secondaryBtnProps}
            variant="heroSecondary"
            size="xl"
            className="magnetic-btn group"
            onClick={() => handleScroll('#about')}
          >
            <Play className="w-5 h-5" />
            Watch Our Story
          </Button>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 pt-16 border-t border-border/50">
          <p className="text-sm text-muted-foreground mb-6">Trusted by innovative companies worldwide</p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 opacity-60">
            {['TechCorp', 'InnovateLab', 'FutureScale', 'DataFlow', 'CloudNex'].map((company) => (
              <div key={company} className="text-lg font-semibold text-muted-foreground">
                {company}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-xs text-muted-foreground">Scroll to explore</span>
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center">
          <div className="w-1 h-2 bg-muted-foreground/50 rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
