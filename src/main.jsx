import React, { useEffect, useMemo, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useTransform,
  useScroll,
  useReducedMotion,
} from "framer-motion";
import {
  ArrowUpRight,
  Github,
  Instagram,
  Send,
  Mail,
  Sun,
  Moon,
  Menu,
  X,
  Code2,
  Database,
  Server,
  Smartphone,
  GitBranch,
  ExternalLink,
  Terminal,
  Cpu,
  Layers3,
  Command,
  Copy,
  MousePointer2,
  Calendar,
  Award,
} from "lucide-react";
import Lenis from "lenis";
import {
  SiReact,
  SiJavascript,
  SiTailwindcss,
  SiMui,
  SiRedux,
  SiNodedotjs,
  SiExpress,
  SiBun,
  SiGraphql,
  SiMongodb,
  SiPostgresql,
  SiSequelize,
  SiExpo,
  SiGit,
  SiRedis,
  SiDocker,
  SiTypescript,
} from "react-icons/si";
import "./styles.css";
import ParticleText from "./components/ParticleText/ParticleText";
import DepthText from "./components/DepthText/DepthText";

const TECH = [
  ["React", 92, "Frontend", SiReact, "#61DAFB"],
  ["TypeScript", 84, "Language", SiTypescript, "#3178C6"],
  ["JavaScript", 94, "Language", SiJavascript, "#F7DF1E"],
  ["Tailwind CSS", 88, "Frontend", SiTailwindcss, "#06B6D4"],
  ["MUI", 84, "Frontend", SiMui, "#007FFF"],
  ["Redux", 86, "Frontend", SiRedux, "#764ABC"],
  ["Node.js", 93, "Backend", SiNodedotjs, "#339933"],
  ["Express", 91, "Backend", SiExpress, "#000000"],
  ["Bun", 86, "Runtime", SiBun, "#FBF0DF"],
  ["GraphQL", 80, "API", SiGraphql, "#E10098"],
  ["MongoDB", 91, "Database", SiMongodb, "#47A248"],
  ["PostgreSQL", 82, "Database", SiPostgresql, "#4169E1"],
  ["Sequelize", 78, "ORM", SiSequelize, "#52B0E7"],
  ["React Native", 78, "Mobile", SiReact, "#61DAFB"],
  ["Expo", 75, "Mobile", SiExpo, "#000020"],
  ["Redis", 82, "Infrastructure", SiRedis, "#DC382D"],
  ["Git", 92, "Tooling", SiGit, "#F05032"],
  ["Docker", 68, "Tooling", SiDocker, "#2496ED"],
].map(([name, level, category, icon, color]) => ({
  name,
  level,
  category,
  icon,
  color,
}));
const PROJECTS = [
  {
    title: "High-Throughput Webhook Platform",
    type: "Backend / Distributed Systems",
    description:
      "Production-oriented webhook ingestion with batching, Redis streams, queue workers and horizontal scaling.",
    stack: ["Bun", "Redis", "REST", "Workers"],
    github: "https://github.com/techcodeco",
    featured: true,
    metric: "30K+ RPS target",
  },
  {
    title: "Scalable MERN Application",
    type: "Full-Stack",
    description:
      "Modular React and Node architecture with clean API boundaries, database models and responsive UI.",
    stack: ["React", "Node.js", "MongoDB", "Express"],
    github: "https://github.com/techcodeco",
    metric: "MERN",
  },
  {
    title: "API Performance Lab",
    type: "Engineering Experiments",
    description:
      "Benchmarks and experiments around Redis throughput, pipelines, batching and high-concurrency request processing.",
    stack: ["Redis", "Bun", "Node.js", "Git"],
    github: "https://github.com/techcodeco",
    metric: "1M+ ops/s benchmark",
  },
];

const COPY = {
  en: {
    nav: ["About", "Stack", "Architecture", "Projects", "Contact"],
    ey: "FULL-STACK DEVELOPER",
    title: "I build systems that feel fast.",
    desc: "Full-stack developer focused on scalable web applications, high-performance APIs and clean engineering.",
    cta: "Explore projects",
    git: "GitHub profile",
    aboutK: "THE STORY BEHIND THE CODE",
    aboutT: "Code is my art, logic is my canvas.",
    aboutP:
      "I started coding at 15 and kept going deeper—from interfaces to backend systems, APIs, databases and the architecture behind scalable applications.",
    stackK: "MY DIGITAL ARSENAL",
    stackT: "Tools I use to turn ideas into products.",
    archK: "SYSTEM THINKING",
    archT: "From request to reliable system.",
    archP:
      "The interesting part starts after the first request: queues, caching, workers, recovery and horizontal scale.",
    projK: "SELECTED WORK",
    projT: "Projects & engineering experiments.",
    contactK: "LET'S CONNECT",
    contactT: "Have an idea? Let's build it.",
    contactP:
      "Open to interesting products, engineering conversations and collaborations.",
    view: "Open on GitHub",
    available: "Available for interesting work",
    years: "Years coding",
    start: "Started at",
    curiosity: "Curiosity",
    footer:
      "Built with React, Motion and a little obsession with clean systems.",
  },
  fa: {
    nav: ["درباره من", "تکنولوژی‌ها", "معماری", "پروژه‌ها", "ارتباط"],
    ey: "توسعه‌دهنده فول‌استک",
    title: "سیستم‌هایی می‌سازم که سریع حس می‌شوند.",
    desc: "توسعه‌دهنده فول‌استک با تمرکز روی اپلیکیشن‌های مقیاس‌پذیر، APIهای پرسرعت و مهندسی تمیز.",
    cta: "مشاهده پروژه‌ها",
    git: "پروفایل گیت‌هاب",
    aboutK: "داستان پشت کد",
    aboutT: "کد هنر من است، منطق بوم من.",
    aboutP:
      "برنامه‌نویسی را از ۱۵ سالگی شروع کردم و مسیرم از رابط کاربری به بک‌اند، API، دیتابیس و معماری سیستم‌های مقیاس‌پذیر رسید.",
    stackK: "جعبه‌ابزار دیجیتال من",
    stackT: "ابزارهایی که با آن‌ها ایده را به محصول تبدیل می‌کنم.",
    archK: "تفکر سیستمی",
    archT: "از یک درخواست تا یک سیستم قابل‌اعتماد.",
    archP:
      "بخش جذاب بعد از اولین request شروع می‌شود: صف، کش، worker، بازیابی خطا و scale افقی.",
    projK: "کارهای منتخب",
    projT: "پروژه‌ها و آزمایش‌های مهندسی.",
    contactK: "در ارتباط باشیم",
    contactT: "ایده‌ای داری؟ بسازیمش.",
    contactP: "برای محصولات جالب، گفتگوهای مهندسی و همکاری آماده‌ام.",
    view: "مشاهده در گیت‌هاب",
    available: "آماده برای پروژه‌های جالب",
    years: "سال برنامه‌نویسی",
    start: "شروع از",
    curiosity: "کنجکاوی",
    footer: "ساخته‌شده با React، Motion و کمی وسواس برای سیستم‌های تمیز.",
  },
};

const LAYER_CARDS = [
  {
    name: "React",
    icon: SiReact,
    color: "#61DAFB",
    kicker: "01 / INTERFACE",
    title: "Interfaces that think in components.",
    text: "Reusable UI, motion and state architecture built to stay fast as the product grows.",
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    color: "#3178C6",
    kicker: "02 / LANGUAGE",
    title: "Ideas with a type-safe shape.",
    text: "Strong contracts and predictable code paths for maintainable full-stack systems.",
  },
  {
    name: "Node.js",
    icon: SiNodedotjs,
    color: "#83CD29",
    kicker: "03 / BACKEND",
    title: "APIs built for real traffic.",
    text: "Event-driven services, clean boundaries and performance-minded request handling.",
  },
  {
    name: "Redis",
    icon: SiRedis,
    color: "#FF4D5E",
    kicker: "04 / DATA FLOW",
    title: "Speed between every layer.",
    text: "Caching, streams, queues and batching for responsive distributed workflows.",
  },
  {
    name: "PostgreSQL",
    icon: SiPostgresql,
    color: "#4FA8FF",
    kicker: "05 / DATA",
    title: "Data with a solid foundation.",
    text: "Relational modeling, indexing and reliable persistence behind the application.",
  },
  {
    name: "Docker",
    icon: SiDocker,
    color: "#2496ED",
    kicker: "06 / INFRA",
    title: "Ship the whole system.",
    text: "Repeatable environments and deployment-ready services from local to production.",
  },
];

function LazySection({
  children,
  id,
  minHeight = 320,
  rootMargin = "420px 0px",
}) {
  const hostRef = useRef(null);
  const [active, setActive] = useState(false);
  const [height, setHeight] = useState(minHeight);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;

    let resizeObserver;
    const observer = new IntersectionObserver(
      ([entry]) => setActive(entry.isIntersecting),
      { rootMargin, threshold: 0.01 },
    );
    observer.observe(host);
    if (typeof ResizeObserver !== "undefined") {
      resizeObserver = new ResizeObserver(([entry]) => {
        const next = Math.ceil(entry.contentRect.height);
        if (next > 24) setHeight(next);
      });
      resizeObserver.observe(host);
    }

    return () => {
      observer.disconnect();
      resizeObserver?.disconnect();
    };
  }, [rootMargin]);

  return (
    <div
      ref={hostRef}
      id={id}
      className="lazy-section"
      style={{ minHeight: active ? undefined : height }}
    >
      {active ? children : null}
    </div>
  );
}

function PoweredBy() {
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
      name: "PostgreSQL",
      Icon: SiPostgresql,
      color: "#4FA8FF",
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
                <span>//</span> POWERED BY
              </div>
              <h2 id="powered-title">Built from the inside out.</h2>
            </div>
            <p>
              A small look at the technologies wired into the systems I build.
            </p>
          </div>
        </Reveal>

        <div className="powered-board glass">
          <div className="powered-grid" aria-hidden="true" />
          <svg
            className="powered-svg"
            viewBox="0 0 900 560"
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

            <g transform="translate(0 -15) scale(1 0.88)">
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
            <span>8 TECHNOLOGIES // 1 SYSTEM</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function App() {
  const [lang, setLang] = useState("en"),
    [dark, setDark] = useState(true),
    [menu, setMenu] = useState(false),
    [loaded, setLoaded] = useState(false),
    [easter, setEaster] = useState(false);

  const t = COPY[lang],
    rtl = lang === "fa",
    reduce = useReducedMotion();
  useEffect(() => {
    if (reduce || window.matchMedia("(pointer: coarse)").matches) return;
    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => 1 - Math.pow(1 - t, 4),
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
  const { scrollYProgress } = useScroll(),
    prog = useSpring(scrollYProgress, { stiffness: 100, damping: 30 }),
    heroY = useTransform(scrollYProgress, [0, 0.35], [0, 160]);
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = rtl ? "rtl" : "ltr";
    document.body.dataset.theme = dark ? "dark" : "light";
    const id = setTimeout(() => setLoaded(true), 1000);
    return () => clearTimeout(id);
  }, [lang, rtl, dark]);
  const go = (id) => {
    setMenu(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="app">
      <AnimatePresence>{!loaded && <Loader />}</AnimatePresence>
      <motion.div className="scrollbar" style={{ scaleX: prog }} />
      <Cursor />
      <CodeCanvas />
      <header className="header">
        <nav className="nav glass">
          <button className="brand" onClick={() => go("home")}>
            <span className="brandbox">&lt;/&gt;</span>
            <span>TECHCODECO</span>
          </button>
          <div className={"links " + (menu ? "open" : "")}>
            {t.nav.map((x, i) => (
              <button
                key={x}
                onClick={() =>
                  go(
                    ["about", "stack", "architecture", "projects", "contact"][
                      i
                    ],
                  )
                }
              >
                {x}
              </button>
            ))}
          </div>
          <div className="navtools">
            <button
              onClick={() => setLang(lang === "en" ? "fa" : "en")}
              className="small"
            >
              {lang === "en" ? "FA" : "EN"}
            </button>
            <button onClick={() => setDark(!dark)} className="round">
              {dark ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            <button onClick={() => setMenu(!menu)} className="round mobile">
              {menu ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </nav>
      </header>

      <main>
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
                <Magnetic onClick={() => go("projects")} primary>
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
            <MousePointer2 size={14} /> scroll to explore
          </div>
        </section>

        <LazySection minHeight={62}>
          <Marquee items={TECH.slice(0, 10)} reverse />
        </LazySection>

        <LazySection minHeight={760}>
          <ModernTechStack lang={lang} />
        </LazySection>

        <LazySection id="about" minHeight={420}>
          <Reveal>
            <section className="section">
              <div className="container about">
                <div>
                  <Kicker>{t.aboutK}</Kicker>
                  <h2>{t.aboutT}</h2>
                </div>
                <div>
                  <p className="lead">{t.aboutP}</p>
                  <div className="stats">
                    <Stat v="5+" l={t.years} />
                    <Stat v="15" l={t.start} />
                    <Stat v="∞" l={t.curiosity} />
                  </div>
                </div>
              </div>
            </section>
          </Reveal>
        </LazySection>

        <LazySection id="stack" minHeight={720}>
          <Reveal>
            <section className="section">
              <div className="container">
                <Kicker>{t.stackK}</Kicker>
                <h2>{t.stackT}</h2>
                <div className="techgrid">
                  {TECH.map((x, i) => (
                    <TechCard key={x.name} x={x} i={i} />
                  ))}
                </div>
              </div>
            </section>
          </Reveal>
        </LazySection>

        <LazySection minHeight={110}>
          <Marquee items={TECH.slice(6, 16)} />
        </LazySection>

        <LazySection id="architecture" minHeight={650}>
          <Reveal>
            <section className="section">
              <div className="container">
                <div className="heading">
                  <div>
                    <Kicker>{t.archK}</Kicker>
                    <h2>{t.archT}</h2>
                  </div>
                  <p>{t.archP}</p>
                </div>
                <SystemDiagram />
              </div>
            </section>
          </Reveal>
        </LazySection>

        <LazySection id="projects" minHeight={720}>
          <Reveal>
            <section className="section">
              <div className="container">
                <Kicker>{t.projK}</Kicker>
                <h2>{t.projT}</h2>
                <div className="projects">
                  {PROJECTS.map((p, i) => (
                    <Project key={p.title} p={p} i={i} label={t.view} />
                  ))}
                </div>
              </div>
            </section>
          </Reveal>
        </LazySection>
        <LazySection id="certificates" minHeight={700}>
          <Reveal>
            <Certificates />
          </Reveal>
        </LazySection>
        <LazySection id="contact" minHeight={420}>
          <Reveal>
            <section className="section contact">
              <div className="container contactbox glass">
                <div>
                  <Kicker>{t.contactK}</Kicker>
                  <h2>{t.contactT}</h2>
                  <p>{t.contactP}</p>
                </div>
                <div className="socials">
                  <Social
                    icon={<Github />}
                    label="GitHub"
                    href="https://github.com/techcodeco"
                  />
                  <Social
                    icon={<Instagram />}
                    label="Instagram"
                    href="https://instagram.com/techcodeco"
                  />
                  <Social
                    icon={<Send />}
                    label="Telegram"
                    href="https://t.me/techcodeco"
                  />
                  <Social
                    icon={<Mail />}
                    label="Email"
                    href="mailto:hello@techcodeco.dev"
                  />
                </div>
              </div>
            </section>
          </Reveal>
        </LazySection>
      </main>
      <LazySection id="powered-by" minHeight={520} rootMargin="500px 0px">
        <PoweredBy />
      </LazySection>
      <footer>
        <div className="container footer">
          <span>© {new Date().getFullYear()} TechCodeCo</span>
          <span>{t.footer}</span>
          <button onClick={() => go("home")}>↑</button>
        </div>
      </footer>

      <AnimatePresence>
        {easter && <TerminalModal close={() => setEaster(false)} />}
      </AnimatePresence>
      <motion.div className="terminal-launch" whileHover="hover">
        <motion.span
          className="terminal-label"
          variants={{
            hover: { opacity: 1, x: 0, width: "auto", marginRight: 8 },
          }}
        >
          BODY TERMINAL
        </motion.span>
        <button
          className="easter"
          onClick={() => setEaster(true)}
          aria-label="Body Terminal"
        >
          <Command size={15} />
        </button>
      </motion.div>
    </div>
  );
}

function Loader() {
  return (
    <motion.div
      className="loader"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="loader-inner">
        <div className="loader-logo">&lt;/&gt;</div>
        <strong>TECHCODECO</strong>
        <span>initializing systems...</span>
        <div className="loaderbar">
          <i />
        </div>
      </div>
    </motion.div>
  );
}
function Cursor() {
  const x = useMotionValue(-100),
    y = useMotionValue(-100),
    sx = useSpring(x, { stiffness: 500, damping: 40 }),
    sy = useSpring(y, { stiffness: 500, damping: 40 });
  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const f = (e) => {
      x.set(e.clientX - 9);
      y.set(e.clientY - 9);
    };
    window.addEventListener("pointermove", f, { passive: true });
    return () => window.removeEventListener("pointermove", f);
  }, [x, y]);
  return <motion.div className="cursor" style={{ x: sx, y: sy }} />;
}
function CodeCanvas() {
  const ref = useRef(null);
  useEffect(() => {
    const canvas = ref.current;
    const hero = document.getElementById("home");
    if (
      !canvas ||
      !hero ||
      window.matchMedia("(pointer: coarse)").matches ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    )
      return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let raf = 0;
    let running = false;
    let last = 0;
    let drops = [];
    const chars = "01{}[]<>/const async await => redis node bun";
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);

    const resize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      drops = Array.from(
        { length: Math.min(42, Math.floor(w / 42)) },
        () => Math.random() * h,
      );
    };

    const draw = (time) => {
      if (!running) return;
      if (time - last < 48) {
        raf = requestAnimationFrame(draw);
        return;
      }
      last = time;
      const w = window.innerWidth;
      const h = window.innerHeight;
      ctx.clearRect(0, 0, w, h);
      ctx.font = "10px monospace";
      ctx.fillStyle =
        getComputedStyle(document.body).getPropertyValue("--matrix").trim() ||
        "rgba(40,215,255,.13)";
      drops.forEach((y, i) => {
        ctx.fillText(chars[(Math.random() * chars.length) | 0], i * 42, y);
        drops[i] = y > h + 100 ? Math.random() * -300 : y + 0.55;
      });
      raf = requestAnimationFrame(draw);
    };

    const setRunning = (next) => {
      if (running === next) return;
      running = next;
      if (running) {
        last = 0;
        cancelAnimationFrame(raf);
        raf = requestAnimationFrame(draw);
      } else {
        cancelAnimationFrame(raf);
        ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      }
    };

    resize();
    const onResize = () => resize();
    window.addEventListener("resize", onResize, { passive: true });

    const observer = new IntersectionObserver(
      ([entry]) => setRunning(entry.isIntersecting),
      { threshold: 0.01 },
    );
    observer.observe(hero);

    return () => {
      setRunning(false);
      observer.disconnect();
      window.removeEventListener("resize", onResize);
    };
  }, []);
  return <canvas ref={ref} className="matrix" aria-hidden="true" />;
}
function SplitTitle({ text }) {
  return (
    <h1>
      {text.split(" ").map((w, i) => (
        <motion.span
          key={i}
          initial={{ y: "110%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            delay: 0.75 + i * 0.055,
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {w}&nbsp;
        </motion.span>
      ))}
    </h1>
  );
}
const CODE_SAMPLES = {
  ts: {
    file: "developer.ts",
    lang: "TS",
    lines: [
      { type: "keyword", text: "interface " },
      { type: "function", text: "Developer" },
      { type: "plain", text: " {" },
      { type: "newline" },
      { type: "plain", text: "  " },
      { type: "property", text: "name" },
      { type: "plain", text: ": " },
      { type: "string", text: "string" },
      { type: "plain", text: ";" },
      { type: "newline" },
      { type: "plain", text: "  " },
      { type: "property", text: "role" },
      { type: "plain", text: ": " },
      { type: "string", text: "string" },
      { type: "plain", text: ";" },
      { type: "newline" },
      { type: "plain", text: "  " },
      { type: "property", text: "skills" },
      { type: "plain", text: ": " },
      { type: "string", text: "[]" },
      { type: "plain", text: ";" },
      { type: "newline" },
      { type: "plain", text: "  " },
      { type: "property", text: "build" },
      { type: "plain", text: "(): " },
      { type: "keyword", text: "void" },
      { type: "plain", text: ";" },
      { type: "newline" },
      { type: "plain", text: "}" },
      { type: "newline" },
      { type: "newline" },
      { type: "keyword", text: "const " },
      { type: "plain", text: "dev" },
      { type: "plain", text: ": " },
      { type: "function", text: "Developer" },
      { type: "plain", text: " = {" },
      { type: "newline" },
      { type: "plain", text: "  " },
      { type: "property", text: "name" },
      { type: "plain", text: ": " },
      { type: "string", text: '"Mohammad"' },
      { type: "plain", text: "," },
      { type: "newline" },
      { type: "plain", text: "  " },
      { type: "property", text: "role" },
      { type: "plain", text: ": " },
      { type: "string", text: '"Full-Stack"' },
      { type: "plain", text: "," },
      { type: "newline" },
      { type: "plain", text: "  " },
      { type: "property", text: "skills" },
      { type: "plain", text: ": [" },
      { type: "string", text: '"React"' },
      { type: "plain", text: ", " },
      { type: "string", text: '"Node"' },
      { type: "plain", text: ", " },
      { type: "string", text: '"Redis"' },
      { type: "plain", text: "]," },
      { type: "newline" },
      { type: "plain", text: "  " },
      { type: "property", text: "build" },
      { type: "plain", text: "() {" },
      { type: "newline" },
      { type: "plain", text: "    " },
      { type: "keyword", text: "return " },
      { type: "plain", text: "this" },
      { type: "plain", text: ".learn().build().repeat()" },
      { type: "plain", text: ";" },
      { type: "newline" },
      { type: "plain", text: "  }" },
      { type: "newline" },
      { type: "plain", text: "};" },
    ],
  },

  tsx: {
    file: "developer.tsx",
    lang: "TSX",
    lines: [
      { type: "keyword", text: "const " },
      { type: "function", text: "Developer" },
      { type: "plain", text: " = () => {" },
      { type: "newline" },
      { type: "plain", text: "  " },
      { type: "keyword", text: "return " },
      { type: "tag", text: "<Profile" },
      { type: "newline" },
      { type: "plain", text: "    " },
      { type: "property", text: "name" },
      { type: "plain", text: "=" },
      { type: "string", text: '"Mohammad"' },
      { type: "newline" },
      { type: "plain", text: "    " },
      { type: "property", text: "role" },
      { type: "plain", text: "=" },
      { type: "string", text: '"Full-Stack"' },
      { type: "newline" },
      { type: "plain", text: "    " },
      { type: "property", text: "skills" },
      { type: "plain", text: "={[" },
      { type: "string", text: '"React"' },
      { type: "plain", text: ", " },
      { type: "string", text: '"Node"' },
      { type: "plain", text: ", " },
      { type: "string", text: '"Redis"' },
      { type: "plain", text: "]}" },
      { type: "newline" },
      { type: "plain", text: "  " },
      { type: "tag", text: "/>" },
      { type: "newline" },
      { type: "plain", text: "};" },
      { type: "newline" },
      { type: "keyword", text: "export default " },
      { type: "plain", text: "Developer" },
      { type: "plain", text: ";" },
    ],
  },

  js: {
    file: "developer.js",
    lang: "JS",
    lines: [
      { type: "keyword", text: "const " },
      { type: "plain", text: "developer" },
      { type: "plain", text: " = {" },
      { type: "newline" },
      { type: "plain", text: "  " },
      { type: "property", text: "name" },
      { type: "plain", text: ": " },
      { type: "string", text: '"Mohammad Afrwzeh"' },
      { type: "plain", text: "," },
      { type: "newline" },
      { type: "plain", text: "  " },
      { type: "property", text: "role" },
      { type: "plain", text: ": " },
      { type: "string", text: '"Full-Stack Developer"' },
      { type: "plain", text: "," },
      { type: "newline" },
      { type: "plain", text: "  " },
      { type: "property", text: "skills" },
      { type: "plain", text: ": [" },
      { type: "string", text: '"React"' },
      { type: "plain", text: ", " },
      { type: "string", text: '"Node.js"' },
      { type: "plain", text: ", " },
      { type: "string", text: '"Redis"' },
      { type: "plain", text: "]," },
      { type: "newline" },
      { type: "plain", text: "  " },
      { type: "property", text: "build" },
      { type: "plain", text: "() {" },
      { type: "newline" },
      { type: "plain", text: "    " },
      { type: "keyword", text: "return " },
      { type: "plain", text: "this" },
      { type: "plain", text: ".learn()" },
      { type: "newline" },
      { type: "plain", text: "      " },
      { type: "plain", text: ".build()" },
      { type: "newline" },
      { type: "plain", text: "      " },
      { type: "plain", text: ".improve()" },
      { type: "newline" },
      { type: "plain", text: "      " },
      { type: "plain", text: ".repeat();" },
      { type: "newline" },
      { type: "plain", text: "  }" },
      { type: "newline" },
      { type: "plain", text: "};" },
      { type: "newline" },
      { type: "newline" },
      { type: "plain", text: "developer" },
      { type: "plain", text: ".build" },
      { type: "plain", text: "();" },
    ],
  },

  py: {
    file: "developer.py",
    lang: "PY",
    lines: [
      { type: "keyword", text: "class " },
      { type: "function", text: "Developer" },
      { type: "plain", text: ":" },
      { type: "newline" },
      { type: "plain", text: "  " },
      { type: "property", text: "name" },
      { type: "plain", text: " = " },
      { type: "string", text: '"Mohammad"' },
      { type: "newline" },
      { type: "plain", text: "  " },
      { type: "property", text: "role" },
      { type: "plain", text: " = " },
      { type: "string", text: '"Full-Stack"' },
      { type: "newline" },
      { type: "plain", text: "  " },
      { type: "property", text: "skills" },
      { type: "plain", text: " = [" },
      { type: "string", text: '"React"' },
      { type: "plain", text: ", " },
      { type: "string", text: '"Node"' },
      { type: "plain", text: ", " },
      { type: "string", text: '"Redis"' },
      { type: "plain", text: "]" },
      { type: "newline" },
      { type: "newline" },
      { type: "plain", text: "  " },
      { type: "keyword", text: "def " },
      { type: "function", text: "build" },
      { type: "plain", text: "(self):" },
      { type: "newline" },
      { type: "plain", text: "    " },
      { type: "keyword", text: "while " },
      { type: "boolean", text: "True" },
      { type: "plain", text: ":" },
      { type: "newline" },
      { type: "plain", text: "      " },
      { type: "plain", text: "self.learn().build().repeat()" },
      { type: "newline" },
      { type: "newline" },
      { type: "plain", text: "dev = " },
      { type: "function", text: "Developer" },
      { type: "plain", text: "()" },
      { type: "newline" },
      { type: "plain", text: "dev.build()" },
    ],
  },

  json: {
    file: "developer.json",
    lang: "JSON",
    lines: [
      { type: "plain", text: "{" },
      { type: "newline" },
      { type: "plain", text: "  " },
      { type: "property", text: "_id" },
      { type: "plain", text: ": " },
      { type: "string", text: '"dev_001"' },
      { type: "plain", text: "," },
      { type: "newline" },
      { type: "plain", text: "  " },
      { type: "property", text: "name" },
      { type: "plain", text: ": " },
      { type: "string", text: '"Mohammad Afrwzeh"' },
      { type: "plain", text: "," },
      { type: "newline" },
      { type: "plain", text: "  " },
      { type: "property", text: "role" },
      { type: "plain", text: ": " },
      { type: "string", text: '"Full-Stack Developer"' },
      { type: "plain", text: "," },
      { type: "newline" },
      { type: "plain", text: "  " },
      { type: "property", text: "stack" },
      { type: "plain", text: ": {" },
      { type: "newline" },
      { type: "plain", text: "    " },
      { type: "property", text: "frontend" },
      { type: "plain", text: ": [" },
      { type: "string", text: '"React"' },
      { type: "plain", text: ", " },
      { type: "string", text: '"TypeScript"' },
      { type: "plain", text: "]," },
      { type: "newline" },
      { type: "plain", text: "    " },
      { type: "property", text: "backend" },
      { type: "plain", text: ": [" },
      { type: "string", text: '"Node.js"' },
      { type: "plain", text: ", " },
      { type: "string", text: '"Bun"' },
      { type: "plain", text: ", " },
      { type: "string", text: '"Redis"' },
      { type: "plain", text: "]" },
      { type: "newline" },
      { type: "plain", text: "  }," },
      { type: "newline" },
      { type: "plain", text: "  " },
      { type: "property", text: "metrics" },
      { type: "plain", text: ": {" },
      { type: "newline" },
      { type: "plain", text: "    " },
      { type: "property", text: "experience" },
      { type: "plain", text: ": " },
      { type: "number", text: "5" },
      { type: "plain", text: "," },
      { type: "newline" },
      { type: "plain", text: "    " },
      { type: "property", text: "projects" },
      { type: "plain", text: ": " },
      { type: "number", text: "12" },
      { type: "plain", text: "," },
      { type: "newline" },
      { type: "plain", text: "    " },
      { type: "property", text: "rps" },
      { type: "plain", text: ": " },
      { type: "string", text: '"30K+"' },
      { type: "plain", text: "," },
      { type: "newline" },
      { type: "plain", text: "    " },
      { type: "property", text: "availability" },
      { type: "plain", text: ": " },
      { type: "boolean", text: "true" },
      { type: "plain", text: "" },
      { type: "newline" },
      { type: "plain", text: "  }," },
      { type: "newline" },
      { type: "plain", text: "  " },
      { type: "property", text: "philosophy" },
      { type: "plain", text: ": " },
      { type: "string", text: '"Work hard. Keep building."' },
      { type: "newline" },
      { type: "plain", text: "}" },
    ],
  },

  bson: {
    file: "developer.bson",
    lang: "BSON",
    lines: [
      { type: "comment", text: "/* MongoDB Document */" },
      { type: "newline" },
      { type: "plain", text: "{" },
      { type: "newline" },
      { type: "plain", text: "  " },
      { type: "property", text: "_id" },
      { type: "plain", text: ": " },
      { type: "string", text: "ObjectId('507f1f77bcf86cd799439011')" },
      { type: "plain", text: "," },
      { type: "newline" },
      { type: "plain", text: "  " },
      { type: "property", text: "name" },
      { type: "plain", text: ": " },
      { type: "string", text: "'Mohammad Afrwzeh'" },
      { type: "plain", text: "," },
      { type: "newline" },
      { type: "plain", text: "  " },
      { type: "property", text: "role" },
      { type: "plain", text: ": " },
      { type: "string", text: "'Full-Stack Developer'" },
      { type: "plain", text: "," },
      { type: "newline" },
      { type: "plain", text: "  " },
      { type: "property", text: "skills" },
      { type: "plain", text: ": [" },
      { type: "newline" },
      { type: "plain", text: "    { " },
      { type: "property", text: "name" },
      { type: "plain", text: ": " },
      { type: "string", text: "'React'" },
      { type: "plain", text: ", " },
      { type: "property", text: "level" },
      { type: "plain", text: ": " },
      { type: "number", text: "92" },
      { type: "plain", text: " }," },
      { type: "newline" },
      { type: "plain", text: "    { " },
      { type: "property", text: "name" },
      { type: "plain", text: ": " },
      { type: "string", text: "'Node.js'" },
      { type: "plain", text: ", " },
      { type: "property", text: "level" },
      { type: "plain", text: ": " },
      { type: "number", text: "93" },
      { type: "plain", text: " }," },
      { type: "newline" },
      { type: "plain", text: "    { " },
      { type: "property", text: "name" },
      { type: "plain", text: ": " },
      { type: "string", text: "'Redis'" },
      { type: "plain", text: ", " },
      { type: "property", text: "level" },
      { type: "plain", text: ": " },
      { type: "number", text: "82" },
      { type: "plain", text: " }" },
      { type: "newline" },
      { type: "plain", text: "  ]," },
      { type: "newline" },
      { type: "plain", text: "  " },
      { type: "property", text: "createdAt" },
      { type: "plain", text: ": " },
      { type: "string", text: "ISODate('2026-01-15T10:30:00Z')" },
      { type: "plain", text: "," },
      { type: "newline" },
      { type: "plain", text: "  " },
      { type: "property", text: "active" },
      { type: "plain", text: ": " },
      { type: "boolean", text: "true" },
      { type: "newline" },
      { type: "plain", text: "}" },
    ],
  },
};

const CERTIFICATES = [
  {
    id: 1,
    title: "Advanced React & Modern Architecture",
    issuer: "Meta / Coursera",
    date: "2024",
    credential: "CR-REACT-2024",
    icon: SiReact,
    color: "#61DAFB",
    link: "#",
  },
  {
    id: 2,
    title: "Node.js Microservices & Distributed Systems",
    issuer: "Google Cloud",
    date: "2023",
    credential: "CR-NODE-2023",
    icon: SiNodedotjs,
    color: "#339933",
    link: "#",
  },
  {
    id: 3,
    title: "Database Design & Performance Optimization",
    issuer: "MongoDB University",
    date: "2023",
    credential: "CR-DB-2023",
    icon: SiMongodb,
    color: "#47A248",
    link: "#",
  },
  {
    id: 4,
    title: "Redis & Caching Strategies",
    issuer: "Redis Labs",
    date: "2024",
    credential: "CR-REDIS-2024",
    icon: SiRedis,
    color: "#DC382D",
    link: "#",
  },
];

function CodeEditor() {
  const [mode, setMode] = useState("ts");
  const [typed, setTyped] = useState(0);
  const sample = CODE_SAMPLES[mode];

  // محاسبه متن کامل برای شمارش کاراکترها
  const fullText = useMemo(() => {
    return sample.lines.map((line) => line.text || "").join("");
  }, [sample]);

  useEffect(() => {
    setTyped(0);
    const interval = setInterval(() => {
      setTyped((prev) => (prev < fullText.length ? prev + 1 : prev));
    }, 15);
    return () => clearInterval(interval);
  }, [mode, fullText]);

  // رندر خطوط با هایلایت و تایپ‌رایتر
  const renderLines = () => {
    let charCount = 0;
    const elements = [];

    sample.lines.forEach((line, index) => {
      if (line.type === "newline") {
        elements.push(<br key={`br-${index}`} />);
        return;
      }

      const text = line.text || "";
      const start = charCount;
      const end = Math.min(start + text.length, typed);
      const visibleText = text.slice(0, Math.max(0, end - start));

      if (visibleText) {
        elements.push(
          <span key={`${index}-${line.type}`} className={`tok ${line.type}`}>
            {visibleText}
          </span>,
        );
      }

      charCount += text.length;
    });

    // اضافه کردن کرسر
    if (typed < fullText.length) {
      elements.push(<i key="cursor" className="caret" />);
    }

    return elements;
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 40, rotate: 2 }}
      animate={{ opacity: 1, x: 0, rotate: 0 }}
      transition={{ delay: 0.65, duration: 0.9 }}
      className="editor glass"
      dir="ltr"
    >
      <div className="editorbar">
        <span />
        <span />
        <span />
        <b>{sample.file}</b>
        <Terminal size={14} />
      </div>

      <div className="editor-tabs">
        {Object.entries(CODE_SAMPLES).map(([key, val]) => (
          <button
            key={key}
            className={mode === key ? "active" : ""}
            onClick={() => setMode(key)}
          >
            {val.lang}
          </button>
        ))}
      </div>

      <div className="codebody">
        <div className="line-numbers">
          {fullText
            .slice(0, typed)
            .split("\n")
            .map((_, i) => (
              <span key={i}>{i + 1}</span>
            ))}
        </div>
        <pre>{renderLines()}</pre>
      </div>

      <div className="editorfoot">
        <span>
          <i /> system.ready
        </span>
        <span>UTF-8 · LF · {sample.lang}</span>
      </div>

      <div className="editor-glow" />
    </motion.div>
  );
}
function CodeMotion3D() {
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
      <motion.div
        className="code3d-orbit orbit-a"
        style={{ rotateZ: rotate }}
      />
      <motion.div
        className="code3d-orbit orbit-b"
        style={{ rotateZ: rotate }}
      />
      <motion.div className="code3d-scene" style={{ rotateX: rotate, y }}>
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
          <motion.span
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
          </motion.span>
        ))}
      </motion.div>
      <div className="code3d-caption">
        <span>
          <i /> scroll depth
        </span>
        <span>runtime · architecture · persistence</span>
      </div>
    </div>
  );
}
function Magnetic({ children, primary = false, href, onClick }) {
  return (
    <motion.a
      href={href}
      onClick={onClick}
      target={href ? "_blank" : undefined}
      rel={href ? "noreferrer" : undefined}
      className={"mag " + (primary ? "primary" : "")}
      whileHover={{ scale: 1.04, y: -3 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.a>
  );
}
function Kicker({ children }) {
  return (
    <div className="kicker">
      <span>//</span> {children}
    </div>
  );
}
function Stat({ v, l }) {
  return (
    <div className="stat">
      <strong>{v}</strong>
      <span>{l}</span>
    </div>
  );
}
function Reveal({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
function TechCard({ x, i }) {
  const Icon = x.icon;
  return (
    <motion.article
      className="tech glass"
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: i * 0.025 }}
      whileHover={{ y: -9, rotateX: 2, rotateY: -2 }}
    >
      <div className="techicon" style={{ color: x.color }}>
        <Icon />
      </div>
      <div className="techbody">
        <div className="techtop">
          <strong>{x.name}</strong>
          <b>{x.level}%</b>
        </div>
        <small>{x.category}</small>
        <div className="meter">
          <motion.i
            initial={{ width: 0 }}
            whileInView={{ width: x.level + "%" }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          />
        </div>
      </div>
    </motion.article>
  );
}
function Marquee({ items, reverse }) {
  const loop = [...items, ...items];
  return (
    <div className="marquee">
      <div className={"marqueetrack " + (reverse ? "rev" : "")}>
        {loop.map((x, i) => {
          const I = x.icon;
          return (
            <span key={i}>
              <I />
              {x.name}
            </span>
          );
        })}
      </div>
    </div>
  );
}
function SystemDiagram() {
  const nodes = [
    ["Client", "Web · Mobile", Code2],
    ["Gateway", "Auth · Rate limit", Server],
    ["Queue", "Redis · Workers", Layers3],
    ["Data", "Postgres · Cache", Database],
  ];
  return (
    <div className="system glass">
      <div className="systemflow">
        {nodes.map(([a, b, I], i) => (
          <React.Fragment key={a}>
            <motion.div
              className={`node node-${i}`}
              whileHover={{ scale: 1.045 }}
            >
              <span className="node-energy" aria-hidden="true" />
              <I />
              <strong>{a}</strong>
              <small>{b}</small>
            </motion.div>
            {i < nodes.length - 1 && (
              <div className={`flow flow-${i}`} aria-hidden="true">
                <i />
                <b />
                <em />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
      <div className="systemtags">
        <span>
          <Cpu /> horizontal scale
        </span>
        <span>
          <GitBranch /> event-driven
        </span>
        <span>
          <Server /> failure-aware
        </span>
      </div>
    </div>
  );
}
function Project({ p, i, label }) {
  return (
    <motion.article
      className={"project glass " + (p.featured ? "featured" : "")}
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: i * 0.08 }}
      whileHover={{ y: -8 }}
    >
      <div className="projectvisual">
        <span className="metric">{p.metric}</span>
        <div className="codevisual">
          <em>01</em>
          <em>02</em>
          <em>03</em>
          <em>04</em>
          <div>
            <b>const</b> system = <strong>build</strong>({`{ scale: true }`});
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
        <a href={p.github} target="_blank" rel="noreferrer">
          {label}
          <ExternalLink size={14} />
        </a>
      </div>
    </motion.article>
  );
}

const MODERN_TECH_STACK = [
  {
    name: "React",
    icon: SiReact,
    category: "FRONTEND",
    color: "#61DAFB",
    description:
      "Interactive interfaces built with reusable components, state and motion.",
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    category: "LANGUAGE",
    color: "#3178C6",
    description:
      "Strong contracts and predictable code for maintainable full-stack systems.",
  },
  {
    name: "Node.js",
    icon: SiNodedotjs,
    category: "BACKEND",
    color: "#68A063",
    description:
      "Event-driven APIs and services designed for real-world traffic.",
  },
  {
    name: "Redis",
    icon: SiRedis,
    category: "CACHE / QUEUE",
    color: "#FF4438",
    description:
      "Fast caching, streams, queues and batching for responsive systems.",
  },
  {
    name: "PostgreSQL",
    icon: SiPostgresql,
    category: "DATABASE",
    color: "#4169E1",
    description:
      "Reliable relational data, indexing and persistence behind the application.",
  },
  {
    name: "Docker",
    icon: SiDocker,
    category: "INFRASTRUCTURE",
    color: "#2496ED",
    description:
      "Reproducible environments that move applications from local to production.",
  },
];

function ModernTechStack({ lang = "en" }) {
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
    const dir = document.documentElement.dir === "rtl" ? -1 : 1;

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
                      {isActive ? "ACTIVE" : "STACKED"}
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

function Certificates() {
  return (
    <section id="certificates" className="section certificates-section">
      <div className="container">
        <Reveal>
          <div className="cert-header">
            <Kicker>🏆 CERTIFICATIONS</Kicker>
            <h2>Professional Certificates</h2>
            <p className="cert-subtitle">
              Validated skills & continuous learning in modern technologies
            </p>
          </div>
        </Reveal>

        <div className="cert-grid">
          {CERTIFICATES.map((cert, i) => (
            <Reveal key={cert.id}>
              <motion.div
                className="cert-card glass"
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  transition: { type: "spring", stiffness: 400, damping: 25 },
                }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <div className="cert-icon" style={{ color: cert.color }}>
                  <cert.icon />
                </div>

                <div className="cert-body">
                  <h3>{cert.title}</h3>
                  <p className="cert-issuer">{cert.issuer}</p>

                  <div className="cert-meta">
                    <span className="cert-date">
                      <Calendar size={12} />
                      {cert.date}
                    </span>
                    <span className="cert-credential">
                      <Award size={12} />
                      {cert.credential}
                    </span>
                  </div>

                  <motion.a
                    href={cert.link}
                    className="cert-link"
                    whileHover={{ x: 4 }}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Verify Certificate <ExternalLink size={14} />
                  </motion.a>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>

        {/* آمار گواهی‌ها */}
        <div className="cert-stats">
          <motion.div
            className="cert-stat"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <span className="cert-stat-number">{CERTIFICATES.length}+</span>
            <span className="cert-stat-label">Certifications</span>
          </motion.div>
          <motion.div
            className="cert-stat"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <span className="cert-stat-number">4+</span>
            <span className="cert-stat-label">Technologies</span>
          </motion.div>
          <motion.div
            className="cert-stat"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <span className="cert-stat-number">2023-2024</span>
            <span className="cert-stat-label">Continuous Learning</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Social({ icon, label, href }) {
  return (
    <motion.a
      className="social"
      href={href}
      target="_blank"
      rel="noreferrer"
      whileHover={{ y: -5 }}
    >
      {icon}
      <strong>{label}</strong>
      <ArrowUpRight size={15} />
    </motion.a>
  );
}
const TERMINAL_TECH = TECH.reduce((acc, tech) => {
  const { name, level, category, color } = tech;
  acc[name.toLowerCase().replace(/[^a-z0-9]+/g, "-")] = {
    name,
    level,
    category,
    color,
  };
  return acc;
}, {});
function TerminalModal({ close }) {
  const [cwd, setCwd] = useState([]);
  const [history, setHistory] = useState([]);
  const [input, setInput] = useState("");
  const inputRef = useRef(null);
  const screenRef = useRef(null);
  const path = cwd.length ? "/" + cwd.join("/") : "/root";
  const techNames = Object.keys(TERMINAL_TECH);
  const run = (raw) => {
    const cmd = raw.trim();
    if (!cmd) return;
    const parts = cmd.split(/\s+/),
      op = parts[0].toLowerCase(),
      arg = parts.slice(1).join(" ");
    let out = [];
    if (op === "help")
      out = [
        "Available commands:",
        "  ls              list current directory",
        "  cd <path>       enter brain or heart",
        "  pwd             print current path",
        "  cat <tech>      show skill level and progress",
        "  tree            show techcodeOS tree",
        "  whoami          show developer profile",
        "  time            show current system time",
        "  neofetch        show techcodeOS system summary",
        "  find <name>     search technologies",
        "  echo <text>     print text",
        "  clear           clear terminal",
        "  help            show this help",
      ];
    else if (op === "clear") {
      setHistory([]);
      setInput("");
      return;
    } else if (op === "pwd") out = [path];
    else if (op === "ls")
      out =
        cwd[0] === "brain"
          ? techNames.map((n) => `${n}.skill`)
          : cwd[0] === "heart"
            ? ["discipline", "curiosity", "hard-work", "consistency"]
            : ["brain/", "heart/"];
    else if (op === "cd") {
      const target = (arg || "/").replace(/^\//, "").split("/").filter(Boolean);
      if (!arg || arg === "/" || arg === "~") setCwd([]);
      else if (arg === "..") setCwd(cwd.slice(0, -1));
      else if (
        (target[0] === "brain" || target[0] === "heart") &&
        target.length === 1
      )
        setCwd(target);
      else out = [`cd: no such path: ${arg}`];
    } else if (op === "cat") {
      if (cwd[0] !== "brain") out = ["cat: enter /brain first. Try: cd brain"];
      else {
        const key = arg.toLowerCase().replace(/\.skill$/, "");
        const t = TERMINAL_TECH[key];
        out = t
          ? [
              `${t.name}.skill`,
              `category : ${t.category}`,
              `level    : ${t.level}%`,
              `status   : ${t.level >= 90 ? "expert" : "strong"}`,
              `progress : ${"█".repeat(Math.round(t.level / 10))}${"░".repeat(10 - Math.round(t.level / 10))} ${t.level}%`,
            ]
          : ["cat: technology not found. Try ls"];
      }
    } else if (op === "whoami")
      out = [
        "Mohammad Afrwzeh",
        "Full-Stack Developer",
        "Focus: scalable systems, high-performance APIs, clean architecture",
        "github: github.com/techcodeco",
      ];
    else if (op === "time")
      out = [new Date().toLocaleString(undefined, { hour12: false })];
    else if (op === "neofetch")
      out = [
        "techcodeOS v6.0",
        "────────────────────────",
        "OS       techcodeOS",
        "USER     techcode",
        "SHELL    body-terminal",
        "ROLE     Full-Stack Developer",
        `BRAIN    ${techNames.length} technologies`,
        "HEART    discipline + curiosity",
        "STATUS   ONLINE ♥",
        "BP       120/80 mmHg",
        "HR       72 bpm",
        "LOAD     building...",
      ];
    else if (op === "tree")
      out = [
        "/root",
        "├── brain/",
        "│   ├── " +
          techNames
            .slice(0, 5)
            .map((n) => n + ".skill")
            .join("\n│   ├── "),
        "│   └── ...",
        "└── heart/",
        "    ├── discipline",
        "    ├── curiosity",
        "    ├── hard-work",
        "    └── consistency",
      ];
    else if (op === "find")
      out = techNames
        .filter((n) => n.includes(arg.toLowerCase()))
        .map((n) => `/brain/${n}.skill`);
    else if (op === "echo") out = [arg];
    else out = [`${op}: command not found. Type 'help'.`];
    setHistory((h) => [...h, { cmd, out, path }]);
    setInput("");
    requestAnimationFrame(() => {
      if (screenRef.current)
        screenRef.current.scrollTop = screenRef.current.scrollHeight;
    });
  };
  useEffect(() => inputRef.current?.focus(), []);
  return (
    <motion.div
      className="modal terminal-modal"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={close}
    >
      <motion.div
        className="body-terminal"
        initial={{ scale: 0.92, y: 25 }}
        animate={{ scale: 1, y: 0 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="terminal-head">
          <div className="terminal-title">
            <span className="pulse" /> techcodeOS <b>::</b> body-terminal
          </div>
          <div className="terminal-vitals">
            <span>♥ 72 bpm</span>
            <span>BP 120/80</span>
            <span>USER techcode</span>
            <button onClick={close}>
              <X size={15} />
            </button>
          </div>
        </div>
        <div
          className="terminal-screen"
          ref={screenRef}
          onClick={() => inputRef.current?.focus()}
        >
          <div className="bootline">
            techcodeOS v6.0 — body terminal initialized
          </div>
          <div className="bootline">
            heartbeat stable · pressure nominal · brain mounted at /brain ·
            heart mounted at /heart
          </div>
          <div className="bootline">
            Type <b>help</b> to begin.
          </div>
          {history.map((h, i) => (
            <div className="term-entry" key={i}>
              <div>
                <span className="prompt">techcode@root</span>
                <span className="path">:{h.path}</span> <b>$</b> {h.cmd}
              </div>
              {h.out.map((line, j) => (
                <div
                  key={j}
                  className={
                    line.includes("level") || line.includes("progress")
                      ? "term-accent"
                      : "term-out"
                  }
                >
                  {line}
                </div>
              ))}
            </div>
          ))}
          <div className="term-input">
            <span className="prompt">techcode@root</span>
            <span className="path">:{path}</span>
            <b> $</b>
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") run(input);
              }}
              autoComplete="off"
              spellCheck="false"
            />
          </div>
        </div>
        <div className="terminal-footer">
          <span>techcodeOS</span>
          <span>brain {techNames.length} skills</span>
          <span>heart online</span>
          <span>dracula theme</span>
        </div>
      </motion.div>
    </motion.div>
  );
}
createRoot(document.getElementById("root")).render(<App />);
