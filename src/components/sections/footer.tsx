"use client";

import { personal } from "@/lib/data";

export default function Footer() {
  return (
    <footer>
      {/* 2px top rule */}
      <div className="section-rule-strong" />

      <div className="mx-auto max-w-6xl px-6 py-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          {/* Left: name + available */}
          <div className="flex items-center gap-3">
            <span className="display text-[1.6rem] text-[var(--accent)] leading-none">
              SURYATEJ LALAM
            </span>
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--accent)] opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--accent)]" />
            </span>
            <span className="data-text text-[var(--text-muted)]">AVAILABLE</span>
          </div>

          {/* Right: links */}
          <div className="flex items-center gap-6">
            <a
              href={`mailto:${personal.email}`}
              className="data-text text-[var(--text-muted)] transition-colors duration-150 hover:text-[var(--accent)]"
            >
              EMAIL
            </a>
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="data-text text-[var(--text-muted)] transition-colors duration-150 hover:text-[var(--accent)]"
            >
              GITHUB
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="data-text text-[var(--text-muted)] transition-colors duration-150 hover:text-[var(--accent)]"
            >
              LINKEDIN
            </a>
          </div>
        </div>

        {/* Bottom line */}
        <div className="mt-6 pt-4 border-t border-[var(--border)]">
          <p className="data-text text-[var(--text-faint)]">
            © {new Date().getFullYear()} {personal.name}
          </p>
        </div>
      </div>
    </footer>
  );
}
