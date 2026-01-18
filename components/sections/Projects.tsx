"use client";

import { motion } from "framer-motion";


const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const projects = [
  {
    title: "Imager – AI detector for images",
    description:
      "Designed an AI image detection system with a backend to assess likelihood of AI-generated content using multi-signal forensic analysis.",
    tags: ["CNNs", "Image Forensics", "FastAPI"],
  },
  {
    title: "FormulaT - Tyre survival prediction tool",
    description:
      "Built and trained a predictive model for Formula 1 tyre survival probabilities using historical data and machine learning",
    tags: ["Machine Learning", "Data Analysis"],
  },
  {
    title: "Dielectric characterization of Liquid Crystals with Terphenyl doping",
    description:
      "Conducted experimental analysis of dielectric properties of liquid crystals doped with Terphenyl for enhanced electro-optic applications.",
    tags: ["Research", "Electronics", "Physics"],
  },
  {
    title: "Engineering & Systems Projects",
    description:
      "Academic and practical projects spanning electronics, signal processing, and systems engineering during coursework and industry exposure.",
    tags: ["ECE", "Physics", "Systems"],
  },
];

export default function Projects() {
  return (
    <section className="min-h-screen px-6 py-24 max-w-6xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          PROJECTS
        </h1>

        <motion.div
                              variants={item}
                              className="h-1 w-16 mx-auto mb-6 bg-linear-to-r from-white/80 to-white/30 rounded-full"
                            />
                            
        <p className="text-gray-400 max-w-2xl mx-auto">
          A selection of academic, technical, and exploratory projects across space systems,
          machine learning, and engineering.
        </p>
      </motion.div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="rounded-xl border border-white/10 bg-white/5 p-6 hover:border-white/20 transition"
          >
            <h2 className="text-xl font-semibold mb-3">
              {project.title}
            </h2>
            <p className="text-gray-400 text-sm mb-4 leading-relaxed">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-3 py-1 rounded-full border border-white/10 text-gray-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
