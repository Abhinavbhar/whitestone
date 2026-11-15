import Image from "next/image";
import { GraduationCap, Plane, BookOpenCheck } from "lucide-react";
import Cta from "./Cta";
const cards = [[GraduationCap, "Study Visa Assistance"], [Plane, "Tourist & Visitor Visa"], [BookOpenCheck, "IELTS & PTE Coaching"]] as const;
export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-b from-mist to-white">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 lg:grid-cols-2 lg:py-24">
        <div>
          <p className="mb-4 text-sm font-semibold text-sky">{`Jind, Haryana`}</p>
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-ink sm:text-5xl">Your Journey to a World of Opportunities Starts Here.</h1>
          <p className="mt-5 max-w-xl text-lg text-muted">Planning to study abroad, travel internationally, or visit your loved ones? White Stone Immigration Pathways helps simplify your visa journey with professional guidance and personalized assistance.</p>
          <div className="mt-8 flex flex-wrap gap-3"><Cta>Get Free Consultation</Cta><Cta href="#services" variant="outline">Explore Our Services</Cta></div>
          <ul className="mt-10 grid gap-3 sm:grid-cols-3">
            {cards.map(([I, t]) => <li key={t} className="flex items-center gap-3 rounded-xl bg-white p-3 text-sm font-semibold shadow-sm ring-1 ring-slate-200"><I className="h-5 w-5 shrink-0 text-brand" aria-hidden />{t}</li>)}
          </ul>
        </div>
        <div className="relative mx-auto flex aspect-square w-full max-w-md items-center justify-center rounded-full bg-gradient-to-br from-brand to-sky shadow-2xl">
          <Image src="/logo.svg" alt="Globe and airplane representing international travel" width={280} height={280} priority className="animate-float drop-shadow-xl" />
        </div>
      </div>
    </section>
  );
}
