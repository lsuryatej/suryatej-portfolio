"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { projects } from "@/lib/data";
import { cn } from "@/lib/utils";

const EASE = [0.22, 1, 0.36, 1] as const;

const typeLabels: Record<string, string> = {
  ml: "ML",
  data: "DATA ENG",
  tool: "TOOL",
  ai: "AI",
  creative: "CREATIVE",
};

/* Extract a key metric signal from a project description */
function extractSignal(project: (typeof projects)[0]): string {
  const desc = project.description;
  // ROC-AUC
  if (/ROC-AUC/i.test(desc)) {
    const match = desc.match(/ROC-AUC\s+(?:from\s+[\d.]+\s+to\s+)?([\d.]+)/i);
    if (match) return `ROC-AUC ${match[1]}`;
    return "ROC-AUC +14.9%";
  }
  // percentages
  const pctMatch = desc.match(/(\d+)%/);
  if (pctMatch) return `${pctMatch[1]}% GAIN`;
  // hours
  const hrMatch = desc.match(/(\d+)\+?\s*hours?/i);
  if (hrMatch) return `${hrMatch[1]}HRS SAVED`;
  // fallback to type in red
  return typeLabels[project.type] ?? project.type.toUpperCase();
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
  const year = "2024"; // all projects are recent

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay: index * 0.05, ease: EASE }}
    >
      {/* Row */}
      <div
        className={cn(
          "relative cursor-pointer border-b border-[var(--border)] transition-colors duration-150",
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
        {/* Red left border on hover */}
        <div
          className={cn(
            "absolute left-0 top-0 bottom-0 w-[3px] bg-[var(--accent)] transition-transform duration-150 origin-left",
            hovered || expanded ? "scale-x-100" : "scale-x-0"
          )}
        />

        {/* Desktop grid layout */}
        <div className="hidden md:grid md:grid-cols-[3rem_1fr_7rem_12rem_4rem] items-center gap-4 px-4 py-4 pl-6">
          <span className="data-text text-[var(--text-faint)]">{num}</span>
          <span className="editorial font-medium text-[var(--text-primary)] text-base leading-snug">
            {project.title}
          </span>
          <span className="data-text text-[var(--text-muted)]">
            {typeLabels[project.type] ?? project.type.toUpperCase()}
          </span>
          <span
            className={cn(
              "data-text",
              /^\d/.test(signal) ? "text-[var(--accent)]" : "text-[var(--text-faint)]"
            )}
          >
            {signal}
          </span>
          <span className="data-text text-[var(--text-faint)]">{year}</span>
        </div>

        {/* Mobile layout */}
        <div className="md:hidden flex items-center justify-between px-4 py-4 pl-6">
          <div className="flex items-center gap-3">
            <span className="data-text text-[var(--text-faint)]">{num}</span>
            <span className="editorial font-medium text-[var(--text-primary)] text-sm">
              {project.title}
            </span>
          </div>
          <span
            className={cn(
              "data-text text-xs",
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
                    className="data-text border border-[var(--border)] bg-[var(--bg)] px-2 py-0.5 text-[var(--text-muted)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              {/* Links */}
              <div className="flex items-center gap-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="data-text flex items-center gap-1.5 text-[var(--accent)] hover:text-[var(--accent-light)] transition-colors duration-150"
                  >
                    <Github size={12} />
                    GitHub
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="data-text flex items-center gap-1.5 text-[var(--accent)] hover:text-[var(--accent-light)] transition-colors duration-150"
                  >
                    <ExternalLink size={12} />
                    Live
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
    <section id="projects" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: EASE }}
          className="mb-6 flex items-baseline justify-between"
        >
          <h2 className="display text-[clamp(2rem,5vw,3rem)] text-[var(--text-primary)]">
            SELECTED WORK
          </h2>
          <span className="data-text text-[var(--text-faint)]">
            [{projects.length} projects]
          </span>
        </motion.div>

        {/* Section rule */}
        <div className="section-rule-strong mb-0" />

        {/* Column headers — desktop only */}
        <div className="hidden md:grid md:grid-cols-[3rem_1fr_7rem_12rem_4rem] items-center gap-4 px-4 py-2 pl-6 border-b border-[var(--border)]">
          <span className="data-text text-[var(--text-faint)]">NO.</span>
          <span className="data-text text-[var(--text-faint)]">PROJECT</span>
          <span className="data-text text-[var(--text-faint)]">TYPE</span>
          <span className="data-text text-[var(--text-faint)]">SIGNAL</span>
          <span className="data-text text-[var(--text-faint)]">YEAR</span>
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
