import React from 'react';
import { useNavigation } from '../context/NavigationContext';
import { useCommandCenter } from '../context/CommandCenterContext';
import { StatusBadge } from '../components/StatusBadge';
import { ProjectOgCard } from '../components/ProjectOgCard';

interface ProjectDetailViewProps {
  slug: string;
}

export const ProjectDetailView: React.FC<ProjectDetailViewProps> = ({ slug }) => {
  const { navigate } = useNavigation();
  const { projects } = useCommandCenter();

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="py-24 text-center space-y-4">
        <h2 className="text-2xl font-bold tracking-tight text-[#141414]">
          Project Not Found
        </h2>
        <p className="text-sm text-[#66635F]">
          The project slug "{slug}" does not exist in the catalogue.
        </p>
        <button
          onClick={() => navigate('/work')}
          className="text-xs font-semibold uppercase tracking-wider underline underline-offset-4 decoration-1 hover:text-[#0D9488] transition-colors cursor-pointer"
        >
          Back to Work Catalogue
        </button>
      </div>
    );
  }

  const hasUrl = Boolean(project.url && project.url.trim().length > 0);

  return (
    <article className="space-y-12">
      {/* Top back navigation */}
      <div>
        <button
          onClick={() => navigate('/work')}
          className="inline-flex items-center text-xs font-medium text-[#66635F] hover:text-[#0D9488] transition-colors cursor-pointer"
        >
          <span>← Back to Work Catalogue</span>
        </button>
      </div>

      {/* Hero Header */}
      <header className="border-b border-[#E5E2DC] pb-8 space-y-4">
        <div className="flex items-center gap-3">
          <span className="text-xs uppercase tracking-widest text-[#0D9488] font-bold">
            {project.category}
          </span>
          <span className="text-xs text-[#8E8B85]">/</span>
          <StatusBadge status={project.status} />
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#141414]">
          {project.name}
        </h1>

        <p className="text-lg text-[#66635F] max-w-2xl leading-relaxed">
          {project.description}
        </p>
      </header>

      {/* Project Card Showcase */}
      <div className="max-w-xl">
        <ProjectOgCard project={project} />
      </div>

      {/* Destination action */}
      {hasUrl && project.url && (
        <div className="pt-4">
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 bg-[#141414] text-[#FAF8F5] text-xs font-bold uppercase tracking-wider hover:bg-[#0D9488] transition-colors"
          >
            <span>Visit Live Destination</span>
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      )}
    </article>
  );
};
