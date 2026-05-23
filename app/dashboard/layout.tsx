"use client";

import { useState } from "react";
import { TotalUsageContext } from "../(context)/TotalUsageContext";
import Header from "./_components/Header";
import SideNav from "./_components/SideNav";
import { UserSubscriptionContext } from "../(context)/UserSubscriptionContext";
import { TrackCreditUsage } from "../(context)/TrackCreditUsage";

function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const [totalUsage, setTotalUsage]= useState<number>(0)
  const [userSubscription, setUserSubscription]= useState<boolean>(false)
  const [creditUsage, setCreditUsage]= useState<number>(0)

  return (
    <TotalUsageContext.Provider value={{totalUsage, setTotalUsage}}>
  <UserSubscriptionContext.Provider value={{userSubscription, setUserSubscription}}>
    <TrackCreditUsage.Provider value={{creditUsage, setCreditUsage}}>
  <div className="min-h-screen bg-white text-black">
    <div className="fixed inset-y-0 left-0 z-50 hidden w-72 md:block">
        <SideNav />
    </div>
    <div className="min-h-screen md:ml-72">
        <Header />
        <main>{children}</main>
    </div>
  </div>
  </TrackCreditUsage.Provider>
  </UserSubscriptionContext.Provider>
  </TotalUsageContext.Provider>
  )
}

export default DashboardLayout
