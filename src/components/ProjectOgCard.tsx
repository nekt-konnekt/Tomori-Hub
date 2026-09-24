import React, { useState } from 'react';
import { Project } from '../data/projects';

interface ProjectOgCardProps {
  project: Project;
  className?: string;
}

export const ProjectOgCard: React.FC<ProjectOgCardProps> = ({
  project,
  className = '',
}) => {
  const [imageError, setImageError] = useState(false);
  const hasUrl = Boolean(project.url && project.url.trim().length > 0);
  const isGame = project.category === 'Game';

  const handleCardClick = () => {
    if (hasUrl && project.url) {
      window.open(project.url, '_blank', 'noopener,noreferrer');
    }
  };

  const hasValidImage = Boolean(project.image && !imageError);

  return (
    <article
      onClick={hasUrl ? handleCardClick : undefined}
      className={`group border border-[#E5E2DC] bg-[#FAF8F5] transition-all flex flex-col justify-between ${
        hasUrl
          ? 'hover:border-[#141414] cursor-pointer'
          : 'cursor-default opacity-95'
      } ${className}`}
      role={hasUrl ? 'link' : undefined}
      tabIndex={hasUrl ? 0 : undefined}
      onKeyDown={(e) => hasUrl && e.key === 'Enter' && handleCardClick()}
      aria-label={hasUrl ? `Open ${project.name}` : project.name}
    >
      {/* Rectangular Image Space (16:9 ratio).
          Uses the exact image that came with the product if available;
          if not, leaves the space empty without any fake generated banners. */}
      <div className="w-full aspect-[16/9] border-b border-[#E5E2DC] bg-[#FAF8F5] relative overflow-hidden">
        {hasValidImage ? (
          <img
            src={project.image!}
            alt={project.name}
            className="w-full h-full object-cover"
            loading="lazy"
            onError={() => setImageError(true)}
          />
        ) : null}
      </div>

      {/* Content Metadata Block */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-1.5">
          <div className="flex items-baseline justify-between gap-2">
            <h3
              className={`text-base sm:text-lg font-bold tracking-tight text-[#141414] ${
                hasUrl
                  ? 'group-hover:underline underline-offset-4 decoration-1'
                  : ''
              }`}
            >
              {project.name}
            </h3>
            <span className="text-[11px] text-[#66635F] shrink-0 font-medium">
              {project.status}
            </span>
          </div>

          <p className="text-xs sm:text-sm text-[#66635F] leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Bottom Row */}
        <div className="pt-3 border-t border-[#E5E2DC] flex items-center justify-between text-xs">
          {hasUrl && project.domain ? (
            <div className="flex items-center gap-1.5 text-[#141414] font-medium group-hover:text-[#0D9488] transition-colors">
              <span>{project.domain}</span>
              <span
                className="text-[#8E8B85] group-hover:text-[#0D9488] transition-colors"
                aria-hidden="true"
              >
                ↗
              </span>
            </div>
          ) : (
            <span className="text-[11px] text-[#8E8B85] italic">
              {project.status === 'Prototype'
                ? 'Prototype · No live destination'
                : 'Internal experiment'}
            </span>
          )}

          {isGame && hasUrl && (
            <span className="px-2 py-0.5 bg-[#141414] text-[#FAF8F5] text-[10px] font-bold uppercase tracking-wider group-hover:bg-[#0D9488] transition-colors">
              PLAY
            </span>
          )}
        </div>
      </div>
    </article>
  );
};
