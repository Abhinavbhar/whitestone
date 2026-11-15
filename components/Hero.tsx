import Image from "next/image";
import { GraduationCap, Plane, BookOpenCheck } from "lucide-react";
import Cta from "./Cta";

const cards = [
  [GraduationCap, "Study Visa Assistance"],
  [Plane, "Tourist & Visitor Visa"],
  [BookOpenCheck, "IELTS & PTE Coaching"],
] as const;

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-b from-mist via-white to-white">
      {/* soft background glows + dot grid */}
      <div className="pointer-events-none absolute -left-32 top-10 h-96 w-96 rounded-full bg-sky/15 blur-3xl" aria-hidden />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-brand/10 blur-3xl" aria-hidden />
      <div className="pointer-events-none absolute inset-0 opacity-[0.35] [background-image:radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:24px_24px] [mask-image:linear-gradient(to_bottom,black,transparent_75%)]" aria-hidden />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 py-16 lg:grid-cols-2 lg:py-24">
        {/* Left: text */}
        <div>
          <p className="mb-5 inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-brand shadow-sm ring-1 ring-slate-200">
            <span className="h-2 w-2 rounded-full bg-sky" aria-hidden />
            Jind, Haryana
          </p>
          <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-ink sm:text-5xl lg:text-[3.4rem]">
            Your Journey to a{" "}
            <span className="bg-gradient-to-r from-brand to-sky bg-clip-text text-transparent">World of Opportunities</span>{" "}
            Starts Here.
          </h1>
          <p className="mt-5 max-w-xl text-lg text-muted">
            Planning to study abroad, travel internationally, or visit your loved ones? White Stone Immigration Pathways helps simplify your visa journey with professional guidance and personalized assistance.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Cta>Get Free Consultation</Cta>
            <Cta href="#services" variant="outline">Explore Our Services</Cta>
          </div>
          <ul className="mt-10 grid gap-3 sm:grid-cols-3">
            {cards.map(([I, t]) => (
              <li key={t} className="flex items-center gap-3 rounded-xl bg-white p-3 text-sm font-semibold shadow-sm ring-1 ring-slate-200 transition-all hover:-translate-y-0.5 hover:shadow-md">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-mist text-brand"><I className="h-5 w-5" aria-hidden /></span>
                {t}
              </li>
            ))}
          </ul>
        </div>

        {/* Right: globe + orbiting plane */}
        <div className="relative mx-auto aspect-square w-full max-w-md">
          <div className="absolute inset-0 rounded-full border-2 border-dashed border-sky/40" aria-hidden />
          <div className="absolute inset-[7%] rounded-full border border-sky/20" aria-hidden />

          {/* logo on clean white disc */}
          <div className="absolute inset-[15%] flex items-center justify-center rounded-full bg-white shadow-[0_25px_70px_rgba(36,63,155,0.25)] ring-1 ring-slate-100">
            <Image src="/logo.svg" alt="White Stone Immigration Pathways globe and airplane logo" width={220} height={199} priority className="h-auto w-[72%]" />
          </div>

          {/* orbiting plane */}
          <div className="absolute inset-0 animate-orbit" aria-hidden>
            <span className="absolute left-1/2 top-0 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-brand text-white shadow-lg ring-4 ring-white">
              <Plane className="h-5 w-5 rotate-45" />
            </span>
          </div>

          {/* floating info cards */}
          <div className="absolute -left-1 top-[16%] animate-float rounded-2xl bg-white px-4 py-3 shadow-xl ring-1 ring-slate-100 sm:-left-6">
            <p className="flex items-center gap-2 text-sm font-bold text-ink"><GraduationCap className="h-4 w-4 text-brand" aria-hidden />Study Visa</p>
          </div>
          <div className="absolute -right-1 bottom-[14%] animate-float rounded-2xl bg-white px-4 py-3 shadow-xl ring-1 ring-slate-100 sm:-right-6" style={{ animationDelay: "-3s" }}>
            <p className="flex items-center gap-2 text-sm font-bold text-ink"><Plane className="h-4 w-4 text-brand" aria-hidden />Tourist Visa</p>
          </div>
        </div>
      </div>
    </section>
  );
}