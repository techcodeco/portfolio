"use client";

import { m, useReducedMotion } from "framer-motion";
import {
  Activity,
  Braces,
  ExternalLink,
  Github,
  Globe2,
  Swords,
} from "lucide-react";

const PROJECT_VISUALS = {
  duel: Swords,
  scanner: Activity,
  kurdland: Globe2,
  portfolio: Braces,
};

export default function Project({ p, i, label }) {
  const reduce = useReducedMotion();
  const PreviewIcon = PROJECT_VISUALS[p.visual] || Github;
  const repoName = p.repoName || p.github?.split("/").filter(Boolean).pop() || "repository";

  return (
    <m.article
      className={"project glass " + (p.featured ? "featured" : "")}
      initial={reduce ? false : { opacity: 0, y: 35 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={reduce ? { duration: 0 } : { delay: i * 0.08 }}
      whileHover={reduce ? undefined : { y: -8 }}
    >
      <div className={`projectvisual repo-visual repo-visual--${p.visual || "default"}`}>
        <span className="metric">{p.metric}</span>
        <div className="repo-preview-window" aria-label={`${repoName} GitHub repository preview`}>
          <div className="repo-preview-toolbar">
            <span className="repo-preview-dots" aria-hidden="true">
              <i />
              <i />
              <i />
            </span>
            <span className="repo-preview-address">
              <Github size={13} aria-hidden="true" focusable="false" />
              <span>github.com/techcodeco/</span>
            </span>
            <span className="repo-preview-public">PUBLIC</span>
          </div>

          <div className="repo-preview-main">
            <div className="repo-preview-mark">
              <PreviewIcon size={25} strokeWidth={1.8} aria-hidden="true" focusable="false" />
            </div>
            <div className="repo-preview-copy">
              <span className="repo-preview-owner">techcodeco /</span>
              <strong title={repoName}>{repoName}</strong>
              <p>{p.previewDescription || p.description}</p>
            </div>
          </div>

          <div className="repo-preview-bottom">
            <span className="repo-preview-stack">
              <span className="repo-preview-language-dot" />
              {p.stack.slice(0, 2).join(" · ")}
            </span>
            <span className="repo-preview-kind">GitHub repository</span>
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
        {p.github ? (
          <a href={p.github} target="_blank" rel="noopener noreferrer" aria-label={`View ${p.title} repository on GitHub`}>
            {label}
            <ExternalLink size={14} aria-hidden="true" focusable="false" />
          </a>
        ) : null}
      </div>
    </m.article>
  );
}
