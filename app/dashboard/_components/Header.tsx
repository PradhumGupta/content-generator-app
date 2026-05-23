"use client";

import { UserButton } from '@clerk/nextjs'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

function Header() {
  const path = usePathname();
  const title = path.includes('/billing')
    ? 'Billing'
    : path.includes('/history')
      ? 'History'
      : path.includes('/settings')
        ? 'Settings'
        : path.includes('/content')
          ? 'Content Generator'
          : 'Dashboard';

  return (
    <header className='sticky top-0 z-40 border-b border-gray-200 bg-white/80 backdrop-blur'>
      <div className='flex h-20 items-center justify-between gap-4 px-4 md:px-8'>
        <Link href="/dashboard" className="flex items-center gap-3 md:hidden">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-black text-sm font-bold text-white">
            AI
          </div>
          <p className="text-lg font-semibold">PromptStack</p>
        </Link>

        <div className='hidden md:block'>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
            PromptStack
          </p>
          <h1 className="mt-1 text-lg font-semibold text-black">{title}</h1>
        </div>

        <div className='ml-auto flex items-center gap-4'>
            <Link href="/dashboard/billing" className='hidden rounded-full border border-gray-200 bg-gray-100 px-4 py-2 text-xs font-semibold text-gray-700 transition hover:bg-gray-200 sm:inline-flex'>
                Upgrade workspace
            </Link>
            <UserButton/>
        </div>
      </div>
    </header>
  )
}

export default Header
