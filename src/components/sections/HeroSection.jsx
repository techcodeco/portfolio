"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github, MousePointer2 } from "lucide-react";
import ParticleText from "@/components/ParticleText/ParticleText";
import CodeEditor from "@/components/sections/CodeEditor";
import Magnetic from "@/components/ui/Magnetic";

export default function HeroSection({ t, dark, heroY, onNavigate }) {
  return (
    <section id="home" className="hero">
      <motion.div className="hero-aurora" style={{ y: heroY }} />
      <div className="container hero-grid">
        <div className="hero-copy">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="eyebrow"
          >
            <i /> {t.ey}
          </motion.div>
          <h1 className="visually-hidden">{t.title}</h1>
          <ParticleText
            className="hero-particle-title"
            text={t.title}
            color={dark ? "#f3eeff" : "#17171f"}
            highlightColor={dark ? "#d4ff3f" : "#e51f4d"}
            particleSize={2.4}
            density={3}
            scatter={180}
            gatherDuration={1600}
            stagger={420}
            pointerRepel={40}
            repelRadius={120}
            idleDrift={0.5}
            trigger="hover"
            fontSize="clamp(4rem, 15vw, 10rem)"
            fontWeight={600}
            fontFamily="inherit"
            glow
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            {t.desc}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
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
            <span>React · Node · Bun · Redis</span>
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
