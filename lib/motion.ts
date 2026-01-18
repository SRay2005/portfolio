import { Variants } from "framer-motion";

/* ===== Container animation ===== */
export const containerReveal: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

/* ===== Item animation ===== */
export const itemReveal: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

/* ===== Simple spring preset ===== */
export const EASE = {
  spring: {
    type: "spring",
    stiffness: 220,
    damping: 26,
  },
};

/* ===== Subsystem colors ===== */
export const SUBSYSTEM_COLORS = {
  EPS: "#facc15",
  OBC: "#22c55e",
  TTC: "#ef4444",
  ADCS: "#3b82f6",
  STS: "#9ca3af",
  PAYLOAD: "#a855f7",
} as const;

export type SubsystemKey = keyof typeof SUBSYSTEM_COLORS;
