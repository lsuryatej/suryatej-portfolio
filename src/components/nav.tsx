"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#hero", label: "Intro" },
  { href: "#projects", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Stack" },
];

export default function TopNav() {
  const [mobileOpen, setMobileOpen] = useState(false);

  // Close on scroll
  useEffect(() => {
    const onScroll = () => {
      if (mobileOpen) setMobileOpen(false);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [mobileOpen]);

  return (
    <header
      className="md:hidden fixed top-0 left-0 right-0 z-50"
      style={{
        background: "var(--bg-surface)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <nav className="flex h-12 items-center justify-between px-5">
        {/* Monogram */}
        <a href="#hero">
          <span
            className="display"
            style={{ fontSize: "1.25rem", color: "var(--text-primary)" }}
          >
            SL
          </span>
        </a>

        {/* Hamburger */}
        <button
          onClick={() => setMobileOpen((o) => !o)}
          className="flex items-center justify-center"
          style={{
            color: "var(--text-muted)",
            transition: "color 200ms ease-out",
          }}
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
            style={{
              borderTop: "1px solid var(--border)",
              overflow: "hidden",
            }}
          >
            <ul className="flex flex-col px-5 py-3 gap-1">
              {links.map(({ href, label }) => (
                <li key={href}>
                  <a
                    href={href}
                    onClick={() => setMobileOpen(false)}
                    className="mono-tag block py-2.5"
                    style={{
                      color: "var(--text-muted)",
                      transition: "color 200ms ease-out",
                    }}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
