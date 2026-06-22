"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";

export default function About() {
  const stats = [
    {
      number: "10+",
      title: "Projects Built",
    },
    {
      number: "React",
      title: "Frontend",
    },
    {
      number: "Flutter",
      title: "Mobile",
    },
    {
      number: "FastAPI",
      title: "Backend",
    },
  ];

  return (
    <SectionWrapper id="about">
      <div className="py-32 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold mb-12">
              About Me
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16">

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <p className="text-zinc-400 text-lg leading-9">
                I am a Full Stack and Mobile Developer
                passionate about building modern,
                scalable and user-focused applications.

                My experience spans frontend
                development with React,
                mobile application development
                using Flutter, backend APIs
                with FastAPI and database
                management using PostgreSQL
                and MongoDB.

                I enjoy turning ideas into
                production-ready solutions that
                deliver real value.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 gap-6">

              {stats.map((item, index) => (
                <motion.div
                  key={index}
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
                  viewport={{ once: true }}
                  className="p-8 rounded-3xl border border-zinc-800 bg-zinc-950"
                >
                  <h3 className="text-3xl font-bold">
                    {item.number}
                  </h3>

                  <p className="text-zinc-500 mt-2">
                    {item.title}
                  </p>
                </motion.div>
              ))}

            </div>
          </div>

        </div>
      </div>
    </SectionWrapper>
  );
}