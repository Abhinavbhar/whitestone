import { DESTINATIONS } from "@/lib/site";
import Section from "./Section";
export default function Destinations() {
  return (
    <Section id="destinations" tone="mist" title="Explore Your Global Opportunities">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {DESTINATIONS.map((d) => (
          <article key={d.name} className={`flex min-h-52 flex-col justify-between rounded-2xl bg-gradient-to-br ${d.bg} p-6 text-white shadow-md transition-transform hover:-translate-y-1`}>
            <span className="text-6xl" role="img" aria-label={`${d.name} flag`}>{d.flag}</span>
            <div className="flex items-end justify-between gap-3">
              <h3 className="text-2xl font-bold">{d.name}</h3>
              <a href="#enquiry" className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-brand hover:bg-mist">Enquire Now</a>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
