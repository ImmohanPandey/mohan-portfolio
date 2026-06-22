"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionWrapper from "./SectionWrapper";

export default function Hero() {
  return (
    <SectionWrapper id="hero">
      <section className="min-h-screen flex items-center pt-28 md:pt-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* LEFT SIDE */}
            <div className="order-2 lg:order-1 text-center lg:text-left">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-zinc-400 text-lg"
              >
                Hello, I'm
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="mt-4 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight"
              >
                Mohan
              </motion.h1>

              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9 }}
                className="mt-4 text-xl sm:text-2xl md:text-3xl text-zinc-300"
              >
                Full Stack & Mobile Developer
              </motion.h2>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.1 }}
                className="mt-8 max-w-xl mx-auto lg:mx-0 text-zinc-500 text-base md:text-lg leading-relaxed"
              >
                I build modern web applications, mobile experiences, scalable
                backend systems and database-driven solutions using React,
                Flutter, FastAPI, PostgreSQL, MongoDB and Docker.
              </motion.p>

              {/* STATS */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.2 }}
                className="grid grid-cols-3 gap-4 mt-8"
              >
                <div className="p-4 rounded-2xl border border-zinc-800 bg-zinc-950">
                  <h3 className="text-2xl font-bold">4+</h3>
                  <p className="text-zinc-500 text-sm">Enterprise Projects</p>
                </div>

                <div className="p-4 rounded-2xl border border-zinc-800 bg-zinc-950">
                  <h3 className="text-2xl font-bold">React</h3>
                  <p className="text-zinc-500 text-sm">Frontend</p>
                </div>

                <div className="p-4 rounded-2xl border border-zinc-800 bg-zinc-950">
                  <h3 className="text-2xl font-bold">Flutter</h3>
                  <p className="text-zinc-500 text-sm">Mobile</p>
                </div>
              </motion.div>

              {/* TECH STACK */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.3 }}
                className="flex flex-wrap justify-center lg:justify-start gap-3 mt-8"
              >
                {[
                  "React",
                  "Flutter",
                  "FastAPI",
                  "PostgreSQL",
                  "MongoDB",
                  "Docker",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 rounded-full border border-zinc-800 bg-zinc-900 text-sm text-zinc-300 transition-all duration-300 hover:border-zinc-600 hover:-translate-y-1"
                  >
                    {tech}
                  </span>
                ))}
              </motion.div>

              {/* BUTTONS */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.4 }}
                className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mt-10"
              >
                <a
                  href="#projects"
                  className="px-7 py-3 bg-white text-black rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:-translate-y-1"
                >
                  View Projects
                </a>

                <a
                  href="#contact"
                  className="px-7 py-3 border border-zinc-700 rounded-xl transition-all duration-300 hover:border-white hover:-translate-y-1"
                >
                  Contact Me
                </a>
              </motion.div>
            </div>

            {/* RIGHT SIDE */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative flex justify-center order-1 lg:order-2"
            >
              <div className="absolute w-80 h-80 bg-white/20 blur-[120px] rounded-full" />

              <div className="relative">
                <Image
                  src="/profile.jpg"
                  alt="Mohan"
                  width={450}
                  height={550}
                  priority
                  className="w-[260px] sm:w-[320px] md:w-[380px] lg:w-[450px] h-auto rounded-3xl border border-zinc-800 object-cover shadow-2xl transition-all duration-500 hover:scale-[1.02] hover:border-zinc-600"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </SectionWrapper>
  );
}
