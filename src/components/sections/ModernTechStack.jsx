"use client";

import { MODERN_TECH_STACK } from "@/data/portfolio-data";

const PERSIAN_DESCRIPTIONS = {
  TypeScript: "برای کدنویسی ساخت‌یافته، قراردادهای روشن و نگهداری آسان‌تر پروژه‌ها.",
  "Node.js": "برای توسعه سرویس‌ها و APIهای بک‌اند با مسئولیت‌های مشخص.",
  Bun: "یک runtime مدرن برای اجرای سریع‌تر ابزارها و گردش‌کار توسعه.",
  React: "برای ساخت رابط‌های تعاملی با کامپوننت‌های قابل استفاده مجدد.",
  Redis: "برای کش، هماهنگی سرویس‌ها و پردازش صف‌های کاری.",
  MongoDB: "برای مدل‌سازی داده‌های منعطف در اپلیکیشن‌های امروزی.",
};

export default function ModernTechStack({ lang = "en" }) {
  const fa = lang === "fa";
  const copy = fa
    ? {
        kicker: "تکنولوژی‌های مدرن",
        titleA: "با ابزارهای",
        titleB: "مدرن می‌سازم.",
        desc: "برای ساخت وب‌اپلیکیشن‌های سریع، مقیاس‌پذیر و قابل نگهداری از ابزارهای مدرن استفاده می‌کنم؛ از رابط کاربری تا بک‌اند، دیتابیس و زیرساخت.",
        points: [
          ["01", "رابط‌های مدرن", "React و TypeScript برای تجربه‌های تعاملی و تمیز."],
          ["02", "Backend پرسرعت", "API، کش و پردازش صف برای گردش‌کارهای قابل اتکا."],
          ["03", "آماده رشد", "دیتابیس و runtimeهایی برای ساخت سیستم‌های قابل توسعه."],
        ],
        index: "فهرست فناوری‌ها",
        count: "۶ فناوری اصلی",
        footer: "BUILD / SHIP / SCALE",
      }
    : {
        kicker: "MODERN TECHNOLOGY",
        titleA: "Built with",
        titleB: "modern tools.",
        desc: "I use modern technologies to build fast, scalable and maintainable applications — from interactive interfaces to backend services, data layers and infrastructure.",
        points: [
          ["01", "Modern Interfaces", "React and TypeScript for polished, interactive experiences."],
          ["02", "High-performance Backend", "APIs, caching and queue-driven workflows."],
          ["03", "Built to Grow", "Reliable databases and runtimes for maintainable systems."],
        ],
        index: "TECHNOLOGY INDEX",
        count: "06 CORE TOOLS",
        footer: "BUILD / SHIP / SCALE",
      };

  return (
    <section id="modern-stack" className="modern-stack-section" aria-labelledby="modern-stack-title">
      <div className="modern-stack-grid-bg" aria-hidden="true" />
      <div className="container modern-stack-container">
        <div className="modern-stack-copy">
          <div className="modern-stack-eyebrow">
            <span>//</span>
            {copy.kicker}
          </div>

          <h2 id="modern-stack-title" className="modern-stack-title">
            <span>{copy.titleA}</span>
            <strong>{copy.titleB}</strong>
          </h2>

          <p className="modern-stack-description">{copy.desc}</p>

          <div className="modern-stack-points">
            {copy.points.map(([number, title, description]) => (
              <div className="modern-stack-point" key={number}>
                <span className="point-number">{number}</span>
                <div>
                  <strong>{title}</strong>
                  <span>{description}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="modern-stack-summary">
            <span className="modern-stack-summary-dot" aria-hidden="true" />
            <span>{copy.count}</span>
            <span className="modern-stack-summary-divider" aria-hidden="true">/</span>
            <span>{copy.footer}</span>
          </div>
        </div>

        <div className="modern-tech-panel">
          <div className="modern-tech-panel-header">
            <span>{copy.index}</span>
            <span>{String(MODERN_TECH_STACK.length).padStart(2, "0")} / STACK</span>
          </div>

          <div className="modern-tech-grid">
            {MODERN_TECH_STACK.map((tech, index) => {
              const Icon = tech.icon;
              return (
                <article
                  className="modern-tech-card"
                  key={tech.name}
                  style={{ "--tech-color": tech.color }}
                >
                  <div className="modern-tech-card-top">
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <span>{fa ? "فناوری" : tech.category}</span>
                  </div>
                  <div className="modern-tech-card-icon" aria-hidden="true">
                    <Icon />
                  </div>
                  <h3>{tech.name}</h3>
                  <p>{fa ? PERSIAN_DESCRIPTIONS[tech.name] || tech.description : tech.description}</p>
                  <span className="modern-tech-card-accent" aria-hidden="true" />
                </article>
              );
            })}
          </div>

          <div className="modern-tech-panel-footer">
            <span><i aria-hidden="true" /> {fa ? "پشته ابزارهای توسعه" : "DEVELOPMENT TOOLKIT"}</span>
            <span>TECHCODE / 2026</span>
          </div>
        </div>
      </div>
    </section>
  );
}
