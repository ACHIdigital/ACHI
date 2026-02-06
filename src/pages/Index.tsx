import { useEffect } from 'react';
import { Header } from '@/components/layout/Header';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Services } from '@/components/sections/Services';
import { Blogs } from '@/components/sections/Blogs';
import { FAQ } from '@/components/sections/FAQ';
import { Contact } from '@/components/sections/Contact';
import { Footer } from '@/components/layout/Footer';

export default function Index() {
  // Set dark mode by default
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Blogs />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
