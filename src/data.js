// ============================================================================
// data.js — single source of truth for the entire portfolio.
// Components must read from here. Never hardcode content in a component.
// To update the site: edit this file only.
//
// RULE: every number in this file is real and traceable. Do not add a metric
// you cannot point to a repo, log, or scorecard for.
//
// RULE: every project here is one I built, and every one either has a public
// repo or a live URL. If it has neither, it does not go on the site.
// ============================================================================

// ---------------------------------------------------------------------------
// PROFILE
// ---------------------------------------------------------------------------
export const profile = {
  name: "Jaswanth Koppisetty",
  headline: "I build production web platforms and the ML systems inside them.",
  subheadline:
    "Payments, real-time products, and multi-agent pipelines — shipped on Go, Node, React, and PyTorch.",
  location: "Hyderabad, India",
  status: "Open to SDE/SWE and AI/ML engineer roles — 2026 internships, 2027 full-time",
  education: {
    degree: "B.Tech, Computer Science & Engineering",
    institution: "Anurag University, Hyderabad",
    graduation: "May 2027",
    batch: "2023–2027",
    cgpa: "8.65",
  },
  languages: [
    "English (fluent)",
    "Telugu (native)",
    "Hindi (conversational)",
    "Japanese (basic)",
  ],
  email: "koppisettyjaswanth@gmail.com",
  resumeUrl: "https://drive.google.com/file/d/1nJMwZMxINkoYlLmPG21poKVkloMfAB_-/view",
};

// ---------------------------------------------------------------------------
// ABOUT
// The prose is the only long-form writing on the site, so it earns the serif.
// `stack` renders as a syntax-highlighted declaration. It is real data, not a
// decorative code block: every entry below also appears in `skills` with a
// proofSlug behind it. If a technology is not in `skills`, it does not belong
// here either.
// ---------------------------------------------------------------------------
export const about = {
  paragraphs: [
    "Hi, I'm Jaswanth. Final year CS in Hyderabad. I like building things people actually end up using, which usually means I touch all of it: the API, the database under it, the screen on top, and more and more the model somewhere in the middle.",
    "Go, TypeScript and Python are where I spend most of my time. I'm happiest on problems with a real constraint attached, like a latency budget, a hosting bill I don't want creeping up, or a queue that isn't allowed to drop a payment. Those are the fun ones.",
    "One thing about this site: everything on it links to the project that proves it. If there's no proof, it says so. Felt like the honest way to build it.",
  ],

  // The pane types through `roles` one at a time. They are the actual titles
  // being applied for, not a wishlist — keep this list honest.
  availability: {
    filename: "status.ts",
    declaration: "status",
    roles: [
      "SDE / SWE Intern",
      "Full-Stack Engineer",
      "Backend Engineer",
      "AI / ML Engineer",
    ],
    start: "2026 internship · 2027 full-time",
    stack: ["Go", "TypeScript", "Python", "React", "PyTorch"],
  },
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
// HERO ORBIT
// What circles the portrait. Inner ring is profiles, outer ring is live work.
//
// Order sets position around the ring, and COUNT sets how often something
// comes past the front. If the orbit feels empty, add a node here rather than
// speeding the rotation up — the period is shared with the ring geometry and
// winding it up makes the whole system look frantic.
//
// `project` resolves to that project's live link, so a URL is never written
// twice. `link` reads a profile straight off `links` above.
// ---------------------------------------------------------------------------
export const orbit = {
  inner: [
    { link: "linkedin", label: "LinkedIn", icon: "linkedin" },
    { link: "github", label: "GitHub", icon: "github" },
    { link: "leetcode", label: "LeetCode", icon: "code" },
  ],
  outer: [
    { project: "nexus-mail", icon: "mail" },
    { project: "marketpulse", icon: "activity" },
    { project: "fundly", icon: "coins" },
    { link: "huggingface", label: "HuggingFace", icon: "boxes" },
  ],
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
      "Systems, scale, and cost. Payments that move real money, real-time products, and services owned end to end.",
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
    slug: "communityspaces",
    title: "CommunitySpaces",
    tagline: "Booking and payments platform for events and vendor stalls, owned end to end.",
    year: "2025",
    status: "shipped",
    featured: true,
    lenses: ["swe"],
    order: { swe: 1 },
    tags: ["Full Stack", "Payments", "Client Delivery", "Go"],
    stack: [
      "Go",
      "Gin",
      "React",
      "TypeScript",
      "React Native",
      "Razorpay",
      "Auth0",
      "Docker Compose",
      "Swagger",
    ],
    metrics: [
      { label: "p95 latency", value: "340ms → 170ms" },
      { label: "Architecture layers", value: "4 — domain, usecase, repository, handler" },
      { label: "RBAC tiers", value: "3" },
      { label: "Clients", value: "Web + React Native" },
    ],
    links: [{ label: "Live", href: "https://communityspaces.in", kind: "live" }],
    summary:
      "Delivered through Kriaa Systems, the studio I co-founded. A Go/Gin backend in clean architecture behind a TypeScript admin console and a React Native client, with Razorpay payments, Auth0 authentication, and a configurable per-booking commission engine. I owned the backend end to end.",
    caseStudy: {
      problem:
        "Event organisers were tracking vendor stall bookings and the money attached to them across spreadsheets and manual transfers. The product needed to take real payments, split commission per booking, and give organisers, vendors, and admins each a different view of the same data.",
      architecture:
        "A Go/Gin backend layered as domain, usecase, repository, and handler, so payment rules stay independent of transport and storage. Razorpay handles money movement, Auth0 handles identity, and a three-tier role-based access control layer separates admin, organiser, and vendor. A React/TypeScript admin console and a React Native mobile client sit on top. Every service is containerised with Docker Compose and the API surface is documented in Swagger.",
      decisions: [
        "Clean architecture over a flat handler layout — a commission engine that changes per client should not require touching HTTP code.",
        "Auth0 rather than rolling authentication — identity is where a payments product gets breached, and it was not the part worth writing myself.",
        "Composite indexes plus connection pooling instead of a cache layer — the slow endpoints were slow from query plans and connection churn, not from repeated reads.",
      ],
      tradeoffs: [
        "Clean layering costs real boilerplate on a small team; it paid off when the commission rules changed, and cost time before that.",
        "Two clients (web and React Native) sharing one API means every contract change is a two-front change.",
      ],
      outcome:
        "Deployed for client use at communityspaces.in. p95 latency on the busiest endpoints dropped from 340ms to 170ms after the indexing and pooling work.",
      honesty:
        "This was client delivery, not a product I own, so the repository is private and what you can see is the running site. The latency numbers come from our own instrumentation, not a third-party benchmark.",
    },
  },

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
    stack: ["Qwen2.5-1.5B", "LoRA", "GRPO", "TRL", "vLLM", "PyTorch", "HuggingFace"],
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
    ],
    summary:
      "Solo finalist at the Scaler × Meta × HuggingFace OpenEnv Hackathon, Bangalore (April 2026) — the only solo builder among the finalist teams. An attacker policy trained with GRPO to discover prompt injections against production guardrails, shipped as a plug-and-play OpenEnv environment with a PII safety filter at every step.",
    caseStudy: {
      problem:
        "Prompt-injection defenses are evaluated against hand-written attacks, which means coverage is bounded by the imagination of whoever wrote the test set. The question was whether an RL agent could find bypasses that a human red-teamer would not.",
      architecture:
        "Qwen2.5-1.5B fine-tuned with LoRA adapters and trained with GRPO (via TRL, served through vLLM) against a frozen Meta defense stack (LlamaFirewall, Prompt Guard 2, SecAlign). The defense stack is never updated during training, so reward signal comes purely from the attacker discovering new bypass surface. A multi-signal reward scores per-defense bypass, task success, and stealth.",
      decisions: [
        "GRPO over PPO — no separate value network, cheaper on a small model with a sparse binary-ish reward.",
        "LoRA over full fine-tuning — kept the run inside a single-GPU budget and made adapter-swapping between attack strategies trivial.",
        "Froze the defense stack rather than co-training — the goal was measuring defense coverage, not an arms race.",
        "Packaged as an OpenEnv environment with a PII filter on every step, so the artifact is reusable and cannot leak real personal data.",
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
    slug: "fundly",
    title: "Fundly",
    tagline: "MERN crowdfunding platform moving real money, deployed on AWS.",
    year: "2026",
    status: "shipped",
    featured: true,
    lenses: ["swe"],
    order: { swe: 2 },
    tags: ["Full Stack", "Payments", "MERN", "Production"],
    stack: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Zustand",
      "Node.js",
      "Express",
      "MongoDB",
      "Mongoose",
      "Razorpay",
      "Cloudinary",
      "PDFKit",
      "Nodemailer",
      "Docker",
      "AWS",
      "Nginx",
    ],
    metrics: [
      { label: "Payment flow stages", value: "4 — order, verify, persist, invoice" },
      { label: "Roles", value: "Admin / User" },
      { label: "Deployment", value: "AWS + Nginx reverse proxy" },
    ],
    links: [
      { label: "Live", href: "https://fundly.social", kind: "live" },
      { label: "Repository", href: "https://github.com/Jaswanth-K1210/CrowdFunding-Platform", kind: "repo" },
    ],
    summary:
      "A crowdfunding platform where campaigns are created, moderated, funded, and withdrawn against. Razorpay handles the money across order creation, signature verification, persistence, and automated PDF invoices, behind JWT auth and role-based access, deployed on AWS behind an Nginx reverse proxy.",
    caseStudy: {
      problem:
        "A crowdfunding product is not really a donations form — it is an approval workflow with money attached. Campaigns need moderation before they go live, donations need verifiable receipts, and withdrawals need an admin gate, or the platform becomes a way to launder attention into cash.",
      architecture:
        "React + Vite + Tailwind on the front, Zustand for client state, talking to a Node/Express API over MongoDB and Mongoose. Razorpay drives payments through order creation, signature verification, donation persistence, and PDFKit invoice generation, with Nodemailer sending receipts and Cloudinary holding campaign media. Withdrawal requests run through an admin approval queue. Security is Helmet headers, API rate limiting, Mongo payload sanitisation, CORS with credentials, and centralised error handling, with Winston for logs and a health probe endpoint.",
      decisions: [
        "Verify the Razorpay signature server-side before persisting a donation — a client-reported success is not a payment.",
        "Withdrawals as an explicit approval workflow rather than instant payout, because the fraud surface on crowdfunding is the withdrawal, not the donation.",
        "Payload sanitisation and rate limiting from the start — the endpoints that take money are the ones that get probed.",
      ],
      tradeoffs: [
        "MongoDB is fast to build campaign documents in and gives up the transactional guarantees a ledger really wants.",
        "PDF invoices generated inline on the request path are simple, and would need a queue if volume rose.",
      ],
      outcome:
        "Live at fundly.social on AWS behind Nginx, with the full campaign, donation, invoice, and withdrawal flow working end to end.",
      honesty:
        "Traffic has been small, so the rate limiting and connection handling are correct by construction rather than proven under load. I have no throughput numbers worth quoting.",
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
    order: { swe: 3, ml: 2 },
    tags: ["Multi-Agent", "OSINT", "Infrastructure", "Open Source"],
    stack: [
      "Python",
      "FastAPI",
      "LangGraph",
      "Celery",
      "Redis",
      "PostgreSQL",
      "React",
      "D3.js",
      "Docker",
      "Kubernetes",
    ],
    metrics: [
      { label: "Agent graph", value: "6 nodes" },
      { label: "Articles / day", value: "500–2,000" },
      { label: "Curated feeds", value: "110" },
      { label: "API surface", value: "18+ endpoints" },
      { label: "Impact framework", value: "10 factors" },
      { label: "License", value: "MIT" },
    ],
    links: [
      { label: "Live", href: "https://market-pulse-jet.vercel.app", kind: "live" },
      { label: "Repository", href: "https://github.com/Jaswanth-K1210/MarketPulse", kind: "repo" },
    ],
    summary:
      "A six-agent LangGraph pipeline that monitors news, discovers supply-chain relationships from SEC filings, and scores portfolio impact across ten factors. Async ingestion on FastAPI, Redis, and Celery processes 500–2,000 articles a day, with a FinBERT sentiment stage feeding an interactive D3.js risk visualisation.",
    caseStudy: {
      problem:
        "Commercial supply-chain and financial risk intelligence platforms (Interos, Resilinc, Everstream) price at enterprise tiers. The question was how much of that signal can be reconstructed from open sources on a student budget.",
      architecture:
        "Six LangGraph agents — news monitor, event classifier, portfolio matcher, dynamic discovery, impact calculator, and confidence validator — run over 110 curated feeds plus NewsAPI and Finnhub. The dynamic discovery agent parses SEC EDGAR 10-K filings to extract supplier and customer relationships, then fuses them with news and LLM knowledge. The confidence validator closes an autonomous loop: below 70% confidence it identifies gaps, generates refined queries, and sends the graph back for more data, capped at three iterations. FastAPI exposes 18+ endpoints over PostgreSQL and Redis, with Celery workers handling ingestion under rate-aware retry and exponential backoff. A React frontend renders supplier risk through D3.js.",
      decisions: [
        "Scheduled batch runs into a shared cache rather than per-user compute — this is what collapses steady-state infrastructure spend to near zero.",
        "SEC filings as the relationship backbone with news as corroboration, because filings are the highest-confidence source available for free.",
        "A bounded agentic loop with a hard iteration cap — self-refining agents without a cap are a billing incident waiting to happen.",
      ],
      tradeoffs: [
        "A shared pipeline means no per-user customization of the watch list without a rearchitecture.",
        "Rate-aware retry keeps the graph alive on flaky upstreams and makes end-to-end latency hard to predict.",
      ],
      outcome:
        "Deployed and open under MIT, packaged for Kubernetes. The infrastructure and agent orchestration layer are complete; the intelligence layer is the current work.",
      honesty:
        "The scoring layer is still hardcoded multipliers, not a trained model — roughly 40% of the intended intelligence layer. I do not publish accuracy figures for it, because heuristic multipliers do not earn one. Replacing them with a trained, backtested model is the active work.",
    },
  },

  {
    slug: "stock-royale",
    title: "Stock Royale",
    tagline: "Real-time multiplayer trading game on live market data.",
    year: "2026",
    status: "shipped",
    featured: true,
    lenses: ["swe"],
    order: { swe: 4 },
    tags: ["Full Stack", "Real-Time", "WebSockets", "Fintech"],
    stack: [
      "React 19",
      "Vite",
      "Tailwind CSS",
      "Zustand",
      "Recharts",
      "Node.js",
      "Express",
      "Socket.io",
      "MongoDB",
      "Mongoose",
      "JWT",
      "Nodemailer",
    ],
    metrics: [
      { label: "Markets", value: "NSE / BSE + US" },
      { label: "Price sources", value: "Finnhub + Yahoo Finance" },
      { label: "Realtime channels", value: "Trade feed + leaderboard" },
      { label: "Deployment", value: "Render + Vercel + Atlas" },
    ],
    links: [
      { label: "Live", href: "https://stock-royale.vercel.app", kind: "live" },
      { label: "Repository", href: "https://github.com/Jaswanth-K1210/Stock-Royale", kind: "repo" },
    ],
    summary:
      "Players join a room with a starting balance and trade real Indian and US equities against each other on a timer; highest portfolio value when the clock runs out wins. Socket.io drives a live trade feed and leaderboard, with OTP email registration, JWT over HttpOnly cookies, and an AI trading assistant on OpenRouter with a Groq fallback.",
    caseStudy: {
      problem:
        "Paper-trading apps are solitary and unurgent. Making trading competitive and time-boxed turns it into a game, but it also means every client must agree on prices and standings within the same second, against market data that costs money and rate-limits aggressively.",
      architecture:
        "A Node/Express backend over MongoDB with Socket.io for room events, authenticated at the socket layer rather than trusting client identity. Prices come from Finnhub for US equities and Yahoo Finance for Indian listings, behind a price service that falls back between them. News aggregates across Newsdata.io, MarketAux, and Alpha Vantage with provider fallback and cooldown. The React 19 frontend uses Zustand for game state, Recharts for price charts, and Axios interceptors for token refresh. Registration is OTP over Nodemailer; sessions are JWT in HttpOnly cookies with a localStorage fallback.",
      decisions: [
        "Authenticate the Socket.io handshake, not just the REST API — a game with a leaderboard is a game people will try to spoof.",
        "Provider fallback on both prices and news rather than a single vendor, because free tiers rate-limit exactly when a room is busiest.",
        "HttpOnly cookies primary with a token fallback — the fallback exists for cross-origin deploys between Vercel and Render, not as the default.",
      ],
      tradeoffs: [
        "Yahoo Finance is unofficial and can change shape without notice; it is the price of covering NSE/BSE for free.",
        "Room state in MongoDB rather than Redis is simpler to reason about and would need moving if concurrent rooms scaled up.",
      ],
      outcome:
        "Deployed with the full loop working: room creation, live trading on real prices, realtime leaderboard, and end-of-round results.",
      honesty:
        "Tested with small rooms among friends. I have not load-tested concurrent rooms, so the socket layer is unproven past a handful of simultaneous players.",
    },
  },

  {
    slug: "nexus-mail",
    title: "Nexus Mail",
    tagline: "Seven-agent email intelligence platform with multi-tier memory.",
    year: "2026",
    status: "shipped",
    featured: true,
    lenses: ["swe", "ml"],
    order: { swe: 5, ml: 3 },
    tags: ["Multi-Agent", "Full Stack", "Agentic AI", "Product"],
    stack: [
      "Python",
      "FastAPI",
      "React",
      "MongoDB",
      "LangGraph-style orchestration",
      "Groq",
      "Llama 3",
      "Gmail API",
    ],
    metrics: [
      { label: "Agents", value: "7 specialised" },
      { label: "Memory tiers", value: "4 — short, long, episodic, semantic" },
      { label: "Data retention", value: "Zero" },
      { label: "License", value: "MIT" },
    ],
    links: [
      {
        label: "Live",
        href: "https://nexus-mail.me",
        kind: "live",
        note: "Cold start — the instance sleeps when idle and can take a moment to wake.",
      },
      { label: "Repository", href: "https://github.com/Jaswanth-K1210/Nexus-Mail", kind: "repo" },
    ],
    summary:
      "An email operations platform that runs seven specialised agents through a stateful execution graph to triage, analyse, and act on incoming mail. A triage agent routes; meeting, action, security, and summariser agents run in parallel; response and memory agents close the loop — all under a strict zero-retention policy.",
    caseStudy: {
      problem:
        "Most email assistants are one prompt wrapped around an inbox. That collapses triage, extraction, drafting, and security judgement into a single call, so a bad classification silently poisons everything downstream and nothing is inspectable after the fact.",
      architecture:
        "An orchestrator engine executes a stateful agent graph. A triage agent classifies first and can short-circuit spam to a fast path. Meeting detection branches out, then action extraction, security screening, and summarisation run in parallel before a response agent drafts and a memory agent writes back. Memory is tiered — short-term for the current thread, long-term and episodic in MongoDB, semantic for retrieval — so agents share context without re-reading the mailbox. FastAPI serves a React frontend; Groq with Llama 3 handles generation.",
      decisions: [
        "A graph with a triage gate rather than a linear pipeline — most mail deserves the fast path, and paying seven agents for a newsletter is how these systems get expensive.",
        "Parallel execution for the independent agents (action, security, summariser) since none depends on another's output.",
        "Zero data retention as an architectural constraint rather than a policy line — memory holds derived state, not message bodies.",
      ],
      tradeoffs: [
        "Seven agents give inspectable stages and cost more tokens and latency than one call would.",
        "Tiered memory is genuinely useful and is real complexity to debug when an agent acts on stale context.",
      ],
      outcome: "Deployed at nexus-mail.me, open source under MIT.",
      honesty:
        "The orchestration is 'LangGraph-inspired' rather than LangGraph — I wrote the execution graph myself. I have no benchmark comparing its triage accuracy against a single-prompt baseline, which is the comparison that would actually justify the architecture.",
    },
  },

  // --- index-only projects (no case study page) ---

  {
    slug: "p2p-webrtc-chat",
    title: "P2P Group Chat",
    tagline: "WebRTC group messaging where the server never sees a message.",
    year: "2025",
    status: "shipped",
    featured: false,
    lenses: ["swe"],
    order: { swe: 6 },
    tags: ["WebRTC", "Realtime", "Full Stack", "Privacy"],
    stack: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "MongoDB",
      "WebRTC",
      "Firebase Auth",
      "IndexedDB",
    ],
    metrics: [
      { label: "Max participants", value: "10 per room" },
      { label: "Server-side messages", value: "0" },
    ],
    links: [{ label: "Repository", href: "https://github.com/Jaswanth-K1210/ChatApp", kind: "repo" }],
    summary:
      "Rooms with codes, optional passwords, IP access control, and auto-expiry. Messages travel peer-to-peer over WebRTC and persist only in each client's IndexedDB — the Node/Express/MongoDB backend holds authentication and room metadata, and handles signalling plus cleanup of expired rooms.",
    caseStudy: null,
  },

  {
    slug: "cloudsense",
    title: "CloudSense",
    tagline: "OpenEnv RL benchmark for FinOps agents on cloud cost optimization.",
    year: "2026",
    status: "shipped",
    featured: false,
    lenses: ["ml", "swe"],
    order: { ml: 4, swe: 9 },
    tags: ["Reinforcement Learning", "Benchmark", "FinOps", "OpenEnv"],
    stack: ["Python", "Docker", "OpenEnv", "HuggingFace Spaces"],
    metrics: [
      { label: "Pricing data", value: "Real AWS us-east-1, Q1 2025" },
      { label: "Hardest scenario", value: "40 interdependent resources" },
    ],
    links: [{ label: "Repository", href: "https://github.com/Jaswanth-K1210/cloudsense", kind: "repo" }],
    summary:
      "Simulates AWS accounts with real on-demand pricing and dependency graphs, then asks agents to cut waste without breaking production. A blast-radius mechanic surfaces cascading impact — terminating a load balancer disconnects the instances behind it — so the agent must reason about dependencies before acting.",
    caseStudy: null,
  },

  {
    slug: "cv-tailor",
    title: "CV Tailor",
    tagline: "Desktop app that rewrites your CV against a job posting until it scores.",
    year: "2026",
    status: "shipped",
    featured: false,
    lenses: ["swe", "ml"],
    order: { swe: 7, ml: 8 },
    tags: ["Desktop App", "Automation", "LLM Tooling"],
    stack: ["Python", "Playwright", "Claude Code", "Gemini CLI", "Codex CLI"],
    metrics: [
      { label: "ATS score target", value: "85+, auto-iterated" },
      { label: "Engines", value: "3 — Claude, Gemini, Codex" },
    ],
    links: [{ label: "Repository", href: "https://github.com/Jaswanth-K1210/CV-Tailor", kind: "repo" }],
    summary:
      "Cross-platform desktop app that fetches a job description — auto-detecting Greenhouse and Lever, falling back to Playwright for JS-rendered pages — then generates an ATS-optimised CV, scores it on keyword and formatting checks, and loops until it clears 85. Exports a one-page PDF.",
    caseStudy: null,
  },

  {
    slug: "mail-x",
    title: "Mail-X",
    tagline: "Autonomous inbox agent as a Chrome extension over a local backend.",
    year: "2026",
    status: "shipped",
    featured: false,
    lenses: ["swe", "ml"],
    order: { swe: 8, ml: 9 },
    tags: ["Chrome Extension", "Automation", "Privacy"],
    stack: ["Python", "FastAPI", "Chrome Extension MV3", "IMAP/SMTP", "Mistral-7B", "OpenRouter"],
    metrics: [{ label: "Scheduler", value: "User-defined, from 1 min" }],
    links: [{ label: "Repository", href: "https://github.com/Jaswanth-K1210/mail-x", kind: "repo" }],
    summary:
      "Triages meeting requests and support queries out of promotional noise, then drafts replies in the user's tone. A Manifest V3 Chrome extension drives a local FastAPI backend over IMAP/SMTP, so credentials and mail never leave the user's machine — the LLM call goes out through the user's own OpenRouter key.",
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
    order: { swe: 10, ml: 6 },
    tags: ["Fintech", "Hackathon", "Auditability", "Team"],
    stack: ["Next.js"],
    metrics: [],
    links: [{ label: "Repository", href: "https://github.com/Umesh-chandra-2006/ResolvIQ", kind: "repo" }],
    summary:
      "Built with a team for CodeStreet 2026 (Amex, HackerEarth), Theme 1. A deterministic, auditable scoring engine produces the verdict; the LLM only narrates it, under a faithfulness guard. A hash-chained tamper-evident ledger prevents silent reversals. Scoped deliberately to disputes already raised — not fraud detection.",
    caseStudy: null,
  },

  {
    slug: "sdam",
    title: "S-DAM",
    tagline: "Two-stage architecture research; an algebraic collapse of the model family.",
    year: "2026",
    status: "research",
    featured: false,
    lenses: ["ml"],
    order: { ml: 5 },
    tags: ["Research", "Paper Draft"],
    stack: ["PyTorch", "Colab A100"],
    metrics: [{ label: "Core identity", value: "score = r_q·r_i + α²·c_q·c_i" }],
    links: [{ label: "Repository", href: "https://github.com/Jaswanth-K1210/SDAM", kind: "repo" }],
    summary:
      "Pre-registered alpha-dial experiments on a two-stage architecture, showing the family reduces to a single scoring identity. Shape and objectness passed the gate bars, numerosity showed a clean dissociation, layout failed both. Paper draft complete; workshop submission pending.",
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
    order: { ml: 7 },
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
    slug: "satellite-imagery",
    title: "Satellite Image Quality & Land Use",
    tagline: "Two-stage pipeline: triage tiles, then extract structured land-use metadata.",
    year: "2026",
    status: "shipped",
    featured: false,
    lenses: ["ml"],
    order: { ml: 10 },
    tags: ["Computer Vision", "VLM", "Pipeline"],
    stack: ["PyTorch", "EfficientNet-B0", "ResNet-18", "LoRA", "PEFT", "albumentations", "W&B"],
    metrics: [
      { label: "Quality classes", value: "4 — clean, cloudy, hazy, noisy" },
      { label: "Extracted fields", value: "land use, water, vegetation, urban score" },
    ],
    links: [
      { label: "Repository", href: "https://github.com/Jaswanth-K1210/satellite-imagery-info", kind: "repo" },
    ],
    summary:
      "Stage one classifies tile quality with an EfficientNet/ResNet backbone under heavy augmentation, including synthetic cloud overlays, tracked in Weights & Biases. Stage two fine-tunes a small vision-language model with LoRA to emit structured JSON per tile — land use, water presence, vegetation density, urban score.",
    caseStudy: null,
  },

  {
    slug: "orange-workflow-runner",
    title: "ML Workflow Runner",
    tagline: "Executes Orange .ows workflows programmatically across 15+ model families.",
    year: "2025",
    status: "shipped",
    featured: false,
    lenses: ["ml", "swe"],
    order: { ml: 11, swe: 11 },
    tags: ["Classical ML", "Tooling", "Automation"],
    stack: ["Python", "scikit-learn", "pandas", "ReportLab"],
    metrics: [
      { label: "Model pipelines", value: "15+ classification & regression" },
      { label: "Input formats", value: "CSV, TAB, Excel" },
    ],
    links: [
      { label: "Repository", href: "https://github.com/Jaswanth-K1210/Orange-Report-Generator", kind: "repo" },
    ],
    summary:
      "Parses Orange workflow files, identifies the model widgets inside them, and runs each as a real pipeline — SVM, logistic regression, KNN, naive Bayes, decision tree, random forest, gradient boosting, AdaBoost, MLP, and stacking — with automatic preprocessing for missing values and categorical encoding, then generates PDF certificates for high-performing models.",
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
    order: { ml: 12 },
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
    slug: "drug-detection",
    title: "Drug Detection Pipeline",
    tagline: "End-to-end classification pipeline over a biomedical dataset.",
    year: "2025",
    status: "shipped",
    featured: false,
    lenses: ["ml"],
    order: { ml: 13 },
    tags: ["Classical ML", "Notebook", "Explainability"],
    stack: ["Python", "scikit-learn", "Google Colab"],
    metrics: [],
    links: [
      { label: "Repository", href: "https://github.com/Jaswanth-K1210/drug-detection-app", kind: "repo" },
    ],
    summary:
      "Preprocessing, feature selection, and encoding into logistic regression, random forest, and SVM under cross-validation, reported with precision, recall, F1, and confusion matrices, plus feature-importance explainability.",
    caseStudy: null,
  },

  {
    slug: "car-number-detection",
    title: "Car Number Plate Detection",
    tagline: "Detection and OCR for Indian vehicle number plates.",
    year: "2025",
    status: "shipped",
    featured: false,
    lenses: ["ml"],
    order: { ml: 14 },
    tags: ["Computer Vision", "OCR"],
    stack: ["Python", "OpenCV", "OCR"],
    metrics: [{ label: "Detection accuracy", value: "92%+ on tested datasets" }],
    links: [
      { label: "Repository", href: "https://github.com/Jaswanth-K1210/Car-Number-Detection", kind: "repo" },
    ],
    summary:
      "Localises plates across varied lighting from images or video streams, then runs OCR tuned for Indian plate formats. Built for smart-parking and traffic-monitoring use.",
    caseStudy: null,
  },

  {
    slug: "parking-app-swiftui",
    title: "ParkingApp",
    tagline: "Native iOS parking management app in SwiftUI.",
    year: "2025",
    status: "shipped",
    featured: false,
    lenses: ["swe"],
    order: { swe: 12 },
    tags: ["iOS", "Mobile", "SwiftUI"],
    stack: ["Swift", "SwiftUI", "Xcode"],
    metrics: [{ label: "Target", value: "iOS 14+" }],
    links: [
      { label: "Repository", href: "https://github.com/Jaswanth-K1210/ParkingApp-SwiftUI", kind: "repo" },
    ],
    summary:
      "A declarative SwiftUI interface for browsing and reserving parking spots with live availability, built native for iOS.",
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
    detail: "Forge Alumni / Smart City",
    year: "2024",
  },
  {
    title: "ML Research Intern, IIIT Hyderabad / Swecha",
    detail: "Low-resource Telugu NLP",
    year: "2025",
  },
  {
    // TODO(jaswanth): confirm the club's official name and I'll swap it in here.
    title: "Member — university incubation club",
    detail: "Campus startup and innovation cell",
    year: "",
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
    title: "CGPA 8.65",
    detail: "B.Tech CSE, Anurag University",
    year: "Current",
  },
];

// ---------------------------------------------------------------------------
// EXPERIENCE — renders the TRACE_ROUTE timeline, newest first.
//
// TODO(jaswanth): two entries are stubbed below and commented out because I do
// not have the facts to write them honestly. Send me, for each:
//   role title · start month/year · end month/year (or "Present") · 2-3 bullets
// and I will drop them straight in. They are ordered where they belong.
// ---------------------------------------------------------------------------
export const experience = [
  // {
  //   role: "TODO",
  //   org: "Accinford",
  //   orgNote: "",
  //   period: "TODO – Present",
  //   points: ["TODO"],
  // },

  {
    role: "Co-founder & Founding Engineer",
    org: "Kriaa Systems",
    orgNote: "Studio I co-founded — kriaa.in. Currently building firstcause.in",
    period: "Nov 2024 – Sep 2025",
    points: [
      "Co-founded the studio and owned its engineering side, shipping client software alongside a full course load.",
      "Architected CommunitySpaces (communityspaces.in), a booking and payments product, as sole owner of its Go/Gin backend: clean layering across domain, usecase, repository, and handler tiers, plus a React/TypeScript admin console and a React Native client.",
      "Shipped third-party integrations — Razorpay and Auth0 — behind a configurable per-booking commission engine, three-tier role-based access control, sliding-window rate limiting with 429 and Retry-After semantics, and security header middleware.",
      "Drove p95 latency on the busiest endpoints from 340ms to 170ms via composite indexes and connection pooling, then containerised every service with Docker Compose and documented the API surface in Swagger.",
      "Led code reviews and contributed to an internal Go API security library used across services.",
    ],
  },

  {
    role: "Machine Learning Research Intern",
    org: "SWECHA, IIIT Hyderabad",
    orgNote: "Low-resource Telugu NLP",
    period: "May 2025 – Jul 2025",
    points: [
      "Coordinated a three-person team building end-to-end ML pipelines — fine-tuning, hyperparameter search, and LLM evaluation — allocating tasks and reviews across the group.",
      "Automated ETL across 100,000+ Telugu text lines and 50+ hours of speech, including force alignment for ASR training.",
      "Served models behind Flask REST endpoints and shipped Streamlit demo interfaces so researchers could use them without touching code.",
      "Documented the pipeline down to a reproducible sub-four-hour deploy.",
    ],
  },

  // {
  //   role: "TODO",
  //   org: "IISPR",
  //   orgNote: "",
  //   period: "TODO",
  //   points: ["TODO"],
  // },

  {
    // TODO(jaswanth): confirm the club's official name and the month you joined.
    role: "Member",
    org: "University Incubation Club",
    orgNote: "Anurag University — campus startup and innovation cell",
    period: "Ongoing",
    points: [
      "Part of the campus incubation and entrepreneurship cell, working alongside student founders on early-stage product ideas.",
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
  { name: "Python", group: "Languages", lenses: ["swe", "ml"], proofSlugs: ["marketpulse", "injectarena", "cloudsense", "mail-x"] },
  { name: "JavaScript", group: "Languages", lenses: ["swe"], proofSlugs: ["fundly", "stock-royale", "p2p-webrtc-chat"] },
  { name: "TypeScript", group: "Languages", lenses: ["swe"], proofSlugs: ["communityspaces", "resolviq"] },
  { name: "Go", group: "Languages", lenses: ["swe"], proofSlugs: ["communityspaces"] },
  { name: "Swift", group: "Languages", lenses: ["swe"], proofSlugs: ["parking-app-swiftui"] },
  { name: "SQL", group: "Languages", lenses: ["swe"], proofSlugs: ["marketpulse", "communityspaces"] },
  { name: "HTML5 / CSS3", group: "Languages", lenses: ["swe"], proofSlugs: ["fundly", "stock-royale"] },

  // Frontend
  { name: "React", group: "Frontend", lenses: ["swe"], proofSlugs: ["fundly", "stock-royale", "marketpulse", "nexus-mail"] },
  { name: "React Native", group: "Frontend", lenses: ["swe"], proofSlugs: ["communityspaces"] },
  { name: "Next.js", group: "Frontend", lenses: ["swe"], proofSlugs: ["resolviq"] },
  { name: "SwiftUI", group: "Frontend", lenses: ["swe"], proofSlugs: ["parking-app-swiftui"] },
  { name: "Vite", group: "Frontend", lenses: ["swe"], proofSlugs: ["fundly", "stock-royale", "p2p-webrtc-chat"] },
  { name: "Tailwind CSS", group: "Frontend", lenses: ["swe"], proofSlugs: ["fundly", "stock-royale", "p2p-webrtc-chat"] },
  { name: "Zustand / state management", group: "Frontend", lenses: ["swe"], proofSlugs: ["fundly", "stock-royale"] },
  { name: "Reusable component libraries", group: "Frontend", lenses: ["swe"], proofSlugs: ["fundly", "communityspaces"] },
  { name: "Recharts / D3.js", group: "Frontend", lenses: ["swe"], proofSlugs: ["stock-royale", "marketpulse"] },
  { name: "Framer Motion", group: "Frontend", lenses: ["swe"], proofSlugs: ["fundly"] },
  { name: "Chrome Extensions (MV3)", group: "Frontend", lenses: ["swe"], proofSlugs: ["mail-x"] },

  // Backend
  { name: "Node.js", group: "Backend", lenses: ["swe"], proofSlugs: ["fundly", "stock-royale", "p2p-webrtc-chat"] },
  { name: "Express.js", group: "Backend", lenses: ["swe"], proofSlugs: ["fundly", "stock-royale", "p2p-webrtc-chat"] },
  { name: "Go / Gin", group: "Backend", lenses: ["swe"], proofSlugs: ["communityspaces"] },
  { name: "FastAPI", group: "Backend", lenses: ["swe", "ml"], proofSlugs: ["marketpulse", "nexus-mail", "mail-x"] },
  { name: "REST API design", group: "Backend", lenses: ["swe"], proofSlugs: ["communityspaces", "fundly", "marketpulse"] },
  { name: "WebSockets / Socket.io", group: "Backend", lenses: ["swe"], proofSlugs: ["stock-royale", "p2p-webrtc-chat"] },
  { name: "Celery / async workers", group: "Backend", lenses: ["swe"], proofSlugs: ["marketpulse"] },
  { name: "JWT / OAuth2", group: "Backend", lenses: ["swe"], proofSlugs: ["fundly", "stock-royale", "communityspaces"] },
  { name: "Auth0", group: "Backend", lenses: ["swe"], proofSlugs: ["communityspaces"] },
  { name: "Firebase Auth", group: "Backend", lenses: ["swe"], proofSlugs: ["p2p-webrtc-chat"] },
  { name: "Role-based access control", group: "Backend", lenses: ["swe"], proofSlugs: ["communityspaces", "fundly"] },
  { name: "Rate limiting & throttling", group: "Backend", lenses: ["swe"], proofSlugs: ["communityspaces", "fundly"] },
  { name: "Payment gateways (Razorpay)", group: "Backend", lenses: ["swe"], proofSlugs: ["fundly", "communityspaces"] },
  { name: "Transactional email & PDF generation", group: "Backend", lenses: ["swe"], proofSlugs: ["fundly", "stock-royale"] },

  // Databases
  { name: "MongoDB / Mongoose", group: "Databases", lenses: ["swe"], proofSlugs: ["fundly", "stock-royale", "p2p-webrtc-chat", "nexus-mail"] },
  { name: "PostgreSQL", group: "Databases", lenses: ["swe"], proofSlugs: ["marketpulse"] },
  { name: "Redis", group: "Databases", lenses: ["swe"], proofSlugs: ["marketpulse"] },
  { name: "IndexedDB", group: "Databases", lenses: ["swe"], proofSlugs: ["p2p-webrtc-chat"] },
  { name: "Indexing & query optimization", group: "Databases", lenses: ["swe"], proofSlugs: ["communityspaces", "marketpulse"] },

  // ML / AI
  { name: "PyTorch", group: "ML / AI", lenses: ["ml"], proofSlugs: ["injectarena", "sdam", "arc-agi-3", "satellite-imagery"] },
  { name: "GRPO / RLHF-style training", group: "ML / AI", lenses: ["ml"], proofSlugs: ["injectarena"] },
  { name: "PPO + ICM", group: "ML / AI", lenses: ["ml"], proofSlugs: ["arc-agi-3"] },
  { name: "LoRA fine-tuning", group: "ML / AI", lenses: ["ml"], proofSlugs: ["injectarena", "satellite-imagery"] },
  { name: "HuggingFace / TRL / vLLM", group: "ML / AI", lenses: ["ml"], proofSlugs: ["injectarena"] },
  { name: "Multi-agent orchestration", group: "ML / AI", lenses: ["ml", "swe"], proofSlugs: ["marketpulse", "nexus-mail"] },
  { name: "RL environment design (OpenEnv)", group: "ML / AI", lenses: ["ml"], proofSlugs: ["cloudsense", "injectarena"] },
  { name: "Classical ML (SVM, RF, boosting)", group: "ML / AI", lenses: ["ml"], proofSlugs: ["orange-workflow-runner", "drug-detection"] },
  { name: "Transformer sentiment (FinBERT)", group: "ML / AI", lenses: ["ml"], proofSlugs: ["marketpulse"] },
  { name: "Computer vision & OCR", group: "ML / AI", lenses: ["ml"], proofSlugs: ["car-number-detection", "satellite-imagery"] },
  { name: "LLM API orchestration & fallback", group: "ML / AI", lenses: ["ml", "swe"], proofSlugs: ["stock-royale", "mail-x", "cv-tailor"] },

  // Systems & Infra
  { name: "Docker / Docker Compose", group: "Systems & Infra", lenses: ["swe"], proofSlugs: ["fundly", "communityspaces", "marketpulse", "cloudsense"] },
  { name: "Kubernetes", group: "Systems & Infra", lenses: ["swe"], proofSlugs: ["marketpulse"] },
  { name: "AWS (EC2, S3)", group: "Systems & Infra", lenses: ["swe"], proofSlugs: ["fundly"] },
  { name: "Nginx", group: "Systems & Infra", lenses: ["swe"], proofSlugs: ["fundly"] },
  { name: "CI/CD (GitHub Actions)", group: "Systems & Infra", lenses: ["swe"], proofSlugs: ["marketpulse"] },
  { name: "Vercel / Render deployment", group: "Systems & Infra", lenses: ["swe"], proofSlugs: ["stock-royale", "fundly", "marketpulse"] },
  { name: "WebRTC", group: "Systems & Infra", lenses: ["swe"], proofSlugs: ["p2p-webrtc-chat"] },
  { name: "API documentation (Swagger)", group: "Systems & Infra", lenses: ["swe"], proofSlugs: ["communityspaces"] },
  { name: "Security middleware & headers", group: "Systems & Infra", lenses: ["swe"], proofSlugs: ["fundly", "communityspaces"] },
  { name: "Playwright", group: "Systems & Infra", lenses: ["swe"], proofSlugs: ["cv-tailor"] },
];

// ---------------------------------------------------------------------------
// CORE CS
// Fundamentals, not tools. Nothing here maps to a single repo — they show up
// across all of them — so this list is deliberately exempt from the proof rule
// and rendered as a plain tag row.
// ---------------------------------------------------------------------------
export const coreCS = [
  "Data Structures & Algorithms",
  "Object-Oriented Design",
  "System Design",
  "Operating Systems",
  "DBMS",
  "Computer Networks",
];

// ---------------------------------------------------------------------------
// WORKING KNOWLEDGE
// Used, but not to a depth any project on this site proves. Rendered as a
// plain tag row, visually separate from the proof map above: no links, no
// groups, no proof. Excluded from the validator by design.
// Keeping this honest is the point — it is the counterweight to the proof map.
// ---------------------------------------------------------------------------
export const workingKnowledge = ["Java", "C++", "MySQL", "SQLite", "AWS Lambda", "n8n"];

// ---------------------------------------------------------------------------
// CURRENTLY LEARNING
// Actively skilling up, no project proof yet. Separate from Working Knowledge
// so "learning" is never mistaken for "have used in production".
// ---------------------------------------------------------------------------
export const currentlyLearning = ["Apache Kafka"];

// ---------------------------------------------------------------------------
// SEO
// ---------------------------------------------------------------------------
export const seo = {
  title: "Jaswanth Koppisetty — Full Stack & ML Systems Engineer",
  description:
    "CS engineer building payment platforms, real-time products, and multi-agent AI pipelines on Go, Node, React, and PyTorch. Hyderabad, India.",
  siteUrl: "https://jaswanthkoppisetty.codes",
  ogImage: "/og/default.png",
  keywords: [
    "Jaswanth Koppisetty",
    "full stack developer",
    "backend engineer",
    "SDE",
    "React developer",
    "ML engineer",
    "multi-agent systems",
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
