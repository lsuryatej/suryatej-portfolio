"use client";

import { personal } from "@/lib/data";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 pb-16 pt-24">
        <div className="grid gap-16 lg:grid-cols-[3fr_2fr] lg:items-start">
          {/* Left: Display statement */}
          <div className="flex flex-col justify-center">
            <h1
              className="display text-[var(--text-primary)]"
              style={{ fontSize: "clamp(3.5rem, 8vw, 7rem)" }}
            >
              Production ML.
              <br />
              Systems that ship.
            </h1>

            {/* Amber rule */}
            <div
              className="mt-8 mb-6"
              style={{ height: "1px", background: "var(--accent)", width: "100%" }}
            />

            {/* One-liner tagline */}
            <p className="mono-tag text-[var(--text-muted)]">{personal.tagline}</p>

            {/* Plain text links */}
            <div className="mt-10 flex items-center gap-8">
              <a
                href="#projects"
                className="mono-tag text-[var(--text-muted)] transition-colors duration-200 hover:text-[var(--text-primary)]"
              >
                View work ↓
              </a>
              <a
                href="/contact"
                className="mono-tag text-[var(--text-muted)] transition-colors duration-200 hover:text-[var(--text-primary)]"
              >
                Contact →
              </a>
            </div>
          </div>

          {/* Right: Vertical meta stack */}
          <div className="flex flex-col gap-6 lg:pt-3">
            <div>
              <p className="mono-tag text-[var(--accent)] mb-1">Location</p>
              <p className="mono-tag text-[var(--text-muted)]">{personal.location}</p>
            </div>
            <div className="section-rule" />
            <div>
              <p className="mono-tag text-[var(--accent)] mb-1">Role</p>
              <p className="mono-tag text-[var(--text-muted)]">{personal.role}</p>
            </div>
            <div className="section-rule" />
            <div>
              <p className="mono-tag text-[var(--accent)] mb-1">Status</p>
              <p className="mono-tag text-[var(--text-muted)]">Available</p>
            </div>
            <div className="section-rule" />
            <div>
              <p className="mono-tag text-[var(--accent)] mb-1">Current</p>
              <p className="mono-tag text-[var(--text-muted)]">Lloyds Technology Centre</p>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="mono-tag text-[var(--text-faint)]">scroll</span>
          <div style={{ width: "1px", height: "2rem", background: "var(--border)" }} />
        </div>
      </div>
    </section>
  );
}
