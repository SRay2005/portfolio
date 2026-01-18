"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen pt-32 flex flex-col items-center justify-center text-center px-6">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-7xl font-bold"
      >
        Sannidhya Ray
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-6 text-lg text-gray-400 max-w-xl"
      >
        ECE + Physics • Machine Learning • Systems • Space & Hardware
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="mt-10 flex gap-6"
      >
        <a
          href="#projects"
          className="px-6 py-3 rounded-xl bg-white text-black font-medium hover:scale-105 transition"
        >
          View Projects
        </a>
        <a
          href="#contact"
          className="px-6 py-3 rounded-xl border border-white/30 hover:bg-white/10 transition"
        >
          Contact
        </a>
      </motion.div>
    </section>
  );
}
