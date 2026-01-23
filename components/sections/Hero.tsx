"use client";

import { motion } from "framer-motion";

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
          transition={{ duration: 2.0, ease: "easeOut" }}
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
           Machine Learning • Software • Electronics • Space & Hardware
        </motion.p>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mx-auto mt-8 h-px w-32 bg-linear-to-r from-transparent via-cyan-400/60 to-transparent"
        />

       
      </div>
    </section>
  );
}

export default Hero;
