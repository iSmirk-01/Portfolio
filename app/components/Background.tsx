"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function BackgroundTransition() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 z-[-1]">
      <AnimatePresence mode="wait">
        {theme === "dark" ? (
          <motion.div
            key="dark"
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/darkpoly.svg')" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          />
        ) : (
          <motion.div
            key="light"
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/lightpolyblue.svg')" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
