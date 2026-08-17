// ============================================================================
// data.js — single source of truth for the entire portfolio.
// Components must read from here. Never hardcode content in a component.
// To update the site: edit this file only.
//
// RULE: every number in this file is real and traceable. Do not add a metric
// you cannot point to a repo, log, or scorecard for.
// ============================================================================

// ---------------------------------------------------------------------------
// PROFILE
// ---------------------------------------------------------------------------
export const profile = {
  name: "Jaswanth Koppisetty",
  headline: "I build production ML systems and the infrastructure under them.",
  subheadline:
    "Multi-agent pipelines, CPU-first inference engines, and reinforcement-learning security research.",
  location: "Hyderabad, India",
  status: "Open to SDE/SWE and AI/ML engineer roles — 2026 internships, 2027 full-time",
  education: {
    degree: "B.Tech, Computer Science & Engineering",
    institution: "Anurag University, Hyderabad",
    graduation: "May 2027",
    batch: "2023–2027",
    cgpa: "8.7",
  },
  languages: [
    "English (fluent)",
    "Telugu (native)",
    "Hindi (conversational)",
    "Japanese (basic)",
  ],
  email: "koppisettyjaswanth@gmail.com",
  resumeUrl: "/resume.pdf",
};

// ---------------------------------------------------------------------------
// LINKS
// ---------------------------------------------------------------------------
export const links = {
  github: "https://github.com/Jaswanth-K1210",
  linkedin: "https://www.linkedin.com/in/jaswanth-koppisetty/",
  huggingface: "https://huggingface.co/Jaswanth-K",
  leetcode: "https://leetcode.com/u/a5S3b6vtks/",
  portfolio: "https://jaswanthkoppisetty.codes",
  email: "koppisettyjaswanth@gmail.com"
};

// ---------------------------------------------------------------------------
// ASSETS
// Decorative imagery for the voxel build. Every one of these is optional:
// components check `hasAsset()` and fall back cleanly when a file is absent,
// so the site never renders a broken image or an empty frame.
// Drop the PNGs into /public with these exact names to switch them on.
// ---------------------------------------------------------------------------
export const assets = {
  avatarBase: "/transparent-base.png",   // voxel avatar, no flame
  avatarFlame: "/transparent-flame.png", // voxel avatar, blue flame (spotlight reveal)
  avatarFallback: "/Profile.jpg",        // used until the voxel art exists
  portal: "/nether-portal-nobg.png",     // marquee end frames
  book: "/enchantedbook.png",            // Featured Projects heading accent
  llama: "/llama-nobg.png",              // perches on the closing CTA card
  nightSky: "/night-sky.png",            // parallax CTA background
  cloud: "/cloud.png",                   // floating parallax accents
};

// ---------------------------------------------------------------------------
// ROLE LENSES
// Drives the SDE/SWE vs AI/ML toggle. Projects and skills declare which
// lenses they belong to; the toggle filters and reorders by `order`.
// ---------------------------------------------------------------------------
export const lenses = [
  {
    id: "swe",
    label: "SDE / SWE",
    blurb:
      "Systems, scale, and cost. Full-product scope, low-level performance work, and infrastructure engineered to run cheap.",
  },
  {
    id: "ml",
    label: "AI / ML",
    blurb:
      "Agents, RL, and research method. Adversarial security work, multi-agent pipelines, and experiments reported honestly.",
  },
];

// ---------------------------------------------------------------------------
// PROJECTS
//
// Schema:
//   slug        string   — route segment for /work/[slug]
//   title       string
//   tagline     string   — one line, under 90 chars
//   year        string
//   status      "shipped" | "active" | "research" | "local"
//   featured    boolean  — gets a full case-study page
//   lenses      string[] — which lens tabs show it
//   order       { swe?: number, ml?: number } — sort rank per lens (lower = higher)
//   tags        string[]
//   stack       string[]
//   metrics     [{ label, value }] — only real, defensible numbers
//   links       [{ label, href, kind, note? }] kind: "repo" | "live" | "demo" | "writeup"
//                 note = optional caveat rendered next to the link (e.g. cold start)
//   summary     string   — card body, 2-3 sentences
//   caseStudy   { problem, architecture, decisions[], tradeoffs[], outcome, honesty }
//                 honesty = what this project does NOT prove. Keep it. It reads well.
// ---------------------------------------------------------------------------
export const projects = [
  {
    slug: "injectarena",
    title: "InjectArena",
    tagline:
      "RL-trained prompt-injection attacker versus a frozen Meta defense stack.",
    year: "2026",
    status: "shipped",
    featured: true,
    lenses: ["ml"],
    order: { ml: 1 },
    tags: ["Reinforcement Learning", "AI Security", "Red Teaming", "LLM"],
    stack: ["Qwen2.5-1.5B", "LoRA", "GRPO", "PyTorch", "HuggingFace"],
    metrics: [
      { label: "LlamaFirewall bypass", value: "100%" },
      { label: "Prompt Guard 2 bypass", value: "75–100%" },
      { label: "Peak GRPO reward", value: "0.501 @ step 740" },
      { label: "Training run", value: "~500 episodes / 48 h" },
      { label: "Reward function", value: "7 components" },
      { label: "Result", value: "Solo finalist" },
    ],
    links: [
      { label: "Repository", href: "https://github.com/Jaswanth-K1210/Inject-Arena", kind: "repo" },
      { label: "HuggingFace Space", href: "https://huggingface.co/spaces/Jaswanth-K/Inject-Arena-V2", kind: "demo" },
      { label: "Writeup", href: "", kind: "writeup" }, // fill in blog URL
    ],
    summary:
      "Solo finalist at the Scaler × Meta × HuggingFace OpenEnv Hackathon, Bangalore (April 2026) — the only solo builder among the finalist teams. An attacker policy trained with GRPO to discover prompt injections against production guardrails, treating red-teaming as a reinforcement-learning problem rather than a manual one.",
    caseStudy: {
      problem:
        "Prompt-injection defenses are evaluated against hand-written attacks, which means coverage is bounded by the imagination of whoever wrote the test set. The question was whether an RL agent could find bypasses that a human red-teamer would not.",
      architecture:
        "Qwen2.5-1.5B fine-tuned with LoRA adapters and trained with GRPO against a frozen Meta defense stack (LlamaFirewall, Prompt Guard 2, SecAlign). The defense stack is never updated during training, so reward signal comes purely from the attacker discovering new bypass surface.",
      decisions: [
        "GRPO over PPO — no separate value network, cheaper on a small model with a sparse binary-ish reward.",
        "LoRA over full fine-tuning — kept the run inside a single-GPU budget and made adapter-swapping between attack strategies trivial.",
        "Froze the defense stack rather than co-training — the goal was measuring defense coverage, not an arms race.",
      ],
      tradeoffs: [
        "A 1.5B attacker is cheap but caps attack sophistication; a larger policy would likely push the SecAlign result.",
        "Reward shaping around bypass success biases toward high-frequency simple attacks over rare complex ones.",
      ],
      outcome:
        "Complete bypass of LlamaFirewall and 75–100% bypass of Prompt Guard 2, with peak GRPO reward of 0.501 at step 740. SecAlign held throughout — the attacker never broke it.",
      honesty:
        "SecAlign holding is the most useful result here and it is a negative one. This shows classifier-style guardrails are brittle under adversarial optimization while alignment-training-based defenses were not, on this setup, at this scale. It does not show SecAlign is unbreakable.",
    },
  },

  {
    slug: "marketpulse",
    title: "MarketPulse",
    tagline: "Multi-agent financial OSINT platform engineered to run at near-zero cost.",
    year: "2026",
    status: "active",
    featured: true,
    lenses: ["swe", "ml"],
    order: { swe: 2, ml: 2 },
    tags: ["Multi-Agent", "OSINT", "Infrastructure", "Open Source"],
    stack: [
      "FastAPI",
      "LangGraph",
      "React",
      "SQLite",
      "Redis",
      "Docker",
      "Kubernetes",
      "Groq",
      "OpenRouter",
    ],
    metrics: [
      { label: "Codebase", value: "~6,300 lines" },
      { label: "Agent graph", value: "6 nodes" },
      { label: "Curated RSS feeds", value: "110" },
      { label: "Infra cost", value: "$0–12 / month" },
      { label: "License", value: "MIT" },
    ],
    links: [
      { label: "Live", href: "https://market-pulse-jet.vercel.app", kind: "live" },
      { label: "Repository", href: "https://github.com/Jaswanth-K1210/MarketPulse", kind: "repo" },
    ],
    summary:
      "A six-node LangGraph agent pipeline over 110 curated feeds, served by FastAPI and a React frontend. The interesting constraint was cost: the whole system runs on a shared global pipeline for under $12 a month, and it is MIT licensed.",
    caseStudy: {
      problem:
        "Commercial supply-chain and financial risk intelligence platforms (Interos, Resilinc, Everstream) price at enterprise tiers. The question was how much of that signal can be reconstructed from open sources on a student budget.",
      architecture:
        "A six-node LangGraph agent graph handles ingest, extraction, correlation, and scoring over 110 curated RSS sources. FastAPI exposes 18+ endpoints to a React frontend. SQLite for persistence, Redis for cache, Docker and Kubernetes for deployment. The LLM layer runs Groq as primary with an OpenRouter free-tier fallback.",
      decisions: [
        "Shared global pipeline instead of per-user compute — one GitHub Actions cron populates a cache every user reads from, which is what collapses the cost to $0–12/month.",
        "Groq primary with OpenRouter fallback rather than a paid single provider — latency plus a free failover path.",
        "MIT license and full open source, because the value here is the pipeline design, not access control.",
      ],
      tradeoffs: [
        "A shared pipeline means no per-user customization of the watch list without a rearchitecture.",
        "SQLite is the right call at this scale and the wrong one the moment write concurrency matters.",
      ],
      outcome:
        "Deployed and open. The infrastructure and agent orchestration layer are complete; the intelligence layer is the current work.",
      honesty:
        "The scoring layer is still hardcoded multipliers, not a trained model — roughly 40% of the intended intelligence layer. I do not publish accuracy figures for it, because heuristic multipliers do not earn one. Replacing them with a trained, backtested model is the active work.",
    },
  },

  {
    slug: "nexus-mail",
    title: "Nexus Mail",
    tagline: "AI email workspace with a three-tier LLM fallback chain.",
    year: "2025",
    status: "shipped",
    featured: true,
    lenses: ["swe"],
    order: { swe: 1 },
    tags: ["Full Stack", "Product", "ML in Production", "Chrome Extension"],
    stack: ["TF-IDF", "LightGBM", "Gmail API", "Google Calendar API", "Chrome Extension"],
    metrics: [
      { label: "Codebase", value: "46,000+ lines" },
      { label: "LLM fallback tiers", value: "3 — Ollama, Groq, OpenRouter" },
    ],
    links: [
      {
        label: "Live",
        href: "https://nexus-mail.me",
        kind: "live",
        note: "Cold start — the instance sleeps when idle and can take a moment to wake.",
      },
    ],
    summary:
      "My largest codebase. Priority ranking with TF-IDF plus LightGBM, deep Gmail and Calendar integration, a Chrome extension, and a three-tier LLM fallback chain so the product degrades instead of failing when a provider goes down.",
    caseStudy: {
      problem:
        "Email triage tools break the moment their LLM provider rate-limits or goes down, and most of them treat priority as a prompt rather than a model.",
      architecture:
        "Classical ML does the ranking: TF-IDF features into LightGBM for priority scoring, which is fast, cheap, and explainable. LLMs handle generation only, behind a three-tier fallback chain: Ollama locally, then Groq, then OpenRouter. Gmail and Calendar integration plus a Chrome extension for in-inbox use.",
      decisions: [
        "LightGBM over an LLM for priority ranking — deterministic, near-free, and inspectable when a user asks why something was ranked high.",
        "Three fallback tiers rather than one provider with retries — provider outages are correlated with load spikes, which is exactly when retries fail.",
      ],
      tradeoffs: [
        "TF-IDF features do not capture thread semantics the way embeddings would; the win is latency and cost.",
        "Maintaining three provider integrations is real ongoing surface area.",
      ],
      outcome: "Deployed at nexus-mail.me with the full extension and integration surface.",
      honesty: "",
    },
  },

  {
    slug: "nanoserve",
    title: "NanoServe",
    tagline: "CPU-first LLM inference engine in C++, no GPU required.",
    year: "2026",
    status: "local",
    featured: true,
    lenses: ["swe"],
    order: { swe: 3 },
    tags: ["Systems", "C++", "Performance", "Inference"],
    stack: ["C++", "AVX2 / SIMD", "OpenMP", "pybind11", "FastAPI", "GGUF", "Q4_K_M"],
    metrics: [
      { label: "Target throughput", value: "25–50 tok/sec" },
      { label: "Hardware", value: "Intel i7, no GPU" },
      { label: "Roadmap", value: "6 phases" },
    ],
    links: [], // add repo when public
    summary:
      "An inference engine written from the metal up: GGUF parsed from scratch, Q4_K_M quantization, AVX2/SIMD kernels with OpenMP, exposed to Python through pybind11 behind an Ollama-compatible API.",
    caseStudy: {
      problem:
        "Most inference tooling assumes a GPU. On a normal laptop CPU, throughput collapses. I wanted to know exactly where the cycles go, which means writing the engine rather than benchmarking someone else's.",
      architecture:
        "Transformer implemented from scratch in C++ with hand-written AVX2/SIMD kernels parallelized with OpenMP. GGUF format parsed from scratch rather than linked against an existing loader. Q4_K_M quantization. A pybind11 layer exposes it to a FastAPI server presenting an Ollama-compatible API, so existing clients work unmodified.",
      decisions: [
        "GGUF parsed from scratch — the point of the project is understanding the format, not consuming it.",
        "Ollama-compatible API surface so it is a drop-in swap for testing rather than a new client ecosystem.",
        "Phased roadmap: transformer from scratch → KV-cache → continuous batching → token streaming → INT8 quantization → observability.",
      ],
      tradeoffs: [
        "Hand-written AVX2 means the kernels are tied to x86; ARM would need a rewrite.",
        "Writing the stack from scratch is slower to ship than wrapping llama.cpp, and that is the intended cost.",
      ],
      outcome: "In progress against the six-phase roadmap.",
      honesty:
        "Local-only and unreleased. The throughput figure is the target the design is built around, not a published benchmark — I will publish measured numbers when the KV-cache and batching phases land.",
    },
  },

  // --- index-only projects (no case study page) ---

  {
    slug: "sdam",
    title: "S-DAM",
    tagline: "Two-stage architecture research; an algebraic collapse of the model family.",
    year: "2026",
    status: "research",
    featured: false,
    lenses: ["ml"],
    order: { ml: 3 },
    tags: ["Research", "Paper Draft"],
    stack: ["PyTorch", "Colab A100"],
    metrics: [{ label: "Core identity", value: "score = r_q·r_i + α²·c_q·c_i" }],
    links: [{ label: "Repository", href: "https://github.com/Jaswanth-K1210/SDAM", kind: "repo" }],
    summary:
      "Pre-registered alpha-dial experiments on a two-stage architecture, showing the family reduces to a single scoring identity. Shape and objectness passed the gate bars, numerosity showed a clean dissociation, layout failed both. Paper draft complete; workshop submission pending.",
    caseStudy: null,
  },

  {
    slug: "resolviq",
    title: "ResolvIQ",
    tagline: "Dispute resolution where the LLM narrates but never judges.",
    year: "2026",
    status: "active",
    featured: false,
    lenses: ["swe", "ml"],
    order: { swe: 5, ml: 4 },
    tags: ["Fintech", "Hackathon", "Auditability"],
    stack: ["Next.js"],
    metrics: [],
    links: [{ label: "Repository", href: "https://github.com/Umesh-chandra-2006/ResolvIQ", kind: "repo" }],
    summary:
      "Built for CodeStreet 2026 (Amex, HackerEarth), Theme 1. A deterministic, auditable scoring engine produces the verdict; the LLM only narrates it, under a faithfulness guard. A hash-chained tamper-evident ledger prevents silent reversals. Scoped deliberately to disputes already raised — not fraud detection.",
    caseStudy: null,
  },

  {
    slug: "arc-agi-3",
    title: "ARC-AGI-3 Agents",
    tagline: "PPO + ICM multi-agent RL across 25 game environments.",
    year: "2026",
    status: "active",
    featured: false,
    lenses: ["ml"],
    order: { ml: 5 },
    tags: ["Reinforcement Learning", "Curiosity", "Kaggle"],
    stack: ["PPO", "ICM", "PyTorch", "Kaggle", "RTX PRO 6000 Blackwell"],
    metrics: [
      { label: "Environments", value: "25" },
      { label: "Scorecard", value: "b1d5bf44" },
      { label: "Agents running", value: "25 / 25" },
    ],
    links: [],
    summary:
      "Intrinsic-curiosity-driven PPO agents across 25 named ARC-AGI-3 environments, built cell-by-cell on Kaggle with no internet access. Active experiment, not a result — the policy is still near-random and the current work is verifying the PPO update path. Kaggle-only, not portable yet.",
    caseStudy: null,
  },

  {
    slug: "triagent-flow",
    title: "TriAgent-Flow",
    tagline: "Three-agent content governance pipeline, hardened against its own failure modes.",
    year: "2026",
    status: "shipped",
    featured: false,
    lenses: ["swe", "ml"],
    order: { swe: 6, ml: 6 },
    tags: ["Multi-Agent", "Internship", "n8n"],
    stack: ["Python", "n8n"],
    metrics: [{ label: "n8n workflow", value: "31 nodes" }],
    links: [],
    summary:
      "Humanizer → Auditor/Critic → Supervisor. Built during an internship and debugged through prompt injection, sentence duplication, protected-value corruption, hallucination, and concurrency failures, then ported to a 31-node n8n workflow.",
    caseStudy: null,
  },

  {
    slug: "sentiment-trader-analysis",
    title: "Sentiment Trader Analysis",
    tagline: "Hyperliquid trader behaviour against the Bitcoin Fear/Greed Index.",
    year: "2026",
    status: "shipped",
    featured: false,
    lenses: ["ml"],
    order: { ml: 7 },
    tags: ["Data Analysis", "Quant"],
    stack: ["Python", "pandas", "Jupyter"],
    metrics: [],
    links: [
      { label: "Repository", href: "https://github.com/Jaswanth-K1210/sentiment-trader-analysis", kind: "repo" },
    ],
    summary:
      "Primetrade.ai take-home. Full notebook analysis over real trade and sentiment CSVs. Key finding: profit per trade peaks during Extreme Greed regimes.",
    caseStudy: null,
  },

  {
    slug: "poolpay",
    title: "PoolPay",
    tagline: "Corporate spend governance with a dual-context fintech model.",
    year: "2025",
    status: "shipped",
    featured: false,
    lenses: ["swe"],
    order: { swe: 4 },
    tags: ["Fintech", "Backend", "Data Modelling"],
    stack: ["PostgreSQL", "Kafka", "Redis"],
    metrics: [],
    links: [],
    summary:
      "Spend governance where personal and corporate context share one ledger. Recursive PostgreSQL CTEs for approval-chain resolution, Kafka for event flow, Redis for hot-path caching.",
    caseStudy: null,
  },

  {
    slug: "stock-royale",
    title: "Stock Royale",
    tagline: "Market simulation project.",
    year: "2025",
    status: "shipped",
    featured: false,
    lenses: ["swe"],
    order: { swe: 7 },
    tags: ["Web App"],
    stack: [],
    metrics: [],
    links: [{ label: "Live", href: "https://stock-royale.vercel.app", kind: "live" }],
    summary: "", // fill in one line
    caseStudy: null,
  },

  {
    slug: "p2p-webrtc-chat",
    title: "P2P WebRTC Chat",
    tagline: "Peer-to-peer messaging with local-first storage.",
    year: "2025",
    status: "shipped",
    featured: false,
    lenses: ["swe"],
    order: { swe: 8 },
    tags: ["WebRTC", "Realtime"],
    stack: ["WebRTC", "Firebase Auth", "IndexedDB", "STUN/TURN"],
    metrics: [],
    links: [],
    summary:
      "Direct peer connections with STUN/TURN negotiation, Firebase-backed auth, and IndexedDB for offline-capable local message history.",
    caseStudy: null,
  },

  {
    slug: "fundly",
    title: "Fundly",
    tagline: "Crowdfunding platform.",
    year: "2025",
    status: "shipped",
    featured: false,
    lenses: ["swe"],
    order: { swe: 9 },
    tags: ["Web App"],
    stack: [],
    metrics: [],
    links: [{ label: "Live", href: "https://fundly.social", kind: "live" }],
    summary: "", // fill in one line
    caseStudy: null,
  },
];

// ---------------------------------------------------------------------------
// ACHIEVEMENTS — homepage strip
// ---------------------------------------------------------------------------
export const achievements = [
  {
    title: "Solo Finalist — Scaler × Meta × HuggingFace OpenEnv Hackathon",
    detail: "Bangalore. The only solo builder among the finalist teams",
    year: "Apr 2026",
    projectSlug: "injectarena",
  },
  {
    title: "Round 3, Flipkart GRiD 8.0",
    detail: "National engineering challenge",
    year: "2026",
  },
  {
    title: "CodeStreet 2026 — American Express",
    detail: "Theme 1 entry, ~9,000 teams",
    year: "2026",
    projectSlug: "resolviq",
  },
  {
    title: "Runner-up — IIT Hyderabad hackathon",
    // NAMING CONFLICT: an older CV said "Winner", a later resume said "Runner-up".
    // Reconcile this permanently before it goes anywhere else.
    detail: "Forge Alumni / Smart City",
    year: "2024",
  },
  {
    title: "ML Research Intern, IIIT Hyderabad / Swecha",
    detail: "Low-resource Telugu NLP",
    year: "2025",
  },
  {
    title: "Organizer — Microsoft × Reskilll college hackathon",
    detail: "300+ participants",
    year: "",
  },
  {
    title: "300+ LeetCode problems solved",
    detail: "Top 15 in university batch",
    year: "",
  },
  {
    title: "J.P. Morgan Software Engineering Virtual Experience",
    detail: "",
    year: "2024",
  },
  {
    title: "CGPA 8.7",
    detail: "B.Tech CSE, Anurag University",
    year: "Current",
  },
];

// ---------------------------------------------------------------------------
// EXPERIENCE
// ---------------------------------------------------------------------------
export const experience = [
  {
    role: "Co-founder & Software Developer",
    org: "Kriaa Systems",
    orgNote: "Game development studio",
    period: "Nov 2024 – Sep 2025",
    points: [
      "Co-founded the studio and built its engineering side.",
      "Ten months shipping production software alongside a full course load.",
    ],
  },
  {
    role: "ML Research Intern",
    org: "IIIT Hyderabad / Swecha",
    orgNote: "Low-resource Telugu NLP",
    period: "May – Jun 2025",
    points: [
      "Owned end-to-end ML workflows: training pipelines, hyperparameter search, and preprocessing.",
      "Built automated preprocessing and annotation pipelines to standardise dataset preparation.",
      "Collected, cleaned, and force-aligned 100,000+ Telugu text lines and 50+ hours of speech for ASR training.",
      "Shipped Flask and Streamlit demo interfaces so researchers could use the models without touching code.",
    ],
  },
];

// ---------------------------------------------------------------------------
// RESEARCH
// ---------------------------------------------------------------------------
export const research = [
  {
    title: "S-DAM — Spelke-Seeded Dense Associative Memory",
    status: "Paper draft complete — workshop submission pending",
    summary:
      "Spelke's number system encoded as frozen seeded attractors in a Modern Hopfield / Dense Associative Memory substrate, with new content stored as residual offsets from those seeds. A prior-art sweep reduced the original three-module design to this single defensible novelty kernel. Pre-registered alpha-dial experiments show the architecture family collapses to one scoring identity; the theory rests on a residual-capacity lemma adapted from Demircigil et al. (2017).",
    collaborator: "With Umesh",
    projectSlug: "sdam",
    /* Verdicts are reported as run, including the ones that did not work. */
    findings: [
      { probe: "Shape", verdict: "Passed the gate bars", outcome: "pass" },
      { probe: "Objectness", verdict: "Passed the gate bars", outcome: "pass" },
      { probe: "Numerosity", verdict: "Clean dissociation — the novel contribution", outcome: "mixed" },
      { probe: "Layout", verdict: "Failed both gates", outcome: "fail" },
      { probe: "FactoredSDAM", verdict: "Partial fix — deliberately not rounded up to a win", outcome: "mixed" },
    ],
  },
  {
    title: "Energy-regularized neural dynamics",
    // Status deliberately states what exists, not what is intended. "Targeting a
    // submission" is an intention, and reviewers discount it to zero.
    status: "Plan and framing complete — experiments not yet run",
    summary:
      "Hamiltonian mechanics with energy regularization applied to learned neural dynamics. The open question is not the energy penalty itself — the field has moved to hard architectural constraints — but a systematic comparison of adaptive loss weighting methods: ReLoBRaLo, GradNorm, AL-PINNs, and uncertainty weighting, across four physical systems.",
    collaborator: "",
    projectSlug: null,
    findings: [],
  },
];

// ---------------------------------------------------------------------------
// SKILLS — proof map
// RULE: every skill must have at least one proofSlug. No proof, no entry.
// No percentage bars, no star ratings.
// ---------------------------------------------------------------------------
export const skills = [
  // Languages
  { name: "Python", group: "Languages", lenses: ["swe", "ml"], proofSlugs: ["marketpulse", "injectarena", "arc-agi-3"] },
  { name: "C++", group: "Languages", lenses: ["swe"], proofSlugs: ["nanoserve"] },
  { name: "TypeScript / JavaScript", group: "Languages", lenses: ["swe"], proofSlugs: ["nexus-mail", "resolviq", "marketpulse"] },
  { name: "SQL", group: "Languages", lenses: ["swe"], proofSlugs: ["poolpay", "marketpulse"] },

  // ML / AI
  { name: "PyTorch", group: "ML / AI", lenses: ["ml"], proofSlugs: ["injectarena", "sdam", "arc-agi-3"] },
  { name: "GRPO / RLHF-style training", group: "ML / AI", lenses: ["ml"], proofSlugs: ["injectarena"] },
  { name: "PPO + ICM", group: "ML / AI", lenses: ["ml"], proofSlugs: ["arc-agi-3"] },
  { name: "LoRA fine-tuning", group: "ML / AI", lenses: ["ml"], proofSlugs: ["injectarena"] },
  { name: "LangGraph multi-agent", group: "ML / AI", lenses: ["ml", "swe"], proofSlugs: ["marketpulse", "triagent-flow"] },
  { name: "LightGBM / classical ML", group: "ML / AI", lenses: ["ml", "swe"], proofSlugs: ["nexus-mail"] },
  { name: "Quantization (GGUF, Q4_K_M)", group: "ML / AI", lenses: ["ml", "swe"], proofSlugs: ["nanoserve"] },

  // Backend
  { name: "FastAPI", group: "Backend", lenses: ["swe", "ml"], proofSlugs: ["marketpulse", "nanoserve"] },
  { name: "PostgreSQL", group: "Backend", lenses: ["swe"], proofSlugs: ["poolpay"] },
  { name: "Redis", group: "Backend", lenses: ["swe"], proofSlugs: ["marketpulse", "poolpay"] },
  { name: "Kafka", group: "Backend", lenses: ["swe"], proofSlugs: ["poolpay"] },

  // Frontend
  { name: "React", group: "Frontend", lenses: ["swe"], proofSlugs: ["marketpulse", "nexus-mail"] },
  { name: "Next.js", group: "Frontend", lenses: ["swe"], proofSlugs: ["resolviq"] },

  // Systems & Infra
  { name: "AVX2 / SIMD + OpenMP", group: "Systems & Infra", lenses: ["swe"], proofSlugs: ["nanoserve"] },
  { name: "Docker", group: "Systems & Infra", lenses: ["swe"], proofSlugs: ["marketpulse"] },
  { name: "Kubernetes", group: "Systems & Infra", lenses: ["swe"], proofSlugs: ["marketpulse"] },
  { name: "CI/CD (GitHub Actions)", group: "Systems & Infra", lenses: ["swe"], proofSlugs: ["marketpulse"] },
  { name: "WebRTC", group: "Systems & Infra", lenses: ["swe"], proofSlugs: ["p2p-webrtc-chat"] },
];

// ---------------------------------------------------------------------------
// WORKING KNOWLEDGE
// Used, but not to a depth any project on this site proves. Rendered as a
// plain tag row, visually separate from the proof map above: no links, no
// groups, no proof. Excluded from the validator by design.
// Keeping this honest is the point — it is the counterweight to the proof map.
// ---------------------------------------------------------------------------
export const workingKnowledge = ["Java", "MongoDB", "React Native", "AWS"];

// ---------------------------------------------------------------------------
// SEO
// ---------------------------------------------------------------------------
export const seo = {
  title: "Jaswanth Koppisetty — ML Systems & Infrastructure Engineer",
  description:
    "CS engineer building multi-agent pipelines, CPU-first LLM inference, and reinforcement-learning security research. Hyderabad, India.",
  siteUrl: "https://jaswanthkoppisetty.codes",
  ogImage: "/og/default.png",
  keywords: [
    "Jaswanth Koppisetty",
    "ML engineer",
    "multi-agent systems",
    "LLM inference",
    "reinforcement learning security",
  ],
};

// ---------------------------------------------------------------------------
// DERIVED HELPERS
// ---------------------------------------------------------------------------
export const getFeatured = () => projects.filter((p) => p.featured);

export const getByLens = (lensId) =>
  projects
    .filter((p) => p.lenses.includes(lensId))
    .sort((a, b) => (a.order?.[lensId] ?? 99) - (b.order?.[lensId] ?? 99));

export const getProject = (slug) => projects.find((p) => p.slug === slug);

export const getSkillsByLens = (lensId) =>
  skills.filter((s) => s.lenses.includes(lensId) && s.proofSlugs.length > 0);
