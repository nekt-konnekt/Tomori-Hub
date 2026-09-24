import React, { useState } from 'react';
import { useCommandCenter } from '../context/CommandCenterContext';
import { X, Plus, Download, RefreshCw, Check } from 'lucide-react';
import { IdeaStatus } from '../data/ideas';
import { ProjectStatus } from '../data/projects';

export const CommandCenterModal: React.FC = () => {
  const {
    projects,
    ideas,
    labItems,
    isAdminOpen,
    setIsAdminOpen,
    addIdea,
    updateIdeaStatus,
    updateProjectStatus,
    resetToDefaults,
  } = useCommandCenter();

  const [activeTab, setActiveTab] = useState<'overview' | 'projects' | 'ideas' | 'export'>('overview');
  const [copied, setCopied] = useState(false);

  // New idea form state
  const [newIdeaName, setNewIdeaName] = useState('');
  const [newIdeaDesc, setNewIdeaDesc] = useState('');
  const [newIdeaCategory, setNewIdeaCategory] = useState('Game Mechanics');
  const [newIdeaStatus, setNewIdeaStatus] = useState<IdeaStatus>('Idea');
  const [ideaAddedSuccess, setIdeaAddedSuccess] = useState(false);

  if (!isAdminOpen) return null;

  const handleAddIdeaSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newIdeaName.trim()) return;

    addIdea({
      name: newIdeaName.trim(),
      description: newIdeaDesc.trim(),
      category: newIdeaCategory,
      status: newIdeaStatus,
    });

    setNewIdeaName('');
    setNewIdeaDesc('');
    setIdeaAddedSuccess(true);
    setTimeout(() => setIdeaAddedSuccess(false), 2000);
  };

  const handleCopyJSON = () => {
    const bundle = {
      exportedAt: new Date().toISOString(),
      builder: 'Tomori (Lagos, Nigeria)',
      projects,
      ideas,
      labItems,
    };
    navigator.clipboard.writeText(JSON.stringify(bundle, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-[#141414]/70 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="command-center-title"
    >
      <div className="bg-[#FAF8F5] text-[#141414] border border-[#141414] w-full max-w-3xl max-h-[90vh] flex flex-col shadow-2xl">
        {/* Header */}
        <div className="p-5 border-b border-[#E5E2DC] flex items-center justify-between">
          <div>
            <span className="text-[10px] uppercase tracking-widest text-[#66635F] block">
              Architectural Control Layer · V1
            </span>
            <h2 id="command-center-title" className="text-base font-bold tracking-tight text-[#141414]">
              Product Command Center
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsAdminOpen(false)}
              className="p-1.5 text-[#141414] hover:bg-[#E5E2DC] transition-colors cursor-pointer"
              aria-label="Close Command Center"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Tab Controls */}
        <div className="px-5 pt-3 border-b border-[#E5E2DC] flex gap-4 text-xs">
          {[
            { id: 'overview', label: 'Hub Overview' },
            { id: 'projects', label: 'Project Metadata' },
            { id: 'ideas', label: 'Quick Post Idea' },
            { id: 'export', label: 'Data & Supabase Schema' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as typeof activeTab)}
              className={`pb-2.5 transition-colors cursor-pointer ${
                activeTab === tab.id
                  ? 'border-b-2 border-[#141414] font-semibold text-[#141414]'
                  : 'text-[#66635F] hover:text-[#141414]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6 text-sm">
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <div className="p-4 border border-[#E5E2DC] bg-[#F7F5EE]">
                <p className="text-xs text-[#66635F] leading-relaxed">
                  This command center represents the local operating layer for Tomori's digital products, games, and experiments. In V1, state resides in typed memory with localStorage persistence, pre-architected for seamless Supabase or cloud synchronization.
                </p>
              </div>

              {/* Operating Metrics */}
              <div>
                <span className="text-xs uppercase tracking-wider text-[#66635F] block mb-3 font-medium">
                  Operational Registry
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <div className="p-4 border border-[#E5E2DC]">
                    <span className="text-xs text-[#66635F] block">Active Builds</span>
                    <span className="text-2xl font-bold tabular-numbers">
                      {projects.filter((p) => p.status === 'Active').length}
                    </span>
                    <span className="text-[11px] text-[#8E8B85] block mt-0.5">Danfo Rush & Iyali</span>
                  </div>
                  <div className="p-4 border border-[#E5E2DC]">
                    <span className="text-xs text-[#66635F] block">Shipped / Live</span>
                    <span className="text-2xl font-bold tabular-numbers">
                      {projects.filter((p) => p.status === 'Live').length}
                    </span>
                    <span className="text-[11px] text-[#8E8B85] block mt-0.5">Ibere, Agba, Konnekt</span>
                  </div>
                  <div className="p-4 border border-[#E5E2DC]">
                    <span className="text-xs text-[#66635F] block">Lab Experiments</span>
                    <span className="text-2xl font-bold tabular-numbers">{labItems.length}</span>
                    <span className="text-[11px] text-[#8E8B85] block mt-0.5">Games & AI scripts</span>
                  </div>
                  <div className="p-4 border border-[#E5E2DC]">
                    <span className="text-xs text-[#66635F] block">Ideas Backlog</span>
                    <span className="text-2xl font-bold tabular-numbers">{ideas.length}</span>
                    <span className="text-[11px] text-[#8E8B85] block mt-0.5">Public notebook</span>
                  </div>
                </div>
              </div>

              <div className="border-t border-[#E5E2DC] pt-4 flex items-center justify-between text-xs text-[#66635F]">
                <span>Identity: "I build digital products, games and experiments with AI."</span>
                <button
                  onClick={resetToDefaults}
                  className="inline-flex items-center gap-1 text-[#66635F] hover:text-[#141414] underline cursor-pointer"
                >
                  <RefreshCw className="w-3 h-3" />
                  <span>Reset to factory data</span>
                </button>
              </div>
            </div>
          )}

          {activeTab === 'projects' && (
            <div className="space-y-4">
              <p className="text-xs text-[#66635F]">
                Adjust status values across the central registry. Updates persist immediately across the public Work, Lab, and Home views.
              </p>
              <div className="divide-y divide-[#E5E2DC] border border-[#E5E2DC]">
                {projects.map((proj) => (
                  <div key={proj.slug} className="p-3 flex items-center justify-between gap-4">
                    <div>
                      <span className="font-semibold block text-[#141414]">{proj.name}</span>
                      <span className="text-xs text-[#66635F]">
                        {proj.category} · {proj.domain || 'Unlinked'}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <select
                        value={proj.status}
                        onChange={(e) => updateProjectStatus(proj.slug, e.target.value as ProjectStatus)}
                        className="text-xs p-1.5 border border-[#141414] bg-[#FAF8F5] cursor-pointer"
                      >
                        <option value="Active">Active</option>
                        <option value="Live">Live</option>
                        <option value="Experiment">Experiment</option>
                        <option value="Archived">Archived</option>
                        <option value="Idea">Idea</option>
                      </select>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'ideas' && (
            <div className="space-y-4">
              <p className="text-xs text-[#66635F]">
                Quickly deposit raw product or game concepts into the public notebook.
              </p>
              <form onSubmit={handleAddIdeaSubmit} className="space-y-3 border border-[#E5E2DC] p-4 bg-[#F7F5EE]">
                <div>
                  <label className="block text-xs font-semibold uppercase text-[#141414] mb-1">
                    Concept Name
                  </label>
                  <input
                    type="text"
                    required
                    value={newIdeaName}
                    onChange={(e) => setNewIdeaName(e.target.value)}
                    placeholder="e.g. Lagos Bus Route Graph"
                    className="w-full text-xs p-2 border border-[#141414] bg-white text-[#141414]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase text-[#141414] mb-1">
                    One-line Description
                  </label>
                  <input
                    type="text"
                    required
                    value={newIdeaDesc}
                    onChange={(e) => setNewIdeaDesc(e.target.value)}
                    placeholder="Turn crowdsourced bus stops into an offline GTFS feed."
                    className="w-full text-xs p-2 border border-[#141414] bg-white text-[#141414]"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold uppercase text-[#141414] mb-1">
                      Category
                    </label>
                    <input
                      type="text"
                      value={newIdeaCategory}
                      onChange={(e) => setNewIdeaCategory(e.target.value)}
                      className="w-full text-xs p-2 border border-[#141414] bg-white text-[#141414]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase text-[#141414] mb-1">
                      Initial Status
                    </label>
                    <select
                      value={newIdeaStatus}
                      onChange={(e) => setNewIdeaStatus(e.target.value as IdeaStatus)}
                      className="w-full text-xs p-2 border border-[#141414] bg-white text-[#141414] cursor-pointer"
                    >
                      <option value="Idea">Idea</option>
                      <option value="Exploring">Exploring</option>
                      <option value="Testing">Testing</option>
                      <option value="Building">Building</option>
                      <option value="Killed">Killed</option>
                    </select>
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#141414] text-[#FAF8F5] text-xs font-semibold uppercase tracking-wider hover:opacity-80 transition-opacity cursor-pointer"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Append to Ideas</span>
                  </button>

                  {ideaAddedSuccess && (
                    <span className="inline-flex items-center gap-1 text-xs font-medium text-[#141414]">
                      <Check className="w-4 h-4" /> Added to Notebook
                    </span>
                  )}
                </div>
              </form>

              {/* Existing ideas quick-status toggle */}
              <div className="pt-2">
                <span className="text-xs uppercase tracking-wider text-[#66635F] block mb-2 font-medium">
                  Current Notebook Entries
                </span>
                <div className="divide-y divide-[#E5E2DC] border border-[#E5E2DC] max-h-48 overflow-y-auto">
                  {ideas.map((idea) => (
                    <div key={idea.slug} className="p-2.5 flex items-center justify-between gap-2 text-xs">
                      <div className="min-w-0 flex-1">
                        <span className="font-semibold block truncate text-[#141414]">{idea.name}</span>
                        <span className="text-[11px] text-[#66635F] truncate block">{idea.description}</span>
                      </div>
                      <select
                        value={idea.status}
                        onChange={(e) => updateIdeaStatus(idea.slug, e.target.value as IdeaStatus)}
                        className="text-[11px] p-1 border border-[#141414] bg-[#FAF8F5] cursor-pointer"
                      >
                        <option value="Idea">Idea</option>
                        <option value="Exploring">Exploring</option>
                        <option value="Testing">Testing</option>
                        <option value="Building">Building</option>
                        <option value="Killed">Killed</option>
                      </select>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'export' && (
            <div className="space-y-4">
              <p className="text-xs text-[#66635F] leading-relaxed">
                The data architecture has been designed cleanly so you can export the full current registry state or wire it directly to Supabase tables (e.g. <code>projects</code>, <code>ideas</code>, <code>lab_experiments</code>).
              </p>

              <div className="flex items-center gap-3">
                <button
                  onClick={handleCopyJSON}
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#141414] text-[#FAF8F5] text-xs font-semibold uppercase tracking-wider hover:opacity-80 transition-opacity cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>{copied ? 'Copied to Clipboard!' : 'Copy Entire JSON State'}</span>
                </button>
              </div>

              <div className="border border-[#E5E2DC] p-3 bg-[#141414] text-[#FAF8F5] text-xs font-mono overflow-x-auto max-h-60">
                <pre>{JSON.stringify({ projectsCount: projects.length, ideasCount: ideas.length, labCount: labItems.length, timestamp: new Date().toISOString() }, null, 2)}</pre>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-[#E5E2DC] flex items-center justify-between text-xs text-[#66635F]">
          <span>Tomori Product Command Center · Lagos</span>
          <button
            onClick={() => setIsAdminOpen(false)}
            className="px-3 py-1.5 border border-[#141414] text-[#141414] font-medium hover:bg-[#141414] hover:text-[#FAF8F5] transition-colors cursor-pointer"
          >
            Close Panel
          </button>
        </div>
      </div>
    </div>
  );
};
