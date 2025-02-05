'use client'

import { useSession } from 'next-auth/react'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import React from 'react'

const AddProject = () => {


    const session = useSession();

    const projectPage = useTranslations('ProjectsPage')

  return (
    <>
    {session.status === 'authenticated' && (

        <Link href="/add-project">
        <button className='bg-yellow-500 px-4 py-[6px] text-whites rounded-sm
        border-2 border-black max-sm:mx-2 mb-7
        font-semibold hover:bg-yellow-400 active:bg-yellow-300 transition-all duration-500'
    >{projectPage("Add Project")}</button>
        </Link>
    )}
    
    </>
    
  )
}

export default AddProject
