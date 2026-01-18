"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "AI Image Detection",
    description: "Detect AI-generated images using ML pipelines.",
  },
  {
    title: "Wave Solder Monitoring",
    description: "Real-time industrial monitoring system.",
  },
  {
    title: "CubeSat Camera Research",
    description: "Thermal-optimized imaging for 1U satellites.",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen px-6 py-24 max-w-7xl mx-auto"
    >
      <h2 className="text-4xl font-bold mb-12">Projects</h2>

      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            className="p-6 rounded-2xl border border-white/10 hover:border-white/30 hover:scale-105 transition cursor-pointer bg-white/5"
          >
            <h3 className="text-xl font-semibold mb-2">
              {project.title}
            </h3>
            <p className="text-gray-400 text-sm">
              {project.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
