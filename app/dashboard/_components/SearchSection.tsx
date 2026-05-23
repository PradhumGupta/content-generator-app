import { Search } from 'lucide-react'
import React from 'react'

interface SearchSectionProps {
  onSearchInput: (value: string) => void;
}

function SearchSection({ onSearchInput }: SearchSectionProps) {
  const stats = [
    { value: "50+", label: "Templates" },
    { value: "8", label: "Categories" },
    { value: "24/7", label: "AI Assist" },
  ];

  return (
    <section className="border-b border-gray-200 bg-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:py-16">
        <div>
          <div className="mb-5 inline-flex items-center rounded-full border border-gray-300 bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700">
            Developer templates
          </div>

          <h1 className="max-w-3xl text-4xl font-black leading-tight tracking-tight md:text-5xl">
            Browse All Templates
          </h1>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-600">
            Generate structured answers for DSA, backend engineering, debugging,
            system design, frontend work, and interview preparation.
          </p>

          <div className='mt-8 flex w-full max-w-2xl items-center gap-3 rounded-2xl border border-gray-200 bg-gray-50 px-5 py-4'>
            <Search className='h-5 w-5 shrink-0 text-gray-500' />
            <input
              type="text"
              placeholder='Search templates'
              onChange={(event) => onSearchInput(event.target.value)}
              className='w-full bg-transparent text-sm font-medium outline-none placeholder:text-gray-500'
            />
          </div>
        </div>

        <div className="rounded-3xl bg-black p-6 text-white">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-400">
            Workspace
          </p>
          <h2 className="mt-4 text-3xl font-black tracking-tight">
            Purpose-built technical workflows
          </h2>
          <div className="mt-8 grid grid-cols-3 gap-4">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl font-bold">{stat.value}</p>
                <p className="mt-1 text-xs text-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default SearchSection
