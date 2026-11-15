"use client";

import { cloneElement } from "react";
import { m } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function Social({ icon, label, href }) {
  const external = /^https?:\/\//i.test(href);

  return (
    <m.a
      className="social"
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      aria-label={label}
      whileHover={{ y: -5 }}
    >
      {icon
        ? cloneElement(icon, { "aria-hidden": true, focusable: false })
        : null}
      <strong>{label}</strong>
      <ArrowUpRight size={15} aria-hidden="true" focusable="false" />
    </m.a>
  );
}
