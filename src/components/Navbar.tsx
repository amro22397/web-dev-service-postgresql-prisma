"use client";
import Link from "next/link";
import ThemeChanger from "./DarkSwitch";
import Image from "next/image";
import { navigation } from "../constants/navigation";
import { useContext, useState } from "react";

import RquestWebsite from "./RquestWebsite";
import { IoMdMenu } from "react-icons/io";
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
    logoOnClick,
  } = useContext(AppContext) as AppContextType;

  // const [isMobNavOpen, setIsMobNavOpen] = useState(false);

  const locale = useLocale();
  const isArabic = locale === "ar";
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="w-full">
      <RquestWebsite
        showRequestForm={showRequestForm}
        setShowRequestForm={setShowRequestForm}
      />

      <nav
        dir="ltr"
        className="container relative flex min-h-20 flex-wrap items-center justify-between
          px-4 py-5 mx-auto sm:min-h-24 sm:px-6 sm:py-6 lg:py-8 lg:justify-between xl:px-1"
      >
        {/* Logo  */}
        <Link
          href={`/${locale}`}
          onClick={logoOnClick}
          className="mx-auto min-w-0 shrink lg:mx-0 lg:shrink-0"
          aria-label={navBar("LogoTitle")}
        >
          <span
            dir="ltr"
            className="flex items-center gap-2 font-medium text-indigo-500 dark:text-indigo-200"
          >
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
                className="whitespace-nowrap font-semibold tracking-wide text-xl min-[360px]:text-2xl lg:text-3xl"
                style={{ fontFamily: "Readex Pro" }}
                dir="ltr"
              >
                <span
                  className="inline-block rounded-lg bg-blue-600 px-2.5 py-1 text-white lg:px-[11.75px] lg:py-[5.5px]"
                  style={{ fontFamily: "Readex Pro" }}
                >
                  amro97
                </span>{" "}
                <span className="text-blue-600 dark:text-white" style={{ fontFamily: "Readex Pro" }}>
                  Team
                </span>
                {/* {navBar("LogoTitle")} */}
              </span>

              {/* <span
                style={{ fontFamily: "Readex Pro" }}
                className="text-sm absolute top-[31.04px] left-[18px]
        font-bold tracking-widest text-red-600"
              >
                {navBar("LogoOman")}
              </span> */}
            </div>
          </span>
        </Link>

        {/* get started  */}
        <div className="nav__item ml-auto hidden items-center gap-3 lg:flex lg:order-2">
          {/* menu lg and above */}
          <div className="hidden text-center lg:flex lg:flex-row lg-justify-end lg:items-center">
            <ul
              dir={isArabic ? "rtl" : "ltr"}
              className="items-center justify-end flex-1 gap-4 pt-6 list-none lg:pt-0 lg:flex"
            >
              {navigation.map((menu, index) => (
                <li className="nav__item shrink-0" key={index}>
                  <Link
                    href={`/${locale}${menu.href}`}
                    key={index}
                    onClick={() => {
                      setShowRequestForm(false);
                      setIsMobNavOpen(false);
                    }}
                    className={`block w-full whitespace-nowrap px-1 py-2 text-gray-500 rounded-md
                       dark:text-gray-100 hover:text-indigo-500 focus:text-indigo-500
                       dark:hover:text-indigo-300 dark:focus:text-indigo-300 focus:bg-indigo-100
                        dark:focus:bg-gray-800 focus:outline-none hover:underline leading-relaxed
                        ${isArabic ? "font-medium" : ""}
                        ${menu.isHidden ? "hidden" : ""}`}
                    style={isArabic ? { fontFamily: "Readex Pro, Arial, sans-serif" } : undefined}
                  >
                    {navBar(menu.translationKey)}
                  </Link>
                </li>
              ))}

              <ChangeLanguage closeMobNav={() => setIsMobNavOpen(false)} />
            </ul>
          </div>

          <div className="hidden lg:flex lg:items-center">
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

        <button
          type="button"
          onClick={() => {
            // Toggle from the latest state so the button remains reliable even
            // when the provider re-renders while the mobile menu is open.
            setMobileMenuOpen((open) => !open);
            setIsMobNavOpen((open: boolean) => !open);
            setShowRequestForm(false);
          }}
          className="absolute left-3 top-[18px] z-20 inline-flex size-11 items-center justify-center rounded-full
            text-gray-700 transition-colors hover:bg-gray-100 hover:text-gray-900
            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500
            dark:text-gray-200 dark:hover:bg-gray-800 dark:hover:text-white
            sm:left-5 sm:top-[26px] lg:hidden"
          aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-navigation"
        >
          <IoMdMenu className="text-2xl" aria-hidden="true" />
        </button>

        {/* max lg nav menu */}
        {mobileMenuOpen && (
          <div
            id="mobile-navigation"
            dir={isArabic ? "rtl" : "ltr"}
            className="mt-5 flex w-full flex-col items-stretch border-t border-gray-200 pt-4
              text-center dark:border-gray-700 lg:hidden"
          >
            {navigation.map((item, index) => (
              <Link
                href={`/${locale}${item.href}`}
                key={index}
                onClick={() => {
                  setShowRequestForm(false);
                  setMobileMenuOpen(false);
                  setIsMobNavOpen(false);
                }}
                className={`w-full px-4 py-2.5 text-gray-600 rounded-md leading-relaxed
             dark:text-gray-100 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100
             dark:hover:text-indigo-300 dark:focus:text-indigo-300
              dark:focus:bg-gray-800 focus:outline-none hover:underline
              ${isArabic ? "font-medium" : ""}
              ${item.isHidden ? "hidden" : ""}`}
                style={isArabic ? { fontFamily: "Readex Pro, Arial, sans-serif" } : undefined}
              >
                {navBar(item.translationKey)}
              </Link>
            ))}

            <div
              className="my-2 flex flex-row items-center justify-center gap-2"
              dir="ltr"
            >
              <ChangeLanguage closeMobNav={() => {
                setMobileMenuOpen(false);
                setIsMobNavOpen(false);
              }} />
              <ThemeChanger />
            </div>

            {/* Request a web nav button */}
            <Link
              href={`/${locale}/contact`}
              onClick={() => {
                setMobileMenuOpen(false);
                setIsMobNavOpen(false);
              }}
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
