import React, { useState } from 'react';
import { useNavigation } from '../context/NavigationContext';
import { Menu, X } from 'lucide-react';

export const SiteHeader: React.FC = () => {
  const { currentPath, navigate } = useNavigation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Work', path: '/work' },
    { label: 'Lab', path: '/lab' },
    { label: 'Ideas', path: '/ideas' },
    { label: 'About', path: '/about' },
  ];

  const handleNavClick = (path: string) => {
    navigate(path);
    setMobileMenuOpen(false);
  };

  const isActive = (path: string) => {
    if (path === '/work') {
      return currentPath === '/work' || currentPath.startsWith('/work/');
    }
    return currentPath === path;
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FAF8F5]/95 backdrop-blur-xs border-b border-[#E5E2DC] transition-colors">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Zone 1: Single text element wordmark */}
        <button
          onClick={() => handleNavClick('/')}
          className="text-base font-bold tracking-tight text-[#141414] hover:text-[#0D9488] transition-colors cursor-pointer text-left"
          aria-label="Tomori Home"
        >
          TOMORI
        </button>

        {/* Zone 2: Clean text navigation links (Desktop) */}
        <nav className="hidden md:flex items-center gap-8 text-sm" aria-label="Main Navigation">
          {navLinks.map((item) => {
            const active = isActive(item.path);
            return (
              <button
                key={item.path}
                onClick={() => handleNavClick(item.path)}
                className={`relative py-1 transition-colors cursor-pointer ${
                  active
                    ? 'text-[#141414] font-semibold'
                    : 'text-[#66635F] hover:text-[#0D9488] font-normal'
                }`}
              >
                {item.label}
                {active && (
                  <span
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#0D9488]"
                    aria-hidden="true"
                  />
                )}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: Primary action / Direct External Channel */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/nekt-konnekt"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center text-xs font-medium text-[#141414] hover:text-[#0D9488] hover:border-[#0D9488] transition-colors py-1 px-2.5 border border-[#E5E2DC] rounded-none"
          >
            GitHub
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#141414] hover:bg-[#E5E2DC]/50 transition-colors cursor-pointer"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#E5E2DC] bg-[#FAF8F5] px-6 py-6 transition-all">
          <nav className="flex flex-col gap-4 text-base" aria-label="Mobile Navigation">
            {navLinks.map((item) => {
              const active = isActive(item.path);
              return (
                <button
                  key={item.path}
                  onClick={() => handleNavClick(item.path)}
                  className={`flex items-center justify-between py-2 text-left cursor-pointer transition-colors ${
                    active ? 'text-[#141414] font-semibold' : 'text-[#66635F] hover:text-[#0D9488]'
                  }`}
                >
                  <span>{item.label}</span>
                  {active && (
                    <span className="text-xs uppercase tracking-widest text-[#0D9488] font-bold">
                      Current
                    </span>
                  )}
                </button>
              );
            })}

            <div className="pt-4 border-t border-[#E5E2DC] flex items-center justify-between">
              <a
                href="https://github.com/nekt-konnekt"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm font-medium text-[#141414] hover:text-[#0D9488] transition-colors"
              >
                GitHub Profile
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
