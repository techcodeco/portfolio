"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import { TERMINAL_TECH } from "@/data/terminal-data";

export default function TerminalModal({ close }) {
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
        "  cd <path>       enter stack or about",
        "  pwd             print current path",
        "  cat <field>     read a stack skill or profile field",
        "  tree            show TECHCODE profile tree",
        "  whoami          show developer profile",
        "  time            show current system time",
        "  neofetch        show TECHCODE profile summary",
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
        cwd[0] === "stack"
          ? techNames.map((n) => `${n}.skill`)
          : cwd[0] === "about"
            ? ["name", "role", "brand", "focus", "github"]
            : ["stack/", "about/"];
    else if (op === "cd") {
      const target = (arg || "/").replace(/^\//, "").split("/").filter(Boolean);
      if (!arg || arg === "/" || arg === "~") setCwd([]);
      else if (arg === "..") setCwd(cwd.slice(0, -1));
      else if (
        (target[0] === "stack" || target[0] === "about") &&
        target.length === 1
      )
        setCwd(target);
      else out = [`cd: no such path: ${arg}`];
    } else if (op === "cat") {
      if (cwd[0] === "about") {
        const profile = {
          name: "Mohammad Afrouzeh",
          role: "Full-Stack Developer | Backend Engineer",
          brand: "TECHCODE — Code • Build • Level Up",
          focus: "TypeScript, Node.js, APIs and modular architecture",
          github: "https://github.com/techcodeco",
        };
        const value = profile[arg.toLowerCase()];
        out = value ? [value] : ["cat: profile field not found. Try ls"];
      } else if (cwd[0] !== "stack") {
        out = ["cat: enter /stack or /about first. Try: cd stack"];
      } else {
        const key = arg.toLowerCase().replace(/\.skill$/, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
        const t = TERMINAL_TECH[key];
        out = t
          ? [
              `${t.name}.skill`,
              `category : ${t.category}`,
              "status   : part of my technology stack",
            ]
          : ["cat: technology not found. Try ls"];
      }
    } else if (op === "whoami")
      out = [
        "Mohammad Afrouzeh",
        "Full-Stack Developer | Backend Engineer",
        "Brand: TECHCODE",
        "Focus: TypeScript, Node.js, APIs and modular architecture",
        "github: github.com/techcodeco",
      ];
    else if (op === "time")
      out = [new Date().toLocaleString(undefined, { hour12: false })];
    else if (op === "neofetch")
      out = [
        "TECHCODE shell v1.0",
        "────────────────────────",
        "BRAND    TECHCODE",
        "USER     Mohammad Afrouzeh",
        "SHELL    portfolio-terminal",
        "ROLE     Full-Stack Developer",
        `STACK    ${techNames.length} technologies`,
        "FOCUS    Backend + APIs",
        "STATUS   PROFILE READY",
        "MODE     BUILD / SHIP / LEVEL UP",
      ];
    else if (op === "tree")
      out = [
        "/root",
        "├── stack/",
        "│   ├── " +
          techNames
            .slice(0, 5)
            .map((n) => n + ".skill")
            .join("\n│   ├── "),
        "│   └── ...",
        "└── about/",
        "    ├── name",
        "    ├── role",
        "    ├── brand",
        "    ├── focus",
        "    └── github",
      ];
    else if (op === "find")
      out = techNames
        .filter((n) => n.toLowerCase().includes(arg.toLowerCase()))
        .map((n) => `/stack/${n}.skill`);
    else if (op === "echo") out = [arg];
    else out = [`${op}: command not found. Type 'help'.`];
    setHistory((h) => [...h, { cmd, out, path }]);
    setInput("");
    requestAnimationFrame(() => {
      if (screenRef.current)
        screenRef.current.scrollTop = screenRef.current.scrollHeight;
    });
  };
  useEffect(() => {
    inputRef.current?.focus();
    const handleKeyDown = (event) => {
      if (event.key === "Escape") close();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [close]);
  return (
    <motion.div
      className="modal terminal-modal"
      dir="ltr"
      role="presentation"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={close}
    >
      <motion.div
        className="body-terminal"
        dir="ltr"
        role="dialog"
        aria-modal="true"
        aria-label="TECHCODE portfolio terminal"
        initial={{ scale: 0.92, y: 25 }}
        animate={{ scale: 1, y: 0 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="terminal-head" dir="ltr">
          <div className="terminal-title">
            <span className="pulse" /> TECHCODE <b>::</b> portfolio-terminal
          </div>
          <div className="terminal-vitals">
            <span>BUILD / SHIP / LEVEL UP</span>
            <span>USER techcodeco</span>
            <button onClick={close} type="button" aria-label="Close terminal">
              <X size={15} />
            </button>
          </div>
        </div>
        <div
          className="terminal-screen"
          dir="ltr"
          ref={screenRef}
          onClick={() => inputRef.current?.focus()}
        >
          <div className="bootline">
            TECHCODE shell v1.0 — terminal initialized
          </div>
          <div className="bootline">
            profile loaded · technology stack mounted · ready for commands
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
              dir="ltr"
            />
          </div>
        </div>
        <div className="terminal-footer" dir="ltr">
          <span>TECHCODE shell</span>
          <span>stack {techNames.length} technologies</span>
          <span>system online</span>
          <span>TECHCODE neon theme</span>
        </div>
      </motion.div>
    </motion.div>
  );
}
