import React from 'react';
import { DirectChannels } from '../components/DirectChannels';

export const AboutView: React.FC = () => {
  return (
    <div className="space-y-16 max-w-3xl">
      {/* Header */}
      <header className="border-b border-[#E5E2DC] pb-8 pt-4">
        <span className="text-xs uppercase tracking-widest text-[#66635F] font-semibold block mb-2">
          Builder Profile
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#141414] mb-3">
          I like building things.
        </h1>
        <p className="text-sm text-[#66635F]">
          Tomori · Lagos, Nigeria
        </p>
      </header>

      {/* Narrative Section */}
      <section className="space-y-6 text-base sm:text-lg text-[#141414] leading-relaxed">
        <p>
          Tomori is an independent digital product builder exploring software, games and AI-assisted development.
        </p>

        <p className="text-[#66635F]">
          Previously focused heavily on business systems, operations and SaaS products. Now increasingly focused on building web and mobile games and experimenting with AI-native development.
        </p>

        <p className="text-[#66635F]">
          Based in Lagos, Nigeria.
        </p>
      </section>

      {/* Focus & Operating Mode */}
      <section className="border-t border-b border-[#E5E2DC] py-8 space-y-6">
        <h2 className="text-xs uppercase tracking-widest text-[#66635F] font-semibold">
          Current Focus
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
          <div className="space-y-1">
            <span className="font-bold text-[#141414] block">Web & Mobile Games</span>
            <p className="text-xs text-[#66635F] leading-relaxed">
              Building localized arcade experiences inspired by West African urban energy, transit culture, and physical environments.
            </p>
          </div>

          <div className="space-y-1">
            <span className="font-bold text-[#141414] block">AI-Assisted Development</span>
            <p className="text-xs text-[#66635F] leading-relaxed">
              Using modern models and state machines to compress idea-to-playable loops from months into days.
            </p>
          </div>

          <div className="space-y-1">
            <span className="font-bold text-[#141414] block">Digital Products</span>
            <p className="text-xs text-[#66635F] leading-relaxed">
              Crafting calm, durable software like the Iyali family archive that respects human memory and heritage.
            </p>
          </div>

          <div className="space-y-1">
            <span className="font-bold text-[#141414] block">Bespoke Software</span>
            <p className="text-xs text-[#66635F] leading-relaxed">
              Select contract engagements for complex workflow architecture when there is a strong, specific technical problem.
            </p>
          </div>
        </div>
      </section>

      {/* Direct Channels */}
      <section className="space-y-4">
        <div>
          <span className="text-xs uppercase tracking-widest text-[#66635F] font-semibold block mb-1">
            Contact
          </span>
          <h2 className="text-lg font-bold tracking-tight text-[#141414]">
            Direct Channels
          </h2>
        </div>

        <DirectChannels layout="list" />
      </section>
    </div>
  );
};
