import { useTranslations } from "next-intl";
import React from "react";

const AdsBar = () => {

    const homePage = useTranslations("HomePage");
    
  return (
    <aside
      aria-label={homePage("Advertising and Promotion")}
      className="flex min-h-[25px] w-full flex-wrap items-center justify-center gap-x-8 gap-y-1 bg-[#337ef4] px-4 py-2 text-center text-[15.5px] text-white"
    >
      <span>{homePage("Advertising and Promotion")}</span>
      <span>
        {homePage("Whatsapp")}: <span dir="ltr">+96879335801</span>
      </span>
      <a
        href="mailto:admin@wds-oman.com"
        className="break-all transition-opacity hover:opacity-80"
      >
        {homePage("Email")}: admin@wds-oman.com
      </a>
      
    </aside>
  );
};

export default AdsBar;