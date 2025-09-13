
import React from 'react';

const RotatingCube: React.FC = () => {
  return (
    <div className="cube-container w-24 h-24">
      <div className="cube">
        <div className="cube-face front"></div>
        <div className="cube-face back"></div>
        <div className="cube-face right"></div>
        <div className="cube-face left"></div>
        <div className="cube-face top"></div>
        <div className="cube-face bottom"></div>
      </div>
    </div>
  );
};

export default RotatingCube;
