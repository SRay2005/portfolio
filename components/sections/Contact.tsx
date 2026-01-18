"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section className="min-h-screen px-6 py-24 max-w-5xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Contact
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Feel free to reach out for collaborations, projects, or just a conversation.
        </p>
      </motion.div>

      {/* Content */}
      <div className="grid md:grid-cols-2 gap-12">
        {/* Left: Info */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <div>
            <h2 className="text-xl font-semibold mb-2">Let’s Connect</h2>
            <p className="text-gray-400 leading-relaxed">
              I’m always interested in opportunities related to space systems,
              machine learning, and engineering projects.  
              Whether it’s research, development, or discussion — feel free to reach out.
            </p>
          </div>

          <div className="space-y-3 text-sm">
            <p>
              <span className="text-gray-500">Email:</span>{" "}
              <a
                href="mailto:sannidhyaray@example.com"
                className="text-white hover:underline"
              >
                sannidhyaray@example.com
              </a>
            </p>
            <p>
              <span className="text-gray-500">Location:</span>{" "}
              Delhi NCR, India
            </p>
            <p>
              <span className="text-gray-500">Interests:</span>{" "}
              Space Systems, ML, ECE, Physics
            </p>
          </div>
        </motion.div>

        {/* Right: Simple Form (UI only) */}
        <motion.form
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-4 border border-white/10 bg-white/5 rounded-xl p-6"
          onSubmit={(e) => e.preventDefault()}
        >
          <div>
            <label className="block text-sm mb-1 text-gray-400">
              Name
            </label>
            <input
              type="text"
              className="w-full rounded-md bg-black/40 border border-white/10 px-3 py-2 text-sm outline-none focus:border-white/30"
            />
          </div>

          <div>
            <label className="block text-sm mb-1 text-gray-400">
              Email
            </label>
            <input
              type="email"
              className="w-full rounded-md bg-black/40 border border-white/10 px-3 py-2 text-sm outline-none focus:border-white/30"
            />
          </div>

          <div>
            <label className="block text-sm mb-1 text-gray-400">
              Message
            </label>
            <textarea
              rows={4}
              className="w-full rounded-md bg-black/40 border border-white/10 px-3 py-2 text-sm outline-none focus:border-white/30 resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full mt-2 rounded-md bg-white text-black py-2 text-sm font-medium hover:bg-gray-200 transition"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
}
