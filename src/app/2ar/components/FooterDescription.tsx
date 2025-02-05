import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const FooterDescription = () => {
  return (
    <div className="md:col-span-2">
            {/* this is hidden  */}
            <div className="hidden">
              {" "}
              <Link
                href="/"
                className="flex items-center space-x-2 text-2xl font-medium text-indigo-500 dark:text-gray-100"
              >
                <Image
                  src="/img/logo.svg"
                  alt="N"
                  width="32"
                  height="32"
                  className="w-8"
                />
                <span>Nextly</span>
              </Link>
            </div>

            <div className="max-w-md mx-auto mt-4 text-gray-500 dark:text-gray-400
            text-md ">
              هذه خدمة تمكنك من بناء موقعك الخاص بمشروعك. كل الحقوق
              محفوظة والإستخدام غير المصرح للكود المصدر ممنوع.
            </div>

            <div className="mt-5 hidden">
              <a
                href="https://vercel.com/?utm_source=web3templates&utm_campaign=oss"
                target="_blank"
                rel="noopener"
                className="relative block w-44"
              >
                <Image
                  src="/img/vercel.svg"
                  alt="Powered by Vercel"
                  width="212"
                  height="44"
                />
              </a>
            </div>
          </div>
  )
}

export default FooterDescription
