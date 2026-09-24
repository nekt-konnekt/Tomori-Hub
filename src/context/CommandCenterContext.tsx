import React, { createContext, useContext, useState, useEffect } from 'react';
import { Project, INITIAL_PROJECTS } from '../data/projects';
import { Idea, INITIAL_IDEAS, IdeaStatus } from '../data/ideas';
import { LabItem, LAB_EXPERIMENTS } from '../data/lab';

interface CommandCenterContextType {
  projects: Project[];
  ideas: Idea[];
  labItems: LabItem[];
  isAdminOpen: boolean;
  setIsAdminOpen: (open: boolean) => void;
  addIdea: (idea: Omit<Idea, 'slug' | 'date'>) => void;
  updateIdeaStatus: (slug: string, newStatus: IdeaStatus) => void;
  updateProjectStatus: (slug: string, newStatus: Project['status']) => void;
  resetToDefaults: () => void;
}

const STORAGE_KEYS = {
  PROJECTS: 'tomori_portfolio_projects_v1',
  IDEAS: 'tomori_portfolio_ideas_v1',
};

const CommandCenterContext = createContext<CommandCenterContextType | null>(null);

export const CommandCenterProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [projects, setProjects] = useState<Project[]>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem(STORAGE_KEYS.PROJECTS);
      if (saved) {
        try {
          return JSON.parse(saved);
        } catch {
          // ignore corrupted data
        }
      }
    }
    return INITIAL_PROJECTS;
  });

  const [ideas, setIdeas] = useState<Idea[]>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem(STORAGE_KEYS.IDEAS);
      if (saved) {
        try {
          return JSON.parse(saved);
        } catch {
          // ignore corrupted data
        }
      }
    }
    return INITIAL_IDEAS;
  });

  const [labItems] = useState<LabItem[]>(LAB_EXPERIMENTS);
  const [isAdminOpen, setIsAdminOpen] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.PROJECTS, JSON.stringify(projects));
    } catch {
      // Storage unavailable
    }
  }, [projects]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.IDEAS, JSON.stringify(ideas));
    } catch {
      // Storage unavailable
    }
  }, [ideas]);

  const addIdea = (newIdeaData: Omit<Idea, 'slug' | 'date'>) => {
    const slug = newIdeaData.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    const today = new Date().toISOString().split('T')[0];
    const newIdea: Idea = {
      ...newIdeaData,
      slug,
      date: today,
    };
    setIdeas((prev) => [newIdea, ...prev]);
  };

  const updateIdeaStatus = (slug: string, newStatus: IdeaStatus) => {
    setIdeas((prev) =>
      prev.map((idea) => (idea.slug === slug ? { ...idea, status: newStatus } : idea))
    );
  };

  const updateProjectStatus = (slug: string, newStatus: Project['status']) => {
    setProjects((prev) =>
      prev.map((proj) => (proj.slug === slug ? { ...proj, status: newStatus } : proj))
    );
  };

  const resetToDefaults = () => {
    setProjects(INITIAL_PROJECTS);
    setIdeas(INITIAL_IDEAS);
    localStorage.removeItem(STORAGE_KEYS.PROJECTS);
    localStorage.removeItem(STORAGE_KEYS.IDEAS);
  };

  return (
    <CommandCenterContext.Provider
      value={{
        projects,
        ideas,
        labItems,
        isAdminOpen,
        setIsAdminOpen,
        addIdea,
        updateIdeaStatus,
        updateProjectStatus,
        resetToDefaults,
      }}
    >
      {children}
    </CommandCenterContext.Provider>
  );
};

export const useCommandCenter = () => {
  const context = useContext(CommandCenterContext);
  if (!context) {
    throw new Error('useCommandCenter must be used within a CommandCenterProvider');
  }
  return context;
};
