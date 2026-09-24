import React, { useState } from 'react';
import { Project } from '../data/projects';
import { ExternalLink, Play, RotateCcw, Check, Sparkles, Send, ShieldCheck, UserCheck, CheckCircle2, Building2, Zap, Fuel, Droplets, Trophy, Coins, FileText, CheckCircle, TrendingUp, Gauge, Flame, ShieldAlert, Award } from 'lucide-react';

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

export function OgaLandlordVisual({ large = false }: { large?: boolean }) {
  const [tab, setTab] = useState<'compound' | 'letter' | 'finances'>('compound');
  const [tankLevel, setTankLevel] = useState<number>(850);
  const [genRunning, setGenRunning] = useState<boolean>(false);

  return (
    <div className={`showcase-container landlord-theme ${large ? 'showcase-large' : ''}`}>
      <div className="showcase-topbar dark-topbar">
        <div className="showcase-dots">
          <span className="dot red" />
          <span className="dot yellow" />
          <span className="dot green" />
        </div>
        <div className="showcase-url-pill dark-pill">landlords-house.vercel.app</div>
        <div className="showcase-tab-pills dark-tabs">
          <button
            type="button"
            className={tab === 'compound' ? 'active' : ''}
            onClick={(e) => { e.preventDefault(); e.stopPropagation(); setTab('compound'); }}
          >
            Compound
          </button>
          <button
            type="button"
            className={tab === 'letter' ? 'active' : ''}
            onClick={(e) => { e.preventDefault(); e.stopPropagation(); setTab('letter'); }}
          >
            Uncle's Letter
          </button>
          <button
            type="button"
            className={tab === 'finances' ? 'active' : ''}
            onClick={(e) => { e.preventDefault(); e.stopPropagation(); setTab('finances'); }}
          >
            ₦100M Empire
          </button>
        </div>
      </div>

      <div className="showcase-screen landlord-screen">
        <div className="landlord-header">
          <span className="location-pill">LAGOS, NIGERIA 🇳🇬</span>
          <span className="trophy-pill"><Trophy size={11} className="inline mr-1 text-amber-400" /> Hall of Fame</span>
        </div>

        {tab === 'compound' && (
          <div className="landlord-compound-flow">
            {/* Utilities bar */}
            <div className="compound-utilities-grid">
              <div className="utility-card">
                <div className="utility-head">
                  <span><Droplets size={11} className="text-cyan-400 inline mr-1" /> Overhead Tank</span>
                  <b>{tankLevel}L / 1000L</b>
                </div>
                <div className="utility-progress-bar">
                  <div className="utility-progress-fill water" style={{ width: `${(tankLevel / 1000) * 100}%` }} />
                </div>
                <button
                  type="button"
                  className="utility-action-btn"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setTankLevel((prev) => (prev >= 1000 ? 500 : prev + 150));
                  }}
                >
                  ⚡ Prime Water Pump
                </button>
              </div>

              <div className="utility-card">
                <div className="utility-head">
                  <span><Zap size={11} className="text-amber-400 inline mr-1" /> Gen House</span>
                  <b className={genRunning ? 'text-emerald-400' : 'text-amber-400'}>{genRunning ? 'Running' : 'Standby'}</b>
                </div>
                <small className="utility-note">Fuel: 70% • Maintenance: OK</small>
                <button
                  type="button"
                  className={`utility-action-btn ${genRunning ? 'btn-active' : ''}`}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setGenRunning(!genRunning);
                  }}
                >
                  ▶ {genRunning ? 'Stop Generator' : 'Kickstart Tiger Gen'}
                </button>
              </div>
            </div>

            {/* Compound Units list */}
            <div className="compound-units-box">
              <div className="units-title-row">
                <strong>COMPOUND UNITS & VERANDAH</strong>
                <small>Tap room to inspect</small>
              </div>
              <div className="units-grid">
                <div className="unit-card">
                  <span className="unit-avatar">👨🏾‍🔧</span>
                  <div className="unit-info">
                    <strong>RM 1 • Chinedu</strong>
                    <small>Contractor • ₦150k/mo</small>
                  </div>
                  <span className="unit-badge due">DUE</span>
                </div>

                <div className="unit-card">
                  <span className="unit-avatar">👩🏾‍🍳</span>
                  <div className="unit-info">
                    <strong>RM 2 • Mama</strong>
                    <small>Provision Store • ₦130k/mo</small>
                  </div>
                  <span className="unit-badge due">DUE</span>
                </div>

                <div className="unit-card">
                  <span className="unit-avatar">👨🏾‍💻</span>
                  <div className="unit-info">
                    <strong>RM 3 • Segun</strong>
                    <small>Remote Dev • ₦180k/mo</small>
                  </div>
                  <span className="unit-badge paid">PAID</span>
                </div>

                <div className="unit-card vacant">
                  <span className="unit-avatar text-amber-400">🔑</span>
                  <div className="unit-info">
                    <strong>RM 4 • Vacant</strong>
                    <small>Tap to find tenant</small>
                  </div>
                  <span className="unit-badge new">+RENT</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {tab === 'letter' && (
          <div className="landlord-letter-flow">
            <div className="uncle-letter-scroll">
              <span className="letter-kicker">A LETTER FROM YOUR LATE UNCLE</span>
              <h5>The inheritance that changed everything.</h5>
              <blockquote>
                “My dear child, I have left you my prime property in the heart of the mainland. Treat the tenants with wisdom, but remember: in Lagos, if you give someone one inch, they will park an imported container in your driveway.”
              </blockquote>
              <div className="letter-footer">
                <span>You are now the official landlord of <b>Oga's Compound</b>.</span>
                <span className="letter-badge">Yaba / Ebute Metta, Lagos</span>
              </div>
            </div>
          </div>
        )}

        {tab === 'finances' && (
          <div className="landlord-finances-flow">
            <div className="property-value-card">
              <small>LEVEL 1 PROPERTY • OGA'S COMPOUND</small>
              <div className="value-row">
                <div>
                  <strong>ASSET VALUE</strong>
                  <h3>₦22,000,000</h3>
                </div>
                <div className="cash-pill">
                  <small>AVAILABLE CASH</small>
                  <h4>₦500,000</h4>
                </div>
              </div>
            </div>

            <div className="empire-metrics-grid">
              <div className="empire-metric">
                <small>INCOME / MO</small>
                <b>₦420,000</b>
              </div>
              <div className="empire-metric">
                <small>EXPENSES / MO</small>
                <b>₦160,000</b>
              </div>
              <div className="empire-metric highlight">
                <small>NET CASH FLOW</small>
                <b className="text-emerald-400">+₦260,000</b>
              </div>
              <div className="empire-metric">
                <small>OCCUPANCY</small>
                <b>75%</b>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="showcase-live-badge dark-badge">
        <span className="live-dot lime-dot" /> RECORDED LIVE AT LANDLORDS-HOUSE.VERCEL.APP
      </div>
    </div>
  );
}

export function DanfoRushVisual({ large = false }: { large?: boolean }) {
  const [tab, setTab] = useState<'highway' | 'garage' | 'missions'>('highway');
  const [lane, setLane] = useState<number>(1); // 0: left, 1: center, 2: right
  const [shieldActive, setShieldActive] = useState<boolean>(true);

  return (
    <div className={`showcase-container danfo-theme ${large ? 'showcase-large' : ''}`}>
      <div className="showcase-topbar dark-topbar">
        <div className="showcase-dots">
          <span className="dot red" />
          <span className="dot yellow" />
          <span className="dot green" />
        </div>
        <div className="showcase-url-pill dark-pill">danfo-rush.vercel.app</div>
        <div className="showcase-tab-pills dark-tabs">
          <button
            type="button"
            className={tab === 'highway' ? 'active' : ''}
            onClick={(e) => { e.preventDefault(); e.stopPropagation(); setTab('highway'); }}
          >
            Lagos Run
          </button>
          <button
            type="button"
            className={tab === 'garage' ? 'active' : ''}
            onClick={(e) => { e.preventDefault(); e.stopPropagation(); setTab('garage'); }}
          >
            Garage
          </button>
          <button
            type="button"
            className={tab === 'missions' ? 'active' : ''}
            onClick={(e) => { e.preventDefault(); e.stopPropagation(); setTab('missions'); }}
          >
            Missions
          </button>
        </div>
      </div>

      <div className="showcase-screen danfo-screen">
        {tab === 'highway' && (
          <div className="danfo-highway-flow">
            {/* Active Perks header */}
            <div className="danfo-hud-bar">
              <div className="perk-pill">
                <ShieldAlert size={12} className="text-emerald-400 mr-1" />
                <span>ARMOR SHIELD: <b>5.6s</b></span>
              </div>
              <div className="score-pill">
                <span>🛣️ 1,202 m</span>
                <span className="fare-badge">₦9,191 FARE</span>
              </div>
            </div>

            {/* 3D simulated Highway road */}
            <div className="danfo-highway-viewport">
              <div className="skyline-dusk-glow" />
              <div className="highway-road">
                <div className="road-lane-line line-1" />
                <div className="road-lane-line line-2" />

                {/* Floating obstacles and coins */}
                <div className="road-obstacle cone" style={{ left: '18%', top: '25%' }}>🚧</div>
                <div className="road-obstacle coin" style={{ left: '50%', top: '35%' }}>₦</div>
                <div className="road-obstacle coin" style={{ left: '50%', top: '55%' }}>₦</div>
                <div className="road-obstacle okada" style={{ left: '82%', top: '20%' }}>🏍️</div>

                {/* Yellow Danfo Bus */}
                <div
                  className="danfo-bus-sprite"
                  style={{
                    left: lane === 0 ? '16%' : lane === 1 ? '50%' : '84%',
                  }}
                >
                  <div className="danfo-roof-stripes">
                    <span />
                    <span />
                  </div>
                  <div className="danfo-windshield" />
                  <div className="danfo-bumper">
                    <small>EKO-DANFO</small>
                  </div>
                </div>
              </div>

              {/* Lane switch controls */}
              <div className="danfo-controls-overlay">
                <button
                  type="button"
                  className="lane-btn"
                  onClick={(e) => { e.preventDefault(); e.stopPropagation(); setLane(0); }}
                >
                  ◀ Left
                </button>
                <button
                  type="button"
                  className="lane-btn"
                  onClick={(e) => { e.preventDefault(); e.stopPropagation(); setLane(1); }}
                >
                  Center
                </button>
                <button
                  type="button"
                  className="lane-btn"
                  onClick={(e) => { e.preventDefault(); e.stopPropagation(); setLane(2); }}
                >
                  Right ▶
                </button>
              </div>
            </div>
          </div>
        )}

        {tab === 'garage' && (
          <div className="danfo-garage-flow">
            <div className="garage-bus-card">
              <div className="garage-bus-head">
                <strong>Classic Eko Yellow</strong>
                <span className="badge-360">Drag to spin 360°</span>
              </div>
              <div className="power-ratings-grid">
                <div className="rating-item">
                  <small>TOP SPEED</small>
                  <b>78 km/h</b>
                </div>
                <div className="rating-item">
                  <small>PICKUP</small>
                  <b>100%</b>
                </div>
                <div className="rating-item">
                  <small>DRIFT</small>
                  <b>1.00x</b>
                </div>
                <div className="rating-item">
                  <small>TIERS</small>
                  <b>11 / 40</b>
                </div>
              </div>
            </div>

            <div className="upgrade-tile">
              <div>
                <strong>V8 Engine Block Tuning • TIER 1/5</strong>
                <p>Increases top cruising velocity down Third Mainland & Eko Bridge.</p>
              </div>
              <button type="button" className="danfo-upgrade-btn">
                UPGRADE ₦1,000
              </button>
            </div>
          </div>
        )}

        {tab === 'missions' && (
          <div className="danfo-missions-flow">
            <div className="missions-head">
              <strong>TODAY'S GIDI MISSIONS</strong>
              <small>Resets daily at 00:00 Lagos Time</small>
            </div>

            <div className="mission-items-list">
              <div className="mission-item">
                <div>
                  <strong>Drift 300 meters across lanes</strong>
                  <small>1,201 / 300 m</small>
                </div>
                <span className="mission-claimed-pill">✓ +₦1,000 CLAIMED</span>
              </div>

              <div className="mission-item">
                <div>
                  <strong>Dodge 25 Keke Napeps & Okadas</strong>
                  <small>25 / 25 dodged</small>
                </div>
                <span className="mission-claimed-pill">✓ +₦1,500 CLAIMED</span>
              </div>

              <div className="mission-item">
                <div>
                  <strong>Collect ₦600 fare in a single run</strong>
                  <small>₦850 / ₦600</small>
                </div>
                <span className="mission-claimed-pill">✓ +₦2,000 CLAIMED</span>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="showcase-live-badge dark-badge">
        <span className="live-dot lime-dot" /> RECORDED LIVE AT DANFO-RUSH.VERCEL.APP
      </div>
    </div>
  );
}

export function TrustLinkVisual({ large = false }: { large?: boolean }) {
  const [tab, setTab] = useState<'profile' | 'checks' | 'buyer'>('profile');

  return (
    <div className={`showcase-container trustlink-theme ${large ? 'showcase-large' : ''}`}>
      <div className="showcase-topbar">
        <div className="showcase-dots">
          <span className="dot red" />
          <span className="dot yellow" />
          <span className="dot green" />
        </div>
        <div className="showcase-url-pill">trustlink.work/adesneakers</div>
        <div className="showcase-tab-pills">
          <button
            type="button"
            className={tab === 'profile' ? 'active' : ''}
            onClick={(e) => { e.preventDefault(); e.stopPropagation(); setTab('profile'); }}
          >
            Vendor
          </button>
          <button
            type="button"
            className={tab === 'checks' ? 'active' : ''}
            onClick={(e) => { e.preventDefault(); e.stopPropagation(); setTab('checks'); }}
          >
            Verified (4)
          </button>
          <button
            type="button"
            className={tab === 'buyer' ? 'active' : ''}
            onClick={(e) => { e.preventDefault(); e.stopPropagation(); setTab('buyer'); }}
          >
            Protection
          </button>
        </div>
      </div>

      <div className="showcase-screen trustlink-screen">
        {tab === 'profile' && (
          <div className="trustlink-profile-flow">
            <div className="vendor-card-header">
              <div className="vendor-avatar">AS</div>
              <div className="vendor-meta">
                <h4>Ade's Sneakers</h4>
                <span>@adesneakers • Sneakers & Streetwear</span>
                <small className="vendor-location">📍 Lagos, Nigeria</small>
              </div>
            </div>

            <p className="vendor-tagline">
              Curated sneakers and everyday streetwear, shipped from Lagos.
            </p>

            <div className="trustlink-verified-cluster">
              <div className="cluster-header">
                <strong>WHAT TRUSTLINK VERIFIED</strong>
                <span className="trust-score-badge">98% TRUST SCORE</span>
              </div>
              <div className="verified-items-grid">
                <div className="check-item">
                  <CheckCircle2 size={13} className="text-emerald-600 shrink-0" />
                  <div>
                    <strong>Phone verified</strong>
                    <small>Verified with one-time passcode</small>
                  </div>
                </div>

                <div className="check-item">
                  <CheckCircle2 size={13} className="text-emerald-600 shrink-0" />
                  <div>
                    <strong>Email verified</strong>
                    <small>Verified contact channel</small>
                  </div>
                </div>

                <div className="check-item">
                  <CheckCircle2 size={13} className="text-emerald-600 shrink-0" />
                  <div>
                    <strong>Instagram account verified</strong>
                    <small>@adesneakers • Bio code method</small>
                  </div>
                </div>

                <div className="check-item">
                  <CheckCircle2 size={13} className="text-emerald-600 shrink-0" />
                  <div>
                    <strong>Identity verified</strong>
                    <small>Reviewed by TrustLink</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {tab === 'checks' && (
          <div className="trustlink-checks-flow">
            <div className="trust-metric-pill">
              <ShieldCheck size={14} className="text-emerald-600 mr-1" />
              <span>Zero Impersonation Guarantee Active</span>
            </div>
            <div className="audit-timeline">
              <div className="audit-step">
                <span className="step-num">1</span>
                <div>
                  <strong>Biometric ID & CAC Check</strong>
                  <small>Merchant National Identity matched with Nigerian CAC filing.</small>
                </div>
              </div>
              <div className="audit-step">
                <span className="step-num">2</span>
                <div>
                  <strong>Live Bio-Code Handshake</strong>
                  <small>Instagram API verified ownership via cryptographic payload.</small>
                </div>
              </div>
            </div>
          </div>
        )}

        {tab === 'buyer' && (
          <div className="trustlink-buyer-flow">
            <div className="escrow-card">
              <span className="escrow-badge">BUYER PROTECTION READY</span>
              <h5>Shop with 100% confidence.</h5>
              <p>Funds held in escrow until dispatch verification confirmation on Lagos deliveries.</p>
              <div className="protection-pills">
                <span>✓ Return Guarantee</span>
                <span>✓ Verified Merchant</span>
                <span>✓ Anti-Scam Shield</span>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="showcase-live-badge">
        <span className="live-dot" /> RECORDED LIVE AT TRUSTLINK.MANUS.SPACE
      </div>
    </div>
  );
}

export function DieselGuardVisual({ large = false }: { large?: boolean }) {
  const [tab, setTab] = useState<'fleet' | 'telemetry' | 'log'>('fleet');
  const [selectedAsset, setSelectedAsset] = useState<string>('100KVA');

  return (
    <div className={`showcase-container diesel-theme ${large ? 'showcase-large' : ''}`}>
      <div className="showcase-topbar dark-topbar">
        <div className="showcase-dots">
          <span className="dot red" />
          <span className="dot yellow" />
          <span className="dot green" />
        </div>
        <div className="showcase-url-pill dark-pill">dieselguard.manus.space</div>
        <div className="showcase-tab-pills dark-tabs">
          <button
            type="button"
            className={tab === 'fleet' ? 'active' : ''}
            onClick={(e) => { e.preventDefault(); e.stopPropagation(); setTab('fleet'); }}
          >
            Fleet
          </button>
          <button
            type="button"
            className={tab === 'telemetry' ? 'active' : ''}
            onClick={(e) => { e.preventDefault(); e.stopPropagation(); setTab('telemetry'); }}
          >
            Telemetry
          </button>
          <button
            type="button"
            className={tab === 'log' ? 'active' : ''}
            onClick={(e) => { e.preventDefault(); e.stopPropagation(); setTab('log'); }}
          >
            Logs
          </button>
        </div>
      </div>

      <div className="showcase-screen diesel-screen">
        <div className="diesel-header-row">
          <div>
            <span className="diesel-kicker">FLEET HEALTH</span>
            <h4 className="diesel-title">Generators on watch</h4>
          </div>
          <span className="assets-count-badge">2 assets</span>
        </div>

        {tab === 'fleet' && (
          <div className="diesel-fleet-flow">
            <div
              className={`generator-asset-card ${selectedAsset === '100KVA' ? 'selected' : ''}`}
              onClick={(e) => { e.preventDefault(); e.stopPropagation(); setSelectedAsset('100KVA'); }}
            >
              <div className="gen-gauge-icon">
                <Gauge size={16} className="text-emerald-400" />
              </div>
              <div className="gen-meta">
                <div className="gen-title-line">
                  <strong>100KVA Main</strong>
                  <span className="status-within-range">✓ Within range</span>
                </div>
                <small className="gen-specs">100 KVA • 18.5 L/hr baseline</small>
                <span className="gen-log-status">Telemetry online • No leaks detected</span>
              </div>
            </div>

            <div
              className={`generator-asset-card ${selectedAsset === '50KVA' ? 'selected' : ''}`}
              onClick={(e) => { e.preventDefault(); e.stopPropagation(); setSelectedAsset('50KVA'); }}
            >
              <div className="gen-gauge-icon">
                <Gauge size={16} className="text-cyan-400" />
              </div>
              <div className="gen-meta">
                <div className="gen-title-line">
                  <strong>50KVA Backup</strong>
                  <span className="status-within-range">✓ Within range</span>
                </div>
                <small className="gen-specs">50 KVA • 9.8 L/hr baseline</small>
                <span className="gen-log-status">Standby status • Generator ready</span>
              </div>
            </div>

            <div className="diesel-action-row">
              <button
                type="button"
                className="diesel-capture-btn"
                onClick={(e) => { e.preventDefault(); e.stopPropagation(); setTab('log'); }}
              >
                + Capture a new log ↗
              </button>
            </div>
          </div>
        )}

        {tab === 'telemetry' && (
          <div className="diesel-telemetry-flow">
            <div className="telemetry-stats-grid">
              <div className="telemetry-stat">
                <small>TANK LEVEL</small>
                <strong>74%</strong>
                <span>370L / 500L</span>
              </div>
              <div className="telemetry-stat">
                <small>RUN TIME</small>
                <strong>6.4 hrs</strong>
                <span>Today</span>
              </div>
              <div className="telemetry-stat highlight">
                <small>BURN RATE</small>
                <strong className="text-emerald-400">17.8 L/h</strong>
                <span>Baseline: 18.5 L/h</span>
              </div>
            </div>

            <div className="fuel-leak-detector-banner">
              <ShieldCheck size={14} className="text-emerald-400 shrink-0" />
              <div>
                <strong>Zero Fuel Siphoning / Anomalies</strong>
                <small>Sensor algorithms detected zero midnight drain or irregular valve drop.</small>
              </div>
            </div>
          </div>
        )}

        {tab === 'log' && (
          <div className="diesel-log-flow">
            <div className="quick-log-form">
              <small className="form-kicker">MANUAL HOUR METER LOG</small>
              <div className="form-row">
                <span>Start Reading: <b>1,420.5 hrs</b></span>
                <span>Fuel Added: <b>200 Litres</b></span>
              </div>
              <div className="log-audit-confirmed">
                ✓ Auto-synced to Fleet Dashboard
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="showcase-live-badge dark-badge">
        <span className="live-dot lime-dot" /> RECORDED LIVE AT DIESELGUARD.MANUS.SPACE
      </div>
    </div>
  );
}

export function NektBooksVisual({ large = false }: { large?: boolean }) {
  const [tab, setTab] = useState<'liquidity' | 'bestsellers' | 'metrics'>('liquidity');

  return (
    <div className={`showcase-container nekt-theme ${large ? 'showcase-large' : ''}`}>
      <div className="showcase-topbar">
        <div className="showcase-dots">
          <span className="dot red" />
          <span className="dot yellow" />
          <span className="dot green" />
        </div>
        <div className="showcase-url-pill">nektbooks.vercel.app</div>
        <div className="showcase-tab-pills">
          <button
            type="button"
            className={tab === 'liquidity' ? 'active' : ''}
            onClick={(e) => { e.preventDefault(); e.stopPropagation(); setTab('liquidity'); }}
          >
            Cash
          </button>
          <button
            type="button"
            className={tab === 'bestsellers' ? 'active' : ''}
            onClick={(e) => { e.preventDefault(); e.stopPropagation(); setTab('bestsellers'); }}
          >
            Sellers
          </button>
          <button
            type="button"
            className={tab === 'metrics' ? 'active' : ''}
            onClick={(e) => { e.preventDefault(); e.stopPropagation(); setTab('metrics'); }}
          >
            Metrics
          </button>
        </div>
      </div>

      <div className="showcase-screen nekt-screen">
        {tab === 'liquidity' && (
          <div className="nekt-liquidity-flow">
            <div className="liquidity-ratio-card">
              <div className="liquidity-head">
                <strong>Collected Cash Rate (Liquidity Ratio)</strong>
                <span className="ratio-pct">0% Collected</span>
              </div>
              <div className="cash-bar-container">
                <div className="cash-bar-fill" style={{ width: '0%' }} />
              </div>
              <div className="cash-split-row">
                <div className="cash-stat">
                  <small>COLLECTED CASH</small>
                  <h4>₦0</h4>
                </div>
                <div className="cash-stat debt">
                  <small>OUTSTANDING DEBTS</small>
                  <h4>₦25,800</h4>
                </div>
              </div>
            </div>

            <div className="nekt-mini-invoice-preview">
              <FileText size={13} className="text-blue-600 shrink-0" />
              <div>
                <strong>Active Invoice #INV-0042</strong>
                <small>3×4 Flex Banner Print • Client: Lagos Print Co • ₦25,800 DUE</small>
              </div>
            </div>
          </div>
        )}

        {tab === 'bestsellers' && (
          <div className="nekt-bestsellers-flow">
            <div className="bestsellers-header">
              <Flame size={13} className="text-amber-500 inline mr-1" />
              <strong>TOP 5 POPULAR BEST-SELLERS</strong>
            </div>

            <div className="bestsellers-list">
              <div className="seller-item gold">
                <span className="seller-rank">1</span>
                <div className="seller-info">
                  <strong>3×4 Flex Banner Print</strong>
                  <small>2 units sold</small>
                </div>
                <b className="seller-price">₦24,000</b>
              </div>

              <div className="seller-item silver">
                <span className="seller-rank">2</span>
                <div className="seller-info">
                  <strong>Rollup Stand Banner</strong>
                  <small>1 unit sold</small>
                </div>
                <b className="seller-price">₦18,500</b>
              </div>

              <div className="seller-item bronze">
                <span className="seller-rank">3</span>
                <div className="seller-info">
                  <strong>Business Cards (Pack 100)</strong>
                  <small>3 units sold</small>
                </div>
                <b className="seller-price">₦6,500</b>
              </div>
            </div>
          </div>
        )}

        {tab === 'metrics' && (
          <div className="nekt-metrics-flow">
            <div className="metrics-header-line">
              <TrendingUp size={12} className="text-blue-600 inline mr-1" />
              <strong>METRICS HIGHLIGHTS</strong>
            </div>

            <div className="metrics-quad-grid">
              <div className="metric-quad">
                <small>QUOTES ISSUED</small>
                <strong>0</strong>
                <span>Estimated deal lists</span>
              </div>

              <div className="metric-quad highlight">
                <small>ACTIVE INVOICES</small>
                <strong>1</strong>
                <span>Orders placed</span>
              </div>

              <div className="metric-quad">
                <small>RECEIPTS LOCKED</small>
                <strong>0</strong>
                <span>Payout proofs</span>
              </div>

              <div className="metric-quad highlight">
                <small>AVG. DEAL TICKET</small>
                <strong className="text-blue-700">₦25,800</strong>
                <span>Mean active cash size</span>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="showcase-live-badge">
        <span className="live-dot" /> RECORDED LIVE AT NEKTBOOKS.VERCEL.APP
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
  if (project.slug === 'oga-landlord') {
    return <OgaLandlordVisual large={large} />;
  }
  if (project.slug === 'danfo-rush') {
    return <DanfoRushVisual large={large} />;
  }
  if (project.slug === 'trustlink') {
    return <TrustLinkVisual large={large} />;
  }
  if (project.slug === 'dieselguard') {
    return <DieselGuardVisual large={large} />;
  }
  if (project.slug === 'nektbooks') {
    return <NektBooksVisual large={large} />;
  }
  return null;
}
