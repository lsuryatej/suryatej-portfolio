"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Github, Linkedin } from "lucide-react";
import { personal } from "@/lib/data";
import { cn } from "@/lib/utils";

/* ─── Magnetic button ─────────────────────────────────────────── */
function MagneticButton({
  children,
  href,
  className,
  external,
}: {
  children: React.ReactNode;
  href: string;
  className?: string;
  external?: boolean;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 300, damping: 25 });
  const sy = useSpring(y, { stiffness: 300, damping: 25 });

  const onMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    x.set((e.clientX - cx) * 0.3);
    y.set((e.clientY - cy) * 0.3);
  };

  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      ref={ref}
      href={href}
      style={{ x: sx, y: sy }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={cn("inline-flex select-none", className)}
      whileTap={{ scale: 0.97 }}
    >
      {children}
    </motion.a>
  );
}

/* ─── Animated word ──────────────────────────────────────────── */
function AnimWord({ word, delay }: { word: string; delay: number }) {
  return (
    <motion.span
      className="inline-block"
      initial={{ y: 60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {word}
    </motion.span>
  );
}

export default function Hero() {
  const nameWords = personal.name.split(" ");

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Grid bg */}
      <div className="grid-bg absolute inset-0 opacity-40" />

      {/* Violet glow blob */}
      <div
        className="pointer-events-none absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full"
        style={{
          background:
            "radial-gradient(circle at center, rgba(124,58,237,0.12) 0%, transparent 70%)",
        }}
      />

      {/* Content */}
      <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col justify-end px-6 pb-16 pt-24 md:pb-20 md:pt-32">
        {/* Role tag */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-8 flex items-center gap-3"
        >
          <span className="mono-tag text-[var(--accent-light)]">[ {personal.role} ]</span>
          <span className="mono-tag text-[var(--text-muted)]">·</span>
          <span className="mono-tag text-[var(--text-muted)]">{personal.location}</span>
        </motion.div>

        {/* Name */}
        <h1 className="display mb-6 text-[clamp(4rem,12vw,11rem)] leading-none text-[var(--text-primary)]">
          {nameWords.map((word, i) => (
            <span key={i} className="mr-[0.15em] inline-block overflow-hidden pb-[0.15em]">
              <AnimWord word={word} delay={0.2 + i * 0.12} />
            </span>
          ))}
        </h1>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="section-divider mb-8 origin-left"
        />

        {/* Bottom row */}
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="max-w-sm text-lg text-[var(--text-muted)] leading-relaxed"
          >
            {personal.tagline}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.75 }}
            className="flex flex-wrap items-center gap-4"
          >
            <MagneticButton
              href="#projects"
              className="group items-center gap-2 rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-medium text-white transition-all hover:bg-[var(--accent-light)]"
            >
              View Work
              <ArrowRight
                size={14}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </MagneticButton>

            <MagneticButton
              href="/contact"
              className="items-center rounded-full border border-[var(--border)] px-6 py-3 text-sm font-medium text-[var(--text-muted)] transition-all hover:border-[var(--text-muted)] hover:text-[var(--text-primary)]"
            >
              Say hello
            </MagneticButton>

            {/* Social links */}
            <div className="flex items-center gap-3">
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--text-muted)] transition-colors hover:text-[var(--text-primary)]"
              >
                <Github size={18} />
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--text-muted)] transition-colors hover:text-[var(--text-primary)]"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="mono-tag flex flex-col items-center gap-2 text-[var(--text-faint)]"
          >
            <span>scroll</span>
            <div className="h-8 w-px bg-gradient-to-b from-[var(--border)] to-transparent" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
