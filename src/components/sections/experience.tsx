"use client";

import { motion } from "framer-motion";
import { experience, education, certifications, skills } from "@/lib/data";

const EASE = [0.22, 1, 0.36, 1] as const;

/* Key metrics extracted from experience highlights */
const keyMetrics = [
  { value: "~7%", label: "PRECISION GAIN" },
  { value: "70%", label: "FEWER FAILURES" },
  { value: "4hrs", label: "RUNTIME SAVED" },
  { value: "2×", label: "SCALABILITY" },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24">
      {/* Top rule */}
      <div className="section-rule-strong mb-0" />

      <div className="mx-auto max-w-6xl px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: EASE }}
          className="py-6 mb-8"
        >
          <h2 className="display text-[clamp(2rem,5vw,3rem)] text-[var(--text-primary)]">
            EXPERIENCE
          </h2>
        </motion.div>

        {/* Two-column layout */}
        <div className="grid gap-16 lg:grid-cols-[1fr_1px_1fr]">
          {/* Left column: Work */}
          <div>
            {experience.map((job, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: i * 0.1, ease: EASE }}
                className="mb-12"
              >
                {/* Metric strip */}
                <div className="grid grid-cols-4 gap-4 mb-8 pb-6 border-b border-[var(--border)]">
                  {keyMetrics.map((m) => (
                    <div key={m.label}>
                      <div
                        className="editorial font-semibold leading-none mb-1"
                        style={{
                          fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
                          color: "var(--accent)",
                        }}
                      >
                        {m.value}
                      </div>
                      <div className="data-text text-[var(--text-faint)]">{m.label}</div>
                    </div>
                  ))}
                </div>

                {/* Role header */}
                <div className="mb-4 flex items-start justify-between gap-4">
                  <div>
                    <h3
                      className="editorial font-semibold text-[var(--text-primary)] text-lg leading-snug"
                    >
                      {job.role}
                    </h3>
                    <p className="data-text text-[var(--accent)]">{job.company}</p>
                  </div>
                  <span className="data-text flex-shrink-0 text-[var(--text-faint)]">
                    {job.period}
                  </span>
                </div>

                {/* Description */}
                <p
                  className="text-sm leading-relaxed text-[var(--text-muted)] mb-5"
                  style={{ fontFamily: "var(--font-sans), system-ui, sans-serif" }}
                >
                  {job.description}
                </p>

                {/* Highlights */}
                {job.highlights && (
                  <ul className="mb-5 space-y-2">
                    {job.highlights.map((h, hi) => (
                      <li
                        key={hi}
                        className="flex items-start gap-2 text-sm text-[var(--text-muted)]"
                        style={{ fontFamily: "var(--font-sans), system-ui, sans-serif" }}
                      >
                        <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-[var(--accent)]" />
                        {h}
                      </li>
                    ))}
                  </ul>
                )}

                {/* Skills comma-separated */}
                <p className="data-text text-[var(--text-faint)]">
                  {job.skills.join(", ")}
                </p>
              </motion.div>
            ))}

            {/* Education */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, ease: EASE }}
              className="mb-10"
            >
              <p className="data-text mb-4 text-[var(--text-faint)]">EDUCATION</p>
              {education.map((edu, i) => (
                <div key={i} className="mb-4">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h4
                        className="editorial font-semibold text-[var(--text-primary)]"
                      >
                        {edu.school}
                      </h4>
                      <p
                        className="text-sm text-[var(--text-muted)]"
                        style={{ fontFamily: "var(--font-sans), system-ui, sans-serif" }}
                      >
                        {edu.degree}
                      </p>
                    </div>
                    <span className="data-text flex-shrink-0 text-[var(--text-faint)]">
                      {edu.period}
                    </span>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, ease: EASE }}
            >
              <p className="data-text mb-4 text-[var(--text-faint)]">CERTIFICATIONS</p>
              <div className="space-y-3">
                {certifications.map((cert, i) => (
                  <div key={i}>
                    <h4
                      className="text-sm font-medium text-[var(--text-primary)]"
                      style={{ fontFamily: "var(--font-sans), system-ui, sans-serif" }}
                    >
                      {cert.title}
                    </h4>
                    <p className="data-text text-[var(--text-faint)]">
                      {cert.issuer} · {cert.period}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Vertical divider */}
          <div className="hidden lg:block bg-[var(--border)]" />

          {/* Right column: Stack */}
          <div>
            <p className="data-text mb-8 text-[var(--text-faint)]">STACK</p>
            <div className="space-y-8">
              {Object.entries(skills).map(([category, items], catIndex) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    duration: 0.4,
                    delay: catIndex * 0.07,
                    ease: EASE,
                  }}
                >
                  <p className="display text-[1.2rem] text-[var(--text-primary)] mb-2">
                    {category}
                  </p>
                  <p
                    className="text-sm text-[var(--text-muted)] leading-relaxed"
                    style={{ fontFamily: "var(--font-sans), system-ui, sans-serif" }}
                  >
                    {items.join(", ")}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
