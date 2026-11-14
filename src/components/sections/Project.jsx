"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

export default function Project({ p, i, label }) {
  return (
    <motion.article
      className={"project glass " + (p.featured ? "featured" : "")}
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: i * 0.08 }}
      whileHover={{ y: -8 }}
    >
      <div className="projectvisual">
        <span className="metric">{p.metric}</span>
        <div className="codevisual">
          <em>01</em>
          <em>02</em>
          <em>03</em>
          <em>04</em>
          <div>
            <b>const</b> system = <strong>build</strong>({`{ scale: true }`});
          </div>
        </div>
      </div>
      <div className="projectbody">
        <small>{p.type}</small>
        <h3>{p.title}</h3>
        <p>{p.description}</p>
        <div className="tags">
          {p.stack.map((x) => (
            <span key={x}>{x}</span>
          ))}
        </div>
        <a href={p.github} target="_blank" rel="noreferrer">
          {label}
          <ExternalLink size={14} />
        </a>
      </div>
    </motion.article>
  );
}
