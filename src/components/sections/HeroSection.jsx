"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github, MousePointer2 } from "lucide-react";
import CodeEditor from "@/components/sections/CodeEditor";
import ParticleText from "@/components/ParticleText/ParticleText";
import Magnetic from "@/components/ui/Magnetic";
import Stat from "@/components/ui/Stat";

export default function HeroSection({ t, rtl, dark, heroY, onNavigate }) {
  return (
    <section id="home" className="hero">
      <motion.div className="hero-aurora" style={{ y: heroY }} />
      <div className="container hero-grid">
        <div className="hero-copy" id="about">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="eyebrow"
          >
            <i /> {t.ey}
          </motion.div>

          <motion.h1
            className="hero-name"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.65 }}
          >
            {t.title}
          </motion.h1>

          <ParticleText
            as="h2"
            direction={rtl ? "rtl" : "ltr"}
            className="hero-particle-title"
            text={t.heroSubtitle}
            mobileText={
              rtl
                ? "مهندسی با دقت،\nمنطق و هدف."
                : "Engineering with clarity\nand purpose."
            }
            mobileDensity={2}
            mobileParticleSize={2}
            mobileFontSize="clamp(1.25rem, 6vw, 2rem)"
            color={dark ? "#F3EEFF" : "#172033"}
            highlightColor={dark ? "#B026FF" : "#7C3AED"}
            particleSize={2.2}
            density={3}
            scatter={150}
            gatherDuration={1450}
            stagger={360}
            pointerRepel={30}
            repelRadius={112}
            idleDrift={0.22}
            trigger="hover"
            fontSize="clamp(1.45rem, 3.1vw, 2.35rem)"
            fontWeight={720}
            fontFamily="inherit"
            glow
          />

          <motion.p
            className="hero-intro"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.72, duration: 0.6 }}
          >
            {t.desc}
          </motion.p>

          <motion.div
            className="stats hero-stats"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.84, duration: 0.55 }}
          >
            <Stat v="API" l={t.focus} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.96, duration: 0.55 }}
            className="actions"
          >
            <Magnetic onClick={() => onNavigate("projects")} primary>
              {t.cta}
              <ArrowUpRight size={17} />
            </Magnetic>
            <Magnetic href="https://github.com/techcodeco">
              <Github size={17} />
              {t.git}
            </Magnetic>
          </motion.div>

          <div className="meta">
            <span>
              <b /> {t.available}
            </span>
            <span>TypeScript · Node.js · Bun · React · Redis · MongoDB</span>
          </div>
        </div>
        <CodeEditor />
      </div>
      <div className="scroll-hint">
        <MousePointer2 size={14} /> {t.scrollHint}
      </div>
    </section>
  );
}
