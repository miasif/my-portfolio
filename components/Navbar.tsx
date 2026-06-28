"use client";

import { useEffect, useState } from "react";
import { profile } from "@/lib/data";
import ThemeToggle from "@/components/ThemeToggle";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border bg-bg/80 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-mono text-sm font-semibold tracking-tight text-fg">
          <span className="text-accent">&lt;</span>Asif
          <span className="text-accent">/&gt;</span>
        </a>

        <ul className="hidden items-center gap-8 text-sm text-muted md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="transition-colors hover:text-accent">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <a
            href={profile.resume}
            download
            className="hidden rounded-md border border-accent/40 px-4 py-2 text-sm text-accent transition-colors hover:bg-accent/10 sm:inline-block"
          >
            Resume
          </a>
          <button
            aria-label="Toggle menu"
            className="md:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            <div className="space-y-1.5">
              <span className="block h-0.5 w-6 bg-fg" />
              <span className="block h-0.5 w-6 bg-fg" />
              <span className="block h-0.5 w-6 bg-fg" />
            </div>
          </button>
        </div>
      </nav>

      {open && (
        <ul className="flex flex-col gap-1 border-t border-border bg-bg/95 px-6 py-3 text-sm text-fg md:hidden">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="block py-2 transition-colors hover:text-accent"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={profile.resume}
              download
              className="block py-2 text-accent"
              onClick={() => setOpen(false)}
            >
              Download Resume ↓
            </a>
          </li>
        </ul>
      )}
    </header>
  );
}
