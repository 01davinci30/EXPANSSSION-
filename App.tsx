import React, { useState, useEffect, useRef } from 'react';
import { Section } from './types';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<Section>(Section.HERO);

  const sectionRefs = {
    [Section.HERO]: useRef<HTMLDivElement>(null),
    [Section.ABOUT]: useRef<HTMLDivElement>(null),
    [Section.SERVICES]: useRef<HTMLDivElement>(null),
    [Section.CONTACT]: useRef<HTMLDivElement>(null),
  };

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.innerHeight * 0.4;
      const scrollPosition = window.scrollY + offset;

      const currentSection = (Object.keys(sectionRefs) as Section[]).find(key => {
        const ref = sectionRefs[key];
        if (ref.current) {
          const { offsetTop, offsetHeight } = ref.current;
          return scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight;
        }
        return false;
      });

      if (currentSection && currentSection !== activeSection) {
        setActiveSection(currentSection);
      } else if (window.scrollY < window.innerHeight * 0.6) {
        setActiveSection(Section.HERO);
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection, sectionRefs]);

  return (
    <div className="bg-slate-950 text-slate-300 min-h-screen font-sans antialiased relative">
      {/* Background elements */}
      <div 
        className="fixed top-0 left-0 w-full h-full bg-cover bg-center opacity-20"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1605704313092-2314a90a2c1b?q=80&w=1974&auto=format&fit=crop)' }}
      ></div>
      {/* Purple glow */}
      <div className="fixed top-0 left-0 w-full h-full bg-gradient-to-br from-slate-950 via-slate-950 to-purple-950/30 opacity-70" />
      <div className="fixed top-0 right-0 w-1/2 h-1/2 bg-purple-600/30 rounded-full filter blur-3xl opacity-40 animate-pulse" />
      <div className="fixed bottom-0 left-0 w-1/2 h-1/2 bg-cyan-600/20 rounded-full filter blur-3xl opacity-40" />
      
      <div className="relative z-10">
        <Header activeSection={activeSection} />

        <main>
          <div ref={sectionRefs[Section.HERO]}><Hero /></div>
          <div ref={sectionRefs[Section.ABOUT]}><About /></div>
          <div ref={sectionRefs[Section.SERVICES]}><Services /></div>
          <div ref={sectionRefs[Section.CONTACT]}><Contact /></div>
        </main>
      </div>
    </div>
  );
};

export default App;
