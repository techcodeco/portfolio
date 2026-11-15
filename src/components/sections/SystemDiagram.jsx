"use client";

import React from "react";
import { m } from "framer-motion";
import { Code2, Database, Server, GitBranch, Cpu, Layers3 } from "lucide-react";

export default function SystemDiagram({ lang = "en" }) {
  const fa = lang === "fa";
  const nodes = fa
    ? [
        ["کلاینت", "HTTP Request", Code2],
        ["Gateway", "مسیریابی درخواست‌ها", Server],
        ["صف و Worker", "Redis · BullMQ", Layers3],
        ["داده", "MongoDB", Database],
      ]
    : [
        ["Client", "HTTP Request", Code2],
        ["Gateway", "Request Routing", Server],
        ["Queue & workers", "Redis · BullMQ", Layers3],
        ["Data", "MongoDB", Database],
      ];
  return (
    <div className="system glass">
      <div className="systemflow">
        {nodes.map(([a, b, I], i) => (
          <React.Fragment key={a}>
            <m.div
              className={`node node-${i}`}
              whileHover={{ scale: 1.045 }}
            >
              <span className="node-energy" aria-hidden="true" />
              <I aria-hidden="true" focusable="false" />
              <strong>{a}</strong>
              <small>{b}</small>
            </m.div>
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
          <Cpu aria-hidden="true" focusable="false" /> {fa ? "سرویس‌های ماژولار" : "modular services"}
        </span>
        <span>
          <GitBranch aria-hidden="true" focusable="false" /> {fa ? "پردازش مبتنی بر صف" : "queue-backed jobs"}
        </span>
        <span>
          <Server aria-hidden="true" focusable="false" /> {fa ? "ذخیره‌سازی مشترک داده" : "shared data stores"}
        </span>
      </div>
    </div>
  );
}
