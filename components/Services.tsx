import { SERVICES } from "@/lib/site";
import Section from "./Section";
import Icon from "./Icon";
export default function Services() {
  return (
    <Section id="services" tone="white" title="Complete Guidance for Your Global Journey" sub="From visa applications to English proficiency preparation, get assistance at every important step.">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((s) => (
          <article key={s.title} className="group rounded-2xl border border-slate-200 bg-white p-6 transition-all hover:-translate-y-1 hover:border-sky hover:shadow-xl">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-mist text-brand transition-colors group-hover:bg-brand group-hover:text-white"><Icon name={s.icon} className="h-6 w-6" /></span>
            <h3 className="mt-5 text-xl font-bold">{s.title}</h3>
            <p className="mt-2 text-muted">{s.text}</p>
            <a href="#enquiry" className="mt-5 inline-block font-semibold text-brand hover:underline">Enquire Now</a>
          </article>
        ))}
      </div>
    </Section>
  );
}
