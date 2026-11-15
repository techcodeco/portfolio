"use client";

import { useEffect, useRef } from "react";
const hexToRgb = (hex) => {
  const clean = String(hex).replace("#", "").trim();
  if (!/^[0-9a-fA-F]{6}$/.test(clean)) return null;
  return {
    r: parseInt(clean.slice(0, 2), 16),
    g: parseInt(clean.slice(2, 4), 16),
    b: parseInt(clean.slice(4, 6), 16),
  };
};
const mixRgb = (from, to, amount) => ({
  r: Math.round(from.r + (to.r - from.r) * amount),
  g: Math.round(from.g + (to.g - from.g) * amount),
  b: Math.round(from.b + (to.b - from.b) * amount),
});
const rgbToCss = (rgb) => `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;
const clamp = (value, min, max) => Math.min(Math.max(value, min), max);
const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

const resolveFontSize = (value, container, fontWeight, fontFamily) => {
  if (typeof value === "number") return value;
  const probe = document.createElement("span");
  probe.textContent = "M";
  Object.assign(probe.style, {
    position: "absolute",
    visibility: "hidden",
    pointerEvents: "none",
    fontSize: value,
    fontWeight: String(fontWeight),
    fontFamily,
  });
  container.appendChild(probe);
  const size = parseFloat(window.getComputedStyle(probe).fontSize) || 96;
  probe.remove();
  return size;
};

const waitForFonts = async (font) => {
  if (!("fonts" in document)) return;
  try {
    await document.fonts.load(font);
  } catch {}
  await document.fonts.ready;
};

const ParticleText = ({
  text = "React Bits",
  particleSize = 2,
  density = 4,
  mobileText = null,
  mobileDensity = 2,
  mobileParticleSize = 2,
  mobileFontSize = null,
  color = "#ffffff",
  highlightColor = "#8b5cf6",
  scatter = 180,
  gatherDuration = 1600,
  stagger = 420,
  pointerRepel = 40,
  repelRadius = 120,
  idleDrift = 0.7,
  trigger = "mount",
  fontSize = "clamp(3rem, 12vw, 8rem)",
  fontWeight = 800,
  fontFamily = "inherit",
  glow = true,
  className = "",
  style,
  as = "div",
  direction = "auto",
}) => {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return undefined;
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return undefined;
    const ctx = canvas.getContext("2d");
    if (!ctx) return undefined;

    let particles = [],
      animationFrame = null,
      resizeFrame = null,
      buildId = 0;
    // Keep initial sampling state local to this effect instance. These values
    // are used by queueSample and must exist before ResizeObserver fires.
    let initialSampleDone = false;
    let initialSamplePending = false;
    let sampleQueuedDuringInitial = false;
    let initialIdleId = null;
    let initialFallbackId = null;
    let gathering = false,
      gatherStart = 0;
    let reducedMotion =
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;
    let width = 0,
      height = 0,
      dpr = 1;
    let isIntersecting = false;
    let isMobileViewport = window.matchMedia?.("(max-width: 700px)").matches ?? false;
    let activeIdleDrift = idleDrift;
    let activePointerRepel = pointerRepel;
    let activeScatter = scatter;
    let activeGatherDuration = gatherDuration;
    let activeStagger = stagger;
    let cachedCanvasRect = null;
    let boundsFrame = null;
    let lastRenderTime = 0;
    const pointer = { active: false, x: 0, y: 0, smoothX: 0, smoothY: 0 };

    const startGather = (fromScatter = true) => {
      if (!particles.length) return;
      const now = performance.now();
      const spread = reducedMotion ? 0 : activeScatter;
      particles.forEach((particle) => {
        if (fromScatter) {
          const angle = particle.seed * Math.PI * 2;
          const distance = spread * (0.35 + particle.depth * 0.75);
          particle.x =
            particle.targetX +
            Math.cos(angle) * distance +
            (particle.depth - 0.5) * spread * 0.55;
          particle.y =
            particle.targetY +
            Math.sin(angle) * distance +
            (particle.seed - 0.5) * spread * 0.55;
        }
        particle.startX = particle.x;
        particle.startY = particle.y;
        particle.delay = reducedMotion ? 0 : particle.seed * activeStagger;
      });
      gatherStart = now;
      gathering = true;
      ensureRenderLoop();
    };

    const drawParticle = (particle) => {
      const size = particle.size;
      ctx.fillStyle = particle.color;
      if (size <= 2.1) {
        ctx.fillRect(particle.x - size / 2, particle.y - size / 2, size, size);
        return;
      }
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, size / 2, 0, Math.PI * 2);
      ctx.fill();
    };

    const render = (now) => {
      // Mobile uses a lower frame budget. After the staggered gather finishes,
      // keep rendering until the easing-follow interpolation has fully settled;
      // otherwise mobile particles freeze short of their target positions.
      const frameInterval = isMobileViewport ? 1000 / 24 : 1000 / 60;
      if (!reducedMotion && now - lastRenderTime < frameInterval) {
        animationFrame = window.requestAnimationFrame(render);
        return;
      }
      lastRenderTime = now;
      ctx.clearRect(0, 0, width, height);
      if (glow && !reducedMotion && !isMobileViewport) {
        ctx.shadowBlur = particleSize * 3;
        ctx.shadowColor = highlightColor;
      } else ctx.shadowBlur = 0;
      pointer.smoothX += (pointer.x - pointer.smoothX) * 0.18;
      pointer.smoothY += (pointer.y - pointer.smoothY) * 0.18;
      let complete = true;
      let positionsSettled = true;
      particles.forEach((particle) => {
        let baseX = particle.targetX,
          baseY = particle.targetY,
          progress = 1;
        if (gathering) {
          const local =
            (now - gatherStart - particle.delay) /
            Math.max(1, reducedMotion ? 1 : activeGatherDuration);
          progress = clamp(local, 0, 1);
          const eased = easeOutCubic(progress);
          baseX =
            particle.startX + (particle.targetX - particle.startX) * eased;
          baseY =
            particle.startY + (particle.targetY - particle.startY) * eased;
          if (progress < 1) complete = false;
        } else if (!reducedMotion && activeIdleDrift > 0) {
          const driftTime = now * 0.001;
          baseX +=
            Math.sin(driftTime * 0.9 + particle.seed * 10) *
            activeIdleDrift *
            particle.depth;
          baseY +=
            Math.cos(driftTime * 0.75 + particle.depth * 10) *
            activeIdleDrift *
            particle.depth;
        }
        if (
          pointer.active &&
          !reducedMotion &&
          activePointerRepel > 0 &&
          repelRadius > 0
        ) {
          const dx = baseX - pointer.smoothX,
            dy = baseY - pointer.smoothY,
            distance = Math.hypot(dx, dy);
          if (distance > 0 && distance < repelRadius) {
            const force =
              Math.pow(1 - distance / repelRadius, 2) * activePointerRepel;
            baseX += (dx / distance) * force;
            baseY += (dy / distance) * force;
          }
        }
        const deltaX = baseX - particle.x;
        const deltaY = baseY - particle.y;
        if (!reducedMotion && (Math.abs(deltaX) > 0.12 || Math.abs(deltaY) > 0.12)) {
          positionsSettled = false;
        }
        // A slightly stronger mobile follow factor makes the letterforms lock
        // into a crisp shape quickly without running a permanent animation loop.
        const follow = reducedMotion ? 1 : isMobileViewport ? 0.42 : 0.22;
        particle.x += deltaX * follow;
        particle.y += deltaY * follow;
        ctx.globalAlpha = clamp(0.35 + progress * 0.65, 0, 1);
        drawParticle(particle);
      });
      ctx.globalAlpha = 1;
      ctx.shadowBlur = 0;
      if (gathering && complete) gathering = false;
      const settling = !positionsSettled;
      const needsAnotherFrame =
        !reducedMotion &&
        (gathering || settling || activeIdleDrift > 0 || (pointer.active && activePointerRepel > 0));
      animationFrame = needsAnotherFrame
        ? window.requestAnimationFrame(render)
        : null;
    };

    const ensureRenderLoop = () => {
      if (!isIntersecting || document.visibilityState === "hidden") return;
      if (animationFrame === null)
        animationFrame = window.requestAnimationFrame(render);
    };
    const stopRenderLoop = () => {
      if (animationFrame !== null) {
        window.cancelAnimationFrame(animationFrame);
        animationFrame = null;
      }
    };

    const sampleText = async () => {
      const currentBuild = ++buildId;
      const rect = container.getBoundingClientRect();
      cachedCanvasRect = rect;
      const isMobile =
        window.matchMedia?.("(max-width: 700px)").matches ?? false;
      isMobileViewport = isMobile;
      const activeText = isMobile && mobileText ? mobileText : text;
      const activeDensity = isMobile ? mobileDensity : density;
      const activeParticleSize = isMobile ? mobileParticleSize : particleSize;
      const activeFontSize =
        isMobile && mobileFontSize ? mobileFontSize : fontSize;
      width = Math.floor(rect.width);
      height = Math.floor(rect.height);
      if (width <= 0 || height <= 0) return;
      // Mobile canvas backing stores are intentionally capped lower to avoid
      // multiplying raster work on high-DPI phones. Desktop remains crisp.
      dpr = Math.min(window.devicePixelRatio || 1, isMobile ? 1.5 : 2.5);
      activeIdleDrift = isMobile ? 0 : idleDrift;
      activePointerRepel = isMobile ? 0 : pointerRepel;
      // Keep mobile text quickly readable while retaining a gentle gather animation.
      // Desktop keeps the full original scatter, duration, and stagger values.
      activeScatter = isMobile ? Math.min(scatter, 85) : scatter;
      activeGatherDuration = isMobile ? Math.min(gatherDuration, 1150) : gatherDuration;
      activeStagger = isMobile ? Math.min(stagger, 220) : stagger;
      canvas.width = Math.max(1, Math.floor(width * dpr));
      canvas.height = Math.max(1, Math.floor(height * dpr));
      canvas.style.width = "100%";
      canvas.style.height = "100%";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const computed = window.getComputedStyle(container);
      const resolvedFamily =
        fontFamily === "inherit"
          ? computed.fontFamily || "sans-serif"
          : fontFamily;
      let resolvedSize = resolveFontSize(
        activeFontSize,
        container,
        fontWeight,
        resolvedFamily,
      );
      let font = `${fontWeight} ${resolvedSize}px ${resolvedFamily}`;
      await waitForFonts(font);
      if (currentBuild !== buildId) return;

      const offscreen = document.createElement("canvas");
      const offCtx = offscreen.getContext("2d", { willReadFrequently: true });
      if (!offCtx) return;
      const content = String(activeText || " ");
      const lines = content.split(/\r?\n/).map((line) => line.trim()).filter(Boolean);
      const safeLines = lines.length ? lines : [" "];
      const maxTextWidth = width * 0.92;
      offCtx.font = font;
      let lineMetrics = safeLines.map((line) => offCtx.measureText(line));
      let measuredWidth = Math.max(
        1,
        ...lineMetrics.map((metrics) => metrics.width),
      );
      if (measuredWidth > maxTextWidth) {
        resolvedSize = Math.max(
          isMobile ? 16 : 18,
          resolvedSize * (maxTextWidth / measuredWidth),
        );
        font = `${fontWeight} ${resolvedSize}px ${resolvedFamily}`;
        await waitForFonts(font);
        if (currentBuild !== buildId) return;
        offCtx.font = font;
        lineMetrics = safeLines.map((line) => offCtx.measureText(line));
        measuredWidth = Math.max(
          1,
          ...lineMetrics.map((metrics) => metrics.width),
        );
      }
      const ascent = Math.ceil(
        Math.max(
          ...lineMetrics.map(
            (metrics) => metrics.actualBoundingBoxAscent || resolvedSize * 0.78,
          ),
        ),
      );
      const descent = Math.ceil(
        Math.max(
          ...lineMetrics.map(
            (metrics) => metrics.actualBoundingBoxDescent || resolvedSize * 0.22,
          ),
        ),
      );
      const padding = Math.max(12, Math.ceil(resolvedSize * 0.08));
      // Persian glyphs can extend farther vertically than Latin glyphs.
      // Extra line separation prevents adjacent particle rows from merging.
      const lineHeight = Math.ceil(
        safeLines.length > 1
          ? Math.max(resolvedSize * 1.46, ascent + descent + resolvedSize * 0.12)
          : resolvedSize * 1.12,
      );
      const visualWidth = Math.max(
        1,
        ...lineMetrics.map((metrics) =>
          Math.max(
            metrics.width,
            (metrics.actualBoundingBoxLeft || 0) +
              (metrics.actualBoundingBoxRight || metrics.width),
          ),
        ),
      );
      const textWidth = Math.ceil(visualWidth);
      const textHeight = Math.max(
        1,
        ascent + descent + (safeLines.length - 1) * lineHeight,
      );
      offscreen.width = textWidth + padding * 2;
      offscreen.height = textHeight + padding * 2;
      offCtx.clearRect(0, 0, offscreen.width, offscreen.height);
      offCtx.font = font;
      const resolvedDirection =
        direction === "auto" ? window.getComputedStyle(container).direction : direction;
      offCtx.direction = resolvedDirection === "rtl" ? "rtl" : "ltr";
      offCtx.textAlign = "center";
      offCtx.textBaseline = "alphabetic";
      offCtx.fillStyle = "#fff";
      safeLines.forEach((line, lineIndex) => {
        offCtx.fillText(
          line,
          offscreen.width / 2,
          padding + ascent + lineIndex * lineHeight,
        );
      });
      const imageData = offCtx.getImageData(
          0,
          0,
          offscreen.width,
          offscreen.height,
        ),
        targets = [];
      // Use a full-pixel mobile sampling grid so thin Persian joins and Latin
      // stems are not lost between sparse two-pixel sample columns.
      const step = isMobile ? 1 : Math.max(1, Math.floor(activeDensity));
      for (let y = 0; y < offscreen.height; y += step)
        for (let x = 0; x < offscreen.width; x += step) {
          const alpha = imageData.data[(y * offscreen.width + x) * 4 + 3];
          if (alpha > (isMobile ? 28 : 40))
            targets.push({
              x: width / 2 - offscreen.width / 2 + x,
              y: height / 2 - offscreen.height / 2 + y,
              alpha: alpha / 255,
            });
        }
      // A denser sampling cap keeps the particle typography crisp on high-DPI screens.
      // Rendering is paused outside the hero viewport to avoid wasting main-thread time.
      // The 1px mobile scan preserves thin joins and counters in both Persian
      // and Latin text. A viewport-aware cap bounds the temporary animation cost.
      const maxParticles = isMobile
        ? Math.min(5200, Math.max(3600, Math.floor(width * 14)))
        : 12000;
      const stride = Math.max(1, Math.ceil(targets.length / maxParticles));
      const baseRgb = hexToRgb(color),
        highlightRgb = hexToRgb(highlightColor);
      particles = targets
        .filter((_, index) => index % stride === 0)
        .map((target, index) => {
          const seed = ((index * 9301 + 49297) % 233280) / 233280;
          const depth = 0.45 + (((index * 233 + 97) % 1000) / 1000) * 0.9;
          const blend =
            baseRgb && highlightRgb
              ? clamp(target.x / Math.max(1, width) + (seed - 0.5) * 0.35, 0, 1)
              : 0;
          const particleColor =
            baseRgb && highlightRgb
              ? rgbToCss(mixRgb(baseRgb, highlightRgb, blend))
              : color;
          const angle = seed * Math.PI * 2;
          const distance =
            (reducedMotion ? 0 : activeScatter) * (0.35 + depth * 0.75);
          const startX =
            target.x +
            Math.cos(angle) * distance +
            (seed - 0.5) * activeScatter * 0.45;
          const startY =
            target.y +
            Math.sin(angle) * distance +
            (depth - 0.9) * activeScatter * 0.45;
          return {
            x: reducedMotion ? target.x : startX,
            y: reducedMotion ? target.y : startY,
            startX,
            startY,
            targetX: target.x,
            targetY: target.y,
            size: Math.max(
              0.6,
              activeParticleSize * (0.75 + target.alpha * 0.45),
            ),
            color: particleColor,
            seed,
            depth,
            delay: seed * activeStagger,
          };
        });
      pointer.x = width / 2;
      pointer.y = height / 2;
      pointer.smoothX = pointer.x;
      pointer.smoothY = pointer.y;
      if (reducedMotion) {
        particles.forEach((p) => {
          p.x = p.targetX;
          p.y = p.targetY;
          p.startX = p.targetX;
          p.startY = p.targetY;
          p.delay = 0;
        });
        gathering = false;
      } else startGather(false);
      ensureRenderLoop();
    };

    const queueSample = () => {
      // Text rasterization and particle creation are deliberately scheduled
      // after the first paint so they cannot compete with the hero/LCP render.
      if (!initialSampleDone) {
        if (initialSamplePending) {
          sampleQueuedDuringInitial = true;
          return;
        }
        initialSamplePending = true;
        const runInitialSample = async () => {
          initialIdleId = null;
          initialFallbackId = null;
          try {
            await sampleText();
          } finally {
            initialSampleDone = true;
            initialSamplePending = false;
            if (sampleQueuedDuringInitial) {
              sampleQueuedDuringInitial = false;
              if (resizeFrame !== null) window.cancelAnimationFrame(resizeFrame);
              resizeFrame = window.requestAnimationFrame(sampleText);
            }
          }
        };
        if (typeof window.requestIdleCallback === "function") {
          initialIdleId = window.requestIdleCallback(runInitialSample, { timeout: 1200 });
        } else {
          initialFallbackId = window.setTimeout(runInitialSample, 320);
        }
        return;
      }
      if (resizeFrame) window.cancelAnimationFrame(resizeFrame);
      resizeFrame = window.requestAnimationFrame(sampleText);
    };
    const updateCachedBoundsOnScroll = () => {
      if (boundsFrame !== null) return;
      boundsFrame = window.requestAnimationFrame(() => {
        cachedCanvasRect = container.getBoundingClientRect();
        boundsFrame = null;
      });
    };
    const handlePointerMove = (event) => {
      // Use the last measured bounds instead of forcing layout on every pointermove.
      const rect = cachedCanvasRect;
      if (!rect) return;
      pointer.x = event.clientX - rect.left;
      pointer.y = event.clientY - rect.top;
      pointer.active = true;
      if (activePointerRepel > 0) ensureRenderLoop();
    };
    const handlePointerLeave = () => {
      pointer.active = false;
    };
    const handlePointerEnter = (event) => {
      handlePointerMove(event);
      if (trigger === "hover") startGather(true);
    };
    const handleClick = () => {
      if (trigger === "click") startGather(true);
    };
    const reduceMotionQuery = window.matchMedia?.(
      "(prefers-reduced-motion: reduce)",
    );
    const handleVisibilityChange = () => {
      if (document.visibilityState === "hidden") stopRenderLoop();
      else ensureRenderLoop();
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);
    let visibilityObserver;
    if (typeof IntersectionObserver !== "undefined") {
      visibilityObserver = new IntersectionObserver(
        ([entry]) => {
          isIntersecting = Boolean(entry?.isIntersecting);
          if (isIntersecting) ensureRenderLoop();
          else stopRenderLoop();
        },
        { threshold: 0, rootMargin: "120px 0px" },
      );
      visibilityObserver.observe(container);
    } else {
      isIntersecting = true;
    }
    const handleReduceMotionChange = (event) => {
      reducedMotion = event.matches;
      sampleText();
    };
    reduceMotionQuery?.addEventListener("change", handleReduceMotionChange);
    window.addEventListener("scroll", updateCachedBoundsOnScroll, { passive: true });
    canvas.addEventListener("pointerenter", handlePointerEnter);
    canvas.addEventListener("pointermove", handlePointerMove);
    canvas.addEventListener("pointerleave", handlePointerLeave);
    canvas.addEventListener("click", handleClick);
    let resizeObserver;
    const handleWindowResize = () => queueSample();
    if (typeof ResizeObserver !== "undefined") {
      resizeObserver = new ResizeObserver(queueSample);
      resizeObserver.observe(container);
    } else {
      window.addEventListener("resize", handleWindowResize, { passive: true });
    }
    queueSample();
    return () => {
      buildId += 1;
      resizeObserver?.disconnect();
      visibilityObserver?.disconnect();
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      window.removeEventListener("resize", handleWindowResize);
      reduceMotionQuery?.removeEventListener(
        "change",
        handleReduceMotionChange,
      );
      window.removeEventListener("scroll", updateCachedBoundsOnScroll);
      if (boundsFrame !== null) window.cancelAnimationFrame(boundsFrame);
      canvas.removeEventListener("pointerenter", handlePointerEnter);
      canvas.removeEventListener("pointermove", handlePointerMove);
      canvas.removeEventListener("pointerleave", handlePointerLeave);
      canvas.removeEventListener("click", handleClick);
      stopRenderLoop();
      if (resizeFrame !== null) window.cancelAnimationFrame(resizeFrame);
      if (initialIdleId !== null) window.cancelIdleCallback?.(initialIdleId);
      if (initialFallbackId !== null) window.clearTimeout(initialFallbackId);
    };
  }, [
    text,
    direction,
    particleSize,
    density,
    mobileText,
    mobileDensity,
    mobileParticleSize,
    mobileFontSize,
    color,
    highlightColor,
    scatter,
    gatherDuration,
    stagger,
    pointerRepel,
    repelRadius,
    idleDrift,
    trigger,
    fontSize,
    fontWeight,
    fontFamily,
    glow,
  ]);

  const Element = as;

  return (
    <Element
      ref={containerRef}
      className={`particle-text ${className}`}
      style={style}
      dir={direction === "auto" ? undefined : direction}
      aria-label={text}
    >
      <canvas
        ref={canvasRef}
        className="particle-text__canvas"
        aria-hidden="true"
      />
      <span className="particle-text__sr">{text}</span>
    </Element>
  );
};

export default ParticleText;
