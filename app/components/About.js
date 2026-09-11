"use client";

import { motion } from "framer-motion";
import { Braces, Cloud, Code2, Database, Smartphone } from "lucide-react";
import SectionHeader from "./SectionHeader";
import SectionWrapper from "./SectionWrapper";

const lanes = [
  { icon: Code2, label: "Frontend", value: "React / Next", detail: "Interfaces with motion, structure and intent." },
  { icon: Smartphone, label: "Mobile", value: "Flutter", detail: "Cross-platform experiences that feel native." },
  { icon: Braces, label: "Backend", value: "FastAPI / Node", detail: "APIs and business logic built for real workflows." },
  { icon: Database, label: "Data", value: "Postgres / Mongo", detail: "Practical models, queries and persistence." },
  { icon: Cloud, label: "Cloud", value: "AWS / Docker", detail: "Deployment paths that actually reach production." },
];

export default function About() {
  return (
    <SectionWrapper id="about" className="about-section">
      <div className="page-width section-pad">
        <SectionHeader
          index="01"
          label="PROFILE.EXE"
          title={<>Not a “frontend guy”.<br /><span>I build across the stack.</span></>}
          copy="The part I enjoy most is connecting the layers: understanding the product problem, shaping the interface, designing the data flow, building the API and making sure the whole thing can ship."
        />

        <div className="about-layout">
          <motion.div className="manifesto-card" initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} whileHover={{ y: -7, scale: 1.006, transition: { duration: 0.24 } }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <div className="manifesto-top"><span>BUILD_PHILOSOPHY.md</span><span>UTF-8</span></div>
            <div className="manifesto-copy">
              <span className="line-number">01</span><p>I like products that feel <em>obvious</em> after they&apos;re built.</p>
              <span className="line-number">02</span><p>That takes more than pretty UI — it takes systems thinking, fast iteration and enough engineering depth to cross boundaries.</p>
              <span className="line-number">03</span><p>My default mode: <strong>understand → prototype → build → break → refine → ship.</strong></p>
            </div>
            <div className="manifesto-footer"><span>mohan@portfolio</span><span className="blink-dot" /></div>
          </motion.div>

          <div className="lane-stack">
            {lanes.map((lane, index) => {
              const Icon = lane.icon;
              return (
                <motion.div key={lane.label} className="lane-card" initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} whileHover={{ x: 7, y: -3, scale: 1.008, transition: { duration: 0.22 } }} viewport={{ once: true }} transition={{ delay: index * 0.08, duration: 0.55 }}>
                  <div className="lane-icon"><Icon size={18} /></div>
                  <div><span>{lane.label}</span><strong>{lane.value}</strong></div>
                  <p>{lane.detail}</p>
                  <span className="lane-index">0{index + 1}</span>
                </motion.div>
              );
            })}
          </div>
        </div>

        <div className="signal-grid">
          <div><span>MODE</span><strong>Builder</strong><small>idea → production</small></div>
          <div><span>FOCUS</span><strong>Product Engineering</strong><small>web / mobile / backend</small></div>
          <div><span>BIAS</span><strong>Ship & Iterate</strong><small>speed without chaos</small></div>
          <div><span>STATUS</span><strong className="status-green">Online</strong><small>open to opportunities</small></div>
        </div>
      </div>
    </SectionWrapper>
  );
}
