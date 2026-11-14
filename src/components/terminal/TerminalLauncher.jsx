"use client";

import { motion } from "framer-motion";
import { Command } from "lucide-react";

export default function TerminalLauncher({ onOpen }) {
  return (
    <motion.div className="terminal-launch" whileHover="hover">
      <motion.span
        className="terminal-label"
        variants={{
          hover: { opacity: 1, x: 0, width: "auto", marginRight: 8 },
        }}
      >
        BODY TERMINAL
      </motion.span>
      <button className="easter" onClick={onOpen} aria-label="Body Terminal">
        <Command size={15} />
      </button>
    </motion.div>
  );
}
