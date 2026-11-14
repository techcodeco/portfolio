"use client";

import { motion } from "framer-motion";

export default function TechCard({ x, i }) {
  const Icon = x.icon;
  return (
    <motion.article
      className="tech glass"
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: i * 0.025 }}
      whileHover={{ y: -9, rotateX: 2, rotateY: -2 }}
    >
      <div className="techicon" style={{ color: x.color }}>
        <Icon />
      </div>
      <div className="techbody">
        <div className="techtop">
          <strong>{x.name}</strong>
          <b>{x.level}%</b>
        </div>
        <small>{x.category}</small>
        <div className="meter">
          <motion.i
            initial={{ width: 0 }}
            whileInView={{ width: x.level + "%" }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          />
        </div>
      </div>
    </motion.article>
  );
}
