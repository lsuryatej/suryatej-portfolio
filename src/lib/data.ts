export const projects = [
  {
    id: "operational-intelligence",
    title: "Operational Intelligence for Digital Marketplaces",
    description:
      "A predictive framework for the Olist ecosystem: demand forecasting, seller performance modelling, and supply chain intelligence at scale.",
    tags: ["Python", "ML", "Data Strategy", "Predictive Modelling"],
    github: "https://github.com/lsuryatej/Operational-Intelligence-for-Digital-Marketplace",
    live: null,
    featured: true,
    type: "ml",
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
  {
    id: "linkedin-job-automator",
    title: "LinkedIn Job Automator",
    description:
      "Chrome extension that autonomously finds, enriches, and auto-applies to LinkedIn jobs. Handles search, profile matching, and application flow end-to-end.",
    tags: ["Chrome Extension", "Automation", "AI"],
    github: "https://github.com/lsuryatej/linkedin-job-automator",
    live: null,
    featured: true,
    type: "tool",
  },
  {
    id: "desire-hiresign",
    title: "desire-hiresign",
    description:
      "A swipe-based job discovery app for designers. Creatives showcase portfolios, recruiters post roles. Both sides can like, match, and chat, making hiring a visual, engaging experience.",
    tags: ["Python", "Product", "UX", "Creative"],
    github: "https://github.com/lsuryatej/desire-hiresign",
    live: null,
    featured: false,
    type: "creative",
  },
  {
    id: "bank-deposit-ml",
    title: "Bank Term Deposit Prediction",
    description:
      "Evaluates synthetic data as a privacy-preserving alternative to real customer data for predicting bank term deposit subscriptions. Explores GAN-generated data quality.",
    tags: ["Python", "ML", "Synthetic Data", "Privacy"],
    github: "https://github.com/lsuryatej/ML-Project-Predicting-Bank-Term-Deposit-Subscriptions-",
    live: null,
    featured: false,
    type: "ml",
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
      "Improved classification precision by ~5-8% on a production customer propensity model",
      "Cut pipeline failures by 70% with redesigned ETL on Dataflow + BigQuery",
      "Led migration of critical pipelines from on-prem to BigQuery, delivering 2x scalability",
      "Refactored FSCS batch processing, shaving 4+ hours off runtime",
      "Built a Neo4j knowledge graph framework for messy, unstructured data",
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
