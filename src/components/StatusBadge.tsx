import React from 'react';
import { ProjectStatus } from '../data/projects';
import { IdeaStatus } from '../data/ideas';

interface StatusBadgeProps {
  status: ProjectStatus | IdeaStatus | string;
  showIndicator?: boolean;
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({ status, showIndicator = true }) => {
  // Two-tone system with restrained turquoise signal for active/live state
  const getIndicatorStyle = () => {
    switch (status) {
      case 'Active':
      case 'Building':
        return 'bg-[#0D9488]';
      case 'Live':
      case 'Testing':
        return 'bg-[#0D9488] ring-1 ring-[#0D9488]/40';
      case 'Experiment':
      case 'Exploring':
        return 'border border-[#141414] bg-transparent';
      case 'Archived':
      case 'Killed':
        return 'bg-[#8E8B85]';
      case 'Idea':
      default:
        return 'border border-[#8E8B85] bg-transparent';
    }
  };

  return (
    <span className="inline-flex items-center gap-1.5 text-xs font-medium text-[#141414] tracking-tight">
      {showIndicator && (
        <span
          className={`w-1.5 h-1.5 rounded-full inline-block shrink-0 ${getIndicatorStyle()}`}
          aria-hidden="true"
        />
      )}
      <span className="capitalize">{status}</span>
    </span>
  );
};
