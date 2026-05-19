"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { projects } from "@/lib/data";

const typeLabels: Record<string, string> = {
  ml: "ML",
  data: "Data Eng",
  tool: "Tool",
  ai: "AI",
  creative: "Creative",
};

const EASE = [0.22, 1, 0.36, 1] as const;

function ProjectItem({ project }: { project: (typeof projects)[0] }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, ease: EASE }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ paddingTop: "2.5rem", paddingBottom: "2.5rem" }}
    >
      {/* Title row */}
      <div className="flex items-baseline justify-between gap-4 mb-3">
        <h3
          className="display"
          style={{
            fontSize: "1.4rem",
            color: hovered ? "var(--accent-light)" : "var(--text-primary)",
            transition: "color 200ms ease-out",
          }}
        >
          {project.title}
        </h3>
        <span
          className="mono-tag flex-shrink-0"
          style={{ color: "var(--accent)" }}
        >
          {typeLabels[project.type] ?? project.type}
        </span>
      </div>

      {/* Description */}
      <p
        style={{
          fontFamily: "var(--font-sans), system-ui, sans-serif",
          fontSize: "0.925rem",
          lineHeight: 1.75,
          color: "var(--text-muted)",
          maxWidth: "38rem",
          marginBottom: "1rem",
        }}
      >
        {project.description}
      </p>

      {/* Tags */}
      <p className="mono-tag mb-3" style={{ color: "var(--text-faint)" }}>
        {project.tags.join("  ·  ")}
      </p>

      {/* Links */}
      {(project.github || project.live) && (
        <div className="flex items-center gap-5">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="mono-tag"
              style={{
                color: "var(--text-faint)",
                transition: "color 200ms ease-out",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.color = "var(--accent)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.color = "var(--text-faint)")
              }
            >
              → Source
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="mono-tag"
              style={{
                color: "var(--text-faint)",
                transition: "color 200ms ease-out",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.color = "var(--accent)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.color = "var(--text-faint)")
              }
            >
              → Live
            </a>
          )}
        </div>
      )}
    </motion.article>
  );
}

export default function Projects() {
  return (
    <section id="projects" style={{ paddingTop: "5rem", paddingBottom: "5rem", paddingLeft: "3rem", paddingRight: "3rem" }}>
      {/* Section label */}
      <div className="flex items-center gap-4 mb-8">
        <span className="mono-tag" style={{ color: "var(--accent)" }}>
          Work
        </span>
        <div className="section-rule flex-1" />
      </div>

      {/* Project list */}
      <div>
        {projects.map((project) => (
          <ProjectItem key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
