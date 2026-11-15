"use client";

import { Command } from "lucide-react";

export default function TerminalLauncher({ onOpen }) {
  return (
    <div className="terminal-launch">
      <span className="terminal-label" aria-hidden="true">
        TECHCODE TERMINAL
      </span>
      <button className="easter" onClick={onOpen} aria-label="TECHCODE Terminal">
        <Command size={15} />
      </button>
    </div>
  );
}
