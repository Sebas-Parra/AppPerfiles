import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { LenisConfig } from "./types";

let instance: Lenis | null = null;

const DEFAULT: LenisConfig = {
  duration: 1.2,
  lerp: 0.08,
  smoothWheel: true,
  smoothTouch: false,
  orientation: "vertical",
  gestureOrientation: "vertical",
  touchMultiplier: 2,
};

/* ─── Init ─────────────────────────────────────────────── */
export function initLenis(config: Partial<LenisConfig> = {}): Lenis {
  if (instance) return instance;

  instance = new Lenis({ ...DEFAULT, ...config });

  // Critical: sync ScrollTrigger with Lenis smooth scroll
  // Without this, ScrollTrigger doesn't know where the user really is
  instance.on("scroll", ScrollTrigger.update);

  // Use GSAP's ticker for the RAF loop — keeps everything in sync
  gsap.ticker.add((time) => {
    instance?.raf(time * 1000);
  });
  gsap.ticker.lagSmoothing(0);

  return instance;
}

/* ─── Accessor ─────────────────────────────────────────── */
export function getLenis(): Lenis | null {
  return instance;
}

/* ─── Destroy ──────────────────────────────────────────── */
export function destroyLenis(): void {
  if (instance) {
    instance.destroy();
    instance = null;
  }
  // Clean up GSAP ticker
  gsap.ticker.remove(() => {
    instance?.raf(0);
  });
}

/* ─── Programmatic Scroll ──────────────────────────────── */
export function scrollTo(
  target: string | number | HTMLElement,
  options?: {
    offset?: number;
    duration?: number;
    easing?: (t: number) => number;
  },
): void {
  instance?.scrollTo(target, options);
}
