"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const activeTheme = document.documentElement.dataset.theme || "dark";
    setTheme(activeTheme);
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    document.documentElement.dataset.theme = nextTheme;
    document.documentElement.style.colorScheme = nextTheme;
    localStorage.setItem("mohan-theme", nextTheme);
  };

  return (
    <motion.button
      type="button"
      className="theme-toggle"
      onClick={toggleTheme}
      whileHover={{ y: -2, scale: 1.03 }}
      whileTap={{ scale: 0.94 }}
      aria-label={mounted && theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
      title={mounted && theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
    >
      <span className="theme-toggle-track" aria-hidden="true">
        <motion.span
          className="theme-toggle-thumb"
          animate={{ x: mounted && theme === "light" ? 26 : 0 }}
          transition={{ type: "spring", stiffness: 420, damping: 30 }}
        >
          <AnimatePresence mode="wait" initial={false}>
            {mounted && theme === "light" ? (
              <motion.span key="sun" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
                <Sun size={13} />
              </motion.span>
            ) : (
              <motion.span key="moon" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
                <Moon size={13} />
              </motion.span>
            )}
          </AnimatePresence>
        </motion.span>
      </span>
      <span className="theme-toggle-label">{mounted && theme === "light" ? "LIGHT" : "DARK"}</span>
    </motion.button>
  );
}
