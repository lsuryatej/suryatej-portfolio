"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ArrowRight, Github, ExternalLink } from "lucide-react";
import { projects } from "@/lib/data";
import { cn } from "@/lib/utils";

/* ─── Type accent colors ────────────────────────────────────── */
const typeAccent: Record<string, { text: string; bg: string; border: string; glow: string }> = {
  ml: {
    text: "text-violet-400",
    bg: "bg-violet-400/5",
    border: "bg-violet-500",
    glow: "rgba(139,92,246,0.06)",
  },
  data: {
    text: "text-sky-400",
    bg: "bg-sky-400/5",
    border: "bg-sky-500",
    glow: "rgba(56,189,248,0.06)",
  },
  tool: {
    text: "text-emerald-400",
    bg: "bg-emerald-400/5",
    border: "bg-emerald-500",
    glow: "rgba(52,211,153,0.06)",
  },
  ai: {
    text: "text-amber-400",
    bg: "bg-amber-400/5",
    border: "bg-amber-500",
    glow: "rgba(251,191,36,0.06)",
  },
  creative: {
    text: "text-rose-400",
    bg: "bg-rose-400/5",
    border: "bg-rose-500",
    glow: "rgba(251,113,133,0.06)",
  },
};

const typeLabels: Record<string, string> = {
  ml: "ML",
  data: "Data Eng",
  tool: "Tool",
  ai: "AI",
  creative: "Creative",
};

/* ─── Project Row ───────────────────────────────────────────── */
function ProjectRow({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const [hovered, setHovered] = useState(false);
  const accent = typeAccent[project.type] ?? typeAccent.ml;
  const num = String(index + 1).padStart(2, "0");

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative"
    >
      {/* Accent left bar — visible on hover */}
      <motion.div
        className={cn("absolute left-0 top-4 bottom-4 w-[3px] rounded-full", accent.border)}
        initial={{ scaleY: 0, opacity: 0 }}
        animate={hovered ? { scaleY: 1, opacity: 1 } : { scaleY: 0, opacity: 0 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        style={{ originY: 0.5 }}
      />

      {/* Row content */}
      <div
        className="relative overflow-hidden rounded-xl px-5 py-6 transition-colors duration-300"
        style={{
          backgroundColor: hovered ? `color-mix(in srgb, ${accent.glow}, var(--bg))` : "transparent",
        }}
      >
        {/* Background glow */}
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="pointer-events-none absolute inset-0 rounded-xl"
              style={{
                background: `radial-gradient(ellipse at 20% 50%, ${accent.glow} 0%, transparent 70%)`,
              }}
            />
          )}
        </AnimatePresence>

        <div className="relative">
          {/* Main row: number + title + type + arrow */}
          <div className="flex items-start gap-5">
            {/* Number */}
            <span className="display hidden text-3xl text-[var(--text-faint)] transition-colors duration-300 group-hover:text-[var(--border)] sm:block sm:w-12 sm:flex-shrink-0 sm:pt-0.5">
              {num}
            </span>

            {/* Content */}
            <div className="flex-1 min-w-0">
              {/* Title row */}
              <div className="mb-2 flex items-start justify-between gap-4">
                <h3 className="text-lg font-semibold leading-snug text-[var(--text-primary)] transition-colors group-hover:text-white">
                  {project.title}
                </h3>
                <div className="flex items-center gap-3 flex-shrink-0 pt-0.5">
                  <span
                    className={cn(
                      "mono-tag rounded-md px-2 py-0.5 text-[0.65rem]",
                      accent.text,
                      hovered ? "opacity-100" : "opacity-70"
                    )}
                  >
                    {typeLabels[project.type] ?? project.type}
                  </span>
                  <motion.div
                    animate={{ rotate: hovered ? 45 : 0 }}
                    transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <ArrowRight
                      size={16}
                      className={cn(
                        "transition-colors duration-300",
                        hovered ? "text-[var(--text-primary)]" : "text-[var(--text-faint)]"
                      )}
                    />
                  </motion.div>
                </div>
              </div>

              {/* Description — always visible */}
              <p className="mb-3 max-w-2xl text-sm leading-relaxed text-[var(--text-muted)]">
                {project.description}
              </p>

              {/* Tags + GitHub — slide in on hover (desktop), always visible (mobile) */}
              <div
                className={cn(
                  "flex flex-wrap items-center gap-2 transition-all duration-300",
                  "sm:max-h-0 sm:opacity-0 sm:overflow-hidden",
                  hovered && "sm:max-h-20 sm:opacity-100"
                )}
              >
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="mono-tag rounded-md border border-[var(--border)] bg-[var(--bg)] px-2 py-0.5 text-[var(--text-muted)]"
                  >
                    {tag}
                  </span>
                ))}
                <div className="ml-auto flex items-center gap-2">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        "flex items-center gap-1.5 rounded-md px-2 py-0.5 text-xs transition-colors",
                        accent.text,
                        "hover:underline underline-offset-2"
                      )}
                    >
                      <ExternalLink size={12} />
                      <span>Live</span>
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        "flex items-center gap-1.5 rounded-md px-2 py-0.5 text-xs transition-colors",
                        accent.text,
                        "hover:underline underline-offset-2"
                      )}
                    >
                      <Github size={12} />
                      <span>Source</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="section-divider mt-1" />
    </motion.article>
  );
}

/* ─── Projects Section ──────────────────────────────────────── */
export default function Projects() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-32">
      <div className="mx-auto max-w-6xl px-6">
        {/* Heading */}
        <div ref={ref} className="mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="mono-tag mb-3 text-[var(--accent-light)]"
          >
            Selected Work
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="display text-[clamp(2.5rem,6vw,5rem)] text-[var(--text-primary)]"
          >
            Things I&apos;ve built.
          </motion.h2>
        </div>

        {/* Project rows */}
        <div>
          {projects.map((project, i) => (
            <ProjectRow key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
