"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { personal } from "@/lib/data";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function Footer() {
  return (
    <footer className="py-20">
      <div className="section-rule-strong mb-20" />
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center gap-10 text-center">
          {/* Name */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE }}
          >
            <div className="flex items-center justify-center gap-3 mb-2">
              <span className="relative flex h-2 w-2">
                <span
                  className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-60"
                  style={{ background: "var(--signal)" }}
                />
                <span
                  className="relative inline-flex h-2 w-2 rounded-full"
                  style={{ background: "var(--signal)" }}
                />
              </span>
              <span className="mono-tag text-[var(--text-faint)]">Available for work</span>
            </div>
            <h2
              className="display text-[var(--text-primary)]"
              style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}
            >
              Got something in mind?
            </h2>
          </motion.div>

          <motion.a
            href={`mailto:${personal.email}`}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2, ease: EASE }}
            className="group flex items-center gap-2 text-xl text-[var(--text-muted)] transition-colors hover:text-[var(--accent)]"
            style={{ fontFamily: "var(--font-sans), system-ui, sans-serif" }}
          >
            <Mail size={20} />
            <span className="underline-offset-4 group-hover:underline">{personal.email}</span>
          </motion.a>

          {/* Socials */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3, ease: EASE }}
            className="flex items-center gap-6"
          >
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--text-faint)] transition-colors hover:text-[var(--accent)]"
            >
              <Github size={20} />
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--text-faint)] transition-colors hover:text-[var(--accent)]"
            >
              <Linkedin size={20} />
            </a>
          </motion.div>

          {/* Bottom */}
          <div className="section-rule w-full" />
          <p className="mono-tag text-[var(--text-faint)]">
            © {new Date().getFullYear()} {personal.name}
          </p>
        </div>
      </div>
    </footer>
  );
}
