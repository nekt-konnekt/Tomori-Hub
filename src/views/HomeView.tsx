import React from 'react';
import { useNavigation } from '../context/NavigationContext';
import { useCommandCenter } from '../context/CommandCenterContext';
import { ProjectOgCard } from '../components/ProjectOgCard';
import { DirectChannels } from '../components/DirectChannels';
import { StatusBadge } from '../components/StatusBadge';
import { Project } from '../data/projects';

export const HomeView: React.FC = () => {
  const { navigate } = useNavigation();
  const { projects, ideas, labItems } = useCommandCenter();

  // NOW projects: Prioritize Danfo Rush: Gidi Drift and Iyali.work
  const nowProjects = [
    projects.find((p) => p.slug === 'danfo-rush'),
    projects.find((p) => p.slug === 'iyali'),
  ].filter(Boolean) as Project[];

  // Selected featured live products & games for the homepage
  const featuredShipped = projects.filter(
    (p) =>
      p.url !== null &&
      p.slug !== 'danfo-rush' &&
      p.slug !== 'iyali' &&
      (p.slug === 'oga-landlord' ||
        p.slug === 'who-knows-naija' ||
        p.slug === 'ibere' ||
        p.slug === 'agba' ||
        p.slug === 'notify' ||
        p.slug === 'oga-at-dtop')
  );

  const labPreview = labItems.slice(0, 3);
  const ideasPreview = ideas.slice(0, 3);

  return (
    <div className="space-y-20 sm:space-y-28">
      {/* 1. HERO SECTION */}
      <section className="pt-6 sm:pt-12 pb-8 border-b border-[#E5E2DC]">
        <div className="max-w-3xl space-y-6">
          <span className="text-xs uppercase tracking-widest text-[#66635F] font-semibold block">
            TOMORI
          </span>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#141414] leading-[1.08] text-balance">
            I build digital products, games and experiments with AI.
          </h1>

          <p className="text-base sm:text-lg text-[#66635F] leading-relaxed max-w-2xl">
            Independent builder exploring software, games and new ideas from Lagos.
          </p>

          {/* Quick links to primary sections */}
          <div className="pt-2 flex flex-wrap items-center gap-6 text-sm">
            <button
              onClick={() => navigate('/work')}
              className="text-[#141414] font-medium hover:text-[#0D9488] transition-colors underline underline-offset-4 decoration-1 cursor-pointer"
            >
              Work
            </button>
            <span className="text-[#E5E2DC]" aria-hidden="true">/</span>
            <button
              onClick={() => navigate('/lab')}
              className="text-[#141414] font-medium hover:text-[#0D9488] transition-colors underline underline-offset-4 decoration-1 cursor-pointer"
            >
              Lab
            </button>
            <span className="text-[#E5E2DC]" aria-hidden="true">/</span>
            <button
              onClick={() => navigate('/ideas')}
              className="text-[#141414] font-medium hover:text-[#0D9488] transition-colors underline underline-offset-4 decoration-1 cursor-pointer"
            >
              Ideas
            </button>
            <span className="text-[#E5E2DC]" aria-hidden="true">/</span>
            <button
              onClick={() => navigate('/about')}
              className="text-[#66635F] font-normal hover:text-[#0D9488] transition-colors cursor-pointer"
            >
              About
            </button>
          </div>
        </div>
      </section>

      {/* 2. NOW SECTION — Prioritize Danfo Rush: Gidi Drift & Iyali.work */}
      <section aria-labelledby="now-heading" className="space-y-6">
        <div className="flex items-baseline justify-between border-b border-[#E5E2DC] pb-3">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#0D9488] font-bold block mb-1">
              Current Focus
            </span>
            <h2 id="now-heading" className="text-2xl font-bold tracking-tight text-[#141414]">
              NOW
            </h2>
          </div>
          <span className="text-xs text-[#66635F] hidden sm:block">
            Actively being developed in Lagos
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {nowProjects.map((project) => (
            <ProjectOgCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      {/* 3. BUILT SECTION — Shipped Products & Games */}
      <section aria-labelledby="built-heading" className="space-y-6">
        <div className="flex items-baseline justify-between border-b border-[#E5E2DC] pb-3">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#66635F] font-semibold block mb-1">
              Shipped Work
            </span>
            <h2 id="built-heading" className="text-2xl font-bold tracking-tight text-[#141414]">
              BUILT
            </h2>
          </div>
          <button
            onClick={() => navigate('/work')}
            className="text-xs font-semibold text-[#141414] hover:text-[#0D9488] transition-colors underline underline-offset-4 decoration-1 cursor-pointer"
          >
            View Full Catalogue ({projects.length})
          </button>
        </div>

        <p className="text-sm text-[#66635F]">
          Shipped products, games, and platforms with verified live deployments.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredShipped.map((project) => (
            <ProjectOgCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      {/* 4. LAB SECTION — Experimental work */}
      <section aria-labelledby="lab-heading" className="space-y-6">
        <div className="flex items-baseline justify-between border-b border-[#E5E2DC] pb-3">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#66635F] font-semibold block mb-1">
              Explorations
            </span>
            <h2 id="lab-heading" className="text-2xl font-bold tracking-tight text-[#141414]">
              LAB
            </h2>
          </div>
          <button
            onClick={() => navigate('/lab')}
            className="text-xs font-semibold text-[#141414] hover:text-[#0D9488] transition-colors underline underline-offset-4 decoration-1 cursor-pointer"
          >
            All Lab Experiments ({labItems.length})
          </button>
        </div>

        <p className="text-sm text-[#66635F]">
          AI-assisted experiments, games and explorations.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {labPreview.map((item) => (
            <div
              key={item.id}
              onClick={() => navigate('/lab')}
              className="p-5 border border-[#E5E2DC] bg-[#FAF8F5] hover:border-[#141414] transition-colors cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-[#8E8B85] mb-2">
                  <span>{item.category}</span>
                  <span className="tabular-numbers">{item.year}</span>
                </div>
                <h3 className="text-base font-semibold tracking-tight text-[#141414] mb-1">
                  {item.title}
                </h3>
                <p className="text-xs text-[#66635F] leading-relaxed line-clamp-3">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-[#E5E2DC] flex items-center justify-between text-[11px] text-[#66635F]">
                <span>{item.status}</span>
                <span className="underline underline-offset-2 hover:text-[#0D9488]">Explore</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. IDEAS SECTION — Small preview of idea backlog */}
      <section aria-labelledby="ideas-heading" className="space-y-6">
        <div className="flex items-baseline justify-between border-b border-[#E5E2DC] pb-3">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#66635F] font-semibold block mb-1">
              Public Notebook
            </span>
            <h2 id="ideas-heading" className="text-2xl font-bold tracking-tight text-[#141414]">
              IDEAS
            </h2>
          </div>
          <button
            onClick={() => navigate('/ideas')}
            className="text-xs font-semibold text-[#141414] hover:text-[#0D9488] transition-colors underline underline-offset-4 decoration-1 cursor-pointer"
          >
            Open Backlog ({ideas.length})
          </button>
        </div>

        <p className="text-sm text-[#66635F]">
          Things I might build. Some will happen. Most won't.
        </p>

        <div className="divide-y divide-[#E5E2DC] border-t border-b border-[#E5E2DC]">
          {ideasPreview.map((idea) => (
            <div
              key={idea.slug}
              onClick={() => navigate('/ideas')}
              className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-6 hover:bg-[#F5F3ED]/60 px-2 sm:px-3 -mx-2 sm:-mx-3 transition-colors cursor-pointer"
            >
              <div>
                <h3 className="text-sm font-semibold tracking-tight text-[#141414]">
                  {idea.name}
                </h3>
                <p className="text-xs text-[#66635F] mt-0.5">
                  {idea.description}
                </p>
              </div>

              <div className="flex items-center gap-4 shrink-0 self-start sm:self-auto">
                <span className="text-xs text-[#8E8B85]">
                  {idea.category}
                </span>
                <StatusBadge status={idea.status} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. CONCISE DIRECT CHANNELS / CONTACT SECTION */}
      <section aria-labelledby="channels-heading" className="space-y-4 pt-4 border-t border-[#E5E2DC]">
        <div className="flex items-baseline justify-between">
          <h2 id="channels-heading" className="text-xs uppercase tracking-widest font-semibold text-[#141414]">
            Direct Channels
          </h2>
          <span className="text-xs text-[#66635F]">
            Lagos, Nigeria
          </span>
        </div>

        <DirectChannels layout="list" />
      </section>
    </div>
  );
};
