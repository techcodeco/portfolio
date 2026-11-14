"use client";

import { motion } from "framer-motion";

export default function Loader() {
  return (
    <motion.div
      className="loader"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="loader-inner">
        <div className="loader-logo">&lt;/&gt;</div>
        <strong>TECHCODECO</strong>
        <span>initializing systems...</span>
        <div className="loaderbar">
          <i />
        </div>
      </div>
    </motion.div>
  );
}
