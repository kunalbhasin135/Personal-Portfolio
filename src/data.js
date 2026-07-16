// ============================================================
// EDIT THIS FILE ONLY to update your portfolio content.
//
// Screenshots: drop image files into public/projects/ and list
// their paths in a project's `images` array, e.g.
//   images: ['projects/drift-1.png', 'projects/drift-2.png']
// ============================================================

export const profile = {
  name: 'Kunal Bhasin',
  role: 'Software Engineer · Game Dev · AI',
  heroLine1: "Hi, I'm Kunal —",
  heroLine2: 'I build software & games.',
  tagline:
    'Software engineer working across full-stack apps, game development, and AI — I like building things that are both technical and fun to use.',
  location: 'Vancouver, Canada',
  email: 'kunalbhasin37@gmail.com',
  github: 'https://github.com/kunalbhasin135',
  linkedin: 'https://www.linkedin.com/in/kunal-bhasin-4122a62b9/',
  resumeUrl: '#',
  about: [
    `I'm a developer passionate about building products across software
     engineering, game development, and artificial intelligence — from
     full-stack applications and intelligent systems to gameplay mechanics
     and immersive game experiences.`,
    `I study at UBC in Vancouver, graduating September 2026. Most recently I
     built enterprise data pipelines and a production semantic-search service
     as a software developer intern at EBIX, and I'm currently co-founding
     Dryft — an app that finds and cancels the subscriptions you forgot
     about.`,
  ],
  skills: [
    'Python', 'TypeScript', 'C#', 'React', 'FastAPI', 'Flutter',
    'Unity', 'scikit-learn', 'PyTorch', 'FAISS', 'Supabase', 'Node.js',
  ],
  // Quick-facts strip shown at the top of the About section
  facts: [
    { k: 'Currently', v: 'Co-founder @ Dryft' },
    { k: 'Previously', v: 'SWE Intern @ EBIX' },
    { k: 'Based in', v: 'Vancouver, Canada' },
    { k: 'Education', v: 'UBC · Sept 2026' },
  ],
  // Grouped skill chips shown in the About section
  skillGroups: [
    { label: 'Languages', items: ['Python', 'C#', 'C/C++', 'Java', 'JavaScript', 'TypeScript', 'SQL'] },
    { label: 'Frameworks & Tools', items: ['React', 'FastAPI', 'Flutter', 'Supabase', 'Unity', 'Node.js', 'Git'] },
    { label: 'AI / Data', items: ['scikit-learn', 'PyTorch', 'FAISS', 'Pandas', 'SQL Server', 'Embeddings'] },
  ],
  // Contact section tags
  openTo: ['Internships', 'New-grad roles', 'Collaborations'],
}

export const projects = [
  {
    title: 'Dryft',
    year: '2025 —',
    tags: ['Flutter', 'Riverpod', 'Supabase', 'Gmail API'],
    description:
      'Subscription manager I co-founded that finds what you forgot you were paying for. Connects to Gmail and scans billing emails with 15+ targeted search strategies to auto-detect recurring charges, deduplicates and reconciles them, then tracks renewals and helps you cancel. Offline-first local database (Isar), Google & Apple sign-in via Supabase, and a spending-trends dashboard.',
    highlight: 'Technical co-founder — auto-detects subscriptions from your inbox, zero manual entry',
    link: '', // not on GitHub yet — add repo URL when pushed
    live: '',
    video: 'projects/drift-demo.mp4',
    videoPoster: 'projects/drift-poster.jpg',
    images: [
      'projects/drift-1.png',
      'projects/drift-2.png',
      'projects/drift-3.png',
      'projects/drift-4.png',
    ],
  },
  {
    title: 'World Cup 2026 Predictor',
    year: '2026',
    tags: ['Python', 'FastAPI', 'scikit-learn', 'React'],
    description:
      'Full-stack football analytics platform trained on ~49,000 international matches with leakage-free, point-in-time features (Elo, form, head-to-head, venue, rest). Three models — a calibrated LR + GBM ensemble, a knockout classifier, and Poisson scorelines — feed a full 48-team tournament engine with Monte Carlo champion odds, what-if bracket overrides, and model-implied betting odds in a React 19 UI. As of the real 2026 tournament: the model called all four semi-finalists and both finalists correctly.',
    highlight: 'Correctly predicted all 4 real-world semi-finalists & both 2026 finalists',
    link: 'https://github.com/kunalbhasin135/World_Cup_2026_Predictor',
    live: '',
    images: [
      'projects/wc-1.png',
      'projects/wc-2.png',
      'projects/wc-3.png',
      'projects/wc-4.png',
      'projects/wc-5.png',
    ],
  },
  {
    title: 'Wrong Floor',
    year: '2025',
    tags: ['Godot', 'Game Jam', 'Horror'],
    description:
      'Narrative horror game built in Godot during a game jam. No jump-scare spam — the fear comes from atmosphere, tension, and environmental storytelling, guided by deliberate level design and player exploration. Playable in the browser on itch.io.',
    highlight: 'Built in a game jam — playable now',
    link: '',
    live: 'https://kunalb20.itch.io/wrong-floor',
    images: [
      'projects/wrongfloor-1.png',
      'projects/wrongfloor-2.png',
      'projects/wrongfloor-3.png',
      'projects/wrongfloor-4.png',
    ],
  },
  {
    title: 'Semantic Search & AI Retrieval',
    year: '2025',
    tags: ['FAISS', 'FastAPI', 'SQL Server', 'EBIX'],
    description:
      'Production retrieval system built during my internship at EBIX, as part of an enterprise platform that converts raw documents into structured data. The pipeline chunks thousands of documents, generates embeddings, indexes them with FAISS, and serves the most relevant sections through FastAPI endpoints consumed by other engineering teams — search that understands meaning instead of matching keywords.',
    highlight: 'Shipped in production at EBIX — powering search for other engineering teams',
    link: '',
    live: '',
    images: [],
  },
  {
    title: 'Duo Split',
    year: '2024',
    tags: ['Unity', 'C#', 'ShaderLab'],
    description:
      'Endless runner built in Unity around one twist: a single input controls two characters moving under opposite gravity. Procedural obstacle spawning guarantees every level stays solvable for both characters, while a difficulty system ramps speed and obstacle density without breaking playability. Public builds shipped and played on itch.io.',
    highlight: 'One input, two runners, opposite gravity — always solvable by design',
    link: 'https://github.com/kunalbhasin135/DuoSplit',
    live: 'https://kunalb20.itch.io/duo-split',
    images: ['projects/duosplit-1.png', 'projects/duosplit-2.png'],
  },
]

export const experience = [
  {
    role: 'Technical Co-Founder',
    org: 'Dryft',
    period: 'Feb 2026 — Present',
    note: 'Architected and built the full product — Flutter client, Supabase backend, Gmail ingestion, and fault-tolerant subscription reconciliation pipelines.',
  },
  {
    role: 'Software Developer Intern',
    org: 'EBIX',
    period: 'May 2025 — Mar 2026',
    note: 'Owned an enterprise document-processing backend end to end — SQL Server ingestion, normalization, and FastAPI services powering semantic search across thousands of documents.',
  },
  {
    role: 'B.A., University of British Columbia',
    org: 'UBC · Vancouver',
    period: 'Graduating Sept 2026',
    note: 'Languages & tools: Python, C#, C/C++, Java, JavaScript, SQL, FastAPI, Flutter, Unity, React, FAISS.',
  },
]
