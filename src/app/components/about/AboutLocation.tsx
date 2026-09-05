import { FiGlobe, FiMapPin } from "react-icons/fi";

type AboutLocationProps = {
  eyebrow: string; title: string; description: string;
  localTitle: string; localDescription: string;
  worldwideTitle: string; worldwideDescription: string;
};

export default function AboutLocation(props: AboutLocationProps) {
  return (
    <section className="rounded-3xl bg-slate-900 px-6 py-12 text-white dark:bg-indigo-950 sm:px-10 lg:px-14 lg:py-16">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-indigo-300">{props.eyebrow}</p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">{props.title}</h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">{props.description}</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <article className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
            <FiMapPin className="text-3xl text-indigo-300" aria-hidden="true" />
            <h3 className="mt-5 text-xl font-bold">{props.localTitle}</h3>
            <p className="mt-3 leading-7 text-slate-300">{props.localDescription}</p>
          </article>
          <article className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
            <FiGlobe className="text-3xl text-indigo-300" aria-hidden="true" />
            <h3 className="mt-5 text-xl font-bold">{props.worldwideTitle}</h3>
            <p className="mt-3 leading-7 text-slate-300">{props.worldwideDescription}</p>
          </article>
        </div>
      </div>
    </section>
  );
}
