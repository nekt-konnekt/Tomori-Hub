export type ProjectCategory = 'Product' | 'Game' | 'Experiment';
export type ProjectStatus = 'Active / Live' | 'Active / Experiment' | 'Active / Product' | 'Active' | 'Live' | 'Product' | 'Prototype' | 'Beta / Experiment' | 'Experiment' | 'Archived' | string;

export interface Project {
  slug: string;
  name: string;
  description: string;
  category: ProjectCategory;
  status: ProjectStatus;
  url: string | null;
  domain?: string | null;
  image?: string | null;
}

export const INITIAL_PROJECTS: Project[] = [
  // PRODUCTS
  {
    slug: 'ibere',
    name: 'Ibere.work',
    description: 'Employee onboarding platform.',
    category: 'Product',
    status: 'Active / Live',
    url: 'https://ibere.work',
    domain: 'ibere.work',
  },
  {
    slug: 'agba',
    name: 'Agba.work',
    description: 'AI Executive Director.',
    category: 'Product',
    status: 'Active / Experiment',
    url: 'https://agba.work',
    domain: 'agba.work',
  },
  {
    slug: 'iyali',
    name: 'Iyali.work',
    description: 'Digital Family Heritage Platform.',
    category: 'Product',
    status: 'Active / Live',
    url: 'https://iyali.work',
    domain: 'iyali.work',
  },
  {
    slug: 'notify',
    name: 'Notify.i.ng',
    description: 'Condolences and obituaries.',
    category: 'Product',
    status: 'Active / Product',
    url: 'https://notify.i.ng',
    domain: 'notify.i.ng',
  },
  {
    slug: 'konnekt',
    name: 'Konnekt.ng',
    description: 'Leads and business identity.',
    category: 'Product',
    status: 'Product',
    url: 'https://konnekt.ng',
    domain: 'konnekt.ng',
  },
  {
    slug: 'oga-at-dtop',
    name: 'OGA@DTOP',
    description: 'Digital suggestion board.',
    category: 'Product',
    status: 'Live',
    url: 'https://ogaatthe.top',
    domain: 'ogaatthe.top',
  },
  {
    slug: 'nektbooks',
    name: 'NektBooks',
    description: 'Invoice and digital sales book.',
    category: 'Product',
    status: 'Live / Active',
    url: 'https://nektbooks.vercel.app',
    domain: 'nektbooks.vercel.app',
  },

  // GAMES
  {
    slug: 'oga-landlord',
    name: 'OgaLandlord',
    description: 'A landlord-themed Nigerian game.',
    category: 'Game',
    status: 'Active / Live',
    url: 'https://landlords-house.vercel.app/',
    domain: 'landlords-house.vercel.app',
  },
  {
    slug: 'who-knows-naija',
    name: 'Who Knows Naija?',
    description: 'Nigerian trivia game.',
    category: 'Game',
    status: 'Active / Live',
    url: 'https://who-knows-naija.vercel.app/',
    domain: 'who-knows-naija.vercel.app',
  },
  {
    slug: 'danfo-rush',
    name: 'Danfo Rush: Gidi Drift',
    description: 'Nigerian arcade driving game.',
    category: 'Game',
    status: 'Active / Live',
    url: 'https://danfo-rush.vercel.app',
    domain: 'danfo-rush.vercel.app',
  },

  // EXPERIMENTS (OTHER PRODUCTS / EXPERIMENTS)
  {
    slug: 'makiva',
    name: 'Makiva.work',
    description: 'Prototype. Currently houses no meaningful product functionality.',
    category: 'Experiment',
    status: 'Prototype',
    url: null,
    domain: null,
  },
  {
    slug: 'spacia',
    name: 'Spacia',
    description: 'Spatial environment and audio experiment.',
    category: 'Experiment',
    status: 'Beta / Experiment',
    url: null,
    domain: null,
  },
  {
    slug: 'dieselguard',
    name: 'DieselGuard',
    description: 'Diesel fuel telemetry and consumption monitoring experiment.',
    category: 'Experiment',
    status: 'Experiment',
    url: null,
    domain: null,
  },
  {
    slug: 'kinetix',
    name: 'Kinetix',
    description: 'Physics and interactive canvas motion experiment.',
    category: 'Experiment',
    status: 'Experiment',
    url: null,
    domain: null,
  },
  {
    slug: 'construct-by-agba',
    name: 'Construct by Agba',
    description: 'Autonomous specification and software drafting experiment.',
    category: 'Experiment',
    status: 'Experiment',
    url: null,
    domain: null,
  },
];
