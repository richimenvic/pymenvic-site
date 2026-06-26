import { motion } from "motion/react";
import { copy, type Locale } from "../i18n";

const videoUrl =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260603_132049_036591b8-6e92-4760-b94c-a7ea6eef315c.mp4";

function EyePill() {
  return (
    <span className="mx-1 inline-flex w-[16px] items-center justify-center rounded-full border-[2px] border-[#1a1a1a] align-middle md:mx-2 md:w-[42px] lg:w-[62px]">
      <span className="h-2 w-2 rounded-full bg-[#1a1a1a]" />
    </span>
  );
}

function ArrowIcon() {
  return (
    <svg className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M7 17 17 7M9 7h8v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

type HeroProps = {
  locale: Locale;
  onToggleLocale: () => void;
};

export default function Hero({ locale, onToggleLocale }: HeroProps) {
  const text = copy[locale].hero;

  return (
    <section className="relative flex min-h-[110vh] w-full flex-col items-center justify-start overflow-hidden bg-bg-base sm:min-h-[140vh]">
      <div className="pointer-events-none absolute left-0 top-[15vh] z-0 h-[95vh] w-full sm:top-[20vh] sm:h-[120vh]">
        <video autoPlay loop muted playsInline className="h-full w-full object-cover opacity-100">
          <source src={videoUrl} type="video/mp4" />
        </video>
        <div className="absolute left-0 top-0 h-24 w-full bg-gradient-to-b from-bg-base to-transparent sm:h-32" />
        <div className="absolute bottom-0 left-0 h-36 w-full bg-gradient-to-t from-bg-base to-transparent" />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-12 gap-x-4 px-8 pb-16 pt-[21vh] md:gap-x-8 md:px-16 lg:px-20">
        <div className="col-span-12 md:col-span-10 md:col-start-2">
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-display text-[clamp(3.35rem,10vw,8.4rem)] font-semibold leading-[0.88] tracking-[-0.075em] text-[#8e8e8e]"
          >
            <span className="text-[#1a1a1a]">{text.line1Strong}</span> <span>{text.line1Muted}</span>
            <br />
            <span>{text.line2}</span>
            <br />
            <span>
              {text.line3Before} <EyePill /> {text.line3After}
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="mt-9 w-full max-w-[560px]"
          >
            <div className="flex items-center rounded-[6px] border border-black/[0.05] bg-white p-1 pl-4 shadow-sm">
              <span className="min-w-0 flex-1 text-sm font-medium text-zinc-500">
                {text.start}
              </span>
              <a className="relative h-9 w-9 rounded-full bg-[#1a1a1a] text-white" href="/apps/" aria-label={text.openApps}>
                <ArrowIcon />
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      <button
        className="absolute right-5 top-1/2 z-20 hidden -translate-y-1/2 items-center gap-2 rounded-full border border-white/50 bg-white/35 px-4 py-2 text-xs font-semibold uppercase text-[#1a1a1a] shadow-lg shadow-black/5 backdrop-blur-md transition-colors hover:bg-white/60 md:flex"
        type="button"
        aria-label={copy[locale].nav.toggle}
        onClick={onToggleLocale}
      >
        <span className={locale === "es" ? "text-black" : "text-zinc-500"}>ES</span>
        <span className="text-zinc-400">/</span>
        <span className={locale === "en" ? "text-black" : "text-zinc-500"}>EN</span>
      </button>

      <span className="absolute bottom-8 left-8 z-20 text-xs font-semibold tracking-[-0.02em] text-[#1a1a1a] md:left-12 lg:left-20">{text.year}</span>
      <span className="absolute bottom-8 right-8 z-20 text-xs font-semibold lowercase tracking-[-0.02em] text-[#1a1a1a] md:right-12 lg:right-20">
        {text.corner}
      </span>
    </section>
  );
}
