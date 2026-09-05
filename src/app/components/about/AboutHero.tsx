import Link from "next/link";
import { useLocale } from "next-intl";
import {
  FiArrowUpRight,
  FiCheck,
  FiCode,
  FiGlobe,
  FiMapPin,
  FiMonitor,
  FiSmartphone,
} from "react-icons/fi";

type AboutHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  primaryAction: string;
  secondaryAction: string;
  locationLabel: string;
  worldwideLabel: string;
  responsiveLabel: string;
  deviceLabel: string;
};

export default function AboutHero(props: AboutHeroProps) {
  const locale = useLocale();

  return (
    <section className="relative isolate overflow-hidden rounded-[2rem] border border-indigo-100 bg-white px-6 py-10 shadow-[0_24px_80px_-40px_rgba(79,70,229,0.45)] dark:border-white/10 dark:bg-neutral-950 sm:px-10 sm:py-14 lg:px-14 lg:py-16">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_10%,rgba(99,102,241,0.13),transparent_34%),radial-gradient(circle_at_90%_85%,rgba(14,165,233,0.12),transparent_30%)] dark:bg-[radial-gradient(circle_at_15%_10%,rgba(99,102,241,0.18),transparent_34%),radial-gradient(circle_at_90%_85%,rgba(14,165,233,0.12),transparent_30%)]" />
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.035] dark:opacity-[0.06]" style={{ backgroundImage: "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
      <div className="relative grid items-center gap-14 lg:grid-cols-[1fr_0.95fr] lg:gap-20 xl:gap-24">
        <div>
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-indigo-700 dark:border-indigo-400/20 dark:bg-indigo-400/10 dark:text-indigo-300">
            <span className="h-2 w-2 rounded-full bg-indigo-500" />
            {props.eyebrow}
          </div>
          <h1 className="max-w-3xl text-4xl font-bold leading-[1.08] tracking-[-0.035em] text-slate-950 dark:text-white sm:text-5xl lg:text-[3.35rem]">{props.title}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">{props.description}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href={`/${locale}/contact`} className="cursor-pointer inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 py-3.5 font-semibold text-white shadow-lg shadow-indigo-600/20 transition hover:-translate-y-0.5 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-neutral-900">
              {props.primaryAction}<FiArrowUpRight aria-hidden="true" />
            </Link>
            <Link href={`/${locale}/projects`} className="cursor-pointer inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white/80 px-6 py-3.5 font-semibold text-slate-800 transition hover:-translate-y-0.5 hover:border-indigo-400 hover:text-indigo-600 dark:border-neutral-700 dark:bg-neutral-900/80 dark:text-white dark:hover:border-indigo-400 dark:hover:text-indigo-300">
              {props.secondaryAction}
            </Link>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-lg pb-10 pt-5 lg:pb-6" aria-hidden="true">
          <div className="absolute -right-3 top-0 z-20 flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-sm font-semibold text-slate-800 shadow-xl dark:border-neutral-700 dark:bg-neutral-800 dark:text-white sm:-right-5">
            <FiMapPin className="text-indigo-600 dark:text-indigo-300" />
            {props.locationLabel}
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-950 shadow-2xl shadow-indigo-950/25 dark:border-neutral-700">
            <div className="flex items-center justify-between border-b border-white/10 bg-slate-900 px-4 py-3">
              <div className="flex gap-1.5"><span className="h-2.5 w-2.5 rounded-full bg-red-400" /><span className="h-2.5 w-2.5 rounded-full bg-amber-400" /><span className="h-2.5 w-2.5 rounded-full bg-emerald-400" /></div>
              <div className="flex items-center gap-2 rounded-md bg-white/5 px-3 py-1 text-[10px] text-slate-400"><FiGlobe /> wds-oman.com</div>
            </div>
            <div className="grid min-h-64 grid-cols-[4.25rem_1fr] sm:min-h-72 sm:grid-cols-[5.5rem_1fr]">
              <div className="border-e border-white/10 bg-slate-900/80 p-3">
                <div className="mb-6 flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-500 text-white"><FiCode /></div>
                <div className="space-y-3"><span className="block h-1.5 w-full rounded bg-white/20" /><span className="block h-1.5 w-4/5 rounded bg-white/10" /><span className="block h-1.5 w-3/5 rounded bg-white/10" /></div>
              </div>
              <div className="relative overflow-hidden p-5 sm:p-7">
                <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-indigo-500/25 blur-3xl" />
                <div className="relative">
                  <span className="mb-4 inline-flex rounded-lg bg-indigo-500/15 p-2 text-indigo-300"><FiMonitor /></span>
                  <div className="h-3 w-4/5 rounded-full bg-white/90" />
                  <div className="mt-3 h-3 w-3/5 rounded-full bg-white/75" />
                  <div className="mt-5 space-y-2"><span className="block h-1.5 w-full rounded bg-white/15" /><span className="block h-1.5 w-5/6 rounded bg-white/15" /><span className="block h-1.5 w-4/6 rounded bg-white/15" /></div>
                  <div className="mt-7 flex gap-3"><span className="h-8 w-24 rounded-lg bg-indigo-500" /><span className="h-8 w-20 rounded-lg border border-white/20" /></div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-1 left-3 z-20 flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-xl dark:border-neutral-700 dark:bg-neutral-800 sm:-left-5">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700 dark:bg-emerald-400/10 dark:text-emerald-300"><FiCheck /></span>
            <div><span className="block text-sm font-bold text-slate-900 dark:text-white">{props.responsiveLabel}</span><span className="mt-0.5 flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400"><FiSmartphone /> {props.deviceLabel}</span></div>
          </div>

          <div className="absolute -bottom-3 right-1 z-20 hidden items-center gap-2 rounded-full bg-indigo-600 px-4 py-2 text-xs font-bold text-white shadow-lg shadow-indigo-600/25 sm:flex">
            <FiGlobe /> {props.worldwideLabel}
          </div>
        </div>
      </div>
    </section>
  );
}
