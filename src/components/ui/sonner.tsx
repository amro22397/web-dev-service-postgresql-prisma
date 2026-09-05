"use client";

import { useTheme } from "next-themes";
import {
  FaCircleCheck,
  FaCircleExclamation,
  FaCircleInfo,
} from "react-icons/fa6";
import { Toaster as Sonner, type ToasterProps } from "sonner";

export function Toaster(props: ToasterProps) {
  const { resolvedTheme } = useTheme();

  return (
    <Sonner
      theme={resolvedTheme === "dark" ? "dark" : "light"}
      position="top-center"
      richColors
      closeButton
      icons={{
        success: <FaCircleCheck aria-hidden="true" />,
        error: <FaCircleExclamation aria-hidden="true" />,
        info: <FaCircleInfo aria-hidden="true" />,
      }}
      toastOptions={{
        classNames: {
          toast: "font-sans",
          closeButton: "cursor-pointer",
        },
      }}
      {...props}
    />
  );
}
