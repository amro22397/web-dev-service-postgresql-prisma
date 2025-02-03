'use client'

import React from 'react'
import { buttonVariants } from "@/components/ui/button"
import { Button } from "@/components/ui/button"
import Link from 'next/link'
import { useRouter } from 'next/navigation'


const page = () => {
  const router = useRouter();
  return (
    <div className='flex flex-row justify-center items-center my-80 gap-20'>
      <Button variant="outline" className='text-4xl border-none shadow-md font-sans pt-4 pb-6 px-10 bg-white text-black/75
      rounded-[6px] hover:bg-gray-200 hover:text-black/75 active:scale-95
      rounded-[6px]'
      onClick={() => router.push("/en")}>English</Button>

<Button variant="outline" className='text-4xl border-none shadow-md font-sans pt-4 pb-6 px-10 bg-white text-black/75
      rounded-[6px] hover:bg-gray-200 hover:text-black/75 active:scale-95'
      onClick={() => router.push("/ar")}>عربي</Button>
    </div>
  )
}

export default page
