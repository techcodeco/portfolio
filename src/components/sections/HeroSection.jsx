"use client";

import Image from "next/image";
import { m } from "framer-motion";
import { ArrowUpRight, Github, MousePointer2 } from "lucide-react";
import CodeEditor from "@/components/sections/CodeEditor";
import ParticleText from "@/components/ParticleText/ParticleText";
import Magnetic from "@/components/ui/Magnetic";
import Stat from "@/components/ui/Stat";

export default function HeroSection({ t, rtl, dark, heroY, onNavigate }) {
  return (
    <section id="home" className="hero">
      <m.div className="hero-aurora" style={{ y: heroY }} />
      <div className="container hero-grid">
        <div className="hero-copy" id="about">
          <m.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="eyebrow"
          >
            <i /> {t.ey}
          </m.div>

          <m.h1
            className="hero-name"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.65 }}
          >
            {t.title}
          </m.h1>

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
            mobileDensity={1}
            mobileParticleSize={1.25}
            mobileFontSize="clamp(1.25rem, 6vw, 2rem)"
            color={dark ? "#F3EEFF" : "#172033"}
            highlightColor={dark ? "#B026FF" : "#7C3AED"}
            particleSize={1.65}
            density={2}
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

          <div className="hero-intro-row">
            <div className="hero-intro-photo-wrap">
              <Image
                src="/img/mohammad-afrouzeh.webp"
                alt={
                  rtl
                    ? "پرتره محمد افروزه در فضای کاری TECHCODE"
                    : "Portrait of Mohammad Afrouzeh in his TECHCODE workspace"
                }
                width={720}
                height={720}
                sizes="(max-width: 700px) 82vw, (max-width: 1100px) 190px, 210px"
                className="hero-intro-photo"
                unoptimized
                loading="eager"
                fetchPriority="low"
              />
            </div>
            <p className="hero-intro">{t.desc}</p>
          </div>

          <m.div
            className="stats hero-stats"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.84, duration: 0.55 }}
          >
            <Stat v="API" l={t.focus} />
          </m.div>

          <m.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.96, duration: 0.55 }}
            className="actions"
          >
            <Magnetic onClick={() => onNavigate("projects")} primary>
              {t.cta}
              <ArrowUpRight size={17} aria-hidden="true" focusable="false" />
            </Magnetic>
            <Magnetic href="https://github.com/techcodeco">
              <Github size={17} aria-hidden="true" focusable="false" />
              {t.git}
            </Magnetic>
          </m.div>

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
        <MousePointer2 size={14} aria-hidden="true" focusable="false" /> {t.scrollHint}
      </div>
    </section>
  );
}
