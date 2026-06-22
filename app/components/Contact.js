"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { Mail, Phone, MessageCircle, User, Code } from "lucide-react";

export default function Contact() {
  return (
    <SectionWrapper id="contact">
      <div className="py-32 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              {" "}
              Let's Connect
            </h2>

            <p className="text-zinc-500 text-base md:text-lg max-w-3xl">
              {" "}
              I'm always open to discussing new opportunities, interesting
              projects and innovative ideas.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 md:mt-16">
            {/* Email */}
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=Mohanpandey7557@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="p-8 rounded-3xl border border-zinc-800 bg-zinc-950 hover:-translate-y-2 hover:border-zinc-600 hover:shadow-2xl transition-all duration-300">
                <Mail className="mb-4" size={28} />
                <h3 className="text-xl font-semibold">Email</h3>
                <p className="text-zinc-500 mt-2 break-all">
                  Mohanpandey7557@gmail.com
                </p>
              </div>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/mohan-pandey-231610195"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="p-8 rounded-3xl border border-zinc-800 bg-zinc-950 hover:-translate-y-2 hover:border-zinc-600 hover:shadow-2xl transition-all duration-300">
                <User className="mb-4" size={28} />
                <h3 className="text-xl font-semibold">LinkedIn</h3>
                <p className="text-zinc-500 mt-2">View Profile</p>
              </div>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/ImmohanPandey"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="p-8 rounded-3xl border border-zinc-800 bg-zinc-950 hover:-translate-y-2 hover:border-zinc-600 hover:shadow-2xl transition-all duration-300">
                <Code className="mb-4" size={28} />
                <h3 className="text-xl font-semibold">GitHub</h3>
                <p className="text-zinc-500 mt-2">View Projects</p>
              </div>
            </a>

            {/* Phone */}
            <a href="tel:+918178439650" className="group">
              <div className="p-8 rounded-3xl border border-zinc-800 bg-zinc-950 hover:-translate-y-2 hover:border-zinc-600 hover:shadow-2xl transition-all duration-300">
                <Phone className="mb-4" size={28} />
                <h3 className="text-xl font-semibold">Call Me</h3>
                <p className="text-zinc-500 mt-2">+91 81784 39650</p>
              </div>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/918178439650"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="p-8 rounded-3xl border border-zinc-800 bg-zinc-950 hover:-translate-y-2 hover:border-zinc-600 hover:shadow-2xl transition-all duration-300">
                <MessageCircle className="mb-4" size={28} />
                <h3 className="text-xl font-semibold">WhatsApp</h3>
                <p className="text-zinc-500 mt-2">Send Message</p>
              </div>
            </a>

            {/* Availability */}
            <div className="p-8 rounded-3xl border border-zinc-800 bg-zinc-950 hover:-translate-y-2 hover:border-zinc-600 hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center gap-3">
                <div className="h-3 w-3 rounded-full bg-green-500 animate-pulse"></div>
                <span className="font-semibold text-green-400">
                  Available for Opportunities
                </span>
              </div>

              <p className="text-zinc-500 mt-4">
                Open to full-time roles, freelance projects and collaborations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
