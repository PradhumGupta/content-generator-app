"use client";

import { useState } from "react";
import { TotalUsageContext } from "../(context)/TotalUsageContext";
import Header from "./_components/Header";
import SideNav from "./_components/SideNav";
import { UserSubscriptionContext } from "../(context)/UserSubscriptionContext";
import { TrackCreditUsage } from "../(context)/TrackCreditUsage";

function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const [totalUsage, setTotalUsage]= useState<Number>(0)
  const [userSubscription, setUserSubscription]= useState<Boolean>(false)
  const [creditUsage, setCreditUsage]= useState<Number>(0)

  return (
    <TotalUsageContext.Provider value={{totalUsage, setTotalUsage}}>
  <UserSubscriptionContext.Provider value={{userSubscription, setUserSubscription}}>
    <TrackCreditUsage.Provider value={{creditUsage, setCreditUsage}}>
  <div className="min-h-screen">
    <div className="md:w-64 hidden md:block fixed">
        <SideNav />
    </div>
    <div className="md:ml-64">
        <Header />
        {children}
    </div>
  </div>
  </TrackCreditUsage.Provider>
  </UserSubscriptionContext.Provider>
  </TotalUsageContext.Provider>
  )
}

export default layout