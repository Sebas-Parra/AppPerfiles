import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/* ─── Plugin Registration ───────────────────────────────── */
let pluginsRegistered = false;

export function ensurePlugins(): void {
  if (pluginsRegistered) return;
  gsap.registerPlugin(ScrollTrigger);
  pluginsRegistered = true;
}

/* ─── Cinematic Easing Presets ─────────────────────────── */
export const EASINGS = {
  cinematic: "cubic-bezier(0.22, 1, 0.36, 1)",
  "cinematic-strong": "cubic-bezier(0.16, 1, 0.3, 1)",
  smooth: "cubic-bezier(0.33, 1, 0.68, 1)",
  "smooth-strong": "cubic-bezier(0.25, 1, 0.5, 1)",
  "bounce-subtle": "cubic-bezier(0.34, 1.56, 0.64, 1)",
  expo: "expo.out",
  "back-subtle": "cubic-bezier(0.34, 1.3, 0.64, 1)",
} as const;

/* ─── Duration Presets ─────────────────────────────────── */
export const DURATIONS = {
  fast: 0.4,
  normal: 0.65,
  slow: 0.9,
  cinematic: 1.1,
  grand: 1.5,
} as const;

/* ─── Motion Preference ────────────────────────────────── */
export function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/* ─── Safe Animation Helper ────────────────────────────── */
export function animateSafe(
  target: gsap.TweenTarget,
  vars: gsap.TweenVars,
): gsap.core.Tween {
  if (prefersReducedMotion()) {
    const snap: Record<string, unknown> = {};
    if (vars.opacity !== undefined) snap.opacity = vars.opacity;
    if (vars.autoAlpha !== undefined) snap.autoAlpha = vars.autoAlpha;
    return gsap.set(target, snap);
  }
  return gsap.to(target, vars);
}

/* ─── Cleanup ──────────────────────────────────────────── */
export function killAllScrollTriggers(): void {
  ScrollTrigger.getAll().forEach((st) => st.kill());
}
