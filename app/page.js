"use client";

import About from "./components/About";
import BootSequence from "./components/BootSequence";
import Contact from "./components/Contact";
import CursorGlow from "./components/CursorGlow";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import TechMarquee from "./components/TechMarquee";

export default function Home() {
  return (
    <main className="site-shell">
      <BootSequence />
      <CursorGlow />
      <Navbar />
      <Hero />
      <TechMarquee />
      <About />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}
