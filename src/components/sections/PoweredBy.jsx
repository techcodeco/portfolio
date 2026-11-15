"use client";

import { SiReact, SiJavascript, SiNodedotjs, SiMongodb, SiRedis, SiDocker, SiTypescript, SiBun } from "react-icons/si";
import Reveal from "@/components/ui/Reveal";

export default function PoweredBy({ lang = "en" }) {
  const fa = lang === "fa";
  const nodes = [
    {
      name: "React",
      Icon: SiReact,
      color: "#61DAFB",
      side: "left",
      cx: 92,
      cy: 112,
      pinY: 236,
      path: "M 130 112 H 205 V 145 H 285 V 185 H 345 V 236 H 385",
    },
    {
      name: "JavaScript",
      Icon: SiJavascript,
      color: "#F7DF1E",
      side: "left",
      cx: 92,
      cy: 250,
      pinY: 296,
      path: "M 130 250 H 220 V 272 H 315 V 296 H 385",
    },
    {
      name: "TypeScript",
      Icon: SiTypescript,
      color: "#3178C6",
      side: "left",
      cx: 92,
      cy: 388,
      pinY: 356,
      path: "M 130 388 H 205 V 365 H 285 V 356 H 385",
    },
    {
      name: "Node.js",
      Icon: SiNodedotjs,
      color: "#83CD29",
      side: "left",
      cx: 92,
      cy: 526,
      pinY: 416,
      path: "M 130 526 H 205 V 492 H 280 V 455 H 345 V 416 H 385",
    },
    {
      name: "Redis",
      Icon: SiRedis,
      color: "#FF4D5E",
      side: "right",
      cx: 808,
      cy: 112,
      pinY: 236,
      path: "M 770 112 H 695 V 145 H 615 V 185 H 555 V 236 H 515",
    },
    {
      name: "Bun",
      Icon: SiBun,
      color: "#FBF0DF",
      side: "right",
      cx: 808,
      cy: 250,
      pinY: 296,
      path: "M 770 250 H 680 V 272 H 585 V 296 H 515",
    },
    {
      name: "Docker",
      Icon: SiDocker,
      color: "#2496ED",
      side: "right",
      cx: 808,
      cy: 388,
      pinY: 356,
      path: "M 770 388 H 695 V 365 H 615 V 356 H 515",
    },
    {
      name: "MongoDB",
      Icon: SiMongodb,
      color: "#47A248",
      side: "right",
      cx: 808,
      cy: 526,
      pinY: 416,
      path: "M 770 526 H 700 V 492 H 625 V 455 H 555 V 416 H 515",
    },
  ];

  return (
    <section className="powered-section" aria-labelledby="powered-title">
      <div className="container">
        <Reveal>
          <div className="powered-heading">
            <div>
              <div className="kicker">
                <span>//</span> {fa ? "فناوری‌های مورد استفاده" : "POWERED BY"}
              </div>
              <h2 id="powered-title">
                {fa ? "از درون تا ساخت یک سیستم کامل." : "Built from the inside out."}
              </h2>
            </div>
            <p>
              {fa
                ? "نگاهی کوتاه به فناوری‌هایی که در ساخت سیستم‌ها و محصولات نرم‌افزاری به کار می‌برم."
                : "A small look at the technologies wired into the systems I build."}
            </p>
          </div>
        </Reveal>

        <div className="powered-board glass">
          <div className="powered-grid" aria-hidden="true" />
          <svg
            className="powered-svg"
            viewBox="0 0 900 500"
            preserveAspectRatio="xMidYMid meet"
            role="img"
            aria-label="Technology icons connected to a central integrated circuit"
          >
            <defs>
              <filter
                id="powered-glow"
                x="-100%"
                y="-100%"
                width="300%"
                height="300%"
              >
                <feGaussianBlur stdDeviation="2.5" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <radialGradient id="chip-glow" cx="50%" cy="50%" r="70%">
                <stop offset="0%" stopColor="var(--accent)" stopOpacity=".08" />
                <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
              </radialGradient>
            </defs>

            <g transform="translate(0 -32) scale(1 0.92)">
              {nodes.map((node, index) => {
                const Icon = node.Icon;
                return (
                  <g
                    key={node.name}
                    className="powered-route-group"
                    style={{
                      "--route-color": node.color,
                      "--route-delay": `${index * 0.62}s`,
                    }}
                  >
                    <path d={node.path} className="powered-route-base" />
                    <path
                      d={node.path}
                      className="powered-route-pulse"
                      pathLength="1"
                    />

                    <circle
                      cx={node.cx}
                      cy={node.cy}
                      r="38"
                      className="powered-icon-halo"
                      style={{ stroke: node.color }}
                    />
                    <circle
                      cx={node.cx}
                      cy={node.cy}
                      r="32"
                      className="powered-icon-ring"
                      style={{ stroke: node.color }}
                    />
                    <foreignObject
                      x={node.cx - 30}
                      y={node.cy - 30}
                      width="60"
                      height="60"
                    >
                      <div
                        className="powered-icon-box"
                        style={{ color: node.color }}
                      >
                        <Icon aria-hidden="true" />
                      </div>
                    </foreignObject>
                    <circle
                      cx={node.side === "left" ? 130 : 770}
                      cy={node.cy}
                      r="4"
                      className="powered-connect-point"
                      style={{ fill: node.color, stroke: node.color }}
                    />
                  </g>
                );
              })}

              <g className="powered-chip-svg">
                <rect
                  x="390"
                  y="200"
                  width="120"
                  height="250"
                  rx="18"
                  className="chip-shell"
                />
                <rect
                  x="402"
                  y="212"
                  width="96"
                  height="226"
                  rx="13"
                  className="chip-inner"
                />
                <rect
                  x="402"
                  y="212"
                  width="96"
                  height="226"
                  rx="13"
                  fill="url(#chip-glow)"
                />

                <g className="chip-pins">
                  {[236, 296, 356, 416].map((y) => (
                    <g key={`pins-${y}`}>
                      <path d={`M 400 ${y} H 385`} />
                      <path d={`M 500 ${y} H 515`} />
                      <circle cx="400" cy={y} r="2.2" />
                      <circle cx="500" cy={y} r="2.2" />
                    </g>
                  ))}
                </g>

                <circle cx="418" cy="230" r="4" className="chip-screw" />
                <circle cx="482" cy="230" r="4" className="chip-screw" />
                <circle cx="418" cy="420" r="4" className="chip-screw" />
                <circle cx="482" cy="420" r="4" className="chip-screw" />

                <text
                  x="450"
                  y="292"
                  textAnchor="middle"
                  className="chip-kicker"
                >
                  TC / CORE
                </text>
                <text x="450" y="326" textAnchor="middle" className="chip-main">
                  TECH
                </text>
                <text x="450" y="350" textAnchor="middle" className="chip-main">
                  CODE
                </text>
                <text
                  x="450"
                  y="378"
                  textAnchor="middle"
                  className="chip-status"
                >
                  SYSTEM // ONLINE
                </text>
                <circle cx="450" cy="400" r="4" className="chip-led" />
              </g>
            </g>
          </svg>

          <div className="powered-status">
            <span>
              <i /> SIGNAL FLOW ACTIVE
            </span>
            <span>8 CORE TECHNOLOGIES // ONE TECHCODE SYSTEM</span>
          </div>
        </div>
      </div>
    </section>
  );
}
