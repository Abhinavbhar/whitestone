import { BENEFITS } from "@/lib/site";
import Section from "./Section";
import Icon from "./Icon";
export default function WhyUs() {
  return (
    <Section id="why-us" title="Your Immigration Journey, Made Simpler">
      <ul className="grid gap-x-12 gap-y-8 md:grid-cols-2">
        {BENEFITS.map((b) => (
          <li key={b.title} className="flex gap-4">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand text-white"><Icon name={b.icon} className="h-6 w-6" /></span>
            <div><h3 className="text-lg font-bold">{b.title}</h3><p className="mt-1 text-muted">{b.text}</p></div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
