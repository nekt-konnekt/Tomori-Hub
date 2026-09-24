import React from 'react';

interface DirectChannelsProps {
  layout?: 'list' | 'compact' | 'footer';
  className?: string;
}

export const DIRECT_CHANNELS = [
  {
    channel: 'GitHub',
    handle: 'nekt-konnekt',
    href: 'https://github.com/nekt-konnekt',
    isExternal: true,
  },
  {
    channel: 'X',
    handle: '@tomori_olakunle',
    href: 'https://x.com/tomori_olakunle',
    isExternal: true,
  },
  {
    channel: 'Email',
    handle: 'Tomoriolakunle@gmail.com',
    href: 'mailto:Tomoriolakunle@gmail.com',
    isExternal: false,
  },
];

export const DirectChannels: React.FC<DirectChannelsProps> = ({
  layout = 'list',
  className = '',
}) => {
  if (layout === 'footer') {
    return (
      <ul className={`space-y-2 text-sm ${className}`}>
        {DIRECT_CHANNELS.map((item) => (
          <li key={item.channel}>
            <a
              href={item.href}
              target={item.isExternal ? '_blank' : undefined}
              rel={item.isExternal ? 'noopener noreferrer' : undefined}
              className="group inline-flex items-baseline gap-2 text-[#66635F] hover:text-[#0D9488] transition-colors"
            >
              <span className="text-[#141414] font-medium">{item.channel}</span>
              <span className="text-xs text-[#8E8B85] group-hover:text-[#0D9488] transition-colors">
                {item.handle}
              </span>
            </a>
          </li>
        ))}
      </ul>
    );
  }

  if (layout === 'compact') {
    return (
      <div className={`flex flex-wrap items-center gap-x-6 gap-y-2 text-xs ${className}`}>
        {DIRECT_CHANNELS.map((item, idx) => (
          <React.Fragment key={item.channel}>
            <a
              href={item.href}
              target={item.isExternal ? '_blank' : undefined}
              rel={item.isExternal ? 'noopener noreferrer' : undefined}
              className="inline-flex items-baseline gap-1.5 hover:text-[#0D9488] transition-colors"
            >
              <span className="font-semibold text-[#141414]">{item.channel}</span>
              <span className="text-[#66635F]">{item.handle}</span>
            </a>
            {idx < DIRECT_CHANNELS.length - 1 && (
              <span className="text-[#E5E2DC]" aria-hidden="true">
                /
              </span>
            )}
          </React.Fragment>
        ))}
      </div>
    );
  }

  // Default typographic list layout (for About and Home)
  return (
    <div className={`divide-y divide-[#E5E2DC] border-t border-b border-[#E5E2DC] ${className}`}>
      {DIRECT_CHANNELS.map((item) => (
        <a
          key={item.channel}
          href={item.href}
          target={item.isExternal ? '_blank' : undefined}
          rel={item.isExternal ? 'noopener noreferrer' : undefined}
          className="group py-3.5 sm:py-4 flex items-baseline justify-between hover:bg-[#FAF8F5]/80 px-2 sm:px-3 -mx-2 sm:-mx-3 transition-colors text-sm"
        >
          <span className="font-semibold text-[#141414] group-hover:text-[#0D9488] transition-colors">
            {item.channel}
          </span>
          <span className="text-xs sm:text-sm text-[#66635F] group-hover:text-[#0D9488] transition-colors">
            {item.handle}
          </span>
        </a>
      ))}
    </div>
  );
};
