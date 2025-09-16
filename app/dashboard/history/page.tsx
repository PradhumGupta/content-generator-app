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
      name: template?.name,
      aiResponse: r.aiResponse,
      date: r.createdAt,
      words: r.aiResponse!.trim().split(/\s+/).length,
    };
  });

  const columns = ["Template", "AI response", "Date", "Words", "Copy"];

  const handleClick = () => {
    console.log('Button clicked');
  };


  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="min-h-screen w-full bg-white shadow-lg rounded-md overflow-hidden p-6">
        <h2 className="text-3xl font-bold">History</h2>
        <p className="text-gray-400 text-sm mb-4">
          Search your previously generated AI content
        </p>
        {/* Table container */}
        <table className="min-w-full my-6">
          <thead>
            <tr>
              {columns.map((column, index) => (
                <th
                  key={index}
                  className="px-5 py-3 border-b-2 border-gray-200 bg-gray-50 text-left text-xs font-bold text-gray-600 uppercase"
                >
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row) => (
              <tr key={row.id} className="hover:bg-gray-100 transition-colors duration-200">
                <td className="px-5 py-5 text-sm align-middle">
                    <div className="flex gap-2">
                  <Image src={row.icon} alt="" width={20} height={20} className="rounded-full" />
                  <span>{row.name}</span>
                  </div>
                </td>
                <td className="px-5 py-5 text-sm line-clamp-3 align-middle">
                  {row.aiResponse}
                </td>
                <td className="px-5 py-5 text-sm align-middle">{row.date}</td>
                <td className="px-5 py-5 text-sm align-middle">{row.words}</td>
                <td className="px-5 py-5 text-sm align-middle">
                  <ToCopy output={row.aiResponse || ""} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Page;
