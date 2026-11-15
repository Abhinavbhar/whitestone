import { Check } from "lucide-react";
import Section from "./Section";
import Cta from "./Cta";
const T = [
  { n: "IELTS", p: ["Training Sessions", "Mock Tests", "Band Score Improvement", "Practice Sessions"] },
  { n: "PTE", p: ["Practice Sessions", "Score Improvement", "Exam Preparation", "Fast Results (preparation and result timelines only; no score or outcome is guaranteed)"] },
];
export default function Coaching() {
  return (
    <Section id="coaching" tone="mist" title="Prepare for Your International Journey with IELTS & PTE">
      <div className="grid gap-6 md:grid-cols-2">
        {T.map((t) => (
          <article key={t.n} className="rounded-2xl bg-white p-7 shadow-sm ring-1 ring-slate-200">
            <h3 className="text-2xl font-bold text-brand">{t.n}</h3>
            <ul className="mt-5 space-y-3">{t.p.map((x) => <li key={x} className="flex gap-3"><Check className="mt-0.5 h-5 w-5 shrink-0 text-sky" aria-hidden />{x}</li>)}</ul>
          </article>
        ))}
      </div>
      <div className="mt-8"><Cta>Enquire About Coaching</Cta></div>
    </Section>
  );
}
