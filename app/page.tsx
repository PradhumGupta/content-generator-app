"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const features = [
    {
      title: "DSA & Problem Solving",
      items: [
        "Complexity Analysis",
        "Dry Runs",
        "Multiple Approaches",
        "Edge Cases",
      ],
    },
    {
      title: "Backend Engineering",
      items: [
        "API Design",
        "DB Schema",
        "Auth Flow",
        "Scaling Strategy",
      ],
    },
    {
      title: "Frontend & React",
      items: [
        "Component Structure",
        "React Clean Code",
        "Debug React Issues",
        "UI Architecture",
      ],
    },
    {
      title: "Career & Interview",
      items: [
        "Resume Improvement",
        "STAR Answers",
        "Project Explanation",
        "Communication Help",
      ],
    },
  ];

  const templates = [
    "DSA Solution Corrector",
    "API Design",
    "System Design",
    "Clean Code",
    "Debug Code",
    "Auth Flow",
    "Complexity Analysis",
    "DB Schema",
    "Explain Backend Concept",
    "React Clean Code",
    "Behavioral Answer",
    "Scaling Strategy",
  ];

  const pricing = [
    {
      title: "Free",
      price: "₹0",
      features: [
        "Starter Credits",
        "Core Templates",
        "Basic Generations",
      ],
    },
    {
      title: "Pro",
      price: "₹149/mo",
      features: [
        "More Credits",
        "Full Template Access",
        "Priority Responses",
      ],
      highlighted: true,
    }
  ];

  const faqs = [
    {
      q: "How does the credit system work?",
      a: "Each generation consumes credits based on output size and AI model usage.",
    },
    {
      q: "Do I get free credits?",
      a: "Yes. New users receive starter credits after signup.",
    },
    {
      q: "Is this useful for interview preparation?",
      a: "Yes. The platform is optimized for DSA explanations, system design, debugging, and technical communication.",
    },
    {
      q: "Can I save generated outputs?",
      a: "Yes. Users can revisit generations from their dashboard history.",
    },
  ];

  const router = useRouter();

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-black text-white font-bold">
              AI
            </div>
            <div>
              <p className="text-lg font-semibold">PromptStack</p>
            </div>
          </div>

          <nav className="hidden items-center gap-8 md:flex">
            <Link href="#features" className="text-sm text-gray-600 hover:text-black">
              Features
            </Link>
            <Link href="#templates" className="text-sm text-gray-600 hover:text-black">
              Templates
            </Link>
            <Link href="#pricing" className="text-sm text-gray-600 hover:text-black">
              Pricing
            </Link>
            <Link href="#faq" className="text-sm text-gray-600 hover:text-black">
              FAQ
            </Link>
          </nav>

          <div className="flex-end">
            <Link
              href="/dashboard"
              className="rounded-xl bg-black px-5 py-2 text-sm font-medium text-white transition hover:bg-gray-800"
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,0,0,0.06),transparent_40%)]" />

        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 py-24 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="mb-5 inline-flex items-center rounded-full border border-gray-300 bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700">
              Built for developers & technical professionals
            </div>

            <h1 className="max-w-2xl text-5xl font-black leading-tight tracking-tight md:text-6xl">
              AI-Powered Technical Content Generation Platform
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
              Generate structured answers for DSA, system design,
              debugging, backend engineering, interview preparation, and
              technical learning using specialized AI templates.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <button className="rounded-2xl bg-black px-7 py-4 text-sm font-semibold text-white transition hover:scale-[1.02] hover:bg-gray-800" onClick={() => router.push("/dashboard")}>
                Start Free
              </button>

              <button className="rounded-2xl border border-gray-300 px-7 py-4 text-sm font-semibold transition hover:bg-gray-100">
                Explore Templates
              </button>
            </div>

            <div className="mt-12 flex flex-wrap gap-8">
              <div>
                <p className="text-3xl font-bold">50+</p>
                <p className="text-sm text-gray-500">Templates</p>
              </div>

              <div>
                <p className="text-3xl font-bold">10K+</p>
                <p className="text-sm text-gray-500">Generations</p>
              </div>

              <div>
                <p className="text-3xl font-bold">24/7</p>
                <p className="text-sm text-gray-500">AI Assistance</p>
              </div>
            </div>
          </div>

          {/* Hero Mockup */}
          <div className="relative">
            <div className="absolute -left-10 top-10 h-72 w-72 rounded-full bg-gray-200 blur-3xl" />

            <div className="relative rounded-3xl border border-gray-200 bg-white p-5 shadow-2xl">
              <div className="mb-4 flex items-center justify-between border-b border-gray-200 pb-4">
                <div>
                  <p className="font-semibold">Template Dashboard</p>
                  <p className="text-sm text-gray-500">
                    Specialized AI templates
                  </p>
                </div>

                <div className="rounded-xl bg-black px-4 py-2 text-xs font-medium text-white">
                  Pro
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {templates.slice(0, 8).map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-gray-200 bg-gray-50 p-4 transition hover:-translate-y-1 hover:shadow-lg"
                  >
                    <p className="font-semibold text-sm">{item}</p>
                    <p className="mt-2 text-xs text-gray-500">
                      Structured AI response
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-2xl bg-black p-5 text-white">
                <p className="text-sm text-gray-300">Prompt</p>
                <p className="mt-2 text-sm leading-6">
                  Explain sliding window approach for longest substring
                  without repeating characters.
                </p>

                <div className="mt-5 rounded-xl bg-white/10 p-4 text-sm text-gray-200">
                  Generates:
                  <ul className="mt-3 space-y-2 text-xs">
                    <li>• Intuition</li>
                    <li>• Step-by-step explanation</li>
                    <li>• Time & space complexity</li>
                    <li>• Edge cases</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="bg-gray-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
              Features
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-tight">
              Everything Technical. One Platform.
            </h2>

            <p className="mt-5 text-lg text-gray-600">
              Specialized prompt templates designed for developers,
              students, engineers, and technical interview preparation.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-3xl border border-gray-200 bg-white p-8 transition hover:-translate-y-1 hover:shadow-xl"
              >
                <h3 className="text-xl font-bold">{feature.title}</h3>

                <div className="mt-6 space-y-4">
                  {feature.items.map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <div className="h-2 w-2 rounded-full bg-black" />
                      <p className="text-gray-600">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
              Process
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-tight">
              Generate Better Technical Content In Seconds
            </h2>
          </div>

          <div className="mt-20 grid gap-8 md:grid-cols-3">
            <div className="rounded-3xl border border-gray-200 p-8">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-black text-xl font-bold text-white">
                1
              </div>

              <h3 className="mt-6 text-2xl font-bold">
                Choose a Template
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                Pick from DSA, backend engineering, debugging, React,
                system design, interview preparation, and more.
              </p>
            </div>

            <div className="rounded-3xl border border-gray-200 p-8">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-black text-xl font-bold text-white">
                2
              </div>

              <h3 className="mt-6 text-2xl font-bold">
                Enter Your Prompt
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                Describe your problem, concept, code, or interview question
                naturally.
              </p>
            </div>

            <div className="rounded-3xl border border-gray-200 p-8">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-black text-xl font-bold text-white">
                3
              </div>

              <h3 className="mt-6 text-2xl font-bold">
                Get Structured Output
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                Receive organized technical explanations, breakdowns,
                solutions, and formatted content instantly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Templates */}
      <section id="templates" className="bg-black py-24 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-400">
                Template Library
              </p>

              <h2 className="mt-4 text-4xl font-black tracking-tight">
                50+ Specialized Prompt Templates
              </h2>
            </div>

            <p className="max-w-xl text-lg leading-8 text-gray-400">
              Built specifically for technical use-cases instead of generic
              AI conversations.
            </p>
          </div>

          <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {templates.map((template) => (
              <div
                key={template}
                className="rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:border-white/20 hover:bg-white/10"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-lg">
                  ✦
                </div>

                <h3 className="mt-6 font-semibold">{template}</h3>

                <p className="mt-3 text-sm leading-6 text-gray-400">
                  Structured AI response optimized for technical clarity.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
              Why This Platform
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-tight">
              Better Than Generic AI Conversations
            </h2>
          </div>

          <div className="mt-16 overflow-hidden rounded-3xl border border-gray-200">
            <div className="grid grid-cols-2 bg-gray-100">
              <div className="border-r border-gray-200 p-6 font-bold">
                Generic AI Tools
              </div>

              <div className="p-6 font-bold">Your Platform</div>
            </div>

            {[
              ["Requires repeated prompting", "Specialized prompt templates"],
              ["Generic answers", "Structured technical outputs"],
              ["Inconsistent formatting", "Organized responses"],
              ["Hard to learn with", "Built for technical learning"],
              ["Unfocused responses", "Developer-oriented content"],
            ].map((row, index) => (
              <div
                key={index}
                className="grid grid-cols-2 border-t border-gray-200"
              >
                <div className="border-r border-gray-200 p-6 text-gray-600">
                  {row[0]}
                </div>

                <div className="p-6 font-medium">{row[1]}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="bg-gray-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
              Pricing
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-tight">
              Flexible Credit-Based Pricing
            </h2>
          </div>

          <div className="flex max-sm:flex-col items-center justify-center mt-16 gap-8">
            {pricing.map((plan) => (
              <div
                key={plan.title}
                className={`rounded-3xl border p-16 ${
                  plan.highlighted
                    ? "border-black bg-black text-white"
                    : "border-gray-200 bg-white"
                }`}
              >
                <h3 className="text-2xl font-bold">{plan.title}</h3>

                <p className="mt-6 text-5xl font-black">{plan.price}</p>

                <div className="mt-8 space-y-4">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-3">
                      <div
                        className={`h-2 w-2 rounded-full ${
                          plan.highlighted ? "bg-white" : "bg-black"
                        }`}
                      />
                      <p
                        className={
                          plan.highlighted ? "text-gray-300" : "text-gray-600"
                        }
                      >
                        {feature}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
              FAQ
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-tight">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="mt-16 space-y-5">
            {faqs.map((faq) => (
              <div
                key={faq.q}
                className="rounded-3xl border border-gray-200 p-8"
              >
                <h3 className="text-xl font-bold">{faq.q}</h3>
                <p className="mt-4 leading-7 text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-black px-10 py-20 text-center text-white">
          <h2 className="mx-auto max-w-4xl text-4xl font-black tracking-tight md:text-5xl">
            Build Faster With Specialized AI Templates For Developers
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-400">
            Generate technical explanations, debug problems, improve
            interview preparation, and accelerate your learning workflow.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <button className="rounded-2xl bg-white px-8 py-4 font-semibold text-black transition hover:bg-gray-200" onClick={() => router.push("/dashboard")}>
              Start Free
            </button>

            <button className="rounded-2xl border border-white/20 px-8 py-4 font-semibold text-white transition hover:bg-white/10">
              Browse Templates
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-6 text-sm text-gray-500 md:flex-row">
          <p>© 2026 PromptStack. All rights reserved.</p>

          <div className="flex gap-6">
            <Link href="#">Terms</Link>
            <Link href="#">Privacy</Link>
            <Link href="#">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
