export type IdeaStatus = 'Idea' | 'Exploring' | 'Testing' | 'Building' | 'Killed';

export interface Idea {
  slug: string;
  name: string;
  description: string;
  category: string;
  status: IdeaStatus;
  date: string;
  notes?: string;
}

export const INITIAL_IDEAS: Idea[] = [
  {
    slug: 'danfo-traffic-protocol',
    name: 'Danfo Multi-lane Traffic Protocol',
    description: 'Procedural obstacle and traffic wave generation modeled after Third Mainland Bridge rush-hour dynamics.',
    category: 'Game Mechanics',
    status: 'Building',
    date: '2026-03-08',
    notes: 'Testing cellular automata road grid in WebGL to simulate chaotic danfo lane-switching.'
  },
  {
    slug: 'trustlink',
    name: 'TrustLink',
    description: 'A payment verification widget for social-commerce vendors.',
    category: 'Fintech / Commerce',
    status: 'Exploring',
    date: '2026-02-14',
    notes: 'Eliminates screenshot fraud by validating bank transfer webhooks against merchant reference IDs.'
  },
  {
    slug: 'reddit-marketing-intelligence-tool',
    name: 'Reddit marketing intelligence tool',
    description: 'Turn recurring Reddit conversations into structured market intelligence.',
    category: 'AI / Market Intelligence',
    status: 'Testing',
    date: '2026-01-20',
    notes: 'Scrapes niche subreddits for unmet product frustrations and clusters them into actionable PRD prompts.'
  },
  {
    slug: 'voice-to-prd-lagos',
    name: 'Voice-to-PRD Pipeline',
    description: 'Bespoke transcription tuned to West African English and Pidgin, converting messy voice notes into formal specs.',
    category: 'AI Tooling',
    status: 'Testing',
    date: '2026-01-05',
    notes: 'Evaluating Whisper fine-tuning vs prompt calibration on top of Gemini 2.5 Flash.'
  },
  {
    slug: 'offline-family-audio-journal',
    name: 'Offline-First Oral Audio Journal',
    description: 'Ultra-compressed local audio journaling that synchronizes to decentralized storage when Wi-Fi connects.',
    category: 'Product',
    status: 'Idea',
    date: '2025-11-18',
    notes: 'Low-bandwidth resilience module for the Iyali family archive project.'
  },
  {
    slug: 'ussd-micro-invoicing-gateway',
    name: 'Micro-Invoicing via USSD/SMS Webhooks',
    description: 'Instant payment requests triggered via simple feature-phone text commands for artisans without smartphones.',
    category: 'System',
    status: 'Killed',
    date: '2025-08-10',
    notes: 'Telco aggregator pricing and regulatory aggregator red tape made unit economics unsustainable for solo builder.'
  }
];
