'use client'

import { Benefits } from '../../../components/Benefits'
import React from 'react'
import { benefitOne, benefitTwo } from "../../../components/data";
import Image from "next/image";
import { Container }  from "../../../components/Container";
import { paymentMethods } from '../../../constants/paymentMethods';
import { useLocale, useTranslations } from 'next-intl';

interface BenefitsProps {
  imgPos?: "left" | "right";
  data: {
    imgPos?: "left" | "right";
    title: string;
    desc: string;
    image: any;
    bullets: {
      title: string;
      desc: string;
      icon: React.ReactNode;
    }[];
  };
}


const page = (props: Readonly<BenefitsProps>) => {

  const { data } = props;

  const paymentPage = useTranslations('PaymentPage')

  const locale = useLocale();

  return (
    <div className='mx-auto'>
      <Container className="flex flex-wrap mb-20 lg:gap-10 lg:flex-nowrap mx-auto ">
              <div
                className={`flex items-center justify-center w-full lg:w-1/2 mx-auto lg:order-1`}>
                <div className={`${locale === "ar" ? "mr-10 lg:mr-0" : "ml-[84px] lg:ml-0"}`}>
                  <Image
                    src={'/payment-methods-card-icon-20.png'}
                    width={450}
                    height={400}
                    alt="Benefits"
                    className={"payment-picture-lg-plus"}
                    placeholder="blur"
                    blurDataURL={benefitTwo.image.src}
                  />
                </div>

                <div className='max-lg:px-10'>
                  <Image
                    src={'/hd-white-hand-credit-card-payment-icon-png-701751695036443iyjrrmspis.png'}
                    width={450}
                    height={400}
                    alt="Benefits"
                    className={"payment-picture-max-lg"}
                    placeholder="blur"
                    blurDataURL={benefitTwo.image.src}
                  />
                </div>
              </div>
      
              <div
                className={`flex flex-wrap items-center w-full lg:w-1/2 lg:justify-end`}>
                <div>
                  <div className="flex flex-col w-full mt-4">
                    <h3 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
                    {paymentPage("Our payment methods")}
                    </h3>
      
                    <p className="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
                    {paymentPage("located in")}
                    </p>
                  </div>
      
                  <div className="w-full mt-5">
                    {paymentMethods.map((item, index) => (
                      <Benefit key={index} title={item.title} arTitle={item.arTitle}
                       icon={item.icon} desc={item.desc} arDesc={item.arDesc}>
                        <></>
                      </Benefit>
                    ))}
                  </div>
                </div>
              </div>
            </Container>
    </div>
  )
}

function Benefit(props: any) {

  const locale = useLocale();

  return (
      <div className="flex items-center mt-8 space-x-6 gap-4">
        <div className="flex items-center justify-center flex-shrink-0 mt-1 rounded-md w-11 h-11 ">
          <Image 
          src="/payment-methods/cash-payment-icon-5.png"
          width={50}
          height={50}
          alt='payment methods'
          className='object-cover'

          />
        </div>
        <div>
          <h4 className="text-xl font-medium text-gray-800 dark:text-gray-100">
            {locale === "ar" ? props.arTitle : props.title}
          </h4>
          <p className="mt-1 text-gray-500 dark:text-gray-200">
          {locale === "ar" ? props?.arDesc : props.desc}
          </p>
        </div>
      </div>
  );
}

export default page
