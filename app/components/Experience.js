"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";

const achievements = [
  {
    number: "4+",
    label: "Enterprise Projects",
  },
  {
    number: "React + Flutter",
    label: "Frontend & Mobile",
  },
  {
    number: "FastAPI",
    label: "Backend Development",
  },
  {
    number: "AWS",
    label: "Cloud & DevOps",
  },
];

const technologies = [
  "React.js",
  "Flutter",
  "Node.js",
  "Python",
  "FastAPI",
  "PostgreSQL",
  "MongoDB",
  "AWS",
  "Docker",
  "CI/CD",
];

export default function Experience() {
  return (
    <SectionWrapper id="experience">
      <div className="py-32 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              {" "}
              Professional Experience
            </h2>

            <p className="text-zinc-500 text-base md:text-lg max-w-3xl">
              {" "}
              Experience working on production-grade applications across
              healthcare, celebrity management, food-tech and enterprise
              software solutions.
            </p>
          </motion.div>

          {/* Main Experience Card */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{ duration: 0.7 }}
            viewport={{ once: false }}
            className="mt-16 border border-zinc-800 rounded-3xl p-6 md:p-10 bg-zinc-950 hover:-translate-y-2 hover:border-zinc-600 hover:shadow-2xl transition-all duration-300"
          >
            <p className="text-xs tracking-[0.2em] uppercase text-zinc-500">
              {" "}
              CURRENT ROLE
            </p>

            <h3 className="text-3xl md:text-4xl font-bold mt-3 bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
              {" "}
              Software Developer
            </h3>

            <p className="text-zinc-400 leading-8 mt-6 max-w-4xl">
              Contributing to web, mobile and cloud-based applications using
              modern technologies including React.js, Flutter, Node.js, FastAPI,
              PostgreSQL, MongoDB and AWS services. Worked across frontend
              development, backend APIs, database design, authentication
              systems, cloud infrastructure and deployment pipelines.
            </p>

            {/* Tech Stack */}

            <div className="flex flex-wrap gap-3 mt-8">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 rounded-full border border-zinc-800 bg-zinc-900 text-sm transition-all duration-300 hover:-translate-y-1 hover:border-zinc-600"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Achievement Cards */}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            {achievements.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                viewport={{
                  once: false,
                }}
                className="p-8 rounded-3xl border border-zinc-800 bg-zinc-950 hover:-translate-y-2 hover:border-zinc-600 hover:shadow-2xl transition-all duration-300"
              >
                <h3 className="text-3xl font-bold">{item.number}</h3>

                <p className="text-zinc-500 mt-2">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
