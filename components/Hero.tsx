import React from 'react';
import RotatingCube from './RotatingCube';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="min-h-screen flex flex-col items-center justify-center text-center relative p-4 sm:p-8">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10">
        <RotatingCube />
      </div>
      <h1 className="text-6xl sm:text-8xl md:text-9xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-fuchsia-500 animate-pulse">
        EXPANSSSION
      </h1>
      <p className="mt-4 max-w-2xl text-slate-400 text-lg">
        Soluciones creativas que fusionan arte, tecnología y expresión personal.
      </p>
      <a 
        href="#services"
        className="mt-8 px-8 py-3 bg-cyan-500/10 border border-cyan-400 text-cyan-300 rounded-full hover:bg-cyan-500/20 hover:shadow-[0_0_20px_rgba(0,255,255,0.4)] transition-all duration-300"
      >
        Explorar Servicios
      </a>
    </section>
  );
};

export default Hero;