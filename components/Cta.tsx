export default function Cta({ href = "#enquiry", children, variant = "solid" }: { href?: string; children: React.ReactNode; variant?: "solid" | "outline" | "light" }) {
  const v = { solid: "bg-brand text-white hover:bg-ink", outline: "border border-brand text-brand hover:bg-brand hover:text-white", light: "bg-white text-brand hover:bg-mist" }[variant];
  return <a href={href} className={`inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-all hover:-translate-y-0.5 hover:shadow-lg ${v}`}>{children}</a>;
}
