"use client";

import FormSection from "../_components/FormSection"
import OutputSection from "../_components/OutputSection"
import { TEMPLATE } from "../../_components/TemplateListSection"
import Templates from "@/app/(data)/Templates"
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { getResponse } from "@/utils/AiModel";
import { useContext, useState, use } from "react";
import { db } from "@/utils/db";
import { AIOutput } from "@/utils/schema";
import { useUser } from "@clerk/nextjs";
import moment from "moment";
import { TotalUsageContext } from "@/app/(context)/TotalUsageContext";
import { useRouter } from "next/navigation";
import { UserSubscriptionContext } from "@/app/(context)/UserSubscriptionContext";
import { TrackCreditUsage } from "@/app/(context)/TrackCreditUsage";

function CreateNewContent({
  params,
}: {
  params: Promise<{ "template-slug": string }>;
}) {

    const selectedTemplate: TEMPLATE | undefined = Templates?.find((item) => item.slug === use(params)["template-slug"]);
    const [loading, setLoading] = useState(false);
    const [aiOutput, setAiOutput] = useState<string>('');
    const { user } = useUser()
    const {totalUsage, setTotalUsage} = useContext(TotalUsageContext)
    const router = useRouter()
    const {userSubscription, setUserSubscription} = useContext(UserSubscriptionContext)
    const {creditUsage, setCreditUsage} = useContext(TrackCreditUsage)
    const superUser = process.env.NEXT_PUBLIC_SUPERUSER_EMAIL === user?.primaryEmailAddress?.emailAddress

    const GenerateAIContent = async (formData: any) => {

        if(totalUsage >= 10000 && !userSubscription && !superUser) {
            alert("Free Credits used. Upgrade to access more content")
            router.push('/dashboard/billing')
            return;
        }

        setLoading(true);
        const selectedPrompt = selectedTemplate?.aiPrompt;

        const AIPrompt = JSON.stringify(formData) + ", " + selectedPrompt;

        const response = await getResponse(AIPrompt) as string;

        setAiOutput(response);
        await SaveInDB(formData, selectedTemplate?.slug, response)
        setLoading(false);
        setCreditUsage(Date.now())
    }

    const SaveInDB = async (formData: any, slug: any, response: string) => {
        const result = await db.insert(AIOutput).values({
            formData,
            templateSlug: slug,
            aiResponse: response,
            createdBy: user!.primaryEmailAddress!.emailAddress,
            createdAt: moment().format('DD/MM/YYYY')
        })

        console.log(result);
    }


  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 py-8">
        <Button asChild variant="outline" className="rounded-2xl border-gray-200 bg-white px-5 py-5 text-sm font-semibold hover:bg-gray-100">
          <Link href={'/dashboard'}>
            <ArrowLeft className="h-4 w-4" /> Back
          </Link>
        </Button>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
        {/* FormSection */}
        <FormSection selectedTemplate={selectedTemplate} userFormInput={(v:any) => GenerateAIContent(v)} loading={loading} />

        {/* OutputSection */}
        <div className="col-span-2">
            <OutputSection aiOutput={aiOutput} />
        </div>
        
        </div>
      </div>
    </div>
  )
}

export default CreateNewContent
