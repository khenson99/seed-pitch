import React from 'react';
import { Slide } from '../Slide';
import kyleHeadshot from '../../assets/kyle_headshot.jpg';

export const TeamSlide: React.FC = () => {
  return (
    <Slide>
      <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
        <div style={{ marginBottom: 'var(--spacing-xl)' }}>
          <span className="text-micro">THE TEAM</span>
          <h2 className="text-title" style={{ marginTop: 'var(--spacing-sm)' }}>
             <span className="text-accent">Built by Experts.</span>
          </h2>
        </div>

        <div className="responsive-stack" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--spacing-xl)', flex: 1, alignItems: 'start' }}>
          
          {/* Profile 1 - Kyle */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)' }}>
             <div style={{ width: '100%', aspectRatio: '1', backgroundColor: '#eee', borderRadius: '12px', overflow: 'hidden' }}>
               <img src={kyleHeadshot} alt="Kyle Henson" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(100%)' }} />
             </div>
             <div>
               <h3 className="text-subtitle" style={{ fontSize: 'var(--font-size-xl)' }}>Kyle Henson</h3>
               <p className="text-body" style={{ fontSize: 'var(--font-size-md)', color: 'var(--color-text-secondary)', marginBottom: 'var(--spacing-xs)' }}>CEO & Co-Founder</p>
               <p className="text-body" style={{ color: 'var(--color-text-secondary)', fontSize: 'var(--font-size-md)' }}>
                 <strong style={{ color: 'var(--color-text-primary)' }}>Always-Closing, Zealous Generalist.</strong> Led diligence for 100+ B2B SaaS transactions. Obsessed with doubling manufacturing GDP through radically successful customers.
               </p>
             </div>
          </div>

          
          {/* Profile 2 - Uriel */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)' }}>
             <div style={{ width: '100%', aspectRatio: '1', backgroundColor: '#eee', borderRadius: '12px', overflow: 'hidden' }}>
               <img src="/assets/team/team-2.jpg" alt="Uriel Eisen" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
             </div>
             <div>
               <h3 className="text-subtitle" style={{ fontSize: 'var(--font-size-xl)' }}>Uriel Eisen</h3>
               <p className="text-body" style={{ fontSize: 'var(--font-size-md)', color: 'var(--color-text-secondary)', marginBottom: 'var(--spacing-xs)' }}>President & Co-Founder</p>
               <p className="text-body" style={{ color: 'var(--color-text-secondary)', fontSize: 'var(--font-size-md)' }}>
                 <strong style={{ color: 'var(--color-text-primary)' }}>Design/Industrial Influencer.</strong> Designed space suits for NASA. Obsessed with creating dead-simple systems for the shop floor that unlock emergent, compounding power at scale.
               </p>
             </div>
          </div>

          {/* Profile 3 - Miguel */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)' }}>
             <div style={{ width: '100%', aspectRatio: '1', backgroundColor: '#eee', borderRadius: '12px', overflow: 'hidden' }}>
               <img src="/assets/team/team-1.jpg" alt="Miguel Pinilla" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
             </div>
             <div>
               <h3 className="text-subtitle" style={{ fontSize: 'var(--font-size-xl)' }}>Miguel Pinilla</h3>
               <p className="text-body" style={{ fontSize: 'var(--font-size-md)', color: 'var(--color-text-secondary)', marginBottom: 'var(--spacing-xs)' }}>CTO & Co-Founder</p>
               <p className="text-body" style={{ color: 'var(--color-text-secondary)', fontSize: 'var(--font-size-md)' }}>
                 <strong style={{ color: 'var(--color-text-primary)' }}>Flexport, Dematic, Red Prairie</strong>Look around the room you're in. Everything you see went through software he built. Stanford Ph D: Manufacturing Information Systems. Obsessed with making global supply chains optimally efficient. 
               </p>
             </div>
          </div>


        </div>
      </div>
    </Slide>
  );
};
