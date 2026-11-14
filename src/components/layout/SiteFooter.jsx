"use client";

export default function SiteFooter({ text, onNavigate }) {
  return (
    <footer>
      <div className="container footer">
        <span>© {new Date().getFullYear()} TechCodeCo</span>
        <span>{text}</span>
        <button onClick={() => onNavigate("home")}>↑</button>
      </div>
    </footer>
  );
}
