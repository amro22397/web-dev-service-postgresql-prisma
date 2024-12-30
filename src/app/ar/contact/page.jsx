'use client'

import React, { useState } from 'react'
import { info } from '../constants/info'
import './page.css'
import Link from 'next/link'
import ContactForm from '@/components/ContactForm'

const page = () => {
    
  return (
    <div 
    className='py-6 max-sm:max-w-[100vw] max-xl:max-w-[525px] mx-auto '
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
                    bg-indigo-300 text-white rounded-md flex items-center
                    justify-center'>
                      <div className="text-[28px]">{item.icon}</div>
                    </div>

                    <div className="flex-1">
                      <p className="text-black font-semibold">{item.title}</p>
                      {item.link ? (
                        <Link className="hover:underline hover:text-green-500" href={item.link} >{item.description}</Link>
                      ) : (
                        <h3 className="">{item.description}</h3>
                      )}
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
