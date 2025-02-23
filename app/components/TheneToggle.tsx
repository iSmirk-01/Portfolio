"use client";

import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <div></div>;
  }

  return (
    <button
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="flex items-center justify-center p-2 rounded-full transition-colors duration-300 ease-in-out border-2 border-transparent hover:border-black dark:hover:border-white"
    >
      {resolvedTheme === "dark" ? (
        <Sun className="text-yellow-400 w-6 h-6" />
      ) : (
        <Moon className="text-gray-800 dark:text-gray-200 w-6 h-6" />
      )}
    </button>
  );
}

export default ThemeToggle;
