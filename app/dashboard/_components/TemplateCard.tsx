import Image from "next/image"
import { TEMPLATE } from "./TemplateListSection"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

function TemplateCard(item: TEMPLATE) {
  const displayName = item.name.replace(/-/g, " ");

  return (
    <Link href={'/dashboard/content/'+item?.slug} className="group block h-full">
      <article className="flex h-full min-h-72 flex-col rounded-3xl border border-gray-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-xl">
        <div className="flex items-start justify-between gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gray-50">
            <Image src={item.icon} alt='' width={34} height={34} />
          </div>
          <ArrowUpRight className="h-5 w-5 text-gray-400 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-black" />
        </div>

        <div className="mt-6">
          <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-600">
            {item.category}
          </span>
          <h3 className="mt-4 text-xl font-bold tracking-tight text-black">
            {displayName}
          </h3>
          <p className="mt-3 line-clamp-3 text-sm leading-6 text-gray-600">
            {item.desc}
          </p>
        </div>

        <p className="mt-auto pt-6 text-sm font-semibold text-black">
          Open template
        </p>
      </article>
    </Link>
  )
}

export default TemplateCard
