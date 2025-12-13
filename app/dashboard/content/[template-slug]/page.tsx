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
    <div className="bg-secondary p-5">
        <Link href={'/dashboard'}>
            <Button><ArrowLeft /> Back</Button>
        </Link>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 py-5">
        {/* FormSection */}
        <FormSection selectedTemplate={selectedTemplate} userFormInput={(v:any) => GenerateAIContent(v)} loading={loading} />

        {/* OutputSection */}
        <div className="col-span-2">
            <OutputSection aiOutput={aiOutput} />
        </div>
        
        </div>
    </div>
  )
}

export default CreateNewContent