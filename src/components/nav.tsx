"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const sections = [
  { id: "projects", label: "SELECTED WORK" },
  { id: "about", label: "ABOUT" },
  { id: "experience", label: "EXPERIENCE" },
];

const links = [
  { href: "#projects", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const [activeSection, setActiveSection] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.3 }
    );
    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (mobileOpen) setMobileOpen(false);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeSection]);

  const activeSectionLabel =
    sections.find((s) => s.id === activeSection)?.label ?? "";

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-[var(--bg)] border-b-2 border-[var(--text-primary)]">
        <nav className="flex h-10 items-center justify-between px-6">
          {/* Left: monogram */}
          <Link
            href="/"
            className="display text-[1.4rem] text-[var(--text-primary)] leading-none tracking-widest hover:text-[var(--accent)] transition-colors duration-150"
          >
            SL
          </Link>

          {/* Center: active section label — desktop only */}
          <div className="hidden md:flex absolute left-1/2 -translate-x-1/2">
            <span
              className={cn(
                "display text-[0.85rem] tracking-widest transition-colors duration-150",
                activeSection ? "text-[var(--accent)]" : "text-[var(--text-faint)]"
              )}
            >
              {activeSectionLabel || "SIGNAL / NOISE"}
            </span>
          </div>

          {/* Right: available + year */}
          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--accent)] opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--accent)]" />
              </span>
              <span className="data-text text-[var(--text-muted)]">AVAILABLE</span>
            </div>
            <span className="data-text text-[var(--text-faint)]">2025</span>
          </div>

          {/* Mobile: hamburger */}
          <button
            onClick={() => setMobileOpen((o) => !o)}
            className="flex items-center justify-center text-[var(--text-muted)] transition-colors hover:text-[var(--text-primary)] md:hidden"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </nav>

        {/* Mobile dropdown */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden border-t border-[var(--border)] md:hidden bg-[var(--bg)]"
            >
              <ul className="flex flex-col px-6 py-4 gap-1">
                {links.map(({ href, label }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      onClick={() => setMobileOpen(false)}
                      className="data-text block py-3 text-[var(--text-muted)] transition-colors hover:text-[var(--accent)]"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
