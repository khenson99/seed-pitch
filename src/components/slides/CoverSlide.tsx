import React from 'react';
import { Slide } from '../Slide';
import { motion } from 'framer-motion';
import logo from '../../assets/logo.png';

export const CoverSlide: React.FC = () => {
  return (
    <Slide>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        style={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        <img
          src={logo}
          alt="Arda Logo"
          style={{
            width: '400px',
            marginBottom: 'var(--spacing-md)',
            mixBlendMode: 'multiply',
          }}
        />

        <p
          className="text-body"
          style={{
            fontSize: 'var(--font-size-2xl)',
            color: 'var(--color-text-secondary)',
            width: '100%',
          }}
        >
          Real-Time Commerce Orchestration
          <br />
          for Industrial Supply Chains
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.8 }}
        style={{
          position: 'absolute',
          bottom: 'var(--spacing-lg)',
          width: '100%',
          textAlign: 'center',
        }}
      >
        <p
          className="text-body"
          style={{
            fontSize: 'var(--font-size-2xl)',
            color: 'var(--color-text-secondary)',
          }}
        >
          (Click once, then use arrow keys to advance)
        </p>
      </motion.div>
    </Slide>
  );
};