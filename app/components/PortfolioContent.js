"use client";

import About from "./About";
import Contact from "./Contact";
import CursorGlow from "./CursorGlow";
import Experience from "./Experience";
import Footer from "./Footer";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Projects from "./Projects";
import Technology from "./Technology";

export default function PortfolioContent({ includeCursor = true }) {
  return (
    <>
      {includeCursor && <CursorGlow />}
      <Navbar />
      <Hero />
      <About />
      <Technology />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </>
  );
}
