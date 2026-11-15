import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { SITE } from "@/lib/site";
const font = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-jakarta", display: "swap" });
const title = "White Stone Immigration Pathways | Visa Consultant in Jind";
const description = "White Stone Immigration Pathways offers study, tourist and visitor visa assistance along with IELTS and PTE coaching in Jind, Haryana.";
export const metadata: Metadata = {
  metadataBase: new URL(SITE.url), title, description,
  keywords: ["Immigration consultant in Jind", "Visa consultant in Jind Haryana", "Study visa consultant in Jind", "Canada study visa assistance", "Australia study visa assistance", "IELTS coaching in Jind", "PTE coaching in Jind", "Tourist visa consultant in Jind"],
  openGraph: { title, description, type: "website", locale: "en_IN", siteName: SITE.name },
  icons: { icon: "/logo.svg" },
};
const jsonLd = {
  "@context": "https://schema.org", "@type": "LocalBusiness", name: SITE.name, slogan: SITE.tagline,
  telephone: "+91" + SITE.phone, email: SITE.email, url: SITE.url,
  address: { "@type": "PostalAddress", streetAddress: "SCO 11, 2nd Floor, Huda Complex, Opp. D.R.D.A, Near PNB Bank, Huda Market, DC Colony", addressLocality: "Jind", addressRegion: "Haryana", postalCode: "126102", addressCountry: "IN" },
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={font.variable}>
      <body className="font-sans antialiased">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        {children}
      </body>
    </html>
  );
}
