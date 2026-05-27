import Lenis from "@studio-freight/lenis";
import type { LenisConfig } from "./types";

let instance: Lenis | null = null;
let rafId: number | null = null;

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

  function raf(time: number): void {
    instance?.raf(time);
    rafId = requestAnimationFrame(raf);
  }
  rafId = requestAnimationFrame(raf);

  return instance;
}

/* ─── Accessor ─────────────────────────────────────────── */
export function getLenis(): Lenis | null {
  return instance;
}

/* ─── Destroy ──────────────────────────────────────────── */
export function destroyLenis(): void {
  if (rafId !== null) {
    cancelAnimationFrame(rafId);
    rafId = null;
  }
  if (instance) {
    instance.destroy();
    instance = null;
  }
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
