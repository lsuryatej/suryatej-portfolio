"use client";

import { motion } from "framer-motion";
import { experience, education, certifications, skills } from "@/lib/data";

const EASE = [0.22, 1, 0.36, 1] as const;

const keyMetrics = [
  { value: "~7%", label: "Precision gain" },
  { value: "70%", label: "Fewer failures" },
  { value: "4 hrs", label: "Runtime saved" },
  { value: "2×", label: "Scalability" },
];

export default function Experience() {
  return (
    <section id="experience" className="py-32">
      <div className="section-rule-strong" />
      <div className="mx-auto max-w-6xl px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: EASE }}
          className="py-8 mb-4"
        >
          <p className="mono-tag text-[var(--accent)] mb-2">Experience & Skills</p>
          <div className="section-rule" />
        </motion.div>

        <div className="grid gap-16 lg:grid-cols-[1fr_1px_1fr]">
          {/* Left column */}
          <div>
            <p className="mono-tag mb-8 text-[var(--text-faint)]">Work</p>

            {experience.map((job, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: EASE }}
                className="mb-12"
              >
                {/* Metric strip */}
                <div className="grid grid-cols-4 gap-4 mb-8 pb-6 border-b border-[var(--border)]">
                  {keyMetrics.map((m) => (
                    <div key={m.label}>
                      <div
                        className="display leading-none mb-1"
                        style={{
                          fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
                          color: "var(--accent)",
                        }}
                      >
                        {m.value}
                      </div>
                      <div className="mono-tag text-[var(--text-faint)]">{m.label}</div>
                    </div>
                  ))}
                </div>

                {/* Role header */}
                <div className="mb-3 flex items-start justify-between gap-4">
                  <div>
                    <h3
                      className="font-semibold text-[var(--text-primary)]"
                      style={{ fontFamily: "var(--font-sans), system-ui, sans-serif" }}
                    >
                      {job.role}
                    </h3>
                    <p className="mono-tag text-[var(--accent)] mt-0.5">{job.company}</p>
                  </div>
                  <span className="mono-tag flex-shrink-0 text-[var(--text-faint)]">
                    {job.period}
                  </span>
                </div>

                {/* Description */}
                <p className="mb-4 text-sm leading-relaxed text-[var(--text-muted)]"
                  style={{ fontFamily: "var(--font-sans), system-ui, sans-serif" }}>
                  {job.description}
                </p>

                {/* Highlights with amber square bullets */}
                {job.highlights && (
                  <ul className="mb-4 space-y-2">
                    {job.highlights.map((h, hi) => (
                      <li key={hi} className="flex items-start gap-2.5 text-sm text-[var(--text-muted)]"
                        style={{ fontFamily: "var(--font-sans), system-ui, sans-serif" }}>
                        <span
                          className="mt-1.5 flex-shrink-0"
                          style={{ width: "5px", height: "5px", background: "var(--accent)", display: "inline-block" }}
                        />
                        {h}
                      </li>
                    ))}
                  </ul>
                )}

                <p className="mono-tag text-[var(--text-faint)]">
                  {job.skills.join(", ")}
                </p>
              </motion.div>
            ))}

            <div className="section-rule mb-10" />

            {/* Education */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, ease: EASE }}
              className="mb-10"
            >
              <p className="mono-tag mb-6 text-[var(--text-faint)]">Education</p>
              {education.map((edu, i) => (
                <div key={i}>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h4 className="font-medium text-[var(--text-primary)]"
                        style={{ fontFamily: "var(--font-sans), system-ui, sans-serif" }}>
                        {edu.school}
                      </h4>
                      <p className="text-sm text-[var(--text-muted)] mt-0.5">{edu.degree}</p>
                    </div>
                    <span className="mono-tag flex-shrink-0 text-[var(--text-faint)]">{edu.period}</span>
                  </div>
                </div>
              ))}
            </motion.div>

            <div className="section-rule mb-10" />

            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, ease: EASE }}
            >
              <p className="mono-tag mb-6 text-[var(--text-faint)]">Certifications</p>
              <div className="space-y-5">
                {certifications.map((cert, i) => (
                  <div key={i}>
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h4 className="font-medium text-[var(--text-primary)]"
                          style={{ fontFamily: "var(--font-sans), system-ui, sans-serif" }}>
                          {cert.title}
                        </h4>
                        <p className="mono-tag text-[var(--text-faint)] mt-0.5">{cert.issuer}</p>
                      </div>
                      <span className="mono-tag flex-shrink-0 text-[var(--text-faint)]">{cert.period}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Vertical divider */}
          <div className="hidden lg:block bg-[var(--border)]" />

          {/* Right column: Stack */}
          <div>
            <p className="mono-tag mb-8 text-[var(--text-faint)]">Stack</p>
            <div className="space-y-8">
              {Object.entries(skills).map(([category, items], catIndex) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: catIndex * 0.08, ease: EASE }}
                >
                  <p className="mono-tag mb-2 text-[var(--accent)]">{category}</p>
                  <p className="text-sm leading-relaxed text-[var(--text-muted)]"
                    style={{ fontFamily: "var(--font-sans), system-ui, sans-serif" }}>
                    {items.join(", ")}
                  </p>
                  {catIndex < Object.entries(skills).length - 1 && (
                    <div className="section-rule mt-6" />
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
