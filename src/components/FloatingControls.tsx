import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const FloatingControls: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 280) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToTop = () => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
    });
  };

  return (
    <aside aria-label="Floating Actions" className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 pointer-events-none">
      {/* 1. Floating Back-to-Top Button */}
      {showScrollTop && (
        <button
          onClick={handleScrollToTop}
          type="button"
          aria-label="Scroll to top"
          className="pointer-events-auto w-10 h-10 bg-[#FAF8F5] text-[#141414] border border-[#E5E2DC] hover:border-[#141414] hover:text-[#0D9488] shadow-xs flex items-center justify-center transition-all cursor-pointer"
        >
          <ArrowUp className="w-4 h-4 stroke-[2.25]" />
        </button>
      )}

      {/* 2. Floating WhatsApp Contact Button */}
      <a
        href="https://wa.me/7079925455"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact via WhatsApp"
        className="pointer-events-auto group h-10 px-3 bg-[#141414] text-[#FAF8F5] border border-[#141414] hover:bg-[#0D9488] hover:border-[#0D9488] shadow-xs flex items-center gap-2 transition-all cursor-pointer"
      >
        {/* WhatsApp SVG Icon */}
        <svg
          viewBox="0 0 24 24"
          width="18"
          height="18"
          fill="currentColor"
          className="shrink-0"
          aria-hidden="true"
        >
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M9.07 7.03C8.89 7.03 8.6 7.1 8.35 7.37C8.1 7.64 7.4 8.29 7.4 9.63C7.4 10.97 8.38 12.26 8.52 12.45C8.66 12.64 10.45 15.41 13.2 16.59C13.85 16.87 14.36 17.04 14.76 17.17C15.42 17.38 16.02 17.35 16.5 17.28C17.03 17.2 18.14 16.61 18.37 15.96C18.6 15.31 18.6 14.76 18.53 14.64C18.46 14.52 18.28 14.45 18.01 14.31C17.74 14.17 16.42 13.52 16.17 13.43C15.92 13.34 15.74 13.29 15.56 13.57C15.38 13.85 14.86 14.45 14.7 14.64C14.54 14.83 14.38 14.85 14.11 14.71C13.84 14.57 12.97 14.29 11.94 13.37C11.14 12.65 10.6 11.77 10.44 11.5C10.28 11.23 10.42 11.08 10.56 10.94C10.68 10.82 10.83 10.62 10.97 10.46C11.11 10.3 11.16 10.18 11.25 10C11.34 9.82 11.3 9.67 11.23 9.53C11.16 9.39 10.62 8.05 10.39 7.51C10.17 6.99 9.94 7.06 9.77 7.05C9.62 7.04 9.44 7.03 9.26 7.03H9.07Z" />
        </svg>

        {/* Desktop subtle text label */}
        <span className="hidden sm:inline text-xs font-semibold tracking-wide">
          WhatsApp
        </span>
      </a>
    </aside>
  );
};
