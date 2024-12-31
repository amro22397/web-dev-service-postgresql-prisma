"use client";
import Link from "next/link";
import ThemeChanger from "./DarkSwitch";
import Image from "next/image"
import { Disclosure } from "@headlessui/react";
import { navigation } from "../constants/navigation"
import { useContext, useState } from "react";

import { changeLanguageClassName } from "@/constants/eng-and-ar";
import RquestWebsite from "./RquestWebsite"
import { AppContext } from "../context/AppContext";
import { IoMdMenu } from "react-icons/io";


export const Navbar = () => {

  let { setShowRequestForm,
    showRequestForm } = useContext(AppContext); 

    const [isMobNavOpen, setIsMobNavOpen] = useState(false);

    const arabicNavigationFont = {fontFamily: "Readex Pro", fontSize: "1.2rem", fontWeight: "",
      fontVariationSettings: "'slnt' 0",
    }

  return (
    <div className="w-full">
      <RquestWebsite showRequestForm={showRequestForm} setShowRequestForm={setShowRequestForm} />
      <nav className="container relative flex flex-wrap items-center justify-between py-8 px-3 mx-auto
       lg:justify-between xl:px-1">

        {/* Logo  */}
        <Link href="/ar">
          <span className="flex items-center space-x-2 text-2xl font-medium text-indigo-500 dark:text-gray-100">
              <span>
                <Image
                  src="/img/logo.svg"
                  width="32"
                  alt="N"
                  height="32"
                  className="w-8 hidden"
                />
              </span>
            <div className="flex flex-col items-center relative">

            <span
            className="font-semibold tracking-wide"
            style={{fontFamily: "Readex Pro"}}
            >خدمة تصميم المواقع</span>
            
            <span 
        style={{fontFamily: "Readex Pro"}}
        className="text-sm absolute top-[31.04px] left-[18px]
        font-bold tracking-widest text-red-600">عمان</span>
        
            </div>
          </span>
        </Link>



        {/* get started  */}
        <div className="gap-3 nav__item mr-3 lg:flex ml-auto lg:ml-0">

          {/* menu lg and above */}
        <div className="hidden text-center lg:flex lg:items-center">
          <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
            {navigation.map((menu, index) => (
              <li className="mr-3 nav__item">
                <Link href={menu.href} key={index}
                onClick={() => {
                  setShowRequestForm(false);
                  setIsMobNavOpen(false);
                }}
                style={arabicNavigationFont}
                className={`w-full px-[10px] py-2 text-gray-500 rounded-md
                       dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100
                        dark:focus:bg-gray-800 focus:outline-none hover:underline
                        ${menu.isHidden ? "hidden" : ""}`}>
                    {menu.name}
                </Link>
              </li>
            ))}
            
            <Link href={'/en'}
        className={`${changeLanguageClassName}`}
        style={{fontFamily: ""}}>En</Link>

          </ul>
        </div>

        
            <ThemeChanger />

            

            <div className="hidden mr-3 lg:flex nav__item">
              <Link href="/" className="px-6 py-2 text-white bg-indigo-600 rounded-md md:ml-3
              text-[16.7px] hover:bg-indigo-700 active:bg-indigo-800 hidden"
              style={{fontFamily: "Trebuchet MS"}}
              onClick={() => setShowRequestForm(!showRequestForm)}
              >
                Request Website
              </Link>
              
            </div>
            
        </div>

        <IoMdMenu onClick={() => setIsMobNavOpen(!isMobNavOpen)}
        className="lg:hidden text-2xl text-gray-700 hover:text-gray-800 cursor-pointer"/>
        

        {/* max lg nav menu */}
        {isMobNavOpen && (
          <div className="flex flex-col justify-center items-center w-full my-9 gap-[6px] lg:hidden">
                  
          {navigation.map((item, index) => (
            <Link href={item.href} key={index}
            onClick={() => {
              setShowRequestForm(false);
              setIsMobNavOpen(false);
            }}
            style={arabicNavigationFont}
            className={`px-4 py-2 text-gray-500 rounded-md
             dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100
              dark:focus:bg-gray-800 focus:outline-none hover:underline
              ${item.isHidden ? "hidden" : ""}`}>
                {item.name}
            </Link>
          ))}
          
          <Link href={'/en'}
        className={`${changeLanguageClassName}`}
        style={{fontFamily: ""}}>English</Link>

          {/* Request a web nav button */}
      <Link href="/ar/contact" 
      onClick={() => {
        setShowRequestForm(false);
        setIsMobNavOpen(false);
      }}
      className="w-full px-6 py-2 mt-3 text-center text-white
           bg-indigo-600 rounded-md lg:ml-5 text-[16.7px] hover:bg-indigo-700 active:bg-indigo-800">         
          Request Website
          </Link>
        
      </div>
        )}

        
      </nav>
    </div>
  );
}

