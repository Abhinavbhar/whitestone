"use client";
import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { NAV, SITE } from "@/lib/site";
import Cta from "./Cta";
export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/70 bg-white/90 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5" aria-label="Main">
        <a href="#home" className="flex items-center gap-2 font-bold text-brand">
          <Image src="/logo.svg" alt="White Stone Immigration Pathways logo" width={40} height={40} priority />
          <span className="text-sm leading-tight sm:text-base">{SITE.name}</span>
        </a>
        <ul className="hidden items-center gap-7 text-sm font-medium lg:flex">
          {NAV.map(([l, h]) => <li key={h}><a href={h} className="text-ink/80 hover:text-brand">{l}</a></li>)}
        </ul>
        <div className="flex items-center gap-3">
          <span className="hidden sm:block"><Cta>Free Consultation</Cta></span>
          <button className="lg:hidden" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
        </div>
      </nav>
      {open && (
        <ul className="border-t bg-white px-5 py-4 lg:hidden">
          {NAV.map(([l, h]) => <li key={h}><a href={h} onClick={() => setOpen(false)} className="block py-2.5 font-medium">{l}</a></li>)}
          <li className="pt-3"><Cta>Free Consultation</Cta></li>
        </ul>
      )}
    </header>
  );
}
