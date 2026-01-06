import React from 'react';
import { Slide } from '../Slide';
import { motion } from 'framer-motion';

export const MarketSlide: React.FC = () => {
  return (
    <Slide>
      <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
        <div style={{ marginBottom: 'var(--spacing-xl)' }}>
          <span className="text-micro">THE MARKET</span>
          <h2 className="text-title" style={{ marginTop: 'var(--spacing-sm)', width: '100%' }}>
             Industrial distribution is a <span className="text-accent">$7tn market</span> running on hand counts and spreadsheets.
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--spacing-3xl)', alignItems: 'start', flex: 1 }}>
           {/* Section 1: The Waste */}
           <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
             <p className="text-body" style={{ fontSize: 'var(--font-size-2xl)', lineHeight: 1.3 }}>
               <strong className="text-accent" style={{ fontSize: '64px', display: 'block', lineHeight: 1, marginBottom: 'var(--spacing-sm)' }}>$300B</strong>
               is wasted annually by manufacturers when they run out of parts and stop production.
             </p>
           </motion.div>

           {/* Section 2: The Quote */}
           <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }} style={{ borderLeft: '1px solid var(--color-border)', paddingLeft: 'var(--spacing-2xl)' }}>
             <h4 className="text-subtitle" style={{ fontSize: 'var(--font-size-lg)', marginBottom: 'var(--spacing-md)', textTransform: 'uppercase', color: 'var(--color-text-primary)', letterSpacing: '0.05em' }}>Inbound Distributor Call</h4>
             <p className="text-body" style={{ fontStyle: 'italic', fontSize: 'var(--font-size-lg)', color: 'var(--color-text-secondary)' }}>
               “The manufacturer that we sell for couldn't ship accurately to customers. They're missing deliveries, shipping the wrong parts, so they hired us. We installed a quality control system, which is a gentleman who sits there and verifies the counts are right and repackages stuff. It's a very manual process and this is a $2m customer.”
             </p>
           </motion.div>
        </div>
      </div>
    </Slide>
  );
};
