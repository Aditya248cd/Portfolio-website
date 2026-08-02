import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(currentProgress);
      }
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-40 p-3 rounded-full glass-card hover:border-primary-500 text-light-text hover:text-primary-500 transition-all duration-300 group shadow-lg shadow-primary-500/10 focus:outline-none"
          aria-label="Back to top"
        >
          {/* Circular SVG Progress Ring */}
          <svg className="w-10 h-10 absolute inset-0 -rotate-90 pointer-events-none p-1">
            <circle
              cx="16"
              cy="16"
              r="14"
              className="stroke-slate-700/40 fill-none"
              strokeWidth="2"
            />
            <circle
              cx="16"
              cy="16"
              r="14"
              className="stroke-accent fill-none transition-all duration-150"
              strokeWidth="2.5"
              strokeDasharray="88"
              strokeDashoffset={88 - (88 * scrollProgress) / 100}
              strokeLinecap="round"
            />
          </svg>
          <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform duration-300 relative z-10" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
