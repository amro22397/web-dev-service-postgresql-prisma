"use client";

import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

type ContactPhoneFieldProps = {
  id: string;
  label: string;
  locale: string;
  name: string;
  onChange: (phone: string) => void;
  required?: boolean;
  value: string;
};

export default function ContactPhoneField({
  id,
  label,
  locale,
  name,
  onChange,
  required = false,
  value,
}: ContactPhoneFieldProps) {
  return (
    <div className="flex w-full min-w-0 flex-col gap-2" dir="ltr">
      <label
        htmlFor={id}
        className="text-base font-medium text-slate-800 dark:text-white sm:text-lg"
        dir={locale === "ar" ? "rtl" : "ltr"}
      >
        {label}{" "}
        {required && (
          <span aria-hidden="true" className="text-red-600">
            *
          </span>
        )}
      </label>

      <PhoneInput
        defaultCountry="om"
        value={value}
        className="!flex !h-11 !w-full !min-w-0 !overflow-visible !rounded-md !border !border-slate-200 !bg-white focus-within:!border-indigo-500 focus-within:!ring-2 focus-within:!ring-indigo-500/20 dark:!border-slate-600 dark:!bg-slate-900 dark:focus-within:!border-indigo-300"
        inputClassName="!h-full !min-w-0 !flex-1 !border-0 !bg-transparent !px-3 !text-base !text-slate-900 !outline-none placeholder:!text-slate-400 dark:!text-white dark:placeholder:!text-slate-500"
        style={{ direction: "ltr", flexDirection: "row" }}
        inputProps={{
          id,
          name,
          dir: "ltr",
          "aria-label": label,
          "aria-required": required,
          required,
        }}
        countrySelectorStyleProps={{
          buttonClassName:
            "!h-full !cursor-pointer !rounded-s-md !rounded-e-none !border-0 !border-e !border-slate-200 !bg-transparent !px-3 hover:!bg-slate-100 dark:!border-slate-600 dark:hover:!bg-slate-800",
          dropdownStyleProps: {
            className:
              "!z-50 !max-w-[min(22rem,calc(100vw-2rem))] !border-slate-200 !bg-white !text-slate-900 !shadow-xl dark:!border-slate-700 dark:!bg-slate-900 dark:!text-white",
            style: { direction: "ltr", textAlign: "left" },
            listItemStyle: { direction: "ltr", textAlign: "left" },
            listItemCountryNameStyle: {
              direction: "ltr",
              textAlign: "left",
            },
          },
        }}
        onChange={onChange}
      />
    </div>
  );
}
