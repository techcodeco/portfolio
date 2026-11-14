"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, useSpring, useTransform, useScroll, useReducedMotion } from "framer-motion";
import Lenis from "lenis";
import Loader from "@/components/effects/Loader";
import Cursor from "@/components/effects/Cursor";
import CodeCanvas from "@/components/effects/CodeCanvas";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TechMarquee from "@/components/layout/TechMarquee";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ArchitectureSection from "@/components/sections/ArchitectureSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import CertificatesSection from "@/components/sections/CertificatesSection";
import ContactSection from "@/components/sections/ContactSection";
import PoweredBy from "@/components/sections/PoweredBy";
import ModernTechStack from "@/components/sections/ModernTechStack";
import LazySection from "@/components/layout/LazySection";
import ScrollProgress from "@/components/ui/ScrollProgress";
import TerminalLauncher from "@/components/terminal/TerminalLauncher";
import TerminalModal from "@/components/terminal/TerminalModal";
import { TECH, PROJECTS, PROJECTS_FA, COPY } from "@/data/portfolio-data";

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

    const lenis = new Lenis({
      duration: 1.15,
      easing: (value) => 1 - Math.pow(1 - value, 4),
      smoothWheel: true,
      smoothTouch: false,
      lerp: 0.08,
    });

    let raf;
    const loop = (time) => {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    };

    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
    };
  }, [reduce]);

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const heroY = useTransform(scrollYProgress, [0, 0.35], [0, 160]);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = rtl ? "rtl" : "ltr";
    document.body.dataset.theme = dark ? "dark" : "light";
    const timeoutId = window.setTimeout(() => setLoaded(true), 1000);
    return () => window.clearTimeout(timeoutId);
  }, [lang, rtl, dark]);

  const navigateTo = (id) => {
    setMenu(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="app">
      <AnimatePresence>{!loaded && <Loader />}</AnimatePresence>
      <ScrollProgress progress={progress} />
      <Cursor />
      <CodeCanvas />
      <SiteHeader
        menu={menu}
        setMenu={setMenu}
        lang={lang}
        dark={dark}
        setDark={setDark}
        t={t}
        onNavigate={navigateTo}
      />

      <main>
        <HeroSection t={t} dark={dark} heroY={heroY} onNavigate={navigateTo} />
        <TechMarquee items={TECH.slice(0, 10)} reverse minHeight={62} />
        <LazySection minHeight={760}>
          <ModernTechStack lang={lang} />
        </LazySection>
        <AboutSection t={t} />
        <SkillsSection t={t} tech={TECH} />
        <TechMarquee items={TECH.slice(6, 16)} minHeight={110} />
        <ArchitectureSection t={t} lang={lang} />
        <ProjectsSection t={t} projects={rtl ? PROJECTS_FA : PROJECTS} />
        <CertificatesSection lang={lang} />
        <ContactSection t={t} />
      </main>

      <LazySection id="powered-by" minHeight={520}>
        <PoweredBy lang={lang} />
      </LazySection>
      <SiteFooter text={t.footer} onNavigate={navigateTo} />

      <AnimatePresence>
        {easter && <TerminalModal close={() => setEaster(false)} />}
      </AnimatePresence>
      <TerminalLauncher onOpen={() => setEaster(true)} />
    </div>
  );
}
