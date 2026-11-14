"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function Cursor() {
  const x = useMotionValue(-100),
    y = useMotionValue(-100),
    sx = useSpring(x, { stiffness: 500, damping: 40 }),
    sy = useSpring(y, { stiffness: 500, damping: 40 });
  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const f = (e) => {
      x.set(e.clientX - 9);
      y.set(e.clientY - 9);
    };
    window.addEventListener("pointermove", f, { passive: true });
    return () => window.removeEventListener("pointermove", f);
  }, [x, y]);
  return <motion.div className="cursor" style={{ x: sx, y: sy }} />;
}
