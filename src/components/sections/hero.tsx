export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col"
      style={{ paddingTop: "20vh", paddingLeft: "3rem", paddingRight: "3rem", paddingBottom: "4rem" }}
    >
      {/* Prose opener — just there, no animation */}
      <p
        className="max-w-xl"
        style={{
          fontFamily: "var(--font-sans), system-ui, sans-serif",
          fontSize: "1.05rem",
          lineHeight: 1.8,
          color: "var(--text-muted)",
        }}
      >
        Building production ML systems at Lloyds Technology Centre in Hyderabad.
        Fraud propensity models, ETL pipelines on GCP, and a Neo4j knowledge graph
        that actually ships to production. IIT Guwahati, 2024.
      </p>

      {/* Breath */}
      <div style={{ height: "2.5rem" }} />

      {/* Signature */}
      <h1
        className="display"
        style={{
          fontSize: "clamp(2.5rem, 6vw, 3.5rem)",
          color: "var(--text-primary)",
        }}
      >
        Suryatej Lalam.
      </h1>

      {/* Section rule */}
      <div
        className="section-rule"
        style={{ marginTop: "1.5rem", marginBottom: "1rem", maxWidth: "28rem" }}
      />

      {/* Meta line */}
      <p className="mono-tag" style={{ color: "var(--text-muted)" }}>
        ML Engineer&nbsp;&nbsp;·&nbsp;&nbsp;Hyderabad&nbsp;&nbsp;·&nbsp;&nbsp;
        <span style={{ color: "var(--accent)" }}>Available</span>
      </p>

      {/* Scroll hint — bottom of section */}
      <div className="mt-auto pt-16">
        <span
          className="mono-tag"
          style={{ color: "var(--text-faint)" }}
        >
          ↓&nbsp;&nbsp;scroll
        </span>
      </div>
    </section>
  );
}
