"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import {
  AnimatePresence,
  LazyMotion,
  domAnimation,
  useSpring,
  useTransform,
  useScroll,
  useReducedMotion,
} from "framer-motion";
import Loader from "@/components/effects/Loader";
import DeferredVisualEffects from "@/components/effects/DeferredVisualEffects";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import LazySection from "@/components/layout/LazySection";
import HeroSection from "@/components/sections/HeroSection";
import ScrollProgress from "@/components/ui/ScrollProgress";
import TerminalLauncher from "@/components/terminal/TerminalLauncher";
import { TECH, PROJECTS, PROJECTS_FA, COPY } from "@/data/portfolio-data";

// Sections below the hero are split into independent client chunks. The
// App Router still pre-renders their HTML, preserving crawlable page content.
const TechMarquee = dynamic(() => import("@/components/layout/TechMarquee"));
const SkillsSection = dynamic(() => import("@/components/sections/SkillsSection"));
const ArchitectureSection = dynamic(() => import("@/components/sections/ArchitectureSection"));
const ProjectsSection = dynamic(() => import("@/components/sections/ProjectsSection"));
const ContactSection = dynamic(() => import("@/components/sections/ContactSection"));
const PoweredBy = dynamic(() => import("@/components/sections/PoweredBy"));
const ModernTechStack = dynamic(() => import("@/components/sections/ModernTechStack"));

const TerminalModal = dynamic(
  () => import("@/components/terminal/TerminalModal"),
  { ssr: false, loading: () => null },
);

export default function PortfolioApp({ initialLang = "en" }) {
  const [lang] = useState(initialLang);
  const [dark, setDark] = useState(true);
  const [menu, setMenu] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [easter, setEaster] = useState(false);

  const t = COPY[lang];
  const rtl = lang === "fa";
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce || window.matchMedia("(pointer: coarse)").matches) return;

    let cancelled = false;
    let raf = 0;
    let lenis = null;
    let idleId = null;
    let fallbackTimer = null;

    const startSmoothScroll = async () => {
      try {
        const { default: Lenis } = await import("lenis");
        if (cancelled) return;

        lenis = new Lenis({
          duration: 1.15,
          easing: (value) => 1 - Math.pow(1 - value, 4),
          smoothWheel: true,
          smoothTouch: false,
          lerp: 0.08,
        });

        const loop = (time) => {
          if (!lenis || cancelled) return;
          lenis.raf(time);
          raf = requestAnimationFrame(loop);
        };
        raf = requestAnimationFrame(loop);
      } catch {
        // Native scrolling remains available if the optional enhancement fails.
      }
    };

    if (typeof window.requestIdleCallback === "function") {
      idleId = window.requestIdleCallback(startSmoothScroll, { timeout: 1400 });
    } else {
      fallbackTimer = window.setTimeout(startSmoothScroll, 450);
    }

    return () => {
      cancelled = true;
      if (idleId !== null) window.cancelIdleCallback?.(idleId);
      if (fallbackTimer !== null) window.clearTimeout(fallbackTimer);
      cancelAnimationFrame(raf);
      lenis?.destroy();
    };
  }, [reduce]);

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const heroY = useTransform(scrollYProgress, [0, 0.35], [0, 160]);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = rtl ? "rtl" : "ltr";
    document.body.dataset.theme = dark ? "dark" : "light";
    const frameId = window.requestAnimationFrame(() => setLoaded(true));
    return () => window.cancelAnimationFrame(frameId);
  }, [lang, rtl, dark]);

  const navigateTo = (id) => {
    setMenu(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <LazyMotion features={domAnimation} strict>
      <div className="app">
        <a className="skip-link" href="#main-content">
          {rtl ? "پرش به محتوای اصلی" : "Skip to main content"}
        </a>
        <AnimatePresence>{!loaded && <Loader />}</AnimatePresence>
        <ScrollProgress progress={progress} />
        <DeferredVisualEffects />
        <SiteHeader
          menu={menu}
          setMenu={setMenu}
          lang={lang}
          dark={dark}
          setDark={setDark}
          t={t}
          onNavigate={navigateTo}
        />

        <main id="main-content">
          <HeroSection t={t} rtl={rtl} dark={dark} heroY={heroY} onNavigate={navigateTo} />
          <TechMarquee items={TECH.slice(0, 10)} reverse minHeight={62} />
          <LazySection minHeight={900}>
            <ModernTechStack lang={lang} />
          </LazySection>
          <SkillsSection t={t} tech={TECH} />
          <TechMarquee items={TECH.slice(6, 14)} minHeight={110} />
          <ArchitectureSection t={t} lang={lang} />
          <ProjectsSection t={t} projects={rtl ? PROJECTS_FA : PROJECTS} />
          <LazySection id="powered-by" minHeight={620}>
            <PoweredBy lang={lang} />
          </LazySection>
          <ContactSection t={t} />
        </main>
        <SiteFooter text={t.footer} onNavigate={navigateTo} />
        <AnimatePresence>
          {easter && <TerminalModal close={() => setEaster(false)} />}
        </AnimatePresence>
        <TerminalLauncher onOpen={() => setEaster(true)} />
      </div>
    </LazyMotion>
  );
}
