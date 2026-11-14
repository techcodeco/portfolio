"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function Social({ icon, label, href }) {
  return (
    <motion.a
      className="social"
      href={href}
      target="_blank"
      rel="noreferrer"
      whileHover={{ y: -5 }}
    >
      {icon}
      <strong>{label}</strong>
      <ArrowUpRight size={15} />
    </motion.a>
  );
}
