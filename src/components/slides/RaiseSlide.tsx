import React from 'react';
import { Slide } from '../Slide';
import { motion } from 'framer-motion';

export const RaiseSlide: React.FC = () => {
  // Data from VisionSlide
  const data = [
    { month: 'Jan-26', manu: 0.8, dist: 0.2 },
    { month: 'Feb-26', manu: 1.0, dist: 0.3 },
    { month: 'Mar-26', manu: 1.3, dist: 0.4 },
    { month: 'Apr-26', manu: 1.6, dist: 0.5 },
    { month: 'May-26', manu: 2.0, dist: 0.8 },
    { month: 'Jun-26', manu: 2.4, dist: 1.1 },
    { month: 'Jul-26', manu: 2.9, dist: 1.4 },
    { month: 'Aug-26', manu: 3.5, dist: 1.8 },
    { month: 'Sep-26', manu: 4.2, dist: 2.1 },
    { month: 'Oct-26', manu: 5.0, dist: 2.7 },
    { month: 'Nov-26', manu: 6.0, dist: 3.2 },
    { month: 'Dec-26', manu: 7.2, dist: 3.8 }, // ~11M total
  ];

  const maxVal = 12; // $12M y-axis max
  const colorManu = '#F97316'; // Orange
  const colorDist = '#3B82F6'; // Blue

  return (
    <Slide>
      <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
        <div style={{ marginBottom: 'var(--spacing-xl)' }}>
          <span className="text-micro">THE RAISE</span>
          <h2 className="text-title" style={{ marginTop: 'var(--spacing-sm)', width: '100%' }}>
             <span className="text-accent">$3.5m</span> Seed Round.
          </h2>
          <p className="text-body" style={{ fontSize: 'var(--font-size-2xl)', marginTop: 'var(--spacing-md)', width: '100%', lineHeight: 1.3, color: 'var(--color-text-secondary)' }}>
              Lead by <strong style={{ color: 'var(--color-text-primary)' }}>Grid</strong> to accelerate customer acquisition. Unlocking network effects between distributors and manufacturers.
          </p>
        </div>

        {/* Graph Container */}
        <div style={{ display: 'flex', flexDirection: 'column', flex: 1, minHeight: '400px' }}>
            {/* Chart */}
            <div style={{ flex: 1, display: 'flex', position: 'relative', alignItems: 'flex-end', gap: '8px', paddingLeft: '40px', borderLeft: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}>
              
              {/* Y-Axis Labels */}
              <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '35px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', fontSize: '10px', color: 'var(--color-text-secondary)', textAlign: 'right', paddingRight: '5px' }}>
                <span>$12M</span>
                <span>$8M</span>
                <span>$4M</span>
                <span>$0</span>
              </div>

              {/* Grid Lines */}
              {[0.33, 0.66, 1].map((pos, i) => (
                  <div key={i} style={{ position: 'absolute', left: '40px', right: 0, top: `${pos * 100}%`, borderTop: '1px dashed var(--color-border)', opacity: 0.5 }} />
              ))}

              {/* Bars */}
              {data.map((item, index) => {
                const totalHeight = ((item.manu + item.dist) / maxVal) * 100;
                const manuHeight = (item.manu / (item.manu + item.dist)) * 100;
                const distHeight = (item.dist / (item.manu + item.dist)) * 100;

                return (
                  <div key={index} style={{ flex: 1, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'center', position: 'relative' }}>
                    
                    {/* Stacked Bar */}
                    <div style={{ width: '70%', height: `${totalHeight}%`, display: 'flex', flexDirection: 'column-reverse', borderRadius: '4px 4px 0 0', overflow: 'hidden' }}>
                      <motion.div 
                        initial={{ height: 0 }}
                        animate={{ height: `${manuHeight}%` }}
                        transition={{ duration: 0.8, delay: index * 0.05, ease: "easeOut" }}
                        style={{ width: '100%', backgroundColor: colorManu, borderBottom: '1px solid rgba(255,255,255,0.2)' }}
                      />
                      <motion.div 
                        initial={{ height: 0 }}
                        animate={{ height: `${distHeight}%` }}
                        transition={{ duration: 0.8, delay: (index * 0.05) + 0.2, ease: "easeOut" }}
                        style={{ width: '100%', backgroundColor: colorDist }}
                      />
                    </div>

                    {/* X-Axis Label */}
                    <div style={{ position: 'absolute', bottom: '-35px', fontSize: '9px', color: 'var(--color-text-secondary)', transform: 'rotate(-45deg)', whiteSpace: 'nowrap', transformOrigin: 'top center', left: '50%', textAlign: 'center', width: '100%' }}>
                      {item.month}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Legend */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', marginTop: '40px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <div style={{ width: '12px', height: '12px', backgroundColor: colorManu, borderRadius: '2px' }}></div>
                  <span className="text-body" style={{ fontSize: '12px' }}>Manufacturers</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <div style={{ width: '12px', height: '12px', backgroundColor: colorDist, borderRadius: '2px' }}></div>
                  <span className="text-body" style={{ fontSize: '12px' }}>Distributors</span>
                </div>
            </div>
          </div>

      </div>
    </Slide>
  );
};
