"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import DepthText from "@/components/DepthText/DepthText";
import { MODERN_TECH_STACK } from "@/data/portfolio-data";

export default function ModernTechStack({ lang = "en" }) {
  const [active, setActive] = useState(0);
  const [pointer, setPointer] = useState({ x: 0.5, y: 0.5, active: false });
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) return;
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % MODERN_TECH_STACK.length);
    }, 2500);
    return () => window.clearInterval(timer);
  }, [reduce]);

  const move = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setPointer({
      x: Math.max(0, Math.min(1, (event.clientX - rect.left) / rect.width)),
      y: Math.max(0, Math.min(1, (event.clientY - rect.top) / rect.height)),
      active: true,
    });
  };

  const enter = () => {};
  const leave = () => {
    setPointer({ x: 0.5, y: 0.5, active: false });
  };

  const cardStyle = (index) => {
    const total = MODERN_TECH_STACK.length;
    const depth = (index - active + total) % total;
    const dir = lang === "fa" ? -1 : 1;

    // Physical deck: cards sit on top of each other. The cards behind
    // the active one move slightly UP and toward the outside edge so the
    // lower corner of every card remains visible without separating the deck.
    const stepX = 11;
    const stepY = 9;
    const baseX = -depth * stepX * dir;
    const baseY = -depth * stepY;
    const baseRotate = depth * (dir === 1 ? -0.72 : 0.72);

    // Very small magnetic response. Only the front card moves noticeably;
    // the rest of the deck follows by a fraction so the stack never breaks.
    const px = pointer.active ? (pointer.x - 0.5) * 2 : 0;
    const py = pointer.active ? (pointer.y - 0.5) * 2 : 0;
    const lead = depth === 0;
    const influence = lead ? 1 : Math.max(0.08, 0.34 - depth * 0.055);

    const magnetX = px * 10 * influence;
    const magnetY = py * 7 * influence;
    const rx = -py * (lead ? 2.2 : 0.35) * influence;
    const ry = px * (lead ? 2.8 : 0.45) * influence;
    const rz = baseRotate + px * (lead ? 1.1 : 0.12) * influence;

    return {
      "--card-x": `${baseX + magnetX}px`,
      "--card-y": `${baseY + magnetY}px`,
      "--card-rx": `${rx}deg`,
      "--card-ry": `${ry}deg`,
      "--card-rz": `${rz}deg`,
      "--card-scale": lead ? (pointer.active ? 1.012 : 1) : 1,
      zIndex: total - depth,
      opacity: 1,
    };
  };

  const fa = lang === "fa";
  const copy = fa
    ? {
        kicker: "تکنولوژی‌های مدرن",
        titleA: "با ابزارهای",
        titleB: "مدرن می‌سازم.",
        desc: "برای ساخت وب‌اپلیکیشن‌ها و اپلیکیشن‌های سریع، مقیاس‌پذیر و قابل نگهداری از تکنولوژی‌های مدرن استفاده می‌کنم؛ از رابط کاربری تا API، دیتابیس و زیرساخت.",
        points: [
          [
            "01",
            "رابط‌های مدرن",
            "React و TypeScript برای تجربه‌های تعاملی و تمیز.",
          ],
          [
            "02",
            "Backend پرسرعت",
            "API، کش، صف و پردازش همزمان برای بار واقعی.",
          ],
          ["03", "Production Ready", "دیتابیس، کانتینر و معماری آماده رشد."],
        ],
        current: "تکنولوژی فعال",
        hint: "ماوس را حرکت بده",
        build: "BUILD / SHIP / SCALE",
        active: "فعال",
        stacked: "در صف",

      }
    : {
        kicker: "MODERN TECHNOLOGY",
        titleA: "Built with",
        titleB: "modern tools.",
        desc: "I use modern technologies to build fast, scalable and maintainable web applications — from interactive interfaces to high-performance APIs, data layers and production infrastructure.",
        points: [
          [
            "01",
            "Modern Interfaces",
            "React and TypeScript for interactive, polished experiences.",
          ],
          [
            "02",
            "High Performance",
            "APIs, caching, queues and efficient data flows.",
          ],
          [
            "03",
            "Production Ready",
            "Reliable databases, containers and systems built to grow.",
          ],
        ],
        current: "Currently leading",
        hint: "MOVE THE CURSOR",
        build: "BUILD / SHIP / SCALE",
        active: "ACTIVE",
        stacked: "STACKED",

      };

  return (
    <section id="modern-stack" className="modern-stack-section">
      <div className="modern-stack-grid-bg" />
      <div className="container modern-stack-container">
        <div className="modern-stack-copy">
          <div className="modern-stack-eyebrow">
            <span>//</span>
            {copy.kicker}
          </div>
          <h2 className="modern-stack-title modern-stack-depth-title">
            <DepthText
              text={copy.titleA}
              layers={26}
              depth={1.8}
              faceColor="var(--text)"
              depthColor="var(--violet)"
              tilt={4.5}
              pointerTracking
              smoothing={0.12}
              perspective={1000}
              autoOrbit
              orbitSpeed={0.18}
              fontSize="clamp(3.5rem, 6vw, 6.4rem)"
              fontWeight={850}
              className="modern-stack-depth-line"
            />
            <br />
            <DepthText
              text={copy.titleB}
              layers={26}
              depth={1.8}
              faceColor="var(--lime)"
              depthColor="var(--violet)"
              tilt={4.5}
              pointerTracking
              smoothing={0.12}
              perspective={1000}
              autoOrbit
              orbitSpeed={0.18}
              fontSize="clamp(3.5rem, 6vw, 6.4rem)"
              fontWeight={850}
              className="modern-stack-depth-line modern-stack-depth-accent"
            />
          </h2>
          <p className="modern-stack-description">{copy.desc}</p>

          <div className="modern-stack-points">
            {copy.points.map(([n, title, text]) => (
              <div className="modern-stack-point" key={n}>
                <span className="point-number">{n}</span>
                <div>
                  <strong>{title}</strong>
                  <span>{text}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="modern-stack-active-tech">
            <span className="active-tech-dot" />
            <span>{copy.current}</span>
            <strong>{MODERN_TECH_STACK[active].name}</strong>
          </div>
        </div>

        <div
          className={`tech-deck ${pointer.active ? "is-interacting" : ""}`}
          onPointerEnter={enter}
          onPointerMove={move}
          onPointerLeave={leave}
        >
          <div className="tech-deck-glow" />
          <div className="tech-deck-orbit orbit-one" />
          <div className="tech-deck-orbit orbit-two" />

          <div className="tech-deck-cards">
            {MODERN_TECH_STACK.map((tech, index) => {
              const Icon = tech.icon;
              const isActive = index === active;
              return (
                <motion.article
                  key={tech.name}
                  className={`tech-deck-card ${isActive ? "is-active" : ""}`}
                  style={cardStyle(index)}
                  onClick={() => setActive(index)}
                >
                  <span className="tech-card-corner" aria-hidden="true" />

                  <div className="tech-card-header">
                    <span className="tech-card-index">
                      {String(index + 1).padStart(2, "0")} <i>/</i>{" "}
                      {tech.category}
                    </span>
                    <span className="tech-card-status">
                      {isActive ? copy.active : copy.stacked}
                    </span>
                  </div>

                  <div
                    className="tech-card-logo"
                    style={{ "--tech-color": tech.color }}
                  >
                    <div className="tech-logo-ring" />
                    <Icon />
                    <span className="tech-logo-pulse" />
                  </div>

                  <div
                    className="tech-card-category"
                    style={{ color: tech.color }}
                  >
                    {tech.category}
                  </div>
                  <h3 className="tech-card-name">{tech.name}</h3>
                  <p className="tech-card-description">{tech.description}</p>

                  <div className="tech-card-footer">
                    <div className="tech-card-line">
                      <span />
                      <span />
                      <span />
                    </div>
                    <span className="tech-card-build">{copy.build}</span>
                    <span className="tech-card-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                </motion.article>
              );
            })}
          </div>

          <div className="tech-deck-controls">
            {MODERN_TECH_STACK.map((tech, index) => (
              <button
                key={tech.name}
                className={index === active ? "is-active" : ""}
                onClick={() => setActive(index)}
                aria-label={`Show ${tech.name}`}
              >
                <span />
              </button>
            ))}
          </div>
          <div className="tech-deck-hint">{copy.hint}</div>
        </div>
      </div>
    </section>
  );
}
