import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const CustomCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [cursorText, setCursorText] = useState('');
  const [isHovered, setIsHovered] = useState(false);
  const [isMouseDown, setIsMouseDown] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });

      // Check if mouse is hovering an element with data-cursor attribute
      const target = e.target as HTMLElement | null;
      const cursorTarget = target?.closest('[data-cursor]') as HTMLElement | null;
      
      if (cursorTarget) {
        const text = cursorTarget.getAttribute('data-cursor') || '';
        setCursorText(text);
        setIsHovered(true);
      } else {
        setCursorText('');
        setIsHovered(false);
      }
    };

    const handleMouseDown = () => setIsMouseDown(true);
    const handleMouseUp = () => setIsMouseDown(false);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <>
      {/* Outer Cursor Ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full flex items-center justify-center border border-indigo-400/50 bg-indigo-500/10 backdrop-blur-[2px] transition-colors duration-200 hidden md:flex"
        animate={{
          x: mousePosition.x - (cursorText ? 40 : 16),
          y: mousePosition.y - (cursorText ? 40 : 16),
          width: cursorText ? 80 : 32,
          height: cursorText ? 80 : 32,
          scale: isMouseDown ? 0.85 : 1,
        }}
        transition={{
          type: 'spring',
          damping: 30,
          stiffness: 350,
          mass: 0.25,
        }}
      >
        {cursorText && (
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-[11px] font-bold text-white tracking-wider text-center px-1 font-sans"
          >
            {cursorText}
          </motion.span>
        )}
      </motion.div>

      {/* Inner Glowing Cursor Dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_10px_#06b6d4] hidden md:block"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          opacity: isHovered ? 0 : 1,
        }}
        transition={{
          type: 'spring',
          damping: 40,
          stiffness: 500,
          mass: 0.1,
        }}
      />
    </>
  );
};
