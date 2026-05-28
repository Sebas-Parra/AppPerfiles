import gsap from "gsap";
import { prefersReducedMotion } from "./core";
import type { ParallaxConfig, DepthLayerConfig, FloatingConfig } from "./types";

/* ─── Multi-layer Parallax ─────────────────────────────── */
export function createParallax(config: ParallaxConfig): void {
  if (prefersReducedMotion()) return;

  config.layers.forEach((layer) => {
    const el =
      typeof layer.target === "string"
        ? document.querySelector(layer.target)
        : layer.target;
    if (!el) return;

    const prop = layer.direction === "horizontal" ? "x" : "y";
    const displacement = layer.speed * 120;

    gsap.fromTo(
      el,
      { [prop]: -displacement },
      {
        [prop]: displacement,
        ease: "none",
        scrollTrigger: {
          trigger: (config.container ?? el.parentElement!) as string | Element,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      },
    );
  });
}

/* ─── Floating Element ─────────────────────────────────── */
export function createFloatingElement(
  element: string | Element,
  opts: FloatingConfig = {},
): gsap.core.Tween {
  const amp = opts.amplitude ?? 20;
  const prop = opts.direction === "horizontal" ? "x" : "y";

  const vars: gsap.TweenVars = {
    [prop]: amp,
    duration: opts.speed ?? 3,
    ease: "sine.inOut",
    yoyo: true,
    repeat: -1,
  };

  if (opts.rotation) {
    vars.rotation = opts.rotation;
  }

  return gsap.to(element, vars);
}

/* ─── Section Depth Illusion ───────────────────────────── */
export function createSectionDepth(
  container: string | Element,
  layers: DepthLayerConfig[],
): void {
  if (prefersReducedMotion()) return;

  layers.forEach((layer) => {
    const el =
      typeof layer.element === "string"
        ? document.querySelector(layer.element)
        : layer.element;
    if (!el) return;

    // Slower speed = more depth (moves less = feels farther away)
    const movement = (1 - layer.speed) * 200;

    gsap.fromTo(
      el,
      { y: -movement, scale: layer.scale ?? 1 },
      {
        y: movement,
        scale: layer.scale ?? 1,
        ease: "none",
        scrollTrigger: {
          trigger: container,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      },
    );
  });
}

/* ─── Camera Zoom Illusion ─────────────────────────────── */
export function cameraZoomScene(
  container: string | Element,
  opts?: { scaleFrom?: number; scaleTo?: number },
): GSAPTimeline {
  if (prefersReducedMotion()) return gsap.timeline();

  return gsap.timeline({
    scrollTrigger: {
      trigger: container,
      start: "top bottom",
      end: "bottom top",
      scrub: 1,
    },
  }).fromTo(
    container,
    {
      scale: opts?.scaleFrom ?? 0.92,
      autoAlpha: 0.85,
    },
    {
      scale: opts?.scaleTo ?? 1.08,
      autoAlpha: 1,
      ease: "none",
    },
  );
}
