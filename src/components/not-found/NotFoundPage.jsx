import Link from "next/link";
import {
  ArrowUpRight,
  Braces,
  Code2,
  Home,
  Terminal,
} from "lucide-react";
import BackButton from "@/components/not-found/BackButton";
import ReportProblemLink from "@/components/errors/ReportProblemLink";

const COPY = {
  en: {
    home: "/",
    homeAriaLabel: "TECHCODE homepage",
    eyebrow: "ROUTE EXCEPTION // 404",
    title: "Looks like you took",
    highlight: "a wrong turn.",
    description:
      "The page you're looking for isn't here. It may have moved, been renamed, or never existed in this build.",
    homeLabel: "Back to homepage",
    backLabel: "Go back",
    statusLabel: "SYSTEM STATUS",
    statusValue: "ROUTE NOT FOUND",
    terminalTitle: "route-resolver.ts",
    terminalLines: [
      ["const", " route = ", '"requested-page"', ";"],
      ["const", " page = await ", "resolve", "(route);"],
      ["if", " (!page) {"],
      ["  ", "throw ", "new NotFoundError", "(404);"],
      ["}"],
    ],
    terminalOutput: "// no matching route in this universe",
    footerLeft: "MOHAMMAD AFROUZEH",
    footerCenter: "DESIGNED BY TECHCODE",
    footerRight: "ALL SYSTEMS NOMINAL",
    visualTop: "REQUEST TRACE",
    visualBottom: "END OF TRACE",
  },
  fa: {
    home: "/fa",
    homeAriaLabel: "صفحه اصلی TECHCODE",
    eyebrow: "خطای مسیر // 404",
    title: "این صفحه در",
    highlight: "نقشه ما نیست.",
    description:
      "صفحه‌ای که دنبالش هستی پیدا نشد. ممکن است آدرس آن تغییر کرده باشد یا چنین صفحه‌ای وجود نداشته باشد.",
    homeLabel: "بازگشت به صفحه اصلی",
    backLabel: "صفحه قبلی",
    statusLabel: "وضعیت سیستم",
    statusValue: "مسیر پیدا نشد",
    terminalTitle: "route-resolver.ts",
    terminalLines: [
      ["const", " route = ", '"requested-page"', ";"],
      ["const", " page = await ", "resolve", "(route);"],
      ["if", " (!page) {"],
      ["  ", "throw ", "new NotFoundError", "(404);"],
      ["}"],
    ],
    terminalOutput: "// مسیر درخواستی در این پروژه پیدا نشد",
    footerLeft: "محمد افروزه",
    footerCenter: "طراحی‌شده توسط TECHCODE",
    footerRight: "وضعیت سیستم: عادی",
    visualTop: "ردیابی درخواست",
    visualBottom: "پایان ردیابی",
  },
};

function CodeLine({ parts }) {
  return (
    <div className="nf-code-line">
      {parts.map((part, index) => {
        const type = ["const", "if", "throw", "new"].includes(part)
          ? "keyword"
          : part.startsWith('"')
            ? "string"
            : ["resolve", "NotFoundError"].includes(part)
              ? "function"
              : "plain";

        return (
          <span className={`nf-syntax-${type}`} key={`${part}-${index}`}>
            {part}
          </span>
        );
      })}
    </div>
  );
}

export default function NotFoundPage({ locale = "en" }) {
  const isPersian = locale === "fa";
  const copy = COPY[isPersian ? "fa" : "en"];

  return (
    <main className="notfound-page" dir={isPersian ? "rtl" : "ltr"}>
      <div className="nf-ambient nf-ambient-one" aria-hidden="true" />
      <div className="nf-ambient nf-ambient-two" aria-hidden="true" />
      <div className="nf-background-grid" aria-hidden="true" />

      <div className="nf-container">
        <header className="nf-header">
          <Link className="nf-brand" href={copy.home} aria-label={copy.homeAriaLabel}>
            <span className="nf-brand-mark">&lt;/&gt;</span>
            <span className="nf-brand-name">TECHCODE</span>
          </Link>

          <div className="nf-status-pill">
            <span className="nf-status-dot" />
            <span>{copy.statusLabel}</span>
            <b>404</b>
          </div>
        </header>

        <section className="nf-panel glass" aria-labelledby="nf-title">
          <div className="nf-copy">
            <div className="nf-eyebrow">
              <span className="nf-eyebrow-mark">//</span>
              {copy.eyebrow}
            </div>

            <div className="nf-error-code" aria-hidden="true">
              <span>4</span>
              <span className="nf-error-zero">0</span>
              <span>4</span>
            </div>

            <h1 id="nf-title">
              {copy.title} <span>{copy.highlight}</span>
            </h1>
            <p className="nf-description">{copy.description}</p>

            <div className="nf-actions">
              <Link className="nf-button nf-button-primary" href={copy.home}>
                <Home size={17} aria-hidden="true" />
                <span>{copy.homeLabel}</span>
                <ArrowUpRight className="nf-button-arrow" size={16} aria-hidden="true" />
              </Link>
              <BackButton locale={locale} label={copy.backLabel} homeHref={copy.home} />
              <ReportProblemLink locale={locale} code="404" />
            </div>

            <div className="nf-small-note">
              <span className="nf-note-icon">i</span>
              <span>{copy.statusValue}</span>
              <span className="nf-note-separator">/</span>
              <span>HTTP 404</span>
            </div>
          </div>

          <div className="nf-visual" aria-hidden="true">
            <div className="nf-visual-orbit nf-orbit-one" />
            <div className="nf-visual-orbit nf-orbit-two" />
            <div className="nf-visual-cross nf-cross-one" />
            <div className="nf-visual-cross nf-cross-two" />

            <div className="nf-visual-caption nf-caption-top">
              <span className="nf-caption-dot" />
              {copy.visualTop}
            </div>

            <div className="nf-404-graphic">
              <span>4</span>
              <span className="nf-404-zero">0</span>
              <span>4</span>
            </div>

            <div className="nf-terminal glass">
              <div className="nf-terminal-head">
                <div className="nf-terminal-lights">
                  <i />
                  <i />
                  <i />
                </div>
                <span>{copy.terminalTitle}</span>
                <Terminal size={14} />
              </div>
              <div className="nf-terminal-code">
                {copy.terminalLines.map((parts, index) => (
                  <CodeLine key={index} parts={parts} />
                ))}
                <div className="nf-terminal-output">{copy.terminalOutput}</div>
              </div>
              <div className="nf-terminal-foot">
                <span><i /> {copy.statusValue}</span>
                <span>404</span>
              </div>
            </div>

            <div className="nf-float-chip nf-chip-code">
              <Code2 size={16} />
              <span>404.EXCEPTION</span>
            </div>
            <div className="nf-float-chip nf-chip-braces">
              <Braces size={19} />
            </div>

            <div className="nf-visual-caption nf-caption-bottom">
              {copy.visualBottom}
              <span className="nf-caption-line" />
            </div>
          </div>
        </section>

        <footer className="nf-footer">
          <span>{copy.footerLeft}</span>
          <span>{copy.footerCenter}</span>
          <span>{copy.footerRight}</span>
        </footer>
      </div>
    </main>
  );
}
