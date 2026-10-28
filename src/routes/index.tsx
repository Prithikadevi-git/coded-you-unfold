import { createFileRoute, Link } from "@tanstack/react-router";
import { services } from "@/lib/services";
import teamImage from "@/assets/team-collaboration.jpg.asset.json";
import workImage from "@/assets/developers-working.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Datamint Aarvix — Building Digital Solutions for What's Next" },
      {
        name: "description",
        content:
          "Datamint Aarvix builds modern digital products, software platforms and technology solutions that help businesses operate, grow and scale.",
      },
      { property: "og:title", content: "Datamint Aarvix — Building Digital Solutions for What's Next" },
      {
        property: "og:description",
        content:
          "Modern digital products, software platforms and technology solutions for businesses that want to grow and scale.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

const stats = [
  { value: "25+", label: "Projects Delivered", note: "Enterprise software, portals & cloud architectures" },
  { value: "15+", label: "Business Solutions", note: "Custom automated systems & workflow platforms" },
  { value: "10+", label: "Technology Skills", note: "Frontend, cloud backends, AI & DevOps" },
  { value: "99%", label: "Commitment to Quality", note: "Test coverage, security audits & SLA uptime" },
];

const values = [
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
    text: "Solutions engineered to evolve gracefully with your growing business, avoiding costly rewrites.",
  },
];

const process = [
  { step: "01", title: "Understand", text: "Business context, target audience, technical constraints, and success metrics." },
  { step: "02", title: "Strategy", text: "Architecture, data models, technology selection, and a milestone-driven roadmap." },
  { step: "03", title: "Design", text: "Interactive wireframes, user journeys, responsive prototypes, and design tokens." },
  { step: "04", title: "Develop", text: "Scalable, production-ready builds with clean code and automated testing." },
  { step: "05", title: "Test", text: "Rigorous QA across functionality, responsiveness, performance, and security." },
  { step: "06", title: "Launch", text: "Smooth cloud deployment, DNS & SSL setup, and ongoing support." },
];

const solutions = [
  {
    title: "Corporate Websites",
    text: "High-credibility digital presence for established enterprises projecting market leadership.",
    points: ["High-speed CMS integration", "Lead generation funnels", "Interactive service catalogues"],
  },
  {
    title: "Business Portals",
    text: "Secure, authenticated portals connecting partners, vendors, distributors, and internal teams.",
    points: ["Role-based authorization", "Real-time document sharing", "Self-service billing interfaces"],
  },
  {
    title: "E-Commerce Platforms",
    text: "Conversion-optimized storefronts with automated order processing and secure payment rails.",
    points: ["Multi-tier checkout flows", "Inventory synchronization", "Automated marketing webhooks"],
  },
  {
    title: "Custom Software",
    text: "Specialized architectures built precisely for proprietary operational challenges.",
    points: ["Custom microservices", "Audited data compliance", "Automated report generators"],
  },
];

const work = [
  { tag: "Software Development", title: "Business Management Platform", text: "Unified enterprise operations cockpit managing multi-branch resource planning, role permissions, and financial audits.", year: "2026", image: services[1]!.image },
  { tag: "Web Development", title: "Modern Corporate Website", text: "High-performance corporate brand portal with fluid UI, dynamic CMS, and technical SEO structure.", year: "2026", image: services[0]!.image },
  { tag: "E-Commerce", title: "E-Commerce Platform", text: "High-conversion commerce platform with multi-gateway payments, instant checkout, and live inventory sync.", year: "2026", image: services[4]!.image },
  { tag: "AI & Automation", title: "AI Business Assistant", text: "Domain-specific conversational AI answering technical enterprise queries from documentation.", year: "2026", image: services[5]!.image },
];

function SectionHeading({ kicker, title }: { kicker: string; title: string }) {
  return (
    <div className="rise">
      <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-mint">{kicker}</div>
      <h2 className="mt-2 max-w-[22ch] text-balance font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
        {title}
      </h2>
    </div>
  );
}

function HomePage() {
  return (
    <main className="relative overflow-x-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_480px_at_85%_-5%,color-mix(in_oklab,var(--glow)_14%,transparent),transparent_60%),radial-gradient(700px_420px_at_0%_40%,color-mix(in_oklab,var(--glow)_7%,transparent),transparent_60%)]"
      />

      {/* Hero */}
      <section className="relative mx-auto max-w-6xl px-5 pb-16 pt-16 sm:px-8 sm:pt-24">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rise">
            <div className="inline-flex items-center gap-2 rounded-full border border-line bg-panel px-3 py-1 font-mono text-[11px] uppercase tracking-[0.2em] text-fog">
              <span className="size-1.5 rounded-full bg-mint" /> About / Datamint Aarvix
            </div>
            <h1 className="mt-6 text-balance font-display text-[clamp(2.6rem,6.5vw,4.4rem)] font-bold leading-[1.04] tracking-tight text-ink">
              Building digital solutions for <span className="text-mint">what's next.</span>
            </h1>
            <p className="mt-5 max-w-[50ch] text-pretty text-base leading-relaxed text-fog sm:text-lg">
              Datamint Aarvix builds modern digital products, software platforms and technology
              solutions that help businesses operate, grow and scale.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-mint px-5 py-2.5 text-sm font-semibold text-background transition-transform hover:-translate-y-0.5"
              >
                Start a Project <span aria-hidden="true">→</span>
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-full border border-line bg-panel px-5 py-2.5 text-sm font-medium text-ink transition-transform hover:-translate-y-0.5"
              >
                Explore Solutions
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap gap-2 font-mono text-[11px] text-fog">
              <span className="rounded-full border border-line px-3 py-1">Enterprise Security & NDA</span>
              <span className="rounded-full border border-line px-3 py-1">Modern Engineering Standards</span>
            </div>
          </div>
          <div className="rise rise-2">
            <img
              src={teamImage.url}
              alt="Datamint Aarvix team collaborating on a product dashboard"
              width={1280}
              height={720}
              className="w-full rounded-2xl object-cover shadow-2xl ring-1 ring-line"
            />
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <div key={s.label} className={`rise rise-${i + 1} rounded-2xl border border-line bg-panel p-5`}>
              <div className="font-display text-3xl font-bold text-mint">{s.value}</div>
              <div className="mt-1 text-sm font-semibold text-ink">{s.label}</div>
              <div className="mt-1 text-xs leading-relaxed text-fog">{s.note}</div>
            </div>
          ))}
        </div>
      </section>

      {/* About teaser */}
      <section className="relative mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <div className="grid items-center gap-10 rounded-3xl border border-line bg-panel p-6 sm:p-10 lg:grid-cols-2">
          <img
            src={workImage.url}
            alt="Engineers reviewing code together at Datamint Aarvix"
            width={1280}
            height={720}
            loading="lazy"
            className="rise w-full rounded-2xl object-cover ring-1 ring-line"
          />
          <div className="rise rise-2">
            <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-mint">About Datamint Aarvix</div>
            <h2 className="mt-2 text-balance font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              Technology designed around real business needs.
            </h2>
            <p className="mt-4 text-pretty text-sm leading-relaxed text-fog sm:text-base">
              We are a technology and digital solutions company focused on reliable, scalable and
              user-focused digital experiences. We combine design, engineering and modern technology
              to transform ideas into practical digital products.
            </p>
            <ul className="mt-6 space-y-2.5 text-sm text-ink">
              {["Intuitive User Psychology", "Clean, Scalable Code", "Clear Business Impact"].map((x) => (
                <li key={x} className="flex items-center gap-2.5">
                  <span className="size-1.5 rounded-full bg-mint" /> {x}
                </li>
              ))}
            </ul>
            <Link
              to="/about"
              className="mt-7 inline-flex items-center gap-2 rounded-full border border-line px-5 py-2.5 text-sm font-medium text-ink transition-transform hover:-translate-y-0.5"
            >
              Discover Our Company <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="relative mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <div className="flex items-end justify-between gap-4">
          <SectionHeading kicker="Our Expertise" title="What we build." />
          <Link to="/services" className="hidden shrink-0 font-mono text-xs text-mint hover:underline sm:inline">
            All services →
          </Link>
        </div>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, 6).map((s, i) => (
            <article
              key={s.id}
              className={`rise rise-${(i % 3) + 1} group overflow-hidden rounded-2xl border border-line bg-panel transition-transform hover:-translate-y-1`}
            >
              <div className="overflow-hidden">
                <img
                  src={s.image}
                  alt={s.title}
                  width={1280}
                  height={720}
                  loading="lazy"
                  className="aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-mint">
                  {s.index} · {s.tag}
                </div>
                <h3 className="mt-1.5 font-display text-xl font-semibold text-ink">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-fog">{s.description}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-8 text-center sm:hidden">
          <Link to="/services" className="font-mono text-xs text-mint hover:underline">
            View all 10 services →
          </Link>
        </div>
      </section>

      {/* Values */}
      <section className="relative mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <SectionHeading kicker="Built with purpose" title="Engineered for growth." />
        <p className="rise mt-3 max-w-[52ch] text-sm leading-relaxed text-fog">
          We focus on long-term architecture rather than quick superficial fixes.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <div key={v.title} className={`rise rise-${i + 1} rounded-2xl border border-line bg-panel p-5`}>
              <h3 className="font-display text-lg font-semibold text-mint">{v.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-fog">{v.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="relative mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <SectionHeading kicker="Methodology" title="From idea to launch." />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {process.map((p, i) => (
            <div key={p.step} className={`rise rise-${(i % 3) + 1} rounded-2xl border border-line bg-panel p-5`}>
              <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-mint">{p.step}</div>
              <h3 className="mt-1.5 font-display text-lg font-semibold text-ink">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-fog">{p.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Solutions */}
      <section className="relative mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <SectionHeading kicker="Digital Solutions" title="Solutions built for different business needs." />
        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {solutions.map((s, i) => (
            <article key={s.title} className={`rise rise-${(i % 2) + 1} rounded-2xl border border-line bg-panel p-6`}>
              <h3 className="font-display text-xl font-semibold text-ink">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-fog">{s.text}</p>
              <ul className="mt-4 space-y-2 text-sm text-ink">
                {s.points.map((pt) => (
                  <li key={pt} className="flex items-center gap-2.5">
                    <span className="size-1.5 rounded-full bg-mint" /> {pt}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* Selected work */}
      <section className="relative mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <SectionHeading kicker="Portfolio & Case Studies" title="Selected work." />
        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {work.map((w, i) => (
            <article
              key={w.title}
              className={`rise rise-${(i % 2) + 1} group overflow-hidden rounded-2xl border border-line bg-panel transition-transform hover:-translate-y-1`}
            >
              <div className="overflow-hidden">
                <img
                  src={w.image}
                  alt={w.title}
                  width={1280}
                  height={720}
                  loading="lazy"
                  className="aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.18em]">
                  <span className="text-mint">{w.tag}</span>
                  <span className="text-fog">{w.year}</span>
                </div>
                <h3 className="mt-1.5 font-display text-xl font-semibold text-ink">{w.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-fog">{w.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative mx-auto max-w-6xl px-5 pb-20 pt-8 sm:px-8">
        <div className="rise rounded-3xl border border-line bg-[linear-gradient(135deg,color-mix(in_oklab,var(--glow)_16%,var(--panel)),var(--panel))] p-8 text-center sm:p-12">
          <h2 className="mx-auto max-w-[20ch] text-balance font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Have a project in mind? Let's build it together.
          </h2>
          <p className="mx-auto mt-3 max-w-[46ch] text-sm leading-relaxed text-fog">
            Tell us about your business goals and we'll design the technology to get you there.
          </p>
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
