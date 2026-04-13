import { c as createAstro, d as createComponent, f as renderTemplate, u as unescapeHTML, e as addAttribute, r as renderComponent, g as renderHead, h as renderSlot } from './astro/server_C5mQ-R22.mjs';
import 'kleur/colors';
import 'clsx';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro("https://www.saasential.tech");
const $$SEO = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$SEO;
  const {
    title = "Saasential \u2013 Software & Consulting Company",
    description = "Saasential LLC designs and builds scalable SaaS and FinTech platforms with expertise in APIs, automation, and cloud systems.",
    keywords = "Saasential, SaaS development, FinTech solutions, software consulting, cloud architecture, API automation, payment integration",
    // Use dedicated OG image for social sharing (1200x630)
    image = "https://www.saasential.tech/og-image.png",
    url = "https://www.saasential.tech",
    type = "website",
    publishedTime,
    updatedTime,
    author = "Saasential LLC",
    noIndex = false
  } = Astro2.props;
  const absoluteImage = image.startsWith("http") ? image : `https://www.saasential.tech${image}`;
  const logoImage = "https://www.saasential.tech/logo/saasential_logo.png";
  return renderTemplate(_a || (_a = __template(["<title>", '</title><meta name="description"', '><meta name="keywords"', '><meta name="viewport" content="width=device-width, initial-scale=1"><!-- Robots -->', '<meta name="googlebot" content="index, follow"><meta name="author"', '><meta charset="UTF-8"><!-- Favicon --><link rel="icon" type="image/x-icon" href="/favicon.ico"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="apple-touch-icon" href="/apple-touch-icon.png"><!-- Canonical --><link rel="canonical"', '><!-- Open Graph (Facebook / LinkedIn) --><meta property="og:title"', '><meta property="og:description"', '><meta property="og:type"', '><meta property="og:url"', '><meta property="og:image"', '><meta property="og:image:width" content="1200"><meta property="og:image:height" content="630"><meta property="og:image:type" content="image/png"><meta property="og:site_name" content="Saasential"><meta property="og:locale" content="en_US"><!-- Twitter --><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title"', '><meta name="twitter:description"', '><meta name="twitter:image"', '><meta name="twitter:creator" content="@Saasential"><meta name="twitter:site" content="@Saasential"><!-- Article specific meta (for blog/posts) -->', "", "", '<!-- Schema.org Structured Data --><script type="application/ld+json">', "<\/script>"])), title, addAttribute(description, "content"), addAttribute(keywords, "content"), noIndex ? renderTemplate`<meta name="robots" content="noindex, nofollow">` : renderTemplate`<meta name="robots" content="index, follow">`, addAttribute(author, "content"), addAttribute(url, "href"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(type, "content"), addAttribute(url, "content"), addAttribute(absoluteImage, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(absoluteImage, "content"), publishedTime && renderTemplate`<meta property="article:published_time"${addAttribute(publishedTime, "content")}>`, updatedTime && renderTemplate`<meta property="article:modified_time"${addAttribute(updatedTime, "content")}>`, author && renderTemplate`<meta property="article:author"${addAttribute(author, "content")}>`, unescapeHTML(JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Saasential LLC",
    "url": url,
    "logo": logoImage,
    "sameAs": [
      "https://www.linkedin.com/company/saasential-llc"
    ],
    "description": description,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Wyoming",
      "addressCountry": "US"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1 (307) 3945087",
      "contactType": "customer service",
      "email": "info@saasential.tech"
    }
  })));
}, "C:/Github/saasential-website-frontend/src/components/SEO.astro", void 0);

const $$Astro = createAstro("https://www.saasential.tech");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const {
    title = "Saasential \u2013 Providing the AI Sales and SEO Agents that Power the Modern startup",
    description = "Wyoming-based software and consulting company specializing in scalable SaaS, FinTech, and API-driven platforms. We turn complex ideas into compliant, production-ready digital products.",
    keywords = "SaaS development, FinTech consulting, API integration, Astro, TailwindCSS, Node.js, payment integration",
    image = "https://www.saasential.tech/logo/saasential_logo.png",
    noIndex = false
  } = Astro2.props;
  return renderTemplate`<html lang="en"> <head>${renderComponent($$result, "SEO", $$SEO, { "title": title, "description": description, "keywords": keywords, "image": image, "url": "https://www.saasential.tech", "noIndex": noIndex })}${renderHead()}</head> <body> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "C:/Github/saasential-website-frontend/src/layouts/Layout.astro", void 0);

export { $$Layout as $, $$SEO as a };
