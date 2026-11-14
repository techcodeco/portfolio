"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code2, Database, Server, GitBranch, Cpu, Layers3 } from "lucide-react";

export default function SystemDiagram({ lang = "en" }) {
  const fa = lang === "fa";
  const nodes = fa
    ? [
        ["کلاینت", "وب · موبایل", Code2],
        ["درگاه", "احراز هویت · محدودیت نرخ", Server],
        ["صف", "Redis · Workerها", Layers3],
        ["داده", "PostgreSQL · Cache", Database],
      ]
    : [
        ["Client", "Web · Mobile", Code2],
        ["Gateway", "Auth · Rate limit", Server],
        ["Queue", "Redis · Workers", Layers3],
        ["Data", "Postgres · Cache", Database],
      ];
  return (
    <div className="system glass">
      <div className="systemflow">
        {nodes.map(([a, b, I], i) => (
          <React.Fragment key={a}>
            <motion.div
              className={`node node-${i}`}
              whileHover={{ scale: 1.045 }}
            >
              <span className="node-energy" aria-hidden="true" />
              <I />
              <strong>{a}</strong>
              <small>{b}</small>
            </motion.div>
            {i < nodes.length - 1 && (
              <div className={`flow flow-${i}`} aria-hidden="true">
                <i />
                <b />
                <em />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
      <div className="systemtags">
        <span>
          <Cpu /> {fa ? "مقیاس‌پذیری افقی" : "horizontal scale"}
        </span>
        <span>
          <GitBranch /> {fa ? "مبتنی بر رویداد" : "event-driven"}
        </span>
        <span>
          <Server /> {fa ? "مقاوم در برابر خطا" : "failure-aware"}
        </span>
      </div>
    </div>
  );
}
