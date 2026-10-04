import React, { useEffect, useState } from 'react';
import './PUCaptainDemo.css';

const slides = [
  { id: 'title', label: 'Intro' },
  { id: 'problem', label: 'Problem' },
  { id: 'solution', label: 'Solution' },
  { id: 'features', label: 'Features' },
  { id: 'roadmap', label: 'Roadmap' },
  { id: 'integrity', label: 'Integrity' },
  { id: 'contact', label: 'Contact' },
];

const Icon = ({ children }: { children: React.ReactNode }) => (
  <span className="pu-icon" aria-hidden="true">{children}</span>
);

export const PUCaptainDemo: React.FC = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll<HTMLElement>('[data-pu-slide]'));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = nodes.indexOf(entry.target as HTMLElement);
            if (index >= 0) setActive(index);
          }
        });
      },
      { threshold: 0.55 },
    );
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  const scrollToSlide = (index: number) => {
    document.querySelectorAll<HTMLElement>('[data-pu-slide]')[index]?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <div className="pu-demo">
      <div className="pu-topbar">
        <button className="pu-back" onClick={() => window.history.back()}>← WORK</button>
        <div className="pu-topbar-title">PU CAPTAIN / PRODUCT DEMO</div>
        <a href="https://pu-captain.vercel.app/" target="_blank" rel="noreferrer" className="pu-live-link">
          OPEN LIVE APP ↗
        </a>
      </div>

      <div className="pu-nav-dots" aria-label="Demo slides">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            className={active === index ? 'pu-nav-dot active' : 'pu-nav-dot'}
            onClick={() => scrollToSlide(index)}
            aria-label={slide.label}
            title={slide.label}
          />
        ))}
      </div>

      <section className="pu-slide pu-slide-1" data-pu-slide>
        <div className="pu-logo">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M12 2 2 7l10 5 10-5-10-5Z" />
            <path d="m2 17 10 5 10-5" />
            <path d="m2 12 10 5 10-5" />
          </svg>
        </div>
        <span className="pu-eyebrow">FIELD INTELLIGENCE / NIGERIA</span>
        <h1>Winning elections in Nigeria requires ground truth. Not guesswork.</h1>
        <p>Introducing <strong>PU Captain</strong>, offline-first field intelligence for polling-unit operations.</p>
        <a href="https://pu-captain.vercel.app/" target="_blank" rel="noreferrer" className="pu-primary-btn">TRY THE LIVE PRODUCT ↗</a>
        <span className="pu-slide-footer">Tomori Olakunle / Software Developer / Lagos, Nigeria</span>
      </section>

      <section className="pu-slide pu-light" data-pu-slide>
        <div className="pu-inner">
          <span className="pu-section-no">01 / THE FIELD</span>
          <h2>The Nigerian field reality</h2>
          <div className="pu-problem-grid">
            <article><Icon>01</Icon><div><h3>Network blackouts</h3><p>4G fails on Election Day. Standard apps crash when the connection disappears.</p></div></article>
            <article><Icon>02</Icon><div><h3>Data loss</h3><p>When a browser refreshes or an app crashes, hours of field work can vanish.</p></div></article>
            <article><Icon>03</Icon><div><h3>Hardware limits</h3><p>Field teams work on low-end Android devices and unreliable 2G or EDGE connections.</p></div></article>
          </div>
          <div className="pu-punchline">You can't run a modern campaign on broken infrastructure.</div>
        </div>
      </section>

      <section className="pu-slide pu-light" data-pu-slide>
        <div className="pu-inner pu-solution">
          <div className="pu-phone-stage">
            <div className="pu-phone">
              <div className="pu-phone-screen">
                <div className="pu-offline"><span /> OFFLINE</div>
                <div className="pu-phone-brand">PU CAPTAIN</div>
                <div className="pu-stat"><strong>12</strong><span>Voters Logged</span></div>
                <div className="pu-stat"><strong>3</strong><span>Have PVC</span></div>
                <div className="pu-stat"><strong>9</strong><span>No PVC Yet</span></div>
                <div className="pu-sync"><span>SYNC QUEUE</span><strong>0 PENDING</strong></div>
              </div>
            </div>
          </div>
          <div className="pu-solution-copy">
            <span className="pu-section-no">02 / THE SOLUTION</span>
            <h2>Meet PU Captain.</h2>
            <div className="pu-feature-list">
              <article><b>Works without internet</b><span>Log voters, PVC status and incidents in Airplane Mode.</span></article>
              <article><b>Zero data loss</b><span>Data saves locally on the device and survives crashes and restarts.</span></article>
              <article><b>Auto-sync</b><span>When the network returns, captured field data pushes to the War Room.</span></article>
            </div>
            <div className="pu-inline-punch">Captures ground truth when networks fail.</div>
          </div>
        </div>
      </section>

      <section className="pu-slide pu-light" data-pu-slide>
        <div className="pu-inner">
          <span className="pu-section-no">03 / THE SYSTEM</span>
          <h2>Built for the real world.</h2>
          <div className="pu-feature-grid">
            <article><span className="pu-feature-num">01</span><h3>Role-based access</h3><p>Captains see their Polling Unit. Coordinators see the Zone. Access follows the chain of command.</p></article>
            <article><span className="pu-feature-num">02</span><h3>Ultra-lightweight</h3><p>Designed for low-end Tecno and Infinix devices, limited storage and slow connections.</p></article>
            <article><span className="pu-feature-num">03</span><h3>Actionable incidents</h3><p>Track intimidation, low turnout and other field signals for rapid response.</p></article>
          </div>
        </div>
      </section>

      <section className="pu-slide pu-slide-5" data-pu-slide>
        <div className="pu-inner">
          <span className="pu-section-no pu-section-no-light">04 / PHASE 2</span>
          <h2>What's next?</h2>
          <div className="pu-timeline">
            <article><span>01</span><div><h3>WhatsApp OTP</h3><p>Bypass unreliable SMS delivery for instant login verification.</p></div></article>
            <article><span>02</span><div><h3>Secure click-to-call</h3><p>Protected calling flows for field teams working through voter follow-up.</p></div></article>
            <article><span>03</span><div><h3>Keyed authentication</h3><p>Stronger authentication designed to resist brute-force attacks at scale.</p></div></article>
          </div>
          <div className="pu-punchline pu-punchline-light">A resilient foundation ready for rapid scaling.</div>
        </div>
      </section>

      <section className="pu-slide pu-integrity" data-pu-slide>
        <div className="pu-inner">
          <span className="pu-section-no pu-section-no-light">05 / ELECTION DAY + POST-ELECTION</span>
          <h2>Integrity &amp; Monitoring.</h2>
          <div className="pu-integrity-intro">
            <div>
              <h3>Real-Time Polling Unit Result Aggregator</h3>
              <p>Manual collation is slow and difficult to independently verify. PU Captain adds a secure evidence layer from the polling unit to the collation process.</p>
            </div>
            <div className="pu-integrity-badge">EC8A / FIELD EVIDENCE</div>
          </div>
          <div className="pu-integrity-grid">
            <article><span>01</span><div><h3>EC8A photo capture</h3><p>Party agents and Captains upload result-sheet photos directly from the polling unit.</p></div></article>
            <article><span>02</span><div><h3>OCR verification</h3><p>Optical Character Recognition reads the numbers from captured result sheets for structured comparison.</p></div></article>
            <article><span>03</span><div><h3>Geo-fencing</h3><p>Verify that the submission originates from the assigned polling-unit location.</p></div></article>
            <article><span>04</span><div><h3>Timestamped evidence</h3><p>Every submission carries a timestamp to preserve an auditable sequence of field events.</p></div></article>
            <article><span>05</span><div><h3>Official-result comparison</h3><p>Compare captured figures against the official INEC portal data when available.</p></div></article>
            <article><span>06</span><div><h3>Discrepancy alerts</h3><p>Flag material differences when they cross a configured threshold for review.</p></div></article>
          </div>
          <div className="pu-integrity-flow">CAPTURE → VERIFY → COMPARE → ALERT</div>
        </div>
      </section>

      <section className="pu-slide pu-light pu-contact" data-pu-slide>
        <div className="pu-contact-card">
          <span className="pu-section-no">06 / DEPLOYMENT</span>
          <h2>Ready to deploy?</h2>
          <p>Turn abstract campaign support into measurable, actionable field data.</p>
          <div className="pu-contact-grid">
            <span><b>BUILDER</b>Tomori Olakunle</span>
            <span><b>ROLE</b>Software Developer</span>
            <span><b>CONTACT</b>09024545849 / Call or WhatsApp</span>
            <span><b>PRODUCT</b>pu-captain.vercel.app</span>
          </div>
          <a href="https://pu-captain.vercel.app/" target="_blank" rel="noreferrer" className="pu-primary-btn pu-primary-dark">OPEN PU CAPTAIN ↗</a>
        </div>
        <span className="pu-slide-footer pu-dark-footer">PU Captain / Engineered for Nigeria.</span>
      </section>
    </div>
  );
};

export default PUCaptainDemo;
