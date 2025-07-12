import React, { useEffect, useState } from 'react';

// Tailwind-based styling for modern glassmorphism with animation
const buttonBase =
  'fixed bottom-10 right-10 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-white/60 backdrop-blur-lg shadow-xl border border-white/30 text-blue-600 hover:scale-110 hover:shadow-2xl transition-all duration-300 cursor-pointer opacity-0 pointer-events-none';
const buttonVisible = 'opacity-100 pointer-events-auto';

const ScrollToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 200);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      aria-label="Scroll to top"
      className={visible ? `${buttonBase} ${buttonVisible}` : buttonBase}
      onClick={scrollToTop}
      title="Back to top"
      style={{boxShadow: '0 4px 24px rgba(0, 112, 243, 0.12)', transition: 'opacity 0.3s'}}
    >
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="18 15 12 9 6 15" />
      </svg>
    </button>
  );
};

export default ScrollToTop;
