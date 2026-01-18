"use client";

import Image from "next/image";
import { motion } from "framer-motion";

/* ---------------- Animation variants (TS-safe) ---------------- */

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const itemLeft = {
  hidden: { opacity: 0, x: -40 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6 },
  },
};

/* ---------------- Your content ---------------- */

const stats = [
  { value: "B.E ECE", label: "BITS Pilani" },
  { value: "M.S Physics", label: "BITS Pilani" },
  { value: "7.32", label: "CGPA" },
  { value: "2028", label: "Graduation Year" },
];

const tags = [
  "Machine Learning",
  "Image Processing",
  "Remote Sensing",
  "Software Development",
  "Python Development",
  "Space Hardware",
];

const highlights = [
  {
    title: "Interdisciplinary Engineering",
    text: "Dual-degree student in Electronics & Communication Engineering and Physics with strong mathematical and systems foundations.",
  },
  {
    title: "Applied Machine Learning",
    text: "Worked on AI-based image forensics, survival analysis, and signal-level feature extraction using CNNs and ensemble models.",
  },
  {
    title: "Space Systems Exposure",
    text: "Hands-on experience with CubeSat subsystems, hyperspectral imaging, and satellite payload design through Team Anant.",
  },
  {
    title: "Industry Experience",
    text: "Industry exposure through internships, focusing on engineering workflows, automation, and real-world systems.",
  },
];

/* ---------------- Component ---------------- */

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-4">

        {/* Header */}
        <motion.div
          className="text-center mb-16"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.h2
            variants={item}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            ABOUT ME
          </motion.h2>

          <motion.div
            variants={item}
            className="h-1 w-16 mx-auto mb-6 bg-linear-to-r from-white/80 to-white/30 rounded-full"
          />

          <motion.p
            variants={item}
            className="text-white/70 max-w-2xl mx-auto text-base md:text-lg text-center"
>
              I work at the intersection of software, hardware, and intelligence
              <br />
               Building systems that bridge algorithms with the physical world.
          </motion.p>

        </motion.div>

        {/* Intro */}
        <motion.div
          className="grid md:grid-cols-2 gap-10 items-center mb-20"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.div variants={itemLeft}>
            <Image
              src="/assets/SANNIDHYA_RAY.png"
              alt="Sannidhya Ray"
              width={600}
              height={400}
              className="rounded-xl"
            />
          </motion.div>

          <motion.div variants={item} className="space-y-5">
            <h3 className="text-2xl font-semibold">Who I Am</h3>
            <p className="text-white/70 leading-relaxed">
              I’m a dual-degree undergraduate at BITS Pilani with strong interests
              in machine learning, space systems, and engineering design. I enjoy
              building things end-to-end — from models and code to real systems.
            </p>

            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-sm rounded-full border border-white/20 text-white/80"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Highlights */}
        <motion.div
          className="space-y-6 mb-20"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {highlights.map((h) => (
            <motion.div
              key={h.title}
              variants={item}
              whileHover={{ x: 6 }}
              transition={{ duration: 0.2 }}
              className="pl-6 border-l-2 border-white/30 hover:border-white transition-colors"
            >
              <h4 className="text-lg font-semibold mb-1">{h.title}</h4>
              <p className="text-white/70">{h.text}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {stats.map((s) => (
            <motion.div
              key={s.label}
              variants={item}
              whileHover={{ scale: 1.05, y: -4 }}
              transition={{ duration: 0.2 }}
              className="p-4 rounded-lg hover:bg-white/5 transition"
            >
              <div className="text-2xl md:text-3xl font-bold mb-1">
                {s.value}
              </div>
              <div className="text-sm text-white/60">{s.label}</div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
