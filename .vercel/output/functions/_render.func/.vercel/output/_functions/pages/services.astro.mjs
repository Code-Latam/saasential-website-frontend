import { d as createComponent, r as renderComponent, f as renderTemplate, m as maybeRenderHead, e as addAttribute } from '../chunks/astro/server_C5mQ-R22.mjs';
import 'kleur/colors';
import { $ as $$ContactSection } from '../chunks/ContactSection_A3cPz5kz.mjs';
import { a as $$Navbar, s as services, b as $$Footer } from '../chunks/Footer_DTGwv2m2.mjs';
import { a as $$SEO, $ as $$Layout } from '../chunks/Layout_CDzYUGrE.mjs';
/* empty css                                  */
import { $ as $$ServiceCard } from '../chunks/ServiceCard_DIk24mx3.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "SEO", $$SEO, { "title": "SaaS Development Services | Saasential", "description": "Explore Saasential's comprehensive services and solutions designed to empower your business with innovative technology.", "keywords": "SaaS development, FinTech solutions, Sales Solution, AI Sales Funnels, SEO, software consulting, cloud architecture, API automation", "image": "https://www.saasential.tech/logo/saasential_logo.png", "url": "https://www.saasential.tech/services", "data-astro-cid-52q5xhqt": true })} ${renderComponent($$result, "Layout", $$Layout, { "data-astro-cid-52q5xhqt": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Navbar", $$Navbar, { "data-astro-cid-52q5xhqt": true })} ${maybeRenderHead()}<section class="bg-white min-h-screen flex flex-col" data-astro-cid-52q5xhqt> <!-- ===== Hero Header ===== --> <div class="relative w-full h-[500px] mb-20" data-astro-cid-52q5xhqt> <div class="absolute inset-0 overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-black" data-astro-cid-52q5xhqt> <div class="absolute inset-0 bg-[linear-gradient(to_right,#1e3a8a_1px,transparent_1px),linear-gradient(to_bottom,#1e3a8a_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-10" data-astro-cid-52q5xhqt></div> <!-- Animated gradient orbs --> <div class="absolute inset-0" data-astro-cid-52q5xhqt> <div class="absolute top-20 left-10 w-96 h-96 bg-blue-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob" data-astro-cid-52q5xhqt></div> <div class="absolute top-40 right-10 w-96 h-96 bg-indigo-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob animation-delay-2000" data-astro-cid-52q5xhqt></div> <div class="absolute bottom-20 left-1/2 w-96 h-96 bg-blue-600 rounded-full mix-blend-screen filter blur-3xl opacity-15 animate-blob animation-delay-4000" data-astro-cid-52q5xhqt></div> </div> <!-- Gradient overlay --> <div class="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60" data-astro-cid-52q5xhqt></div> </div> <!-- Breadcrumb --> <div class="relative z-10 max-w-7xl mx-auto px-6 pt-32" data-astro-cid-52q5xhqt> <nav class="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full text-sm text-white shadow-lg" data-aos="fade-down" data-astro-cid-52q5xhqt> <a href="/" class="hover:text-blue-400 transition-colors flex items-center gap-2" data-astro-cid-52q5xhqt> <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-52q5xhqt> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" data-astro-cid-52q5xhqt></path> </svg>
Home
</a> <svg class="w-4 h-4 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-52q5xhqt> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" data-astro-cid-52q5xhqt></path> </svg> <a href="/services" class="text-blue-400 font-medium" data-astro-cid-52q5xhqt>Services</a> </nav> </div> <!-- Hero Title --> <div class="relative z-10 max-w-7xl mx-auto px-6 mt-10" data-astro-cid-52q5xhqt> <h1 class="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6" data-aos="fade-up" data-aos-delay="100" data-astro-cid-52q5xhqt>
Services <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400" data-astro-cid-52q5xhqt>&</span> Solutions.
</h1> <p class="text-xl text-white/80 max-w-2xl mb-8" data-aos="fade-up" data-aos-delay="200" data-astro-cid-52q5xhqt>
Empowering your business with innovative tech solutions tailored to your unique needs.
</p> <div class="h-1.5 w-24 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full" data-aos="fade-right" data-aos-delay="300" data-astro-cid-52q5xhqt></div> </div> <!-- Scroll Down Arrow --> <div class="absolute bottom-8 left-1/2 -translate-x-1/2 z-10" data-astro-cid-52q5xhqt> <div class="flex flex-col items-center gap-2 animate-bounce" data-astro-cid-52q5xhqt> <span class="text-white/60 text-sm font-medium" data-astro-cid-52q5xhqt>Scroll Down</span> <svg class="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-52q5xhqt> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" data-astro-cid-52q5xhqt></path> </svg> </div> </div> </div> <!-- ===== Our Work Grid ===== --> <div class="relative z-10 max-w-7xl mx-auto px-6 pb-20" data-astro-cid-52q5xhqt> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-astro-cid-52q5xhqt> ${services.map((service, i) => renderTemplate`<div data-aos="fade-up"${addAttribute(i * 100, "data-aos-delay")} data-astro-cid-52q5xhqt> ${renderComponent($$result2, "ServiceCard", $$ServiceCard, { "title": service.title, "description": service.shortDesc, "icon": service.icon, "link": "/services/" + service.slug, "data-astro-cid-52q5xhqt": true })} </div>`)} </div> </div> </section> ${renderComponent($$result2, "ContactSection", $$ContactSection, { "data-astro-cid-52q5xhqt": true })} ${renderComponent($$result2, "Footer", $$Footer, { "data-astro-cid-52q5xhqt": true })} ` })}  `;
}, "C:/Github/saasential-website-frontend/src/pages/services/index.astro", void 0);

const $$file = "C:/Github/saasential-website-frontend/src/pages/services/index.astro";
const $$url = "/services";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
