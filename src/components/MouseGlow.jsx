import { useState, useEffect } from 'react';

function MouseGlow() {
  const [position, setPosition] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div style={{
      position: 'fixed',
      top: position.y,
      left: position.x,
      width: '400px',
      height: '400px',
      background: 'radial-gradient(circle, rgba(56, 189, 248, 0.1) 0%, rgba(56, 189, 248, 0) 60%)',
      borderRadius: '50%',
      transform: 'translate(-50%, -50%)',
      pointerEvents: 'none',
      zIndex: -1,
      transition: 'top 0.1s ease-out, left 0.1s ease-out',
    }} />
  );
}
export default MouseGlow;