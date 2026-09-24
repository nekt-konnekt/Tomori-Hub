import React, { useState } from 'react';
import { useCommandCenter } from '../context/CommandCenterContext';
import { ProjectOgCard } from '../components/ProjectOgCard';
import { ProjectItem } from '../components/ProjectItem';
import { CategoryFilter } from '../components/CategoryFilter';

export const WorkView: React.FC = () => {
  const { projects } = useCommandCenter();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [viewMode, setViewMode] = useState<'cards' | 'list'>('cards');

  const games = projects.filter((p) => p.category === 'Game');
  const products = projects.filter((p) => p.category === 'Product');
  const experiments = projects.filter((p) => p.category === 'Experiment');

  const filterCategories = [
    { id: 'All', label: 'All Work', count: projects.length },
    { id: 'Game', label: 'Games', count: games.length },
    { id: 'Product', label: 'Products', count: products.length },
    { id: 'Experiment', label: 'Experiments', count: experiments.length },
  ];

  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <div className="space-y-12">
      {/* Header */}
      <header className="border-b border-[#E5E2DC] pb-8 pt-4">
        <span className="text-xs uppercase tracking-widest text-[#66635F] font-semibold block mb-2">
          Curated Catalogue
        </span>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#141414] mb-3">
          WORK
        </h1>
        <p className="text-base text-[#66635F] max-w-xl leading-relaxed">
          Digital products, web and mobile games, and software experiments.
        </p>
      </header>

      {/* Filter & View Mode Controls */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <CategoryFilter
          categories={filterCategories}
          selected={selectedCategory}
          onChange={(cat) => setSelectedCategory(cat)}
        />

        <div className="flex items-center gap-4 self-end sm:self-auto text-xs text-[#66635F]">
          <div className="flex items-center border border-[#E5E2DC] p-0.5">
            <button
              onClick={() => setViewMode('cards')}
              className={`px-2.5 py-1 text-xs font-medium cursor-pointer transition-colors ${
                viewMode === 'cards'
                  ? 'bg-[#141414] text-[#FAF8F5]'
                  : 'text-[#66635F] hover:text-[#141414]'
              }`}
            >
              Cards
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`px-2.5 py-1 text-xs font-medium cursor-pointer transition-colors ${
                viewMode === 'list'
                  ? 'bg-[#141414] text-[#FAF8F5]'
                  : 'text-[#66635F] hover:text-[#141414]'
              }`}
            >
              List
            </button>
          </div>

          <span className="tabular-numbers">
            {filteredProjects.length} {filteredProjects.length === 1 ? 'item' : 'items'}
          </span>
        </div>
      </div>

      {/* Projects Display */}
      {selectedCategory === 'All' ? (
        <div className="space-y-16">
          {/* 1. Dedicated Games Section (Strategic Priority) */}
          <section aria-labelledby="cat-games" className="space-y-6">
            <div className="border-b border-[#E5E2DC] pb-3 flex items-baseline justify-between">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#0D9488] font-bold block mb-1">
                  Primary Direction
                </span>
                <h2 id="cat-games" className="text-2xl font-bold tracking-tight text-[#141414]">
                  GAMES
                </h2>
              </div>
              <span className="text-xs text-[#66635F]">
                Web & Mobile Game Mechanics
              </span>
            </div>

            {viewMode === 'cards' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {games.map((project) => (
                  <ProjectOgCard key={project.slug} project={project} />
                ))}
              </div>
            ) : (
              <div className="divide-y divide-[#E5E2DC] border-t border-[#E5E2DC]">
                {games.map((project) => (
                  <ProjectItem key={project.slug} project={project} layout="full" />
                ))}
              </div>
            )}
          </section>

          {/* 2. Products Section */}
          <section aria-labelledby="cat-products" className="space-y-6">
            <div className="border-b border-[#E5E2DC] pb-3 flex items-baseline justify-between">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#66635F] font-semibold block mb-1">
                  Shipped Software
                </span>
                <h2 id="cat-products" className="text-2xl font-bold tracking-tight text-[#141414]">
                  PRODUCTS
                </h2>
              </div>
              <span className="text-xs text-[#66635F]">
                Operational Products & Tools
              </span>
            </div>

            {viewMode === 'cards' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((project) => (
                  <ProjectOgCard key={project.slug} project={project} />
                ))}
              </div>
            ) : (
              <div className="divide-y divide-[#E5E2DC] border-t border-[#E5E2DC]">
                {products.map((project) => (
                  <ProjectItem key={project.slug} project={project} layout="full" />
                ))}
              </div>
            )}
          </section>

          {/* 3. Experiments Section */}
          <section aria-labelledby="cat-experiments" className="space-y-6">
            <div className="border-b border-[#E5E2DC] pb-3 flex items-baseline justify-between">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#66635F] font-semibold block mb-1">
                  Prototypes & Labs
                </span>
                <h2 id="cat-experiments" className="text-2xl font-bold tracking-tight text-[#141414]">
                  EXPERIMENTS
                </h2>
              </div>
              <span className="text-xs text-[#66635F]">
                Unreleased Prototypes & Ideas
              </span>
            </div>

            {viewMode === 'cards' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {experiments.map((project) => (
                  <ProjectOgCard key={project.slug} project={project} />
                ))}
              </div>
            ) : (
              <div className="divide-y divide-[#E5E2DC] border-t border-[#E5E2DC]">
                {experiments.map((project) => (
                  <ProjectItem key={project.slug} project={project} layout="full" />
                ))}
              </div>
            )}
          </section>
        </div>
      ) : (
        /* Filtered single category */
        <div>
          {viewMode === 'cards' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project) => (
                <ProjectOgCard key={project.slug} project={project} />
              ))}
            </div>
          ) : (
            <div className="divide-y divide-[#E5E2DC] border-t border-[#E5E2DC]">
              {filteredProjects.map((project) => (
                <ProjectItem key={project.slug} project={project} layout="full" />
              ))}
            </div>
          )}
        </div>
      )}

      {/* Footer Info */}
      <div className="pt-8 border-t border-[#E5E2DC] text-xs text-[#66635F] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
        <span>Curated catalogue. Verified URLs link directly to live destinations.</span>
        <span>Lagos, Nigeria</span>
      </div>
    </div>
  );
};
