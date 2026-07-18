import { profile } from "./data";

const Katakana = ({ text, className = "" }: { text: string; className?: string }) => (
  <span
    aria-hidden
    className={`font-mono text-[color:var(--color-cyan)]/70 tracking-[0.35em] ${className}`}
  >
    {text}
  </span>
);

const SectionHeader = ({
  index,
  eyebrow,
  title,
}: {
  index: string;
  eyebrow: string;
  title: string;
}) => (
  <header className="mb-10 flex flex-col gap-2">
    <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.3em] text-[color:var(--color-ink-dim)]">
      <span className="neon-magenta">
        <span aria-hidden>§ </span>
        {index}
      </span>
      <span className="h-px flex-1 bg-gradient-to-r from-[color:var(--color-line-strong)] to-transparent" />
      <span>{eyebrow}</span>
    </div>
    <h2 className="text-3xl md:text-5xl font-head font-semibold uppercase">
      <span className="neon-cyan">{title}</span>
    </h2>
  </header>
);

const Nav = () => (
  <nav className="sticky top-0 z-40 border-b border-[color:var(--color-line)] bg-[color:var(--color-bg)]/70 backdrop-blur">
    <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-8">
      <a href="#top" className="font-display text-sm tracking-[0.25em] neon-cyan">
        JKP<span className="text-[color:var(--color-neon)]">//</span>OS
      </a>
      <div className="hidden md:flex items-center gap-6 font-mono text-xs uppercase tracking-[0.2em] text-[color:var(--color-ink-dim)]">
        {[
          ["ABOUT", "about"],
          ["TIMELINE", "timeline"],
          ["IMPACT", "impact"],
          ["OPS", "projects"],
          ["STACK", "skills"],
          ["CONTACT", "contact"],
        ].map(([label, id]) => (
          <a
            key={id}
            href={`#${id}`}
            className="transition-colors hover:text-[color:var(--color-cyan)]"
          >
            {label}
          </a>
        ))}
      </div>
      <a href={`mailto:${profile.email}`} className="btn-ghost text-[10px]">
        <span aria-hidden>▸</span> HAIL
      </a>
    </div>
  </nav>
);

const Hero = () => (
  <section id="top" className="relative overflow-hidden scanlines">
    <div aria-hidden className="pointer-events-none absolute inset-0 grid-bg opacity-70" />
    <div aria-hidden className="pointer-events-none absolute -top-32 right-[-10%] h-[520px] w-[520px] rounded-full bg-[color:var(--color-neon)]/15 blur-3xl" />
    <div aria-hidden className="pointer-events-none absolute bottom-[-20%] left-[-10%] h-[520px] w-[520px] rounded-full bg-[color:var(--color-cyan)]/15 blur-3xl" />

    <div className="relative mx-auto max-w-6xl px-4 pt-16 pb-24 md:px-8 md:pt-24 md:pb-32">
      <div className="mb-6 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.35em] text-[color:var(--color-ink-dim)]">
        <span className="inline-block h-2 w-2 rounded-full bg-[color:var(--color-phos)] animate-pulse-neon" />
        SYSTEM ONLINE · {profile.location.toUpperCase()}
        <Katakana text={profile.katakana} className="ml-auto hidden md:inline" />
      </div>

      <h1
        data-text={profile.name}
        className="glitch font-display text-5xl sm:text-6xl md:text-8xl font-black uppercase leading-[0.95]"
      >
        {profile.name}
      </h1>

      <div className="mt-4 flex flex-wrap items-baseline gap-x-4 gap-y-2 font-head text-lg md:text-2xl uppercase tracking-widest">
        <span className="neon-magenta">{profile.title}</span>
        <span className="text-[color:var(--color-ink-dim)]">//</span>
        <span className="text-[color:var(--color-ink)]">{profile.affiliation}</span>
      </div>

      <p className="mt-8 max-w-2xl text-base md:text-lg text-[color:var(--color-ink)]/85">
        {profile.tagline}
      </p>

      <div className="mt-10 flex flex-wrap gap-3">
        <a href="#projects" className="btn-neon">
          <span aria-hidden>▸</span> VIEW OPERATIONS
        </a>
        <a href="#contact" className="btn-ghost">
          <span aria-hidden>◇</span> OPEN CHANNEL
        </a>
      </div>

      <div className="mt-14 grid grid-cols-2 gap-3 md:grid-cols-4">
        {profile.stats.map((s) => (
          <div key={s.k} className="hud-panel hud-corners px-4 py-4">
            <div className="font-display text-2xl md:text-3xl neon-cyan">{s.k}</div>
            <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.2em] text-[color:var(--color-ink-dim)]">
              {s.v}
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Katakana marquee */}
    <div
      aria-hidden
      className="overflow-hidden border-y border-[color:var(--color-line)] bg-[color:var(--color-bg-2)]/60"
    >
      <div className="animate-marquee flex whitespace-nowrap py-2 font-mono text-xs uppercase tracking-[0.4em] text-[color:var(--color-cyan)]/60">
        {Array.from({ length: 2 }).map((_, i) => (
          <div key={i} className="flex shrink-0 gap-8 pr-8">
            {[
              "データ・エンジニア",
              "電脳",
              "LAKEHOUSE.OPS",
              "多エージェント",
              "FINOPS//∆",
              "オブザーバビリティ",
              "LANGGRAPH::∞",
              "IBM ▸ HEINEKEN",
            ].map((t, j) => (
              <span key={j}>◈ {t}</span>
            ))}
          </div>
        ))}
      </div>
    </div>
  </section>
);

const About = () => (
  <section id="about" className="mx-auto max-w-6xl px-4 py-20 md:px-8 md:py-28">
    <SectionHeader index="01" eyebrow="OPERATOR PROFILE" title="ABOUT" />
    <div className="grid gap-8 md:grid-cols-[1fr_260px]">
      <div className="space-y-5 text-base md:text-lg text-[color:var(--color-ink)]/85 leading-relaxed">
        {profile.about.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
        <div className="flex flex-wrap gap-2 pt-2">
          {profile.roles.map((r) => (
            <span key={r} className="chip">
              <span aria-hidden>◇</span> {r}
            </span>
          ))}
        </div>
      </div>

      <aside className="hud-panel hud-corners relative flex flex-col justify-between p-5">
        <div
          aria-hidden
          className="font-display text-[6rem] leading-none neon-magenta opacity-90"
        >
          {profile.kanji}
        </div>
        <dl className="mt-6 space-y-3 font-mono text-xs">
          <div className="flex justify-between gap-4 border-b border-[color:var(--color-line)] pb-2">
            <dt className="text-[color:var(--color-ink-dim)]">LOC</dt>
            <dd className="text-[color:var(--color-cyan)]">{profile.location}</dd>
          </div>
          <div className="flex justify-between gap-4 border-b border-[color:var(--color-line)] pb-2">
            <dt className="text-[color:var(--color-ink-dim)]">STATUS</dt>
            <dd className="neon-phos">OPEN TO CONVERSATIONS</dd>
          </div>
          <div className="flex justify-between gap-4 border-b border-[color:var(--color-line)] pb-2">
            <dt className="text-[color:var(--color-ink-dim)]">CLIENT</dt>
            <dd>HEINEKEN · ~6 PB</dd>
          </div>
          <div className="flex justify-between gap-4">
            <dt className="text-[color:var(--color-ink-dim)]">EXP</dt>
            <dd>4+ YRS</dd>
          </div>
        </dl>
      </aside>
    </div>
  </section>
);

const Timeline = () => (
  <section id="timeline" className="mx-auto max-w-6xl px-4 py-20 md:px-8 md:py-28">
    <SectionHeader index="02" eyebrow="MISSION LOG" title="TIMELINE" />
    <ol className="relative space-y-8 pl-8 md:pl-12 before:absolute before:left-2 md:before:left-3 before:top-2 before:bottom-2 before:w-px before:bg-gradient-to-b before:from-[color:var(--color-cyan)] before:via-[color:var(--color-neon)] before:to-transparent">
      {profile.timeline.map((t, i) => (
        <li key={i} className="relative">
          <span
            aria-hidden
            className="absolute -left-6 md:-left-9 top-1 h-4 w-4 rotate-45 border border-[color:var(--color-cyan)] bg-[color:var(--color-bg)] animate-pulse-neon"
          />
          <div className="hud-panel hud-corners p-5">
            <div className="flex flex-wrap items-baseline gap-3 font-mono text-[11px] uppercase tracking-[0.25em]">
              <span className="neon-magenta">{t.date}</span>
              <span className="text-[color:var(--color-ink-dim)]">
                ENTRY_{String(i + 1).padStart(2, "0")}
              </span>
            </div>
            <h3 className="mt-2 font-head text-xl md:text-2xl uppercase text-[color:var(--color-ink)]">
              {t.title}
            </h3>
            <p className="mt-2 text-sm md:text-base text-[color:var(--color-ink)]/80">
              {t.body}
            </p>
          </div>
        </li>
      ))}
    </ol>
  </section>
);

const Impact = () => (
  <section id="impact" className="mx-auto max-w-6xl px-4 py-20 md:px-8 md:py-28">
    <SectionHeader index="03" eyebrow="QUANTIFIED OUTCOMES" title="IMPACT" />
    <div className="grid gap-4 md:grid-cols-2">
      {profile.impact.map((it, i) => (
        <article key={i} className="hud-panel hud-corners scanlines p-6">
          <div className="flex items-baseline justify-between gap-4">
            <div>
              <div className="font-display text-4xl md:text-5xl neon-cyan">
                {it.metric}
              </div>
              <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.25em] text-[color:var(--color-ink-dim)]">
                {it.unit}
              </div>
            </div>
            <span className="chip">OPS_{String(i + 1).padStart(2, "0")}</span>
          </div>
          <h3 className="mt-4 font-head text-lg md:text-xl uppercase text-[color:var(--color-ink)]">
            {it.title}
          </h3>
          <p className="mt-2 text-sm text-[color:var(--color-ink)]/80 leading-relaxed">
            {it.body}
          </p>
        </article>
      ))}
    </div>
  </section>
);

const Projects = () => (
  <section id="projects" className="mx-auto max-w-6xl px-4 py-20 md:px-8 md:py-28">
    <SectionHeader index="04" eyebrow="SELF-ENGINEERED" title="OPERATIONS" />
    <div className="grid gap-6 md:grid-cols-2">
      {profile.projects.map((p) => (
        <a
          key={p.name}
          href={p.href}
          target="_blank"
          rel="noreferrer"
          className="hud-panel hud-corners group relative block overflow-hidden p-6 transition-colors hover:border-[color:var(--color-neon)]"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[color:var(--color-neon)]/0 via-transparent to-[color:var(--color-cyan)]/0 opacity-0 transition-opacity group-hover:from-[color:var(--color-neon)]/10 group-hover:to-[color:var(--color-cyan)]/10 group-hover:opacity-100"
          />
          <div className="relative">
            <div className="flex items-baseline justify-between gap-4">
              <h3 className="font-display text-2xl md:text-3xl uppercase neon-magenta">
                {p.name}
              </h3>
              <span className="font-mono text-xs text-[color:var(--color-cyan)]">
                GITHUB <span aria-hidden>↗</span>
              </span>
            </div>
            <div className="mt-1 font-head text-sm uppercase tracking-[0.2em] text-[color:var(--color-ink-dim)]">
              {p.subtitle}
            </div>
            <p className="mt-4 text-sm text-[color:var(--color-ink)]/85 leading-relaxed">
              {p.body}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {p.chips.map((c) => (
                <span key={c} className="chip">
                  {c}
                </span>
              ))}
            </div>
            <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.2em] text-[color:var(--color-ink-dim)]">
              // {p.note}
            </p>
          </div>
        </a>
      ))}
    </div>
  </section>
);

const Skills = () => (
  <section id="skills" className="mx-auto max-w-6xl px-4 py-20 md:px-8 md:py-28">
    <SectionHeader index="05" eyebrow="STACK & CREDENTIALS" title="SKILLS" />
    <div className="grid gap-4 md:grid-cols-2">
      {profile.skills.map((s) => (
        <div key={s.group} className="hud-panel hud-corners p-5 font-mono text-sm">
          <div className="mb-3 flex items-center gap-2 text-[11px] uppercase tracking-[0.3em]">
            <span className="neon-cyan">$</span>
            <span className="neon-magenta">./stack</span>
            <span className="text-[color:var(--color-ink-dim)]">
              --group {s.group.toLowerCase()}
            </span>
          </div>
          <ul className="space-y-1.5">
            {s.items.map((it) => (
              <li key={it} className="flex gap-2">
                <span aria-hidden className="text-[color:var(--color-phos)]">▸</span>
                <span className="text-[color:var(--color-ink)]/90">{it}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>

    <div className="mt-10">
      <div className="mb-4 font-mono text-[11px] uppercase tracking-[0.3em] text-[color:var(--color-ink-dim)]">
        // ACTIVE CERTIFICATIONS
      </div>
      <div className="grid gap-3 md:grid-cols-3">
        {profile.certs.map((c) => (
          <div
            key={c.code}
            className="hud-panel hud-corners flex items-center gap-4 p-4"
          >
            <div className="grid h-14 w-14 shrink-0 place-items-center border border-[color:var(--color-line-strong)] font-display text-xs neon-cyan">
              {c.code}
            </div>
            <div>
              <div className="font-head text-sm uppercase text-[color:var(--color-ink)]">
                {c.name}
              </div>
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[color:var(--color-ink-dim)]">
                {c.issuer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Contact = () => (
  <section id="contact" className="mx-auto max-w-6xl px-4 py-20 md:px-8 md:py-28">
    <SectionHeader index="06" eyebrow="OPEN CHANNEL" title="CONTACT" />
    <p className="mb-6 max-w-2xl text-sm md:text-base text-[color:var(--color-ink)]/80">
      Not actively job-hunting, but if you have an interesting opportunity or a hard
      problem worth solving, my DMs are open. Reach out on{" "}
      <a
        href={profile.links.linkedin}
        target="_blank"
        rel="noreferrer"
        className="underline decoration-[color:var(--color-neon)] decoration-1 underline-offset-4 hover:neon-magenta"
      >
        LinkedIn
      </a>{" "}
      and let&apos;s talk.
    </p>
    <div className="hud-panel hud-corners scanlines p-6 md:p-10 font-mono text-sm md:text-base">
      <div className="mb-4 flex items-center gap-2 text-[color:var(--color-ink-dim)]">
        <span aria-hidden className="neon-phos">●</span>
        <span>jkp@nightcity ~ % ./contact.sh</span>
      </div>
      <ul className="space-y-3">
        {[
          ["EMAIL", profile.email, `mailto:${profile.email}`],
          ["PHONE", profile.phone, `tel:${profile.phone.replace(/[^+\d]/g, "")}`],
          ["LINKEDIN", profile.links.linkedin.replace(/^https?:\/\//, ""), profile.links.linkedin],
          ["GITHUB", profile.links.github.replace(/^https?:\/\//, ""), profile.links.github],
          ["SITE", profile.links.site.replace(/^https?:\/\//, ""), profile.links.site],
        ].map(([label, value, href]) => (
          <li key={label} className="flex flex-wrap items-baseline gap-3">
            <span className="w-20 text-[color:var(--color-ink-dim)]">{label}</span>
            <span aria-hidden className="neon-cyan">▸</span>
            <a
              href={href}
              target={href!.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="text-[color:var(--color-ink)] underline decoration-[color:var(--color-neon)] decoration-1 underline-offset-4 hover:neon-magenta"
            >
              {value}
            </a>
          </li>
        ))}
      </ul>
      <div className="mt-6 flex flex-wrap gap-3">
        <a href={`mailto:${profile.email}`} className="btn-neon">
          <span aria-hidden>▸</span> SEND TRANSMISSION
        </a>
        <a href={profile.links.github} target="_blank" rel="noreferrer" className="btn-ghost">
          <span aria-hidden>◇</span> GITHUB.ARCHIVE
        </a>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="border-t border-[color:var(--color-line)] py-8">
    <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 md:flex-row md:px-8">
      <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-[color:var(--color-ink-dim)]">
        © {new Date().getFullYear()} JABIRHUSAIN.KP · BUILD_{new Date().getFullYear()}.10.CYBR
      </div>
      <Katakana text={`${profile.katakana} · ${profile.kanji}`} />
    </div>
  </footer>
);

export function Portfolio() {
  return (
    <div className="min-h-screen animate-flicker">
      <Nav />
      <main>
        <Hero />
        <About />
        <Timeline />
        <Impact />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
