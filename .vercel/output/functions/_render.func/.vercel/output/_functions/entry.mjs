import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_ClslPAMf.mjs';
import { manifest } from './manifest_DJXij2sj.mjs';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/blog/index-backup.astro.mjs');
const _page2 = () => import('./pages/blog/_---slug_.astro.mjs');
const _page3 = () => import('./pages/book-meeting.astro.mjs');
const _page4 = () => import('./pages/contact.astro.mjs');
const _page5 = () => import('./pages/our-work/_slug_.astro.mjs');
const _page6 = () => import('./pages/our-work.astro.mjs');
const _page7 = () => import('./pages/services/_slug_.astro.mjs');
const _page8 = () => import('./pages/services.astro.mjs');
const _page9 = () => import('./pages/sitemap.xml.astro.mjs');
const _page10 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/blog/index-backup.astro", _page1],
    ["src/pages/blog/[...slug]/index.astro", _page2],
    ["src/pages/book-meeting/index.astro", _page3],
    ["src/pages/contact/index.astro", _page4],
    ["src/pages/our-work/[slug].astro", _page5],
    ["src/pages/our-work/index.astro", _page6],
    ["src/pages/services/[slug].astro", _page7],
    ["src/pages/services/index.astro", _page8],
    ["src/pages/sitemap.xml.js", _page9],
    ["src/pages/index.astro", _page10]
]);
const serverIslandMap = new Map();
const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "6e3a887c-603d-4cbd-873d-ab45f153b829",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
