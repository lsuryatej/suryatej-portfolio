export const projects = [
  {
    id: "late-delivery-prediction",
    title: "Late Delivery Prediction",
    description:
      "Predicts which marketplace orders will arrive late. LightGBM on a large Brazilian e-commerce dataset. The core fix was a temporal train/test split that removed data leakage, lifting test ROC-AUC from 0.558 to 0.641.",
    tags: ["Python", "LightGBM", "ML", "Feature Engineering"],
    github: "https://github.com/lsuryatej/Operational-Intelligence-for-Digital-Marketplace",
    live: null,
    featured: true,
    type: "ml",
  },
  {
    id: "task-environment-builder",
    title: "Task Environment Builder",
    description:
      "Built structured task environments for an AI coding platform: reproducible Docker-based setups paired with automated verifiers that objectively grade task completion. Each environment ships as a prompt/environment/verifier triple.",
    tags: ["Docker", "Python", "AI", "Automation"],
    github: null,
    live: null,
    featured: true,
    type: "tool",
  },
  {
    id: "mcp-skill-router",
    title: "MCP Skill Router",
    description:
      "Routes agent requests to the right Claude skill based on intent. Merged into an open-source skills repo.",
    tags: ["MCP", "Claude", "Agent Tooling", "TypeScript"],
    github: null,
    live: null,
    featured: true,
    type: "tool",
  },
  {
    id: "pre-market-legal-briefing",
    title: "Pre-Market Legal Briefing",
    description:
      "Daily intelligence system for NSE/BSE trading. Scans court filings and rulings, filters to a strict 7-day signal window, surfaces scrips likely to move on legal catalysts.",
    tags: ["Python", "Finance", "Automation", "Data"],
    github: null,
    live: null,
    featured: true,
    type: "tool",
  },
  {
    id: "market-etl",
    title: "Market ETL Pipeline",
    description:
      "Reliable pipeline to fetch, clean, and store OHLCV market data. Computes common technical indicators, produces an insights notebook and visual dashboard.",
    tags: ["Python", "ETL", "Jupyter", "Data Engineering"],
    github: "https://github.com/lsuryatej/market-etl",
    live: null,
    featured: true,
    type: "data",
  },
  {
    id: "mac-healthkit",
    title: "mac-healthkit",
    description:
      "Open-source Mac diagnostic toolkit. Bash scripts plus a launchd daemon that logs system health to CSV and fires threshold-based notifications when memory or disk pressure crosses limits.",
    tags: ["Bash", "macOS", "launchd", "System Diagnostics"],
    github: "https://github.com/lsuryatej/mac-healthkit",
    live: null,
    featured: true,
    type: "tool",
  },
  {
    id: "brahmi-antigravity",
    title: "Brahmi Antigravity",
    description:
      "Website for an Indian clothing brand. Built with TypeScript, focused on visual storytelling and brand identity.",
    tags: ["TypeScript", "Web", "Brand", "Creative"],
    github: "https://github.com/lsuryatej/Brahmi-Antigravity",
    live: null,
    featured: true,
    type: "creative",
  },
];

export const experience = [
  {
    role: "ML Engineer",
    company: "Lloyds Technology Centre",
    period: "Jun 2024 – Present",
    description:
      "Working in the AI modelling group on customer protection and financial intelligence. I build production ML models for fraud detection and customer risk scoring, design ETL pipelines on GCP, and recently shipped a dynamic knowledge graph framework using Neo4j. Also won recognition at the Reboot Hackathon for a Trusted Access platform designed for digitally underserved customers.",
    highlights: [
      "Improved classification precision by ~5-8% on a production customer fraud propensity model (LightGBM/XGBoost)",
      "Built a model monitoring framework: PSI-based drift detection, feature drift tracking, decile stability checks",
      "Cut pipeline failures by 70% with redesigned ETL on Dataflow + BigQuery",
      "Led migration of critical pipelines from on-prem to BigQuery, 2x scalability",
      "Refactored FSCS regulatory batch processing, shaving 4+ hours off runtime",
      "Built MCP skill-router tooling and a Neo4j knowledge graph framework for unstructured data",
    ],
    skills: ["Python", "GCP", "BigQuery", "Dataflow", "Neo4j", "ML Ops"],
  },
];

export const education = [
  {
    school: "IIT Guwahati",
    degree: "BTech in Electrical and Electronics Engineering",
    period: "2020 – 2024",
  },
];

export const certifications = [
  {
    title: "Associate Cloud Engineer",
    issuer: "Google Cloud",
    period: "Sep 2024 – Sep 2027",
  },
  {
    title: "Artificial Intelligence and Machine Learning",
    issuer: "Wadhwani School of Data Science and AI, IIT Madras",
    period: "Sep 2025",
  },
];

export const skills = {
  "Python & ML": [
    "Python",
    "scikit-learn",
    "XGBoost / LightGBM",
    "PySpark",
    "Pandas",
    "NumPy",
    "Polars",
    "TensorFlow Lite",
    "FastAPI",
  ],
  "Cloud & Data": [
    "GCP",
    "BigQuery",
    "Dataflow",
    "Dataproc",
    "Airflow",
    "Pub/Sub",
    "Cloud Run",
    "Terraform",
    "Vertex AI",
    "Kubeflow",
  ],
  "Data Engineering": [
    "Apache Beam",
    "Apache Spark",
    "Kafka",
    "Delta Lake",
    "Snowflake",
    "ETL/ELT",
    "Data Modelling",
    "Neo4j",
  ],
  "Dev & DevOps": [
    "TypeScript",
    "React",
    "Docker",
    "Kubernetes",
    "CI/CD",
    "Git",
    "REST APIs",
    "Microservices",
  ],
  "LLMs & Agents": [
    "MCP",
    "Claude Skills",
    "Agent Tooling",
    "LangChain",
  ],
};

export const personal = {
  name: "Suryatej Lalam",
  role: "ML Engineer",
  location: "Hyderabad, India",
  email: "lsuryatej@gmail.com",
  github: "https://github.com/lsuryatej",
  linkedin: "https://www.linkedin.com/in/suryatej-l/",
  available: true,
  tagline: "I build intelligent systems. Occasionally, creative ones.",
  bio: "ML Engineer at Lloyds Technology Centre, working on fraud detection, customer intelligence, and production data systems on GCP. IIT Guwahati alum, Google Cloud certified. I care about building things that actually ship: pipelines that don't break at 3am, models that move metrics, and the occasional side project that scratches a creative itch.",
};
