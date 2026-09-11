"use client";

import { motion } from "framer-motion";

export default function SectionHeader({ index, label, title, copy }) {
  return (
    <div className="section-heading-grid">
      <motion.div
        className="section-index"
        initial={{ opacity: 0, x: -18 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.6 }}
      >
        <span>{index}</span>
        <span>{label}</span>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.45 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <h2 className="section-title">{title}</h2>
        {copy && <p className="section-copy">{copy}</p>}
      </motion.div>
    </div>
  );
}
