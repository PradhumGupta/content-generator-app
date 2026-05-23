import Templates from "@/app/(data)/Templates";
import { db } from "@/utils/db";
import { AIOutput } from "@/utils/schema";
import { currentUser } from "@clerk/nextjs/server";
import { desc, eq } from "drizzle-orm";
import Image from "next/image";
import React from "react";
import ToCopy from "./_components/ToCopy";

export interface HISTORY {
  id: number,
  formData: string,
  aiResponse: string | null;
  templateSlug: string,
  createdAt: string,
  createdBy: string;
}

async function Page() {

  const user = await currentUser();

  const result = await db
    .select()
    .from(AIOutput)
    .where(eq(AIOutput.createdBy, user!.primaryEmailAddress!.emailAddress))
    .orderBy(desc(AIOutput.id));

  const data = result.map((r) => {
    const template = Templates.find((T) => T.slug === r.templateSlug);
    return {
      id: r.id,
      icon: template?.icon as string,
      name: template?.name?.replace(/-/g, " ") || r.templateSlug,
      aiResponse: r.aiResponse,
      date: r.createdAt,
      words: r.aiResponse ? r.aiResponse.trim().split(/\s+/).filter(Boolean).length : 0,
    };
  });

  const columns = ["Template", "AI response", "Date", "Words", "Copy"];

  const handleClick = () => {
    console.log('Button clicked');
  };


  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="mb-8">
          <h1 className="text-4xl font-black tracking-tight">
            Generated Content History
          </h1>
          <p className="max-w-2xl text-md leading-8 text-gray-600">
            Revisit previous generations and copy useful technical outputs.
          </p>
        </div>

        {/* Table container */}
        <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm">
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr>
                  {columns.map((column, index) => (
                    <th
                      key={index}
                      className="border-b border-gray-200 bg-gray-50 px-5 py-4 text-left text-xs font-bold uppercase tracking-[0.16em] text-gray-500"
                    >
                      {column}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {data.map((row) => (
                  <tr key={row.id} className="border-b border-gray-100 transition-colors duration-200 last:border-0 hover:bg-gray-50">
                    <td className="px-5 py-5 text-sm align-middle">
                        <div className="flex min-w-56 items-center gap-3">
                      {row.icon && <Image src={row.icon} alt="" width={28} height={28} className="rounded-full" />}
                      <span className="font-semibold text-black">{row.name}</span>
                      </div>
                    </td>
                    <td className="px-5 py-5 align-middle">
                      <p className="max-w-xl line-clamp-3 text-sm leading-6 text-gray-600">
                        {row.aiResponse}
                      </p>
                    </td>
                    <td className="px-5 py-5 text-sm text-gray-600 align-middle">{row.date}</td>
                    <td className="px-5 py-5 text-sm font-semibold align-middle">{row.words}</td>
                    <td className="px-5 py-5 text-sm align-middle">
                      <ToCopy output={row.aiResponse || ""} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
