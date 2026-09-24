import React from 'react';
import { Project } from '../data/projects';
import { StatusBadge } from './StatusBadge';

interface ProjectItemProps {
  project: Project;
  layout?: 'compact' | 'full';
}

export const ProjectItem: React.FC<ProjectItemProps> = ({ project, layout = 'compact' }) => {
  const hasUrl = Boolean(project.url && project.url.trim().length > 0);

  const handleClick = () => {
    if (hasUrl && project.url) {
      window.open(project.url, '_blank', 'noopener,noreferrer');
    }
  };

  if (layout === 'compact') {
    return (
      <div
        onClick={hasUrl ? handleClick : undefined}
        className={`group py-4 border-b border-[#E5E2DC] flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-6 ${
          hasUrl
            ? 'hover:bg-[#FAF8F5]/80 transition-colors cursor-pointer'
            : 'cursor-default'
        }`}
        role={hasUrl ? 'link' : undefined}
        tabIndex={hasUrl ? 0 : undefined}
        onKeyDown={(e) => hasUrl && e.key === 'Enter' && handleClick()}
        aria-label={hasUrl ? `Open ${project.name}` : project.name}
      >
        <div className="flex-1 min-w-0">
          <div className="flex items-baseline gap-3">
            <h3
              className={`text-base font-semibold tracking-tight text-[#141414] ${
                hasUrl ? 'group-hover:underline group-hover:text-[#0D9488] underline-offset-4 decoration-1 transition-colors' : ''
              }`}
            >
              {project.name}
            </h3>
            <span className="text-xs text-[#8E8B85]">
              {project.category}
            </span>
          </div>
          <p className="text-sm text-[#66635F] mt-0.5 line-clamp-1">
            {project.description}
          </p>
        </div>

        <div className="flex items-center gap-4 sm:gap-6 shrink-0 self-start sm:self-auto pt-1 sm:pt-0">
          <StatusBadge status={project.status} />
          {hasUrl && project.domain ? (
            <span className="text-xs font-mono text-[#141414] group-hover:text-[#0D9488] transition-colors">
              {project.domain} ↗
            </span>
          ) : (
            <span className="text-xs text-[#8E8B85] italic">
              {project.status === 'Prototype' ? 'Prototype' : 'Internal'}
            </span>
          )}
        </div>
      </div>
    );
  }

  // Full detailed archive row
  return (
    <article
      onClick={hasUrl ? handleClick : undefined}
      className={`group py-5 border-b border-[#E5E2DC] grid grid-cols-1 md:grid-cols-12 gap-4 items-start ${
        hasUrl
          ? 'hover:bg-[#F5F3ED]/40 px-2 sm:px-3 -mx-2 sm:-mx-3 transition-colors cursor-pointer'
          : 'px-2 sm:px-3 -mx-2 sm:-mx-3 cursor-default'
      }`}
      tabIndex={hasUrl ? 0 : undefined}
      onKeyDown={(e) => hasUrl && e.key === 'Enter' && handleClick()}
    >
      <div className="md:col-span-4">
        <h3
          className={`text-base sm:text-lg font-bold tracking-tight text-[#141414] ${
            hasUrl ? 'group-hover:underline group-hover:text-[#0D9488] underline-offset-4 decoration-1 transition-colors' : ''
          }`}
        >
          {project.name}
        </h3>
        <div className="flex items-center gap-2 text-xs text-[#66635F] mt-1">
          <span>{project.category}</span>
          <span aria-hidden="true">·</span>
          <span>{project.status}</span>
        </div>
      </div>

      <div className="md:col-span-6">
        <p className="text-sm text-[#141414] leading-relaxed">
          {project.description}
        </p>
      </div>

      <div className="md:col-span-2 md:text-right flex md:flex-col items-center md:items-end justify-between gap-2">
        <StatusBadge status={project.status} />
        {hasUrl && project.domain ? (
          <span className="text-xs font-mono text-[#66635F] group-hover:text-[#0D9488] transition-colors">
            {project.domain} ↗
          </span>
        ) : (
          <span className="text-[11px] text-[#8E8B85] italic">
            Unpublished
          </span>
        )}
      </div>
    </article>
  );
};
