import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import type { Locale } from "./i18n";

export default function App() {
  const [locale, setLocale] = useState<Locale>(() => {
    if (typeof window === "undefined") {
      return "es";
    }

    return window.localStorage.getItem("pymenvic-locale") === "en" ? "en" : "es";
  });

  useEffect(() => {
    window.localStorage.setItem("pymenvic-locale", locale);
    document.documentElement.lang = locale;
  }, [locale]);

  const toggleLocale = () => setLocale((value) => (value === "es" ? "en" : "es"));

  return (
    <div className="min-h-screen bg-bg-base selection:bg-brand-green selection:text-black">
      <Navbar locale={locale} onToggleLocale={toggleLocale} />
      <main>
        <Hero locale={locale} onToggleLocale={toggleLocale} />
      </main>
    </div>
  );
}
