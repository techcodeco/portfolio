import { SiReact, SiJavascript, SiTailwindcss, SiMui, SiRedux, SiNodedotjs, SiExpress, SiBun, SiGraphql, SiMongodb, SiPostgresql, SiSequelize, SiExpo, SiGit, SiRedis, SiDocker, SiTypescript } from "react-icons/si";

export const TECH = [
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

export const PROJECTS = [
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

export const PROJECTS_FA = [
  {
    ...PROJECTS[0],
    type: "بک‌اند / سیستم‌های توزیع‌شده",
    description:
      "دریافت و پردازش وب‌هوک با تمرکز بر توان عملیاتی بالا، دسته‌بندی درخواست‌ها، Redis Streams، پردازشگرهای صف و مقیاس‌پذیری افقی.",
    metric: "هدف: بیش از ۳۰K درخواست/ثانیه",
  },
  {
    ...PROJECTS[1],
    type: "توسعه فول‌استک",
    description:
      "معماری ماژولار React و Node.js با مرزبندی روشن API، مدل‌های دیتابیس و رابط کاربری واکنش‌گرا.",
    metric: "MERN Stack",
  },
  {
    ...PROJECTS[2],
    type: "آزمایش‌های مهندسی نرم‌افزار",
    description:
      "آزمایش و سنجش کارایی Redis شامل throughput، pipeline، batching و پردازش درخواست‌ها در هم‌زمانی بالا.",
    metric: "بنچمارک بیش از ۱M عملیات/ثانیه",
  },
];

export const COPY = {
  en: {
    nav: ["About", "Stack", "Architecture", "Projects", "Contact"],
    ey: "FULL-STACK DEVELOPER",
    title: "I build systems that feel fast.",
    scrollHint: "scroll to explore",
    desc: "Full-stack developer focused on scalable web applications, high-performance APIs and clean engineering.",
    cta: "Explore projects",
    git: "GitHub profile",
    aboutK: "THE STORY BEHIND THE CODE",
    aboutT: "Code is my art, logic is my canvas.",
    aboutP:
      "I’m Mohammad Afrouzeh, a full-stack developer and programmer focused on scalable web apps, high-performance APIs and clean software architecture. I started coding at 15 and grew from interfaces into backend systems, databases and distributed applications at TechCodeCo.",
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
    scrollHint: "برای مشاهده بیشتر اسکرول کنید",
    desc: "توسعه‌دهنده فول‌استک با تمرکز روی اپلیکیشن‌های مقیاس‌پذیر، APIهای پرسرعت و مهندسی تمیز.",
    cta: "مشاهده پروژه‌ها",
    git: "پروفایل گیت‌هاب",
    aboutK: "داستان پشت کد",
    aboutT: "کد هنر من است، منطق بوم من.",
    aboutP:
      "من محمد افروزه (Mohammad Afrouzeh) هستم؛ برنامه‌نویس و توسعه‌دهنده فول‌استک با تمرکز بر توسعه وب، اپلیکیشن‌های مقیاس‌پذیر، API و معماری نرم‌افزار. برنامه‌نویسی را از ۱۵ سالگی شروع کردم و مسیرم از رابط کاربری به سیستم‌های بک‌اند، دیتابیس و پروژه‌های TechCodeCo رسیده است.",
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

export const LAYER_CARDS = [
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

export const CERTIFICATES = [
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

export const MODERN_TECH_STACK = [
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
