"use client";

import { motion } from "framer-motion";
import { personal } from "@/lib/data";

const EASE = [0.22, 1, 0.36, 1] as const;

const interests = [
  "Machine Learning Systems",
  "Data Pipelines at Scale",
  "LLMs & Agents",
  "Creative Technology",
  "Generative Art",
  "Building for fun",
];

export default function About() {
  return (
    <section id="about" className="py-32">
      <div className="section-rule mb-16 mx-auto max-w-6xl px-6" style={{ margin: "0 auto 4rem" }} />
      <div className="mx-auto max-w-6xl px-6">
        {/* Section header */}
        <div className="mb-4">
          <p className="mono-tag text-[var(--accent)]">About</p>
        </div>
        <div className="section-rule mb-16" />

        <div className="grid gap-20 lg:grid-cols-[1fr_380px]">
          {/* Left — bio */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, ease: EASE }}
          >
            <div className="space-y-5 text-[1.125rem] leading-relaxed text-[var(--text-muted)]" style={{ fontFamily: "var(--font-sans)" }}>
              <p>{personal.bio}</p>
              <p>
                I care about systems that are actually usable, not just technically sound. That
                means thinking about the product, the data, and the model together rather than in
                isolation.
              </p>
            </div>
          </motion.div>

          {/* Right — interests list */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.15, ease: EASE }}
          >
            <p className="mono-tag mb-6 text-[var(--text-faint)]">Interests</p>
            <ul className="space-y-3">
              {interests.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.05, ease: EASE }}
                  className="mono-tag flex items-center gap-3 text-[var(--text-muted)] transition-colors duration-200 hover:text-[var(--text-primary)]"
                >
                  <span style={{ color: "var(--accent)" }}>—</span>
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
