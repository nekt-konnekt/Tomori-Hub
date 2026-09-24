import React from 'react';
import { X } from 'lucide-react';
import { DanfoArcade } from './DanfoArcade';

interface ArcadeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ArcadeModal: React.FC<ArcadeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-[#141414]/85 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label="Danfo Rush Arcade Simulator"
    >
      <div className="bg-[#FAF8F5] border border-[#141414] max-w-xl w-full max-h-[92vh] overflow-y-auto flex flex-col shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#E5E2DC] px-5 py-3.5 bg-[#FAF8F5] sticky top-0 z-10">
          <div className="flex items-baseline gap-2">
            <span className="font-bold text-base text-[#141414] uppercase tracking-tight">
              Danfo Rush
            </span>
            <span className="text-xs text-[#0D9488] font-mono">
              60 FPS // CANVAS
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1 text-[#66635F] hover:text-[#141414] hover:bg-[#E5E2DC]/50 transition-colors cursor-pointer"
            aria-label="Close Arcade"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Game Canvas Container */}
        <div className="p-4 sm:p-6">
          <DanfoArcade embedded={true} />
        </div>
      </div>
    </div>
  );
};
