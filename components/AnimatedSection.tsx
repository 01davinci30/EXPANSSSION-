
import React from 'react';

interface AnimatedSectionProps {
  isActive: boolean;
  children: React.ReactNode;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ isActive, children }) => {
  return (
    <div
      className={`absolute inset-0 transition-all duration-700 ease-in-out flex items-center justify-center ${
        isActive ? 'scale-100 opacity-100 z-10' : 'scale-95 opacity-0 pointer-events-none -z-10'
      }`}
    >
      <div className="w-full h-full p-4 overflow-y-auto">
        {children}
      </div>
    </div>
  );
};

export default AnimatedSection;
