"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";

const ThemeChanger = ({ className = "" }: { className?: string }) => {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  // When mounted on client, now we can show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  const buttonClassName = `inline-flex size-10 shrink-0 items-center justify-center rounded-full
    text-gray-700 transition-colors hover:bg-gray-100 hover:text-blue-600
    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500
    focus-visible:ring-offset-2 dark:text-gray-100 dark:hover:bg-gray-800
    dark:hover:text-blue-300 dark:focus-visible:ring-offset-gray-900 ${className}`;

  if (!mounted) {
    return <span className={buttonClassName} aria-hidden="true" />;
  }

  const isDark = resolvedTheme === "dark";
  const label = isDark ? "Switch to light mode" : "Switch to dark mode";

  return (
    <button
      type="button"
      className={buttonClassName}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={label}
      title={label}
    >
      {isDark ? <FiSun size={22} aria-hidden="true" /> : <FiMoon size={22} aria-hidden="true" />}
    </button>
  );
};

export default ThemeChanger;
