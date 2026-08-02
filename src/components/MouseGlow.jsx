import React, { useEffect, useState } from 'react';

const MouseGlow = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setOpacity(1);
    };

    const handleMouseLeave = () => {
      setOpacity(0);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.body.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-500 ease-out"
      style={{ opacity }}
    >
      <div
        className="absolute transform -translate-x-1/2 -translate-y-1/2 rounded-full blur-[100px]"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: '450px',
          height: '450px',
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.12) 0%, rgba(6, 182, 212, 0.08) 40%, transparent 70%)',
        }}
      />
    </div>
  );
};

export default MouseGlow;
