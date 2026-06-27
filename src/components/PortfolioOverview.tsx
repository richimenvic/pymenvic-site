import { copy, type Locale } from "../i18n";

type PortfolioOverviewProps = {
  locale: Locale;
};

export default function PortfolioOverview({ locale }: PortfolioOverviewProps) {
  const text = copy[locale].portfolio;

  return (
    <section className="bg-[#1a1a1a] px-6 py-20 text-white md:px-12 md:py-28 lg:px-20">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div className="max-w-[680px]">
          <p className="mb-5 w-fit rounded-[6px] border border-white/15 px-3 py-1.5 text-xs font-semibold lowercase text-zinc-300">
            {text.eyebrow}
          </p>
          <h2 className="font-display text-[clamp(2.3rem,5vw,5.2rem)] font-semibold leading-[0.96] tracking-[-0.04em] text-white">
            {text.title}
          </h2>
          <p className="mt-7 max-w-[64ch] text-base leading-7 text-zinc-300 md:text-lg">
            {text.text}
          </p>
        </div>

        <div className="grid gap-4">
          <article className="rounded-[8px] border border-white/14 bg-white/[0.06] p-5 md:p-6">
            <div className="mb-8 flex flex-wrap items-center justify-between gap-3">
              <span className="rounded-[4px] bg-[#9fff00] px-2.5 py-1 text-xs font-bold lowercase text-black">
                {text.primaryLabel}
              </span>
              <span className="text-xs font-semibold lowercase text-zinc-400">pyRevit / Revit / BIM</span>
            </div>
            <h3 className="font-display text-3xl font-semibold tracking-[-0.035em] md:text-4xl">
              {text.primaryTitle}
            </h3>
            <p className="mt-4 max-w-[58ch] text-sm leading-6 text-zinc-300 md:text-base">
              {text.primaryText}
            </p>
            <a
              className="mt-7 inline-flex min-h-11 items-center rounded-[6px] bg-white px-4 text-sm font-bold lowercase text-[#1a1a1a] transition-transform hover:-translate-y-0.5"
              href="/revit-tools/"
            >
              {text.primaryCta}
            </a>
          </article>

          <div>
            <h3 className="mb-3 text-sm font-semibold lowercase text-zinc-400">{text.secondaryTitle}</h3>
            <div className="grid gap-3">
              {text.secondary.map(([title, description, href]) => (
                <a
                  className="group grid gap-2 rounded-[8px] border border-white/10 bg-white/[0.035] p-4 text-white transition-colors hover:border-white/24 hover:bg-white/[0.07] md:grid-cols-[0.32fr_1fr_auto] md:items-center"
                  href={href}
                  key={href}
                >
                  <strong className="font-display text-xl tracking-[-0.025em]">{title}</strong>
                  <span className="text-sm leading-6 text-zinc-400">{description}</span>
                  <span className="text-lg text-zinc-500 transition-transform group-hover:translate-x-1 group-hover:text-white" aria-hidden="true">
                    -&gt;
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
