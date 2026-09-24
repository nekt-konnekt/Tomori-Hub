export interface LabItem {
  id: string;
  title: string;
  description: string;
  category: 'Experiment' | 'Prototype';
  status: string;
  year?: string;
  tech?: string[];
  takeaway?: string;
}

export const LAB_EXPERIMENTS: LabItem[] = [
  {
    id: 'makiva',
    title: 'Makiva.work',
    description: 'Prototype. Currently houses no meaningful product functionality.',
    category: 'Prototype',
    status: 'Prototype',
    year: '2026',
    takeaway: 'Early structural prototype; currently paused without active user-facing functionality.',
  },
  {
    id: 'spacia',
    title: 'Spacia',
    description: 'Spatial environment and audio experiment.',
    category: 'Experiment',
    status: 'Beta / Experiment',
    year: '2026',
    takeaway: 'Testing spatial UI and audio interaction models.',
  },
  {
    id: 'dieselguard',
    title: 'DieselGuard',
    description: 'Diesel fuel telemetry and consumption monitoring experiment.',
    category: 'Experiment',
    status: 'Experiment',
    year: '2025',
    takeaway: 'Sensor telemetry and fuel burn tracking prototype.',
  },
  {
    id: 'kinetix',
    title: 'Kinetix',
    description: 'Physics and motion experiment.',
    category: 'Experiment',
    status: 'Experiment',
    year: '2025',
    takeaway: 'Testing canvas physics and motion calculation routines.',
  },
  {
    id: 'construct-by-agba',
    title: 'Construct by Agba',
    description: 'Autonomous specification and software drafting experiment.',
    category: 'Experiment',
    status: 'Experiment',
    year: '2026',
    takeaway: 'Drafting structured technical requirements and architectures with AI models.',
  },
];
