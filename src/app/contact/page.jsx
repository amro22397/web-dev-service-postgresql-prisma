'use client'

import React, { useState } from 'react'

  import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'

  import { info } from '../../constants/info'
  
import { useRouter } from 'next/navigation'

import { Button } from "../../components/ui/button"

import { Input } from "@/components/ui/input"

import { Textarea } from "@/components/ui/textarea"
import Link from 'next/link'

const page = () => {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');



const handleChange = () => {
  setMessageSuccess(false);
  setError('');
}


    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [messageSuccess, setMessageSuccess] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);

          formData.append("access_key", "ce9610a5-e759-46bf-86a7-08b198f09ac4");

          const object = Object.fromEntries(formData);
          const json = JSON.stringify(object);

        if (firstName === '' || phoneNumber === '' || email === '' || message === '') {
          setMessageSuccess(false);
          
          return;
        }

        setLoading(true);

        const res = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Accept: "application/json"
            },
            body: json,
          });

          if (res.ok) {
            setMessageSuccess(true);
              setFirstName('');
              setLastName('');
              setEmail('');
              setPhoneNumber('');
              setMessage('');
          } else {
            setMessageSuccess(false)
          }
          const result = await res.json();
          if (result.success) {
              console.log(result);
              
          }

          setLoading(false)

    }

    
    
  return (
    <div 
    className='py-6 max-xl:max-w-[90vw] mx-auto'
    >
      <div className="containter mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">

          <div className="xl:h-[54%] order-2 xl:order-none">

            <form onSubmit={handleSubmit}
            className="flex flex-col gap-6 p-10 bg-indigo-300/90">
              <h3 className="text-4xl text-stone-600"
              style={{fontFamily: "Trebuchet MS"}}>Let's work together</h3>
              <p className="text-black">
              Fill the form and send it to request building your website...
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              <Input type="name" placeholder="Your Name"
              className='bg-white border-none rounded-xl text-gray-400'
              style={{borderRadius: ".25rem"}} />
              
              <Input type="email" placeholder="Email address"
              className='bg-white border-none rounded-xl text-gray-400'
              style={{borderRadius: ".25rem"}} />

              <Input type="phone" placeholder="Phone number"
              className='bg-white border-none rounded-xl text-gray-400'
              style={{borderRadius: ".25rem"}} />

              <Input type="text" placeholder="Whatsapp number"
              className='bg-white border-none rounded-xl text-gray-400'
              style={{borderRadius: ".25rem"}} />

              </div>

              <select onChange={handleChange} id="service"
              name="service"
              className='bg-white text-black/80 px-3
              py-3 border border-gray-50/10 hidden'>
                <option value="Frontend">Frontend Development</option>
                <option value="Backend">Backend Development</option>
                <option value="Full Stack">Full Stack Development</option>
              </select>

              <Textarea className='bg-white border-none rounded-xl text-gray-400'
              style={{borderRadius: ".25rem"}} rows={6} 
              placeholder="Describe your project here" />

              <Button type='submit'
              size="md" className="max-w-40 py-2 bg-indigo-600 hover:bg-indigo-700
              active:scale-95 text-white disabled:bg-gray-400" disabled={loading}
              style={{borderRadius: ".25rem"}}>
                {loading ? 'Sending...' : 'Send message'}
              </Button>

              {messageSuccess && (
                <div className="flex flex-row items-center justify-center text-white text-xl
                gap-2">
                  <i class="fa-solid fa-circle-check
                  text-green-600 "></i>
                  <span>Message sent successfully!</span>
                </div>
              )}
            </form>
          </div>

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
