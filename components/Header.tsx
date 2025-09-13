import React from 'react';
import { Section } from '../types';
import { LogoIcon } from './icons/LogoIcon';

interface HeaderProps {
  activeSection: Section;
}

const NavItem: React.FC<{
  section: Section;
  activeSection: Section;
  children: React.ReactNode;
}> = ({ section, activeSection, children }) => {
  const isActive = section === activeSection;
  return (
    <a
      href={`#${section}`}
      className={`px-4 py-2 text-sm font-medium transition-all duration-300 relative ${
        isActive ? 'text-cyan-300' : 'text-slate-400 hover:text-cyan-300'
      }`}
    >
      {children}
      <span
        className={`absolute bottom-0 left-0 w-full h-0.5 bg-cyan-400 transform transition-transform duration-300 ${
          isActive ? 'scale-x-100' : 'scale-x-0'
        }`}
      ></span>
    </a>
  );
};


const Header: React.FC<HeaderProps> = ({ activeSection }) => {
    const navItems = [
        { section: Section.ABOUT, label: 'SOBRE NOSOTROS' },
        { section: Section.SERVICES, label: 'SERVICIOS' },
        { section: Section.CONTACT, label: 'CONTACTO' },
    ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 p-4 sm:p-6 bg-slate-950/60 backdrop-blur-lg border-b border-slate-700/50">
      <div className="container mx-auto flex justify-between items-center">
        <a href="#hero" className="group" aria-label="Go to top">
          <LogoIcon className="h-16 w-16 transition-transform duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_15px_rgba(0,255,255,0.7)]"/>
        </a>
        <nav className="hidden sm:flex items-center bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-full px-2">
           {navItems.map(item => (
                <NavItem
                    key={item.section}
                    section={item.section}
                    activeSection={activeSection}
                >
                    {item.label}
                </NavItem>
           ))}
        </nav>
        {/* Mobile Nav could be added here */}
      </div>
    </header>
  );
};

export default Header;