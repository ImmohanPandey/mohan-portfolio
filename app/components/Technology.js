"use client";

import { motion } from "framer-motion";
import { Cloud, CodeXml, Database, GitBranch, Layers3, Radio } from "lucide-react";
import { FaAws } from "react-icons/fa";
import {
  SiDocker,
  SiFastapi,
  SiFlutter,
  SiGithubactions,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiSwagger,
} from "react-icons/si";
import SectionHeader from "./SectionHeader";
import SectionWrapper from "./SectionWrapper";

const technologies = [
  { name: "React", detail: "Interface systems", icon: SiReact, color: "#61dafb", group: "FRONTEND" },
  { name: "Next.js", detail: "Production web", icon: SiNextdotjs, color: "#ffffff", group: "FRONTEND" },
  { name: "Flutter", detail: "Cross-platform mobile", icon: SiFlutter, color: "#54c5f8", group: "MOBILE" },
  { name: "FastAPI", detail: "High-speed APIs", icon: SiFastapi, color: "#26a699", group: "BACKEND" },
  { name: "Node.js", detail: "Service runtime", icon: SiNodedotjs, color: "#78b65b", group: "BACKEND" },
  { name: "Python", detail: "Automation & APIs", icon: SiPython, color: "#ffd343", group: "BACKEND" },
  { name: "PostgreSQL", detail: "Relational data", icon: SiPostgresql, color: "#5b9bd5", group: "DATA" },
  { name: "MongoDB", detail: "Document storage", icon: SiMongodb, color: "#47a248", group: "DATA" },
  { name: "Docker", detail: "Portable delivery", icon: SiDocker, color: "#2496ed", group: "DEVOPS" },
  { name: "AWS", detail: "Cloud infrastructure", icon: FaAws, color: "#ff9900", group: "CLOUD" },
  { name: "REST APIs", detail: "Connected systems", icon: SiSwagger, color: "#85ea2d", group: "SYSTEMS" },
  { name: "CI/CD", detail: "Automated shipping", icon: SiGithubactions, color: "#58a6ff", group: "DEVOPS" },
];

const lanes = [
  { label: "CLIENT", value: "React · Next.js · Flutter", icon: Layers3 },
  { label: "SERVICES", value: "FastAPI · Node.js · Python", icon: CodeXml },
  { label: "DATA", value: "PostgreSQL · MongoDB", icon: Database },
  { label: "DELIVERY", value: "Docker · AWS · CI/CD", icon: Cloud },
];

export default function Technology() {
  return (
    <SectionWrapper id="technology" className="technology-section">
      <div className="technology-orbit technology-orbit-a" aria-hidden="true" />
      <div className="technology-orbit technology-orbit-b" aria-hidden="true" />
      <div className="page-width section-pad technology-inner">
        <SectionHeader
          index="02"
          label="TECHNOLOGY_MATRIX.SYS"
          title={<>The stack behind<br /><span>the systems I ship.</span></>}
          copy="Not a list of buzzwords — a connected toolkit spanning the interface, service layer, data and production delivery."
        />

        <div className="technology-console">
          <div className="technology-console-head">
            <span><Radio size={14} /> RUNTIME_MATRIX</span>
            <code>12 MODULES / 4 DELIVERY LAYERS</code>
            <strong><i /> ALL SYSTEMS READY</strong>
          </div>

          <div className="technology-layout">
            <div className="technology-grid">
              {technologies.map((technology, index) => {
                const Icon = technology.icon;
                return (
                  <motion.article
                    key={technology.name}
                    className="technology-card"
                    style={{
                      "--tech-color": technology.color,
                      "--scan-delay": `${index * -0.37}s`,
                    }}
                    initial={{ opacity: 0, y: 28, scale: 0.96 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5, delay: index * 0.045, ease: [0.22, 1, 0.36, 1] }}
                    whileHover={{ y: -7, scale: 1.02 }}
                  >
                    <span className="technology-card-scan" aria-hidden="true" />
                    <span className="technology-card-pulse" aria-hidden="true"><i /><i /><i /></span>
                    <span className="technology-index">{String(index + 1).padStart(2, "0")}</span>
                    <div className="technology-logo">
                      <span className="technology-logo-ring" aria-hidden="true" />
                      <span className="technology-logo-ring technology-logo-ring-reverse" aria-hidden="true" />
                      <span className="technology-logo-glyph"><Icon aria-hidden="true" /></span>
                    </div>
                    <div className="technology-card-copy"><strong>{technology.name}</strong><span>{technology.detail}</span></div>
                    <small>{technology.group}</small>
                  </motion.article>
                );
              })}
            </div>

            <aside className="architecture-map">
              <div className="architecture-head"><GitBranch size={16} /><span>LIVE_ARCHITECTURE</span></div>
              <div className="architecture-core">
                <i className="architecture-core-ring ring-one" aria-hidden="true"><b /></i>
                <i className="architecture-core-ring ring-two" aria-hidden="true"><b /></i>
                <span>MP</span><small>FULL STACK<br />RUNTIME</small>
              </div>
              <div className="architecture-lanes">
                {lanes.map(({ label, value, icon: Icon }, index) => (
                  <motion.div key={label} initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.18 + index * 0.1 }}>
                    <Icon size={17} /><span><small>{label}</small><strong>{value}</strong></span><i />
                    <b className="architecture-packet" style={{ "--packet-delay": `${index * 0.55}s` }} aria-hidden="true" />
                  </motion.div>
                ))}
              </div>
              <div className="architecture-signal"><span>BUILD PIPELINE</span><div><i /></div><strong>DEPLOYED</strong></div>
            </aside>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
