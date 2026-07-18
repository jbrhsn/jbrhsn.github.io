export const profile = {
  name: "JABIRHUSAIN.KP",
  title: "DATA × AI ENGINEER",
  affiliation: "IBM ▸ HEINEKEN",
  tagline: "Engineering at the convergence of enterprise lakehouses and autonomous multi-agent AI.",
  location: "Bengaluru, IN",
  email: "jbrhsn.kp@gmail.com",
  phone: "+91-8129556611",
  links: {
    linkedin: "https://linkedin.com/in/jabirhusain",
    github: "https://github.com/jbrhsn",
    site: "https://jabirhusain.in",
  },
  katakana: "データ・エンジニア", // "data engineer"
  kanji: "電脳", // "cyber-brain"
  stats: [
    { k: "4+ YRS", v: "since 2022" },
    { k: "3 CERTS", v: "active" },
    { k: "€1K+/mo", v: "saved" },
    { k: "80%", v: "monitoring ↓" },
  ],
  about: [
    "Data & AI Engineer on IBM's Heineken engagement: building the DataOps observability standard, driving FinOps re-architecture across a ~6 PB lakehouse, and shipping org-wide GenAI tooling.",
    "Diagnose platform overheads, quantify their business cost, engineer automated root-cause solutions. Repeat until it becomes the standard.",
  ],
  roles: [
    "Senior Data Engineer",
    "Data Platform Engineer",
    "AI Infrastructure Engineer",
    "ML Platform Engineer",
    "Analytics Engineer",
    "Data Architect (IC)",
  ],
  timeline: [
    {
      date: "JUN 2022",
      title: "Joined IBM · Graduate Data Engineer",
      body: "Fresher. Fast-tracked on merit and rapid upskilling.",
    },
    {
      date: "JUN 2023",
      title: "Promoted · Associate Data Engineer",
      body: "12 months in. First self-initiated infrastructure wins.",
    },
    {
      date: "JAN 2025",
      title: "Elevated · Data Engineer (Heineken)",
      body: "Performing senior-level scope: architecture decisions, code-review gatekeeping, org-wide tooling.",
    },
    {
      date: "PRESENT",
      title: "Architecting the standard",
      body: "Centralized DataOps observability, advanced FinOps, production-grade enterprise GenAI.",
    },
  ],
  impact: [
    {
      metric: "80%",
      unit: "monitoring effort ↓",
      title: "DataOps Observability Platform",
      body: "Built a unified end-to-end observability stack from scratch across 200+ pipelines (SAP DI, ADF, Databricks). Real-time logs into Unity Catalog; Power BI, schema drift, freshness, cost. 1.0 FTE → 0.2 FTE. Adopted as account-wide standard.",
    },
    {
      metric: "€1K+",
      unit: "/mo recurring savings",
      title: "Deep Performance Tuning · FinOps",
      body: "Z-Order on Silver-layer SHA256 keys after 30+ columns, aggressive VACUUM, and interactive → job-compute migration. ~50% compute cost cut, ~30% storage cut.",
    },
    {
      metric: "0",
      unit: "manual retry tickets",
      title: "Infrastructure Resilience Orchestrator",
      body: "Azure Logic Apps error classifier separates transient cloud drops from fatal bugs. 30-min back-off self-heal for the transient class; instant escalation for logic errors. Killed a whole category of alert fatigue.",
    },
    {
      metric: "50-60h",
      unit: "/month recaptured",
      title: "Scaled Enterprise AI Assistants (ICA)",
      body: "Independently proposed & shipped three domain-specialized AI assistants (Databricks Transform Expert, User Story Generator, RAG Ops Helper) with scoped context + dedicated tools. Adopted org-wide by the IBM Data Service Line.",
    },
    {
      metric: "70%",
      unit: "compute avoided",
      title: "Multi-Billion Record Recovery",
      body: "200M-2B row core tables corrupted. Delta time-travel + key-join isolation + targeted replay. Skipped the full-history refresh, preserved SLAs, saved 30% engineering effort.",
    },
    {
      metric: "~91%",
      unit: "test coverage · 248 tests",
      title: "Aria · Config-Driven Multi-Agent Platform",
      body: "Self-engineered LangGraph platform. YAML-declared agents on one shared ReActAgent; auto-generated typed CRUD; self-evaluation loop across 5 vectors; per-user isolated SQLite + sqlite-vec. Single-operator by design.",
    },
  ],
  projects: [
    {
      name: "ARIA",
      subtitle: "Multi-Agent Discord Platform",
      href: "https://github.com/jbrhsn/aria_multi_agent_bot",
      body: "LangGraph + Python. 5 autonomous agents (Goal · Learning · Research · Health · Finance) behind one Discord bot. YAML-declared ReActAgent engine, auto-generated typed CRUD from CREATE TABLE, Decide→Plan→Execute↔Tools→Evaluate→Final graph with autonomous self-evaluation, per-user SQLite + sqlite-vec isolation.",
      chips: ["LangGraph", "Python", "SQLite", "sqlite-vec", "Docker", "OpenRouter"],
      note: "Single-operator system: production-grade engineering, not production traffic.",
    },
    {
      name: "RESUME_WRITER",
      subtitle: "Agentic CV Expert",
      href: "https://github.com/jbrhsn/resume_writer",
      body: "14-node LangGraph orchestrator simulating a hiring committee (CEO, Senior HM, Recruiter, ATS) with a plan-conflict mediator and a self-correction loop bounded by score gates and MAX_EDITING_CYCLES. Per-task model routing, 7 Pydantic schemas, tectonic PDF export, FastAPI + SSE web UI.",
      chips: ["LangGraph", "Pydantic", "FastAPI", "SSE", "tectonic", "OpenRouter"],
      note: "Single-operator personal project.",
    },
  ],
  skills: [
    {
      group: "DATA PLATFORM",
      items: [
        "Azure Databricks",
        "Delta Lake · Unity Catalog",
        "Spark (PySpark)",
        "SAP Data Intelligence",
        "Azure Data Factory",
        "Power BI",
      ],
    },
    {
      group: "CLOUD & OPS",
      items: [
        "Azure (Monitor · Cost · Logic Apps)",
        "Log Analytics",
        "Docker",
        "GitHub Actions",
        "FinOps",
        "DataOps",
      ],
    },
    {
      group: "GEN-AI",
      items: [
        "LangGraph",
        "LangChain",
        "RAG",
        "OpenRouter",
        "Multi-Agent Systems",
        "sqlite-vec · Tavily",
      ],
    },
    {
      group: "LANG & TOOLS",
      items: ["Python", "SQL", "TypeScript", "YAML", "Pydantic", "pytest · ruff"],
    },
  ],
  certs: [
    {
      code: "DP-PRO",
      name: "Databricks Certified Data Engineer Professional",
      issuer: "Databricks",
    },
    {
      code: "AI-102",
      name: "Microsoft Certified: Azure AI Engineer Associate",
      issuer: "Microsoft",
    },
    {
      code: "DP-600",
      name: "Microsoft Certified: Fabric Analytics Engineer Associate",
      issuer: "Microsoft",
    },
  ],
};
