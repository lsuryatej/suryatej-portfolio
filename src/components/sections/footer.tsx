"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { personal } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="py-20">
      <div className="section-divider mb-20" />
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center gap-10 text-center">
          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="mono-tag mb-4 text-[var(--accent-light)]">Let&apos;s connect</p>
            <h2 className="display text-[clamp(2rem,5vw,4rem)] text-[var(--text-primary)]">
              Got something in mind?
            </h2>
          </motion.div>

          <motion.a
            href={`mailto:${personal.email}`}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="group flex items-center gap-2 text-xl text-[var(--text-muted)] transition-colors hover:text-[var(--text-primary)]"
          >
            <Mail size={20} />
            <span className="underline-offset-4 group-hover:underline">{personal.email}</span>
          </motion.a>

          {/* Socials */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex items-center gap-6"
          >
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--text-muted)] transition-colors hover:text-[var(--text-primary)]"
            >
              <Github size={20} />
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--text-muted)] transition-colors hover:text-[var(--text-primary)]"
            >
              <Linkedin size={20} />
            </a>
          </motion.div>

          {/* Bottom */}
          <div className="section-divider w-full" />
          <p className="mono-tag text-[var(--text-faint)]">
            © {new Date().getFullYear()} {personal.name}
          </p>
        </div>
      </div>
    </footer>
  );
}
