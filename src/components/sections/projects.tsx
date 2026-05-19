"use client";

import { useState } from "react";
import { motion } from "framer-motion";
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

function ProjectRow({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const [hovered, setHovered] = useState(false);
  const num = String(index + 1).padStart(2, "0");

  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: EASE }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative"
    >
      {/* Amber left accent bar */}
      <motion.div
        className="absolute left-0 top-4 bottom-4 w-[3px]"
        style={{ background: "var(--accent)", originY: 0.5 }}
        initial={{ scaleY: 0, opacity: 0 }}
        animate={hovered ? { scaleY: 1, opacity: 1 } : { scaleY: 0, opacity: 0 }}
        transition={{ duration: 0.3, ease: EASE }}
      />

      {/* Row content */}
      <div
        className="relative pl-6 pr-2 py-6 transition-colors duration-200"
        style={{ backgroundColor: hovered ? "var(--bg-surface)" : "transparent" }}
      >
        <div className="flex items-start gap-5">
          {/* Large numeral */}
          <span
            className="display hidden flex-shrink-0 leading-none text-[var(--text-faint)] sm:block sm:w-16 sm:pt-1"
            style={{ fontSize: "5rem" }}
          >
            {num}
          </span>

          {/* Content */}
          <div className="flex-1 min-w-0">
            {/* Title + type tag */}
            <div className="mb-2 flex items-start justify-between gap-4">
              <h3 className="text-lg font-semibold leading-snug text-[var(--text-primary)]" style={{ fontFamily: "var(--font-sans)" }}>
                {project.title}
              </h3>
              <span
                className={cn(
                  "mono-tag flex-shrink-0 pt-0.5 transition-colors duration-200",
                  hovered ? "text-[var(--accent)]" : "text-[var(--text-faint)]"
                )}
              >
                {typeLabels[project.type] ?? project.type}
              </span>
            </div>

            {/* Description */}
            <p className="mb-3 max-w-2xl text-sm leading-relaxed text-[var(--text-muted)]">
              {project.description}
            </p>

            {/* Tags + links — hover on desktop, always visible on mobile */}
            <div
              className={cn(
                "flex flex-wrap items-center gap-x-3 gap-y-2 transition-all duration-200",
                "sm:max-h-0 sm:opacity-0 sm:overflow-hidden",
                hovered && "sm:max-h-20 sm:opacity-100"
              )}
            >
              <span className="mono-tag text-[var(--text-faint)]">
                {project.tags.join(" · ")}
              </span>
              <div className="ml-auto flex items-center gap-4">
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mono-tag text-[var(--accent)] transition-colors duration-200 hover:text-[var(--accent-light)]"
                  >
                    Live →
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mono-tag text-[var(--accent)] transition-colors duration-200 hover:text-[var(--accent-light)]"
                  >
                    Source →
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="section-rule" />
    </motion.article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-32">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section header */}
        <div className="mb-4">
          <p className="mono-tag text-[var(--accent)]">Selected Work</p>
        </div>
        <div className="section-rule mb-0" />

        {/* Project list */}
        <div>
          {projects.map((project, i) => (
            <ProjectRow key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
