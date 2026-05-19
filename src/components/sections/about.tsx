"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
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
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="py-32">
      <div className="section-rule-strong" />
      <div className="mx-auto max-w-6xl px-6">
        <div ref={ref} className="grid gap-20 lg:grid-cols-[1fr_380px]">
          {/* Left */}
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5 }}
              className="mono-tag mb-3 text-[var(--accent)]"
            >
              About
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
              className="display mb-10 text-[var(--text-primary)]"
              style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
            >
              A little about me.
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="space-y-4 text-lg leading-relaxed text-[var(--text-muted)]"
              style={{ fontFamily: "var(--font-sans), system-ui, sans-serif" }}
            >
              <p>{personal.bio}</p>
              <p>
                I care about systems that are actually usable, not just technically sound. That
                means thinking about the product, the data, and the model together rather than in
                isolation.
              </p>
              <p>
                Currently open to new opportunities. If you&apos;re building something interesting
                in the ML/AI or data space,{" "}
                <a
                  href="/contact"
                  className="text-[var(--accent)] underline-offset-4 transition-colors hover:underline"
                >
                  let&apos;s talk
                </a>
                .
              </p>
            </motion.div>
          </div>

          {/* Right — interests */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.35, ease: EASE }}
          >
            <p className="mono-tag mb-6 text-[var(--text-faint)]">Interests</p>
            <ul className="space-y-3">
              {interests.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: 12 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + i * 0.06 }}
                  className="flex items-center gap-3 text-[var(--text-muted)] transition-colors hover:text-[var(--text-primary)]"
                  style={{ fontFamily: "var(--font-sans), system-ui, sans-serif" }}
                >
                  <span
                    className="h-px w-5 flex-shrink-0"
                    style={{ background: "var(--accent)" }}
                  />
                  {item}
                </motion.li>
              ))}
            </ul>

            {/* Fact card */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="mt-10 border border-[var(--border)] bg-[var(--bg-surface)] p-5"
            >
              <p className="mono-tag mb-1 text-[var(--accent)]">Currently</p>
              <p
                className="text-sm text-[var(--text-muted)] leading-relaxed"
                style={{ fontFamily: "var(--font-sans), system-ui, sans-serif" }}
              >
                Building AI agents, exploring creative ML applications, and looking for the next
                interesting problem to solve.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
