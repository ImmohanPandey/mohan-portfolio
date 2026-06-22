"use client";

import { motion } from "framer-motion";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-white/5 blur-[180px]" />

        <div className="absolute top-[40%] right-0 w-[400px] h-[400px] bg-blue-500/5 blur-[180px]" />

        <div className="absolute bottom-0 left-[30%] w-[400px] h-[400px] bg-purple-500/5 blur-[180px]" />
      </div>

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Contact />
        <Footer />
      </motion.main>
    </>
  );
}
