"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import Image from "next/image";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { GitHubIcon } from "./BrandIcons";
import SectionWrapper from "./SectionWrapper";

export default function Hero() {
  const targetX = useMotionValue(0);
  const targetY = useMotionValue(0);
  const targetRotateX = useMotionValue(0);
  const targetRotateY = useMotionValue(0);

  const x = useSpring(targetX, { stiffness: 150, damping: 22, mass: 0.55 });
  const y = useSpring(targetY, { stiffness: 150, damping: 22, mass: 0.55 });
  const rotateX = useSpring(targetRotateX, { stiffness: 145, damping: 22, mass: 0.55 });
  const rotateY = useSpring(targetRotateY, { stiffness: 145, damping: 22, mass: 0.55 });

  const handlePointerMove = (event) => {
    if (event.pointerType && event.pointerType !== "mouse") return;

    const rect = event.currentTarget.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width - 0.5;
    const py = (event.clientY - rect.top) / rect.height - 0.5;

    targetX.set(px * 24);
    targetY.set(py * 18);
    targetRotateY.set(px * 8);
    targetRotateX.set(py * -6);
  };

  const resetParallax = () => {
    targetX.set(0);
    targetY.set(0);
    targetRotateX.set(0);
    targetRotateY.set(0);
  };

  return (
    <SectionWrapper id="hero" className="hero-section">
      <div className="hero-grid-lines" aria-hidden="true" />
      <div className="hero-aurora hero-aurora-a" aria-hidden="true" />
      <div className="hero-aurora hero-aurora-b" aria-hidden="true" />

      <div className="page-width hero-layout">
        <div className="hero-copy-block">
          <motion.div className="availability-pill" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            <span className="live-dot" /> AVAILABLE FOR THE NEXT BUILD
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}>
            <div className="hero-overline">FULL STACK DEVELOPER / MOBILE ENGINEER</div>
            <h1 className="hero-title">
              <span className="hero-title-line">I BUILD <span className="outline-word">DIGITAL</span></span>
              <span className="hero-title-line">SYSTEMS THAT <span className="gradient-word">MOVE.</span></span>
            </h1>
          </motion.div>

          <motion.p className="hero-description" initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55, duration: 0.7 }}>
            I&apos;m <strong>Mohan Pandey</strong> — a developer working across web, mobile, backend and cloud. I turn raw product ideas into interfaces, APIs and production-ready systems with a bias toward speed, clarity and solid engineering.
          </motion.p>

          <motion.div className="hero-actions" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.75 }}>
            <a href="#projects" className="primary-action">Explore the build log <ArrowDownRight size={18} /></a>
            <a href="https://github.com/ImmohanPandey" target="_blank" rel="noreferrer" className="ghost-action"><GitHubIcon size={18} /> GitHub <ArrowUpRight size={15} /></a>
          </motion.div>

          <motion.div className="hero-metrics" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.95 }}>
            <div><strong>4+</strong><span>enterprise builds</span></div>
            <div><strong>10+</strong><span>projects shipped</span></div>
            <div><strong>4</strong><span>layers: UI → cloud</span></div>
          </motion.div>
        </div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.96, y: 22 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          onPointerMove={handlePointerMove}
          onPointerLeave={resetParallax}
        >
          <div className="visual-hud hud-top"><span>DEV_PROFILE.OBJ</span><span>LIVE</span></div>

          <motion.div
            className="portrait-parallax"
            style={{ x, y, rotateX, rotateY, transformPerspective: 1100 }}
            aria-hidden="true"
          >
            <div className="portrait-frame">
              <div className="portrait-chroma" />
              <Image src="/profile-hero.jpeg" alt="" fill priority sizes="(max-width: 900px) 90vw, 42vw" className="portrait-image" />
              <div className="portrait-caption">
                <span>MP / 2026</span>
                <strong>CODE. DESIGN. SHIP.</strong>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="profile-status-card"
            initial={{ opacity: 0, x: -18, y: 16 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.65, delay: 0.85, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="profile-status-head">
              <span><i /> CURRENT FOCUS</span>
              <small>LIVE</small>
            </div>
            <div className="profile-status-main">
              <span>BUILDING NOW</span>
              <strong>VAUTRA</strong>
            </div>
            <div className="profile-status-meta">
              <span>WEB</span>
              <span>MOBILE</span>
              <span>BACKEND</span>
            </div>
          </motion.div>

          <div className="floating-chip chip-a">API / 42ms</div>
          <div className="floating-chip chip-b">BUILD ✓</div>
          <div className="floating-chip chip-c">MOBILE + WEB</div>
        </motion.div>
      </div>

      <div className="hero-bottom-rail page-width">
        <span>SCROLL TO INSPECT</span>
        <div className="rail-line"><i /></div>
        <span>NO TEMPLATES. JUST SYSTEMS.</span>
      </div>
    </SectionWrapper>
  );
}
