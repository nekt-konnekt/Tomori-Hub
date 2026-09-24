import React from 'react';
import { DIRECT_CHANNELS } from './DirectChannels';

export const SiteFooter: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[#E5E2DC] bg-[#FAF8F5] text-[#141414] mt-24">
      <div className="max-w-5xl mx-auto px-6 py-16 space-y-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {/* Identity & Location */}
          <div className="space-y-1">
            <span className="block font-bold tracking-tight text-base text-[#141414]">
              TOMORI
            </span>
            <p className="text-sm text-[#66635F]">
              Lagos, Nigeria
            </p>
          </div>

          {/* Direct Channels */}
          <div className="space-y-2 sm:text-right">
            <span className="block text-xs uppercase tracking-wider font-semibold text-[#141414]">
              Direct Channels
            </span>
            <ul className="space-y-2 text-sm">
              {DIRECT_CHANNELS.map((item) => (
                <li key={item.channel}>
                  <a
                    href={item.href}
                    target={item.isExternal ? '_blank' : undefined}
                    rel={item.isExternal ? 'noopener noreferrer' : undefined}
                    className="text-[#66635F] hover:text-[#0D9488] transition-colors"
                  >
                    {item.channel}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Current Year Bottom Bar — strictly current year without 'Tomori' beside it */}
        <div className="pt-8 border-t border-[#E5E2DC] text-xs text-[#66635F] tabular-numbers">
          © {currentYear}
        </div>
      </div>
    </footer>
  );
};
