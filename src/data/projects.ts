export type ProjectCategory = 'Product' | 'Game' | 'Experiment';
export type ProjectStatus = string;

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
  { slug:'iyali', name:'Iyali.work', description:'Conversational family history & lineage builder. Capturing stories, oral traditions, and kinship relationships on an interactive canvas.', category:'Product', status:'Active / Live', url:'https://iyali.work', domain:'iyali.work' },
  { slug:'ibere', name:'Ibere.work', description:'Run employee onboarding through Telegram. Set up workflows, invite hires via chat links, and eliminate HR chasing before Day 1.', category:'Product', status:'Active / Live', url:'https://ibere.work', domain:'ibere.work' },
  { slug:'agba', name:'Agba.work', description:'Executive intelligence for growing businesses. Connects signals across operations, sales, and finance into daily briefs before issues escalate.', category:'Product', status:'Active / Live', url:'https://agba.work', domain:'agba.work' },
  { slug:'notify', name:'Notify.i.ng', description:'Condolences and obituaries.', category:'Product', status:'Active / Product', url:'https://notify.i.ng', domain:'notify.i.ng' },
  { slug:'konnekt', name:'Konnekt.ng', description:'Leads and business identity.', category:'Product', status:'Product', url:'https://konnekt.ng', domain:'konnekt.ng' },
  { slug:'makiva', name:'Makiva.work', description:'Prototype. Currently houses no meaningful product functionality.', category:'Experiment', status:'Prototype', url:'https://makiva.work', domain:'makiva.work' },
  { slug:'oga-at-dtop', name:'OGA@DTOP', description:'Digital suggestion board.', category:'Product', status:'Live', url:'https://ogaatthe.top', domain:'ogaatthe.top' },
  { slug:'nektbooks', name:'NektBooks', description:'Invoice and digital sales book.', category:'Product', status:'Live / Active', url:'https://nektbooks.vercel.app', domain:'nektbooks.vercel.app' },
  { slug:'oga-landlord', name:'OgaLandlord', description:'A landlord-themed Nigerian game.', category:'Game', status:'Active / Live', url:'https://landlords-house.vercel.app/', domain:'landlords-house.vercel.app' },
  { slug:'who-knows-naija', name:'Who Knows Naija?', description:'Fast-paced Nigerian trivia game. 1v1 live duels, 36 states conquest map, and real-time Firestore leaderboards across Afrobeats, Slang, History, and Food.', category:'Game', status:'Active / Live', url:'https://who-knows-naija.vercel.app/', domain:'who-knows-naija.vercel.app' },
  { slug:'danfo-rush', name:'Danfo Rush: Gidi Drift', description:'Nigerian arcade driving game.', category:'Game', status:'Active / Live', url:'https://danfo-rush.vercel.app', domain:'danfo-rush.vercel.app' },
  { slug:'spacia', name:'Spacia', description:'Experiment.', category:'Experiment', status:'Beta / Experiment', url:'https://spacia-beta.vercel.app/', domain:'spacia-beta.vercel.app' },
  { slug:'dieselguard', name:'DieselGuard', description:'Experiment.', category:'Experiment', status:'Experiment', url:'https://dieselguard-4lfqvpdb.manus.space/', domain:'dieselguard-4lfqvpdb.manus.space' },
  { slug:'trustlink', name:'TrustLink', description:'Payment verification widget for online vendors.', category:'Experiment', status:'Prototype / Live Test', url:'https://trustlink-huekhsw8.manus.space/', domain:'trustlink-huekhsw8.manus.space' },
  { slug:'kinetix', name:'Kinetix', description:'Experiment.', category:'Experiment', status:'Experiment', url:null, domain:null },
  { slug:'construct-by-agba', name:'Construct by Agba', description:'Experiment.', category:'Experiment', status:'Experiment', url:null, domain:null },
];
