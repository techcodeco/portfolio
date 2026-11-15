"use client";

import { m } from "framer-motion";

export default function ScrollProgress({ progress }) {
  return <m.div className="scrollbar" style={{ scaleX: progress }} />;
}
