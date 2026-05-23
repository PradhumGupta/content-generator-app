import Templates from "@/app/(data)/Templates"
import TemplateCard from "./TemplateCard"
import { useMemo, useState } from "react"

export interface TEMPLATE {
    name: string,
    desc: string,
    icon: string,
    category: string,
    slug: string,
    aiPrompt: string,
    form?: FORM[]
}

export interface FORM {
    label: string,
    field: string,
    name: string,
    required?: boolean
}

interface TemplateListSectionProps {
  userSearchInput?: string;
}

function TemplateListSection({userSearchInput}: TemplateListSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const categories = useMemo(() => (
    ["All", ...Array.from(new Set(Templates.map((item) => item.category)))]
  ), []);

  const templateList = useMemo(() => {
    const normalizedSearch = userSearchInput?.trim().toLowerCase();

    return Templates.filter((item) => {
      const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
      const matchesSearch = !normalizedSearch ||
        item.name.toLowerCase().includes(normalizedSearch) ||
        item.desc.toLowerCase().includes(normalizedSearch) ||
        item.category.toLowerCase().includes(normalizedSearch);

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, userSearchInput])

  return (
    <section className="bg-gray-50 py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
              Template Library
            </p>
            <h2 className="mt-4 text-4xl font-black tracking-tight">
              50+ Specialized Workflows
            </h2>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-gray-600">
              Pick a focused template and get a structured response for the
              exact technical task in front of you.
            </p>
          </div>

          <div className="w-fit rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-gray-700">
            {templateList.length} templates
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                selectedCategory === category
                  ? "border-black bg-black text-white"
                  : "border-gray-200 bg-white text-gray-600 hover:border-gray-300 hover:text-black"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {templateList.length > 0 ? (
          <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
            {templateList.map((item: TEMPLATE, index: number) => (
                <TemplateCard key={index} {...item} />
            ))}
          </div>
        ) : (
          <div className="mt-10 rounded-3xl border border-dashed border-gray-300 bg-white p-10 text-center">
            <h3 className="text-xl font-bold">No templates found</h3>
            <p className="mt-3 text-gray-600">Try a different search or category.</p>
          </div>
        )}
      </div>
    </section>
  )
}

export default TemplateListSection
