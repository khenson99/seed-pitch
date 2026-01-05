import React from 'react';
import { Slide } from '../Slide';
import { TrendingUp, Smile, Award, Zap, PhoneOff, Lock } from 'lucide-react';

export const ValuePropSlide: React.FC = () => {
  return (
    <Slide>
      <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
        <div style={{ marginBottom: 'var(--spacing-xl)' }}>
          <span className="text-micro">VALUE PROPOSITION</span>
          <h2 className="text-title" style={{ marginTop: 'var(--spacing-sm)' }}>
             <span className="text-accent">Why they love Arda.</span>
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--spacing-3xl)', flex: 1, alignItems: 'start' }}>
          
          {/* Distributors - LEFT */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-xl)' }}>
            <h3 className="text-subtitle" style={{ fontSize: 'var(--font-size-2xl)', marginBottom: 'var(--spacing-md)', borderBottom: '2px solid var(--color-border)', paddingBottom: 'var(--spacing-sm)' }}>Distributors</h3>
            
            {/* Real-time Demand */}
            <div style={{ display: 'flex', gap: 'var(--spacing-md)' }}>
              <div style={{ padding: 'var(--spacing-sm)', backgroundColor: '#fff', borderRadius: '8px', border: '1px solid var(--color-border)', height: 'fit-content' }}>
                 <Zap className="text-accent" size={24} />
              </div>
              <div>
                <h4 className="text-subtitle" style={{ fontSize: 'var(--font-size-lg)' }}>Real-Time Demand</h4>
                <p className="text-body" style={{ color: 'var(--color-text-secondary)', fontSize: 'var(--font-size-md)' }}>
                  Gives them real-time visibility into customer needs. Eliminate guesswork.
                </p>
              </div>
            </div>

            {/* Reduced Support Volume */}
            <div style={{ display: 'flex', gap: 'var(--spacing-md)' }}>
              <div style={{ padding: 'var(--spacing-sm)', backgroundColor: '#fff', borderRadius: '8px', border: '1px solid var(--color-border)', height: 'fit-content' }}>
                 <PhoneOff className="text-accent" size={24} />
              </div>
              <div>
                <h4 className="text-subtitle" style={{ fontSize: 'var(--font-size-lg)' }}>Reduced Support Volume</h4>
                <p className="text-body" style={{ color: 'var(--color-text-secondary)', fontSize: 'var(--font-size-md)' }}>
                  Drastically cuts down on call and email volume for routine reorders.
                </p>
              </div>
            </div>

            {/* Brand Lock-in - Re-shopping */}
            <div style={{ display: 'flex', gap: 'var(--spacing-md)' }}>
              <div style={{ padding: 'var(--spacing-sm)', backgroundColor: '#fff', borderRadius: '8px', border: '1px solid var(--color-border)', height: 'fit-content' }}>
                 <Lock className="text-accent" size={24} />
              </div>
              <div>
                <h4 className="text-subtitle" style={{ fontSize: 'var(--font-size-lg)' }}>Prevents Re-Shopping</h4>
                <p className="text-body" style={{ color: 'var(--color-text-secondary)', fontSize: 'var(--font-size-md)' }}>
                  Customers don't shop around online. They are locked in.
                </p>
              </div>
            </div>
          </div>

          {/* Manufacturers - RIGHT */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-xl)' }}>
            <h3 className="text-subtitle" style={{ fontSize: 'var(--font-size-2xl)', marginBottom: 'var(--spacing-md)', borderBottom: '2px solid var(--color-border)', paddingBottom: 'var(--spacing-sm)' }}>Manufacturers</h3>
              {/* Increases Throughput */}
            <div style={{ display: 'flex', gap: 'var(--spacing-md)' }}>
              <div style={{ padding: 'var(--spacing-sm)', backgroundColor: '#fff', borderRadius: '8px', border: '1px solid var(--color-border)', height: 'fit-content' }}>
                 <Award className="text-accent" size={24} />
              </div>
              <div>
                <h4 className="text-subtitle" style={{ fontSize: 'var(--font-size-lg)' }}>Increases Throughput</h4>
                <p className="text-body" style={{ color: 'var(--color-text-secondary)', fontSize: 'var(--font-size-md)' }}>
                  By removing friction and expediting, production capacity goes up.
                </p>
              </div>
            </div>
            {/* Prevents Stockouts */}
            <div style={{ display: 'flex', gap: 'var(--spacing-md)' }}>
              <div style={{ padding: 'var(--spacing-sm)', backgroundColor: '#fff', borderRadius: '8px', border: '1px solid var(--color-border)', height: 'fit-content' }}>
                 <TrendingUp className="text-accent" size={24} />
              </div>
              <div>
                <h4 className="text-subtitle" style={{ fontSize: 'var(--font-size-lg)' }}>Prevents Stockouts</h4>
                <p className="text-body" style={{ color: 'var(--color-text-secondary)', fontSize: 'var(--font-size-md)' }}>
                  They never run out of parts. Lines keep moving.
                </p>
              </div>
            </div>

            {/* Physical & Intuitive */}
            <div style={{ display: 'flex', gap: 'var(--spacing-md)' }}>
              <div style={{ padding: 'var(--spacing-sm)', backgroundColor: '#fff', borderRadius: '8px', border: '1px solid var(--color-border)', height: 'fit-content' }}>
                 <Smile className="text-accent" size={24} />
              </div>
              <div>
                <h4 className="text-subtitle" style={{ fontSize: 'var(--font-size-lg)' }}>Physical & Intuitive</h4>
                <p className="text-body" style={{ color: 'var(--color-text-secondary)', fontSize: 'var(--font-size-md)' }}>
                  Easy to use on the shop floor. No complex software interfaces for operators.
                </p>
              </div>
            </div>

           
          </div>

        </div>
      </div>
    </Slide>
  );
};
