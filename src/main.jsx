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
    if (reduce) return;
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
              <SplitTitle text={t.title} />
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

        <Marquee items={TECH.slice(0, 10)} reverse />

        <Reveal>
          <section id="about" className="section">
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

        <Reveal>
          <section id="stack" className="section">
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

        <Marquee items={TECH.slice(6, 16)} />

        <Reveal>
          <section id="architecture" className="section">
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

        <Reveal>
          <section id="projects" className="section">
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
        <Reveal>
          <Certificates />
        </Reveal>
        <Reveal>
          <section id="contact" className="section contact">
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
      </main>
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
      <button
        className="easter"
        onClick={() => setEaster(true)}
        aria-label="Terminal"
      >
        <Command size={15} />
      </button>
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
    const f = (e) => {
      x.set(e.clientX - 9);
      y.set(e.clientY - 9);
    };
    window.addEventListener("pointermove", f);
    return () => window.removeEventListener("pointermove", f);
  }, []);
  return <motion.div className="cursor" style={{ x: sx, y: sy }} />;
}
function CodeCanvas() {
  const ref = useRef(null);
  useEffect(() => {
    const c = ref.current,
      ctx = c.getContext("2d");
    let raf;
    const chars = "01{}[]<>/const async await => redis node bun";
    let drops = [];
    function resize() {
      c.width = innerWidth * devicePixelRatio;
      c.height = innerHeight * devicePixelRatio;
      ctx.scale(devicePixelRatio, devicePixelRatio);
      drops = Array.from(
        { length: Math.floor(innerWidth / 32) },
        () => Math.random() * innerHeight,
      );
    }
    resize();
    addEventListener("resize", resize);
    function draw() {
      ctx.clearRect(0, 0, innerWidth, innerHeight);
      ctx.font = "10px monospace";
      ctx.fillStyle =
        getComputedStyle(document.body).getPropertyValue("--matrix").trim() ||
        "rgba(40,215,255,.13)";
      drops.forEach((y, i) => {
        ctx.fillText(
          chars[Math.floor(Math.random() * chars.length)],
          i * 32,
          y,
        );
        drops[i] = y > innerHeight + 100 ? Math.random() * -300 : y + 0.35;
      });
      raf = requestAnimationFrame(draw);
    }
    draw();
    return () => {
      cancelAnimationFrame(raf);
      removeEventListener("resize", resize);
    };
  }, []);
  return <canvas ref={ref} className="matrix" />;
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
            <motion.div className="node" whileHover={{ scale: 1.05 }}>
              <I />
              <strong>{a}</strong>
              <small>{b}</small>
            </motion.div>
            {i < nodes.length - 1 && (
              <div className="flow">
                <i />
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
function TerminalModal({ close }) {
  const [text, setText] = useState("");
  const [ok, setOk] = useState(false);
  const line = "whoami";
  return (
    <motion.div
      className="modal"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={close}
    >
      <motion.div
        className="modalterminal"
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={close}>
          <X />
        </button>
        <div className="prompt">
          techcodeco@system:~$ <span>{text}</span>
          <i />
        </div>
        <div className="output">
          {text === line && (
            <>
              <p>techcodeco</p>
              <p>Full-Stack Developer</p>
              <p>building scalable systems.</p>
            </>
          )}
          {ok && (
            <p className="green">
              ✓ copied: “Code is my art, logic is my canvas.”
            </p>
          )}
        </div>
        <div className="terminalbuttons">
          <button
            onClick={() => {
              navigator.clipboard?.writeText(
                "Code is my art, logic is my canvas.",
              );
              setOk(true);
            }}
          >
            <Copy size={14} /> copy philosophy
          </button>
          <button onClick={() => setText(line)}>
            <Terminal size={14} /> run whoami
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
