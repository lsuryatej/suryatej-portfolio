"use client";

import { motion } from "framer-motion";
import { experience, education, certifications, skills } from "@/lib/data";

const EASE = [0.22, 1, 0.36, 1] as const;

// Highlight numbers with accent color
function HighlightNumbers({ text }: { text: string }) {
  const parts = text.split(/(~?[\d]+[-–]?[\d]*%?(?:\s*hours?)?)/g);
  return (
    <>
      {parts.map((part, i) =>
        /~?[\d]+[-–]?[\d]*%?(?:\s*hours?)?/.test(part) ? (
          <span key={i} style={{ color: "var(--accent)" }}>
            {part}
          </span>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </>
  );
}

export default function Experience() {
  return (
    <section
      id="experience"
      style={{ paddingTop: "5rem", paddingBottom: "5rem", paddingLeft: "3rem", paddingRight: "3rem" }}
    >
      {/* Section label */}
      <div className="flex items-center gap-4 mb-12">
        <span className="mono-tag" style={{ color: "var(--accent)" }}>
          Stack
        </span>
        <div className="section-rule flex-1" />
      </div>

      <div className="grid gap-16 lg:grid-cols-[1fr_340px]">
        {/* Left: Work + Education + Certs */}
        <div>
          {/* Work */}
          <div className="mb-12">
            <p className="mono-tag mb-8" style={{ color: "var(--text-faint)" }}>
              Work
            </p>
            <div className="space-y-12">
              {experience.map((job, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, ease: EASE }}
                >
                  {/* Role + company + period */}
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div>
                      <h3
                        style={{
                          fontFamily: "var(--font-sans), system-ui, sans-serif",
                          fontWeight: 600,
                          fontSize: "0.95rem",
                          color: "var(--text-primary)",
                        }}
                      >
                        {job.role}
                      </h3>
                      <span
                        className="mono-tag"
                        style={{ color: "var(--accent)", marginTop: "2px", display: "block" }}
                      >
                        {job.company}
                      </span>
                    </div>
                    <span
                      className="mono-tag flex-shrink-0"
                      style={{ color: "var(--text-faint)" }}
                    >
                      {job.period}
                    </span>
                  </div>

                  {/* Description */}
                  <p
                    style={{
                      fontFamily: "var(--font-sans), system-ui, sans-serif",
                      fontSize: "0.9rem",
                      lineHeight: 1.75,
                      color: "var(--text-muted)",
                      marginBottom: "1rem",
                      maxWidth: "36rem",
                    }}
                  >
                    {job.description}
                  </p>

                  {/* Highlights */}
                  {job.highlights && (
                    <ul className="space-y-2 mb-4">
                      {job.highlights.map((h, hi) => (
                        <li
                          key={hi}
                          style={{
                            fontFamily: "var(--font-sans), system-ui, sans-serif",
                            fontSize: "0.875rem",
                            lineHeight: 1.7,
                            color: "var(--text-muted)",
                            display: "flex",
                            alignItems: "flex-start",
                            gap: "0.75rem",
                          }}
                        >
                          <span
                            style={{
                              color: "var(--accent)",
                              flexShrink: 0,
                              marginTop: "2px",
                              fontSize: "0.75rem",
                            }}
                          >
                            ─
                          </span>
                          <HighlightNumbers text={h} />
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Skills */}
                  <p
                    className="mono-tag"
                    style={{ color: "var(--text-faint)" }}
                  >
                    {job.skills.join(",  ")}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Section rule */}
          <div className="section-rule mb-10" />

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease: EASE }}
            className="mb-8"
          >
            <p className="mono-tag mb-5" style={{ color: "var(--text-faint)" }}>
              Education
            </p>
            {education.map((edu, i) => (
              <p key={i} className="mono-tag" style={{ color: "var(--text-muted)", lineHeight: 1.9 }}>
                {edu.school}&nbsp;&nbsp;·&nbsp;&nbsp;{edu.degree}&nbsp;&nbsp;·&nbsp;&nbsp;{edu.period}
              </p>
            ))}
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease: EASE }}
          >
            <p className="mono-tag mb-5" style={{ color: "var(--text-faint)" }}>
              Certifications
            </p>
            <div className="space-y-2">
              {certifications.map((cert, i) => (
                <p key={i} className="mono-tag" style={{ color: "var(--text-muted)", lineHeight: 1.9 }}>
                  {cert.title}&nbsp;&nbsp;·&nbsp;&nbsp;{cert.issuer}&nbsp;&nbsp;·&nbsp;&nbsp;{cert.period}
                </p>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right: Skills */}
        <div>
          <p className="mono-tag mb-8" style={{ color: "var(--text-faint)" }}>
            Skills
          </p>
          <div className="space-y-8">
            {Object.entries(skills).map(([category, items], catIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: catIndex * 0.06, ease: EASE }}
              >
                <p
                  className="mono-tag mb-2"
                  style={{ color: "var(--accent)" }}
                >
                  {category}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-sans), system-ui, sans-serif",
                    fontSize: "0.875rem",
                    lineHeight: 1.75,
                    color: "var(--text-muted)",
                  }}
                >
                  {items.join(", ")}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
