import React, { useEffect, useMemo, useState } from 'react';
import { ArrowUp, Github, Mail, MessageCircle } from 'lucide-react';
import { INITIAL_PROJECTS, Project } from './data/projects';
import { SEOHead } from './components/SEOHead';

type Route = '/' | '/work' | '/lab' | '/ideas' | '/about';

const accentFor: Record<string, string> = {
  ibere: 'yellow',
  agba: 'turquoise',
  iyali: 'pink',
  notify: 'blue',
  konnekt: 'green',
  'oga-at-dtop': 'yellow',
  nektbooks: 'orange',
  'oga-landlord': 'pink',
  'who-knows-naija': 'blue',
  'danfo-rush': 'turquoise',
  makiva: 'green',
  spacia: 'blue',
  dieselguard: 'orange',
  kinetix: 'pink',
  'construct-by-agba': 'yellow',
};

const featured = ['danfo-rush', 'iyali', 'ibere', 'who-knows-naija'];
const productSlugs = ['ibere', 'agba', 'iyali', 'notify', 'konnekt', 'oga-at-dtop', 'nektbooks'];
const gameSlugs = ['oga-landlord', 'who-knows-naija', 'danfo-rush'];
const experimentSlugs = ['makiva', 'spacia', 'dieselguard', 'kinetix', 'construct-by-agba'];

function navigate(path: string) {
  window.history.pushState({}, '', path);
  window.dispatchEvent(new PopStateEvent('popstate'));
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function usePath() {
  const [path, setPath] = useState(window.location.pathname);
  useEffect(() => {
    const onPop = () => setPath(window.location.pathname);
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);
  return path;
}

function getProject(slug: string) {
  return INITIAL_PROJECTS.find((project) => project.slug === slug);
}

function PaperTag({ children, tone = 'yellow', rotate = 0 }: { children: React.ReactNode; tone?: string; rotate?: number }) {
  return (
    <span className={`paper-tag tone-${tone}`} style={{ transform: `rotate(${rotate}deg)` }}>
      {children}
    </span>
  );
}

function ProjectVisual({ project, large = false }: { project: Project; large?: boolean }) {
  const tone = accentFor[project.slug] || 'turquoise';
  return (
    <div className={`project-visual tone-${tone} ${large ? 'project-visual-large' : ''}`}>
      <div className="tape tape-a" />
      <div className="tape tape-b" />
      <div className="mock-window">
        <div className="mock-topbar">
          <span className="mock-dot red" />
          <span className="mock-dot yellow" />
          <span className="mock-dot green" />
          <span className="mock-address">{project.domain || 'experiment.local'}</span>
        </div>
        <div className="mock-body">
          <div className="mock-kicker">{project.category}</div>
          <div className="mock-title">{project.name}</div>
          <div className="mock-lines">
            <i /><i /><i />
          </div>
          <div className="mock-blocks">
            <span />
            <span />
            <span />
          </div>
          {project.category === 'Game' && <div className="mock-road"><b /><b /><b /></div>}
        </div>
      </div>
      <span className="scribble visual-note">{project.category === 'Game' ? 'PLAY IT' : 'MADE THIS'}</span>
    </div>
  );
}

function ProjectCard({ project, featuredCard = false }: { project: Project; featuredCard?: boolean }) {
  const linked = Boolean(project.url);
  const content = (
    <>
      <ProjectVisual project={project} large={featuredCard} />
      <div className="project-card-copy">
        <div className="project-meta">
          <span>{project.category}</span>
          <span>{project.status}</span>
        </div>
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        <div className="project-domain">
          {project.domain || 'Prototype / no public link'}
        </div>
      </div>
    </>
  );

  if (linked) {
    return (
      <a className={`project-card ${featuredCard ? 'project-card-featured' : ''}`} href={project.url!} target="_blank" rel="noreferrer">
        {content}
      </a>
    );
  }

  return <article className={`project-card project-card-unlinked ${featuredCard ? 'project-card-featured' : ''}`}>{content}</article>;
}

function DirectChannels() {
  return (
    <section className="channels section-shell">
      <div className="section-label"><span>DIRECT CHANNELS</span><PaperTag tone="turquoise" rotate={-2}>no middleman</PaperTag></div>
      <div className="channel-grid">
        <a href="https://github.com/nekt-konnekt" target="_blank" rel="noreferrer"><Github /> <span>GitHub<small>nekt-konnekt</small></span></a>
        <a href="https://x.com/tomori_olakunle" target="_blank" rel="noreferrer"><span className="x-mark">X</span> <span>X<small>@tomori_olakunle</small></span></a>
        <a href="mailto:Tomoriolakunle@gmail.com"><Mail /> <span>Email<small>Tomoriolakunle@gmail.com</small></span></a>
      </div>
    </section>
  );
}

function SiteHeader({ path }: { path: string }) {
  const tabs = [
    ['/', 'HOME'],
    ['/work', 'WORK'],
    ['/lab', 'LAB'],
    ['/ideas', 'IDEAS'],
    ['/about', 'ABOUT'],
  ];
  return (
    <header className="site-header">
      <div className="window-dots"><span /><span /><span /></div>
      <button className="brand-tab" onClick={() => navigate('/')} aria-label="Tomori home">T</button>
      <nav>
        {tabs.map(([href, label]) => (
          <button key={href} className={path === href ? 'nav-tab active' : 'nav-tab'} onClick={() => navigate(href)}>{label}</button>
        ))}
      </nav>
      <a className="contact-tab" href="https://wa.me/7079925455" target="_blank" rel="noreferrer">CONTACT</a>
    </header>
  );
}

function FloatingControls() {
  const [showTop, setShowTop] = useState(false);
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 500);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <>
      <a className="whatsapp-float" href="https://wa.me/7079925455" target="_blank" rel="noreferrer" aria-label="Chat with Tomori on WhatsApp"><MessageCircle size={24} /></a>
      {showTop && <button className="top-float" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Back to top"><ArrowUp size={20} /></button>}
    </>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-note">
        <span className="scribble">still building...</span>
        <h2>TOMORI</h2>
        <p>Lagos, Nigeria · {new Date().getFullYear()}</p>
      </div>
      <div className="footer-links">
        <div><strong>DIRECT CHANNELS</strong><a href="https://github.com/nekt-konnekt" target="_blank" rel="noreferrer">GitHub</a><a href="https://x.com/tomori_olakunle" target="_blank" rel="noreferrer">X</a><a href="mailto:Tomoriolakunle@gmail.com">Email</a></div>
        <div><strong>AROUND HERE</strong><button onClick={() => navigate('/work')}>Work</button><button onClick={() => navigate('/lab')}>Lab</button><button onClick={() => navigate('/ideas')}>Ideas</button><button onClick={() => navigate('/about')}>About</button></div>
      </div>
    </footer>
  );
}

function HomeView() {
  const projects = useMemo(() => INITIAL_PROJECTS, []);
  const featuredProjects = featured.map(getProject).filter(Boolean) as Project[];
  return (
    <div className="page">
      <SEOHead
        title="Tomori — Digital Products, Games & AI | Lagos, Nigeria"
        description="Tomori Olakunle builds digital products, arcade games, and software experiments with AI from Lagos, Nigeria. Explore live projects, games, and prototypes."
        path="/"
        type="website"
      />
      <section className="hero section-shell">
        <div className="hero-note note-left"><PaperTag tone="green" rotate={-4}>MADE THINGS</PaperTag></div>
        <div className="hero-note note-right"><PaperTag tone="yellow" rotate={3}>BREAKS THINGS</PaperTag></div>
        <span className="scribble hero-top">my name is</span>
        <div className="name-plate">
          <span className="tape tape-a" /><span className="tape tape-b" />
          <h1>TOMORI</h1>
        </div>
        <div className="hero-status"><span className="status-dot" /> BUILDING FROM LAGOS</div>
        <h2>I build digital products, games<br className="desktop-only" /> and experiments with AI.</h2>
        <p>Independent builder exploring software, games and weird ideas. The medium is changing. The making isn't.</p>
        <div className="hero-actions">
          <button className="ink-button" onClick={() => navigate('/work')}>SEE WHAT I BUILT</button>
          <a className="paper-link" href="https://wa.me/7079925455" target="_blank" rel="noreferrer">LET'S TALK</a>
        </div>
        <span className="scribble hero-side hero-side-a">web / mobile / games</span>
        <span className="scribble hero-side hero-side-b">AI-assisted</span>
      </section>

      <section className="about-strip section-shell">
        <div className="section-label"><span>WHAT'S UP</span><PaperTag tone="pink" rotate={2}>CURRENTLY BUILDING</PaperTag></div>
        <div className="about-collage">
          <div className="photo-frame fake-photo portrait-photo">
            <img
              src="/tomori.jpg"
              alt="Tomori Olakunle"
              loading="eager"
              referrerPolicy="no-referrer"
              onError={(e) => {
                const target = e.currentTarget;
                if (!target.src.includes('googleusercontent.com')) {
                  target.src = 'https://lh3.googleusercontent.com/d/1zrkP8o_u0cF3lFJ9UvSvCF3EIrVwP6JP';
                } else if (!target.src.endsWith('/tomori-portrait.svg')) {
                  target.src = '/tomori-portrait.svg';
                }
              }}
            />
            <span>lagos / 2026</span>
          </div>
          <div className="about-copy">
            <h2>I like making complicated things feel playable.</h2>
            <p>I started around product, operations and business systems. These days I'm increasingly interested in games, AI-assisted development and shipping strange little products that solve real problems.</p>
            <div className="skill-tags">
              <PaperTag tone="turquoise" rotate={-1}>PRODUCT</PaperTag>
              <PaperTag tone="yellow" rotate={2}>AI</PaperTag>
              <PaperTag tone="pink" rotate={-2}>GAME DEV</PaperTag>
              <PaperTag tone="green" rotate={1}>WEB</PaperTag>
              <PaperTag tone="blue" rotate={-1}>MOBILE</PaperTag>
            </div>
          </div>
          <div className="photo-frame fake-photo side-photo"><div>01</div><span>things I ship</span></div>
        </div>
      </section>

      <section className="featured section-shell">
        <div className="section-heading">
          <span className="scribble">selected pages from the notebook</span>
          <h2>THINGS I BUILT</h2>
        </div>
        <div className="featured-stack">
          {featuredProjects.map((project, index) => <ProjectCard key={project.slug} project={project} featuredCard={index < 2} />)}
        </div>
      </section>

      <section className="work-preview section-shell">
        <div className="section-label"><span>THE SHELF</span><PaperTag tone="yellow" rotate={-2}>{projects.length} PROJECTS</PaperTag></div>
        <div className="mini-grid">
          {projects.filter(p => !featured.includes(p.slug) && p.category !== 'Experiment').map(project => <ProjectCard key={project.slug} project={project} />)}
        </div>
        <button className="outline-button" onClick={() => navigate('/work')}>SEE THE WHOLE SHELF</button>
      </section>

      <section className="games-callout section-shell">
        <div className="games-paper">
          <span className="scribble">yes, games too.</span>
          <h2>I MAKE GAMES<br /><em>NOW.</em></h2>
          <p>Web first. Mobile next. AI-assisted all the way down.</p>
          <button className="ink-button" onClick={() => navigate('/lab')}>ENTER THE PLAYGROUND</button>
          <div className="game-sticker">PLAY<br />MODE</div>
        </div>
      </section>

      <DirectChannels />
    </div>
  );
}

function WorkView() {
  const [filter, setFilter] = useState<'All' | 'Product' | 'Game' | 'Experiment'>('All');
  const filtered = INITIAL_PROJECTS.filter(p => filter === 'All' || p.category === filter);
  return (
    <div className="page interior-page">
      <SEOHead
        title="Work & Shipped Projects | Tomori — Digital Products, Games & AI"
        description="Archive and catalogue of software, digital products, and games built by Tomori Olakunle in Lagos, Nigeria."
        path="/work"
        type="website"
        schema={{
          '@type': 'CollectionPage',
          name: 'Work & Projects by Tomori',
          description: 'Archive of digital products, applications, and games.',
          url: 'https://tomori.build/work',
        }}
      />
      <section className="page-intro section-shell">
        <span className="scribble">archive / catalogue / receipts</span>
        <h1>WORK</h1>
        <p>Things I've built, shipped, tested, broken and kept around.</p>
        <div className="filter-tabs">
          {(['All', 'Product', 'Game', 'Experiment'] as const).map(item => <button key={item} className={filter === item ? 'filter active' : 'filter'} onClick={() => setFilter(item)}>{item}</button>)}
        </div>
      </section>
      <section className="work-grid section-shell">{filtered.map(project => <ProjectCard key={project.slug} project={project} />)}</section>
      <DirectChannels />
    </div>
  );
}

function LabView() {
  const games = gameSlugs.map(getProject).filter(Boolean) as Project[];
  const experiments = experimentSlugs.map(getProject).filter(Boolean) as Project[];
  return (
    <div className="page interior-page">
      <SEOHead
        title="Lab & Game Playground | Tomori — Digital Products, Games & AI"
        description="Experiments in AI-assisted development, Nigerian games, and interactive software prototypes built by Tomori."
        path="/lab"
        type="website"
        schema={{
          '@type': 'CollectionPage',
          name: 'Lab & Game Playground',
          description: 'Games and AI-assisted development experiments by Tomori Olakunle.',
          url: 'https://tomori.build/lab',
        }}
      />
      <section className="page-intro section-shell lab-intro">
        <PaperTag tone="turquoise" rotate={-2}>PLAYGROUND</PaperTag>
        <span className="scribble">things get weird here</span>
        <h1>LAB</h1>
        <p>Experiments in AI-assisted development, games and ideas that haven't decided what they want to be yet.</p>
      </section>
      <section className="section-shell lab-games">
        <div className="section-heading"><span className="scribble">current obsession</span><h2>GAMES</h2></div>
        <div className="game-grid">{games.map((game, i) => <ProjectCard key={game.slug} project={game} featuredCard={i === 2} />)}</div>
      </section>
      <section className="section-shell">
        <div className="section-heading"><span className="scribble">still poking at these</span><h2>PLAYGROUND</h2></div>
        <div className="mini-grid">{experiments.map(project => <ProjectCard key={project.slug} project={project} />)}</div>
      </section>
      <DirectChannels />
    </div>
  );
}

function IdeasView() {
  const ideas = [
    ['TrustLink', 'Payment verification widget for social-commerce vendors.', 'Testing', 'turquoise'],
    ['Reddit intelligence', 'Turn recurring Reddit conversations into market intelligence.', 'Exploring', 'yellow'],
    ['More Nigerian games', 'Small games with local mechanics, humour and culture.', 'Building', 'pink'],
    ['Unknown thing #04', 'There is probably another idea hiding in a notebook somewhere.', 'Idea', 'green'],
  ];
  return (
    <div className="page interior-page">
      <SEOHead
        title="Ideas & Public Notebook | Tomori — Digital Products, Games & AI"
        description="Public notebook of upcoming software concepts, product ideas, and game mechanics being explored by Tomori."
        path="/ideas"
        type="website"
        schema={{
          '@type': 'CollectionPage',
          name: 'Ideas & Public Notebook',
          description: 'Ideas and concepts in development by Tomori Olakunle.',
          url: 'https://tomori.build/ideas',
        }}
      />
      <section className="page-intro section-shell">
        <span className="scribble">public notebook / no promises</span>
        <h1>IDEAS</h1>
        <p>Some will ship. Some will die here. That's normal.</p>
      </section>
      <section className="idea-wall section-shell">
        {ideas.map(([title, copy, status, tone], i) => (
          <article key={title} className="idea-note" style={{ transform: `rotate(${i % 2 ? 2 : -2}deg)` }}>
            <PaperTag tone={tone}>{status}</PaperTag>
            <h2>{title}</h2>
            <p>{copy}</p>
            <span className="idea-pin">•</span>
          </article>
        ))}
      </section>
      <DirectChannels />
    </div>
  );
}

function StackSection() {
  const stack = [
    { name: 'Claude', note: 'code + AI', icon: 'claude' },
    { name: 'ChatGPT', note: '+ Codex', icon: 'openai' },
    { name: 'Google AI Studio', note: 'AI builds', icon: 'googleai' },
    { name: 'Cursor', note: 'AI editor', icon: 'cursor' },
    { name: 'VS Code', note: 'editor', icon: 'visualstudiocode' },
    { name: 'Photoshop', note: 'visuals', icon: 'adobephotoshop' },
    { name: 'Python', note: 'code', icon: 'python' },
    { name: 'JavaScript', note: 'web', icon: 'javascript' },
    { name: 'HTML5', note: 'web', icon: 'html5' },
    { name: 'GitHub', note: 'receipts', icon: 'github' },
  ];

  return (
    <section className="stack-section">
      <div className="section-heading stack-heading">
        <span className="scribble">the tools behind the things</span>
        <h2>THE STACK</h2>
        <p>I use whatever helps me get the thing from idea to shipped.</p>
      </div>
      <div className="stack-grid">
        {stack.map((tool, index) => (
          <div className="stack-card" key={tool.name} style={{ transform: `rotate(${index % 3 === 0 ? -1 : index % 3 === 1 ? 1 : -0.5}deg)` }}>
            <div className="stack-icon">
              <img
                src={`https://cdn.simpleicons.org/${tool.icon}`}
                alt=""
                loading="lazy"
              />
            </div>
            <div>
              <strong>{tool.name}</strong>
              <span>{tool.note}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function AboutView() {
  return (
    <div className="page interior-page">
      <SEOHead
        title="About Tomori | Independent Digital Product Builder & Game Developer"
        description="Meet Tomori Olakunle, an independent builder from Lagos exploring AI, web development, and games. Discover his background, stack, and story."
        path="/about"
        type="profile"
        schema={{
          '@type': 'ProfilePage',
          name: 'About Tomori Olakunle',
          url: 'https://tomori.build/about',
          mainEntity: {
            '@type': 'Person',
            name: 'Tomori Olakunle',
            jobTitle: 'Digital Product Builder & Game Developer',
            image: 'https://lh3.googleusercontent.com/d/1zrkP8o_u0cF3lFJ9UvSvCF3EIrVwP6JP',
            url: 'https://tomori.build',
            sameAs: [
              'https://x.com/tomori_olakunle',
              'https://github.com/nekt-konnekt',
              'mailto:Tomoriolakunle@gmail.com',
            ],
          },
        }}
      />
      <section className="about-page section-shell">
        <span className="scribble">a little context</span>
        <h1>ABOUT</h1>
        <div className="about-page-grid">
          <div>
            <h2>I build things because I want to see if they work.</h2>
            <p>I'm Tomori, an independent builder from Lagos. My work has moved through product design, operations, business systems and software. The current rabbit hole is AI-assisted web and mobile game development.</p>
            <p>I still build tailored systems when the problem is worth solving, but business solutions are no longer the centre of the story.</p>
          </div>
          <div className="timeline-note">
            <PaperTag tone="yellow" rotate={-2}>THE ROUTE</PaperTag>
            <div>PRODUCT</div><b>↓</b><div>OPERATIONS</div><b>↓</b><div>SOFTWARE</div><b>↓</b><div>AI</div><b>↓</b><div>GAMES</div>
          </div>
        </div>
      </section>
      <StackSection />
      <DirectChannels />
      <section className="contact-paper section-shell">
        <span className="scribble">got something worth making?</span>
        <h2>LET'S TALK.</h2>
        <div><a className="ink-button inline-button" href="mailto:Tomoriolakunle@gmail.com">EMAIL ME</a><a className="outline-button inline-button" href="https://wa.me/7079925455" target="_blank" rel="noreferrer">WHATSAPP</a></div>
      </section>
    </div>
  );
}

function ProjectDetailView({ project }: { project: Project }) {
  const schema = {
    '@type': project.category === 'Game' ? 'VideoGame' : 'SoftwareApplication',
    name: project.name,
    description: project.description,
    applicationCategory: project.category === 'Game' ? 'GameApplication' : 'BusinessApplication',
    operatingSystem: 'All',
    author: {
      '@type': 'Person',
      name: 'Tomori Olakunle',
      url: 'https://tomori.build',
    },
    url: project.url || `https://tomori.build/work/${project.slug}`,
  };

  return (
    <div className="page interior-page">
      <SEOHead
        title={`${project.name} — ${project.category} | Tomori`}
        description={`${project.description} Built by Tomori Olakunle in Lagos, Nigeria.`}
        path={`/work/${project.slug}`}
        type="article"
        schema={schema}
      />
      <section className={`project-detail-hero section-shell tone-${accentFor[project.slug] || 'turquoise'}`}>
        <span className="scribble">case file / {project.category.toLowerCase()}</span>
        <h1>{project.name}</h1>
        <p>{project.description}</p>
        <div className="detail-meta"><PaperTag tone={accentFor[project.slug] || 'turquoise'}>{project.status}</PaperTag><span>{project.domain || 'No public URL'}</span></div>
        <ProjectVisual project={project} large />
        {project.url && <a className="ink-button" href={project.url} target="_blank" rel="noreferrer">OPEN PROJECT</a>}
      </section>
      <section className="case-study section-shell">
        <div><span className="scribble">the short version</span><h2>WHAT I BUILT</h2></div>
        <p>{project.description} This is part of Tomori's ongoing collection of software, games and experiments. The portfolio deliberately keeps the description factual rather than inventing traction or outcomes.</p>
      </section>
      <section className="case-study section-shell">
        <div><span className="scribble">status check</span><h2>WHERE IT IS</h2></div>
        <p>{project.status}. {project.url ? 'The project has a public destination linked above.' : 'There is no verified public destination yet.'}</p>
      </section>
      <DirectChannels />
    </div>
  );
}

function App() {
  const path = usePath();
  const project = path.startsWith('/work/') ? getProject(path.split('/')[2]) : undefined;
  const route = (['/', '/work', '/lab', '/ideas', '/about'] as string[]).includes(path) ? path as Route : '/';
  return (
    <>
      <SiteHeader path={route} />
      <main>{project ? <ProjectDetailView project={project} /> : route === '/' ? <HomeView /> : route === '/work' ? <WorkView /> : route === '/lab' ? <LabView /> : route === '/ideas' ? <IdeasView /> : <AboutView />}</main>
      <Footer />
      <FloatingControls />
    </>
  );
}

export default App;
