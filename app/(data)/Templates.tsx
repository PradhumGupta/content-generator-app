export default [
  {
    name: "DSA-Solution-Corrector",
    desc: "Reviews my DSA solution, finds mistakes, improves logic, and explains corrections clearly",
    category: "DSA",
    icon: "https://cdn-icons-png.flaticon.com/128/1828/1828919.png",
    aiPrompt: `
You are a senior software engineer and DSA mentor.

I will give you:
- The problem statement
- My solution code
- My approach/thought process

Your tasks:
1. Verify if the solution is correct.
2. If incorrect, clearly explain where and why it fails.
3. Provide the corrected solution.
4. Explain the correct approach step-by-step.
5. Analyze time and space complexity.
6. Suggest optimizations if possible.
7. Mention common mistakes people make in this problem.

Explain in a teaching style suitable for interviews and learning.
`,
    slug: "dsa-solution-corrector",
    form: [
      {
        label: "Problem Statement",
        field: "textarea",
        name: "problem",
        required: true,
      },
      {
        label: "Your Approach / Thought Process",
        field: "textarea",
        name: "approach",
      },
      {
        label: "Your Code",
        field: "textarea",
        name: "code",
        required: true,
      },
    ],
  },
  {
    name: "Concept-Explainer-N-Minutes",
    desc: "Explains a CS or DSA concept in a fixed time suitable for speaking",
    category: "Learning",
    icon: "https://cdn-icons-png.flaticon.com/128/3135/3135715.png",
    aiPrompt: `
Explain the given concept so that I can speak it confidently.

Rules:
- Explanation length: exactly {{time}} minutes.
- Simple language.
- Clear structure: intro → core idea → example → summary.
- Avoid unnecessary jargon.
- Interview and teaching friendly.

End with a short closing line.
`,
    slug: "concept-explainer-n-minutes",
    form: [
      {
        label: "Concept Name",
        field: "input",
        name: "concept",
        required: true,
      },
      {
        label: "Time Limit (minutes)",
        field: "input",
        name: "time",
        required: true,
      },
    ],
  },

  /* 1 — Concept Explanation (Timed) */
  {
    name: "Explain-Concept-TimeBased",
    desc: "Explains any technical concept within a specified time duration in a clean, speakable format.",
    category: "Learning",
    icon: "https://cdn-icons-png.flaticon.com/128/3004/3004613.png",
    aiPrompt:
      "Explain the given concept in the selected time duration. Make it structured, easy to speak, and logically flowing.",
    slug: "explain-concept-timed",
    form: [
      { label: "Concept", field: "input", name: "concept", required: true },
      {
        label: "Duration (in minutes)",
        field: "input",
        name: "duration",
        required: true,
      },
    ],
  },

  /* 2 — DSA: Explain Problem */
  {
    name: "DSA-Explain-Problem",
    desc: "Explains a DSA problem with intuition, steps, and reasoning.",
    category: "DSA",
    icon: "https://cdn-icons-png.flaticon.com/128/907/907717.png",
    aiPrompt:
      "Explain this DSA problem thoroughly with intuition, brute force, optimal solution, complexity, and thought process.",
    slug: "dsa-explain-problem",
    form: [
      {
        label: "Enter problem description",
        field: "textarea",
        name: "problem",
        required: true,
      },
    ],
  },

  /* 3 — DSA: Generate Multiple Approaches */
  {
    name: "DSA-Multiple-Approaches",
    desc: "Provides 2–3 different methods to solve a problem.",
    category: "DSA",
    icon: "https://cdn-icons-png.flaticon.com/128/4230/4230965.png",
    aiPrompt:
      "Generate 2–3 different approaches to solve the problem, comparing their complexities and mental models.",
    slug: "dsa-multiple-approaches",
    form: [
      {
        label: "Problem Statement",
        field: "textarea",
        name: "problem",
        required: true,
      },
    ],
  },

  /* 4 — DSA: Dry Run */
  {
    name: "DSA-Dry-Run",
    desc: "Dry runs a given algorithm step-by-step.",
    category: "DSA",
    icon: "https://cdn-icons-png.flaticon.com/128/3271/3271006.png",
    aiPrompt:
      "Perform a detailed dry run of the given approach using the provided array or input.",
    slug: "dsa-dry-run",
    form: [
      {
        label: "Approach",
        field: "textarea",
        name: "approach",
        required: true,
      },
      {
        label: "Input / Array",
        field: "input",
        name: "inputData",
        required: true,
      },
    ],
  },

  /* 5 — DSA: Complexity Analysis */
  {
    name: "DSA-Complexity-Analysis",
    desc: "Explains time and space complexity in detail.",
    category: "DSA",
    icon: "https://cdn-icons-png.flaticon.com/128/1611/1611103.png",
    aiPrompt:
      "Provide time and space complexity with clear reasoning and examples.",
    slug: "dsa-complexity-analysis",
    form: [
      {
        label: "Approach / Code",
        field: "textarea",
        name: "code",
        required: true,
      },
    ],
  },

  /* 6 — DSA: Convert to Interview Speech */
  {
    name: "DSA-Explain-Speech",
    desc: "Turns your solution into a confident interview-style explanation.",
    category: "DSA",
    icon: "https://cdn-icons-png.flaticon.com/128/483/483947.png",
    aiPrompt:
      "Convert the solution into an interview-style explanation I can speak fluidly.",
    slug: "dsa-explain-speech",
    form: [
      {
        label: "Solution / Approach",
        field: "textarea",
        name: "solution",
        required: true,
      },
    ],
  },

  /* 7 — DSA: Summarize Concept */
  {
    name: "DSA-Summarize",
    desc: "Creates a short revision summary.",
    category: "DSA",
    icon: "https://cdn-icons-png.flaticon.com/128/1087/1087815.png",
    aiPrompt: "Summarize this DSA concept into a revision-friendly format.",
    slug: "dsa-summarize",
    form: [
      { label: "Concept", field: "textarea", name: "concept", required: true },
    ],
  },

  /* 8 — DSA: Edge Cases */
  {
    name: "DSA-Edge-Cases",
    desc: "Lists all important edge cases.",
    category: "DSA",
    icon: "https://cdn-icons-png.flaticon.com/128/9956/9956969.png",
    aiPrompt:
      "List all important edge cases for the problem and how to handle them.",
    slug: "dsa-edge-cases",
    form: [
      {
        label: "Problem Statement",
        field: "textarea",
        name: "problem",
        required: true,
      },
    ],
  },

  /* 9 — DSA: Convert to Math */
  {
    name: "DSA-Math-Intuition",
    desc: "Explains the mathematical intuition behind a solution.",
    category: "DSA",
    icon: "https://cdn-icons-png.flaticon.com/128/992/992651.png",
    aiPrompt:
      "Convert this algorithm into mathematical reasoning and intuition.",
    slug: "dsa-math-intuition",
    form: [
      {
        label: "Problem / Algorithm",
        field: "textarea",
        name: "algo",
        required: true,
      },
    ],
  },

  /* 10 — Explain Code Line-by-Line */
  {
    name: "Explain-Code-LineByLine",
    desc: "Breaks down code into small understandable parts.",
    category: "Code",
    icon: "https://cdn-icons-png.flaticon.com/128/4785/4785455.png",
    aiPrompt: "Explain this code line-by-line with reasoning and flow.",
    slug: "explain-code-line",
    form: [
      {
        label: "Code Snippet",
        field: "textarea",
        name: "code",
        required: true,
      },
    ],
  },

  /* 11 — Backend Concept Explanation */
  {
    name: "Explain-Backend-Concept",
    desc: "Explains backend topics like a senior engineer.",
    category: "Backend",
    icon: "https://cdn-icons-png.flaticon.com/128/906/906333.png",
    aiPrompt:
      "Explain this backend concept with real-world examples and reasoning.",
    slug: "explain-backend-concept",
    form: [
      { label: "Concept", field: "input", name: "concept", required: true },
    ],
  },

  /* 12 — API Design Template */
  {
    name: "API-Design",
    desc: "Creates a REST API design with routes, validations, and responses.",
    category: "Backend",
    icon: "https://cdn-icons-png.flaticon.com/128/1491/1491203.png",
    aiPrompt:
      "Design REST APIs based on the requirement. Include routes, validations, request/response format.",
    slug: "api-design",
    form: [
      {
        label: "Feature Requirement",
        field: "textarea",
        name: "requirement",
        required: true,
      },
    ],
  },

  /* 13 — Express Controller Flow */
  {
    name: "Express-Controller-Flow",
    desc: "Generates controller logic structure.",
    category: "Backend",
    icon: "https://cdn-icons-png.flaticon.com/128/760/760762.png",
    aiPrompt:
      "Generate an Express controller structure with service-layer logic and flow.",
    slug: "express-controller-flow",
    form: [
      {
        label: "Functionality",
        field: "input",
        name: "feature",
        required: true,
      },
    ],
  },

  /* 14 — MongoDB Schema Design */
  {
    name: "MongoDB-Schema-Design",
    desc: "Converts business need to Mongo schema.",
    category: "Database",
    icon: "https://cdn-icons-png.flaticon.com/128/5968/5968350.png",
    aiPrompt:
      "Design a MongoDB schema with fields, validation rules, and relational structure.",
    slug: "mongodb-schema-design",
    form: [
      {
        label: "Entity / Requirement",
        field: "textarea",
        name: "entity",
        required: true,
      },
    ],
  },

  /* 15 — Token System Explanation */
  {
    name: "Token-System-Flow",
    desc: "Explains access/refresh token authentication.",
    category: "Backend",
    icon: "https://cdn-icons-png.flaticon.com/128/2913/2913583.png",
    aiPrompt:
      "Explain access & refresh token flow with diagrams, steps, and security considerations.",
    slug: "token-system-flow",
    form: [
      { label: "Use Case", field: "textarea", name: "usecase", required: true },
    ],
  },

  /* 16 — Auth Flow */
  {
    name: "Auth-Flow",
    desc: "Generates complete login/signup system design.",
    category: "Backend",
    icon: "https://cdn-icons-png.flaticon.com/128/3064/3064197.png",
    aiPrompt:
      "Generate complete authentication flow including validation, hashing, JWT, and error handling.",
    slug: "auth-flow",
    form: [
      {
        label: "Feature Description",
        field: "textarea",
        name: "desc",
        required: true,
      },
    ],
  },

  /* 17 — API Documentation */
  {
    name: "API-Documentation",
    desc: "Generates clean API docs.",
    category: "Backend",
    icon: "https://cdn-icons-png.flaticon.com/128/1484/1484753.png",
    aiPrompt: "Generate clean, readable API documentation with examples.",
    slug: "api-docs",
    form: [
      {
        label: "API Details / Use Case",
        field: "textarea",
        name: "details",
        required: true,
      },
    ],
  },

  /* 18 — Database Schema from Requirement */
  {
    name: "DB-Schema-From-Requirement",
    desc: "Converts a feature requirement into a database schema.",
    category: "Database",
    icon: "https://cdn-icons-png.flaticon.com/128/1006/1006578.png",
    aiPrompt:
      "Generate database schema (Mongo/MySQL) based on requirement with fields and relations.",
    slug: "db-schema-from-req",
    form: [
      { label: "Requirement", field: "textarea", name: "req", required: true },
    ],
  },

  /* 19 — Explain Error and Fix */
  {
    name: "Explain-Error-Fix",
    desc: "Explains reason behind a bug and provides fix.",
    category: "Debugging",
    icon: "https://cdn-icons-png.flaticon.com/128/471/471662.png",
    aiPrompt: "Explain the issue, root cause, and fix.",
    slug: "explain-error-fix",
    form: [
      {
        label: "Error Message / Code",
        field: "textarea",
        name: "error",
        required: true,
      },
    ],
  },

  /* 20 — Clean Code Generator */
  {
    name: "Clean-Code",
    desc: "Rewrites messy code into professional-quality code.",
    category: "Code",
    icon: "https://cdn-icons-png.flaticon.com/128/1828/1828919.png",
    aiPrompt: "Rewrite this code into clean, readable, maintainable form.",
    slug: "clean-code",
    form: [
      {
        label: "Code Snippet",
        field: "textarea",
        name: "code",
        required: true,
      },
    ],
  },

  /* 21 — Explain System Design Concept */
  {
    name: "Explain-System-Design",
    desc: "Explain system design concepts in simple, real-world terms.",
    category: "System Design",
    icon: "https://cdn-icons-png.flaticon.com/128/4833/4833851.png",
    aiPrompt:
      "Explain the system design concept with diagrams, clarity, and real-world use.",
    slug: "explain-sd",
    form: [
      { label: "Concept", field: "input", name: "concept", required: true },
    ],
  },

  /* 22 — Feature → System Design */
  {
    name: "Feature-to-SystemDesign",
    desc: "Converts a feature idea into scalable system design.",
    category: "System Design",
    icon: "https://cdn-icons-png.flaticon.com/128/3208/3208760.png",
    aiPrompt:
      "Convert the feature into scalable system design with components, flow, db, caching, scaling.",
    slug: "feature-to-sd",
    form: [
      {
        label: "Feature Idea",
        field: "textarea",
        name: "feature",
        required: true,
      },
    ],
  },

  /* 23 — Low Level Design */
  {
    name: "Low-Level-Design",
    desc: "Generate LLD: classes, methods, flow.",
    category: "System Design",
    icon: "https://cdn-icons-png.flaticon.com/128/3659/3659894.png",
    aiPrompt:
      "Provide low-level design with classes, methods, and interactions.",
    slug: "lld",
    form: [
      {
        label: "Component Description",
        field: "textarea",
        name: "component",
        required: true,
      },
    ],
  },

  /* 24 — Compare Two Architectures */
  {
    name: "Compare-Architectures",
    desc: "Objective comparison of two architectures.",
    category: "System Design",
    icon: "https://cdn-icons-png.flaticon.com/128/3062/3062634.png",
    aiPrompt:
      "Compare the two architectures with tradeoffs, use cases, pros/cons.",
    slug: "compare-arch",
    form: [
      { label: "Architecture A", field: "input", name: "a", required: true },
      { label: "Architecture B", field: "input", name: "b", required: true },
    ],
  },

  /* 25 — Scaling Strategy */
  {
    name: "Scaling-Strategy",
    desc: "Explains how to scale a system.",
    category: "System Design",
    icon: "https://cdn-icons-png.flaticon.com/128/3287/3287494.png",
    aiPrompt: "Provide scaling strategies for the given system.",
    slug: "scaling-strategy",
    form: [
      {
        label: "System Description",
        field: "textarea",
        name: "system",
        required: true,
      },
    ],
  },

  /* 26 — React Concept Explanation */
  {
    name: "Explain-React-Concept",
    desc: "Explains React concepts deeply.",
    category: "Frontend",
    icon: "https://cdn-icons-png.flaticon.com/128/1126/1126012.png",
    aiPrompt: "Explain this React concept clearly with examples.",
    slug: "explain-react",
    form: [
      {
        label: "React Concept",
        field: "input",
        name: "concept",
        required: true,
      },
    ],
  },

  /* 27 — React Component Structure */
  {
    name: "React-Component-Structure",
    desc: "Generates component structure and responsibilities.",
    category: "Frontend",
    icon: "https://cdn-icons-png.flaticon.com/128/1828/1828817.png",
    aiPrompt: "Generate a clean React component structure with subcomponents.",
    slug: "react-component-structure",
    form: [
      {
        label: "Component Purpose",
        field: "textarea",
        name: "purpose",
        required: true,
      },
    ],
  },

  /* 28 — UI → Component Tree */
  {
    name: "UI-to-ComponentTree",
    desc: "Converts UI description into component tree.",
    category: "Frontend",
    icon: "https://cdn-icons-png.flaticon.com/128/1828/1828819.png",
    aiPrompt: "Generate a component tree based on UI description.",
    slug: "ui-component-tree",
    form: [
      {
        label: "UI Description",
        field: "textarea",
        name: "ui",
        required: true,
      },
    ],
  },

  /* 29 — Rewrite Component Cleanly */
  {
    name: "React-Clean-Code",
    desc: "Turns messy component code into clean code.",
    category: "Frontend",
    icon: "https://cdn-icons-png.flaticon.com/128/3208/3208729.png",
    aiPrompt: "Rewrite the React component into clean, maintainable form.",
    slug: "react-clean",
    form: [
      {
        label: "Component Code",
        field: "textarea",
        name: "code",
        required: true,
      },
    ],
  },

  /* 30 — Debug React */
  {
    name: "Debug-React-Issue",
    desc: "Explains bug reason + fix.",
    category: "Frontend",
    icon: "https://cdn-icons-png.flaticon.com/128/2085/2085206.png",
    aiPrompt:
      "Explain what is causing the issue in this React code and how to fix it.",
    slug: "debug-react",
    form: [
      {
        label: "Issue Description / Code",
        field: "textarea",
        name: "issue",
        required: true,
      },
    ],
  },

  /* 31 — Explain DevOps Concept */
  {
    name: "Explain-DevOps-Concept",
    desc: "Simplifies DevOps concepts with examples.",
    category: "DevOps",
    icon: "https://cdn-icons-png.flaticon.com/128/1048/1048949.png",
    aiPrompt: "Explain this DevOps concept with tools and examples.",
    slug: "devops-explain",
    form: [
      { label: "Concept", field: "input", name: "concept", required: true },
    ],
  },

  /* 32 — Linux Command Explanation */
  {
    name: "Explain-Linux-Command",
    desc: "Explains purpose + usage + flags of commands.",
    category: "DevOps",
    icon: "https://cdn-icons-png.flaticon.com/128/1532/1532772.png",
    aiPrompt: "Explain how this Linux command works with examples.",
    slug: "linux-command-explain",
    form: [{ label: "Command", field: "input", name: "cmd", required: true }],
  },

  /* 33 — Networking Concept */
  {
    name: "Networking-Concept",
    desc: "Explains system and network engineering topics.",
    category: "System",
    icon: "https://cdn-icons-png.flaticon.com/128/4144/4144731.png",
    aiPrompt: "Explain this networking concept in simple but technical terms.",
    slug: "networking-concept",
    form: [
      { label: "Concept", field: "input", name: "concept", required: true },
    ],
  },

  /* 34 — Troubleshoot Server Issue */
  {
    name: "Troubleshoot-Server",
    desc: "Diagnoses backend/server issue.",
    category: "Debugging",
    icon: "https://cdn-icons-png.flaticon.com/128/1829/1829496.png",
    aiPrompt: "Analyze the issue and provide troubleshooting steps.",
    slug: "troubleshoot-server",
    form: [
      {
        label: "Issue Description",
        field: "textarea",
        name: "issue",
        required: true,
      },
    ],
  },

  /* 35 — Explain Git/GitHub Flow */
  {
    name: "Explain-Git-Flow",
    desc: "Simplifies git workflow concepts.",
    category: "DevOps",
    icon: "https://cdn-icons-png.flaticon.com/128/1260/1260208.png",
    aiPrompt: "Explain this Git/GitHub flow with examples.",
    slug: "git-flow",
    form: [
      { label: "Git Concept", field: "input", name: "concept", required: true },
    ],
  },

  /* 36 — Behavioral Answer */
  {
    name: "Behavioral-Answer",
    desc: "Generates STAR-format answer.",
    category: "Career",
    icon: "https://cdn-icons-png.flaticon.com/128/3135/3135697.png",
    aiPrompt: "Give STAR-format behavioral interview answer.",
    slug: "behavioral-answer",
    form: [
      {
        label: "Question",
        field: "textarea",
        name: "question",
        required: true,
      },
    ],
  },

  /* 37 — STAR Conversion */
  {
    name: "STAR-Converter",
    desc: "Converts any story to STAR framework.",
    category: "Career",
    icon: "https://cdn-icons-png.flaticon.com/128/1137/1137133.png",
    aiPrompt: "Convert this story into STAR format.",
    slug: "star-converter",
    form: [
      { label: "Story", field: "textarea", name: "story", required: true },
    ],
  },

  /* 38 — Explain Project (Interview Style) */
  {
    name: "Explain-Project",
    desc: "Turns project into interview-ready explanation.",
    category: "Career",
    icon: "https://cdn-icons-png.flaticon.com/128/1827/1827310.png",
    aiPrompt: "Explain this project like in a software engineering interview.",
    slug: "explain-project",
    form: [
      {
        label: "Project Details",
        field: "textarea",
        name: "project",
        required: true,
      },
    ],
  },

  /* 39 — Rewrite Resume Bullet */
  {
    name: "Resume-Bullet-Improve",
    desc: "Converts weak resume line to a powerful one.",
    category: "Career",
    icon: "https://cdn-icons-png.flaticon.com/128/295/295128.png",
    aiPrompt: "Rewrite this resume bullet with measurable impact.",
    slug: "resume-bullet-improve",
    form: [
      {
        label: "Resume Bullet",
        field: "textarea",
        name: "bullet",
        required: true,
      },
    ],
  },

  /* 40 — Professional Email */
  {
    name: "Professional-Email",
    desc: "Generates professional email message.",
    category: "Career",
    icon: "https://cdn-icons-png.flaticon.com/128/561/561127.png",
    aiPrompt: "Write a professional email based on given context.",
    slug: "professional-email",
    form: [
      { label: "Context", field: "textarea", name: "context", required: true },
    ],
  },

  /* 41 — Convert Text to Clear Spoken English */
  {
    name: "Explain-Simple-English",
    desc: "Converts text into clear, natural English.",
    category: "English",
    icon: "https://cdn-icons-png.flaticon.com/128/4727/4727402.png",
    aiPrompt: "Rewrite this content in simple, clear spoken English.",
    slug: "simple-english",
    form: [{ label: "Text", field: "textarea", name: "text", required: true }],
  },

  /* 42 — Improve Sentence Structure */
  {
    name: "Improve-English",
    desc: "Improves grammar and structure.",
    category: "English",
    icon: "https://cdn-icons-png.flaticon.com/128/2838/2838912.png",
    aiPrompt: "Improve sentence clarity and structure.",
    slug: "improve-english",
    form: [
      {
        label: "Sentence",
        field: "textarea",
        name: "sentence",
        required: true,
      },
    ],
  },

  /* 43 — Convert Notes to Speech Friendly */
  {
    name: "Notes-To-Speech",
    desc: "Turns raw notes into a speakable script.",
    category: "Learning",
    icon: "https://cdn-icons-png.flaticon.com/128/2541/2541913.png",
    aiPrompt: "Convert these notes into a clean, speakable explanation.",
    slug: "notes-to-speech",
    form: [
      { label: "Notes", field: "textarea", name: "notes", required: true },
    ],
  },

  /* 44 — Simplify Complex Idea */
  {
    name: "Simplify-Idea",
    desc: "Breaks down a complex concept.",
    category: "Learning",
    icon: "https://cdn-icons-png.flaticon.com/128/2666/2666505.png",
    aiPrompt:
      "Simplify this complex idea into a beginner-friendly explanation.",
    slug: "simplify-idea",
    form: [
      { label: "Concept", field: "textarea", name: "concept", required: true },
    ],
  },

  /* 45 — Debug Code (General) */
  {
    name: "Debug-Code",
    desc: "Explains bug and gives fix.",
    category: "Debugging",
    icon: "https://cdn-icons-png.flaticon.com/128/216/216509.png",
    aiPrompt: "Identify bug, root cause, and fix.",
    slug: "debug-code",
    form: [
      {
        label: "Code Snippet",
        field: "textarea",
        name: "code",
        required: true,
      },
    ],
  },

  /* 46 — Performance Bottleneck */
  {
    name: "Performance-Bottleneck",
    desc: "Finds performance issues.",
    category: "Debugging",
    icon: "https://cdn-icons-png.flaticon.com/128/921/921347.png",
    aiPrompt: "Identify performance bottlenecks and suggest improvements.",
    slug: "performance-bottleneck",
    form: [
      {
        label: "Code / Query",
        field: "textarea",
        name: "code",
        required: true,
      },
    ],
  },

  /* 47 — Code Improvement Suggestions */
  {
    name: "Code-Improvement",
    desc: "Suggests clean code improvements.",
    category: "Code",
    icon: "https://cdn-icons-png.flaticon.com/128/1828/1828856.png",
    aiPrompt: "Suggest improvements for readability, quality, and structure.",
    slug: "code-improvement",
    form: [
      {
        label: "Code Snippet",
        field: "textarea",
        name: "code",
        required: true,
      },
    ],
  },

  /* 48 — Study Plan Generator */
  {
    name: "Study-Plan",
    desc: "Generates a detailed study plan.",
    category: "Learning",
    icon: "https://cdn-icons-png.flaticon.com/128/2118/2118636.png",
    aiPrompt: "Create a structured study plan based on the goal.",
    slug: "study-plan",
    form: [{ label: "Goal", field: "textarea", name: "goal", required: true }],
  },

  /* 49 — Topic Roadmap */
  {
    name: "Topic-Roadmap",
    desc: "Generates a complete road map for learning a topic.",
    category: "Learning",
    icon: "https://cdn-icons-png.flaticon.com/128/235/235861.png",
    aiPrompt: "Create a roadmap to learn this topic from basics to advanced.",
    slug: "topic-roadmap",
    form: [{ label: "Topic", field: "input", name: "topic", required: true }],
  },

  /* 50 — Long Text Summary */
  {
    name: "Summarize-Text",
    desc: "Summarizes long text cleanly.",
    category: "Learning",
    icon: "https://cdn-icons-png.flaticon.com/128/907/907836.png",
    aiPrompt: "Summarize the text into key points.",
    slug: "summarize-text",
    form: [
      { label: "Long Text", field: "textarea", name: "text", required: true },
    ],
  },
];
