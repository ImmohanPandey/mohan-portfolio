"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Building2, Code2, GitBranch, Orbit, Rocket, Sparkles } from "lucide-react";
import { journey } from "../data";
import SectionHeader from "./SectionHeader";
import SectionWrapper from "./SectionWrapper";

const cardVariants = {
  hidden: { opacity: 0, y: 38, scale: 0.98 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Experience() {
  return (
    <SectionWrapper id="experience" className="experience-section journey-section">
      <div className="journey-ambient journey-ambient-a" aria-hidden="true" />
      <div className="journey-ambient journey-ambient-b" aria-hidden="true" />

      <div className="page-width section-pad journey-inner">
        <SectionHeader
          index="04"
          label="PROFESSIONAL_JOURNEY.LOG"
          title={<>From first commit to<br /><span>the current chapter.</span></>}
          copy="My journey so far is simple: start by learning how real software gets built, then keep raising the bar. Two chapters, one direction — keep building better systems and keep shipping." 
        />

        <div className="journey-console-bar">
          <span><i className="journey-live-dot" /> CAREER_TIMELINE</span>
          <code>origin → growth → current_build</code>
          <span className="journey-console-status">● LIVE</span>
        </div>

        <div className="journey-map">
          <div className="journey-spine" aria-hidden="true">
            <motion.i
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1.25, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>

          {journey.map((item, index) => (
            <motion.article
              key={item.company}
              className={`journey-card journey-card-${item.accent} ${item.project ? "journey-card-current" : ""}`}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              whileHover={{ y: -8, scale: 1.01, transition: { duration: 0.24 } }}
            >
              <div className="journey-node" aria-hidden="true"><span>{item.index}</span></div>

              <div className="journey-card-top">
                <div className="journey-phase"><span>{item.index}</span>{item.phase}</div>
                <div className={`journey-status ${item.project ? "is-current" : ""}`}>{item.status}</div>
              </div>

              <div className="journey-company-row">
                <div className="journey-company-icon"><Building2 size={21} /></div>
                <div>
                  <span>COMPANY</span>
                  <h3>{item.company}</h3>
                  {item.designation && <strong className="journey-designation">{item.designation}</strong>}
                </div>
              </div>

              <h4>{item.headline}</h4>
              <p>{item.description}</p>

              <div className="journey-runtime-row">
                <span><Code2 size={14} /> {item.designation ? item.designation.toUpperCase() : "SOFTWARE DEVELOPMENT"}</span>
                <span><GitBranch size={14} /> REAL-WORLD DELIVERY</span>
              </div>

              {item.project && (
                <motion.div
                  className="current-project"
                  whileHover={{ x: 5, scale: 1.008 }}
                  transition={{ type: "spring", stiffness: 320, damping: 24 }}
                >
                  <div className="current-project-head">
                    <span><Orbit size={16} /> {item.project.label}</span>
                    <span className="current-project-active">ACTIVE_BUILD</span>
                  </div>
                  <div className="current-project-body">
                    <div>
                      <span className="current-project-command">mohan@kapoor:~$ open project</span>
                      <strong>{item.project.name}<i>_</i></strong>
                      <p>{item.project.description}</p>
                    </div>
                    <div className="current-project-orbit" aria-hidden="true"><span /><span /><span /></div>
                  </div>
                  <div className="current-project-footer"><span>PROJECT_STATUS</span><strong>IN DEVELOPMENT</strong><ArrowUpRight size={16} /></div>
                </motion.div>
              )}
            </motion.article>
          ))}
        </div>

        <motion.div className="journey-now-banner" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div className="journey-now-icon"><Sparkles size={19} /></div>
          <div><span>NOW_PLAYING.CAREER</span><strong>Kapoor Wealth Enterprises × Senior Software Developer × Vautra</strong></div>
          <div className="journey-now-track"><i /></div>
          <Rocket size={19} />
        </motion.div>

      </div>
    </SectionWrapper>
  );
}
