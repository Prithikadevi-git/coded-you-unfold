import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { services } from "@/lib/services";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Datamint Aarvix" },
      {
        name: "description",
        content: "Start a project with Datamint Aarvix. Tell us about your business goals and we'll design the technology to get you there.",
      },
      { property: "og:title", content: "Contact — Datamint Aarvix" },
      { property: "og:description", content: "Start a project with Datamint Aarvix." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const service = String(data.get("service") ?? "");
    const message = String(data.get("message") ?? "");
    const subject = encodeURIComponent(`New project enquiry — ${service || "General"}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nService: ${service}\n\n${message}`);
    window.location.href = `mailto:hello@datamintaarvix.com?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <main className="relative overflow-x-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_480px_at_85%_-5%,color-mix(in_oklab,var(--glow)_14%,transparent),transparent_60%)]"
      />
      <section className="relative mx-auto max-w-6xl px-5 pb-20 pt-16 sm:px-8 sm:pt-24">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr]">
          <div className="rise">
            <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-mint">Contact</div>
            <h1 className="mt-3 text-balance font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl">
              Let's build something that works.
            </h1>
            <p className="mt-4 max-w-[46ch] text-pretty text-base leading-relaxed text-fog">
              Tell us about your project, your goals, and your timeline. We typically respond within
              one business day.
            </p>
            <div className="mt-8 space-y-3">
              <a
                href="mailto:hello@datamintaarvix.com"
                className="flex items-center justify-between gap-2 rounded-xl border border-line bg-panel px-4 py-3.5 transition-transform hover:-translate-y-0.5"
              >
                <span className="font-mono text-xs uppercase tracking-[0.16em] text-mint">Email</span>
                <span className="break-all text-sm font-medium text-ink">hello@datamintaarvix.com</span>
              </a>
              <a
                href="https://www.datamintaarvix.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between gap-2 rounded-xl border border-line bg-panel px-4 py-3.5 transition-transform hover:-translate-y-0.5"
              >
                <span className="font-mono text-xs uppercase tracking-[0.16em] text-mint">Website</span>
                <span className="text-sm font-medium text-ink">datamintaarvix.com</span>
              </a>
            </div>
            <div className="mt-8 flex flex-wrap gap-2 font-mono text-[11px] text-fog">
              <span className="rounded-full border border-line px-3 py-1">Enterprise Security & NDA</span>
              <span className="rounded-full border border-line px-3 py-1">99% SLA Commitment</span>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rise rise-2 rounded-3xl border border-line bg-panel p-6 sm:p-8"
          >
            <h2 className="font-display text-xl font-semibold text-ink">Start a project</h2>
            <p className="mt-1 text-sm text-fog">A few details and we'll take it from there.</p>
            <div className="mt-6 space-y-4">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-ink">
                  Your name
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  placeholder="Jane Kumar"
                  className="w-full rounded-xl border border-line bg-background px-4 py-2.5 text-sm text-ink placeholder:text-fog focus:border-mint focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-ink">
                  Work email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="jane@company.com"
                  className="w-full rounded-xl border border-line bg-background px-4 py-2.5 text-sm text-ink placeholder:text-fog focus:border-mint focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="service" className="mb-1.5 block text-sm font-medium text-ink">
                  What do you need?
                </label>
                <select
                  id="service"
                  name="service"
                  className="w-full rounded-xl border border-line bg-background px-4 py-2.5 text-sm text-ink focus:border-mint focus:outline-none"
                >
                  <option value="">Select a service…</option>
                  {services.map((s) => (
                    <option key={s.id} value={s.title}>
                      {s.title}
                    </option>
                  ))}
                  <option value="Other">Something else</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-ink">
                  Project details
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  placeholder="Tell us about your goals, timeline, and budget range…"
                  className="w-full resize-none rounded-xl border border-line bg-background px-4 py-2.5 text-sm text-ink placeholder:text-fog focus:border-mint focus:outline-none"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-full bg-mint px-6 py-3 text-sm font-semibold text-background transition-transform hover:-translate-y-0.5"
              >
                Send enquiry →
              </button>
              {sent && (
                <p className="text-center text-sm text-mint">
                  Your email app should open with the enquiry ready to send.
                </p>
              )}
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
