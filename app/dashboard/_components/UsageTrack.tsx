"use client";

import { Button } from '@/components/ui/button'
import { db } from '@/utils/db'
import { AIOutput, UserSubscription } from '@/utils/schema'
import { useUser } from '@clerk/nextjs'
import { and, eq } from 'drizzle-orm'
import React, { useContext, useEffect, useState } from 'react'
import { HISTORY } from '../history/page'
import { TotalUsageContext } from '@/app/(context)/TotalUsageContext';
import { UserSubscriptionContext } from '@/app/(context)/UserSubscriptionContext';
import { TrackCreditUsage } from '@/app/(context)/TrackCreditUsage';
import Link from 'next/link';

function UsageTrack() {

    const {user} = useUser()
    const {totalUsage, setTotalUsage} = useContext(TotalUsageContext)
    const {userSubscription, setUserSubscription} = useContext(UserSubscriptionContext)
    const [maxWords, setMaxWords] = useState(10000)
    const {creditUsage, setCreditUsage} = useContext(TrackCreditUsage);

    useEffect(() => {
        user && getData();
        user && isUserSubscribed();
    }, [user])

    useEffect(() => {
        user && getData()
    }, [creditUsage, user]);

    const getData = async () => {
        // @ts-ignore
        const result: HISTORY[] = await db.select().from(AIOutput).where(eq(AIOutput.createdBy, user?.primaryEmailAddress?.emailAddress))

        getTotalUsage(result)
    }

    const getTotalUsage = (result: HISTORY[]) => {
        let total = 0;
        result.forEach(element => {
            total = total + Number(element.aiResponse?.length)
        });

        setTotalUsage(total)
    }

    const isUserSubscribed =  async () => {
        const result  = await db.select().from(UserSubscription)
        .where(and(UserSubscription.active, eq(UserSubscription.email, user!.primaryEmailAddress!.emailAddress)));

        if(result.length) {
            setUserSubscription(true)
            setMaxWords(1000000)
        }
    }

    const usagePercent = Math.min(100, Math.round((Number(totalUsage) / maxWords) * 100));

  return (
    <div>
        <div className='rounded-3xl bg-black p-5 text-white'>
            <div className="flex items-center justify-between gap-3">
                <h2 className='font-semibold'>Credits</h2>
                <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold">
                    {usagePercent}%
                </span>
            </div>
            <div className='mt-4 h-2 w-full rounded-full bg-white/10'>
                <div
                    className="h-2 rounded-full bg-white transition-all"
                    style={{ width: `${usagePercent}%` }}
                />
            </div>
            <p className='mt-3 text-xs leading-5 text-gray-400'>
                {Number(totalUsage).toLocaleString()}/{maxWords.toLocaleString()} credits used
            </p>
        </div>
        {!userSubscription && (
            <Button asChild variant={"outline"} className='mt-3 w-full rounded-2xl border-gray-200 bg-white text-black hover:bg-gray-100'>
                <Link href="/dashboard/billing">Upgrade</Link>
            </Button>
        )}
    </div>
  )
}

export default UsageTrack
