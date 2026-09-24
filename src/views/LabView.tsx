import React from 'react';
import { useCommandCenter } from '../context/CommandCenterContext';
import { StatusBadge } from '../components/StatusBadge';

export const LabView: React.FC = () => {
  const { labItems } = useCommandCenter();

  return (
    <div className="space-y-12">
      {/* Header */}
      <header className="border-b border-[#E5E2DC] pb-8 pt-4">
        <span className="text-xs uppercase tracking-widest text-[#66635F] font-semibold block mb-2">
          Technical Explorations
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#141414] mb-3">
          LAB
        </h1>
        <p className="text-base sm:text-lg text-[#66635F] max-w-2xl leading-relaxed">
          Unreleased prototypes, technical experiments and internal tools.
        </p>
      </header>

      {/* Real Experiments Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {labItems.map((item) => (
          <article
            key={item.id}
            className="p-6 border border-[#E5E2DC] bg-[#FAF8F5] flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs">
                <span className="text-[#8E8B85] uppercase tracking-wider font-semibold">
                  {item.category}
                </span>
                <StatusBadge status={item.status} />
              </div>

              <div>
                <h2 className="text-lg font-bold tracking-tight text-[#141414]">
                  {item.title}
                </h2>
                <p className="text-xs sm:text-sm text-[#66635F] leading-relaxed mt-2">
                  {item.description}
                </p>
              </div>

              {item.takeaway && (
                <div className="p-3 bg-[#F7F5EE] border border-[#E5E2DC] text-xs">
                  <span className="text-[10px] uppercase font-bold text-[#8E8B85] block mb-1">
                    Status Note
                  </span>
                  <p className="text-[#141414] leading-normal">{item.takeaway}</p>
                </div>
              )}
            </div>

            <div className="pt-4 mt-6 border-t border-[#E5E2DC] flex items-center justify-between text-xs text-[#8E8B85]">
              <span>Internal Prototype</span>
              <span>{item.year || '2026'}</span>
            </div>
          </article>
        ))}
      </div>

      {/* Honest Disclaimer */}
      <div className="pt-4 text-xs text-[#66635F] max-w-xl">
        <p>
          These are real technical experiments and early prototypes. They are not presented as mature production products and contain no fabricated traction or public destinations.
        </p>
      </div>
    </div>
  );
};
