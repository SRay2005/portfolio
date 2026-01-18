"use client";

import { motion } from "framer-motion";

const navItems = [
  { label: "Home", href: "#" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 w-full z-50 backdrop-blur bg-black/40"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <span className="font-semibold tracking-wide">SR</span>
        <ul className="flex gap-8 text-sm text-gray-300">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="hover:text-white transition"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
}
