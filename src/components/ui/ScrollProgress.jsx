"use client";

import { motion } from "framer-motion";

export default function ScrollProgress({ progress }) {
  return <motion.div className="scrollbar" style={{ scaleX: progress }} />;
}
