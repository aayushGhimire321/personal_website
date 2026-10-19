import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

export const ScrollProgressBar: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const { isDark } = useTheme();

  // Smooth spring physics for fluid progress interpolation
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div 
      role="progressbar"
      aria-label="Reading progress through portfolio"
      className="fixed top-0 left-0 right-0 z-50 pointer-events-none print:hidden h-[3.5px] overflow-hidden"
    >
      {/* Subtle track background */}
      <div 
        className={`w-full h-full ${
          isDark ? 'bg-neutral-900/30 backdrop-blur-xs' : 'bg-slate-200/40 backdrop-blur-xs'
        }`} 
      />

      {/* Slim, color-coded animated progress bar */}
      <motion.div
        className={`absolute top-0 left-0 bottom-0 right-0 origin-left transition-colors duration-200 ${
          isDark
            ? 'bg-gradient-to-r from-amber-500 via-amber-400 via-sky-400 to-emerald-400 shadow-[0_0_12px_rgba(245,158,11,0.7)]'
            : 'bg-gradient-to-r from-amber-600 via-amber-500 via-blue-600 to-emerald-600 shadow-[0_0_8px_rgba(217,119,6,0.35)]'
        }`}
        style={{ scaleX }}
      />
    </div>
  );
};
