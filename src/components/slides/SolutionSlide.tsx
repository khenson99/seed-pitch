import React from 'react';
import { Slide } from '../Slide';
import { Check, Heart } from 'lucide-react';

import solutionHero from '../../assets/solution_hero.png';

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

        <div className="responsive-stack" style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: 'var(--spacing-3xl)', flex: 1, alignItems: 'start' }}>
          
          {/* Left Column: Text + Why it wins */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-xl)' }}>
            <p className="text-body" style={{ color: 'var(--color-text-secondary)', fontSize: 'var(--font-size-xl)', width: '100%' }}>
              Arda helps manufacturers optimize throughput by embedding <strong>physical Kanban cards</strong> in pre-existing workflows. 
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)' }}>
              <Heart color="var(--color-accent)" fill="var(--color-accent)" />
              <span className="text-body" style={{ fontWeight: 600 }}>They LOVE Arda.</span>
            </div>
            <div style={{ backgroundColor: '#fff', borderRadius: '12px', padding: 'var(--spacing-xl)', border: '1px solid var(--color-border)', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
               <h3 className="text-subtitle" style={{ marginBottom: 'var(--spacing-md)' }}>Why it wins</h3>
               <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                 <li style={{ display: 'flex', gap: 'var(--spacing-md)', marginBottom: 'var(--spacing-sm)' }}>
                   <Check className="text-accent" size={20} />
                   <span className="text-body" style={{ fontSize: '15px' }}>Grounded in TPS/TOC Gold-Standard Ops Theory</span>
                 </li>
                 <li style={{ display: 'flex', gap: 'var(--spacing-md)', marginBottom: 'var(--spacing-sm)' }}>
                   <Check className="text-accent" size={20} />
                   <span className="text-body" style={{ fontSize: '15px' }}>Real-Time Optimization</span>
                 </li>
                 <li style={{ display: 'flex', gap: 'var(--spacing-md)' }}>
                   <Check className="text-accent" size={20} />
                   <span className="text-body" style={{ fontSize: '15px' }}>No Workflow Changes & Gradual implementation</span>
                 </li>
               </ul>
            </div>

          
          </div>

          {/* Right Column: Hero Image */}
          <div style={{ position: 'relative', width: '100%', display: 'flex', alignItems: 'flex-start', justifyContent: 'center' }}>
             <img 
               src={solutionHero} 
               alt="Arda Solution" 
               style={{ 
                 width: '100%', 
                 height: 'auto', 
                 objectFit: 'contain', 
                 borderRadius: '12px'
               }} 
             />
          </div>
        </div>
      </div>
    </Slide>
  );
};
