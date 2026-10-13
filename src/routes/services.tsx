import { createFileRoute, Link } from "@tanstack/react-router";
import { services } from "@/lib/services";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Datamint Aarvix" },
      {
        name: "description",
        content:
          "Web development, software development, UI/UX, mobile apps, e-commerce, AI & automation, cloud, data analytics and more from Datamint Aarvix.",
      },
      { property: "og:title", content: "Services — Datamint Aarvix" },
      {
        property: "og:description",
        content: "Modern technology solutions designed to solve real business challenges.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <main className="relative overflow-x-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_480px_at_85%_-5%,color-mix(in_oklab,var(--glow)_14%,transparent),transparent_60%)]"
      />
      <section className="relative mx-auto max-w-6xl px-5 pb-20 pt-16 sm:px-8 sm:pt-24">
        <div className="rise">
          <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-mint">Our Expertise</div>
          <h1 className="mt-3 max-w-[20ch] text-balance font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl">
            What we build.
          </h1>
          <p className="mt-4 max-w-[52ch] text-pretty text-base leading-relaxed text-fog">
            Modern technology solutions designed to solve real business challenges — engineered,
            not assembled.
          </p>
        </div>

        <div className="mt-12 space-y-6">
          {services.map((s, i) => (
            <article
              key={s.id}
              id={s.id}
              className="rise grid overflow-hidden rounded-3xl border border-line bg-panel md:grid-cols-2"
            >
              <div className={`overflow-hidden ${i % 2 === 1 ? "md:order-2" : ""}`}>
                <img
                  src={s.image}
                  alt={s.title}
                  width={1280}
                  height={720}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-center p-6 sm:p-8">
                <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-mint">
                  {s.index} · {s.tag}
                </div>
                <h2 className="mt-2 font-display text-2xl font-semibold text-ink sm:text-3xl">{s.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-fog sm:text-base">{s.description}</p>
                <ul className="mt-5 space-y-2 text-sm text-ink">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-mint" /> {f}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="mt-6 inline-flex w-fit items-center gap-2 rounded-full border border-line px-4 py-2 text-sm font-medium text-ink transition-transform hover:-translate-y-0.5"
                >
                  Discuss this service <span aria-hidden="true">→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
