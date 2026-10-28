import { createFileRoute } from "@tanstack/react-router";
import dashboardImage from "@/assets/clean-track-dashboard.jpg";
import resumeAsset from "@/assets/prithika-resume.pdf.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Prithika Devi V — Full Stack Developer" },
      { name: "description", content: "Portfolio of Prithika Devi V, a full stack developer building responsive web, mobile, IoT, and data applications." },
      { property: "og:title", content: "Prithika Devi V — Full Stack Developer" },
      { property: "og:description", content: "Explore Prithika's full-stack, IoT, e-commerce, and analytics projects." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portfolio,
});

const skillGroups = [
  { title: "Frontend", tone: "teal", skills: ["HTML", "CSS", "JavaScript", "React.js", "React Native"] },
  { title: "Backend & data", tone: "teal", skills: ["Node.js", "Express.js", "MongoDB", "SQL", "PostgreSQL", "Firebase"] },
  { title: "Systems & tools", tone: "amber", skills: ["Java", "Python", "DSA", "IoT", "ESP32-CAM", "GitHub"] },
] as const;

function SectionHeading({ number, label, title }: { number: string; label: string; title: string }) {
  return <div className="rise"><div className="font-mono text-[11px] uppercase tracking-[0.2em] text-steel">{number} — {label}</div><h2 className="mt-2 max-w-[20ch] text-balance font-display text-3xl font-medium tracking-normal sm:text-4xl">{title}</h2></div>;
}

function Portfolio() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-paper font-body text-ink antialiased">
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(1100px_520px_at_82%_-8%,color-mix(in_oklab,var(--sky)_32%,transparent),transparent_60%),radial-gradient(820px_480px_at_8%_108%,color-mix(in_oklab,var(--teal)_13%,transparent),transparent_62%)]" />
      <header className="sticky top-0 z-50">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="mt-3 flex items-center justify-between gap-4 rounded-2xl bg-ice/70 px-4 py-2.5 shadow-sm ring-1 ring-ink/5 backdrop-blur-md sm:px-5">
            <a href="#top" className="font-mono text-[11px] uppercase tracking-[0.22em] text-steel">Prithika<span className="text-teal">.dev</span></a>
            <nav aria-label="Portfolio sections" className="hidden items-center gap-1 text-sm font-medium text-steel md:flex">
              {[["Work", "#work"], ["Stack", "#stack"], ["Path", "#path"], ["Contact", "#contact"]].map(([label, href]) => <a key={href} href={href} className="rounded-lg px-3 py-1.5 transition-colors hover:bg-ink/5 hover:text-ink">{label}</a>)}
            </nav>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-ink py-1.5 pl-3 pr-3.5 text-xs font-medium text-ice ring-1 ring-ink transition-transform hover:-translate-y-0.5 sm:text-sm"><span className="size-1.5 rounded-full bg-teal" />Available for hire</a>
          </div>
        </div>
      </header>

      <main>
        <section id="top" className="relative z-10 mx-auto max-w-6xl px-5 pb-12 pt-16 sm:px-8 sm:pt-24">
          <div className="grid items-start gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="rise">
              <div className="inline-flex items-center gap-2 rounded-full bg-ice/70 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-steel ring-1 ring-ink/5 backdrop-blur-sm"><span className="size-1.5 rounded-full bg-amber" />Full stack developer · Namakkal, Tamil Nadu</div>
              <h1 className="mt-6 text-balance font-display text-[clamp(3.4rem,9vw,6.2rem)] font-medium leading-[1.02] tracking-normal">Prithika Devi V</h1>
              <p className="mt-5 max-w-[48ch] text-pretty text-base leading-relaxed text-steel sm:text-lg">I build scalable web applications with React, Node.js, Express, and databases. I enjoy turning real-world problems into clean, responsive products—from IoT monitoring to analytics dashboards.</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#work" className="inline-flex items-center gap-2 rounded-full bg-ink py-2 pl-3.5 pr-4 text-sm font-medium text-ice ring-1 ring-ink transition-transform hover:-translate-y-0.5">View projects <span aria-hidden="true">→</span></a>
                <a href={resumeAsset.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-ice/80 px-4 py-2 text-sm font-medium text-ink ring-1 ring-ink/5 backdrop-blur-sm transition-transform hover:-translate-y-0.5">Download résumé</a>
              </div>
              <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-4">
                <div className="rounded-xl bg-ice/60 px-4 py-3.5 ring-1 ring-ink/5 backdrop-blur-sm"><div className="font-display text-2xl leading-none text-teal">3</div><div className="mt-1 text-[11px] uppercase tracking-[0.14em] text-steel">Featured projects</div></div>
                <div className="rounded-xl bg-ice/60 px-4 py-3.5 ring-1 ring-ink/5 backdrop-blur-sm"><div className="font-display text-2xl leading-none text-amber">8.56</div><div className="mt-1 text-[11px] uppercase tracking-[0.14em] text-steel">Current GPA</div></div>
              </div>
            </div>
            <div className="rise rise-2 rounded-2xl bg-ice/70 p-4 shadow-xl ring-1 ring-ink/5 backdrop-blur-md sm:p-5">
              <div className="flex items-center justify-between px-1 pb-3"><span className="font-mono text-[11px] uppercase tracking-[0.18em] text-steel">~/prithika · profile</span><span className="flex gap-1.5"><span className="size-2.5 rounded-full bg-ink/20" /><span className="size-2.5 rounded-full bg-amber/50" /><span className="size-2.5 rounded-full bg-teal/50" /></span></div>
              <div className="rounded-xl bg-hair/95 p-4 font-mono text-[13px] leading-[1.7] text-sky sm:p-5">
                <div><span className="text-sky/50">$</span> <span className="text-teal">whoami</span></div><div className="pl-4 text-ice">Prithika Devi V — full stack developer</div>
                <div className="mt-3"><span className="text-sky/50">$</span> <span className="text-teal">cat</span> focus.json</div><div className="break-words pl-4 text-ice">&quot;react · node · express · databases&quot;</div>
                <div className="mt-3"><span className="text-sky/50">$</span> <span className="text-teal">status</span></div><div className="pl-4"><span className="text-teal">open</span><span className="text-ice"> · seeking software opportunities</span></div>
              </div>
              <div className="mt-4 flex flex-wrap gap-2"><span className="rounded-full bg-teal/10 px-3 py-1 text-xs font-medium text-teal ring-1 ring-teal/20">React.js</span><span className="rounded-full bg-teal/10 px-3 py-1 text-xs font-medium text-teal ring-1 ring-teal/20">Node.js</span><span className="rounded-full bg-amber/10 px-3 py-1 text-xs font-medium text-amber ring-1 ring-amber/20">IoT</span></div>
            </div>
          </div>
        </section>

        <section id="work" className="relative z-10 mx-auto max-w-6xl px-5 py-14 sm:px-8">
          <div className="mb-8 flex items-end justify-between gap-4"><SectionHeading number="02" label="Featured work" title="Projects built to solve real problems" /><span className="hidden font-mono text-xs text-steel/70 sm:inline">web · mobile · IoT · data</span></div>
          <article className="rise rise-2 rounded-2xl bg-ice/70 p-5 ring-1 ring-ink/5 backdrop-blur-md sm:p-6"><div className="grid items-center gap-7 md:grid-cols-[0.9fr_1.1fr]"><div><div className="font-mono text-[11px] uppercase tracking-[0.18em] text-teal">01 · IoT · AI · Waste monitoring</div><h3 className="mt-2 font-display text-3xl font-medium tracking-normal">Clean Track</h3><p className="mt-3 max-w-[52ch] text-pretty text-sm leading-relaxed text-steel sm:text-[15px]">A web and mobile waste detection system using ESP32-CAM and GPS modules. It automates detection, reporting, and accountability to improve waste management efficiency.</p><div className="mt-4 flex flex-wrap gap-2 font-mono text-[11px]">{["IoT", "AI", "Firebase", "React", "React Native", "ESP32-CAM"].map(x => <span key={x} className="rounded bg-ink/5 px-2 py-0.5">{x}</span>)}</div><p className="mt-5 font-mono text-[11px] text-steel">March 2025 — August 2025</p></div><img src={dashboardImage} alt="Smart waste monitoring dashboard concept for Clean Track" width={1024} height={640} loading="lazy" className="w-full rounded-xl object-cover ring-1 ring-ink/5" /></div></article>
          <div className="mt-5 grid gap-5 sm:grid-cols-2">
            <article className="rise rise-3 rounded-2xl bg-ice/60 p-5 ring-1 ring-ink/5 backdrop-blur-sm"><div className="font-mono text-[11px] uppercase tracking-[0.18em] text-teal">02 · Full stack · E-commerce</div><h3 className="mt-2 font-display text-2xl font-medium tracking-normal">Simple E-Commerce Website</h3><p className="mt-2 text-pretty text-sm leading-relaxed text-steel">A responsive demo shopping experience with product listings, add-to-cart, and a basic checkout flow.</p><div className="mt-4 flex flex-wrap gap-2 font-mono text-[11px]">{["React.js", "Node.js", "Express.js", "MongoDB"].map(x => <span key={x} className="rounded bg-ink/5 px-2 py-0.5">{x}</span>)}</div><p className="mt-5 font-mono text-[11px] text-steel">July 2024 — October 2024</p></article>
            <article className="rise rise-4 rounded-2xl bg-ice/60 p-5 ring-1 ring-ink/5 backdrop-blur-sm"><div className="font-mono text-[11px] uppercase tracking-[0.18em] text-amber">03 · Python · Analytics</div><h3 className="mt-2 font-display text-2xl font-medium tracking-normal">YouTube Data Harvesting</h3><p className="mt-2 text-pretty text-sm leading-relaxed text-steel">A system that extracts channel and video data through the YouTube API, stores it, and visualizes views, likes, comments, and engagement in Streamlit.</p><div className="mt-4 flex flex-wrap gap-2 font-mono text-[11px]">{["Python", "YouTube API", "MongoDB", "Streamlit", "PostgreSQL"].map(x => <span key={x} className="rounded bg-ink/5 px-2 py-0.5">{x}</span>)}</div><p className="mt-5 font-mono text-[11px] text-steel">January 2023 — March 2023</p></article>
          </div>
        </section>

        <section id="stack" className="relative z-10 mx-auto max-w-6xl px-5 py-14 sm:px-8"><SectionHeading number="03" label="Stack" title="Tools I reach for" /><div className="rise rise-2 mt-6 grid gap-6 rounded-2xl bg-ice/60 p-5 ring-1 ring-ink/5 backdrop-blur-sm sm:grid-cols-3 sm:p-6">{skillGroups.map(group => <div key={group.title}><div className={`font-mono text-[11px] uppercase tracking-[0.16em] ${group.tone === "amber" ? "text-amber" : "text-teal"}`}>{group.title}</div><div className="mt-2 flex flex-wrap gap-1.5 text-sm font-medium">{group.skills.map(skill => <span key={skill} className={`rounded-md px-2 py-1 ${group.tone === "amber" ? "bg-amber/10 text-amber" : "bg-teal/10 text-teal"}`}>{skill}</span>)}</div></div>)}</div><div className="mt-5 rounded-2xl border-l-2 border-teal bg-ice/45 p-5 text-sm leading-relaxed text-steel"><span className="font-medium text-ink">How I work:</span> problem solving, critical thinking, adaptability, communication, leadership, teamwork, decision making, project and time management, and continuous self-learning.</div></section>

        <section id="path" className="relative z-10 mx-auto max-w-6xl px-5 py-14 sm:px-8"><SectionHeading number="04" label="Path" title="Experience and learning" /><div className="rise rise-2 mt-6 grid gap-5 lg:grid-cols-2">
          <div className="rounded-2xl bg-ice/60 p-5 ring-1 ring-ink/5 backdrop-blur-sm sm:p-6"><ol className="space-y-6 border-l border-ink/10 pl-5"><li><div className="font-mono text-[11px] uppercase tracking-[0.16em] text-teal">August 01 — August 17 · Internship</div><div className="mt-1 font-medium">Full Stack Web Development Intern</div><div className="text-sm text-steel">ProFuture Tech Solutions Private Limited</div><p className="mt-2 text-sm leading-relaxed text-steel">Built responsive applications with HTML, CSS, JavaScript, React, Node, Express, REST APIs, and database integration.</p></li><li><div className="font-mono text-[11px] uppercase tracking-[0.16em] text-teal">April 24 — May 24 · Bootcamp</div><div className="mt-1 font-medium">Web Development Bootcamp</div><div className="text-sm text-steel">Google Developer Student Club (GDSC)</div><p className="mt-2 text-sm leading-relaxed text-steel">Developed mini-projects and strengthened front-end, back-end, problem-solving, and peer-coding skills.</p></li></ol></div>
          <div className="rounded-2xl bg-ice/60 p-5 ring-1 ring-ink/5 backdrop-blur-sm sm:p-6"><div className="font-mono text-[11px] uppercase tracking-[0.16em] text-amber">Education · 2022 — 2026</div><div className="mt-1 font-medium">B.Tech, Information Technology</div><div className="text-sm text-steel">Paavai Engineering College · GPA 8.56 · Pursuing</div><div className="mt-6 font-mono text-[11px] uppercase tracking-[0.16em] text-amber">Certificates</div><ul className="mt-2 space-y-3 text-sm text-steel"><li><span className="font-medium text-ink">Infosys Springboard</span> — Agile Methodologies & JavaScript Fundamentals, June 2025</li><li><span className="font-medium text-ink">GUVI</span> — Full Stack Development, April 2025</li><li><span className="font-medium text-ink">AICTE</span> — Android Developer Virtual Internship, Jan–Mar 2024</li></ul></div>
        </div></section>

        <section id="contact" className="relative z-10 mx-auto max-w-6xl px-5 py-16 sm:px-8"><div className="rise grid items-center gap-8 rounded-2xl bg-ice/70 p-6 ring-1 ring-ink/5 backdrop-blur-md md:grid-cols-[1.05fr_0.95fr] sm:p-8"><div><div className="font-mono text-[11px] uppercase tracking-[0.2em] text-steel">05 — Contact</div><h2 className="mt-2 max-w-[18ch] text-balance font-display text-3xl font-medium tracking-normal sm:text-4xl">Let&apos;s build something that works.</h2><p className="mt-3 max-w-[43ch] text-pretty text-sm leading-relaxed text-steel">I&apos;m seeking opportunities to contribute to a dynamic software team, grow as a developer, and solve meaningful problems.</p></div><div className="space-y-2.5">
          <a href="mailto:prithikadeviit@gmail.com" className="flex flex-col justify-between gap-1 rounded-xl bg-teal/10 px-4 py-3 ring-1 ring-teal/20 transition-transform hover:-translate-y-0.5 sm:flex-row"><span className="font-mono text-xs uppercase tracking-[0.16em] text-teal">Email</span><span className="break-all text-sm font-medium">prithikadeviit@gmail.com</span></a>
          <a href="https://github.com/Prithikadevi-git" target="_blank" rel="noreferrer" className="flex flex-col justify-between gap-1 rounded-xl bg-ink/5 px-4 py-3 ring-1 ring-ink/5 transition-transform hover:-translate-y-0.5 sm:flex-row"><span className="font-mono text-xs uppercase tracking-[0.16em] text-steel">GitHub</span><span className="text-sm font-medium">Prithikadevi-git</span></a>
          <a href="https://www.linkedin.com/in/prithika-devi-9703ba260" target="_blank" rel="noreferrer" className="flex flex-col justify-between gap-1 rounded-xl bg-ink/5 px-4 py-3 ring-1 ring-ink/5 transition-transform hover:-translate-y-0.5 sm:flex-row"><span className="font-mono text-xs uppercase tracking-[0.16em] text-steel">LinkedIn</span><span className="text-sm font-medium">prithika-devi-9703ba260</span></a>
          <a href="tel:+919042936204" className="flex flex-col justify-between gap-1 rounded-xl bg-ink/5 px-4 py-3 ring-1 ring-ink/5 transition-transform hover:-translate-y-0.5 sm:flex-row"><span className="font-mono text-xs uppercase tracking-[0.16em] text-steel">Phone</span><span className="text-sm font-medium">+91 90429 36204</span></a>
        </div></div><footer className="mt-8 flex flex-col items-center justify-between gap-2 text-center font-mono text-xs text-steel/70 sm:flex-row sm:text-left"><span>Prithika Devi V — Full Stack Developer · Namakkal, Tamil Nadu</span><span>Built with curiosity and clean code</span></footer></section>
      </main>
    </div>
  );
}