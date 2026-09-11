"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Mail, MessageCircle, Phone } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "./BrandIcons";
import SectionWrapper from "./SectionWrapper";

const links = [
  { label: "Email", value: "Mohanpandey7557@gmail.com", href: "mailto:Mohanpandey7557@gmail.com", icon: Mail },
  { label: "LinkedIn", value: "Connect professionally", href: "https://www.linkedin.com/in/mohan-pandey-231610195", icon: LinkedInIcon },
  { label: "GitHub", value: "Inspect the repositories", href: "https://github.com/ImmohanPandey", icon: GitHubIcon },
  { label: "WhatsApp", value: "Start a quick conversation", href: "https://wa.me/918178439650", icon: MessageCircle },
];

export default function Contact() {
  return (
    <SectionWrapper id="contact" className="contact-section">
      <div className="contact-noise" aria-hidden="true" />
      <div className="page-width contact-layout">
        <motion.div className="contact-copy" initial={{ opacity: 0, y: 35 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div className="contact-command">mohan@dev:~$ <span>start_conversation</span><i>_</i></div>
          <h2>Have an idea worth <span>shipping?</span></h2>
          <p>New role, ambitious product, freelance build or just an interesting technical problem — send the signal.</p>
          <a href="mailto:Mohanpandey7557@gmail.com" className="contact-primary">MAKE CONTACT <ArrowUpRight size={19} /></a>
          <div className="contact-phone"><Phone size={15} /> +91 81784 39650</div>
        </motion.div>

        <motion.div className="contact-links" initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          {links.map((link, index) => {
            const Icon = link.icon;
            return (
              <a key={link.label} href={link.href} target={link.href.startsWith("http") ? "_blank" : undefined} rel={link.href.startsWith("http") ? "noreferrer" : undefined}>
                <span className="contact-link-index">0{index + 1}</span>
                <div className="contact-link-icon"><Icon size={18} /></div>
                <div><strong>{link.label}</strong><span>{link.value}</span></div>
                <ArrowUpRight size={18} />
              </a>
            );
          })}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
