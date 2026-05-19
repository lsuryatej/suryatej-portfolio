"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { projects } from "@/lib/data";
import { cn } from "@/lib/utils";

const EASE = [0.22, 1, 0.36, 1] as const;

const typeLabels: Record<string, string> = {
  ml: "ML",
  data: "Data Eng",
  tool: "Tool",
  ai: "AI",
  creative: "Creative",
};

function extractSignal(project: (typeof projects)[0]): string {
  const desc = project.description;
  if (/ROC-AUC/i.test(desc)) {
    const match = desc.match(/ROC-AUC\s+(?:from\s+[\d.]+\s+to\s+)?([\d.]+)/i);
    if (match) return `ROC-AUC ${match[1]}`;
    return "ROC-AUC +14.9%";
  }
  const pctMatch = desc.match(/(\d+)%/);
  if (pctMatch) return `${pctMatch[1]}% gain`;
  const hrMatch = desc.match(/(\d+)\+?\s*hours?/i);
  if (hrMatch) return `${hrMatch[1]}hrs saved`;
  return typeLabels[project.type] ?? project.type;
}

function ProjectRow({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const [expanded, setExpanded] = useState(false);
  const [hovered, setHovered] = useState(false);
  const num = String(index + 1).padStart(2, "0");
  const signal = extractSignal(project);
  const year = "2024";

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.05, ease: EASE }}
    >
      {/* Row */}
      <div
        className={cn(
          "relative cursor-pointer border-b border-[var(--border)] transition-colors duration-200",
          (hovered || expanded) && "bg-[var(--bg-surface)]"
        )}
        onClick={() => setExpanded((e) => !e)}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === "Enter" && setExpanded((prev) => !prev)}
        aria-expanded={expanded}
      >
        {/* Amber left accent bar */}
        <motion.div
          className="absolute left-0 top-0 bottom-0 w-[3px] bg-[var(--accent)]"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: hovered || expanded ? 1 : 0 }}
          transition={{ duration: 0.2, ease: EASE }}
          style={{ originX: 0 }}
        />

        {/* Desktop grid */}
        <div className="hidden md:grid md:grid-cols-[3rem_1fr_7rem_12rem_4rem] items-center gap-4 px-4 py-4 pl-6">
          <span className="mono-tag text-[var(--text-faint)]">{num}</span>
          <span className="display text-[1.1rem] text-[var(--text-primary)] leading-snug">
            {project.title}
          </span>
          <span className="mono-tag text-[var(--text-muted)]">
            {typeLabels[project.type] ?? project.type}
          </span>
          <span
            className={cn(
              "mono-tag",
              /^\d/.test(signal) ? "text-[var(--accent)]" : "text-[var(--text-faint)]"
            )}
          >
            {signal}
          </span>
          <span className="mono-tag text-[var(--text-faint)]">{year}</span>
        </div>

        {/* Mobile layout */}
        <div className="md:hidden flex items-center justify-between px-4 py-4 pl-6">
          <div className="flex items-center gap-3">
            <span className="mono-tag text-[var(--text-faint)]">{num}</span>
            <span className="display text-[1rem] text-[var(--text-primary)]">
              {project.title}
            </span>
          </div>
          <span
            className={cn(
              "mono-tag text-xs",
              /^\d/.test(signal) ? "text-[var(--accent)]" : "text-[var(--text-faint)]"
            )}
          >
            {signal}
          </span>
        </div>
      </div>

      {/* Expanded content */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: EASE }}
            className="overflow-hidden border-b border-[var(--border)] bg-[var(--bg-surface)]"
          >
            <div className="px-6 md:pl-[calc(3rem+1rem+1.5rem)] py-5">
              <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-4 max-w-2xl"
                style={{ fontFamily: "var(--font-sans), system-ui, sans-serif" }}>
                {project.description}
              </p>
              {/* Tags */}
              <div className="flex flex-wrap items-center gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="mono-tag border border-[var(--border)] bg-[var(--bg)] px-2 py-0.5 text-[var(--text-muted)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              {/* Links */}
              <div className="flex items-center gap-6">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="mono-tag flex items-center gap-1.5 text-[var(--accent)] hover:text-[var(--accent-light)] transition-colors duration-200"
                  >
                    <Github size={11} />
                    Source →
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="mono-tag flex items-center gap-1.5 text-[var(--accent)] hover:text-[var(--accent-light)] transition-colors duration-200"
                  >
                    <ExternalLink size={11} />
                    Live →
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-32">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: EASE }}
          className="mb-6 flex items-baseline justify-between"
        >
          <h2 className="display text-[clamp(2.5rem,6vw,4.5rem)] text-[var(--text-primary)]">
            Selected Work
          </h2>
          <span className="mono-tag text-[var(--text-faint)]">
            {projects.length} projects
          </span>
        </motion.div>

        <div className="section-rule-strong mb-0" />

        {/* Column headers — desktop only */}
        <div className="hidden md:grid md:grid-cols-[3rem_1fr_7rem_12rem_4rem] items-center gap-4 px-4 py-2 pl-6 border-b border-[var(--border)]">
          <span className="mono-tag text-[var(--text-faint)]">No.</span>
          <span className="mono-tag text-[var(--text-faint)]">Project</span>
          <span className="mono-tag text-[var(--text-faint)]">Type</span>
          <span className="mono-tag text-[var(--text-faint)]">Signal</span>
          <span className="mono-tag text-[var(--text-faint)]">Year</span>
        </div>

        <div>
          {projects.map((project, i) => (
            <ProjectRow key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
