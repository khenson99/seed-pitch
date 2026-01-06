import React from 'react';
import { Slide } from '../Slide';
import { motion } from 'framer-motion';

export const TamSlide: React.FC = () => {
  return (
    <Slide>
      <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
        <div style={{ marginBottom: 'var(--spacing-xl)' }}>
          <span className="text-micro">THE OPPORTUNITY</span>
          <h2 className="text-title" style={{ marginTop: 'var(--spacing-sm)', width: '100%' }}>
             Arda is tackling a <span className="text-accent">$90B+ market.</span>
          </h2>
          <p className="text-body" style={{ 
            fontSize: 'var(--font-size-xl)', 
            color: 'var(--color-text-secondary)', 
            marginTop: 'var(--spacing-md)',
            width: '100%',
            maxWidth: '100%'
          }}>
            Three core ICPs working off the same platform. Only the sales process changes.
          </p>
        </div>

        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', position: 'relative' }}>
          
          {/* Triangle Chart */}
          <div style={{ position: 'relative', width: '100%', maxWidth: '800px', height: '350px', marginTop: 'var(--spacing-xl)' }}>
            <svg width="100%" height="100%" viewBox="0 0 900 350" overflow="visible">
              <defs>
                 <linearGradient id="triangleGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#F97316" />
                    <stop offset="100%" stopColor="#EA580C" />
                 </linearGradient>
              </defs>

              {/* SMB Section (Left) - Lightest */}
              <motion.path 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                d="M0,350 L270,350 L270,245 Z" 
                fill="#FFEDD5" // orange-100
                stroke="white" 
                strokeWidth="2" 
              />
              <motion.text 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                x="90" y="320" 
                fill="#EA580C" 
                fontSize="32" 
                fontWeight="bold"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                $3.3B
              </motion.text>
              
              {/* MM & Enterprise Section (Middle) - Medium */}
              <motion.path 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                d="M270,350 L540,350 L540,140 L270,245 Z" 
                fill="#FB923C" // orange-400
                stroke="white" 
                strokeWidth="2" 
              />
              <motion.text 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                x="380" y="320" 
                fill="#fff" 
                fontSize="32" 
                fontWeight="bold"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                $35B
              </motion.text>

              {/* Distributors Section (Right) - Darkest/Accent */}
              <motion.path 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                d="M540,350 L900,350 L900,0 L540,140 Z" 
                fill="var(--color-accent)" // orange-600 (primary accent)
                stroke="white" 
                strokeWidth="2" 
              />
              <motion.text 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                x="680" y="320" 
                fill="white" 
                fontSize="32" 
                fontWeight="bold"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                $55.5B
              </motion.text>
            </svg>

            {/* Labels below chart */}
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 'var(--spacing-lg)', width: '100%' }}>
              
              {/* SMB Labels */}
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                style={{ width: '30%', textAlign: 'center' }}
              >
                <h4 className="text-subtitle" style={{ fontSize: '16px', marginBottom: '4px' }}>SMB</h4>
                <div className="text-micro" style={{ color: 'var(--color-text-secondary)', letterSpacing: 'normal', textTransform: 'none' }}>Self-Serve</div>
                <div className="text-body" style={{ fontSize: '14px', marginTop: '8px' }}>
                  <div style={{ fontWeight: 600 }}>230K companies</div>
                  <div style={{ color: 'var(--color-text-secondary)' }}>$3-30K ACV</div>
                </div>
              </motion.div>

               {/* MM & Enterprise Labels */}
               <motion.div 
                 initial={{ opacity: 0 }}
                 whileInView={{ opacity: 1 }}
                 transition={{ delay: 0.5 }}
                 style={{ width: '30%', textAlign: 'center' }}
               >
                <h4 className="text-subtitle" style={{ fontSize: '16px', marginBottom: '4px' }}>Enterprise</h4>
                <div className="text-micro" style={{ color: 'var(--color-text-secondary)', letterSpacing: 'normal', textTransform: 'none' }}>Direct Sales</div>
                 <div className="text-body" style={{ fontSize: '14px', marginTop: '8px' }}>
                  <div style={{ fontWeight: 600 }}>55K companies</div>
                  <div style={{ color: 'var(--color-text-secondary)' }}>$50K-1M ACV</div>
                </div>
              </motion.div>

               {/* Distributors Labels */}
               <motion.div 
                 initial={{ opacity: 0 }}
                 whileInView={{ opacity: 1 }}
                 transition={{ delay: 0.7 }}
                 style={{ width: '40%', textAlign: 'center' }}
               >
                <h4 className="text-subtitle" style={{ fontSize: '16px', marginBottom: '4px', color: 'var(--color-accent)' }}>Distributors</h4>
                <div className="text-micro" style={{ color: 'var(--color-text-secondary)', letterSpacing: 'normal', textTransform: 'none' }}>Direct Sales</div>
                 <div className="text-body" style={{ fontSize: '14px', marginTop: '8px' }}>
                  <div style={{ fontWeight: 600 }}>$1T spend on direct</div>
                  <div style={{ color: 'var(--color-text-secondary)' }}>$110bn spend on MRO</div>
                </div>
              </motion.div>

            </div>
          </div>
        </div>
      </div>
    </Slide>
  );
};
