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
