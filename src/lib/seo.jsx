import { useEffect } from 'react';

/**
 * Per-page SEO: title, description, canonical URL, social tags, and index/noindex.
 *
 * Base44 injects its own title/description unless "Automatic titles and
 * descriptions" is turned off in Dashboard > Marketing > SEO & GEO > Meta tags.
 * This hook works either way: it writes the tags on the client, and when the
 * automatic injection is off, index.html + this hook are the single source of truth.
 */

export const SITE_NAME = 'Titan Realty Investments';
export const SITE_URL = 'https://titanrealtyinvestments.com';
export const DEFAULT_TITLE = `${SITE_NAME} | South Florida Land & Estate Buyers`;
export const DEFAULT_DESCRIPTION =
  'Private buyers of 1+ acre land, equestrian and agricultural estates, and aviation and industrial parcels across South Florida. Discreet off-market offers. (561) 412-6929.';

function setMeta(attrName, attrValue, content) {
  if (typeof document === 'undefined') return;
  let el = document.head.querySelector(`meta[${attrName}="${attrValue}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attrName, attrValue);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function setLink(rel, href) {
  if (typeof document === 'undefined') return;
  let el = document.head.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

/**
 * @param {object} opts
 * @param {string} [opts.title]        Page title without the site name. Omit for the home page.
 * @param {string} [opts.description]  Meta description, ideally 120-160 characters.
 * @param {string} [opts.path]         Route path used for the canonical URL, e.g. "/Properties".
 * @param {boolean} [opts.noindex]     True to keep the page out of search results.
 */
export function useSeo({ title, description = DEFAULT_DESCRIPTION, path = '/', noindex = false } = {}) {
  useEffect(() => {
    const fullTitle = title ? `${title} | ${SITE_NAME}` : DEFAULT_TITLE;
    const url = `${SITE_URL}${path}`;

    document.title = fullTitle;
    setMeta('name', 'description', description);
    setMeta('name', 'robots', noindex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large');
    setLink('canonical', url);

    setMeta('property', 'og:title', fullTitle);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:url', url);
    setMeta('name', 'twitter:title', fullTitle);
    setMeta('name', 'twitter:description', description);
  }, [title, description, path, noindex]);
}
