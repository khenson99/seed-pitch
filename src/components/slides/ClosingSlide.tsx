import React from 'react';
import { Slide } from '../Slide';
import { motion } from 'framer-motion';
import logo from '../../assets/logo.png';

export const ClosingSlide: React.FC = () => {
  return (
    <Slide>
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'linear-gradient(135deg, #F97316 0%, #EA580C 100%)',
        
      }}>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 0, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center' }}
        >
          {/* Logo - White version using brightness filter */}
          <img 
            src={"https://cdn.prod.website-files.com/67b7700312bb763ca2083376/67d8f47e39f1d93eb2a4613a_67c15beb342cca336fd62ea1_arda_logo_large_background%20(1)%201.svg"} 
            alt="Arda Logo"
            style={{ 
              width: '400px', 
              marginBottom: 'var(--spacing-lg)', 

              mixBlendMode: 'screen' 
            }} 
          />
          
          {/* Dotted Line Separator */}
          <div style={{
            width: '600px',
            height: '2px', // Height for the border
            borderTop: '2px dotted rgba(255, 255, 255, 0.6)',
            margin: '0 auto var(--spacing-lg) auto'
          }} />
          
          {/* Tagline */}
          <h2 style={{
            fontFamily: 'serif', // Using serif to match the screenshot ("MAKE THE PHYSICAL WORLD EFFICIENT")
            fontSize: '32px',
            fontWeight: 400,
            letterSpacing: '1px',
            textTransform: 'uppercase',
            opacity: 0.95
          }}>
            Make the physical world efficient
          </h2>
        </motion.div>
      </div>
    </Slide>
  );
};
