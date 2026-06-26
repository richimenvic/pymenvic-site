import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const navLinks = [
  ["apps", "/apps/"],
  ["revit tools", "/revit-tools/"],
  ["learning", "/learning/"],
  ["support", "/support/"],
];

function BrandMark() {
  return (
    <svg className="h-8 w-8 fill-[#1a1a1a]" viewBox="0 0 64 64" aria-hidden="true">
      <path d="M32 5c6.4 0 11.6 5.2 11.6 11.6 0 2.2-.6 4.3-1.7 6.1 1.8-1.1 3.9-1.7 6.1-1.7C54.6 21 60 26.4 60 33s-5.4 12-12 12c-2.2 0-4.2-.6-6-1.6 1 1.8 1.6 3.8 1.6 6C43.6 55.8 38.4 61 32 61S20.4 55.8 20.4 49.4c0-2.2.6-4.2 1.6-6-1.8 1-3.8 1.6-6 1.6C9.4 45 4 39.6 4 33s5.4-12 12-12c2.2 0 4.3.6 6.1 1.7-1.1-1.8-1.7-3.9-1.7-6.1C20.4 10.2 25.6 5 32 5Zm0 19.5a8.5 8.5 0 1 0 0 17 8.5 8.5 0 0 0 0-17Z" />
    </svg>
  );
}

function Hamburger({ open }: { open: boolean }) {
  return (
    <span className="relative block h-5 w-7" aria-hidden="true">
      <motion.span
        className="absolute left-0 top-1 h-[2px] w-7 rounded-full bg-[#1a1a1a]"
        animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
      />
      <motion.span
        className="absolute left-0 top-1/2 h-[2px] w-7 rounded-full bg-[#1a1a1a]"
        animate={open ? { opacity: 0, x: 8 } : { opacity: 1, x: 0 }}
      />
      <motion.span
        className="absolute bottom-1 left-0 h-[2px] w-7 rounded-full bg-[#1a1a1a]"
        animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
      />
    </span>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-0 top-0 z-50 w-full bg-gradient-to-b from-[#f1f1f1]/80 to-transparent py-6 backdrop-blur-[2px] md:py-10">
      <div className="mx-auto grid max-w-7xl grid-cols-12 items-center gap-x-4 px-6 md:gap-x-8 md:px-12 lg:px-20">
        <a className="col-span-7 flex items-center gap-3 md:col-span-3" href="/" aria-label="pyMenvic home">
          <BrandMark />
          <span className="font-display text-[1.65rem] font-bold tracking-[-0.04em] text-[#1a1a1a]">pyMenvic</span>
        </a>

        <nav className="col-span-6 hidden items-center justify-center gap-7 md:flex" aria-label="Main navigation">
          {navLinks.map(([label, href]) => (
            <a key={href} href={href} className="text-[0.78rem] font-semibold lowercase tracking-[-0.01em] text-zinc-700 transition-colors hover:text-black">
              {label}
            </a>
          ))}
        </nav>

        <div className="col-span-5 flex items-center justify-end gap-3 md:col-span-3">
          <a className="hidden text-[0.78rem] font-semibold lowercase text-zinc-700 transition-colors hover:text-black sm:inline-flex" href="/support/">
            find help
          </a>
          <a className="hidden rounded-full bg-[#1a1a1a] px-4 py-2 text-[0.8rem] font-semibold lowercase text-white transition-transform hover:-translate-y-0.5 sm:inline-flex" href="/revit-tools/">
            get started <span className="ml-1">→</span>
          </a>
          <button
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white/50 md:hidden"
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            <Hamburger open={open} />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -18 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="mx-6 mt-5 rounded-[24px] border border-black/10 bg-white/75 p-5 shadow-2xl shadow-black/10 backdrop-blur-xl md:hidden"
          >
            <nav className="grid gap-2" aria-label="Mobile navigation">
              {navLinks.map(([label, href]) => (
                <a key={href} href={href} className="rounded-2xl px-3 py-3 font-display text-2xl font-semibold lowercase tracking-[-0.04em] text-[#1a1a1a]">
                  {label}
                </a>
              ))}
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
