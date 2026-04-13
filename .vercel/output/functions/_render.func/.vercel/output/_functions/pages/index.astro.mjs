import { d as createComponent, m as maybeRenderHead, f as renderTemplate, e as addAttribute, r as renderComponent, c as createAstro, h as renderSlot, s as spreadAttributes, F as Fragment } from '../chunks/astro/server_C5mQ-R22.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_CDzYUGrE.mjs';
import { h as heroContent, d as aboutContent, e as servicesContent, s as services, f as approachContent, g as faqContent, i as automationContent, a as $$Navbar, b as $$Footer } from '../chunks/Footer_DTGwv2m2.mjs';
/* empty css                                  */
import 'clsx';
/* empty css                                 */
import { $ as $$ServiceCard } from '../chunks/ServiceCard_DIk24mx3.mjs';
import { $ as $$PortfolioCard } from '../chunks/PortfolioCard_BNvR8FRc.mjs';
import { p as portfolios } from '../chunks/portfolios_o97hOUC8.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_vsPFFUr9.mjs';
import { $ as $$ContactSection } from '../chunks/ContactSection_A3cPz5kz.mjs';
export { renderers } from '../renderers.mjs';

const $$HeroSection = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="relative min-h-screen flex items-center justify-center overflow-hidden bg-black" data-astro-cid-nlow4r3u> <!-- Video Background --> <div class="absolute inset-0 overflow-hidden" data-astro-cid-nlow4r3u> <video autoplay muted loop playsinline class="absolute w-full h-full object-cover opacity-40" data-astro-cid-nlow4r3u> <source src="/videos/saasentialvid.mp4" type="video/mp4" data-astro-cid-nlow4r3u> </video> <div class="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" data-astro-cid-nlow4r3u></div> <!-- Animated particles --> <!-- <div class="absolute inset-0">
            <div class="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob"></div>
            <div class="absolute top-40 right-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
            <div class="absolute bottom-20 left-1/2 w-72 h-72 bg-blue-600 rounded-full mix-blend-screen filter blur-3xl opacity-15 animate-blob animation-delay-4000"></div>
        </div>--> </div> <!-- Content --> <div class="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-10 py-24 md:py-40" data-astro-cid-nlow4r3u> <div class="text-left space-y-6 md:space-y-8 lg:space-y-10" data-astro-cid-nlow4r3u> <!-- Badge --> <div class="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-5 py-1 rounded-full border border-blue-400/40 mb-4 shadow-lg hover:shadow-blue-500/30 hover:border-blue-400/70 transition-all duration-300" data-aos="fade-down" data-astro-cid-nlow4r3u> ${renderTemplate`<span class="relative flex h-2 w-2" data-astro-cid-nlow4r3u> <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" data-astro-cid-nlow4r3u></span> <span class="relative inline-flex rounded-full h-2 w-2 bg-blue-500" data-astro-cid-nlow4r3u></span> </span>`} <span class="text-xs font-normal text-white uppercase tracking-wide" data-astro-cid-nlow4r3u> ${heroContent.badge.text} </span> </div> <!-- Heading --> <h1 class="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight" data-aos="fade-up" data-aos-delay="100" data-astro-cid-nlow4r3u> ${heroContent.heading.main} <span class="block mt-2 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent animate-gradient" data-astro-cid-nlow4r3u> ${heroContent.heading.highlighted} </span> </h1> <!-- Subtitle --> <p class="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl leading-relaxed" data-aos="fade-up" data-aos-delay="200" data-astro-cid-nlow4r3u> ${heroContent.subtitle} </p> <!-- CTA --> <div class="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-8" data-aos="fade-up" data-aos-delay="300" data-astro-cid-nlow4r3u> <a href="/book-meeting" target="_blank" rel="noopener noreferrer" class="group px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-xl hover:from-blue-600 hover:to-blue-800 transition-all duration-300 font-semibold text-base md:text-lg shadow-2xl shadow-blue-500/20 hover:shadow-blue-500/40 transform hover:scale-105 hover:-translate-y-1 flex items-center space-x-3" data-astro-cid-nlow4r3u> <span data-astro-cid-nlow4r3u>${heroContent.cta.text}</span> <svg class="w-5 h-5 transform transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-nlow4r3u> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" data-astro-cid-nlow4r3u></path> </svg> </a> </div> </div> </div> <!-- Scroll indicator --> <div class="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce" data-aos="fade-up" data-aos-delay="400" data-astro-cid-nlow4r3u> <a${addAttribute(heroContent.scrollIndicator.link, "href")}${addAttribute(heroContent.scrollIndicator.ariaLabel, "aria-label")} class="flex flex-col items-center text-white/60 hover:text-blue-400 transition-colors duration-300 group" data-astro-cid-nlow4r3u> <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-nlow4r3u> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" data-astro-cid-nlow4r3u></path> </svg> </a> </div> </section>  `;
}, "C:/Github/saasential-website-frontend/src/components/HeroSection.astro", void 0);

const $$AboutSection = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="about" class="relative min-h-screen flex items-center bg-white text-gray-800 py-20 lg:py-32" data-astro-cid-x2lc2h5w> <div class="max-w-7xl mx-auto px-6 lg:px-12" data-astro-cid-x2lc2h5w> <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start" data-astro-cid-x2lc2h5w> <!-- Left Content (Wider) --> <div class="lg:col-span-7 space-y-6" data-astro-cid-x2lc2h5w> <div class="flex justify-between items-center mb-12" data-astro-cid-x2lc2h5w> <div data-astro-cid-x2lc2h5w> <div class="flex items-center gap-2 mb-3" data-aos="fade-up" data-aos-delay="100" data-astro-cid-x2lc2h5w> <span class="text-blue-400 text-lg" data-astro-cid-x2lc2h5w>✱</span> <span class="text-blue-400 font-semibold tracking-wide uppercase text-sm" data-astro-cid-x2lc2h5w>${aboutContent.badge.text}</span> <span class="text-blue-400 text-lg" data-astro-cid-x2lc2h5w>✱</span> </div> <h2 class="text-5xl font-bold text-gray-900" data-aos="fade-up" data-aos-delay="200" data-astro-cid-x2lc2h5w> ${aboutContent.heading.main} </h2> </div> </div> <!-- First Paragraph --> <p class="text-gray-700 text-lg leading-relaxed" data-aos="fade-up" data-aos-delay="300" data-astro-cid-x2lc2h5w>
At <span class="font-bold text-blue-600" data-astro-cid-x2lc2h5w>${aboutContent.intro.companyName}</span>,
${aboutContent.intro.description} </p> <p class="text-gray-700 text-lg leading-relaxed" data-aos="fade-up" data-aos-delay="400" data-astro-cid-x2lc2h5w> ${aboutContent.paragraphs[0].text} <a${addAttribute(aboutContent.paragraphs[0].link, "href")} target="_blank" class="font-semibold text-blue-600 hover:underline transition-colors" data-astro-cid-x2lc2h5w>${aboutContent.paragraphs[0].highlight}</a> ${aboutContent.paragraphs[0].continuation} </p> <p class="text-gray-700 text-lg leading-relaxed" data-aos="fade-up" data-aos-delay="400" data-astro-cid-x2lc2h5w> ${aboutContent.paragraphs[1].text} <a${addAttribute(aboutContent.paragraphs[1].link, "href")} target="_blank" class="font-semibold text-blue-600 hover:underline transition-colors" data-astro-cid-x2lc2h5w>${aboutContent.paragraphs[1].highlight}</a> ${aboutContent.paragraphs[1].continuation} </p> <!-- Second Paragraph --> <p class="text-gray-700 text-lg leading-relaxed" data-aos="fade-up" data-aos-delay="500" data-astro-cid-x2lc2h5w> ${aboutContent.secondParagraph} </p> </div> <!-- Right Stats (Narrower) --> <div class="lg:col-span-5 flex flex-col justify-center space-y-12 mt-30" data-astro-cid-x2lc2h5w> ${aboutContent.stats.map((stat, index) => renderTemplate`<div class="flex items-center space-x-6 group" data-aos="fade-left"${addAttribute(100 + index * 100, "data-aos-delay")} data-astro-cid-x2lc2h5w> <!-- Icon Container --> <div class="flex-shrink-0 w-20 h-20 bg-white border-2 border-blue-200 rounded-2xl flex items-center justify-center group-hover:border-blue-500 group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-3" data-astro-cid-x2lc2h5w> ${stat.icon === "projects" && renderTemplate`<svg class="w-10 h-10 text-blue-600 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-x2lc2h5w> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" data-astro-cid-x2lc2h5w></path> </svg>`} ${stat.icon === "satisfaction" && renderTemplate`<svg class="w-10 h-10 text-blue-600 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-x2lc2h5w> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" data-astro-cid-x2lc2h5w></path> </svg>`} ${stat.icon === "experience" && renderTemplate`<svg class="w-10 h-10 text-blue-600 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-x2lc2h5w> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" data-astro-cid-x2lc2h5w></path> </svg>`} </div> <!-- Stat Text --> <div class="flex-1" data-astro-cid-x2lc2h5w> <div class="flex items-baseline space-x-1" data-astro-cid-x2lc2h5w> <h3 class="text-5xl font-black text-gray-900 group-hover:text-blue-600 transition-colors duration-300" data-astro-cid-x2lc2h5w> ${stat.number} </h3> ${stat.label && renderTemplate`<span class="text-3xl font-black text-gray-900 group-hover:text-blue-600 transition-colors duration-300" data-astro-cid-x2lc2h5w> ${stat.label} </span>`} </div> <p class="text-gray-600 text-base font-medium mt-1" data-astro-cid-x2lc2h5w> ${stat.sublabel} </p> </div> </div>`)} </div> </div> </div> </section>  `;
}, "C:/Github/saasential-website-frontend/src/components/AboutSection.astro", void 0);

const $$ServicesSection = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="services" class="py-24 bg-white" data-astro-cid-satlbe6z> <div class="max-w-7xl mx-auto px-6 lg:px-12" data-astro-cid-satlbe6z> <!-- Header --> <div class="text-start mb-16" data-astro-cid-satlbe6z> <div class="flex justify-between items-center mb-12" data-astro-cid-satlbe6z> <div data-astro-cid-satlbe6z> <div class="flex items-center gap-2 mb-3" data-aos="fade-up" data-aos-delay="100" data-astro-cid-satlbe6z> <span class="text-blue-400 text-lg" data-astro-cid-satlbe6z>✱</span> <span class="text-blue-400 font-semibold tracking-wide uppercase text-sm" data-astro-cid-satlbe6z>${servicesContent.badge.text}</span> <span class="text-blue-400 text-lg" data-astro-cid-satlbe6z>✱</span> </div> <h2 class="text-5xl font-bold text-gray-900" data-aos="fade-up" data-aos-delay="200" data-astro-cid-satlbe6z> ${servicesContent.heading.main} </h2> </div> </div> </div> <div class="grid gap-10 sm:grid-cols-2 lg:grid-cols-3" data-astro-cid-satlbe6z> ${// show only first 6 services
  services.slice(0, 6).map((service, i) => renderTemplate`<div data-aos="fade-up"${addAttribute(300 + i * 100, "data-aos-delay")} data-astro-cid-satlbe6z> ${renderComponent($$result, "ServiceCard", $$ServiceCard, { "title": service.title, "description": service.shortDesc, "icon": service.icon, "link": "/services/" + service.slug, "data-astro-cid-satlbe6z": true })} </div>`)} </div> </div> </section>  `;
}, "C:/Github/saasential-website-frontend/src/components/ServicesSection.astro", void 0);

const $$Astro$7 = createAstro("https://www.saasential.tech");
const $$Swiper = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Swiper;
  const {
    options = {},
    class: className = "",
    uniqueClass = "astro-swiper-" + Math.random().toString(36).slice(2, 11),
    linkToThumbUniqueClass = "",
    ...props
  } = Astro2.props;
  return renderTemplate`<!-- Slider main container -->${renderComponent($$result, "astro-swiper", "astro-swiper", { "class:list": ["swiper", uniqueClass, className], ...props, "data-options": JSON.stringify(options), "data-linktothumbuniqueclass": linkToThumbUniqueClass, "data-uniqueclass": uniqueClass }, { "default": () => renderTemplate` ${renderSlot($$result, $$slots["default"])} ` })} `;
}, "C:/Github/saasential-website-frontend/node_modules/astro-swiper/src/components/Swiper.astro", void 0);

const $$Astro$6 = createAstro("https://www.saasential.tech");
const $$SwiperButtonNext = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$SwiperButtonNext;
  const {
    class: className = "",
    addDefaultClass = true,
    ...props
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute([addDefaultClass ? "swiper-button-next" : "", className], "class:list")}${spreadAttributes(props)}> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "C:/Github/saasential-website-frontend/node_modules/astro-swiper/src/components/SwiperButtonNext.astro", void 0);

const $$Astro$5 = createAstro("https://www.saasential.tech");
const $$SwiperButtonPrev = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$SwiperButtonPrev;
  const {
    class: className = "",
    addDefaultClass = true,
    ...props
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute([addDefaultClass ? "swiper-button-prev" : "", className], "class:list")}${spreadAttributes(props)}> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "C:/Github/saasential-website-frontend/node_modules/astro-swiper/src/components/SwiperButtonPrev.astro", void 0);

const $$Astro$4 = createAstro("https://www.saasential.tech");
const $$SwiperPagination = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$SwiperPagination;
  const {
    class: className = "",
    addDefaultClass = true,
    ...props
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute([addDefaultClass ? "swiper-pagination" : "", className], "class:list")}${spreadAttributes(props)}> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "C:/Github/saasential-website-frontend/node_modules/astro-swiper/src/components/SwiperPagination.astro", void 0);

const $$Astro$3 = createAstro("https://www.saasential.tech");
const $$SwiperScrollbar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$SwiperScrollbar;
  const {
    class: className = "",
    addDefaultClass = true,
    ...props
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute([addDefaultClass ? "swiper-scrollbar" : "", className], "class:list")}${spreadAttributes(props)}> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "C:/Github/saasential-website-frontend/node_modules/astro-swiper/src/components/SwiperScrollbar.astro", void 0);

const $$Astro$2 = createAstro("https://www.saasential.tech");
const $$SwiperSlide = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$SwiperSlide;
  const {
    class: className = "",
    addDefaultClass = true,
    ...props
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute([addDefaultClass ? "swiper-slide" : "", className], "class:list")}${spreadAttributes(props)}> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "C:/Github/saasential-website-frontend/node_modules/astro-swiper/src/components/SwiperSlide.astro", void 0);

const $$Astro$1 = createAstro("https://www.saasential.tech");
const $$SwiperWrapper = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$SwiperWrapper;
  const {
    class: className = "",
    addDefaultClass = true,
    ...props
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute([addDefaultClass ? "swiper-wrapper" : "", className], "class:list")}${spreadAttributes(props)}> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "C:/Github/saasential-website-frontend/node_modules/astro-swiper/src/components/SwiperWrapper.astro", void 0);

const $$PortfolioSection = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="py-20 bg-white overflow-hidden" id="portfolio" data-astro-cid-bc26wevp> <div class="max-w-7xl mx-auto px-4" data-astro-cid-bc26wevp> <!-- Header --> <div class="flex justify-between items-center mb-12 portfolio-header" data-astro-cid-bc26wevp> <div data-astro-cid-bc26wevp> <div class="flex items-center gap-2 mb-3" data-aos="fade-up" data-aos-delay="100" data-astro-cid-bc26wevp> <span class="text-blue-400 text-lg" data-astro-cid-bc26wevp>✱</span> <span class="text-blue-400 font-semibold tracking-wide uppercase text-sm" data-astro-cid-bc26wevp>Visual Excellence</span> <span class="text-blue-400 text-lg" data-astro-cid-bc26wevp>✱</span> </div> <h2 class="text-5xl font-bold text-gray-900" data-aos="fade-up" data-aos-delay="200" data-astro-cid-bc26wevp>
Our Creative Showcase
</h2> </div> <a href="/our-work" class="hidden md:block px-8 py-3 bg-blue-400 hover:bg-blue-600 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105" data-aos="fade-left" data-aos-delay="300" data-astro-cid-bc26wevp>
View All Portfolio
</a> </div> <!-- Swiper Slider --> <div data-aos="fade-up" data-aos-delay="400" data-astro-cid-bc26wevp> ${renderComponent($$result, "Swiper", $$Swiper, { "class": "portfolio-swiper pb-20", "options": {
    slidesPerView: 1,
    spaceBetween: 30,
    breakpoints: {
      640: {
        slidesPerView: 1.5,
        spaceBetween: 20
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 25
      },
      1024: {
        slidesPerView: 2.5,
        spaceBetween: 30
      }
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function(index, className) {
        return '<span class="' + className + '"></span>';
      }
    },
    loop: true,
    autoplay: {
      delay: 4e3,
      disableOnInteraction: false
    },
    speed: 800,
    effect: "slide"
  }, "data-astro-cid-bc26wevp": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "SwiperWrapper", $$SwiperWrapper, { "data-astro-cid-bc26wevp": true }, { "default": ($$result3) => renderTemplate`${portfolios.map((portfolio, i) => renderTemplate`${renderComponent($$result3, "SwiperSlide", $$SwiperSlide, { "data-astro-cid-bc26wevp": true }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "PortfolioCard", $$PortfolioCard, { "title": portfolio.title, "description": portfolio.shortDesc, "category": portfolio.category, "image": portfolio.image, "link": "/our-work/" + portfolio.slug, "data-astro-cid-bc26wevp": true })} ` })}`)}` })} ` })} <!-- Custom Pagination Indicators --> <div class="flex justify-center mt-8" data-astro-cid-bc26wevp> <div class="swiper-pagination !relative !bottom-0" data-astro-cid-bc26wevp></div> </div> </div> <!-- Mobile View All Button --> <div class="md:hidden text-center mt-8" data-aos="fade-up" data-aos-delay="500" data-astro-cid-bc26wevp> <a href="/our-work" class="inline-block px-8 py-3 bg-blue-400 hover:bg-blue-600 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105" data-astro-cid-bc26wevp>
View All Portfolio
</a> </div> </div> </section>  `;
}, "C:/Github/saasential-website-frontend/src/components/PortfolioSection.astro", void 0);

const $$ApproachSection = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<!--<section class="py-20 bg-white" id="approach">
    <div class="max-w-7xl mx-auto px-6">
        &lt;!&ndash; Heading &ndash;&gt;
        <div class="flex justify-between items-center mb-12 portfolio-header">
            <div>
                <div class="flex items-center gap-2 mb-3" data-aos="fade-up" data-aos-delay="100">
                    <span class="text-blue-400 text-lg">✱</span>
                    <span class="text-blue-400 font-semibold tracking-wide uppercase text-sm">{approachContent.badge.text}</span>
                    <span class="text-blue-400 text-lg">✱</span>
                </div>
                <h2 class="text-5xl font-bold text-gray-900" data-aos="fade-up" data-aos-delay="200">
                    {approachContent.heading.main}
                </h2>
            </div>
        </div>

        &lt;!&ndash; Step Images Timeline &ndash;&gt;
        <div class="relative flex justify-between items-start mb-8" data-aos="fade-up" data-aos-delay="300">
            &lt;!&ndash; Timeline Line &ndash;&gt;
            <div class="absolute top-[196px] left-0 w-full h-[1px] bg-[#eee] z-0"></div>

            {approachContent.steps.map((step, index) => (
                    <div class="relative z-10 flex flex-col items-center w-1/4" data-aos="fade-down" data-aos-delay={400 + index * 100}>
                        <div class="w-44 h-44 mb-4 flex items-center justify-center">
                            <Image src={step.img} height={40} width={40} alt={step.title} class="w-full h-full object-contain" />
                        </div>
                        <div class="relative flex flex-col items-center">
                            &lt;!&ndash; Vertical line before dot &ndash;&gt;
                            <div class="w-2.5 h-2.5 bg-black rounded-full"></div>
                            <div class="h-10 w-[1px] bg-[#eee] mb-0"></div>
                            &lt;!&ndash; Dot &ndash;&gt;
                        </div>
                    </div>
            ))}
        </div>

        &lt;!&ndash; Cards Grid &ndash;&gt;
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {approachContent.steps.map((step, index) => (
                    <div
                            class="card-hover relative w-full h-[420px] bg-gradient-to-b from-white to-blue-50 rounded-xl shadow-md border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow duration-300"
                            data-card={index}
                            data-aos="fade-up"
                            data-aos-delay={800 + index * 100}
                    >
                        <div class="card-content p-6">
                            <p class="text-blue-500 font-semibold text-xs mb-2 tracking-wide">{step.step}</p>
                            <h3 class="text-xl font-bold text-gray-900 mb-3 leading-tight">{step.title}</h3>
                            <p class="text-gray-600 text-sm mb-4 leading-relaxed">{step.description}</p>
                            <ul class="text-gray-700 space-y-2 text-sm">
                                {step.points.map((point) => {
                                    const [label, ...rest] = point.split(':');
                                    return (
                                            <li class="flex">
                                                <span class="mr-2">•</span>
                                                <span>
                                            <strong class="font-semibold text-gray-900">{label}:</strong>
                                                    {rest.length > 0 && <span class="text-gray-600">{rest.join(':')}</span>}
                                        </span>
                                            </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>
            ))}
        </div>
    </div>
</section>-->${maybeRenderHead()}<section class="py-20 bg-white" id="approach" data-astro-cid-ggrvhqta> <div class="max-w-7xl mx-auto px-6" data-astro-cid-ggrvhqta> <!-- Heading --> <div class="flex justify-between items-center mb-12 portfolio-header" data-astro-cid-ggrvhqta> <div data-astro-cid-ggrvhqta> <div class="flex items-center gap-2 mb-3" data-aos="fade-up" data-aos-delay="100" data-astro-cid-ggrvhqta> <span class="text-blue-400 text-lg" data-astro-cid-ggrvhqta>✱</span> <span class="text-blue-400 font-semibold tracking-wide uppercase text-sm" data-astro-cid-ggrvhqta>${approachContent.badge.text}</span> <span class="text-blue-400 text-lg" data-astro-cid-ggrvhqta>✱</span> </div> <h2 class="text-5xl font-bold text-gray-900" data-aos="fade-up" data-aos-delay="200" data-astro-cid-ggrvhqta> ${approachContent.heading.main} </h2> </div> </div> <!-- Desktop: Step Images Timeline --> <div class="hidden lg:block relative mb-8" data-aos="fade-up" data-aos-delay="300" data-astro-cid-ggrvhqta> <!-- Timeline Line --> <div class="absolute top-[196px] left-0 w-full h-[1px] bg-[#eee] z-0" data-astro-cid-ggrvhqta></div> <div class="flex justify-between items-start" data-astro-cid-ggrvhqta> ${approachContent.steps.map((step, index) => renderTemplate`<div class="relative z-10 flex flex-col items-center w-1/4" data-aos="fade-down"${addAttribute(400 + index * 100, "data-aos-delay")} data-astro-cid-ggrvhqta> <div class="w-44 h-44 mb-4 flex items-center justify-center" data-astro-cid-ggrvhqta> ${renderComponent($$result, "Image", $$Image, { "src": step.img, "height": 40, "width": 40, "alt": step.title, "class": "w-full h-full object-contain", "data-astro-cid-ggrvhqta": true })} </div> <div class="relative flex flex-col items-center" data-astro-cid-ggrvhqta> <div class="w-2.5 h-2.5 bg-black rounded-full" data-astro-cid-ggrvhqta></div> <div class="h-10 w-[1px] bg-[#eee] mb-0" data-astro-cid-ggrvhqta></div> </div> </div>`)} </div> </div> <!-- Mobile: Single Column Image + Card --> <div class="md:hidden space-y-8 mb-8" data-astro-cid-ggrvhqta> ${approachContent.steps.map((step, index) => renderTemplate`<div data-aos="fade-up"${addAttribute(300 + index * 100, "data-aos-delay")} data-astro-cid-ggrvhqta> <!-- Step Image --> <div class="flex flex-col items-center mb-4" data-astro-cid-ggrvhqta> <div class="w-44 h-44 mb-4 flex items-center justify-center" data-astro-cid-ggrvhqta> ${renderComponent($$result, "Image", $$Image, { "src": step.img, "height": 40, "width": 40, "alt": step.title, "class": "w-full h-full object-contain", "data-astro-cid-ggrvhqta": true })} </div> <div class="relative flex flex-col items-center" data-astro-cid-ggrvhqta> <div class="w-2.5 h-2.5 bg-black rounded-full" data-astro-cid-ggrvhqta></div> <div class="h-10 w-[1px] bg-[#eee] mb-0" data-astro-cid-ggrvhqta></div> </div> </div> <!-- Step Card --> <div class="card-hover relative w-full h-[420px] bg-gradient-to-b from-white to-blue-50 rounded-xl shadow-md border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow duration-300"${addAttribute(index, "data-card")} data-astro-cid-ggrvhqta> <div class="card-content p-6" data-astro-cid-ggrvhqta> <p class="text-blue-500 font-semibold text-xs mb-2 tracking-wide" data-astro-cid-ggrvhqta>${step.step}</p> <h3 class="text-xl font-bold text-gray-900 mb-3 leading-tight" data-astro-cid-ggrvhqta>${step.title}</h3> <p class="text-gray-600 text-sm mb-4 leading-relaxed" data-astro-cid-ggrvhqta>${step.description}</p> <ul class="text-gray-700 space-y-2 text-sm" data-astro-cid-ggrvhqta> ${step.points.map((point) => {
    const [label, ...rest] = point.split(":");
    return renderTemplate`<li class="flex" data-astro-cid-ggrvhqta> <span class="mr-2" data-astro-cid-ggrvhqta>•</span> <span data-astro-cid-ggrvhqta> <strong class="font-semibold text-gray-900" data-astro-cid-ggrvhqta>${label}:</strong> ${rest.length > 0 && renderTemplate`<span class="text-gray-600" data-astro-cid-ggrvhqta>${rest.join(":")}</span>`} </span> </li>`;
  })} </ul> </div> </div> </div>`)} </div> <!-- Tablet: Two Columns Image + Card --> <div class="hidden md:grid lg:hidden grid-cols-2 gap-8 mb-8" data-astro-cid-ggrvhqta> ${approachContent.steps.map((step, index) => renderTemplate`<div data-aos="fade-up"${addAttribute(300 + index * 100, "data-aos-delay")} data-astro-cid-ggrvhqta> <!-- Step Image --> <div class="flex flex-col items-center mb-4" data-astro-cid-ggrvhqta> <div class="w-44 h-44 mb-4 flex items-center justify-center" data-astro-cid-ggrvhqta> ${renderComponent($$result, "Image", $$Image, { "src": step.img, "height": 40, "width": 40, "alt": step.title, "class": "w-full h-full object-contain", "data-astro-cid-ggrvhqta": true })} </div> <div class="relative flex flex-col items-center" data-astro-cid-ggrvhqta> <div class="w-2.5 h-2.5 bg-black rounded-full" data-astro-cid-ggrvhqta></div> <div class="h-10 w-[1px] bg-[#eee] mb-0" data-astro-cid-ggrvhqta></div> </div> </div> <!-- Step Card --> <div class="card-hover relative w-full h-[420px] bg-gradient-to-b from-white to-blue-50 rounded-xl shadow-md border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow duration-300"${addAttribute(index, "data-card")} data-astro-cid-ggrvhqta> <div class="card-content p-6" data-astro-cid-ggrvhqta> <p class="text-blue-500 font-semibold text-xs mb-2 tracking-wide" data-astro-cid-ggrvhqta>${step.step}</p> <h3 class="text-xl font-bold text-gray-900 mb-3 leading-tight" data-astro-cid-ggrvhqta>${step.title}</h3> <p class="text-gray-600 text-sm mb-4 leading-relaxed" data-astro-cid-ggrvhqta>${step.description}</p> <ul class="text-gray-700 space-y-2 text-sm" data-astro-cid-ggrvhqta> ${step.points.map((point) => {
    const [label, ...rest] = point.split(":");
    return renderTemplate`<li class="flex" data-astro-cid-ggrvhqta> <span class="mr-2" data-astro-cid-ggrvhqta>•</span> <span data-astro-cid-ggrvhqta> <strong class="font-semibold text-gray-900" data-astro-cid-ggrvhqta>${label}:</strong> ${rest.length > 0 && renderTemplate`<span class="text-gray-600" data-astro-cid-ggrvhqta>${rest.join(":")}</span>`} </span> </li>`;
  })} </ul> </div> </div> </div>`)} </div> <!-- Desktop: Cards Grid --> <div class="hidden lg:grid grid-cols-4 gap-8" data-astro-cid-ggrvhqta> ${approachContent.steps.map((step, index) => renderTemplate`<div class="card-hover relative w-full h-[420px] bg-gradient-to-b from-white to-blue-50 rounded-xl shadow-md border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow duration-300"${addAttribute(index, "data-card")} data-aos="fade-up"${addAttribute(800 + index * 100, "data-aos-delay")} data-astro-cid-ggrvhqta> <div class="card-content p-6" data-astro-cid-ggrvhqta> <p class="text-blue-500 font-semibold text-xs mb-2 tracking-wide" data-astro-cid-ggrvhqta>${step.step}</p> <h3 class="text-xl font-bold text-gray-900 mb-3 leading-tight" data-astro-cid-ggrvhqta>${step.title}</h3> <p class="text-gray-600 text-sm mb-4 leading-relaxed" data-astro-cid-ggrvhqta>${step.description}</p> <ul class="text-gray-700 space-y-2 text-sm" data-astro-cid-ggrvhqta> ${step.points.map((point) => {
    const [label, ...rest] = point.split(":");
    return renderTemplate`<li class="flex" data-astro-cid-ggrvhqta> <span class="mr-2" data-astro-cid-ggrvhqta>•</span> <span data-astro-cid-ggrvhqta> <strong class="font-semibold text-gray-900" data-astro-cid-ggrvhqta>${label}:</strong> ${rest.length > 0 && renderTemplate`<span class="text-gray-600" data-astro-cid-ggrvhqta>${rest.join(":")}</span>`} </span> </li>`;
  })} </ul> </div> </div>`)} </div> </div> </section>  `;
}, "C:/Github/saasential-website-frontend/src/components/ApproachSection.astro", void 0);

const $$FaqSection = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="faqs" class="py-20 bg-white" data-astro-cid-4j5dlmku> <div class="max-w-7xl mx-auto px-6" data-astro-cid-4j5dlmku> <!-- Header --> <div class="flex justify-between items-center mb-12 portfolio-header" data-astro-cid-4j5dlmku> <div data-astro-cid-4j5dlmku> <div class="flex items-center gap-2 mb-3" data-aos="fade-up" data-aos-delay="100" data-astro-cid-4j5dlmku> <span class="text-blue-400 text-lg" data-astro-cid-4j5dlmku>✱</span> <span class="text-blue-400 font-semibold tracking-wide uppercase text-sm" data-astro-cid-4j5dlmku> ${faqContent.header.badge} </span> <span class="text-blue-400 text-lg" data-astro-cid-4j5dlmku>✱</span> </div> <h2 class="text-5xl font-bold text-gray-900" data-aos="fade-up" data-aos-delay="200" data-astro-cid-4j5dlmku> ${faqContent.header.title} </h2> <p class="mt-4 text-gray-600 text-lg mx-auto" data-aos="fade-up" data-aos-delay="300" data-astro-cid-4j5dlmku> ${faqContent.header.subtitle} </p> </div> </div> <!-- FAQ Items --> <div class="space-y-4 max-w-6xl" data-astro-cid-4j5dlmku> ${faqContent.faqs.map((faq, index) => renderTemplate`<details class="group border border-blue-200 bg-white rounded-2xl shadow-sm transition-all duration-300 hover:shadow-md" data-aos="fade-up"${addAttribute(400 + index * 100, "data-aos-delay")} data-astro-cid-4j5dlmku> <summary class="cursor-pointer list-none px-6 py-4 flex justify-between items-center text-left font-semibold text-gray-900 hover:text-blue-600 transition-colors" data-astro-cid-4j5dlmku> <span class="pr-4" data-astro-cid-4j5dlmku>${faq.question}</span> <svg class="w-5 h-5 text-blue-600 transition-transform duration-300 group-open:rotate-180 flex-shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" data-astro-cid-4j5dlmku> <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" data-astro-cid-4j5dlmku></path> </svg> </summary> <div class="px-6 pb-5 text-gray-600 leading-relaxed whitespace-pre-line" data-astro-cid-4j5dlmku> ${faq.answer} ${faq.highlight && renderTemplate`<a${addAttribute(faq.link, "href")} class="text-blue-600 font-semibold hover:underline mt-2 inline-block cursor-pointer" data-astro-cid-4j5dlmku> ${faq.highlight} </a>`} ${faq.continuation && renderTemplate`<span data-astro-cid-4j5dlmku> ${faq.continuation} </span>`} </div> </details>`)} </div> </div> </section>  `;
}, "C:/Github/saasential-website-frontend/src/components/FaqSection.astro", void 0);

const $$Astro = createAstro("https://www.saasential.tech");
const $$AutomatingSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$AutomatingSection;
  return renderTemplate`<!-- Automating Qualification Process Section -->${maybeRenderHead()}<section${addAttribute(automationContent.id, "id")} class="py-20 bg-white" data-astro-cid-g5rbduci> <div class="max-w-7xl mx-auto px-6" data-astro-cid-g5rbduci> <!-- Header --> <div class="flex justify-between items-center mb-12 portfolio-header" data-astro-cid-g5rbduci> <div data-astro-cid-g5rbduci> <div class="flex items-center gap-2 mb-3" data-aos="fade-up" data-aos-delay="100" data-astro-cid-g5rbduci> <span class="text-blue-400 text-lg" data-astro-cid-g5rbduci>✱</span> <span class="text-blue-400 font-semibold tracking-wide uppercase text-sm" data-astro-cid-g5rbduci> ${automationContent.subtitle} </span> <span class="text-blue-400 text-lg" data-astro-cid-g5rbduci>✱</span> </div> <h2 class="text-5xl font-bold text-gray-900" data-aos="fade-up" data-aos-delay="200" data-astro-cid-g5rbduci> ${automationContent.title} </h2> </div> </div> <!-- Content --> <div class="space-y-6 max-w-5xl text-gray-600 text-lg leading-relaxed" data-aos="fade-up" data-aos-delay="400" data-astro-cid-g5rbduci> ${automationContent.content.map((item) => renderTemplate`<p data-astro-cid-g5rbduci> ${item.text.split("API Astrolab").length > 1 ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "data-astro-cid-g5rbduci": true }, { "default": ($$result2) => renderTemplate`${item.text.split("API Astrolab")[0]}<a${addAttribute(item.link?.url, "href")} target="_blank" class="text-blue-600 font-semibold hover:underline" data-astro-cid-g5rbduci> ${item.link?.label} </a> ${item.text.split("API Astrolab")[1]}` })}` : item.text.split("Astrolab Meeting Maker").length > 1 ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "data-astro-cid-g5rbduci": true }, { "default": ($$result2) => renderTemplate`${item.text.split("Astrolab Meeting Maker")[0]}<a${addAttribute(item.link?.url, "href")} target="_blank" class="text-blue-600 font-semibold hover:underline" data-astro-cid-g5rbduci> ${item.link?.label} </a> ${item.text.split("Astrolab Meeting Maker")[1]}` })}` : item.text} </p>`)} </div> </div> </section>  `;
}, "C:/Github/saasential-website-frontend/src/components/AutomatingSection.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const seoTitle = "Saasential \u2013 FinTech & SaaS Development Experts";
  const seoDescription = "Wyoming-based software company specializing in scalable SaaS, FinTech platforms, API integration, and technical documentation. Turn your vision into production-ready digital products.";
  const seoKeywords = "SaaS development company, FinTech consulting, API integration services, software development Wyoming, technical documentation, payment integration, cloud architecture";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": seoTitle, "description": seoDescription, "keywords": seoKeywords }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Navbar", $$Navbar, {})} ${renderComponent($$result2, "HeroSection", $$HeroSection, {})} ${renderComponent($$result2, "AboutSection", $$AboutSection, {})} ${renderComponent($$result2, "ServicesSection", $$ServicesSection, {})} ${renderComponent($$result2, "PortfolioSection", $$PortfolioSection, {})} ${renderComponent($$result2, "ApproachSection", $$ApproachSection, {})} ${renderComponent($$result2, "FaqSection", $$FaqSection, {})} ${renderComponent($$result2, "AutomatingSection", $$AutomatingSection, {})} ${renderComponent($$result2, "ContactSection", $$ContactSection, {})} ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "C:/Github/saasential-website-frontend/src/pages/index.astro", void 0);

const $$file = "C:/Github/saasential-website-frontend/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
