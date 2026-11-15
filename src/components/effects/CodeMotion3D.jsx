"use client";

import { m, useTransform, useScroll } from "framer-motion";

export default function CodeMotion3D() {
  const { scrollYProgress } = useScroll();
  const rotate = useTransform(scrollYProgress, [0.2, 0.8], [-7, 8]);
  const y = useTransform(scrollYProgress, [0.2, 0.8], [35, -45]);
  const symbols = [
    "<>",
    "{}",
    "=>",
    "/>",
    "01",
    "async",
    "await",
    "redis",
    "API",
    "∞",
  ];
  return (
    <div className="code3d">
      <m.div
        className="code3d-orbit orbit-a"
        style={{ rotateZ: rotate }}
      />
      <m.div
        className="code3d-orbit orbit-b"
        style={{ rotateZ: rotate }}
      />
      <m.div className="code3d-scene" style={{ rotateX: rotate, y }}>
        <div className="code3d-grid" />
        <div className="code3d-core glass">
          <div className="code3d-windowbar">
            <i />
            <i />
            <i />
            <span>system.ts</span>
          </div>
          <div className="code3d-code">
            <span>
              <b>const</b> developer = <strong>build</strong>({"{"}
            </span>
            <span className="indent">
              name: <em>"Mohammad"</em>,
            </span>
            <span className="indent">
              role: <em>"Full-Stack"</em>,
            </span>
            <span className="indent">
              focus: [<em>"scale"</em>, <em>"speed"</em>],
            </span>
            <span className="indent">
              mindset: <em>"keep building"</em>
            </span>
            <span>{"}"});</span>
            <span className="cursorline">
              developer.<strong>ship</strong>();
              <i />
            </span>
          </div>
        </div>
        {symbols.map((symbol, i) => (
          <m.span
            key={symbol + i}
            className={"code3d-symbol s" + i}
            animate={{
              y: [0, -16, 0],
              rotate: [0, i % 2 ? 5 : -5, 0],
              opacity: [0.42, 0.9, 0.42],
            }}
            transition={{
              duration: 3 + (i % 3),
              repeat: Infinity,
              delay: i * 0.18,
              ease: "easeInOut",
            }}
          >
            {symbol}
          </m.span>
        ))}
      </m.div>
      <div className="code3d-caption">
        <span>
          <i /> scroll depth
        </span>
        <span>runtime · architecture · persistence</span>
      </div>
    </div>
  );
}
