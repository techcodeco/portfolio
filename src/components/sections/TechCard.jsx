"use client";

import { m } from "framer-motion";

export default function TechCard({ x, i }) {
  const Icon = x.icon;

  return (
    <m.article
      className="tech glass"
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: i * 0.025 }}
      whileHover={{ y: -7 }}
    >
      <div className="techicon" style={{ color: x.color }}>
        <Icon aria-hidden="true" />
      </div>
      <div className="techbody">
        <div className="techtop">
          <strong>{x.name}</strong>
        </div>
        <small>{x.category}</small>
      </div>
    </m.article>
  );
}
