/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { NavigationProvider, useNavigation } from './context/NavigationContext';
import { CommandCenterProvider, useCommandCenter } from './context/CommandCenterContext';
import { SiteHeader } from './components/SiteHeader';
import { SiteFooter } from './components/SiteFooter';
import { FloatingControls } from './components/FloatingControls';
import { HomeView } from './views/HomeView';
import { WorkView } from './views/WorkView';
import { ProjectDetailView } from './views/ProjectDetailView';
import { LabView } from './views/LabView';
import { IdeasView } from './views/IdeasView';
import { AboutView } from './views/AboutView';
import { CommandCenterModal } from './components/CommandCenterModal';

const AppContent: React.FC = () => {
  const { currentPath, selectedSlug } = useNavigation();
  const { projects } = useCommandCenter();

  // Dynamic document title update per route
  useEffect(() => {
    if (selectedSlug) {
      const proj = projects.find((p) => p.slug === selectedSlug);
      document.title = proj ? `${proj.name} — Tomori` : 'Project — Tomori';
    } else if (currentPath === '/work') {
      document.title = 'Work Archive — Tomori';
    } else if (currentPath === '/lab') {
      document.title = 'Lab & Experiments — Tomori';
    } else if (currentPath === '/ideas') {
      document.title = 'Ideas Public Notebook — Tomori';
    } else if (currentPath === '/about') {
      document.title = 'About Tomori — Digital Product Builder';
    } else {
      document.title = 'Tomori | Digital Products, Games & AI';
    }
  }, [currentPath, selectedSlug, projects]);

  const renderCurrentView = () => {
    if (selectedSlug) {
      return <ProjectDetailView slug={selectedSlug} />;
    }

    switch (currentPath) {
      case '/work':
        return <WorkView />;
      case '/lab':
        return <LabView />;
      case '/ideas':
        return <IdeasView />;
      case '/about':
        return <AboutView />;
      case '/':
      default:
        return <HomeView />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#141414]">
      {/* Site Header */}
      <SiteHeader />

      {/* Main Content Area */}
      <main className="flex-1 max-w-5xl w-full mx-auto px-6 py-8 sm:py-12">
        {renderCurrentView()}
      </main>

      {/* Editorial Footer */}
      <SiteFooter />

      {/* Floating Controls (Back to Top + WhatsApp) */}
      <FloatingControls />

      {/* Architectural Control Layer Modal */}
      <CommandCenterModal />
    </div>
  );
};

export default function App() {
  return (
    <NavigationProvider>
      <CommandCenterProvider>
        <AppContent />
      </CommandCenterProvider>
    </NavigationProvider>
  );
}
