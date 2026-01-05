import React from 'react';
import { Slide } from '../Slide';
import { Check, Heart } from 'lucide-react';

export const SolutionSlide: React.FC = () => {
  return (
    <Slide>
      <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
        <div style={{ marginBottom: 'var(--spacing-xl)' }}>
          <span className="text-micro">THE SOLUTION</span>
          <h2 className="text-title" style={{ marginTop: 'var(--spacing-sm)' }}>
             <span className="text-accent">Embed Demand Signals In Everyday Action.</span>
          </h2>
        </div>

        <p className="text-body" style={{ color: 'var(--color-text-secondary)', marginBottom: 'var(--spacing-xl)', fontSize: 'var(--font-size-xl)', width: '100%' }}>
          Arda helps manufacturers optimize throughput by embedding <strong>physical Kanban cards</strong> in pre-existing workflows. 
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--spacing-3xl)', flex: 1, alignItems: 'start' }}>
          <div>
            <p className="text-body" style={{ color: 'var(--color-text-secondary)', marginBottom: 'var(--spacing-md)', fontSize: 'var(--font-size-md)' }}>
              Using Arda Cards generates data and optimizes replenishment parameters based on real-time business context before automatically sending demand signals to distributors.
            </p>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)', marginTop: 'var(--spacing-xl)' }}>
              <Heart color="var(--color-accent)" fill="var(--color-accent)" />
              <span className="text-body" style={{ fontWeight: 600 }}>They LOVE Arda.</span>
            </div>
          </div>

          <div style={{ backgroundColor: '#fff', borderRadius: '12px', padding: 'var(--spacing-2xl)', border: '1px solid var(--color-border)', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
             <h3 className="text-subtitle" style={{ marginBottom: 'var(--spacing-lg)' }}>Why it wins</h3>
             <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
               <li style={{ display: 'flex', gap: 'var(--spacing-md)', marginBottom: 'var(--spacing-md)' }}>
                 <Check className="text-accent" />
                 <span className="text-body">Real-time optimization transforms throughput</span>
               </li>
               <li style={{ display: 'flex', gap: 'var(--spacing-md)', marginBottom: 'var(--spacing-md)' }}>
                 <Check className="text-accent" />
                 <span className="text-body">No changes to existing workflows</span>
               </li>
               <li style={{ display: 'flex', gap: 'var(--spacing-md)' }}>
                 <Check className="text-accent" />
                 <span className="text-body">Implementation is gradual and self-service</span>
               </li>
             </ul>
          </div>
        </div>
      </div>
    </Slide>
  );
};
