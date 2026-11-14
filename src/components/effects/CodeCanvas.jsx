"use client";

import { useEffect, useRef } from "react";

export default function CodeCanvas() {
  const ref = useRef(null);
  useEffect(() => {
    const canvas = ref.current;
    const hero = document.getElementById("home");
    if (
      !canvas ||
      !hero ||
      window.matchMedia("(pointer: coarse)").matches ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    )
      return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let raf = 0;
    let running = false;
    let last = 0;
    let drops = [];
    const chars = "01{}[]<>/const async await => redis node bun";
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);

    const resize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      drops = Array.from(
        { length: Math.min(42, Math.floor(w / 42)) },
        () => Math.random() * h,
      );
    };

    const draw = (time) => {
      if (!running) return;
      if (time - last < 48) {
        raf = requestAnimationFrame(draw);
        return;
      }
      last = time;
      const w = window.innerWidth;
      const h = window.innerHeight;
      ctx.clearRect(0, 0, w, h);
      ctx.font = "10px monospace";
      ctx.fillStyle =
        getComputedStyle(document.body).getPropertyValue("--matrix").trim() ||
        "rgba(40,215,255,.13)";
      drops.forEach((y, i) => {
        ctx.fillText(chars[(Math.random() * chars.length) | 0], i * 42, y);
        drops[i] = y > h + 100 ? Math.random() * -300 : y + 0.55;
      });
      raf = requestAnimationFrame(draw);
    };

    const setRunning = (next) => {
      if (running === next) return;
      running = next;
      if (running) {
        last = 0;
        cancelAnimationFrame(raf);
        raf = requestAnimationFrame(draw);
      } else {
        cancelAnimationFrame(raf);
        ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      }
    };

    resize();
    const onResize = () => resize();
    window.addEventListener("resize", onResize, { passive: true });

    let observer;
    if (typeof IntersectionObserver !== "undefined") {
      observer = new IntersectionObserver(
        ([entry]) => setRunning(entry.isIntersecting),
        { threshold: 0.01 },
      );
      observer.observe(hero);
    } else {
      setRunning(true);
    }

    return () => {
      setRunning(false);
      observer?.disconnect();
      window.removeEventListener("resize", onResize);
    };
  }, []);
  return <canvas ref={ref} className="matrix" aria-hidden="true" />;
}
