import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { SITE } from "@/lib/site";
import Section from "./Section";
export default function Contact() {
  const map = `https://www.google.com/maps?q=${encodeURIComponent("White Stone Immigration Pathways, Huda Market, Jind, Haryana 126102")}&output=embed`;
  const btn = "inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all hover:-translate-y-0.5 hover:shadow-lg";
  return (
    <Section id="contact" title="Let's Talk About Your Future">
      <div className="grid gap-10 lg:grid-cols-2">
        <div className="space-y-5">
          <p className="flex gap-3"><Phone className="h-5 w-5 text-brand" aria-hidden /><a href={`tel:+91${SITE.phone}`} className="font-semibold hover:underline">{SITE.phone}</a></p>
          <p className="flex gap-3"><Mail className="h-5 w-5 text-brand" aria-hidden /><a href={`mailto:${SITE.email}`} className="font-semibold hover:underline">{SITE.email}</a></p>
          <div className="flex gap-3"><MapPin className="h-5 w-5 shrink-0 text-brand" aria-hidden /><address className="not-italic text-muted">SCO 11, 2nd Floor, Huda Complex, Opp. D.R.D.A, Near PNB Bank, Huda Market, DC Colony, Jind, Haryana 126102.</address></div>
          <div className="flex flex-wrap gap-3 pt-2">
            <a href={`tel:+91${SITE.phone}`} className={`${btn} bg-brand text-white`}><Phone className="h-4 w-4" aria-hidden />Call Now</a>
            <a href={`mailto:${SITE.email}`} className={`${btn} border border-brand text-brand`}><Mail className="h-4 w-4" aria-hidden />Email Us</a>
            <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent("Hello, I would like to enquire about your services.")}`} target="_blank" rel="noopener noreferrer" className={`${btn} bg-[#25D366] text-white`}><MessageCircle className="h-4 w-4" aria-hidden />WhatsApp Enquiry</a>
          </div>
        </div>
        <iframe src={map} title="Office location map" loading="lazy" className="h-72 w-full rounded-2xl border-0 shadow-md" referrerPolicy="no-referrer-when-downgrade" />
      </div>
    </Section>
  );
}
