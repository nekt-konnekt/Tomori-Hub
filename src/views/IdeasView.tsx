import React, { useState } from 'react';
import { useCommandCenter } from '../context/CommandCenterContext';
import { StatusBadge } from '../components/StatusBadge';
import { IdeaStatus } from '../data/ideas';
import { Plus } from 'lucide-react';

export const IdeasView: React.FC = () => {
  const { ideas, setIsAdminOpen } = useCommandCenter();
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const filterOptions = [
    { id: 'All', label: 'All Entries', count: ideas.length },
    { id: 'Building', label: 'Building', count: ideas.filter((i) => i.status === 'Building').length },
    { id: 'Testing', label: 'Testing', count: ideas.filter((i) => i.status === 'Testing').length },
    { id: 'Exploring', label: 'Exploring', count: ideas.filter((i) => i.status === 'Exploring').length },
    { id: 'Idea', label: 'Idea', count: ideas.filter((i) => i.status === 'Idea').length },
    { id: 'Killed', label: 'Killed', count: ideas.filter((i) => i.status === 'Killed').length },
  ];

  const filteredIdeas = activeFilter === 'All'
    ? ideas
    : ideas.filter((i) => i.status === activeFilter);

  return (
    <div className="space-y-12">
      {/* Header */}
      <header className="border-b border-[#E5E2DC] pb-8 pt-4">
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#66635F] font-semibold block mb-2">
              Public Notebook
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#141414] mb-3">
              IDEAS
            </h1>
            <p className="text-base sm:text-lg text-[#66635F] max-w-xl leading-relaxed">
              Things I might build. Some will happen. Most won't.
            </p>
          </div>

          <button
            onClick={() => setIsAdminOpen(true)}
            className="inline-flex items-center gap-2 px-3 py-2 border border-[#141414] text-xs font-semibold text-[#141414] hover:bg-[#141414] hover:text-[#FAF8F5] transition-colors self-start sm:self-auto cursor-pointer"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Add to Notebook</span>
          </button>
        </div>
      </header>

      {/* Filter Row */}
      <div className="flex flex-wrap items-center gap-1 p-1 border border-[#E5E2DC] bg-[#FAF8F5] max-w-fit">
        {filterOptions.map((opt) => (
          <button
            key={opt.id}
            onClick={() => setActiveFilter(opt.id)}
            className={`px-3 py-1.5 text-xs font-medium transition-colors cursor-pointer whitespace-nowrap ${
              activeFilter === opt.id
                ? 'bg-[#141414] text-[#FAF8F5]'
                : 'text-[#66635F] hover:text-[#141414] hover:bg-[#F2EFE9]'
            }`}
          >
            <span>{opt.label}</span>
            <span className={`ml-1.5 text-[10px] tabular-numbers ${activeFilter === opt.id ? 'text-[#A3A19C]' : 'text-[#8E8B85]'}`}>
              ({opt.count})
            </span>
          </button>
        ))}
      </div>

      {/* Public Notebook Entries */}
      <div className="divide-y divide-[#E5E2DC] border-t border-b border-[#E5E2DC]">
        {filteredIdeas.map((idea) => (
          <article
            key={idea.slug}
            className="py-6 grid grid-cols-1 md:grid-cols-12 gap-4 items-start hover:bg-[#F5F3ED]/40 px-3 -mx-3 transition-colors"
          >
            <div className="md:col-span-4">
              <h2 className="text-base font-bold tracking-tight text-[#141414]">
                {idea.name}
              </h2>
              <div className="flex items-center gap-2 text-xs text-[#66635F] mt-1">
                <span>{idea.category}</span>
                <span aria-hidden="true">·</span>
                <span className="tabular-numbers">{idea.date}</span>
              </div>
            </div>

            <div className="md:col-span-6 space-y-2">
              <p className="text-sm text-[#141414] leading-relaxed">
                {idea.description}
              </p>
              {idea.notes && (
                <p className="text-xs text-[#66635F] bg-[#F7F5EE] p-2 border border-[#E5E2DC]">
                  <span className="font-semibold text-[#141414] mr-1">Log:</span>
                  {idea.notes}
                </p>
              )}
            </div>

            <div className="md:col-span-2 md:text-right flex md:flex-col items-center md:items-end justify-between gap-2">
              <StatusBadge status={idea.status} />
            </div>
          </article>
        ))}
      </div>

      {/* Footer Notebook Disclaimer */}
      <div className="pt-4 text-xs text-[#66635F] max-w-xl">
        <p>
          This is an unvarnished scratchpad. Concepts are regularly pruned, merged, or retired when unit economics or interest wanes.
        </p>
      </div>
    </div>
  );
};
