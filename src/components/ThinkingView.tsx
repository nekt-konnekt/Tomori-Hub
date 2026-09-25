import React from 'react';
import { SEOHead } from './SEOHead';
function PaperTag({ children, tone = 'yellow', rotate = 0 }: { children: React.ReactNode; tone?: string; rotate?: number }) {
  return <span className={`paper-tag tone-${tone}`} style={{ transform: `rotate(${rotate}deg)` }}>{children}</span>;
}

const cases = [
  {
    label: 'CLIENT AUDIT',
    title: 'RESQ',
    question: 'What happens when there is nothing to report?',
    finding: 'The WhatsApp journey is naturally episodic. The idle period becomes a retention problem.',
    opportunity: 'Use existing Broadcast infrastructure as a local intelligence loop: area watch, relevant alerts, case updates and neighbourhood digests.',
    tone: 'turquoise',
  },
  {
    label: 'PRODUCT',
    title: 'IYALI',
    question: 'Will families pay for a family archive every month?',
    finding: 'The emotional value is durable, but the usage frequency does not naturally support a conventional monthly SaaS habit.',
    opportunity: 'Shift the value model toward yearly access and permanent heritage ownership rather than forcing recurring productivity economics.',
    tone: 'pink',
  },
  {
    label: 'PRODUCT',
    title: 'IBERE',
    question: 'Is onboarding software used often enough to sustain the model?',
    finding: 'Employee onboarding has high value but naturally low frequency for many SMBs.',
    opportunity: 'Design the free-to-paid boundary around completed onboarding volume, then build adjacent recurring workflows around the employee lifecycle.',
    tone: 'yellow',
  },
  {
    label: 'CONCEPT',
    title: 'TRUSTLINK',
    question: 'What is the real problem at the moment of payment?',
    finding: 'The surface problem looks like vendor verification. The deeper problem is transaction trust when a buyer is deciding whether to send money.',
    opportunity: 'Make verification portable across Instagram, WhatsApp, X and Jiji, so trust travels with the seller rather than living inside another marketplace.',
    tone: 'green',
  },
];

export function ThinkingView() {
  return (
    <div className="page interior-page thinking-page">
      <SEOHead
        title="Product Thinking & Forensics | Tomori"
        description="Product thinking, product forensics and strategic audits by Tomori Olakunle. Looking beyond interfaces at behaviour, retention, monetization, distribution and product-market fit."
        path="/thinking"
        type="website"
      />

      <section className="thinking-hero section-shell">
        <div className="thinking-kicker">
          <PaperTag tone="turquoise" rotate={-2}>PRODUCT FORENSICS</PaperTag>
          <span className="scribble">I take products apart.</span>
        </div>
        <h1>THINKING<br /><em>BEYOND THE SCREEN.</em></h1>
        <p>
          I look at products as systems: what job they solve, how often people need them,
          what happens between uses, who pays, where value leaks, and what the product could become.
        </p>
        <div className="thinking-questions">
          <span>WHY THIS?</span>
          <span>WHY NOW?</span>
          <span>WHO PAYS?</span>
          <span>WHAT HAPPENS NEXT?</span>
        </div>
      </section>

      <section className="thinking-method section-shell">
        <div className="section-heading">
          <span className="scribble">the questions I keep asking</span>
          <h2>PRODUCT FORENSICS</h2>
        </div>
        <div className="forensic-grid">
          {[
            ['01', 'JOB', 'What is the user actually hiring this product to do?'],
            ['02', 'FREQUENCY', 'How often does that job naturally occur?'],
            ['03', 'IDLE TIME', 'What keeps the product useful when the core job is not happening?'],
            ['04', 'MONEY', 'Who receives the value, who pays, and are they the same person?'],
            ['05', 'DISTRIBUTION', 'Where does demand already exist, and how does the product reach it?'],
            ['06', 'MOAT', 'What gets harder to replicate as usage and data accumulate?'],
          ].map(([number, title, copy]) => (
            <article className="forensic-item" key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="thinking-cases section-shell">
        <div className="section-heading">
          <span className="scribble">selected investigations</span>
          <h2>CASE FILES</h2>
        </div>
        <div className="case-file-grid">
          {cases.map((item, index) => (
            <article className={`thinking-case tone-${item.tone}`} key={item.title}>
              <div className="case-file-top">
                <PaperTag tone={item.tone} rotate={index % 2 ? 2 : -2}>{item.label}</PaperTag>
                <span>CASE / {String(index + 1).padStart(2, '0')}</span>
              </div>
              <h3>{item.title}</h3>
              <blockquote>“{item.question}”</blockquote>
              <div className="case-row">
                <strong>FINDING</strong>
                <p>{item.finding}</p>
              </div>
              <div className="case-row">
                <strong>OPPORTUNITY</strong>
                <p>{item.opportunity}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="thinking-closer section-shell">
        <div>
          <span className="scribble">not just what to build.</span>
          <h2>WHY IT<br /><em>SHOULD EXIST.</em></h2>
        </div>
        <p>
          Good product work is not only interface craft. It is noticing the uncomfortable
          questions early enough to change the product before the market answers them for you.
        </p>
      </section>
    </div>
  );
}
