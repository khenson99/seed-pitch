import React from 'react';
import { Slide } from '../Slide';

export const BusinessModelSlide: React.FC = () => {
  return (
    <Slide>
      <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
        <div style={{ marginBottom: 'var(--spacing-xl)' }}>
          <span className="text-micro">BUSINESS MODEL</span>
          <h2 className="text-title" style={{ marginTop: 'var(--spacing-sm)' }}>
             <span className="text-accent">Two-Sided Network.</span>
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--spacing-3xl)', flex: 1, alignItems: 'start' }}>
          
          {/* Distributor Side - LEFT */}
          <div style={{ padding: 'var(--spacing-xl)', border: '1px solid var(--color-border)', borderRadius: '12px', backgroundColor: '#fff', boxShadow: '0 4px 6px rgba(0,0,0,0.02)' }}>
            <h3 className="text-subtitle" style={{ marginBottom: 'var(--spacing-md)' }}>Distributors</h3>
            <div className="text-hero text-accent" style={{ fontSize: 'var(--font-size-4xl)' }}>5-7%<span style={{ fontSize: 'var(--font-size-lg)', color: 'var(--color-text-secondary)' }}> take rate</span></div>
            <ul style={{ marginTop: 'var(--spacing-md)', paddingLeft: 0, listStyle: 'none' }} className="text-body">
              <li style={{ marginBottom: 'var(--spacing-sm)' }}>
                ✅ Amazon (7%)
              </li>
              <li style={{ marginBottom: 'var(--spacing-sm)' }}>
                ✅ Ideal Tridon ($250M fasteners) (5%)
              </li>
              <li style={{ marginBottom: 'var(--spacing-sm)', color: 'var(--color-text-secondary)' }}>
                🤝 U-Line <span style={{ fontSize: '0.8em', fontStyle: 'italic' }}>- Shipping cards instead of the catalogue</span>
              </li>
              <li style={{ color: 'var(--color-text-secondary)' }}>
                🤝 Grainger
              </li>
            </ul>
          </div>

          {/* Manufacturing Side - RIGHT */}
          <div style={{ padding: 'var(--spacing-xl)', border: '1px solid var(--color-border)', borderRadius: '12px', backgroundColor: '#fff', boxShadow: '0 4px 6px rgba(0,0,0,0.02)' }}>
            <h3 className="text-subtitle" style={{ marginBottom: 'var(--spacing-md)' }}>Manufacturers</h3>
            <div className="text-hero text-accent" style={{ fontSize: 'var(--font-size-4xl)' }}>$1<span style={{ fontSize: 'var(--font-size-lg)', color: 'var(--color-text-secondary)' }}> / month / card</span></div>
            <ul style={{ marginTop: 'var(--spacing-md)', paddingLeft: 0, listStyle: 'none' }} className="text-body">
              <li style={{ marginBottom: 'var(--spacing-sm)' }}>
                ✅ Bella & Canvas
              </li>
              <li style={{ marginBottom: 'var(--spacing-sm)' }}>
                ✅ Medela
              </li>
              <li style={{ marginBottom: 'var(--spacing-sm)', color: 'var(--color-text-secondary)' }}>
                🤝 Nike <span style={{ fontSize: '0.8em', fontStyle: 'italic' }}>- Through IT Review</span>
              </li>
              <li style={{ color: 'var(--color-text-secondary)' }}>
                🤝 Apple <span style={{ fontSize: '0.8em', fontStyle: 'italic' }}>- Through IT Review</span>
              </li>
            </ul>
            <p className="text-body" style={{ marginTop: 'var(--spacing-md)' }}>
             
            </p>
          </div>
        </div>
      </div>
    </Slide>
  );
};
