"use client";

import { useEffect } from "react";
import { m, useMotionValue, useSpring, useReducedMotion } from "framer-motion";

export default function Cursor() {
  const reduce = useReducedMotion();
  const x = useMotionValue(-100),
    y = useMotionValue(-100),
    sx = useSpring(x, { stiffness: 500, damping: 40 }),
    sy = useSpring(y, { stiffness: 500, damping: 40 });
  useEffect(() => {
    if (reduce || window.matchMedia("(pointer: coarse)").matches) return;
    const f = (e) => {
      x.set(e.clientX - 9);
      y.set(e.clientY - 9);
    };
    window.addEventListener("pointermove", f, { passive: true });
    return () => window.removeEventListener("pointermove", f);
  }, [reduce, x, y]);
  if (reduce) return null;
  return <m.div className="cursor" style={{ x: sx, y: sy }} aria-hidden="true" />;
}
