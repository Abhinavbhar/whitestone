export default function Section({ id, title, sub, tone = "white", children }: { id: string; title: string; sub?: string; tone?: "white" | "mist"; children: React.ReactNode }) {
  return (
    <section id={id} className={tone === "mist" ? "bg-mist" : "bg-white"}>
      <div className="mx-auto max-w-6xl px-5 py-16 lg:py-20">
        <h2 className="max-w-2xl text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">{title}</h2>
        {sub && <p className="mt-3 max-w-2xl text-muted">{sub}</p>}
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}
