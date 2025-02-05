'use client'

import React, { useState } from 'react'
import { info } from '../../../constants/info'
import './page.css'
import Link from 'next/link'
import ContactForm from '../../../components/ContactForm'
import { usePathname } from 'next/navigation'

const page = () => {

  const pathName = usePathname();
    
  return (
    <div 
    className='contact-form'
    >
      <div className="containter mx-auto ">
        <div className="flex flex-col xl:flex-row gap-[30px]">

          <ContactForm />

          <div className="flex items-center xl:justify-end order-1
          xl:order-none mb-8 xl:mb-0 mx-auto">
            <ul className=''>
              {info.map((item, index) => {
                return (
                  <li key={index} className='flex flex-row gap-3 my-12'>

                    <div className='w-[52px] h-[52px] xl:w-[72px] xl:h-[72px]
                    bg-indigo-300 dark:bg-indigo-400/90 text-white rounded-md flex items-center
                    justify-center'>
                      <div className="text-[28px]">{item.icon}</div>
                    </div>

                    <div className="flex-1"> 
                    <p className="text-black dark:text-white font-semibold">
                        {pathName.includes("en") ? item.title : item.arTitle}
                      </p>

                      <h3 className="">
                      {pathName.includes("en") && item?.description ? item.description :
                      item?.arDescription && item.arDescription}
                      
                      {pathName.includes("en") && item?.link ? (
                        <Link href={item?.link} target='_blank'
                        className='text-green-500 hover:underline active:scale-95'>
                          Click Here
                        </Link>
                      ) : item?.arLink && (
                        <Link href={item?.arLink} target='_blank'
                        className='text-green-500 hover:underline active:scale-95'>
                          أضغط هنا
                        </Link>
                      )}
                      </h3>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>

    </div>
  )
}

export default page
