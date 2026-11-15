"use client";

import { useEffect, useState } from "react";

/**
 * Loads non-essential canvas/cursor enhancements after the first render has
 * settled. The effects are preserved; only their startup work is deferred.
 */
export default function DeferredVisualEffects() {
  const [Effects, setEffects] = useState(null);

  useEffect(() => {
    // Cursor and matrix canvas are desktop-only enhancements. Do not even
    // download their chunks on coarse-pointer devices (phones/tablets).
    if (window.matchMedia("(pointer: coarse)").matches) return undefined;

    let cancelled = false;
    let idleId = null;
    let fallbackTimer = null;

    const loadEffects = async () => {
      try {
        const [canvasModule, cursorModule] = await Promise.all([
          import("@/components/effects/CodeCanvas"),
          import("@/components/effects/Cursor"),
        ]);
        if (!cancelled) {
          setEffects({
            CodeCanvas: canvasModule.default,
            Cursor: cursorModule.default,
          });
        }
      } catch {
        // Decorative effects are optional; the page remains fully usable.
      }
    };

    if (typeof window.requestIdleCallback === "function") {
      idleId = window.requestIdleCallback(loadEffects, { timeout: 1800 });
    } else {
      fallbackTimer = window.setTimeout(loadEffects, 650);
    }

    return () => {
      cancelled = true;
      if (idleId !== null) window.cancelIdleCallback?.(idleId);
      if (fallbackTimer !== null) window.clearTimeout(fallbackTimer);
    };
  }, []);

  if (!Effects) return null;
  const { CodeCanvas, Cursor } = Effects;
  return (
    <>
      <CodeCanvas />
      <Cursor />
    </>
  );
}
