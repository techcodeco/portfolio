"use client";

export default function SiteFooter({ text, onNavigate }) {
  return (
    <footer>
      <div className="container footer">
        <span>© {new Date().getFullYear()} TECHCODE</span>
        <span>{text}</span>
        <button type="button" onClick={() => onNavigate("home")} aria-label="Back to top">↑</button>
      </div>
    </footer>
  );
}
