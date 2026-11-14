"use client";

import Link from "next/link";
import { Menu, Moon, Sun, X } from "lucide-react";

export default function SiteHeader({
  menu,
  setMenu,
  lang,
  dark,
  setDark,
  t,
  onNavigate,
}) {
  const sectionIds = ["about", "stack", "architecture", "projects", "contact"];

  return (
    <header className="header">
      <nav className="nav glass">
        <button className="brand" onClick={() => onNavigate("home")}>
          <span className="brandbox">&lt;/&gt;</span>
          <span>TECHCODECO</span>
        </button>
        <div className={"links " + (menu ? "open" : "")}>
          {t.nav.map((label, index) => (
            <button key={label} onClick={() => onNavigate(sectionIds[index])}>
              {label}
            </button>
          ))}
        </div>
        <div className="navtools">
          <Link
            href={lang === "en" ? "/fa" : "/"}
            className="small"
            hrefLang={lang === "en" ? "fa" : "en"}
            aria-label={lang === "en" ? "Switch to Persian" : "Switch to English"}
          >
            {lang === "en" ? "FA" : "EN"}
          </Link>
          <button
            onClick={() => setDark(!dark)}
            className="round"
            aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}
          >
            {dark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button
            onClick={() => setMenu(!menu)}
            className="round mobile"
            aria-label={menu ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menu}
          >
            {menu ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>
    </header>
  );
}
