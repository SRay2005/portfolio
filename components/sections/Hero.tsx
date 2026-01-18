"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Subtle cosmic glow */}
      <div className="absolute inset-0 cosmic-hero pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl px-6 text-center">
        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-white"
        >
          Sannidhya Ray
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-6 text-sm md:text-base tracking-wide text-gray-400"
        >
          ECE + Physics • Machine Learning • Systems • Space & Hardware
        </motion.p>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mx-auto mt-8 h-px w-32 bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent"
        />

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-4"
        >
          {/* Projects */}
          <Link
            href="/projects"
            className="btn-primary"
          >
            View Projects
          </Link>

          {/* Contact */}
          <Link
            href="/contact"
            className="btn-outline inline-flex items-center gap-2"
          >
            Contact
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
