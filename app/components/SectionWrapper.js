"use client";

import { motion } from "framer-motion";

export default function SectionWrapper({ children, id }) {
  return (
    <motion.section
      id={id}
      className="scroll-mt-28 md:scroll-mt-32"
      initial={{
        opacity: 0,
        y: 50,
        scale: 0.97,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      viewport={{
        once: true,
        amount: 0.1,
      }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.section>
  );
}
