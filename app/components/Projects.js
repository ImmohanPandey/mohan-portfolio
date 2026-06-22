"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";

const projects = [
  {
    featured: true,
    title: "Inventory Management System",
    description:
      "A full-stack inventory management platform designed to streamline product, customer and order management workflows. Built using React, FastAPI and PostgreSQL with a production-ready deployment architecture.",

    tech: [
      "React.js",
      "FastAPI",
      "PostgreSQL",
      "Docker",
      "SQLAlchemy",
      "Render",
      "Vercel",
    ],

    highlights: [
      "Product Management",
      "Customer Management",
      "Order Management",
      "Dashboard Analytics",
      "REST APIs",
      "PostgreSQL Database",
      "Dockerized Deployment",
      "Render Backend Hosting",
      "Vercel Frontend Deployment",
      "FastAPI Architecture",
      "SQLAlchemy ORM",
      "Responsive UI",
    ],

    architecture: [
      {
        title: "Frontend",
        value: "React.js",
      },
      {
        title: "Backend",
        value: "FastAPI",
      },
      {
        title: "Database",
        value: "PostgreSQL",
      },
      {
        title: "Deployment",
        value: "Render + Vercel",
      },
    ],
  },
  {
    title: "Healthcare Management Platform",
    description:
      "Contributed to the development of a healthcare management platform focused on operational workflows, secure data handling and scalable system architecture. Worked across frontend modules, backend APIs and cloud integrations.",
    tech: ["React.js", "Node.js", "MongoDB", "AWS"],
    highlights: [
      "Healthcare Workflows",
      "Frontend Development",
      "Backend APIs",
      "MongoDB Integration",
      "AWS Services",
      "Production Deployment",
      "Secure Data Handling",
      "Scalable Architecture",
    ],
  },
  {
    title: "Celebrity Management System",
    description:
      "Developed and maintained modules for a celebrity management platform including dashboards, profile administration, workflow automation and backend integrations.",
    tech: ["React.js", "Node.js", "PostgreSQL"],
    highlights: [
      "Dashboard Development",
      "Profile Management",
      "Workflow Automation",
      "Backend APIs",
      "PostgreSQL Database",
      "Admin Portal",
      "Responsive UI",
    ],
  },
  {
    title: "Food Delivery & Operations Platform",
    description:
      "Worked on a large-scale food sector application supporting mobile experiences, authentication systems, backend services and cloud infrastructure. Contributed across development, deployment and cloud workflows.",
    tech: [
      "Flutter",
      "Node.js",
      "PostgreSQL",
      "AWS Lambda",
      "AWS Cognito",
      "CI/CD",
    ],
    highlights: [
      "Flutter Development",
      "AWS Lambda",
      "AWS Cognito",
      "CI/CD Pipelines",
      "Authentication Systems",
      "Cloud Infrastructure",
      "PostgreSQL Database",
      "Production Environment",
    ],
  },
];

export default function Projects() {
  const featuredProject = projects.find((project) => project.featured);

  const otherProjects = projects.filter((project) => !project.featured);

  return (
    <SectionWrapper id="projects">
      <div className="py-20 md:py-32 px-4 sm:px-6 lg:px-12">
        {" "}
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              {" "}
              Selected Professional Work
            </h2>

            <p className="text-zinc-500 text-base md:text-lg max-w-3xl">
              {" "}
              A collection of products and platforms I have built and
              contributed to across web, mobile, backend and cloud technologies.
            </p>
          </motion.div>

          {/* FEATURED PROJECT */}

          <motion.div
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
            }}
            viewport={{
              once: false,
            }}
            className="mt-10 md:mt-16 border border-zinc-800 rounded-3xl p-5 sm:p-6 md:p-10 bg-zinc-950 hover:-translate-y-2 hover:border-zinc-600 hover:shadow-2xl transition-all duration-300"
          >
            <span className="text-xs tracking-[0.2em] text-zinc-500 uppercase">
              FEATURED PROJECT
            </span>

            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-3 mb-5 bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
              {" "}
              {featuredProject.title}
            </h3>

            <p className="text-zinc-400 text-sm sm:text-base leading-7 sm:leading-8 max-w-4xl">
              {featuredProject.description}
            </p>

            <div className="flex flex-wrap gap-2 mt-6">
              {featuredProject.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 rounded-full border border-zinc-800 bg-zinc-900 text-sm transition-all duration-300 hover:-translate-y-1 hover:border-zinc-600"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mt-8">
              {" "}
              {featuredProject.architecture.map((item) => (
                <div
                  key={item.title}
                  className="p-3 md:p-5 rounded-2xl bg-zinc-900 border border-zinc-800 hover:-translate-y-2 hover:border-zinc-600 hover:shadow-xl transition-all duration-300"
                >
                  <p className="text-zinc-500 text-sm">{item.title}</p>

                  <h4 className="mt-2 text-sm md:text-base font-semibold break-words">
                    {" "}
                    {item.value}
                  </h4>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 mt-8">
              {" "}
              {featuredProject.highlights.map((highlight) => (
                <div
                  key={highlight}
                  className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 hover:-translate-y-1 hover:border-zinc-600 transition-all duration-300"
                >
                  ✓ {highlight}
                </div>
              ))}
            </div>
          </motion.div>

          {/* OTHER PROJECTS */}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-10">
            {otherProjects.map((project, index) => (
              <motion.div
                key={project.title}
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
                className="border border-zinc-800 rounded-3xl p-5 md:p-8 bg-zinc-950 hover:-translate-y-2 hover:border-zinc-600 hover:shadow-2xl transition-all duration-300"
              >
                <h3 className="text-xl md:text-2xl font-semibold mb-4">
                  {" "}
                  {project.title}
                </h3>

                <p className="text-zinc-400 text-sm md:text-base leading-6 md:leading-7 mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className=" text-xs px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 "
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <ul className="space-y-2 text-zinc-500 text-sm">
                  {project.highlights.map((item) => (
                    <li key={item}>✓ {item}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
