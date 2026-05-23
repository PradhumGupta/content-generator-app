import { UserProfile } from '@clerk/nextjs'
import React from 'react'

function Settings() {
  return (
    <div className='min-h-screen bg-gray-50 px-6 py-10'>
      <div className="mx-auto max-w-7xl">
        <div className="mb-8">
          <h1 className="text-4xl font-black tracking-tight">
            Account Settings
          </h1>
          <p className="max-w-2xl text-md leading-8 text-gray-600">
            Manage your profile and account preferences.
          </p>
        </div>

        <div className='flex justify-center rounded-3xl border border-gray-200 bg-white p-4 shadow-sm md:p-8'>
          <UserProfile routing="hash" />
        </div>
      </div>
    </div>
  )
}

export default Settings
