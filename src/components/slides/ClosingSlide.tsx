import React from 'react';
import { Slide } from '../Slide';
import { motion } from 'framer-motion';
import logo from '../../assets/arda-logo-white.png';

export const ClosingSlide: React.FC = () => {
  return (
    <Slide>
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(135deg, #F97316 0%, #EA580C 100%)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center' }}
        >
          {/* Logo */}
          <img
            src={logo}
            alt="Arda Logo"
            style={{
              width: '400px',
              marginBottom: 'var(--spacing-lg)',
              filter: 'brightness(0) invert(1)', // forces white logo
              opacity: 0.95,
            }}
          />

          {/* Dotted divider */}
          <div
            style={{
              width: '600px',
              borderTop: '2px dotted rgba(255, 255, 255, 0.6)',
              margin: '0 auto var(--spacing-lg)',
            }}
          />

          {/* Tagline */}
          <h2
            style={{
              fontFamily: 'serif',
              fontSize: '32px',
              fontWeight: 400,
              letterSpacing: '1px',
              textTransform: 'uppercase',
              opacity: 0.95,
            }}
          >
            Make the physical world efficient
          </h2>
        </motion.div>
      </div>
    </Slide>
  );
};
