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
      <Button variant="outline" className='text-4xl border-none shadow-md font-sans py-4 text-black/75
      rounded-[6px]'
      onClick={() => router.push("/en")}>English</Button>

<Button variant="outline" className='text-4xl border-none shadow-md font-sans py-4 text-black/75
      rounded-[6px]'
      onClick={() => router.push("/ar")}>عربي</Button>
    </div>
  )
}

export default page
