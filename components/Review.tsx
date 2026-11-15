import { Quote, Star, Sparkles, ArrowRight } from "lucide-react";
import Section from "./Section";

const GOOGLE_REVIEW_URL = "";

const STATS: { value: string; label: string }[] = [
  { value: "500+", label: "Happy Customers" },
  { value: "95%", label: "Success Rate" },
];

const REVIEWS = [
  {
    name: "Sandeep Dahiya",
    text: "Excellent experience with the team! They guided me throughout the visa application process and made everything very simple. Very professional and supportive staff. Highly recommended!",
    accent: "from-brand to-sky",
  },
  {
    name: "Amit Malik",
    text: "I had a great experience with their student visa services. The team helped me with documentation and the application process. Their guidance made everything stress-free.",
    accent: "from-sky to-cyan-400",
  },
  {
    name: "Pooja Hooda",
    text: "Very professional and knowledgeable team. They answered all my questions patiently and provided proper guidance at every step. Really appreciate their support!",
    accent: "from-indigo-600 to-sky",
  },
  {
    name: "Deepak Dalal",
    text: "One of the best visa consultancy experiences. The entire process was handled smoothly, and the team kept me updated throughout. Excellent service!",
    accent: "from-brand to-indigo-400",
  },
  {
    name: "Manish Sangwan",
    text: "I am extremely satisfied with their services. The staff is friendly, helpful, and knowledgeable about visa procedures. Highly recommended!",
    accent: "from-sky to-brand",
  },
];

const initials = (n: string) =>
  n.split(" ").map((w) => w[0]).join("").slice(0, 2);

const Stars = ({ size = "h-5 w-5" }: { size?: string }) => (
  <div className="flex gap-1" role="img" aria-label="5 out of 5 stars">
    {[0, 1, 2, 3, 4].map((i) => (
      <Star
        key={i}
        className={`${size} fill-amber-400 text-amber-400 drop-shadow-sm`}
        aria-hidden
      />
    ))}
  </div>
);

export default function Reviews() {
  return (
    <Section
      id="reviews"
      tone="mist"
      title="Loved by the Families and Students We Guide"
      sub="Real feedback from people we have assisted with their visa journeys."
    >
      <div className="relative">
        <div
          className="pointer-events-none absolute -left-24 -top-20 h-72 w-72 rounded-full bg-sky/20 blur-3xl"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-brand/15 blur-3xl"
          aria-hidden
        />

        <div className="relative grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {REVIEWS.map((r) => (
            <figure
              key={r.name}
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-white bg-white/90 p-7 shadow-[0_8px_30px_rgba(36,63,155,0.08)] backdrop-blur transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(36,63,155,0.22)]"
            >
              <div
                className={`absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r ${r.accent}`}
                aria-hidden
              />

              <Quote
                className="absolute right-5 top-6 h-14 w-14 rotate-180 text-sky/15 transition-transform duration-300 group-hover:scale-110"
                aria-hidden
              />

              <Stars />

              <blockquote className="mt-5 flex-1 text-[15px] leading-relaxed text-ink/90">
                &ldquo;{r.text}&rdquo;
              </blockquote>

              <figcaption className="mt-6 flex items-center gap-3 border-t border-slate-100 pt-5">
                <span
                  className={`flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br ${r.accent} text-sm font-bold text-white ring-4 ring-mist`}
                  aria-hidden
                >
                  {initials(r.name)}
                </span>

                <span>
                  <span className="block font-bold text-ink">
                    {r.name}
                  </span>
                  <span className="text-xs font-medium text-sky">
                    Client review
                  </span>
                </span>
              </figcaption>
            </figure>
          ))}

          {/* Rating and Statistics Card */}
          <div className="relative order-first flex flex-col justify-between overflow-hidden rounded-3xl bg-gradient-to-br from-brand via-[#2d4fb8] to-sky p-8 text-white shadow-[0_20px_50px_rgba(36,63,155,0.45)] ring-1 ring-white/20 transition-transform duration-300 hover:-translate-y-2 sm:order-none">
            <div
              className="pointer-events-none absolute -right-12 -top-12 h-44 w-44 rounded-full bg-white/10"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute -bottom-16 -left-10 h-48 w-48 rounded-full bg-white/10"
              aria-hidden
            />

            <div className="relative">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold tracking-wide">
                <Sparkles className="h-3.5 w-3.5" aria-hidden />
                CLIENT RATING
              </span>

              <p className="mt-5 text-7xl font-extrabold leading-none tracking-tight">
                5.0
                <span className="text-3xl font-bold text-white/70">
                  {" "}/ 5
                </span>
              </p>

              <div className="mt-4">
                <Stars size="h-6 w-6" />
              </div>

              {/* Business Statistics */}
              <dl className="mt-8 grid grid-cols-2 gap-4 border-t border-white/20 pt-6">
                {STATS.map((s) => (
                  <div key={s.label}>
                    <dd className="text-3xl font-extrabold">
                      {s.value}
                    </dd>
                    <dt className="mt-1 text-xs font-medium text-white/75">
                      {s.label}
                    </dt>
                  </div>
                ))}
              </dl>
            </div>

            <div className="relative mt-8 flex flex-wrap gap-3">
              <a
                href="#enquiry"
                className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-brand transition-all hover:-translate-y-0.5 hover:shadow-lg"
              >
                Start Your Journey
                <ArrowRight className="h-4 w-4" aria-hidden />
              </a>

              {GOOGLE_REVIEW_URL && (
                <a
                  href={GOOGLE_REVIEW_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-full border border-white/50 px-5 py-3 text-sm font-semibold hover:bg-white/10"
                >
                  Review Us on Google
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
