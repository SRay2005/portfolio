"use client";

import { motion } from "framer-motion";

export default function LiveBackground() {
  return (
    <div className="fixed inset-0 -z-10 bg-black overflow-hidden">
      {/* BIG STARS */}
      <motion.div
        className="
          absolute inset-0
          bg-[radial-gradient(6px_6px_at_15%_30%,rgba(255,255,255,0.9),transparent),
              radial-gradient(5px_5px_at_70%_20%,rgba(255,255,255,0.8),transparent),
              radial-gradient(7px_7px_at_40%_75%,rgba(255,255,255,0.85),transparent),
              radial-gradient(4px_4px_at_85%_60%,rgba(255,255,255,0.75),transparent)]
          animate-[pulse_6s_ease-in-out_infinite]
        "
      />

      {/* DENSE SMALL STARS */}
      <motion.div
        className="
          absolute inset-0
          bg-[radial-gradient(2px_2px_at_10%_50%,rgba(255,255,255,0.6),transparent),
              radial-gradient(2px_2px_at_90%_40%,rgba(255,255,255,0.6),transparent),
              radial-gradient(2px_2px_at_50%_80%,rgba(255,255,255,0.6),transparent),
              radial-gradient(2px_2px_at_30%_20%,rgba(255,255,255,0.6),transparent)]
        "
      />

      {/* STAR GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(180,180,255,0.18),transparent_55%)]" />

      {/* VERY LIGHT VIGNETTE (NOT BLACKED OUT) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_55%,rgba(0,0,0,0.6))]" />
    </div>
  );
}
