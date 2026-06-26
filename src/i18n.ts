export type Locale = "es" | "en";

export const copy = {
  es: {
    nav: {
      apps: "apps",
      revit: "revit tools",
      learning: "aprendizaje",
      support: "soporte",
      help: "ayuda",
      cta: "explorar",
      toggle: "Cambiar idioma a ingles",
      menu: "Abrir navegacion",
    },
    hero: {
      line1Strong: "pyMenvic reune",
      line1Muted: "herramientas",
      line2: "apps, soporte y notas para",
      line3Before: "flujos digitales",
      line3After: "practicos.",
      start: "Elige por donde empezar: Revit tools, apps, aprendizaje o soporte",
      openApps: "Abrir apps",
      year: "2026",
      corner: "apps · bim · soporte",
    },
  },
  en: {
    nav: {
      apps: "apps",
      revit: "revit tools",
      learning: "learning",
      support: "support",
      help: "find help",
      cta: "explore",
      toggle: "Switch language to Spanish",
      menu: "Open navigation",
    },
    hero: {
      line1Strong: "pyMenvic brings",
      line1Muted: "tools",
      line2: "apps, support, and notes for",
      line3Before: "practical",
      line3After: "digital workflows.",
      start: "Choose where to start: Revit tools, apps, learning, or support",
      openApps: "Open apps",
      year: "2026",
      corner: "apps · bim · support",
    },
  },
} as const;
