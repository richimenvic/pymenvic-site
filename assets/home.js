import React from "react";
import { createRoot } from "react-dom/client";
import { motion, useReducedMotion } from "motion/react";

const routes = [
  ["Revit Tools", "pyRevit utilities, BIM checks, workflow support."],
  ["Apps", "Padel Score and selected Menvic app previews."],
  ["Support", "Contact, troubleshooting, and policy routes."],
  ["Learning", "Notes for Revit, automation, and practical workflows."],
];

const focusAreas = [
  {
    label: "BIM / Revit",
    title: "Production support for Revit teams",
    text: "Utilities and guidance for Revit, pyRevit, project documentation, model auditing, and repeatable office standards.",
    items: [
      "Revit and pyRevit productivity tools",
      "Documentation workflow support",
      "Model checks and office standards",
      "Technical notes for BIM production",
    ],
    href: "/revit-tools/",
    cta: "Open Revit Tools",
    aria: "BIM tools links",
  },
  {
    label: "Apps / support",
    title: "Public pages for Menvic apps",
    text: "A clean home for app pages, privacy policies, support links, and compatibility notes.",
    items: [
      "Padel Score support and privacy",
      "Selected app previews",
      "Clear contact routes",
      "Reviewer-friendly policy pages",
    ],
    href: "/apps/",
    cta: "Open Apps",
    aria: "Apps identity links",
  },
];

const siteAreas = [
  ["/apps/", "Apps", "Padel Score and selected Menvic app previews.", "Open /apps/"],
  ["/revit-tools/", "Revit Tools", "pyMenvic utilities for BIM and Revit production.", "Open /revit-tools/"],
  ["/learning/", "Learning", "Practical notes for Revit workflows, automation, and technical resources.", "Open /learning/"],
  ["/support/", "Support", "Contact paths, app support, privacy routes, and troubleshooting context.", "Open /support/"],
];

const resources = [
  ["Support requests", "Include the app or tool name, device or Revit context, expected result, and actual result."],
  ["App review pages", "Privacy and support pages are kept reachable for app stores, reviewers, and users."],
  ["Learning notes", "Short practical references for BIM workflows, pyRevit automation, and small technical projects."],
];

function useMotionPreset() {
  const reduced = useReducedMotion();

  return {
    reduced,
    fadeUp: {
      hidden: { opacity: reduced ? 1 : 0, y: reduced ? 0 : 18 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.58, ease: [0.22, 1, 0.36, 1] } },
    },
    stagger: {
      hidden: {},
      visible: { transition: { staggerChildren: reduced ? 0 : 0.075, delayChildren: reduced ? 0 : 0.08 } },
    },
  };
}

function Header() {
  const { reduced } = useMotionPreset();

  return React.createElement(
    motion.header,
    {
      className: "topbar",
      initial: { opacity: reduced ? 1 : 0, y: reduced ? 0 : -10 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
    },
    React.createElement(
      "a",
      { className: "brand", href: "/", "aria-label": "pyMenvic home" },
      React.createElement("span", { className: "brand-mark", "aria-hidden": "true" }),
      React.createElement("span", null, "pyMenvic"),
    ),
    React.createElement(
      "nav",
      { className: "top-nav", "aria-label": "Main navigation" },
      React.createElement("a", { className: "nav-link", href: "/apps/" }, "Apps"),
      React.createElement("a", { className: "nav-link", href: "/revit-tools/" }, "Revit Tools"),
      React.createElement("a", { className: "nav-link", href: "/learning/" }, "Learning"),
      React.createElement("a", { className: "nav-link", href: "/support/" }, "Support"),
      React.createElement("a", { className: "nav-cta", href: "/revit-tools/" }, "Explore Revit Tools"),
    ),
  );
}

function Hero() {
  const { fadeUp, stagger, reduced } = useMotionPreset();

  return React.createElement(
    "section",
    { className: "hero", "aria-labelledby": "page-title" },
    React.createElement(
      motion.div,
      {
        className: "hero-copy",
        variants: stagger,
        initial: "hidden",
        animate: "visible",
      },
      React.createElement(motion.p, { className: "kicker", variants: fadeUp }, "Menvic technical hub"),
      React.createElement(motion.h1, { id: "page-title", variants: fadeUp }, "Apps, Revit tools, and support pages in one place."),
      React.createElement(motion.p, { className: "subtitle", variants: fadeUp }, "pyMenvic collects public material for Menvic software: pyRevit utilities, compact apps, support paths, privacy pages, and learning notes."),
      React.createElement(motion.p, { className: "hero-text", variants: fadeUp }, "Revit production tools remain the technical core. Apps are documented here when they need public support, policy, or preview pages."),
      React.createElement(
        motion.nav,
        { className: "hero-actions", "aria-label": "Primary homepage links", variants: fadeUp },
        React.createElement("a", { className: "button", href: "/revit-tools/" }, "Explore Revit Tools"),
        React.createElement("a", { className: "button secondary", href: "/apps/" }, "View Apps"),
      ),
    ),
    React.createElement(
      motion.aside,
      {
        className: "hub-panel",
        "aria-label": "pyMenvic routes",
        initial: { opacity: reduced ? 1 : 0, y: reduced ? 0 : 24, filter: reduced ? "none" : "blur(8px)" },
        animate: { opacity: 1, y: 0, filter: "blur(0px)" },
        transition: { duration: 0.68, delay: reduced ? 0 : 0.16, ease: [0.22, 1, 0.36, 1] },
      },
      React.createElement("strong", null, "pyMenvic routes"),
      React.createElement("p", null, "A compact directory for the public surfaces Menvic needs to keep clear and reachable."),
      React.createElement(
        motion.div,
        {
          className: "hub-map",
          "aria-label": "pyMenvic focus areas",
          variants: stagger,
          initial: "hidden",
          animate: "visible",
        },
        routes.map(([title, text]) =>
          React.createElement(
            motion.div,
            { className: "hub-map-item", key: title, variants: fadeUp },
            React.createElement("strong", null, title),
            React.createElement("small", null, text),
          ),
        ),
      ),
    ),
  );
}

function FocusAreas() {
  const { fadeUp, stagger } = useMotionPreset();

  return React.createElement(
    motion.section,
    {
      className: "section",
      id: "identity",
      "aria-labelledby": "identity-title",
      initial: "hidden",
      whileInView: "visible",
      viewport: { once: true, amount: 0.25 },
      variants: stagger,
    },
    React.createElement(
      motion.div,
      { className: "section-heading", variants: fadeUp },
      React.createElement("h2", { id: "identity-title" }, "Built around practical routes."),
      React.createElement("p", { className: "section-intro" }, "Each area has a defined job. Revit users get production-oriented resources, app users get compatibility and support details, and reviewers can reach privacy pages directly."),
    ),
    React.createElement(
      "div",
      { className: "identity-grid", "aria-label": "pyMenvic identity areas" },
      focusAreas.map((area) =>
        React.createElement(
          motion.article,
          { className: "identity-card", key: area.title, variants: fadeUp, whileHover: { y: -3 } },
          React.createElement("span", { className: "identity-label" }, area.label),
          React.createElement("div", null, React.createElement("h3", null, area.title), React.createElement("p", { className: "card-description" }, area.text)),
          React.createElement("ul", { className: "identity-list" }, area.items.map((item) => React.createElement("li", { key: item }, item))),
          React.createElement("nav", { className: "links", "aria-label": area.aria }, React.createElement("a", { className: "button secondary", href: area.href }, area.cta)),
        ),
      ),
    ),
  );
}

function RouteGrid() {
  const { fadeUp, stagger } = useMotionPreset();

  return React.createElement(
    motion.section,
    {
      className: "section",
      id: "site-areas",
      "aria-labelledby": "site-areas-title",
      initial: "hidden",
      whileInView: "visible",
      viewport: { once: true, amount: 0.25 },
      variants: stagger,
    },
    React.createElement(
      motion.div,
      { className: "section-heading", variants: fadeUp },
      React.createElement("h2", { id: "site-areas-title" }, "Find the right route quickly."),
      React.createElement("p", { className: "section-intro" }, "The main routes stay intentionally small. They are entry points to tool documentation, app pages, learning material, and support information."),
    ),
    React.createElement(
      "div",
      { className: "route-grid", "aria-label": "pyMenvic sections" },
      siteAreas.map(([href, title, text, marker]) =>
        React.createElement(
          motion.a,
          { className: "route-item", href, key: href, variants: fadeUp, whileHover: { y: -4 }, whileTap: { y: 1 } },
          React.createElement("strong", null, title),
          React.createElement("span", { className: "route-meta" }, text),
          React.createElement("span", { className: "route-arrow" }, marker),
        ),
      ),
    ),
  );
}

function TechnicalCore() {
  const { fadeUp } = useMotionPreset();

  return React.createElement(
    motion.section,
    { className: "section", "aria-labelledby": "featured-title", initial: "hidden", whileInView: "visible", viewport: { once: true, amount: 0.3 }, variants: fadeUp },
    React.createElement(
      "article",
      { className: "feature technical-core" },
      React.createElement("div", null, React.createElement("h2", { id: "featured-title" }, "Revit tools are the technical core."), React.createElement("p", { className: "card-description" }, "pyMenvic treats Revit utilities as production support, not promotional software. The public route focuses on practical workflows, pyRevit context, documentation helpers, and support availability.")),
      React.createElement("nav", { className: "links", "aria-label": "Revit tools links" }, React.createElement("a", { className: "button", href: "/revit-tools/" }, "Open Revit Tools"), React.createElement("a", { className: "button secondary", href: "mailto:contacto@menvic.com" }, "Contact Menvic")),
    ),
  );
}

function Resources() {
  const { fadeUp, stagger } = useMotionPreset();

  return React.createElement(
    motion.section,
    { className: "section", id: "resources", "aria-labelledby": "resources-title", initial: "hidden", whileInView: "visible", viewport: { once: true, amount: 0.25 }, variants: stagger },
    React.createElement(motion.div, { className: "section-heading", variants: fadeUp }, React.createElement("h2", { id: "resources-title" }, "Resources with a clear purpose.")),
    React.createElement(
      "div",
      { className: "resource-list" },
      resources.map(([title, text]) =>
        React.createElement(
          motion.div,
          { className: "resource-row", key: title, variants: fadeUp },
          React.createElement("strong", null, title),
          React.createElement("span", { className: "route-meta" }, text),
        ),
      ),
    ),
  );
}

function FinalCta() {
  const { fadeUp } = useMotionPreset();

  return React.createElement(
    motion.section,
    { className: "section", "aria-labelledby": "final-cta-title", initial: "hidden", whileInView: "visible", viewport: { once: true, amount: 0.35 }, variants: fadeUp },
    React.createElement(
      "article",
      { className: "final-cta" },
      React.createElement("div", null, React.createElement("h2", { id: "final-cta-title" }, "Start with the route you need."), React.createElement("p", { className: "card-description" }, "Open the Revit tools area for BIM production work, browse app pages for public support, or use the support route to contact Menvic directly.")),
      React.createElement("nav", { className: "links", "aria-label": "Final homepage links" }, React.createElement("a", { className: "button", href: "/revit-tools/" }, "Explore Revit Tools"), React.createElement("a", { className: "button secondary", href: "/support/" }, "Get Support")),
    ),
  );
}

function Footer() {
  return React.createElement(
    "footer",
    { className: "footer" },
    React.createElement("p", null, "\u00a9 Menvic"),
    React.createElement("p", null, "pyMenvic is a collection of BIM / Revit tools, practical apps, and learning resources by Menvic."),
    React.createElement("p", null, "Support: ", React.createElement("a", { className: "contact-link", href: "mailto:contacto@menvic.com" }, "contacto@menvic.com")),
    React.createElement(
      "nav",
      { className: "footer-links", "aria-label": "Footer navigation" },
      React.createElement("a", { href: "/apps/" }, "Apps"),
      React.createElement("a", { href: "/revit-tools/" }, "Revit Tools"),
      React.createElement("a", { href: "/learning/" }, "Learning"),
      React.createElement("a", { href: "/support/" }, "Support"),
      React.createElement("a", { href: "/padelscoregt5/privacy/" }, "PadelScoreGT5 Privacy Policy"),
      React.createElement("a", { href: "/padelscoregt5/support/" }, "PadelScoreGT5 Support"),
    ),
  );
}

function App() {
  return React.createElement(
    "main",
    { className: "page", id: "content" },
    React.createElement(Header),
    React.createElement(Hero),
    React.createElement(FocusAreas),
    React.createElement(RouteGrid),
    React.createElement(TechnicalCore),
    React.createElement(Resources),
    React.createElement(FinalCta),
    React.createElement(Footer),
  );
}

try {
  createRoot(document.getElementById("root")).render(React.createElement(App));
} catch (error) {
  document.documentElement.dataset.appError = error instanceof Error ? error.message : "React render failed";
  console.error(error);
}
