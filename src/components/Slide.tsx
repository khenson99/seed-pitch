import React from 'react';
import { motion } from 'framer-motion';

type SlideProps = {
  children: React.ReactNode;
  title?: string;
  className?: string; // Allow custom classes like 'flex-col' vs 'grid'
};

const slideVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.6, 
      ease: [0.16, 1, 0.3, 1], // Custom bezier for "premium" feel
      staggerChildren: 0.1
    }
  },
  exit: { opacity: 0, y: -20, transition: { duration: 0.4 } }
};

export const Slide: React.FC<SlideProps> = ({ children, title, className = '' }) => {
  return (
    <motion.div
      className={`slide-container ${className}`}
      style={{
        width: '100%',
        height: '100%',
        padding: 'var(--spacing-3xl)',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        left: 0,
        overflow: 'hidden',
        backgroundColor: 'var(--color-bg-primary)'
      }}
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={slideVariants}
    >
      <div style={{ maxWidth: 'var(--content-max-width)', width: '100%', margin: '0 auto', height: '100%', display: 'flex', flexDirection: 'column' }}>
        {title && (
          <h2 style={{ 
            fontSize: '32px', 
            marginBottom: '2rem', 
            fontWeight: 700,
            color: 'var(--color-text-primary)'
          }}>
            {title}
          </h2>
        )}
        {children}
      </div>
    </motion.div>
  );
};
