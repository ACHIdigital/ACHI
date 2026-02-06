import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { useScrollProgress } from '@/hooks/useScrollReveal';
import { cn } from '@/lib/utils';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Blogs', href: '#blogs' },
  { label: 'Contact', href: '#contact' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrollProgress = useScrollProgress();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Scroll Progress Indicator */}
      <div 
        className="fixed top-0 left-0 h-1 scroll-progress z-[60]"
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      />
      
      {/* Header */}
      <header
        className={cn(
          'fixed top-1 left-1/2 -translate-x-1/2 z-50 transition-all duration-500',
          isScrolled 
            ? 'w-[calc(100%-2rem)] max-w-5xl glass-panel rounded-2xl py-3 px-6 mt-2' 
            : 'w-full max-w-7xl py-6 px-6'
        )}
        role="banner"
      >
        <nav className="flex items-center justify-between" aria-label="Main navigation">
          {/* Logo */}
          <a 
            href="#home" 
            className="flex items-center gap-2 group"
            aria-label="AchiDigital - Home"
            onClick={(e) => { e.preventDefault(); handleNavClick('#home'); }}
          >
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center neon-glow transition-transform group-hover:scale-110">
              <span className="text-primary-foreground font-bold text-lg">A</span>
            </div>
            <span className="font-display font-bold text-xl text-foreground">
              Achi<span className="gradient-text">Digital</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1" role="menubar">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(item.href); }}
                className="animated-underline px-4 py-2 text-muted-foreground hover:text-foreground transition-colors font-medium"
                role="menuitem"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button 
              variant="hero" 
              size="default"
              onClick={() => handleNavClick('#contact')}
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        <div
          className={cn(
            'md:hidden overflow-hidden transition-all duration-300',
            isMenuOpen ? 'max-h-96 mt-4' : 'max-h-0'
          )}
          role="menu"
          aria-hidden={!isMenuOpen}
        >
          <div className="flex flex-col gap-2 pb-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(item.href); }}
                className="px-4 py-3 text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-colors font-medium"
                role="menuitem"
              >
                {item.label}
              </a>
            ))}
            <Button 
              variant="hero" 
              size="lg" 
              className="mt-2"
              onClick={() => handleNavClick('#contact')}
            >
              Get Started
            </Button>
          </div>
        </div>
      </header>
    </>
  );
}
