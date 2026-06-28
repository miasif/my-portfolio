import Image from "next/image";
import Navbar from "@/components/Navbar";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import Typewriter from "@/components/Typewriter";
import SocialIcons from "@/components/SocialIcons";
import FloatingSkills from "@/components/FloatingSkills";
import {
  profile,
  stats,
  experience,
  projects,
  skills,
  education,
  certifications,
  achievements,
} from "@/lib/data";

function SectionTitle({ kicker, title }: { kicker: string; title: string }) {
  return (
    <div className="mb-12">
      <p className="mb-2 text-sm font-medium uppercase tracking-widest text-accent">
        {kicker}
      </p>
      <h2 className="text-3xl font-bold tracking-tight text-fg sm:text-4xl">
        {title}
      </h2>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="top" className="mx-auto max-w-5xl px-6">
        {/* Hero */}
        <section className="relative grid min-h-screen items-center gap-12 pb-28 pt-28 sm:pb-20 lg:grid-cols-[7fr_3fr] lg:pb-0 lg:pt-20">
          <Reveal>
            <p className="mb-4 font-mono text-sm text-accent">Hi, my name is</p>
            <h1 className="text-5xl font-bold tracking-tight sm:text-7xl">
              <span className="gradient-text">{profile.name}</span>
              <span className="text-fg">.</span>
            </h1>
            <p className="mt-4 font-mono text-lg text-muted sm:text-xl">
              <span className="text-accent">&lt;</span>
              Full-Stack Developer
              <span className="text-accent">/&gt;</span>
            </p>
            <h2 className="mt-4 flex min-h-[1.2em] items-center text-2xl font-bold tracking-tight text-muted sm:text-4xl">
              <Typewriter
                words={[
                  "I build with Laravel & React.",
                  "I design scalable databases.",
                  "I ship secure REST APIs.",
                  "I keep production healthy.",
                ]}
              />
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-muted">
              I&apos;m a {profile.title.toLowerCase()} based in {profile.location},
              with 4+ years building, scaling, and maintaining enterprise web
              applications across healthcare and telecom. Currently engineering
              backend systems at <span className="text-accent">Analyzen</span>.
            </p>

            {/* Location badge */}
            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface shadow-sm shadow-slate-300/40 dark:bg-surface/60 dark:shadow-none px-4 py-1.5 text-sm text-muted">
              <span className="h-2 w-2 rounded-full bg-accent" />
              {profile.location}
            </div>

            {/* Stats */}
            <dl className="mt-8 flex flex-wrap gap-x-10 gap-y-4">
              {stats.map((s) => (
                <div key={s.label}>
                  <dt className="sr-only">{s.label}</dt>
                  <dd className="text-3xl font-bold text-fg">{s.value}</dd>
                  <dd className="text-sm text-muted">{s.label}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-10 flex flex-col gap-6">
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#projects"
                  className="rounded-md border border-accent/40 px-6 py-3 text-sm font-medium text-accent transition-all hover:bg-accent/10"
                >
                  View my work
                </a>
                <a
                  href={profile.resume}
                  download
                  className="rounded-md border border-border px-6 py-3 text-sm font-medium text-muted transition-colors hover:border-accent/40 hover:text-accent"
                >
                  Download CV ↓
                </a>
              </div>
              <SocialIcons />
            </div>
          </Reveal>

          {/* Floating skills design (right column) */}
          <Reveal delay={150} className="hidden lg:block">
            <FloatingSkills />
          </Reveal>

          <a
            href="#about"
            aria-label="Scroll to about"
            className="absolute bottom-10 left-1/2 hidden -translate-x-1/2 text-muted transition-colors hover:text-accent lg:block"
          >
            <svg
              className="scroll-indicator h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </a>
        </section>

        {/* About */}
        <section id="about" className="scroll-mt-24 py-24">
          <Reveal>
            <SectionTitle kicker="01 — About" title="A bit about me" />
            <div className="grid items-start gap-10 md:grid-cols-[1fr_auto]">
              <div>
                <p className="text-left text-lg leading-relaxed text-muted md:text-justify">
                  {profile.summary}
                </p>
                <p className="mt-6 text-left text-lg leading-relaxed text-muted md:text-justify">
                  I&apos;m comfortable across the stack but spend most of my time in
                  the backend — designing schemas, optimising queries, hardening
                  security, and keeping production systems healthy. I value robust,
                  secure, and high-performance software delivered in Agile teams.
                </p>
              </div>
              <div className="float relative mx-auto grid h-64 w-64 shrink-0 place-items-center sm:h-72 sm:w-72 lg:h-88 lg:w-88 md:mx-0">
                {/* soft glow */}
                <div className="absolute inset-4 -z-10 rounded-3xl bg-linear-to-tr from-accent/40 to-accent-2/40 blur-3xl" />
                {/* gradient ring */}
                <div className="rounded-3xl bg-linear-to-tr from-accent to-accent-2 p-1.5">
                  <Image
                    src="/profile.jpeg"
                    alt={profile.name}
                    width={400}
                    height={400}
                    className="h-60 w-60 rounded-3xl border-4 border-bg object-cover sm:h-68 sm:w-68 lg:h-84 lg:w-84"
                    priority
                  />
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        {/* Experience — timeline */}
        <section id="experience" className="scroll-mt-24 py-24">
          <Reveal>
            <SectionTitle kicker="02 — Experience" title="Where I've worked" />
          </Reveal>
          <div className="relative">
            {/* vertical line */}
            <span className="absolute left-2 top-2 bottom-2 w-px bg-border md:left-2.5" />
            <div className="space-y-10">
              {experience.map((job, i) => (
                <Reveal key={job.company} delay={i * 80}>
                  <div className="relative pl-10 md:pl-12">
                    {/* dot */}
                    <span className="absolute left-0 top-1.5 grid h-5 w-5 place-items-center rounded-full border border-accent/50 bg-bg">
                      <span className="h-2 w-2 rounded-full bg-accent" />
                    </span>
                    <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
                      <h3 className="text-xl font-semibold text-fg">
                        {job.role}{" "}
                        <span className="text-accent">@ {job.company}</span>
                      </h3>
                      <span className="font-mono text-sm text-muted">
                        {job.period}
                      </span>
                    </div>
                    <p className="mt-1 text-sm text-muted">{job.location}</p>
                    <ul className="mt-4 space-y-2">
                      {job.highlights.map((h, j) => (
                        <li key={j} className="flex gap-3 text-muted">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                          <span className="leading-relaxed">{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="scroll-mt-24 py-24">
          <Reveal>
            <SectionTitle kicker="03 — Projects" title="Things I've built" />
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-2">
            {projects.map((p, i) => (
              <Reveal key={p.name} delay={i * 80}>
                <article className="group flex h-full flex-col rounded-xl border border-border bg-surface shadow-sm shadow-slate-300/40 dark:bg-surface/60 dark:shadow-none p-6 transition-all hover:-translate-y-1 hover:border-accent/40">
                  <div className="mb-4 flex items-center justify-between">
                    <svg
                      className="h-9 w-9 text-accent"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
                      />
                    </svg>
                    {p.featured && (
                      <span className="rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                        ★ Featured
                      </span>
                    )}
                  </div>
                  <h3 className="text-lg font-semibold text-fg transition-colors group-hover:text-accent">
                    {p.name}
                  </h3>
                  <p className="mt-0.5 font-mono text-xs text-accent/80">
                    {p.tagline}
                  </p>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                    {p.description}
                  </p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <li
                        key={t}
                        className="rounded-full border border-border bg-fg/5 px-3 py-1 font-mono text-xs text-muted"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                  {(p.liveUrl || p.codeUrl) && (
                    <div className="mt-5 flex items-center gap-4 border-t border-border pt-4 text-sm">
                      {p.liveUrl && (
                        <a
                          href={p.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-accent transition-opacity hover:opacity-80"
                        >
                          Live Demo
                          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                          </svg>
                        </a>
                      )}
                      {p.codeUrl && (
                        <a
                          href={p.codeUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted transition-colors hover:text-accent"
                        >
                          Code
                        </a>
                      )}
                    </div>
                  )}
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="scroll-mt-24 py-24">
          <Reveal>
            <SectionTitle kicker="04 — Skills" title="My toolkit" />
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((group, i) => (
              <Reveal key={group.category} delay={i * 70}>
                <div className="rounded-xl border border-border bg-surface shadow-sm shadow-slate-300/40 dark:bg-surface/60 dark:shadow-none p-6">
                  <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-accent">
                    {group.category}
                  </h3>
                  <ul className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-md bg-fg/5 px-3 py-1.5 text-sm text-fg/80"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Education + Certs + Achievements */}
        <section id="education" className="scroll-mt-24 py-24">
          <Reveal>
            <SectionTitle kicker="05 — Background" title="Education & recognition" />
          </Reveal>
          <div className="grid gap-6 lg:grid-cols-2">
            <Reveal>
              <div className="space-y-6">
                {education.map((e) => (
                  <div
                    key={e.degree}
                    className="rounded-xl border border-border bg-surface shadow-sm shadow-slate-300/40 dark:bg-surface/60 dark:shadow-none p-6"
                  >
                    <h3 className="font-semibold text-fg">{e.degree}</h3>
                    <p className="mt-1 text-sm text-muted">{e.school}</p>
                    <div className="mt-3 flex items-center justify-between font-mono text-xs text-muted">
                      <span className="text-accent">{e.detail}</span>
                      <span>{e.period}</span>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="space-y-6">
                <div className="rounded-xl border border-border bg-surface shadow-sm shadow-slate-300/40 dark:bg-surface/60 dark:shadow-none p-6">
                  <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-accent">
                    Certifications
                  </h3>
                  <ul className="space-y-2">
                    {certifications.map((c) => (
                      <li key={c} className="flex gap-3 text-sm text-muted">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-xl border border-border bg-surface shadow-sm shadow-slate-300/40 dark:bg-surface/60 dark:shadow-none p-6">
                  <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-accent">
                    Achievements
                  </h3>
                  <ul className="space-y-2">
                    {achievements.map((a) => (
                      <li key={a} className="flex gap-3 text-sm text-muted">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent-2" />
                        {a}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="scroll-mt-24 py-24 text-center">
          <Reveal>
            <p className="mb-3 font-mono text-sm text-accent">06 — What&apos;s next</p>
            <h2 className="text-4xl font-bold tracking-tight text-fg sm:text-5xl">
              Get in touch
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted">
              I&apos;m always open to discussing new projects, backend challenges, or
              opportunities to build something great together. My inbox is always
              open.
            </p>
            <ContactForm />
            <SocialIcons className="mt-10 justify-center" />
          </Reveal>
        </section>

        {/* Footer */}
        <footer className="border-t border-border py-10">
          <div className="flex flex-col items-center gap-4 text-sm text-muted sm:flex-row sm:justify-between">
            <p>
              © {2024} {profile.name}. Built with Next.js & Tailwind CSS.
            </p>
            <div className="flex items-center gap-6">
              <a
                href={profile.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-accent"
              >
                GitHub
              </a>
              <a
                href={profile.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-accent"
              >
                LinkedIn
              </a>
              <a
                href={profile.links.website}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-accent"
              >
                Website
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="transition-colors hover:text-accent"
              >
                Email
              </a>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
