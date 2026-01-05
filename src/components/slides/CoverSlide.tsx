import React from 'react';
import { Slide } from '../Slide';
import { motion } from 'framer-motion';
import logo from '../../assets/logo.png';

export const CoverSlide: React.FC = () => {
  return (
    <Slide>
         <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
           <img src={logo} alt="Arda Logo" style={{ width: '400px', marginBottom: 'var(--spacing-md)', mixBlendMode: 'multiply' }} />
         <p className="text-body" style={{ fontSize: 'var(--font-size-2xl)', color: 'var(--color-text-secondary)', width: '100%' }}>
           real-time commerce orchestration for industrial supply chains
         </p>
       </motion.div>
    </Slide>
  );
};
