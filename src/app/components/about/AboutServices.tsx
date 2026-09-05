import { FiLayout, FiMonitor, FiSmartphone } from "react-icons/fi";

type AboutServicesProps = {
  eyebrow: string; title: string; description: string;
  websiteTitle: string; websiteDescription: string;
  webAppTitle: string; webAppDescription: string;
  responsiveTitle: string; responsiveDescription: string;
};

export default function AboutServices(props: AboutServicesProps) {
  const services = [
    { icon: FiLayout, title: props.websiteTitle, description: props.websiteDescription },
    { icon: FiMonitor, title: props.webAppTitle, description: props.webAppDescription },
    { icon: FiSmartphone, title: props.responsiveTitle, description: props.responsiveDescription },
  ];

  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-3xl">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-indigo-600 dark:text-indigo-300">{props.eyebrow}</p>
        <h2 className="mt-3 text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">{props.title}</h2>
        <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-300">{props.description}</p>
      </div>
      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {services.map(({ icon: Icon, title, description }, index) => (
          <article key={title} className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-900/5 dark:border-neutral-800 dark:bg-neutral-900 dark:hover:border-indigo-500/30">
            <span className="absolute end-5 top-4 text-5xl font-black text-slate-100 transition group-hover:text-indigo-50 dark:text-white/[0.03] dark:group-hover:text-indigo-400/[0.06]">0{index + 1}</span>
            <span className="inline-flex rounded-xl bg-indigo-100 p-3 text-2xl text-indigo-700 dark:bg-indigo-500/15 dark:text-indigo-300"><Icon aria-hidden="true" /></span>
            <h3 className="mt-6 text-xl font-bold text-slate-900 dark:text-white">{title}</h3>
            <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">{description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
