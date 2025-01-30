import Image from 'next/image'
import React from 'react'

const HeroImage = () => {
  return (
    <div className="flex items-start justify-center w-full lg:w-1/2">
                <div className="">
                  <Image
                    src={"/site-internet-icon-png-27.png"}
                    blurDataURL={'/top11.png'}
                    width="350"
                    height="617"
                    className={"object-cover block dark:hidden"}
                    alt="Hero Illustration"
                    loading="eager"
                    placeholder="blur"
                  />
                </div>

                <div className="">
                  <Image
                    src={"/pngtree-blue-website-icon-vector-png-image_11438142.png"}
                    blurDataURL={'/pngtree-blue-website-icon-vector-png-image_11438142.png'}
                    width="400"
                    height="617"
                    className={"object-cover hidden dark:block mb-14"}
                    alt="Hero Illustration"
                    loading="eager"
                    placeholder="blur"
                  />
                </div>
              </div>
  )
}

export default HeroImage
