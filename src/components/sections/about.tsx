"use client";

import { motion } from "framer-motion";
import { personal } from "@/lib/data";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function About() {
  return (
    <section
      id="about"
      style={{ paddingTop: "5rem", paddingBottom: "5rem", paddingLeft: "3rem", paddingRight: "3rem" }}
    >
      {/* Section label */}
      <div className="flex items-center gap-4 mb-10">
        <span className="mono-tag" style={{ color: "var(--accent)" }}>
          About
        </span>
        <div className="section-rule flex-1" />
      </div>

      {/* Bio */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5, ease: EASE }}
        style={{ maxWidth: "38rem" }}
      >
        <p
          style={{
            fontFamily: "var(--font-sans), system-ui, sans-serif",
            fontSize: "1rem",
            lineHeight: 2,
            color: "var(--text-muted)",
            marginBottom: "1.25rem",
          }}
        >
          {personal.bio}
        </p>
        <p
          style={{
            fontFamily: "var(--font-sans), system-ui, sans-serif",
            fontSize: "1rem",
            lineHeight: 2,
            color: "var(--text-muted)",
          }}
        >
          I care about systems that are actually usable, not just technically
          sound. That means thinking about the product, the data, and the model
          together rather than in isolation.
        </p>
      </motion.div>

      {/* Contact line */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2, ease: EASE }}
        className="mono-tag mt-10"
        style={{ color: "var(--accent)" }}
      >
        Currently open&nbsp;&nbsp;·&nbsp;&nbsp;
        <a
          href={`mailto:${personal.email}`}
          style={{ transition: "color 200ms ease-out" }}
          onMouseEnter={(e) =>
            ((e.currentTarget as HTMLElement).style.color = "var(--accent-light)")
          }
          onMouseLeave={(e) =>
            ((e.currentTarget as HTMLElement).style.color = "var(--accent)")
          }
        >
          {personal.email}
        </a>
      </motion.p>
    </section>
  );
}
