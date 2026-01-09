import React from 'react';
import { Slide } from '../Slide';
import { Users, Bot, Box, Camera, Monitor } from 'lucide-react';
import { motion } from 'framer-motion';

export const ProblemSlide: React.FC = () => {
  return (
    <Slide>
      <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
        
        <div style={{ marginBottom: 'var(--spacing-xl)' }}>
          <span className="text-micro">THE PROBLEM</span>
          <h2 className="text-title" style={{ marginTop: 'var(--spacing-sm)', width: '100%' }}>
            Systems Fail Without a Presence on the <span className="text-accent">Factory Floor.</span>
          </h2>
          <p className="text-body" style={{ 
            fontSize: 'var(--font-size-2xl)', 
            width: '100%',
            marginTop: 'var(--spacing-md)',
            color: 'var(--color-text-secondary)'
          }}>
            Distributors are embedding machines and people at customer sites. It's expensive and ineffective.
          </p>
        </div>

        {/* Arrow Axis */}
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between',
          marginBottom: 'var(--spacing-xs)',
          padding: '0 var(--spacing-lg)',
          color: 'var(--color-accent)',
          fontSize: '12px',
          fontWeight: 700,
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
          position: 'relative'
        }}>
          <span>Expensive</span>
          <div style={{ 
            flex: 1, 
            height: '1px', 
            background: 'var(--color-accent)',
            margin: '0 var(--spacing-md)',
            position: 'relative',
            opacity: 0.5
          }}>
            <div style={{
                position: 'absolute',
                right: '-1px',
                top: '50%',
                transform: 'translateY(-50%)',
                width: 0, 
                height: 0, 
                borderTop: '4px solid transparent', 
                borderBottom: '4px solid transparent', 
                borderLeft: '6px solid var(--color-accent)'
            }} />
          </div>
          <span>Ineffective</span>
        </div>

        <div className="responsive-stack" style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(5, 1fr)', 
            gap: 'var(--spacing-md)',
            width: '100%',
            flex: 1,
            alignContent: 'start',
            marginTop: 'var(--spacing-sm)'
        }}>
          {[
            { 
              icon: Users, 
              name: "Humans", 
              description: "Prone to manual errors and high turnover." 
            },
            { 
              icon: Bot, 
              name: "Robots", 
              description: "High CapEx and long integration times." 
            },
            { 
              icon: Box, 
              name: "Vending", 
              description: "Limited throughput and footprint issues." 
            },
            { 
              icon: Camera, 
              name: "Cameras", 
              description: "Computer vision is brittle in dynamic environments." 
            },
            { 
              icon: Monitor, 
              name: "Software", 
              description: "Disconnected from physical reality." 
            }
          ].map((item, index) => (
             <motion.div 
               key={index} 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.1 * index }}
               style={{ 
                 backgroundColor: '#fff', 
                 padding: 'var(--spacing-md) var(--spacing-md) var(--spacing-sm) var(--spacing-md)', 
                 borderRadius: '12px',
                 textAlign: 'center',
                 border: '1px solid var(--color-border)',
                 display: 'flex',
                 flexDirection: 'column',
                 alignItems: 'center',
                 gap: 'var(--spacing-md)',
                 height: '100%',
                 boxShadow: '0 4px 6px rgba(0,0,0,0.02)'
               }}
             >
               <div style={{
                 width: '56px',
                 height: '56px',
                 borderRadius: '50%',
                 backgroundColor: 'rgba(235, 87, 87, 0.1)',
                 display: 'flex',
                 alignItems: 'center',
                 justifyContent: 'center',
                 color: 'var(--color-accent)'
               }}>
                 <item.icon size={28} />
               </div>
               <div>
                  <h5 className="text-subtitle" style={{ marginBottom: 'var(--spacing-xs)', fontSize: '18px' }}>
                    {item.name}
                  </h5>
                  <p className="text-body" style={{ fontSize: '13px', lineHeight: '1.4' }}>
                    {item.description}
                  </p>
               </div>
             </motion.div>
          ))}
        </div>
      </div>
    </Slide>
  );
};
