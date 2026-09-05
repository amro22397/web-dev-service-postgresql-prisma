import Link from "next/link";
import { useLocale } from "next-intl";
import { FiArrowUpRight } from "react-icons/fi";

type AboutCtaProps = { title: string; description: string; action: string };

export default function AboutCta(props: AboutCtaProps) {
  const locale = useLocale();
  return (
    <section className="relative isolate overflow-hidden rounded-3xl bg-gradient-to-r from-indigo-700 via-indigo-600 to-blue-600 px-6 py-12 text-center text-white shadow-xl shadow-indigo-600/20 sm:px-10 lg:py-16">
      <div className="pointer-events-none absolute -left-20 -top-24 -z-10 h-64 w-64 rounded-full border-[40px] border-white/5" />
      <div className="pointer-events-none absolute -bottom-28 -right-16 -z-10 h-64 w-64 rounded-full border-[40px] border-white/5" />
      <h2 className="text-3xl font-bold sm:text-4xl">{props.title}</h2>
      <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-indigo-100">{props.description}</p>
      <Link href={`/${locale}/contact`} className="cursor-pointer mt-8 inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 font-bold text-indigo-700 transition hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600">
        {props.action}<FiArrowUpRight aria-hidden="true" />
      </Link>
    </section>
  );
}
