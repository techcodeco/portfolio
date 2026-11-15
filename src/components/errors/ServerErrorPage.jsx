"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Home, RefreshCw, Terminal } from "lucide-react";
import ReportProblemLink from "@/components/errors/ReportProblemLink";

const COPY = {
  en: {
    home: "/",
    eyebrow: "SERVER EXCEPTION // 500",
    title: "Something went",
    highlight: "off-script.",
    description: "An unexpected server error interrupted this request. You can try again or report the issue to the site owner.",
    homeLabel: "Back to homepage",
    retryLabel: "Try again",
    statusLabel: "SYSTEM STATUS",
    statusValue: "REQUEST INTERRUPTED",
    terminalTitle: "server-runtime.ts",
    terminalOutput: "// unexpected exception caught by boundary",
    footerLeft: "MOHAMMAD AFROUZEH",
    footerCenter: "DESIGNED BY TECHCODE",
    footerRight: "RECOVERY AVAILABLE",
    visualTop: "ERROR TRACE",
    visualBottom: "END OF TRACE",
  },
  fa: {
    home: "/fa",
    eyebrow: "خطای سرور // 500",
    title: "در اجرای درخواست",
    highlight: "مشکلی رخ داد.",
    description: "یک خطای پیش‌بینی‌نشده در سرور، اجرای این درخواست را متوقف کرد. می‌توانی دوباره تلاش کنی یا مشکل را برای بررسی گزارش بدهی.",
    homeLabel: "بازگشت به صفحه اصلی",
    retryLabel: "تلاش دوباره",
    statusLabel: "وضعیت سیستم",
    statusValue: "درخواست متوقف شد",
    terminalTitle: "server-runtime.ts",
    terminalOutput: "// خطای پیش‌بینی‌نشده توسط مرز خطا دریافت شد",
    footerLeft: "محمد افروزه",
    footerCenter: "طراحی‌شده توسط TECHCODE",
    footerRight: "امکان بازیابی وجود دارد",
    visualTop: "ردیابی خطا",
    visualBottom: "پایان ردیابی",
  },
};

export default function ServerErrorPage({ locale = "en", error, reset }) {
  const [activeLocale, setActiveLocale] = useState(locale === "auto" ? "en" : locale);
  useEffect(() => {
    if (locale !== "auto") return;
    const detectedLocale = window.location.pathname.startsWith("/fa") ? "fa" : "en";
    setActiveLocale(detectedLocale);
    document.documentElement.lang = detectedLocale === "fa" ? "fa" : "en";
    document.documentElement.dir = detectedLocale === "fa" ? "rtl" : "ltr";
  }, [locale]);

  const isPersian = activeLocale === "fa";
  const copy = COPY[isPersian ? "fa" : "en"];
  const digest = typeof error?.digest === "string" ? error.digest : "";

  const retry = () => {
    if (typeof reset === "function") reset();
    else window.location.reload();
  };

  return (
    <main className="notfound-page" dir={isPersian ? "rtl" : "ltr"}>
      <div className="nf-ambient nf-ambient-one" aria-hidden="true" />
      <div className="nf-ambient nf-ambient-two" aria-hidden="true" />
      <div className="nf-background-grid" aria-hidden="true" />
      <div className="nf-container">
        <header className="nf-header">
          <Link className="nf-brand" href={copy.home} aria-label="TECHCODE">
            <span className="nf-brand-mark">&lt;/&gt;</span>
            <span className="nf-brand-name">TECHCODE</span>
          </Link>
          <div className="nf-status-pill">
            <span className="nf-status-dot" />
            <span>{copy.statusLabel}</span>
            <b>500</b>
          </div>
        </header>

        <section className="nf-panel glass nf-server-panel" aria-labelledby="nf-server-title">
          <div className="nf-copy">
            <div className="nf-eyebrow"><span className="nf-eyebrow-mark">//</span>{copy.eyebrow}</div>
            <div className="nf-error-code nf-server-code" aria-hidden="true">
              <span>5</span><span className="nf-error-zero">0</span><span>0</span>
            </div>
            <h1 id="nf-server-title">{copy.title} <span>{copy.highlight}</span></h1>
            <p className="nf-description">{copy.description}</p>
            <div className="nf-actions">
              <button className="nf-button nf-button-primary" onClick={retry} type="button">
                <RefreshCw size={17} aria-hidden="true" />
                <span>{copy.retryLabel}</span>
              </button>
              <Link className="nf-button nf-button-secondary" href={copy.home}>
                <Home size={17} aria-hidden="true" />
                <span>{copy.homeLabel}</span>
                <ArrowUpRight className="nf-button-arrow" size={16} aria-hidden="true" />
              </Link>
              <ReportProblemLink locale={isPersian ? "fa" : "en"} code="500" digest={digest} />
            </div>
            <div className="nf-small-note">
              <span className="nf-note-icon">i</span>
              <span>{copy.statusValue}</span>
              <span className="nf-note-separator">/</span>
              <span>{digest ? `REF ${digest}` : "HTTP 500"}</span>
            </div>
          </div>

          <div className="nf-visual" aria-hidden="true">
            <div className="nf-visual-orbit nf-orbit-one" />
            <div className="nf-visual-orbit nf-orbit-two" />
            <div className="nf-visual-cross nf-cross-one" />
            <div className="nf-visual-cross nf-cross-two" />
            <div className="nf-visual-caption nf-caption-top"><span className="nf-caption-dot" />{copy.visualTop}</div>
            <div className="nf-404-graphic nf-500-graphic"><span>5</span><span className="nf-404-zero">0</span><span>0</span></div>
            <div className="nf-terminal glass">
              <div className="nf-terminal-head">
                <div className="nf-terminal-lights"><i /><i /><i /></div>
                <span>{copy.terminalTitle}</span>
                <Terminal size={14} />
              </div>
              <div className="nf-terminal-code">
                <div className="nf-code-line"><span className="nf-syntax-keyword">try</span><span className="nf-syntax-plain"> {'{'} await handleRequest(); {'}'}</span></div>
                <div className="nf-code-line"><span className="nf-syntax-keyword">catch</span><span className="nf-syntax-plain"> (error) {'{'}</span></div>
                <div className="nf-code-line"><span className="nf-syntax-plain">  report(error.digest);</span></div>
                <div className="nf-code-line"><span className="nf-syntax-plain">  recover();</span></div>
                <div className="nf-code-line"><span className="nf-syntax-plain">{'}'}</span></div>
                <div className="nf-terminal-output">{copy.terminalOutput}</div>
              </div>
              <div className="nf-terminal-foot"><span><i /> {copy.statusValue}</span><span>500</span></div>
            </div>
            <div className="nf-visual-caption nf-caption-bottom">{copy.visualBottom}<span className="nf-caption-line" /></div>
          </div>
        </section>
        <footer className="nf-footer"><span>{copy.footerLeft}</span><span>{copy.footerCenter}</span><span>{copy.footerRight}</span></footer>
      </div>
    </main>
  );
}
