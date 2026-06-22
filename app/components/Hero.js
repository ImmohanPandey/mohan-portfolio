"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionWrapper from "./SectionWrapper";

export default function Hero() {
  return (
    <SectionWrapper id="hero">
      <section className="min-h-screen flex items-center pt-28 md:pt-20 px-6 lg:px-12">        <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* LEFT SIDE */}
          <div className="order-2 lg:order-1 text-center lg:text-left">        <motion.div
            className="relative flex justify-center order-1 lg:order-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Hello, I'm
          </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="mt-4 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight"            >
              Mohan
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
              className="mt-4 text-xl sm:text-2xl md:text-3xl text-zinc-300"            >
              Full Stack & Mobile Developer
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.1 }}
              className="mt-8 max-w-xl text-zinc-500 text-lg leading-relaxed"
            >
              I build modern web applications, mobile experiences,
              scalable backend systems and database-driven solutions
              using React, Flutter, FastAPI, PostgreSQL, MongoDB and Docker.
            </motion.p>

            {/* TECH STACK */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2 }} className="flex flex-wrap justify-center lg:justify-start gap-3 mt-8"
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
                  className="px-4 py-2 rounded-full border border-zinc-800 bg-zinc-900 text-sm text-zinc-300"
                >
                  {tech}
                </span>
              ))}
            </motion.div>

            {/* BUTTONS */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.3 }}
              className="flex flex-col sm:flex-row gap-4 mt-10"            >
              <a
                href="#projects"
                className="px-7 py-3 bg-white text-black rounded-xl font-semibold hover:scale-105 transition duration-300"
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="px-7 py-3 border border-zinc-700 rounded-xl hover:border-white transition duration-300"
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
            className="relative flex justify-center"
          >
            {/* Glow */}
            <div className="absolute w-80 h-80 bg-white/10 blur-3xl rounded-full"></div>

            <div className="relative">
              <Image
                src="/profile.jpg"
                alt="Mohan"
                width={450}
                height={550}
                priority
                className=" w-[260px] sm:w-[320px] md:w-[380px] lg:w-[450px] h-auto rounded-3xl border border-zinc-800 object-cover shadow-2xl "
              />
            </div>
          </motion.div>

        </div>
      </div>
      </section>
    </SectionWrapper>
  );
}