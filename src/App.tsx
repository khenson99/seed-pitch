import { useState, useEffect, useCallback } from 'react';
import { AnimatePresence } from 'framer-motion';
import { CoverSlide } from './components/slides/CoverSlide';
import { MarketSlide } from './components/slides/MarketSlide';
import { TamSlide } from './components/slides/TamSlide';
import { ProblemSlide } from './components/slides/ProblemSlide';
import { SolutionSlide } from './components/slides/SolutionSlide';
import { ValuePropSlide } from './components/slides/ValuePropSlide';
import { BusinessModelSlide } from './components/slides/BusinessModelSlide';
import { TractionSlide } from './components/slides/TractionSlide';
// VisionSlide import removed
import { TeamSlide } from './components/slides/TeamSlide';
import { RaiseSlide } from './components/slides/RaiseSlide';
import { ClosingSlide } from './components/slides/ClosingSlide';
import { RequestDemoModal } from './components/RequestDemoModal';

const Slides = [
  CoverSlide,
  MarketSlide,
  ProblemSlide,
  SolutionSlide,
  ValuePropSlide,
  BusinessModelSlide,
  TractionSlide,
  TeamSlide,
  TamSlide,
  RaiseSlide,
  ClosingSlide,
];

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1 < Slides.length ? prev + 1 : prev));
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 >= 0 ? prev - 1 : prev));
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Prevent navigation if modal is open
      if (isModalOpen) return;

      if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === ' ') {
        nextSlide();
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        prevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide, isModalOpen]);

  // Handle Cover Slide CTA click or similar
  // To make it accessible from any slide, we can pass props or use context.
  // For now, let's put a global persistent button or just pass the handler to specific slides.
  // Actually, let's clone the element to pass props
  const CurrentSlideComponent = Slides[currentIndex] as React.FC<{ onOpenDemo: () => void }>;

  return (
    <div style={{ position: 'relative', width: '100vw', height: '100vh', overflow: 'hidden' }}>
      <AnimatePresence mode="wait">
        <CurrentSlideComponent key={currentIndex} onOpenDemo={() => setIsModalOpen(true)} />
      </AnimatePresence>
      
      {/* Navigation Hint (optional) */}
      <div style={{ position: 'absolute', bottom: 20, right: 20, opacity: 0.3 }} className="text-micro">
        {currentIndex + 1} / {Slides.length}
      </div>

      <div style={{ position: 'absolute', top: 20, right: 20, zIndex: 100 }}>
        <button
          onClick={() => window.open('https://meetings-na2.hubspot.com/kyle-henson/seed-round-meeting-link', '_blank')}
          style={{
            padding: '10px 20px',
            backgroundColor: 'var(--color-accent)',
            color: '#fff',
            border: 'none',
            borderRadius: '24px',
            fontWeight: 600,
            cursor: 'pointer',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
          }}
        >
          Book A Meeting
        </button>
      </div>

      <RequestDemoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}

export default App;
