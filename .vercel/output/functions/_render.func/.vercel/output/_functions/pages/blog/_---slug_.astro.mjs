import { c as createAstro, d as createComponent, r as renderComponent, f as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_C5mQ-R22.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_CDzYUGrE.mjs';
export { renderers } from '../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://www.saasential.tech");
const prerender = false;
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  Astro2.params.slug;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Blog | SaaSential", "description": "Insights on FinTech SaaS, AI sales agents, and API development" }, { "default": ($$result2) => renderTemplate(_a || (_a = __template([" ", '<main class="min-h-screen py-16 px-4"> <div class="max-w-6xl mx-auto"> <!-- Header --> <div class="text-center mb-12"> <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">\nBlog\n</h1> <p class="text-xl text-gray-600 max-w-2xl mx-auto">\nInsights on FinTech SaaS, AI sales agents, API development, and building sellable products\n</p> </div> <!-- Widget Container --> <div id="meeting-maker-widget"></div> <!-- Script with token --> <script src="https://api.meetingmaker.tech/widgets/embed.js" data-token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2OWQ3OWJjODE1NjdhM2RjODcyYzI0YzIiLCJjbGllbnRJZCI6IjY5ZDc5YmM4MTU2N2EzZGM4NzJjMjRjMCIsInJvbGUiOiJvd25lciIsImlhdCI6MTc3NTczNzgwMCwiZXhwIjoxOTAxOTY4MjAwfQ.N49bDXdG4rF-3ryJRx9rMdTh2Mhhab8llfFzIvjr4z4" async><\/script> </div> </main> '])), maybeRenderHead()) })}`;
}, "C:/Github/saasential-website-frontend/src/pages/blog/[...slug]/index.astro", void 0);

const $$file = "C:/Github/saasential-website-frontend/src/pages/blog/[...slug]/index.astro";
const $$url = "/blog/[...slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
