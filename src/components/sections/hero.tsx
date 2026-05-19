"use client";

import { motion } from "framer-motion";
import { personal } from "@/lib/data";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden flex flex-col justify-between pt-10">
      {/* Texture strip: massive Bebas Neue watermark */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-10 overflow-hidden leading-none select-none"
      >
        <p
          className="display whitespace-nowrap text-[var(--text-primary)]"
          style={{
            fontSize: "clamp(5rem, 12vw, 10rem)",
            opacity: 0.06,
            letterSpacing: "0.04em",
          }}
        >
          ML ENGINEER · GCP · FRAUD MODELS · ETL PIPELINES · VERTEX AI · BIGQUERY · LIGHTGBM
        </p>
      </div>

      {/* Foreground content */}
      <div className="relative mx-auto w-full max-w-6xl px-6 flex flex-col justify-between min-h-[calc(100vh-2.5rem)]">
        {/* Top: name + tagline + data points */}
        <div className="pt-16 md:pt-24">
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: EASE }}
            className="editorial text-[2rem] font-normal italic text-[var(--text-primary)] leading-snug mb-3"
          >
            {personal.name}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.08, ease: EASE }}
            className="text-base text-[var(--text-muted)] mb-8 max-w-md leading-relaxed"
            style={{ fontFamily: "var(--font-sans), system-ui, sans-serif" }}
          >
            Production ML systems. Fraud detection, ETL at scale, GCP.
          </motion.p>

          {/* Thin rule */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.16, ease: EASE }}
            className="section-rule mb-6 origin-left"
          />

          {/* Data points */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.22, ease: EASE }}
            className="flex flex-col gap-2"
          >
            <div className="data-text text-[var(--text-faint)] flex items-center gap-3">
              <span className="text-[var(--text-muted)]">LOCATION</span>
              <span className="text-[var(--border-strong)]">—</span>
              <span className="text-[var(--text-muted)]">{personal.location}</span>
            </div>
            <div className="data-text flex items-center gap-3">
              <div className="flex items-center gap-2">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--accent)] opacity-60" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
                </span>
                <span className="text-[var(--text-muted)]">STATUS</span>
              </div>
              <span className="text-[var(--border-strong)]">—</span>
              <span className="text-[var(--accent)]">Available for new roles</span>
            </div>
          </motion.div>
        </div>

        {/* Bottom: scroll link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.5, ease: EASE }}
          className="pb-10"
        >
          <a
            href="#projects"
            className="data-text text-[var(--accent)] transition-colors duration-150 hover:text-[var(--accent-light)]"
          >
            Scroll to work ↓
          </a>
        </motion.div>
      </div>
    </section>
  );
}
