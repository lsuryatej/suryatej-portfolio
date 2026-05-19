"use client";

import { personal } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="section-rule mb-8" />
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          {/* Links */}
          <div className="flex items-center gap-8">
            <a
              href={`mailto:${personal.email}`}
              className="mono-tag text-[var(--text-faint)] transition-colors duration-200 hover:text-[var(--text-muted)]"
            >
              {personal.email}
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

          {/* Copyright */}
          <p className="mono-tag text-[var(--text-faint)]">
            © {new Date().getFullYear()} {personal.name}
          </p>
        </div>
      </div>
    </footer>
  );
}
