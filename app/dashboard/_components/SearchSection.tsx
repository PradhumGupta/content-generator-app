import { Button } from '@/components/ui/button'
import { Search } from 'lucide-react'
import React from 'react'

function SearchSection({ onSearchInput }: any) {
  return (
    <div className="container flex flex-col items-center gap-2 py-8 text-center md:py-16 lg:py-20 xl:gap-4">
        <h1 className="text-primary  text-4xl font-semibold tracking-tight text-balance lg:leading-[1.1] lg:font-semibold xl:text-5xl xl:tracking-tighter max-w-4xl">
            Browse All Templates
        </h1>
        <p className="text-foreground max-w-3xl text-base text-balance sm:text-lg">
            What would you like to create today?
        </p>
        <div className='w-full flex justify-center'>
            <div className='flex gap-2 items-center p-2 border rounded-md my-5 w-[40%]'>
                <Search className='text-primary' />
                <input type="text" placeholder='Search' onChange={(event) => onSearchInput(event.target.value)} className='bg-transparent w-full outline-none' />
            </div>
        </div>

    </div>
  )
}

export default SearchSection