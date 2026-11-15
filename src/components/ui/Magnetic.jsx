"use client";

import { m } from "framer-motion";

export default function Magnetic({ children, primary = false, href, onClick }) {
  return (
    <m.a
      href={href}
      role={!href ? "button" : undefined}
      tabIndex={!href ? 0 : undefined}
      onClick={onClick}
      onKeyDown={
        !href
          ? (event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                onClick?.();
              }
            }
          : undefined
      }
      target={href ? "_blank" : undefined}
      rel={href ? "noreferrer" : undefined}
      className={"mag " + (primary ? "primary" : "")}
      whileHover={{ scale: 1.04, y: -3 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </m.a>
  );
}
