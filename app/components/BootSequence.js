"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

const bootLines = [
  "loading interface kernel...",
  "mounting project graph...",
  "warming animation engine...",
  "syncing developer profile...",
  "system ready.",
];

export default function BootSequence() {
  const [visible, setVisible] = useState(false);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return;

    const hasBooted = window.sessionStorage.getItem("mohan-portfolio-booted");
    if (hasBooted) return;

    setVisible(true);
    const timer = window.setTimeout(() => {
      setVisible(false);
      window.sessionStorage.setItem("mohan-portfolio-booted", "1");
    }, 2350);

    return () => window.clearTimeout(timer);
  }, [reduced]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="boot-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.02, filter: "blur(12px)" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            className="boot-orb"
            animate={{ rotate: 360, scale: [0.9, 1.08, 0.9] }}
            transition={{ rotate: { duration: 5, repeat: Infinity, ease: "linear" }, scale: { duration: 2, repeat: Infinity } }}
          />
          <div className="boot-inner">
            <div className="boot-kicker">MOHAN.DEV // SESSION_26</div>
            <div className="boot-title">INITIALIZING<span>_</span></div>
            <div className="boot-lines">
              {bootLines.map((line, index) => (
                <motion.div
                  key={line}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.18 + index * 0.26 }}
                >
                  <span>0{index + 1}</span> {line}
                </motion.div>
              ))}
            </div>
            <motion.div className="boot-progress" initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 2, ease: "easeInOut" }} />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
