"use client";

import { useEffect, useMemo, useState } from "react";
import { m, useReducedMotion } from "framer-motion";
import { Terminal } from "lucide-react";
import { CODE_SAMPLES } from "@/data/code-samples";

export default function CodeEditor() {
  const [mode, setMode] = useState("ts");
  const [typed, setTyped] = useState(0);
  const reduceMotion = useReducedMotion();
  const sample = CODE_SAMPLES[mode];

  // محاسبه متن کامل برای شمارش کاراکترها
  const fullText = useMemo(() => {
    return sample.lines.map((line) => (line.type === "newline" ? "\n" : line.text || "")).join("");
  }, [sample]);

  useEffect(() => {
    if (reduceMotion) {
      setTyped(fullText.length);
      return undefined;
    }

    setTyped(0);
    const interval = window.setInterval(() => {
      setTyped((prev) => {
        if (prev >= fullText.length) {
          window.clearInterval(interval);
          return prev;
        }
        const next = prev + 1;
        if (next >= fullText.length) window.clearInterval(interval);
        return next;
      });
    }, 15);
    return () => window.clearInterval(interval);
  }, [mode, fullText, reduceMotion]);

  // رندر خطوط با هایلایت و تایپ‌رایتر
  const renderLines = () => {
    let charCount = 0;
    const elements = [];

    sample.lines.forEach((line, index) => {
      if (line.type === "newline") {
        if (charCount < typed) elements.push(<br key={`br-${index}`} />);
        charCount += 1;
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
    <m.div
      initial={reduceMotion ? false : { opacity: 0, x: 40, rotate: 2 }}
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
    </m.div>
  );
}
