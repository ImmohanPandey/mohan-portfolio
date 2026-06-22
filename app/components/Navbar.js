"use client";

import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const closeMenu = () => {
    setMobileOpen(false);
  };
  const navLinkClass = (section) =>
    activeSection === section
      ? "text-white font-medium relative"
      : "text-zinc-400 hover:text-white transition";

  useEffect(() => {
    const sections = ["hero", "about", "projects", "experience", "contact"];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      let currentSection = "hero";

      sections.forEach((sectionId) => {
        const section = document.getElementById(sectionId);

        if (!section) return;

        if (scrollPosition >= section.offsetTop) {
          currentSection = sectionId;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 border-b border-zinc-800 bg-black/70 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {" "}
        {/* Logo */}
        <div className="flex items-center gap-4">
          <button
            className="md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <h1 className="text-lg sm:text-xl font-bold tracking-wide">
            Mohan Pandey
          </h1>
        </div>
        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-sm text-zinc-400">
          <li className="relative">
            <a href="#about" className={navLinkClass("about")}>
              About
            </a>

            {activeSection === "about" && (
              <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-white rounded-full" />
            )}
          </li>

          <li className="relative">
            <a href="#projects" className={navLinkClass("projects")}>
              Projects
            </a>
            {activeSection === "projects" && (
              <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-white rounded-full" />
            )}
          </li>

          <li className="relative">
            <a href="#experience" className={navLinkClass("experience")}>
              Experience
            </a>
            {activeSection === "experience" && (
              <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-white rounded-full" />
            )}
          </li>

          <li className="relative">
            <a href="#contact" className={navLinkClass("contact")}>
              Contact
            </a>
            {activeSection === "contact" && (
              <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-white rounded-full" />
            )}
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Overlay */}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
              className=" fixed inset-0 bg-black/90 backdrop-blur-xl z-40 "
            />

            {/* Sidebar */}

            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{
                type: "spring",
                stiffness: 250,
                damping: 25,
              }}
              className=" fixed top-0 left-0 h-screen w-[280px] bg-black/70 backdrop-blur-xl border-r border-zinc-800 z-50 p-8 "
            >
              <div className="flex justify-between items-center mb-12">
                <h2 className="font-bold text-xl">Mohan</h2>

                <button onClick={closeMenu}>
                  <X size={24} />
                </button>
              </div>

              <div className="flex flex-col gap-8 text-lg">
                <a
                  href="#about"
                  onClick={closeMenu}
                  className="hover:text-white transition"
                >
                  About
                </a>

                <a
                  href="#projects"
                  onClick={closeMenu}
                  className="hover:text-white transition"
                >
                  Projects
                </a>

                <a
                  href="#experience"
                  onClick={closeMenu}
                  className="hover:text-white transition"
                >
                  Experience
                </a>

                <a
                  href="#contact"
                  onClick={closeMenu}
                  className="hover:text-white transition"
                >
                  Contact
                </a>
              </div>

              <div className="absolute bottom-10 left-8">
                <p className="text-zinc-500 text-sm">
                  Full Stack & Mobile Developer
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
