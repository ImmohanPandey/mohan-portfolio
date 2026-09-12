"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { projects } from "../data";
import SectionHeader from "./SectionHeader";
import SectionWrapper from "./SectionWrapper";

function ProjectConsole({ project }) {
  return (
    <div className={`project-console project-console-mini accent-${project.accent}`}>
      <div className="window-bar">
        <span><i /><i /><i /></span>
        <span>system/{project.index}</span>
        <span>●</span>
      </div>
      <div className="console-grid">
        <div className="console-nav">
          <span>EXPLORER</span>
          <p>▾ src</p><p>&nbsp;&nbsp;◈ api</p><p>&nbsp;&nbsp;◈ features</p><p>&nbsp;&nbsp;◈ data</p><p>▸ deploy</p>
        </div>
        <div className="console-code">
          <div className="code-tabs"><span>build.log</span><span>system.ts</span></div>
          <div className="code-body">
            {project.code.map((line, index) => <p key={`${line}-${index}`}><span>{String(index + 1).padStart(2, "0")}</span><code>{line || " "}</code></p>)}
          </div>
          <div className="console-status"><span>main*</span><span>UTF-8</span><span>READY</span></div>
        </div>
      </div>
    </div>
  );
}

function ProjectVisual({ project }) {
  return (
    <div className="project-art-shell">
      <div className="project-art-media">
        <Image
          src={project.visual}
          alt={project.visualAlt}
          fill
          unoptimized
          sizes="(max-width: 980px) 90vw, 46vw"
          className="project-art-image"
        />
        <div className="project-art-vignette" aria-hidden="true" />
        <div className="project-art-grid" aria-hidden="true" />
        <div className="project-art-scan" aria-hidden="true" />
      </div>

      <div className="project-art-badge"><i /> VISUAL SYSTEM / {project.index}</div>
      <div className="project-art-node node-one" aria-hidden="true" />
      <div className="project-art-node node-two" aria-hidden="true" />

      <div className="project-console-float">
        <ProjectConsole project={project} />
      </div>

      <div className="project-orbit"><span /><span /><span /></div>
      <div className="project-scan-label"><span>CASE_{project.index}</span><ArrowUpRight size={15} /></div>
    </div>
  );
}

export default function Projects() {
  return (
    <SectionWrapper id="projects" className="projects-section">
      <div className="page-width section-pad">
        <SectionHeader
          index="03"
          label="BUILD_LOG"
          title={<>Selected systems.<br /><span>Now with a visual pulse.</span></>}
          copy="A few production-style projects across operations, healthcare, mobile and administration. Each visual is designed around the problem space itself, while the engineering layer stays visible underneath."
        />

        <div className="projects-list">
          {projects.map((project, projectIndex) => (
            <motion.article
              key={project.title}
              className={`project-panel accent-${project.accent}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              whileHover={{ y: -7, scale: 1.004, transition: { duration: 0.24 } }}
              transition={{ duration: 0.75, delay: projectIndex * 0.04, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="project-number">{project.index}</div>
              <div className="project-content">
                <div className="project-eyebrow">{project.eyebrow}</div>
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-tech">
                  {project.tech.map((tech) => <span key={tech}>{tech}</span>)}
                </div>

                <div className="capability-list">
                  {project.capabilities.map((item) => <span key={item}><CheckCircle2 size={14} />{item}</span>)}
                </div>

                <div className="system-row">
                  {project.system.map(([key, value]) => <div key={key}><span>{key}</span><strong>{value}</strong></div>)}
                </div>
              </div>

              <div className="project-visual-wrap">
                <ProjectVisual project={project} />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
