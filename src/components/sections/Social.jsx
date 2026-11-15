"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function Social({ icon, label, href }) {
  const external = /^https?:\/\//i.test(href);

  return (
    <motion.a
      className="social"
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      aria-label={label}
      whileHover={{ y: -5 }}
    >
      {icon}
      <strong>{label}</strong>
      <ArrowUpRight size={15} />
    </motion.a>
  );
}
