import { FiCheckCircle, FiMessageCircle, FiTool } from "react-icons/fi";

type AboutValuesProps = {
  eyebrow: string; title: string;
  communicationTitle: string; communicationDescription: string;
  qualityTitle: string; qualityDescription: string;
  supportTitle: string; supportDescription: string;
};

export default function AboutValues(props: AboutValuesProps) {
  const values = [
    { icon: FiMessageCircle, title: props.communicationTitle, description: props.communicationDescription },
    { icon: FiCheckCircle, title: props.qualityTitle, description: props.qualityDescription },
    { icon: FiTool, title: props.supportTitle, description: props.supportDescription },
  ];

  return (
    <section className="py-20 lg:py-28">
      <div className="text-center">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-indigo-600 dark:text-indigo-300">{props.eyebrow}</p>
        <h2 className="mt-3 text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">{props.title}</h2>
      </div>
      <div className="mx-auto mt-12 grid max-w-6xl gap-5 md:grid-cols-3">
        {values.map(({ icon: Icon, title, description }) => (
          <article key={title} className="rounded-2xl border border-slate-200 bg-slate-50/70 p-7 text-center dark:border-neutral-800 dark:bg-neutral-900/70">
            <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-indigo-100 text-2xl text-indigo-700 dark:bg-indigo-500/15 dark:text-indigo-300"><Icon aria-hidden="true" /></span>
            <h3 className="mt-5 text-xl font-bold text-slate-900 dark:text-white">{title}</h3>
            <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">{description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
