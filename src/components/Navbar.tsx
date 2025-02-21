"use client";
import Link from "next/link";
import ThemeChanger from "./DarkSwitch";
import Image from "next/image";
import { Disclosure } from "@headlessui/react";
import { navigation } from "../constants/navigation";
import { useContext, useState } from "react";

import RquestWebsite from "./RquestWebsite";
import { IoMdMenu } from "react-icons/io";
import { changeLanguageClassName } from "@/z-old-constants/eng-and-ar";
import { AppContext, AppContextType } from "@/context/AppContext";

import { useLocale, useTranslations } from "next-intl";
import ChangeLanguage from "./ChangeLanguage";

export const Navbar = () => {
  const navBar = useTranslations("NavBar");

  let {
    setShowRequestForm,
    showRequestForm,
    isMobNavOpen,
    setIsMobNavOpen,
    menuOnClick,
    logoOnClick,
  } = useContext(AppContext) as AppContextType;

  // const [isMobNavOpen, setIsMobNavOpen] = useState(false);

  const locale = useLocale();
  console.log(locale);

  return (
    <div className="w-full">
      <RquestWebsite
        showRequestForm={showRequestForm}
        setShowRequestForm={setShowRequestForm}
      />

      <nav
        className="container relative flex flex-wrap items-center justify-between py-8 px-3 mx-auto
       lg:justify-between xl:px-1"
      >
        {/* Logo  */}
        <Link href={`/${locale}`} onClick={logoOnClick}>
          <span className="flex items-center space-x-2 text-2xl font-medium text-indigo-500 dark:text-indigo-200">
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
                style={{ fontFamily: "Readex Pro" }}
              >
                {navBar("LogoTitle")}
              </span>

              <span
                style={{ fontFamily: "Readex Pro" }}
                className="text-sm absolute top-[31.04px] left-[18px]
        font-bold tracking-widest text-red-600"
              >
                {navBar("LogoOman")}
              </span>
            </div>
          </span>
        </Link>

        {/* get started  */}
        <div className="gap-3 nav__item mr-3 lg:flex ml-auto lg:ml-0 lg:order-2">
          {/* menu lg and above */}
          <div className="hidden text-center lg:flex lg:flex-row lg-justify-end lg:items-center">
            <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
              {navigation.map((menu, index) => (
                <li className="mr-3 nav__item">
                  <Link
                    href={`/${locale}${menu.href}`}
                    key={index}
                    onClick={() => {
                      setShowRequestForm(false);
                      setIsMobNavOpen(false);
                    }}
                    className={`w-full px-1 py-2 text-gray-500 rounded-md
                       dark:text-gray-100 hover:text-indigo-500 focus:text-indigo-500
                       dark:hover:text-indigo-300 dark:focus:text-indigo-300 focus:bg-indigo-100
                        dark:focus:bg-gray-800 focus:outline-none hover:underline
                        ${menu.isHidden ? "hidden" : ""}`}
                  >
                    {locale === "ar" ? menu.arName : menu.name}
                  </Link>
                </li>
              ))}

              <ChangeLanguage closeMobNav={() => setIsMobNavOpen(false)} />
            </ul>
          </div>

          <div className="hidden lg:block">
            <ThemeChanger />
          </div>

          {/* <div className="hidden mr-3 lg:flex nav__item">
              <Link href="/en" className="px-6 py-2 text-white bg-indigo-600 rounded-md md:ml-3
              text-[16.7px] hover:bg-indigo-700 active:bg-indigo-800 hidden"
              style={{fontFamily: "Trebuchet MS"}}
              onClick={() => setShowRequestForm(!showRequestForm)}
              >
                Request Website
              </Link>
              
            </div> */}
        </div>

        <IoMdMenu
          onClick={() => {
            menuOnClick();
          }}
          className="lg:hidden text-2xl text-gray-700 hover:text-gray-800
         dark:text-gray-200 dark:hover:text-gray-100 cursor-pointer"
        />

        {/* max lg nav menu */}
        {isMobNavOpen && (
          <div className="flex flex-col items-center w-full my-8 lg:hidden">
            {navigation.map((item, index) => (
              <Link
              href={`/${locale}${item.href}`}
                key={index}
                onClick={() => {
                  setShowRequestForm(false);
                  setIsMobNavOpen(false);
                }}
                className={`px-4 py-2 text-gray-500 rounded-md
             dark:text-gray-100 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100
             dark:hover:text-indigo-300 dark:focus:text-indigo-300
              dark:focus:bg-gray-800 focus:outline-none hover:underline
              ${item.isHidden ? "hidden" : ""}`}
              >
                {locale === "ar" ? item.arName : item.name}
              </Link>
            ))}

            <div className="flex flex-row justify-center items-center gap-1 my-1"
            dir="ltr">
              <ChangeLanguage closeMobNav={() => setIsMobNavOpen(false)} />
              <ThemeChanger />
            </div>

            {/* Request a web nav button */}
            <Link
              href={`/${locale}/contact`}
              onClick={() => setIsMobNavOpen(false)}
              className="w-full px-6 py-2 mt-3 text-center text-white
           bg-indigo-600 rounded-md lg:ml-5 text-[16.7px] hover:bg-indigo-700 active:bg-indigo-800"
            >
              {navBar("Request Website")}
            </Link>
          </div>
        )}
      </nav>
    </div>
  );
};
