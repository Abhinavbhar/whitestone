import Image from "next/image";
import { NAV, SERVICES, SITE } from "@/lib/site";
export default function Footer() {
  return (
    <footer className="bg-ink text-white/80">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 font-bold text-white"><Image src="/logo.svg" alt="White Stone Immigration Pathways logo" width={40} height={40} />{SITE.name}</div>
          <p className="mt-3 text-sm">{SITE.tagline}</p>
        </div>
        <nav aria-label="Quick links"><h3 className="font-semibold text-white">Quick Links</h3><ul className="mt-3 space-y-2 text-sm">{NAV.map(([l, h]) => <li key={h}><a href={h} className="hover:text-white">{l}</a></li>)}</ul></nav>
        <div><h3 className="font-semibold text-white">Services</h3><ul className="mt-3 space-y-2 text-sm">{SERVICES.map((s) => <li key={s.title}>{s.title}</li>)}</ul></div>
        <div className="space-y-2 text-sm"><h3 className="font-semibold text-white">Contact</h3>
          <p><a href={`tel:+91${SITE.phone}`}>{SITE.phone}</a></p><p><a href={`mailto:${SITE.email}`}>{SITE.email}</a></p>
          <p>White Stone Immigration Pathways, SCO 11, 2nd Floor, Huda Complex, Opp. D.R.D.A, Near PNB Bank, Huda Market, DC Colony, Jind, Haryana 126102, India.</p></div>
      </div>
      <div className="border-t border-white/10 px-5 py-6 text-center text-xs">
        <p>© 2026 White Stone Immigration Pathways. All Rights Reserved.</p>
        <p className="mx-auto mt-2 max-w-3xl">Visa decisions are made solely by the respective immigration authorities. Our services provide guidance and application assistance and do not guarantee visa approval.</p>
      </div>
    </footer>
  );
}
