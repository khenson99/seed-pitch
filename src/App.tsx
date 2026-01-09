import { useState, useEffect, useCallback } from "react";
import { AnimatePresence } from "framer-motion";
import { CoverSlide } from "./components/slides/CoverSlide";
import { MarketSlide } from "./components/slides/MarketSlide";
import { TamSlide } from "./components/slides/TamSlide";
import { ProblemSlide } from "./components/slides/ProblemSlide";
import { SolutionSlide } from "./components/slides/SolutionSlide";
import { ProductWorkflowSlide } from "./components/slides/ProductWorkflowSlide";
import { ValuePropSlide } from "./components/slides/ValuePropSlide";
import { BusinessModelSlide } from "./components/slides/BusinessModelSlide";
import { TractionSlide } from "./components/slides/TractionSlide";
// VisionSlide import removed
import { TeamSlide } from "./components/slides/TeamSlide";
import { RaiseSlide } from "./components/slides/RaiseSlide";
import { ClosingSlide } from "./components/slides/ClosingSlide";
import { RequestDemoModal } from "./components/RequestDemoModal";

const Slides = [
  CoverSlide,
  MarketSlide,
  ProblemSlide,
  SolutionSlide,
  ProductWorkflowSlide,
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

      if (e.key === "ArrowRight" || e.key === "ArrowDown" || e.key === " ") {
        nextSlide();
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        prevSlide();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, prevSlide, isModalOpen]);

  // Scaling Logic for Mobile
  const [scale, setScale] = useState(1);
  const designWidth = 1200; // Base design width

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      // Only scale down, don't scale up
      const newScale = Math.min(width / designWidth, 1);
      setScale(newScale);
    };

    handleResize(); // Initial calc
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Touch Navigation Logic
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // Minimum swipe distance (in px)
  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null); // Reset touch end
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (!touchStart) return;

    // Check if the target is interactive (button, link, input) to avoid hijacking clicks
    const target = e.target as HTMLElement;
    if (target.closest('button, a, input, [role="button"]')) {
      return;
    }

    const distance = touchStart - (touchEnd ?? touchStart);
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    } else {
      // Tap detection (no significant swipe)
      // If distance is very small, treat as tap
      if (Math.abs(distance) < minSwipeDistance) {
        const width = window.innerWidth;
        // Tap on left 30% -> Prev
        if (touchStart < width * 0.3) {
          prevSlide();
        }
        // Tap on right 30% -> Next
        else if (touchStart > width * 0.7) {
          nextSlide();
        }
      }
    }
  };

  // Handle Cover Slide CTA click or similar
  // To make it accessible from any slide, we can pass props or use context.
  // For now, let's put a global persistent button or just pass the handler to specific slides.
  // Actually, let's clone the element to pass props
  const CurrentSlideComponent = Slides[currentIndex] as React.FC<{
    onOpenDemo: () => void;
  }>;

  return (
    <div
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
      }}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <div 
        style={{ 
          width: designWidth, 
          height: '100vh', // Start with 100vh of the DESIGN space? No, use a fixed height design or fit.
          // Better: Use a fixed large height that fits all content, or just 100vh of the viewport?
          // If we want "Scale to Fit", we pretend the screen is 1200px wide.
          // So height should probably be relative to that or 100%.
          // Let's use minHeight 800px to ensure space.
          minHeight: '800px',
          transform: `scale(${scale})`, 
          transformOrigin: 'top center',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          // Force layout relative
          position: 'relative'
        }}
      >
        <AnimatePresence mode="wait">
          <CurrentSlideComponent
            key={currentIndex}
            onOpenDemo={() => setIsModalOpen(true)}
          />
        </AnimatePresence>
      </div>

      {/* Navigation Hint (optional) */}
      <div
        style={{ position: "absolute", bottom: 20, right: 20, opacity: 0.3 }}
        className="text-micro"
      >
        {currentIndex + 1} / {Slides.length}
      </div>

      <div style={{ position: "absolute", top: 20, right: 20, zIndex: 100 }}>
        <button
          onClick={() =>
            window.open(
              "https://meetings-na2.hubspot.com/kyle-henson/seed-round-meeting-link",
              "_blank"
            )
          }
          style={{
            padding: "10px 20px",
            backgroundColor: "var(--color-accent)",
            color: "#fff",
            border: "none",
            borderRadius: "24px",
            fontWeight: 600,
            cursor: "pointer",
            boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
          }}
        >
          Book A Meeting
        </button>
      </div>

      <RequestDemoModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}

export default App;
