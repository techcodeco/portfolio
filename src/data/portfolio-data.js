import {
  SiReact,
  SiJavascript,
  SiNodedotjs,
  SiBun,
  SiMongodb,
  SiRedis,
  SiDocker,
  SiTypescript,
  SiNextdotjs,
  SiLinux,
  SiGit,
} from "react-icons/si";
import { Webhook, Workflow } from "lucide-react";

export const TECH = [
  ["TypeScript", "LANGUAGE", SiTypescript, "#3178C6"],
  ["JavaScript", "LANGUAGE", SiJavascript, "#F7DF1E"],
  ["Node.js", "BACKEND", SiNodedotjs, "#339933"],
  ["Bun", "RUNTIME", SiBun, "#FBF0DF"],
  ["React", "FRONTEND", SiReact, "#61DAFB"],
  ["Next.js", "WEB FRAMEWORK", SiNextdotjs, "#FFFFFF"],
  ["React Native", "MOBILE", SiReact, "#61DAFB"],
  ["MongoDB", "DATABASE", SiMongodb, "#47A248"],
  ["Redis", "DATA / CACHE", SiRedis, "#DC382D"],
  ["BullMQ", "JOB QUEUES", Workflow, "#8B5CF6"],
  ["REST APIs", "API DESIGN", Webhook, "#168BFF"],
  ["Docker", "CONTAINERS", SiDocker, "#2496ED"],
  ["Linux", "OPERATING SYSTEM", SiLinux, "#FCC624"],
  ["Git", "VERSION CONTROL", SiGit, "#F05032"],
].map(([name, category, icon, color]) => ({
  name,
  category,
  icon,
  color,
}));

export const PROJECTS = [
  {
    title: "Golden Duel — Telegram Gaming Platform",
    type: "TELEGRAM / MODULAR BACKEND",
    description:
      "A Telegram duel platform built with TypeScript and a modular multi-service architecture. Six independently runnable services handle gateway routing, private and group experiences, background jobs, broadcasts and backups, using shared Redis and MongoDB contracts.",
    stack: ["TypeScript", "Node.js", "Redis", "MongoDB", "BullMQ", "Telegram Bot API"],
    featured: true,
    metric: "6 INDEPENDENT SERVICES",
    visual: "duel",
    repoName: "GoldenDuel-Telegram-Bot",
    previewDescription: "A modular Telegram duel platform with independent services and shared data infrastructure.",
    github: "https://github.com/techcodeco/GoldenDuel-Telegram-Bot",
  },
  {
    title: "Crypto Pattern Scanner",
    type: "CRYPTO / PATTERN SCANNING",
    description:
      "A cryptocurrency pattern-scanning project focused on organizing market-pattern discovery into a clearer, repeatable workflow. Explore the repository for the implementation details and supported analysis patterns.",
    stack: ["Crypto Scanning", "Pattern Analysis", "Market Research"],
    github: "https://github.com/techcodeco/crypto-pattern-scanner",
    metric: "CRYPTO PATTERN ANALYSIS",
    visual: "scanner",
    repoName: "crypto-pattern-scanner",
    previewDescription: "A repository for exploring cryptocurrency patterns and market-scanning workflows.",
  },
  {
    title: "Kurdland — Front-End Project",
    type: "FRONTEND / WEB APPLICATION",
    description:
      "A front-end web project developed as part of the TECHCODE portfolio of work. Explore the repository for the implementation, interface details and current technology choices.",
    stack: ["Frontend", "Web UI"],
    github: "https://github.com/techcodeco/kurdland-front-end",
    metric: "FRONT-END PROJECT",
    visual: "kurdland",
    repoName: "kurdland-front-end",
    previewDescription: "A front-end web project maintained in the TECHCODE GitHub workspace.",
  },
  {
    title: "TECHCODE Personal Portfolio",
    type: "WEB / PERSONAL BRAND",
    description:
      "A bilingual personal portfolio built with Next.js and React, featuring responsive layouts, motion-driven interactions, structured metadata, multilingual routes and a custom 404 experience.",
    stack: ["Next.js", "React", "Framer Motion", "SEO"],
    github: "https://github.com/techcodeco/portfolio",
    metric: "ENGLISH + PERSIAN",
    visual: "portfolio",
    repoName: "portfolio",
    previewDescription: "A bilingual developer portfolio built with Next.js, React and responsive UI components.",
  },
];

export const PROJECTS_FA = [
  {
    ...PROJECTS[0],
    type: "تلگرام / بک‌اند ماژولار",
    description:
      "پلتفرم دوئل تلگرامی ساخته‌شده با TypeScript و معماری چندسرویسی ماژولار. شش سرویس مستقل، مسیریابی، تجربه خصوصی و گروهی، پردازش کارهای پس‌زمینه، ارسال انبوه و پشتیبان‌گیری را با قراردادهای مشترک Redis و MongoDB مدیریت می‌کنند.",
    metric: "۶ سرویس مستقل",
    previewDescription: "پلتفرم دوئل تلگرامی با سرویس‌های مستقل و زیرساخت داده مشترک.",
  },
  {
    ...PROJECTS[1],
    type: "رمزارز / اسکن الگوها",
    description:
      "پروژه‌ای برای اسکن الگوهای بازار رمزارز و سازمان‌دهی فرایند کشف الگوها به شکلی روشن و تکرارپذیر. جزئیات پیاده‌سازی و الگوهای پشتیبانی‌شده را می‌توان در مخزن پروژه بررسی کرد.",
    stack: ["اسکن رمزارز", "تحلیل الگو", "بررسی بازار"],
    metric: "تحلیل الگوهای رمزارز",
    previewDescription: "مخزنی برای بررسی الگوهای رمزارز و گردش‌کارهای اسکن بازار.",
  },
  {
    ...PROJECTS[2],
    type: "فرانت‌اند / اپلیکیشن وب",
    description:
      "یک پروژه فرانت‌اند در مجموعه کارهای TECHCODE. برای مشاهده جزئیات پیاده‌سازی، رابط کاربری و فناوری‌های استفاده‌شده، مخزن پروژه را بررسی کنید.",
    stack: ["فرانت‌اند", "رابط وب"],
    metric: "پروژه فرانت‌اند",
    previewDescription: "یک پروژه وب فرانت‌اند در مجموعه مخزن‌های TECHCODE.",
  },
  {
    ...PROJECTS[3],
    type: "وب / برند شخصی",
    description:
      "وب‌سایت دوزبانه شخصی با Next.js و React، شامل طراحی واکنش‌گرا، تعامل‌های انیمیشنی، فراداده ساختاریافته، مسیرهای چندزبانه و صفحه اختصاصی ۴۰۴.",
    metric: "فارسی + انگلیسی",
    previewDescription: "پورتفولیوی دوزبانه توسعه‌دهنده با Next.js، React و رابط کاربری واکنش‌گرا.",
  },
];

export const COPY = {
  en: {
    nav: ["About", "Stack", "Architecture", "Projects", "Contact"],
    ey: "THE ENGINEER BEHIND THE CODE",
    title: "Mohammad Afrouzeh",
    heroSubtitle: "Engineering with clarity and purpose.",
    scrollHint: "scroll to explore",
    desc:
      "I’m Mohammad Afrouzeh, a Full-Stack Developer with a strong focus on backend engineering, API design and software architecture. I enjoy building modular services, working with data systems, and turning complex ideas into practical, maintainable products. My day-to-day toolkit includes TypeScript, Node.js, Bun, React, Redis and MongoDB.",
    cta: "Explore projects",
    git: "GitHub profile",
    stackK: "TECHNOLOGIES I WORK WITH",
    stackT: "A practical toolkit for building software.",
    archK: "SYSTEM THINKING",
    archT: "From request to reliable system.",
    archP:
      "Good systems are more than endpoints: they need clear service boundaries, reliable queues, thoughtful data flow, observability and recovery paths.",
    projK: "SELECTED WORK",
    projT: "Products and systems I’ve built.",
    contactK: "LET’S CONNECT",
    contactT: "Have an idea? Let’s build it.",
    contactP:
      "Use the links below to reach me for technical conversations, questions and project inquiries.",
    view: "View repository",
    call: "Call",
    available: "Building and improving every day",
    focus: "Engineering focus",
    footer: "Code • Build • Level Up — Mohammad Afrouzeh / TECHCODE",
  },
  fa: {
    nav: ["درباره من", "تکنولوژی‌ها", "معماری", "پروژه‌ها", "ارتباط"],
    ey: "مهندس پشت کدها",
    title: "محمد افروزه",
    heroSubtitle: "مهندسی با دقت، منطق و هدف.",
    scrollHint: "برای مشاهده بیشتر اسکرول کنید",
    desc:
      "من محمد افروزه (Mohammad Afrouzeh) هستم؛ توسعه‌دهنده فول‌استک با تمرکز ویژه بر مهندسی بک‌اند، طراحی API و معماری نرم‌افزار. از طراحی سرویس‌های ماژولار، کار با سیستم‌های داده و تبدیل ایده‌های پیچیده به محصولات کاربردی و قابل نگهداری لذت می‌برم. ابزارهای اصلی من TypeScript، Node.js، Bun، React، Redis و MongoDB هستند.",
    cta: "مشاهده پروژه‌ها",
    git: "پروفایل گیت‌هاب",
    stackK: "فناوری‌هایی که با آن‌ها کار می‌کنم",
    stackT: "جعبه‌ابزاری کاربردی برای ساخت نرم‌افزار.",
    archK: "تفکر سیستمی",
    archT: "از یک درخواست تا یک سیستم قابل‌اعتماد.",
    archP:
      "یک سیستم خوب فقط مجموعه‌ای از APIها نیست؛ به مرزبندی روشن سرویس‌ها، صف‌های قابل‌اعتماد، جریان داده سنجیده، پایش‌پذیری و مسیرهای بازیابی نیاز دارد.",
    projK: "کارهای منتخب",
    projT: "محصولات و سیستم‌هایی که ساخته‌ام.",
    contactK: "در ارتباط باشیم",
    contactT: "ایده‌ای داری؟ با هم بسازیمش.",
    contactP:
      "برای گفتگوهای فنی، پرسش‌ها و ارتباط درباره پروژه‌ها از راه‌های زیر با من در تماس باش.",
    view: "مشاهده مخزن",
    call: "تماس",
    available: "در حال ساخت و بهبود مداوم",
    focus: "تمرکز مهندسی",
    footer: "کد بزن • بساز • پیشرفت کن — محمد افروزه / TECHCODE",
  },
};

export const MODERN_TECH_STACK = [
  {
    name: "TypeScript",
    icon: SiTypescript,
    category: "LANGUAGE",
    color: "#3178C6",
    description:
      "Clear contracts and maintainable code for dependable full-stack systems.",
  },
  {
    name: "Node.js",
    icon: SiNodedotjs,
    category: "BACKEND",
    color: "#339933",
    description:
      "Backend services and APIs designed around clear responsibilities and reliable execution.",
  },
  {
    name: "Bun",
    icon: SiBun,
    category: "RUNTIME",
    color: "#FBF0DF",
    description:
      "A modern JavaScript runtime and toolkit for fast development workflows.",
  },
  {
    name: "React",
    icon: SiReact,
    category: "FRONTEND",
    color: "#61DAFB",
    description:
      "Interactive interfaces built with reusable components and thoughtful state design.",
  },
  {
    name: "Redis",
    icon: SiRedis,
    category: "DATA / QUEUES",
    color: "#DC382D",
    description:
      "Caching, coordination and queue-backed workflows for responsive applications.",
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
    category: "DATABASE",
    color: "#47A248",
    description:
      "Document-oriented data modeling for flexible application domains.",
  },
];
