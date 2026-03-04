"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { experience, education, certifications, skills } from "@/lib/data";
import { Award, GraduationCap } from "lucide-react";

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="experience" className="py-32">
      <div className="section-divider mb-32" />
      <div className="mx-auto max-w-6xl px-6">
        <div ref={ref}>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="mono-tag mb-3 text-[var(--accent-light)]"
          >
            Experience & Skills
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="display mb-16 text-[clamp(2.5rem,6vw,5rem)] text-[var(--text-primary)]"
          >
            What I&apos;ve been up to.
          </motion.h2>
        </div>

        <div className="grid gap-16 lg:grid-cols-[1fr_1px_1fr]">
          {/* Left column — Work + Education + Certs */}
          <div className="space-y-14">
            {/* Work */}
            <div>
              <p className="mono-tag mb-8 text-[var(--text-muted)]">Work</p>
              <div className="space-y-10">
                {experience.map((job, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <div className="mb-2 flex items-start justify-between gap-4">
                      <div>
                        <h3 className="font-semibold text-[var(--text-primary)]">{job.role}</h3>
                        <p className="text-sm text-[var(--accent-light)]">{job.company}</p>
                      </div>
                      <span className="mono-tag flex-shrink-0 text-[var(--text-muted)]">
                        {job.period}
                      </span>
                    </div>
                    <p className="mb-3 text-sm leading-relaxed text-[var(--text-muted)]">
                      {job.description}
                    </p>
                    {job.highlights && (
                      <ul className="mb-3 space-y-1.5">
                        {job.highlights.map((h, hi) => (
                          <li
                            key={hi}
                            className="flex items-start gap-2 text-sm text-[var(--text-muted)]"
                          >
                            <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-[var(--accent)]" />
                            {h}
                          </li>
                        ))}
                      </ul>
                    )}
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {job.skills.map((s) => (
                        <span
                          key={s}
                          className="mono-tag rounded border border-[var(--border)] bg-[var(--bg)] px-2 py-0.5 text-[var(--text-muted)]"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Education */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="mono-tag mb-6 text-[var(--text-muted)]">Education</p>
              {education.map((edu, i) => (
                <div key={i} className="flex items-start gap-3">
                  <GraduationCap
                    size={16}
                    className="mt-0.5 flex-shrink-0 text-[var(--accent-light)]"
                  />
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h4 className="font-medium text-[var(--text-primary)]">{edu.school}</h4>
                        <p className="text-sm text-[var(--text-muted)]">{edu.degree}</p>
                      </div>
                      <span className="mono-tag flex-shrink-0 text-[var(--text-muted)]">
                        {edu.period}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="mono-tag mb-6 text-[var(--text-muted)]">Certifications</p>
              <div className="space-y-4">
                {certifications.map((cert, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Award
                      size={16}
                      className="mt-0.5 flex-shrink-0 text-[var(--accent-light)]"
                    />
                    <div>
                      <h4 className="font-medium text-[var(--text-primary)]">{cert.title}</h4>
                      <p className="text-sm text-[var(--text-muted)]">
                        {cert.issuer}
                        <span className="mx-1.5 text-[var(--border)]">·</span>
                        {cert.period}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Vertical divider */}
          <div className="hidden lg:block bg-[var(--border)]" />

          {/* Right column — Skills */}
          <div>
            <p className="mono-tag mb-8 text-[var(--text-muted)]">Stack</p>
            <div className="space-y-8">
              {Object.entries(skills).map(([category, items], catIndex) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    duration: 0.5,
                    delay: catIndex * 0.08,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  <p className="mono-tag mb-3 text-[var(--accent-light)]">{category}</p>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill, skillIndex) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.92 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.3,
                          delay: catIndex * 0.06 + skillIndex * 0.03,
                        }}
                        className="rounded-lg border border-[var(--border)] bg-[var(--bg-surface)] px-3 py-1.5 text-sm text-[var(--text-muted)] transition-all hover:border-[var(--accent)] hover:text-[var(--text-primary)]"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
