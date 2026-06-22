"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMenu = () => {
    setMobileOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 border-b border-zinc-800 bg-black/70 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">        {/* Logo */}
        <div className="flex items-center gap-4">

          <button
            className="md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? (
              <X size={24} />
            ) : (
              <Menu size={24} />
            )}
          </button>

          <h1 className="text-lg sm:text-xl font-bold tracking-wide">
            Mohan Pandey
          </h1>

        </div>
        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-sm text-zinc-400">
          <li>
            <a href="#about" className="hover:text-white transition">
              About
            </a>
          </li>

          <li>
            <a href="#projects" className="hover:text-white transition">
              Projects
            </a>
          </li>

          <li>
            <a href="#experience" className="hover:text-white transition">
              Experience
            </a>
          </li>

          <li>
            <a href="#contact" className="hover:text-white transition">
              Contact
            </a>
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
                <h2 className="font-bold text-xl">
                  Mohan
                </h2>

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