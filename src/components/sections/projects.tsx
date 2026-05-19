"use client";

import { useState } from "react";
import { motion } from "framer-motion";
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
  const [hovered, setHovered] = useState(false);
  const num = String(index + 1).padStart(2, "0");
  const signal = extractSignal(project);
  const typeLabel = typeLabels[project.type] ?? project.type;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: EASE }}
      className="relative border-b border-[var(--border)]"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Amber left accent bar */}
      <motion.div
        className="absolute left-0 top-0 bottom-0 w-[3px]"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: hovered ? 1 : 0 }}
        transition={{ duration: 0.25, ease: EASE }}
        style={{ originY: 0, background: "var(--accent)" }}
      />

      <div
        className={cn(
          "px-6 py-8 pl-8 transition-colors duration-300",
          hovered && "bg-[var(--bg-surface)]"
        )}
      >
        <div className="grid grid-cols-[4rem_1fr] gap-6 md:grid-cols-[5rem_1fr_auto] md:items-start">
          {/* Large number */}
          <div
            className="display leading-none select-none"
            style={{
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              color: hovered ? "var(--accent)" : "var(--border)",
              transition: "color 0.25s ease",
            }}
          >
            {num}
          </div>

          {/* Title + meta */}
          <div>
            <h3
              className="editorial text-[var(--text-primary)] mb-2"
              style={{ fontSize: "clamp(1.2rem, 2.5vw, 1.6rem)" }}
            >
              {project.title}
            </h3>

            {/* Description — visible on hover */}
            <motion.div
              initial={false}
              animate={{
                opacity: hovered ? 1 : 0,
                height: hovered ? "auto" : 0,
              }}
              transition={{ duration: 0.3, ease: EASE }}
              className="overflow-hidden"
            >
              <p
                className="text-sm text-[var(--text-muted)] leading-relaxed mb-3 max-w-2xl"
                style={{ fontFamily: "var(--font-sans), system-ui, sans-serif" }}
              >
                {project.description}
              </p>
            </motion.div>

            {/* Tags — reveal on hover */}
            <motion.div
              initial={false}
              animate={{ opacity: hovered ? 1 : 0, height: hovered ? "auto" : 0 }}
              transition={{ duration: 0.25, delay: hovered ? 0.05 : 0, ease: EASE }}
              className="overflow-hidden"
            >
              <div className="flex flex-wrap items-center gap-2 mb-3">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="mono-tag border border-[var(--border)] bg-[var(--bg)] px-2 py-0.5 text-[var(--text-faint)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Links — reveal on hover */}
            <motion.div
              initial={false}
              animate={{ opacity: hovered ? 1 : 0, height: hovered ? "auto" : 0 }}
              transition={{ duration: 0.25, delay: hovered ? 0.08 : 0, ease: EASE }}
              className="overflow-hidden"
            >
              <div className="flex items-center gap-6">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
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
                    className="mono-tag flex items-center gap-1.5 text-[var(--accent)] hover:text-[var(--accent-light)] transition-colors duration-200"
                  >
                    <ExternalLink size={11} />
                    Live →
                  </a>
                )}
              </div>
            </motion.div>
          </div>

          {/* Right meta — type + signal */}
          <div className="hidden md:flex flex-col items-end gap-2 pt-1">
            <span className="mono-tag text-[var(--text-faint)]">{typeLabel}</span>
            <span
              className="mono-tag"
              style={{
                color: /^\d/.test(signal) ? "var(--signal)" : "var(--text-faint)",
              }}
            >
              {signal}
            </span>
          </div>
        </div>
      </div>
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
          <h2
            className="display text-[var(--text-primary)]"
            style={{ fontSize: "clamp(2.5rem, 7vw, 5rem)" }}
          >
            Selected Work
          </h2>
          <span className="mono-tag text-[var(--text-faint)]">
            {projects.length} projects
          </span>
        </motion.div>

        <div className="section-rule-strong mb-0" />

        <div>
          {projects.map((project, i) => (
            <ProjectRow key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
