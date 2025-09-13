import React from 'react';
import { ABOUT_US_TEXT } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center p-4 sm:p-8">
      <div className="max-w-4xl w-full p-8 bg-slate-900/50 backdrop-blur-md border border-cyan-500/20 rounded-lg shadow-2xl shadow-cyan-500/10">
        <h2 className="text-3xl sm:text-4xl font-bold text-cyan-300 mb-6 text-center tracking-wide">
          SOBRE NOSOTROS
        </h2>
        <p className="text-lg text-slate-300 leading-relaxed text-center">
          {ABOUT_US_TEXT}
        </p>
      </div>
    </section>
  );
};

export default About;