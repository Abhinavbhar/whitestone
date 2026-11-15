"use client";
import Script from "next/script";
import { SITE } from "@/lib/site";
// Single Tally embed. Fields, validation, conditional logic, success message and
// email notifications are all configured inside Tally (see README).
export default function EnquiryForm() {
  const src = `https://tally.so/embed/${SITE.tallyFormId}?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1`;
  return (
    <section id="enquiry" className="bg-gradient-to-br from-brand to-sky">
      <div className="mx-auto max-w-3xl px-5 py-16 lg:py-20">
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">Let&rsquo;s Start Your Global Journey</h2>
        <p className="mt-3 text-white/85">Tell us a little about your plans. Our team will get in touch with you to discuss the next steps.</p>
        <div className="mt-8 rounded-2xl bg-white p-4 shadow-2xl sm:p-8">
          {SITE.tallyFormId === "YOUR_TALLY_FORM_ID" ? (
            <p className="rounded-lg bg-amber-50 p-4 text-sm text-amber-900">Setup needed: add your Tally form ID in <code>lib/site.ts</code> (<code>tallyFormId</code>). See README.</p>
          ) : (
            <iframe data-tally-src={src} loading="lazy" width="100%" height="520" title="Enquiry form" className="border-0" />
          )}
        </div>
      </div>
      <Script src="https://tally.so/widgets/embed.js" strategy="lazyOnload" onLoad={() => (window as unknown as { Tally?: { loadEmbeds: () => void } }).Tally?.loadEmbeds()} />
    </section>
  );
}
