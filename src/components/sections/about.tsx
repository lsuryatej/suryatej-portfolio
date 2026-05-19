"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { personal, education, certifications } from "@/lib/data";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="py-24">
      {/* Top rule */}
      <div className="section-rule-strong mb-0" />

      <div className="mx-auto max-w-6xl px-6" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, ease: EASE }}
          className="py-6 mb-8"
        >
          <h2 className="display text-[clamp(2rem,5vw,3rem)] text-[var(--text-primary)]">
            ABOUT
          </h2>
        </motion.div>

        <div className="grid gap-16 lg:grid-cols-[1fr_280px]">
          {/* Left: bio */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1, ease: EASE }}
              className="editorial text-[1.1rem] leading-[1.75] text-[var(--text-primary)] mb-6"
            >
              {personal.bio}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.18, ease: EASE }}
              className="text-base leading-relaxed text-[var(--text-muted)]"
              style={{ fontFamily: "var(--font-sans), system-ui, sans-serif" }}
            >
              I care about systems that are actually usable, not just technically sound. That means
              thinking about the product, the data, and the model together — rather than in isolation.
              Currently open to new opportunities in ML, data engineering, or AI systems.
            </motion.p>
          </div>

          {/* Right: thin sidebar stats */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.25, ease: EASE }}
            className="space-y-8"
          >
            {/* Education */}
            <div>
              <p className="data-text text-[var(--text-faint)] mb-3">EDUCATION</p>
              {education.map((edu, i) => (
                <div key={i}>
                  <p
                    className="text-sm font-medium text-[var(--text-primary)] mb-0.5"
                    style={{ fontFamily: "var(--font-sans), system-ui, sans-serif" }}
                  >
                    {edu.school}
                  </p>
                  <p
                    className="text-xs text-[var(--text-muted)] leading-relaxed"
                    style={{ fontFamily: "var(--font-sans), system-ui, sans-serif" }}
                  >
                    {edu.degree}
                  </p>
                  <p className="data-text text-[var(--text-faint)] mt-1">{edu.period}</p>
                </div>
              ))}
            </div>

            {/* Certifications */}
            <div>
              <p className="data-text text-[var(--text-faint)] mb-3">CERTIFICATIONS</p>
              {certifications.map((cert, i) => (
                <div key={i} className="mb-4">
                  <p
                    className="text-sm font-medium text-[var(--text-primary)] mb-0.5"
                    style={{ fontFamily: "var(--font-sans), system-ui, sans-serif" }}
                  >
                    {cert.title}
                  </p>
                  <p className="data-text text-[var(--text-faint)]">
                    {cert.issuer} · {cert.period}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
