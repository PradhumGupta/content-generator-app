"use client"
import React, { useContext, useState } from 'react';
import axios from "axios"
import { Check, Loader2Icon } from 'lucide-react';
import { db } from '@/utils/db';
import { UserSubscription } from '@/utils/schema';
import { useUser } from '@clerk/nextjs';
import moment from 'moment';
import { UserSubscriptionContext } from '@/app/(context)/UserSubscriptionContext';
import Script from 'next/script';

function BillingPage() {
  const billingHistory = [
    { id: 1, date: '2023-10-20', description: 'Monthly Subscription', amount: 'Rs 149', status: 'Paid' },
    { id: 2, date: '2023-09-20', description: 'Monthly Subscription', amount: 'Rs 149', status: 'Paid' },
    { id: 3, date: '2023-08-20', description: 'Monthly Subscription', amount: 'Rs 149', status: 'Paid' },
    { id: 4, date: '2023-07-20', description: 'Monthly Subscription', amount: 'Rs 149', status: 'Paid' },
    { id: 5, date: '2023-06-20', description: 'Monthly Subscription', amount: 'Rs 149', status: 'Paid' },
  ];

  const {userSubscription} = useContext(UserSubscriptionContext);
  const { user } = useUser();
  const currentPlan = userSubscription ? "Pro Plan" : "Free Plan";

  const plans = [
    {
      name: 'Free Plan',
      price: 'Rs 0/month',
      features: ['Starter credits', 'Core templates', 'Basic generations'],
      isCurrent: !userSubscription,
    },
    {
      name: 'Pro Plan',
      price: 'Rs 149/month',
      features: ['Higher credit limit', 'Full template access', 'Priority responses', 'Extended history'],
      isCurrent: userSubscription,
      highlighted: true,
    },
  ];

  const [loading, setLoading] = useState(false);

  const createSubscription = async () => {
    setLoading(true)

    try {
      const response = await axios.post('/api/create-subscription', {})
      onPayment(response.data.id)
    } catch {
      setLoading(false);
    }
  }

  const onPayment = (subId: string) => {
    const options = {
      "key": process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      "subscription": subId,
      "name": "PG Solutions",
      description: "Monthly Subscription",
      handler: async (resp: any) => {
        if(resp) {
          saveSubscription(resp?.razorpay_payment_id)
        }
        setLoading(false);
      }
    }

    // @ts-ignore
    const rzp = new window.Razorpay(options);
    rzp.open()
  }

  const saveSubscription = async (paymentId: string) => {
    const result = await db.insert(UserSubscription)
    .values({
      email: user?.primaryEmailAddress?.emailAddress,
      username: user?.fullName,
      active: true,
      paymentId: paymentId,
      join_date: moment().format('DD/MM/YYYY')
    });

    if(result) {
      window.location.reload();
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Script src="https://checkout.razorpay.com/v1/checkout.js" strategy="afterInteractive" />

      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <h1 className="text-4xl font-black tracking-tight">
              Billing & Payments
            </h1>
            <p className="max-w-2xl text-md leading-8 text-gray-600">
              Manage your subscription, review plan access, and track billing history.
            </p>
          </div>

          <div className="w-fit rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-gray-700">
            Current: {currentPlan}
          </div>
        </div>

        <section className="mt-10 rounded-3xl border border-gray-200 bg-white p-6 shadow-sm md:p-8">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
                Plans
              </p>
              <h2 className="mt-3 text-2xl font-black tracking-tight">
                Choose Your Plan
              </h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-gray-600">
              Credit limits unlock more room for longer technical generations.
            </p>
          </div>

          <div className="mt-8 flex max-sm:flex-col justify-center gap-8">
            {plans.map((plan) => (
              <article
                key={plan.name}
                className={`rounded-3xl border p-8 md:px-12 md:p-8 transition hover:-translate-y-1 ${
                  plan.highlighted
                    ? 'border-black bg-black text-white'
                    : 'border-gray-200 bg-white text-black'
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-bold">{plan.name}</h3>
                    <p className={`mt-2 text-sm ${plan.highlighted ? 'text-gray-400' : 'text-gray-500'}`}>
                      {plan.isCurrent ? 'Active plan' : 'Available plan'}
                    </p>
                  </div>
                  {plan.isCurrent && (
                    <span className={`rounded-full px-3 py-1 text-xs font-semibold ${plan.highlighted ? 'bg-white text-black' : 'bg-gray-100 text-gray-700'}`}>
                      Current
                    </span>
                  )}
                </div>

                <p className="mt-8 text-4xl font-black">{plan.price}</p>

                <div className="mt-8 space-y-4">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-3">
                      <Check className={`h-4 w-4 ${plan.highlighted ? 'text-white' : 'text-black'}`} />
                      <p className={plan.highlighted ? "text-gray-300" : "text-gray-600"}>
                        {feature}
                      </p>
                    </div>
                  ))}
                </div>

                <button
                  onClick={async () => {
                    if(plan.name === "Pro Plan") {
                      await createSubscription()
                    }
                  }}
                  className={`mt-8 w-full rounded-2xl px-5 py-3 text-sm font-semibold transition ${
                    plan.isCurrent
                      ? plan.highlighted
                        ? 'cursor-default bg-white text-black'
                        : 'cursor-default bg-black text-white'
                      : plan.highlighted
                        ? 'bg-white text-black hover:bg-gray-200'
                        : 'bg-gray-100 text-black hover:bg-gray-200'
                  }`}
                  disabled={loading || plan.isCurrent || plan.name === "Free Plan"}
                >
                  {plan.isCurrent
                    ? 'Current Plan'
                    : loading && plan.name === "Pro Plan"
                      ? <Loader2Icon className='mx-auto h-4 w-4 animate-spin'/>
                      : plan.name === "Pro Plan"
                        ? 'Select Plan'
                        : 'Included'}
                </button>
              </article>
            ))}
          </div>
        </section>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm md:p-8">
            <div className="flex justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
                  Current Plan
                </p>
                <h2 className="mt-3 text-2xl font-black tracking-tight">{currentPlan}</h2>
              </div>
              <button className="text-sm font-semibold text-black hover:text-gray-600">Change Plan</button>
            </div>
            <p className="mt-5 text-sm leading-6 text-gray-600">
              Plan status updates automatically after a successful Razorpay payment.
            </p>
          </section>

          <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm md:p-8">
            <div className="flex justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
                  Payment Method
                </p>
                <h2 className="mt-3 text-2xl font-black tracking-tight">Saved Card</h2>
              </div>
              <button className="text-sm font-semibold text-black hover:text-gray-600">Update</button>
            </div>
            <div className="mt-5 flex items-center gap-4 text-sm">
              <div className="flex h-10 w-14 items-center justify-center rounded-xl border border-gray-200 bg-gray-50 text-xs font-bold">
                VISA
              </div>
              <p className="text-gray-600">Visa ending in **1234</p>
            </div>
          </section>
        </div>

        <section className="mt-8 overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm">
          <div className="border-b border-gray-200 p-6 md:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
              Payments
            </p>
            <h2 className="mt-3 text-2xl font-black tracking-tight">Billing History</h2>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr>
                  {["Date", "Description", "Amount", "Status"].map((column) => (
                    <th
                      key={column}
                      className="border-b border-gray-200 bg-gray-50 px-5 py-4 text-left text-xs font-bold uppercase tracking-[0.16em] text-gray-500"
                    >
                      {column}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {billingHistory.map((item) => (
                  <tr key={item.id} className="border-b border-gray-100 last:border-0 hover:bg-gray-50">
                    <td className="px-5 py-5 text-sm text-gray-600">
                      {item.date}
                    </td>
                    <td className="px-5 py-5 text-sm font-semibold text-black">
                      {item.description}
                    </td>
                    <td className="px-5 py-5 text-sm text-gray-600">
                      {item.amount}
                    </td>
                    <td className="px-5 py-5 text-sm">
                      <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-700">
                        {item.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
}

export default BillingPage
