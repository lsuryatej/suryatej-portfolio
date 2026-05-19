"use client";

import { personal } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="py-12">
      <div className="mx-auto max-w-6xl px-6">
        <div className="section-rule mb-8" />
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          {/* Left: name + available */}
          <div className="flex items-center gap-3">
            <span className="display text-[1.4rem] text-[var(--accent)] leading-none">
              Suryatej Lalam
            </span>
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--accent)] opacity-50" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--accent)]" />
            </span>
            <span className="mono-tag text-[var(--text-muted)]">Available</span>
          </div>

          {/* Right: links */}
          <div className="flex items-center gap-6">
            <a
              href={`mailto:${personal.email}`}
              className="mono-tag text-[var(--text-faint)] transition-colors duration-200 hover:text-[var(--text-muted)]"
            >
              Email
            </a>
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="mono-tag text-[var(--text-faint)] transition-colors duration-200 hover:text-[var(--text-muted)]"
            >
              GitHub
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="mono-tag text-[var(--text-faint)] transition-colors duration-200 hover:text-[var(--text-muted)]"
            >
              LinkedIn
            </a>
          </div>
        </div>
        <div className="mt-6 pt-4 border-t border-[var(--border)]">
          <p className="mono-tag text-[var(--text-faint)]">
            © {new Date().getFullYear()} {personal.name}
          </p>
        </div>
      </div>
    </footer>
  );
}
