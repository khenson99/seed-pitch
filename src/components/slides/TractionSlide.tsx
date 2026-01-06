import React from 'react';
import { Slide } from '../Slide';
import { motion } from 'framer-motion';

export const TractionSlide: React.FC = () => {
  return (
    <Slide>
      <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
        <div style={{ marginBottom: 'var(--spacing-xl)' }}>
          <h2 className="text-title" style={{ marginBottom: 'var(--spacing-sm)' }}>
             More Demand Than We Can Handle
          </h2>
          <p className="text-subtitle" style={{ fontSize: 'var(--font-size-2xl)', color: 'var(--color-text-primary)' }}>
            Exited beta in August, now <span className="text-accent">growing 20% MoM with no end in sight</span>
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 1fr) 2fr', gap: 'var(--spacing-3xl)', flex: 1, alignItems: 'start' }}>
          
          {/* Left Column: Totals */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-lg)', width: '100%' }}>
              {/* Card 1 */}
              <div style={{ backgroundColor: '#fff', borderRadius: '12px', padding: 'var(--spacing-xl)', border: '1px solid var(--color-border)', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', textAlign: 'center' }}>
                <div className="text-accent" style={{ fontSize: '64px', fontWeight: 700, lineHeight: 1, marginBottom: 'var(--spacing-xs)' }}>$600k</div>
                <div className="text-body" style={{ fontWeight: 600 }}>Annual revenue</div>
              </div>

              {/* Card 2 */}
              <div style={{ backgroundColor: '#fff', borderRadius: '12px', padding: 'var(--spacing-xl)', border: '1px solid var(--color-border)', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', textAlign: 'center' }}>
                <div className="text-accent" style={{ fontSize: '64px', fontWeight: 700, lineHeight: 1, marginBottom: 'var(--spacing-xs)' }}>100+</div>
                <div className="text-body" style={{ fontWeight: 600 }}>Customers</div>
              </div>

              {/* Card 3 */}
              <div style={{ backgroundColor: '#fff', borderRadius: '12px', padding: 'var(--spacing-xl)', border: '1px solid var(--color-border)', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', textAlign: 'center' }}>
                <div className="text-accent" style={{ fontSize: '64px', fontWeight: 700, lineHeight: 1, marginBottom: 'var(--spacing-xs)' }}>115%</div>
                <div className="text-body" style={{ fontWeight: 600 }}>Net revenue retention</div>
              </div>
            </div>
          </div>

          {/* Right Column: Graph */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
             
             {/* Legend */}
             <div style={{ display: 'flex', gap: 'var(--spacing-lg)', marginBottom: 'var(--spacing-md)', width: '100%', justifyContent: 'flex-end' }}>
               <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-xs)' }}>
                 <div style={{ width: '12px', height: '12px', backgroundColor: '#3B82F6', borderRadius: '2px' }} />
                 <span className="text-micro" style={{ color: 'var(--color-text-secondary)' }}>Distributors</span>
               </div>
               <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-xs)' }}>
                 <div style={{ width: '12px', height: '12px', backgroundColor: '#F97316', borderRadius: '2px' }} />
                 <span className="text-micro" style={{ color: 'var(--color-text-secondary)' }}>Manufacturers</span>
               </div>
             </div>

             <div style={{ width: '100%', height: '500px', backgroundColor: '#fff', padding: 'var(--spacing-md)', paddingBottom: 'var(--spacing-xl)', borderRadius: '12px', border: '1px solid var(--color-border)', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', display: 'flex', gap: '8px', alignItems: 'flex-end', position: 'relative', paddingLeft: '50px' }}>
               
                {/* Y-Axis Labels */}
                <div style={{ position: 'absolute', left: '10px', top: 'var(--spacing-md)', bottom: 'var(--spacing-xl)', width: '30px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', fontSize: '10px', color: 'var(--color-text-secondary)', textAlign: 'right' }}>
                  <span>$700k</span>
                  <span>$350k</span>
                  <span>$0</span>
                </div>

                {/* Grid Lines */}
                {[0, 0.5, 1].map((pos, i) => (
                    <div key={i} style={{ position: 'absolute', left: '50px', right: 'var(--spacing-md)', top: `calc(var(--spacing-md) + ${pos * (500 - 48)}px)`, borderTop: '1px dashed var(--color-border)', opacity: 0.5, pointerEvents: 'none' }} />
                ))}

                {/* Data from Slide Image: May to Nov */}
                {[
                  { month: 'May', manu: 110, dist: 25 },
                  { month: 'June', manu: 120, dist: 30 },
                  { month: 'July', manu: 200, dist: 20 },
                  { month: 'August', manu: 330, dist: 40 },
                  { month: 'September', manu: 400, dist: 40 },
                  { month: 'October', manu: 480, dist: 40 },
                  { month: 'November', manu: 560, dist: 30 },
                ].map((d, i) => {
                  const maxVal = 700; // Scale to fit nicely
                  const manuHeight = (d.manu / maxVal) * 100;
                  const distHeight = (d.dist / maxVal) * 100;
                  
                  return (
                    <div key={i} style={{ flex: 1, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'center', position: 'relative' }}>
                       {/* Stacked Bar Container */}
                       <div style={{ width: '70%', height: 'calc(100% - 20px)', display: 'flex', flexDirection: 'column-reverse', alignItems: 'center', zIndex: 1 }}>
                          
                          {/* Manufacturers (Orange) - Bottom Stack */}
                          <motion.div 
                            initial={{ height: 0 }}
                            animate={{ height: `${manuHeight}%` }} 
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                            style={{ width: '100%', backgroundColor: '#F97316', borderRadius: '2px' }}
                          />

                          {/* Distributors (Blue) - Top Stack */}
                          <motion.div 
                            initial={{ height: 0 }}
                            animate={{ height: `${distHeight}%` }} 
                            transition={{ duration: 0.6, delay: (i * 0.1) + 0.2 }}
                            style={{ width: '100%', backgroundColor: '#3B82F6', borderRadius: '2px 2px 0 0', marginBottom: '1px' }}
                          />
                       </div>
                       <span style={{ position: 'absolute', bottom: '0px', fontSize: '12px', color: 'var(--color-text-secondary)', whiteSpace: 'nowrap' }}>{d.month}</span>
                    </div>
                  );
                })}
             </div>
          </div>

        </div>
      </div>
    </Slide>
  );
};
