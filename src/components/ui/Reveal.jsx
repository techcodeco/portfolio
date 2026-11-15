"use client";

import { m, useReducedMotion } from "framer-motion";

export default function Reveal({ children }) {
  const reduce = useReducedMotion();

  return (
    <m.div
      initial={reduce ? false : { opacity: 0, y: 60 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={reduce ? { duration: 0 } : { duration: 0.75, ease: "easeOut" }}
    >
      {children}
    </m.div>
  );
}
