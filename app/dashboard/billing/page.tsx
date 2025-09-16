"use client"
import React, { useContext, useEffect, useState } from 'react';
import axios from "axios"
import { Loader2Icon } from 'lucide-react';
import { db } from '@/utils/db';
import { UserSubscription } from '@/utils/schema';
import { useUser } from '@clerk/nextjs';
import moment from 'moment';
import { UserSubscriptionContext } from '@/app/(context)/UserSubscriptionContext';

// Main App component for the Billing page
function page() {
  // Dummy data for billing history
  const [billingHistory] = useState([
    { id: 1, date: '2023-10-20', description: 'Monthly Subscription', amount: '₹149', status: 'Paid' },
    { id: 2, date: '2023-09-20', description: 'Monthly Subscription', amount: '₹149', status: 'Paid' },
    { id: 3, date: '2023-08-20', description: 'Monthly Subscription', amount: '₹149', status: 'Paid' },
    { id: 4, date: '2023-07-20', description: 'Monthly Subscription', amount: '₹149', status: 'Paid' },
    { id: 5, date: '2023-06-20', description: 'Monthly Subscription', amount: '₹149', status: 'Paid' },
  ]);

  const {userSubscription} = useContext(UserSubscriptionContext);

  const { user } = useUser();


  // Plan details for the pricing section
  const plans = [
    {
      name: 'Free Plan',
      price: '₹0/month',
      features: ['Up to 5 documents', 'Basic collaboration', 'Standard support'],
      isCurrent: !userSubscription,
    },
    {
      name: 'Pro Plan',
      price: '₹149/month',
      features: ['Unlimited documents', 'Advanced collaboration', 'Priority support', 'Custom branding'],
      isCurrent: userSubscription,
    },
  ];

  const [loading, setLoading] = useState(false);

  const createSubscription = async () => {
    setLoading(true)
    axios.post('/api/create-subscription', {})
    .then(response => {
      console.log(response.data)
      onPayment(response.data.id)
    }, (error)=> {
      setLoading(false);
    })
  }

  const onPayment = (subId: string) => {
    const options = {
      "key": process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      "subscription": subId,
      "name": "PG Solutions",
      description: "Monthly Subscription",
      handler: async (resp: any) => {
        console.log(resp);
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
    console.log(result)
    if(result) {
      window.location.reload();
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4 font-sans">
      <script src="https://checkout.razorpay.com/v1/checkout.js"></script>
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-6 md:p-10">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-2">Billing & Payments</h2>
        <p className="text-gray-500 mb-8">Manage your subscriptions, view payment history, and update your payment information.</p>

        {/* Pricing section */}
        <div className="bg-white rounded-lg p-6 mb-8 border border-gray-200">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Choose Your Plan</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`p-6 rounded-lg border-2 ${
                  plan.isCurrent ? 'border-blue-500 shadow-lg' : 'border-gray-200'
                } transition-all duration-300 transform hover:scale-105`}
              >
                <h4 className="text-2xl font-bold text-gray-900">{plan.name}</h4>
                <p className="text-4xl font-extrabold my-2">{plan.price}</p>
                <ul className="mt-4 space-y-2 text-sm text-gray-600">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2.5}
                        stroke="currentColor"
                        className={`w-4 h-4 mr-2 ${plan.isCurrent ? 'text-blue-500' : 'text-green-500'}`}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={async () =>{ 
                    if(plan.name === "Pro Plan") {
                      await createSubscription()
                    }
                  }}
                  className={`mt-6 w-full py-2 rounded-lg text-sm font-semibold transition-colors duration-200 ${
                    plan.isCurrent
                      ? 'bg-blue-500 text-white cursor-default'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300 cursor-pointer'
                  }`}
                  disabled={loading || plan.isCurrent }
                >
                  {plan.isCurrent ? 'Current Plan' : loading ? <Loader2Icon className='animate-spin mx-auto'/> : plan.name != 'Free Plan' && 'Select Plan'}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Current Plan section */}
        <div className="bg-white rounded-lg p-6 mb-8 border border-gray-200">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-bold text-gray-800">Current Plan</h3>
            <button className="text-blue-600 hover:text-blue-800 font-semibold text-sm">Change Plan</button>
          </div>
          <div className="text-sm">
            <p className="text-gray-700">You are currently on the <span className="font-semibold">{}</span>.</p>
            <p className="text-gray-500 mt-1">Renews on October 20, 2023.</p>
          </div>
        </div>

        {/* Payment Method section */}
        <div className="bg-white rounded-lg p-6 mb-8 border border-gray-200">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-bold text-gray-800">Payment Method</h3>
            <button className="text-blue-600 hover:text-blue-800 font-semibold text-sm">Update</button>
          </div>
          <div className="flex items-center space-x-4 text-sm">
            <div className="w-10 h-6 bg-gray-200 rounded-md flex items-center justify-center">
              {/* Placeholder for card icon */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-400">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-1.5 8.25L12 18l-1.5 2.25M12 21a2.25 2.25 0 100-4.5A2.25 2.25 0 0012 21z" />
              </svg>
            </div>
            <p className="text-gray-700">Visa ending in **1234</p>
          </div>
        </div>

        {/* Billing History section */}
        <div className="bg-white rounded-lg p-6 border border-gray-200">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Billing History</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full leading-normal">
              <thead>
                <tr>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Description
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Amount
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {billingHistory.map((item) => (
                  <tr key={item.id} className="hover:bg-gray-50 transition-colors duration-200">
                    <td className="px-5 py-5 border-b border-gray-200 text-sm text-gray-900">
                      {item.date}
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 text-sm text-gray-900">
                      {item.description}
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 text-sm text-gray-900">
                      {item.amount}
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 text-sm">
                      <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                        <span aria-hidden className="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
                        <span className="relative">{item.status}</span>
                      </span>
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


export default page