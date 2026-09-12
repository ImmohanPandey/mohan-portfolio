"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function ScrollMacbook() {
  const sectionRef = useRef(null);
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.18, 0.7, 1], reducedMotion ? [0.84, 0.9, 1, 1] : [0.5, 0.62, 1.05, 1.72]);
  const rotateX = useTransform(scrollYProgress, [0, 0.6, 1], reducedMotion ? [0, 0, 0] : [18, 5, 0]);
  const rotateY = useTransform(scrollYProgress, [0, 0.55, 1], reducedMotion ? [0, 0, 0] : [-14, 4, 0]);
  const y = useTransform(scrollYProgress, [0, 0.65, 1], reducedMotion ? [20, 0, 0] : [120, 0, -18]);
  const introOpacity = useTransform(scrollYProgress, [0, 0.16, 0.56, 0.76], [1, 1, 1, 0]);
  const screenGlow = useTransform(scrollYProgress, [0.18, 0.42], [0.35, 1]);
  const progressX = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={sectionRef} className="macbook-scroll" aria-label="Portfolio introduction">
      <div className="macbook-sticky">
        <div className="macbook-atmosphere" aria-hidden="true" />

        <motion.div className="macbook-intro-copy" style={{ opacity: introOpacity }}>
          <span>MOHAN.DEV / PORTFOLIO 2026</span>
          <h1>Scroll to enter<br /><em>the build.</em></h1>
          <p>A full-stack portfolio, running inside the machine.</p>
        </motion.div>

        <motion.div
          className="macbook-stage"
          style={{ scale, rotateX, rotateY, y, transformPerspective: 1400 }}
        >
          <div className="macbook-screen-live" aria-hidden="true">
            <motion.div className="macbook-iframe-shell" style={{ opacity: screenGlow }}>
              <iframe
                src="/showcase"
                title="Live preview of Mohan Pandey's portfolio"
                tabIndex={-1}
                loading="eager"
              />
            </motion.div>
          </div>
          <Image
            src="/macbook-pro-scroll.png"
            alt="A Space Black MacBook Pro displaying Mohan Pandey's portfolio"
            width={1536}
            height={1024}
            priority
            className="macbook-hardware"
          />
        </motion.div>

        <div className="macbook-scroll-rail">
          <span>SCROLL</span><i><motion.b style={{ width: progressX }} /></i><span>ENTER</span>
        </div>
      </div>
    </section>
  );
}
