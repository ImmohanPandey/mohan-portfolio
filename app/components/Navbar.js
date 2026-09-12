"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Command, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navItems } from "../data";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const onKey = (event) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setPaletteOpen((value) => !value);
      }
      if (event.key === "Escape") {
        setPaletteOpen(false);
        setMenuOpen(false);
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-30% 0px -60% 0px" },
    );

    ["hero", "about", "technology", "projects", "experience", "contact"].forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      observer.disconnect();
    };
  }, []);

  const goTo = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
    setPaletteOpen(false);
  };

  return (
    <>
      <header className="topbar">
        <a href="#hero" className="brand" aria-label="Mohan Pandey home">
          <span className="brand-mark">MP</span>
          <span className="brand-copy">
            <strong>MOHAN.DEV</strong>
            <small>FULL STACK // MOBILE</small>
          </span>
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className={active === item.href.slice(1) ? "active" : ""}>
              <span>{item.key}</span>{item.label}
            </a>
          ))}
        </nav>

        <div className="topbar-actions">
          <ThemeToggle />
          <button className="command-button" onClick={() => setPaletteOpen(true)}>
            <Command size={14} /> <span>Navigate</span><kbd>⌘ K</kbd>
          </button>
          <button className="mobile-menu-button" onClick={() => setMenuOpen(true)} aria-label="Open navigation">
            <Menu size={21} />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div className="mobile-nav" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <motion.div className="mobile-nav-panel" initial={{ y: "-8%", opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: "-8%", opacity: 0 }}>
              <div className="mobile-nav-head">
                <span>MOHAN.DEV / MENU</span>
                <button onClick={() => setMenuOpen(false)} aria-label="Close navigation"><X size={22} /></button>
              </div>
              <div className="mobile-nav-links">
                {navItems.map((item) => (
                  <button key={item.href} onClick={() => goTo(item.href)}>
                    <span>{item.key}</span>{item.label}
                  </button>
                ))}
              </div>
              <p>Build fast. Think in systems. Ship things that matter.</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {paletteOpen && (
          <motion.div className="palette-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onMouseDown={() => setPaletteOpen(false)}>
            <motion.div className="command-palette" initial={{ y: -20, opacity: 0, scale: 0.97 }} animate={{ y: 0, opacity: 1, scale: 1 }} exit={{ y: -12, opacity: 0, scale: 0.98 }} onMouseDown={(event) => event.stopPropagation()}>
              <div className="palette-input"><Command size={17} /><span>Jump anywhere in this build...</span><kbd>ESC</kbd></div>
              <div className="palette-list">
                {navItems.map((item) => (
                  <button key={item.href} onClick={() => goTo(item.href)}>
                    <span className="palette-number">{item.key}</span>
                    <strong>Go to {item.label}</strong>
                    <span>↵</span>
                  </button>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
