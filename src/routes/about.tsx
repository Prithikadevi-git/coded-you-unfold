import { createFileRoute, Link } from "@tanstack/react-router";
import teamImage from "@/assets/team-collaboration.jpg.asset.json";
import workImage from "@/assets/developers-working.jpg.asset.json";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Datamint Aarvix" },
      {
        name: "description",
        content:
          "Datamint Aarvix is a technology and digital solutions company creating reliable, scalable and user-focused digital experiences.",
      },
      { property: "og:title", content: "About — Datamint Aarvix" },
      {
        property: "og:description",
        content: "Technology designed around real business needs.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

const principles = [
  {
    title: "Business First",
    text: "Technology decisions aligned with actual business requirements and return on investment, not trend-chasing.",
  },
  {
    title: "Modern Engineering",
    text: "Clean architecture, scalable modular systems, test-driven pipelines, and future-proof maintainable code.",
  },
  {
    title: "User Focused",
    text: "Simple, intuitive, accessible digital experiences designed to engage end-users and maximize retention.",
  },
  {
    title: "Long-Term Thinking",
    text: "Solutions engineered to evolve gracefully with your growing business, avoiding costly architectural rewrites.",
  },
];

const process = [
  { step: "01", title: "Understand", text: "Business context, target audience, technical constraints, and strategic success metrics." },
  { step: "02", title: "Strategy", text: "Architecture, data models, technology selection, and a milestone-driven delivery roadmap." },
  { step: "03", title: "Design", text: "Interactive wireframes, user journeys, responsive visual prototypes, and design tokens." },
  { step: "04", title: "Develop", text: "Scalable, responsive, production-ready solutions with clean code and automated testing." },
  { step: "05", title: "Test", text: "Rigorous automated and manual QA across functionality, responsiveness, performance, and security." },
  { step: "06", title: "Launch", text: "Smooth cloud deployment, domain DNS setup, SSL verification, and ongoing support." },
];

function AboutPage() {
  return (
    <main className="relative overflow-x-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_480px_at_85%_-5%,color-mix(in_oklab,var(--glow)_14%,transparent),transparent_60%)]"
      />
      <section className="relative mx-auto max-w-6xl px-5 pb-20 pt-16 sm:px-8 sm:pt-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="rise">
            <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-mint">About / Culture</div>
            <h1 className="mt-3 text-balance font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl">
              Technology designed around real business needs.
            </h1>
            <p className="mt-5 text-pretty text-base leading-relaxed text-fog">
              Datamint Aarvix is a technology and digital solutions company focused on creating
              reliable, scalable and user-focused digital experiences.
            </p>
            <p className="mt-4 text-pretty text-base leading-relaxed text-fog">
              We combine design, engineering and modern technology to transform ideas and business
              requirements into practical digital products. Our pragmatic approach bridges business
              objectives with resilient software architectures.
            </p>
            <div className="mt-7 flex flex-wrap gap-2 font-mono text-[11px] text-fog">
              <span className="rounded-full border border-line px-3 py-1">Intuitive User Psychology</span>
              <span className="rounded-full border border-line px-3 py-1">Clean, Scalable Code</span>
              <span className="rounded-full border border-line px-3 py-1">Clear Business Impact</span>
            </div>
          </div>
          <div className="rise rise-2 space-y-4">
            <img
              src={teamImage.url}
              alt="The Datamint Aarvix team collaborating in a bright modern office"
              width={1280}
              height={720}
              className="w-full rounded-2xl object-cover ring-1 ring-line"
            />
            <img
              src={workImage.url}
              alt="Engineers at Datamint Aarvix reviewing code on screen"
              width={1280}
              height={720}
              loading="lazy"
              className="w-full rounded-2xl object-cover ring-1 ring-line"
            />
          </div>
        </div>

        <div className="mt-20">
          <div className="rise">
            <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-mint">Built with purpose</div>
            <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              Engineered for growth.
            </h2>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {principles.map((p, i) => (
              <div key={p.title} className={`rise rise-${i + 1} rounded-2xl border border-line bg-panel p-5`}>
                <h3 className="font-display text-lg font-semibold text-mint">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-fog">{p.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20">
          <div className="rise">
            <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-mint">Methodology</div>
            <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              From idea to launch.
            </h2>
            <p className="mt-3 max-w-[52ch] text-sm leading-relaxed text-fog">
              A structured, transparent delivery pipeline ensuring quality at every milestone.
            </p>
          </div>
          <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {process.map((p, i) => (
              <li key={p.step} className={`rise rise-${(i % 3) + 1} rounded-2xl border border-line bg-panel p-5`}>
                <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-mint">{p.step}</div>
                <h3 className="mt-1.5 font-display text-lg font-semibold text-ink">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-fog">{p.text}</p>
              </li>
            ))}
          </ol>
        </div>

        <div className="rise mt-20 rounded-3xl border border-line bg-[linear-gradient(135deg,color-mix(in_oklab,var(--glow)_16%,var(--panel)),var(--panel))] p-8 text-center sm:p-12">
          <h2 className="mx-auto max-w-[20ch] text-balance font-display text-3xl font-semibold tracking-tight text-ink">
            Building your business, your way.
          </h2>
          <Link
            to="/contact"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-mint px-6 py-3 text-sm font-semibold text-background transition-transform hover:-translate-y-0.5"
          >
            Start a Project <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
