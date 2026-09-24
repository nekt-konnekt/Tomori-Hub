import { useEffect } from 'react';

interface SEOHeadProps {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
  type?: 'website' | 'profile' | 'article';
  schema?: Record<string, unknown> | Array<Record<string, unknown>>;
}

const DEFAULT_OG_IMAGE = 'https://lh3.googleusercontent.com/d/13Md9Zcu1zNZH64xwkCwsE86ytj0Yzct6';
const SITE_NAME = 'Tomori — Digital Products, Games & AI';
const BASE_DOMAIN = 'https://tomori.build';

export function SEOHead({
  title,
  description,
  path,
  ogImage = DEFAULT_OG_IMAGE,
  type = 'website',
  schema,
}: SEOHeadProps) {
  useEffect(() => {
    // 1. Update Title
    document.title = title;

    // 2. Helper to set or update meta tag
    const setMeta = (nameOrProperty: string, key: 'name' | 'property', content: string) => {
      let tag = document.querySelector(`meta[${key}="${nameOrProperty}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute(key, nameOrProperty);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    // 3. Helper to update link tag (canonical)
    const canonicalHref = `${BASE_DOMAIN}${path === '/' ? '' : path}`;
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', canonicalHref);

    // 4. Standard Meta
    setMeta('description', 'name', description);
    setMeta('robots', 'name', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
    setMeta('googlebot', 'name', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
    setMeta('bingbot', 'name', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');

    // 5. OpenGraph
    setMeta('og:title', 'property', title);
    setMeta('og:description', 'property', description);
    setMeta('og:url', 'property', canonicalHref);
    setMeta('og:type', 'property', type);
    setMeta('og:site_name', 'property', SITE_NAME);
    setMeta('og:image', 'property', ogImage);
    setMeta('og:image:secure_url', 'property', ogImage);
    setMeta('og:image:alt', 'property', title);

    // 6. Twitter / X Cards
    setMeta('twitter:card', 'name', 'summary_large_image');
    setMeta('twitter:site', 'name', '@tomori_olakunle');
    setMeta('twitter:creator', 'name', '@tomori_olakunle');
    setMeta('twitter:title', 'name', title);
    setMeta('twitter:description', 'name', description);
    setMeta('twitter:image', 'name', ogImage);
    setMeta('twitter:image:alt', 'name', title);

    // 7. Route-specific JSON-LD Structured Data (AEO & AIO)
    const scriptId = 'dynamic-route-schema';
    let scriptTag = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (schema) {
      if (!scriptTag) {
        scriptTag = document.createElement('script');
        scriptTag.id = scriptId;
        scriptTag.type = 'application/ld+json';
        document.head.appendChild(scriptTag);
      }
      const structuredData = Array.isArray(schema)
        ? { '@context': 'https://schema.org', '@graph': schema }
        : { '@context': 'https://schema.org', ...schema };
      scriptTag.textContent = JSON.stringify(structuredData);
    } else if (scriptTag) {
      scriptTag.remove();
    }
  }, [title, description, path, ogImage, type, schema]);

  return null;
}
