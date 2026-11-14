"use client";

import { motion } from "framer-motion";

export default function SplitTitle({ text }) {
  return (
    <h1>
      {text.split(" ").map((w, i) => (
        <motion.span
          key={i}
          initial={{ y: "110%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            delay: 0.75 + i * 0.055,
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {w}&nbsp;
        </motion.span>
      ))}
    </h1>
  );
}
