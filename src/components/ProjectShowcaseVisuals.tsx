import React, { useState } from 'react';
import { Project } from '../data/projects';
import { ExternalLink, Play, RotateCcw, Check, Sparkles, Send, ShieldCheck, UserCheck, CheckCircle2 } from 'lucide-react';

interface ShowcaseProps {
  project: Project;
  large?: boolean;
}

export function IyaliVisual({ large = false }: { large?: boolean }) {
  const [activeTab, setActiveTab] = useState<'preview' | 'tree' | 'features'>('preview');

  return (
    <div className={`showcase-container iyali-theme ${large ? 'showcase-large' : ''}`}>
      {/* Top bar simulating browser header */}
      <div className="showcase-topbar">
        <div className="showcase-dots">
          <span className="dot red" />
          <span className="dot yellow" />
          <span className="dot green" />
        </div>
        <div className="showcase-url-pill">iyali.work</div>
        <div className="showcase-tab-pills">
          <button
            type="button"
            className={activeTab === 'preview' ? 'active' : ''}
            onClick={(e) => { e.preventDefault(); e.stopPropagation(); setActiveTab('preview'); }}
          >
            Hero
          </button>
          <button
            type="button"
            className={activeTab === 'tree' ? 'active' : ''}
            onClick={(e) => { e.preventDefault(); e.stopPropagation(); setActiveTab('tree'); }}
          >
            Canvas
          </button>
          <button
            type="button"
            className={activeTab === 'features' ? 'active' : ''}
            onClick={(e) => { e.preventDefault(); e.stopPropagation(); setActiveTab('features'); }}
          >
            Lineage
          </button>
        </div>
      </div>

      {/* Screen Body */}
      <div className="showcase-screen iyali-screen">
        {activeTab === 'preview' && (
          <div className="iyali-hero-flow">
            <div className="iyali-brand-strip">
              <span className="iyali-logo">IYALI</span>
              <div className="iyali-nav-badges">
                <span className="iyali-tag">AI FAMILY HERITAGE</span>
                <span className="iyali-pill">FREE 3 GENS</span>
              </div>
            </div>

            <div className="iyali-headline-box">
              <span className="iyali-kicker">[ 01 • CONVERSATIONAL ARCHIVE ]</span>
              <h4 className="iyali-main-title">
                KNOW YOUR FAMILY.<br />
                <span>PRESERVE ITS STORY.</span>
              </h4>
              <p className="iyali-desc">
                Build your family history through conversation. Capturing stories, oral traditions, and the generations that connect you.
              </p>
            </div>

            <div className="iyali-action-row">
              <span className="iyali-btn">
                <Sparkles size={12} className="inline mr-1 text-black" /> CREATE FAMILY TREE →
              </span>
              <span className="iyali-demo-chip">LIVE DEMO</span>
            </div>

            {/* Tree Sandbox Snippet */}
            <div className="iyali-mini-canvas">
              <div className="canvas-header">
                <span className="green-dot" /> LIVE CANVAS SANDBOX
              </div>
              <div className="canvas-tree-nodes">
                <div className="tree-node selected">
                  <strong>Tuani Adeleke</strong>
                  <small>Patriarch • 1908</small>
                </div>
                <div className="tree-line" />
                <div className="tree-node">
                  <strong>Folashade Adeleke</strong>
                  <small>Matriarch • 1912</small>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'tree' && (
          <div className="iyali-tree-flow">
            <div className="canvas-badge-row">
              <span className="iyali-pill active-pill">ANCESTORS</span>
              <span className="iyali-pill">PARENTS</span>
              <span className="iyali-pill">GEN 0</span>
            </div>
            <div className="iyali-node-card">
              <div className="node-portrait-placeholder">Adeleke</div>
              <div className="node-info">
                <strong>TIJANI ADELEKE</strong>
                <span>1938 – 1984 • Great-Grandfather</span>
                <p>“Master weaver and community elder who built the family compound in Lagos.”</p>
              </div>
            </div>
            <div className="iyali-tags-line">
              <span>#ORAL_HISTORY</span>
              <span>#LINEAGE_GRAPH</span>
              <span>#AI_PARSER</span>
            </div>
          </div>
        )}

        {activeTab === 'features' && (
          <div className="iyali-features-flow">
            <div className="feature-item">
              <strong>01. TALK</strong>
              <p>“My grandfather had 3 children...” Conversational AI turns speech into family trees.</p>
            </div>
            <div className="feature-item">
              <strong>02. INCLUDE</strong>
              <div className="chips-cluster">
                <span>BIOLOGICAL</span>
                <span>ADOPTIONS</span>
                <span>BLENDED</span>
              </div>
            </div>
            <div className="feature-item">
              <strong>03. DISCOVER</strong>
              <p>Instant kinship queries: <em>“How is Lucas related to John?”</em></p>
            </div>
          </div>
        )}
      </div>

      <div className="showcase-live-badge">
        <span className="live-dot" /> RECORDED LIVE AT IYALI.WORK
      </div>
    </div>
  );
}

export function IbereVisual({ large = false }: { large?: boolean }) {
  const [step, setStep] = useState<number>(0);

  const steps = [
    {
      title: 'Built for Modern Teams',
      time: '10:45 AM',
      badge: 'Telegram Powered',
      highlight: 'Guided onboarding directly in Telegram. No apps to install.',
    },
    {
      title: '01. Create Your Company',
      time: '10:48 AM',
      badge: 'Workflow Setup',
      highlight: 'Set up department policies, document checklists and tasks in 3 minutes.',
    },
    {
      title: '02. Invite New Employees',
      time: '10:49 AM',
      badge: 'Instant Link',
      highlight: 'Send Telegram link. New hires start right in their favorite chat app.',
    },
    {
      title: '03. Zero HR Chasing',
      time: '10:50 AM',
      badge: '100% Completion',
      highlight: 'Automatic intelligent reminders handle document collection before Day 1.',
    },
  ];

  return (
    <div className={`showcase-container ibere-theme ${large ? 'showcase-large' : ''}`}>
      <div className="showcase-topbar">
        <div className="showcase-dots">
          <span className="dot red" />
          <span className="dot yellow" />
          <span className="dot green" />
        </div>
        <div className="showcase-url-pill">ibere.work</div>
        <div className="telegram-top-indicator">
          <Send size={11} className="text-sky-400" />
          <span>Telegram</span>
        </div>
      </div>

      <div className="showcase-screen ibere-screen">
        {/* Telegram capsule banner */}
        <div className="ibere-header-card">
          <div className="ibere-telegram-pill">
            <Send size={10} className="text-sky-500 mr-1" /> Where Work Begins
          </div>
          <h4 className="ibere-title">Get your employee onboarding running today.</h4>
          <p className="ibere-sub">
            Audit your process, eliminate HR friction, and get a structured onboarding system ready for your next hire.
          </p>
        </div>

        {/* Comparison Chat Bubble Feed */}
        <div className="ibere-chat-bubble active">
          <div className="bubble-header">
            <strong>{steps[step].title}</strong>
            <span className="bubble-time">{steps[step].time}</span>
          </div>
          <p className="bubble-text">{steps[step].highlight}</p>
          <div className="bubble-footer">
            <span className="bubble-tag">
              <Check size={11} className="inline mr-1 text-emerald-500" />
              {steps[step].badge}
            </span>
            <button
              type="button"
              className="bubble-next-btn"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setStep((s) => (s + 1) % steps.length);
              }}
            >
              Next Step ({step + 1}/4) →
            </button>
          </div>
        </div>

        {/* Real Testimonial Card */}
        <div className="ibere-mini-testimonial">
          <UserCheck size={13} className="text-sky-500 shrink-0" />
          <p>
            <em>“The Telegram integration is genius. We hit 100% completion before their first day.”</em>
            <small>— David Chen, Eng Manager</small>
          </p>
        </div>
      </div>

      <div className="showcase-live-badge">
        <span className="live-dot" /> RECORDED LIVE AT IBERE.WORK
      </div>
    </div>
  );
}

export function AgbaVisual({ large = false }: { large?: boolean }) {
  const [view, setView] = useState<'brief' | 'signals' | 'executive'>('brief');

  return (
    <div className={`showcase-container agba-theme ${large ? 'showcase-large' : ''}`}>
      <div className="showcase-topbar dark-topbar">
        <div className="showcase-dots">
          <span className="dot red" />
          <span className="dot yellow" />
          <span className="dot green" />
        </div>
        <div className="showcase-url-pill dark-pill">agba.work</div>
        <div className="showcase-tab-pills dark-tabs">
          <button
            type="button"
            className={view === 'brief' ? 'active' : ''}
            onClick={(e) => { e.preventDefault(); e.stopPropagation(); setView('brief'); }}
          >
            Brief
          </button>
          <button
            type="button"
            className={view === 'signals' ? 'active' : ''}
            onClick={(e) => { e.preventDefault(); e.stopPropagation(); setView('signals'); }}
          >
            Signals
          </button>
          <button
            type="button"
            className={view === 'executive' ? 'active' : ''}
            onClick={(e) => { e.preventDefault(); e.stopPropagation(); setView('executive'); }}
          >
            Executive
          </button>
        </div>
      </div>

      <div className="showcase-screen agba-screen">
        <div className="agba-brand-header">
          <div className="agba-logo">
            agba<span className="agba-dot">.</span>
          </div>
          <span className="agba-badge">EXECUTIVE AI DIRECTOR</span>
        </div>

        {view === 'brief' && (
          <div className="agba-telegram-feed">
            <div className="telegram-chat-header">
              <span className="telegram-avatar">🧠</span>
              <div>
                <strong>Agba Morning Brief</strong>
                <small>7:00 AM • Connected to Ops & Finance</small>
              </div>
            </div>

            <div className="agba-alert-card">
              <div className="alert-kicker">
                <span className="alert-pulse" /> 2 ITEMS REQUIRE ATTENTION • 0 SURPRISES
              </div>
              <div className="alert-body">
                <strong>⏰ Tasks & Commitments:</strong>
                <p>• Follow up with supplier tomorrow (High priority - Chinedu)</p>
                <p>• Coordinate shipment of 2 pending orders now production is ready</p>
              </div>
              <div className="alert-footer">
                <span>🟢 NO UNNOTICED LEAKS TODAY</span>
              </div>
            </div>
          </div>
        )}

        {view === 'signals' && (
          <div className="agba-matrix-grid">
            <div className="matrix-tile">
              <small>OPERATIONS</small>
              <strong>What is moving</strong>
              <span>Shipment schedules & delays</span>
            </div>
            <div className="matrix-tile">
              <small>SALES</small>
              <strong>What was promised</strong>
              <span>Client delivery deadlines</span>
            </div>
            <div className="matrix-tile">
              <small>FINANCE</small>
              <strong>What was paid</strong>
              <span>Customer invoices & cash flow</span>
            </div>
            <div className="matrix-tile">
              <small>PEOPLE</small>
              <strong>What is changing</strong>
              <span>Team capacity & handoffs</span>
            </div>
          </div>
        )}

        {view === 'executive' && (
          <div className="agba-exec-hero">
            <span className="agba-kicker">THE EXECUTIVE ADVANTAGE</span>
            <h4>
              Stop finding out<br />
              <span className="text-lime-300">after the fact.</span>
            </h4>
            <p>
              Give Agba the signals. Let Agba connect the dots. Know what deserves attention before it becomes your problem.
            </p>
            <div className="agba-btn-pill">START WITH AGBA →</div>
          </div>
        )}
      </div>

      <div className="showcase-live-badge dark-badge">
        <span className="live-dot lime-dot" /> RECORDED LIVE AT AGBA.WORK
      </div>
    </div>
  );
}

export function WhoKnowsNaijaVisual({ large = false }: { large?: boolean }) {
  const [tab, setTab] = useState<'trivia' | 'modes' | 'leaderboard' | 'map'>('trivia');
  const [selectedAnswer, setSelectedAnswer] = useState<string>('A');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);

  const questions = [
    {
      q: 'What is the special dry powdered spice blend used to coat and season traditional Suya called?',
      options: [
        { key: 'A', text: 'Yaji', correct: true },
        { key: 'B', text: 'Iru', correct: false },
        { key: 'C', text: 'Ogbono', correct: false },
        { key: 'D', text: 'Curry', correct: false },
      ],
      points: '+76 pts',
      fact: 'True story: Yaji (also called Suya pepper) is an aromatic blend of ground kuli-kuli (roasted peanut cake), ginger, chili pepper, garlic, and bouillon.',
    },
    {
      q: "In Nigerian street slang, when someone says they are suffering from 'Sapa', what do they mean?",
      options: [
        { key: 'A', text: 'They are sick with flu', correct: false },
        { key: 'B', text: 'They are stuck in traffic', correct: false },
        { key: 'C', text: 'They are very sleepy', correct: false },
        { key: 'D', text: 'They are completely broke / lacking money', correct: true },
      ],
      points: '+82 pts',
      fact: "Originating in Nigerian pidgin, 'Sapa' depicts severe financial lack or brokenness, often celebrated humorously in Afrobeats & memes.",
    },
  ];

  const currentQ = questions[currentQuestionIndex];

  return (
    <div className={`showcase-container naija-theme ${large ? 'showcase-large' : ''}`}>
      <div className="showcase-topbar dark-topbar">
        <div className="showcase-dots">
          <span className="dot red" />
          <span className="dot yellow" />
          <span className="dot green" />
        </div>
        <div className="showcase-url-pill dark-pill">who-knows-naija.vercel.app</div>
        <div className="showcase-tab-pills dark-tabs">
          <button
            type="button"
            className={tab === 'trivia' ? 'active' : ''}
            onClick={(e) => { e.preventDefault(); e.stopPropagation(); setTab('trivia'); }}
          >
            Trivia
          </button>
          <button
            type="button"
            className={tab === 'modes' ? 'active' : ''}
            onClick={(e) => { e.preventDefault(); e.stopPropagation(); setTab('modes'); }}
          >
            Modes
          </button>
          <button
            type="button"
            className={tab === 'leaderboard' ? 'active' : ''}
            onClick={(e) => { e.preventDefault(); e.stopPropagation(); setTab('leaderboard'); }}
          >
            Ranks
          </button>
          <button
            type="button"
            className={tab === 'map' ? 'active' : ''}
            onClick={(e) => { e.preventDefault(); e.stopPropagation(); setTab('map'); }}
          >
            36 States
          </button>
        </div>
      </div>

      <div className="showcase-screen naija-screen">
        {tab === 'trivia' && (
          <div className="naija-trivia-flow">
            <div className="trivia-meta-bar">
              <span className="trivia-badge">QUESTION {currentQuestionIndex + 1}/10</span>
              <button
                type="button"
                className="trivia-switch-btn"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  const next = (currentQuestionIndex + 1) % questions.length;
                  setCurrentQuestionIndex(next);
                  setSelectedAnswer(next === 0 ? 'A' : 'D');
                }}
              >
                Next Q ↻
              </button>
            </div>

            <h4 className="trivia-question">{currentQ.q}</h4>

            <div className="trivia-options-grid">
              {currentQ.options.map((opt) => {
                const isSelected = selectedAnswer === opt.key;
                return (
                  <button
                    key={opt.key}
                    type="button"
                    className={`trivia-opt-btn ${isSelected ? (opt.correct ? 'opt-correct' : 'opt-wrong') : ''}`}
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setSelectedAnswer(opt.key);
                    }}
                  >
                    <span className="opt-key">{opt.key}</span>
                    <span className="opt-text">{opt.text}</span>
                    {isSelected && opt.correct && <CheckCircle2 size={13} className="opt-icon" />}
                  </button>
                );
              })}
            </div>

            {selectedAnswer && (
              <div className="trivia-feedback-box">
                <div className="feedback-head">
                  <span className="feedback-badge">🎉 Oya take your flowers! Perfect answer.</span>
                  <span className="feedback-points">{currentQ.points}</span>
                </div>
                <p className="feedback-fact">{currentQ.fact}</p>
              </div>
            )}
          </div>
        )}

        {tab === 'modes' && (
          <div className="naija-modes-flow">
            <div className="player-badge">
              <span className="player-avatar">🌿</span>
              <div>
                <strong>TomoriK</strong>
                <small>“Who Send You? 😂” • High Score: 920</small>
              </div>
              <span className="status-pill">ONLINE</span>
            </div>

            <div className="mode-cards-stack">
              <div className="mode-card highlight">
                <span className="mode-icon">▶</span>
                <div>
                  <strong>PLAY NOW (10 QUESTIONS)</strong>
                  <small>Fast-paced random Nigerian trivia</small>
                </div>
              </div>
              <div className="mode-card">
                <span className="mode-icon text-cyan-400">⚔️</span>
                <div>
                  <strong>1V1 LIVE ARENA</strong>
                  <small>Real-time multiplayer duel with friends</small>
                </div>
              </div>
              <div className="mode-card">
                <span className="mode-icon text-amber-400">🗺️</span>
                <div>
                  <strong>36 STATES CONQUEST</strong>
                  <small>Interactive map • Conquer all 36 states!</small>
                </div>
              </div>
            </div>
          </div>
        )}

        {tab === 'leaderboard' && (
          <div className="naija-ranks-flow">
            <div className="ranks-header">
              <div>
                <strong>National Leaderboard</strong>
                <small>Real-time Nigerian Trivia Masters</small>
              </div>
              <span className="live-firestore-pill">🟢 LIVE FIRESTORE</span>
            </div>

            <div className="ranks-list">
              <div className="rank-item gold">
                <span className="rank-num">1</span>
                <div>
                  <strong>Babatunde_O</strong>
                  <small>Naija Legend • National Master</small>
                </div>
                <b className="rank-pts">980 PTS</b>
              </div>
              <div className="rank-item silver">
                <span className="rank-num">2</span>
                <div>
                  <strong>Chisom_K</strong>
                  <small>Naija Legend • Anambra Champ</small>
                </div>
                <b className="rank-pts">960 PTS</b>
              </div>
              <div className="rank-item bronze">
                <span className="rank-num">3</span>
                <div>
                  <strong>Chidi_Lagos</strong>
                  <small>Naija Legend • Lagos Rep</small>
                </div>
                <b className="rank-pts">940 PTS</b>
              </div>
            </div>
          </div>
        )}

        {tab === 'map' && (
          <div className="naija-map-flow">
            <div className="map-stats-strip">
              <span>🗺️ <b>12 / 37</b> States Conquered</span>
              <span>⭐ <b>36</b> Stars</span>
            </div>
            <div className="zone-tags-row">
              <span className="zone-tag active">South West (6/6)</span>
              <span className="zone-tag">South East (3/5)</span>
              <span className="zone-tag">North Central (2/6)</span>
            </div>
            <div className="mini-nigeria-map">
              <div className="map-grid-layer" />
              <div className="state-radar-dot lagos pulse" title="Lagos • Conquered">LAGOS</div>
              <div className="state-radar-dot abuja pulse" title="Abuja FCT">ABUJA</div>
              <div className="state-radar-dot kano" title="Kano">KANO</div>
              <div className="state-radar-dot enugu" title="Enugu">ENUGU</div>
              <div className="state-radar-dot rivers" title="Rivers">PH</div>
              <span className="ocean-label">GULF OF GUINEA / ATLANTIC OCEAN</span>
            </div>
          </div>
        )}
      </div>

      <div className="showcase-live-badge dark-badge">
        <span className="live-dot lime-dot" /> RECORDED LIVE AT WHO-KNOWS-NAIJA.VERCEL.APP
      </div>
    </div>
  );
}

export function ProjectShowcaseVisual({ project, large = false }: ShowcaseProps) {
  if (project.slug === 'iyali') {
    return <IyaliVisual large={large} />;
  }
  if (project.slug === 'ibere') {
    return <IbereVisual large={large} />;
  }
  if (project.slug === 'agba') {
    return <AgbaVisual large={large} />;
  }
  if (project.slug === 'who-knows-naija') {
    return <WhoKnowsNaijaVisual large={large} />;
  }
  return null;
}
