const CKM_TRANSLATIONS = {
  fr: {
    loading: "Chargement de l'expérience CKM",
    nav: {
      about: "À propos",
      services: "Services",
      method: "Méthode",
      contact: "Contact",
      cta: "Lancer une discussion"
    },
    hero: {
      badge: "Agence de vente et achats d'actifs",
      title: "Valoriser. Connecter. Conclure.",
      description:
        "CKM est une agence spécialisée dans la vente et la mise en relation entre les actifs immobiliers, miniers et les potentiels acheteurs.",
      ctaPrimary: "Découvrir nos services",
      ctaSecondary: "Parler à un conseiller",
      cardLabel: "Exécution guidée",
      cardText: "Un accompagnement structuré de l'évaluation de l'actif jusqu'à la conclusion."
    },
    about: {
      eyebrow: "Positionnement",
      title: "Une passerelle de confiance entre actifs stratégiques et capital qualifié.",
      description:
        "Nous accompagnons les propriétaires qui souhaitent céder leurs biens, ainsi que les investisseurs à la recherche d'opportunités fiables et concrètes.",
      overlayLabel: "Vision",
      overlayText: "Transformer des actifs en transactions concrètes."
    },
    services: {
      eyebrow: "Expertise",
      title: "Des services conçus pour conclure vite et bien.",
      description: "Une exécution premium alliant stratégie, réseau qualifié et accompagnement transactionnel.",
      cardCta: "Nous contacter"
    },
    method: {
      eyebrow: "Exécution",
      title: "Une méthode rigoureuse de l'analyse à la conclusion."
    },
    stats: {
      eyebrow: "Impact",
      title: "Des indicateurs qui renforcent la confiance."
    },
    why: {
      eyebrow: "Avantage CKM",
      title: "Pourquoi les investisseurs et propriétaires nous choisissent."
    },
    cta: {
      eyebrow: "Partenariat",
      title: "CKM, votre passerelle vers des transactions réussies.",
      description:
        "Notre rôle est clair : vous aider à vendre efficacement vos actifs en les connectant aux bons acheteurs.",
      button: "Démarrer maintenant"
    },
    footer: {
      description:
        "Agence spécialisée en vente et mise en relation d'actifs immobiliers et miniers.",
      slogan: "Valoriser. Connecter. Conclure.",
      contact: "Contact",
      follow: "Suivez-nous",
      rightsPrefix: "Tous droits réservés"
    },
    contact: {
      button: "Nous contacter",
      quick: "Accès rapide",
      whatsapp: "WhatsApp",
      call: "Appeler",
      email: "Email",
      facebook: "Facebook",
      linkedin: "LinkedIn",
      instagram: "Instagram"
    }
  },
  en: {
    loading: "Loading the CKM experience",
    nav: {
      about: "About",
      services: "Services",
      method: "Method",
      contact: "Contact",
      cta: "Start a discussion"
    },
    hero: {
      badge: "Asset sales and acquisition agency",
      title: "Value. Connect. Close.",
      description:
        "CKM is a specialized agency in the sale and matchmaking of real estate and mining assets with qualified prospective buyers.",
      ctaPrimary: "Explore our services",
      ctaSecondary: "Speak with an advisor",
      cardLabel: "Guided execution",
      cardText: "Structured support from asset valuation through to closing."
    },
    about: {
      eyebrow: "Positioning",
      title: "A trusted bridge between strategic assets and qualified capital.",
      description:
        "We support owners looking to sell their assets, as well as investors seeking reliable, concrete opportunities.",
      overlayLabel: "Vision",
      overlayText: "Turn assets into concrete transactions."
    },
    services: {
      eyebrow: "Expertise",
      title: "Services designed to close quickly and successfully.",
      description: "Premium execution combining strategy, a qualified network, and transaction support.",
      cardCta: "Contact us"
    },
    method: {
      eyebrow: "Execution",
      title: "A rigorous method from analysis through to closing."
    },
    stats: {
      eyebrow: "Impact",
      title: "Indicators that build confidence."
    },
    why: {
      eyebrow: "CKM Advantage",
      title: "Why investors and owners choose us."
    },
    cta: {
      eyebrow: "Partnership",
      title: "CKM, your gateway to successful transactions.",
      description:
        "Our role is clear: help you sell your assets efficiently by connecting them with the right buyers.",
      button: "Get started now"
    },
    footer: {
      description: "Agency specialized in the sale and matchmaking of real estate and mining assets.",
      slogan: "Value. Connect. Close.",
      contact: "Contact",
      follow: "Follow us",
      rightsPrefix: "All rights reserved"
    },
    contact: {
      button: "Contact us",
      quick: "Quick access",
      whatsapp: "WhatsApp",
      call: "Call",
      email: "Email",
      facebook: "Facebook",
      linkedin: "LinkedIn",
      instagram: "Instagram"
    }
  }
};

const FALLBACK_LANGUAGE = "fr";
const LANG_STORAGE_KEY = "ckm-language";

function getNestedValue(object, path) {
  return path.split(".").reduce((acc, key) => (acc && acc[key] ? acc[key] : null), object);
}

function detectInitialLanguage() {
  const savedLanguage = localStorage.getItem(LANG_STORAGE_KEY);
  if (savedLanguage && CKM_TRANSLATIONS[savedLanguage]) {
    return savedLanguage;
  }

  const browserLanguage = (navigator.language || FALLBACK_LANGUAGE).slice(0, 2).toLowerCase();
  return CKM_TRANSLATIONS[browserLanguage] ? browserLanguage : FALLBACK_LANGUAGE;
}

function getSocialIconSvg(name) {
  const base = 'class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"';
  const icons = {
    facebook: `<svg ${base}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>`,
    linkedin: `<svg ${base}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>`,
    instagram: `<svg ${base}><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><circle cx="12" cy="12" r="3.5"></circle><circle cx="17.5" cy="6.5" r="1"></circle></svg>`
  };
  return icons[name] || "";
}

function buildServices(currentLang, config) {
  const servicesGrid = document.getElementById("services-grid");
  const cardCta = CKM_TRANSLATIONS[currentLang].services.cardCta;
  servicesGrid.innerHTML = config.services
    .map(
      (service) => `
      <article class="reveal group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-soft transition duration-500 hover:-translate-y-1 hover:shadow-luxury">
        <div class="relative h-44 overflow-hidden border-b border-slate-200 bg-slate-100">
          <!-- Replace with dedicated service visual -->
          <img src="${service.image || `services-image-${service.n}.jpg`}" alt="CKM service card visual" class="h-full w-full object-cover transition duration-700 group-hover:scale-105" loading="lazy" />
          <div class="absolute left-4 top-4 inline-flex rounded-xl border border-slate-300 bg-white/90 p-2.5">
            <i data-lucide="${service.icon}" class="h-5 w-5 text-slate-700"></i>
          </div>
        </div>
        <div class="p-6">
          <h3 class="text-lg font-semibold text-slate-950">${service.title[currentLang]}</h3>
          <p class="mt-3 text-sm leading-relaxed text-slate-600">${service.description[currentLang]}</p>
          <a href="#contact" class="mt-5 inline-flex items-center gap-2 rounded-xl border border-slate-300 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-slate-800 transition hover:border-slate-900 hover:text-slate-900">
            ${cardCta}
            <i data-lucide="arrow-up-right" class="h-4 w-4"></i>
          </a>
        </div>
      </article>
    `
    )
    .join("");
}

function buildMethod(currentLang, config) {
  const methodTimeline = document.getElementById("method-timeline");
  methodTimeline.innerHTML = config.method
    .map(
      (step, index) => `
      <article class="reveal relative rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
        <div class="absolute left-6 top-0 h-1 w-16 -translate-y-1/2 rounded-full bg-gradient-to-r from-slate-500 to-slate-700"></div>
        <span class="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-300 text-xs font-semibold text-slate-700">
          ${String(index + 1).padStart(2, "0")}
        </span>
        <div class="mb-4 inline-flex rounded-2xl border border-slate-200 bg-slate-50 p-2.5">
          <i data-lucide="${step.icon}" class="h-5 w-5 text-slate-700"></i>
        </div>
        <h3 class="text-base font-semibold text-slate-950">${step.title[currentLang]}</h3>
        <p class="mt-3 text-sm leading-relaxed text-slate-600">${step.description[currentLang]}</p>
      </article>
    `
    )
    .join("");
}

function buildStats(currentLang, config) {
  const statsGrid = document.getElementById("stats-grid");
  statsGrid.innerHTML = config.stats
    .map(
      (stat) => `
      <article class="reveal rounded-3xl border border-slate-200 bg-white p-8 shadow-soft">
        <p class="counter-value font-display text-5xl text-slate-950" data-target="${stat.value}" data-suffix="${stat.suffix}">
          0${stat.suffix}
        </p>
        <p class="mt-3 text-sm text-slate-600">${stat.label[currentLang]}</p>
      </article>
    `
    )
    .join("");
}

function buildWhyChooseUs(currentLang, config) {
  const whyGrid = document.getElementById("why-grid");
  whyGrid.innerHTML = config.whyChooseUs
    .map(
      (item) => `
      <article class="reveal rounded-3xl border border-slate-200 bg-white p-6 shadow-soft transition duration-500 hover:border-slate-300 hover:shadow-luxury">
        <div class="inline-flex rounded-2xl border border-slate-200 bg-slate-50 p-3">
          <i data-lucide="${item.icon}" class="h-5 w-5 text-slate-700"></i>
        </div>
        <h3 class="mt-5 text-lg font-semibold text-slate-950">${item.title[currentLang]}</h3>
        <p class="mt-3 text-sm leading-relaxed text-slate-600">${item.description[currentLang]}</p>
      </article>
    `
    )
    .join("");
}

function buildFooter(currentLang, config) {
  const contactList = document.getElementById("footer-contact-list");
  const socialList = document.getElementById("footer-social-list");
  const hours = document.getElementById("footer-hours");
  const year = document.getElementById("footer-year");

  const phoneLinks = config.contact.phones
    .map(
      (phone) => `
      <li>
        <a class="inline-flex items-center gap-2 transition hover:text-slate-900" href="tel:${phone.replace(/\s+/g, "")}">
          <i data-lucide="phone" class="h-4 w-4"></i>
          ${phone}
        </a>
      </li>
    `
    )
    .join("");

  contactList.innerHTML = `
    ${phoneLinks}
    <li>
      <a class="inline-flex items-center gap-2 transition hover:text-slate-900" href="mailto:${config.company.email}">
        <i data-lucide="mail" class="h-4 w-4"></i>
        ${config.company.email}
      </a>
    </li>
    <li class="inline-flex items-start gap-2">
      <i data-lucide="map-pin" class="mt-0.5 h-4 w-4"></i>
      <span>${config.company.address}</span>
    </li>
  `;

  socialList.innerHTML = `
    <li><a class="inline-flex items-center gap-2 transition hover:text-slate-900" href="${config.social.facebook}" target="_blank" rel="noopener noreferrer">${getSocialIconSvg("facebook")}Facebook</a></li>
    <li><a class="inline-flex items-center gap-2 transition hover:text-slate-900" href="${config.social.linkedin}" target="_blank" rel="noopener noreferrer">${getSocialIconSvg("linkedin")}LinkedIn</a></li>
    <li><a class="inline-flex items-center gap-2 transition hover:text-slate-900" href="${config.social.instagram}" target="_blank" rel="noopener noreferrer">${getSocialIconSvg("instagram")}Instagram</a></li>
  `;

  hours.textContent = config.company.businessHours[currentLang];
  year.textContent = new Date().getFullYear();
}

function buildFloatingContacts(currentLang, config) {
  const floatingLinks = document.getElementById("floating-contact-links");
  const labels = CKM_TRANSLATIONS[currentLang].contact;
  const primaryPhone = config.contact.phones[0];

  floatingLinks.innerHTML = `
    <a class="contact-panel-link flex items-center justify-between rounded-xl border border-slate-200 px-3 py-2 text-sm transition hover:border-green-400 hover:bg-green-50" href="https://wa.me/${config.contact.whatsapp.replace(/\D+/g, "")}" target="_blank" rel="noopener noreferrer">
      <span>${labels.whatsapp}</span>
      <i data-lucide="message-circle" class="h-4 w-4"></i>
    </a>
    <a class="contact-panel-link flex items-center justify-between rounded-xl border border-slate-200 px-3 py-2 text-sm transition hover:border-slate-400 hover:bg-slate-100" href="tel:${primaryPhone.replace(/\s+/g, "")}">
      <span>${labels.call}</span>
      <i data-lucide="phone" class="h-4 w-4"></i>
    </a>
    <a class="contact-panel-link flex items-center justify-between rounded-xl border border-slate-200 px-3 py-2 text-sm transition hover:border-slate-400 hover:bg-slate-100" href="mailto:${config.company.email}">
      <span>${labels.email}</span>
      <i data-lucide="mail" class="h-4 w-4"></i>
    </a>
    <a class="contact-panel-link flex items-center justify-between rounded-xl border border-slate-200 px-3 py-2 text-sm transition hover:border-slate-400 hover:bg-slate-100" href="${config.social.facebook}" target="_blank" rel="noopener noreferrer">
      <span>${labels.facebook}</span>
      ${getSocialIconSvg("facebook")}
    </a>
    <a class="contact-panel-link flex items-center justify-between rounded-xl border border-slate-200 px-3 py-2 text-sm transition hover:border-slate-400 hover:bg-slate-100" href="${config.social.linkedin}" target="_blank" rel="noopener noreferrer">
      <span>${labels.linkedin}</span>
      ${getSocialIconSvg("linkedin")}
    </a>
    <a class="contact-panel-link flex items-center justify-between rounded-xl border border-slate-200 px-3 py-2 text-sm transition hover:border-slate-400 hover:bg-slate-100" href="${config.social.instagram}" target="_blank" rel="noopener noreferrer">
      <span>${labels.instagram}</span>
      ${getSocialIconSvg("instagram")}
    </a>
  `;
}

function updateSchema(currentLang, config) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: config.company.name,
    url: config.company.website,
    slogan: currentLang === "fr" ? config.company.slogan : "Value. Connect. Close.",
    description:
      currentLang === "fr"
        ? "Agence spécialisée dans la vente et la mise en relation entre actifs immobiliers, miniers et acheteurs qualifiés."
        : "Agency specialized in the sale and matchmaking of real estate and mining assets with qualified buyers.",
    email: config.company.email,
    telephone: config.contact.phones[0],
    address: {
      "@type": "PostalAddress",
      streetAddress: config.company.address
    },
    sameAs: [config.social.facebook, config.social.linkedin, config.social.instagram]
  };

  document.getElementById("schema-org").textContent = JSON.stringify(schema);
}

function applyTranslations(currentLang) {
  document.documentElement.lang = currentLang;
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n");
    const value = getNestedValue(CKM_TRANSLATIONS[currentLang], key);
    if (value) {
      element.textContent = value;
    }
  });

  document.querySelectorAll(".lang-btn").forEach((button) => {
    const isActive = button.dataset.lang === currentLang;
    button.classList.toggle("bg-slate-900", isActive);
    button.classList.toggle("text-white", isActive);
    button.classList.toggle("text-slate-700", !isActive);
  });
}

function initRevealObserver() {
  const revealElements = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
  );

  revealElements.forEach((element) => observer.observe(element));
}

function initCounters() {
  const counters = document.querySelectorAll(".counter-value");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }
        const element = entry.target;
        const target = Number(element.getAttribute("data-target"));
        const suffix = element.getAttribute("data-suffix") || "";
        const duration = 1600;
        const start = performance.now();

        function updateCounter(now) {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          element.textContent = `${Math.round(target * eased)}${suffix}`;
          if (progress < 1) {
            requestAnimationFrame(updateCounter);
          }
        }

        requestAnimationFrame(updateCounter);
        observer.unobserve(element);
      });
    },
    { threshold: 0.35 }
  );

  counters.forEach((counter) => observer.observe(counter));
}

function initScrollProgress() {
  const progressBar = document.getElementById("scroll-progress");
  window.addEventListener(
    "scroll",
    () => {
      const scrollTop = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const value = maxScroll > 0 ? scrollTop / maxScroll : 0;
      progressBar.style.transform = `scaleX(${value})`;
    },
    { passive: true }
  );
}

function initActiveNav() {
  const sections = document.querySelectorAll("main section, footer");
  const navLinks = document.querySelectorAll(".nav-link");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }
        navLinks.forEach((link) => {
          const isMatch = link.getAttribute("href") === `#${entry.target.id}`;
          link.classList.toggle("text-slate-950", isMatch);
          link.classList.toggle("font-semibold", isMatch);
        });
      });
    },
    { threshold: 0.35 }
  );

  sections.forEach((section) => {
    if (section.id) {
      observer.observe(section);
    }
  });
}

function initPointerEffect() {
  const glow = document.getElementById("pointer-glow");
  if (!glow || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return;
  }

  window.addEventListener(
    "mousemove",
    (event) => {
      glow.style.transform = `translate(${event.clientX - 105}px, ${event.clientY - 105}px)`;
    },
    { passive: true }
  );
}

function initParallax() {
  const hero = document.getElementById("hero");
  const movingNodes = hero.querySelectorAll(".reveal, .glass-panel");

  window.addEventListener(
    "scroll",
    () => {
      const y = window.scrollY;
      if (y > 800) {
        return;
      }
      movingNodes.forEach((node, index) => {
        const speed = 0.04 + index * 0.01;
        node.style.transform = `translateY(${y * speed}px)`;
      });
    },
    { passive: true }
  );
}

function initFloatingContactPanel() {
  const button = document.getElementById("floating-contact-btn");
  const panel = document.getElementById("contact-panel");
  let isOpen = false;

  function animateLinks() {
    const links = panel.querySelectorAll(".contact-panel-link");
    links.forEach((link, index) => {
      link.style.transitionDelay = isOpen ? `${index * 38}ms` : "0ms";
    });
  }

  function openPanel() {
    isOpen = true;
    panel.classList.add("is-open");
    panel.setAttribute("aria-hidden", "false");
    button.setAttribute("aria-expanded", "true");
    animateLinks();
  }

  function closePanel() {
    isOpen = false;
    panel.classList.remove("is-open");
    panel.setAttribute("aria-hidden", "true");
    button.setAttribute("aria-expanded", "false");
    animateLinks();
  }

  button.addEventListener("click", () => {
    if (isOpen) {
      closePanel();
      return;
    }
    openPanel();
  });

  document.addEventListener("click", (event) => {
    if (!panel.contains(event.target) && !button.contains(event.target)) {
      closePanel();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && isOpen) {
      closePanel();
    }
  });
}

function initMobileMenu() {
  const button = document.getElementById("mobile-menu-btn");
  const menu = document.getElementById("mobile-menu");
  button.addEventListener("click", () => {
    const isHidden = menu.classList.toggle("hidden");
    button.setAttribute("aria-expanded", String(!isHidden));
  });

  document.querySelectorAll("#mobile-menu .nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.add("hidden");
      button.setAttribute("aria-expanded", "false");
    });
  });
}

function initLoadingScreen() {
  const loadingScreen = document.getElementById("loading-screen");
  window.addEventListener("load", () => {
    loadingScreen.classList.add("opacity-0", "pointer-events-none");
    setTimeout(() => loadingScreen.remove(), 750);
  });
}

function initLanguageSystem(onLanguageChange) {
  document.querySelectorAll(".lang-btn").forEach((button) => {
    button.addEventListener("click", () => {
      const lang = button.dataset.lang;
      localStorage.setItem(LANG_STORAGE_KEY, lang);
      onLanguageChange(lang);
    });
  });
}

function refreshIcons() {
  if (window.lucide && typeof window.lucide.createIcons === "function") {
    window.lucide.createIcons();
  }
}

function renderApp(currentLang, config) {
  applyTranslations(currentLang);
  buildServices(currentLang, config);
  buildMethod(currentLang, config);
  buildStats(currentLang, config);
  buildWhyChooseUs(currentLang, config);
  buildFooter(currentLang, config);
  buildFloatingContacts(currentLang, config);
  updateSchema(currentLang, config);
  refreshIcons();
  initRevealObserver();
  initCounters();
}

function init() {
  const config = window.CKM_CONFIG;
  if (!config) {
    throw new Error("CKM_CONFIG is missing. Ensure config.js is loaded before app.js");
  }

  let currentLanguage = detectInitialLanguage();
  renderApp(currentLanguage, config);

  initLanguageSystem((nextLang) => {
    currentLanguage = CKM_TRANSLATIONS[nextLang] ? nextLang : FALLBACK_LANGUAGE;
    renderApp(currentLanguage, config);
  });

  initScrollProgress();
  initActiveNav();
  initPointerEffect();
  initParallax();
  initFloatingContactPanel();
  initMobileMenu();
  initLoadingScreen();
}

init();
