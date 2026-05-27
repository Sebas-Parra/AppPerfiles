import SplitType from "split-type";
import gsap from "gsap";
import { EASINGS, DURATIONS, prefersReducedMotion } from "./core";
import type { TextRevealConfig } from "./types";

/* ─── Prepare ──────────────────────────────────────────── */
function split(
  element: string | HTMLElement,
  type: "chars" | "words" | "lines" = "chars",
): SplitType {
  return new SplitType(element, { types: [type] });
}

/** Animate characters with 3D stagger */
export function animateChars(
  element: string | HTMLElement,
  config?: Partial<TextRevealConfig>,
): GSAPTimeline {
  const s = split(element, "chars");

  if (prefersReducedMotion()) {
    return gsap.timeline().set(s.chars, { autoAlpha: 1 });
  }

  return gsap.timeline().fromTo(
    s.chars,
    {
      autoAlpha: 0,
      y: config?.from?.y ?? 20,
      rotateX: config?.from?.rotateX ?? -30,
    },
    {
      autoAlpha: 1,
      y: 0,
      rotateX: 0,
      duration: config?.duration ?? DURATIONS.cinematic,
      stagger: config?.stagger ?? 0.02,
      ease: config?.ease ?? EASINGS.cinematic,
    },
  );
}

/** Animate words with scale+slide stagger */
export function animateWords(
  element: string | HTMLElement,
  config?: Partial<TextRevealConfig>,
): GSAPTimeline {
  const s = split(element, "words");

  if (prefersReducedMotion()) {
    return gsap.timeline().set(s.words, { autoAlpha: 1 });
  }

  return gsap.timeline().fromTo(
    s.words,
    {
      autoAlpha: 0,
      y: config?.from?.y ?? 28,
      scale: config?.from?.scale ?? 0.94,
    },
    {
      autoAlpha: 1,
      y: 0,
      scale: 1,
      duration: config?.duration ?? DURATIONS.cinematic,
      stagger: config?.stagger ?? 0.04,
      ease: config?.ease ?? EASINGS["cinematic-strong"],
    },
  );
}

/** Animate lines with clip-path reveal */
export function animateLines(
  element: string | HTMLElement,
  config?: Partial<TextRevealConfig>,
): GSAPTimeline {
  const s = split(element, "lines");

  if (prefersReducedMotion()) {
    return gsap.timeline().set(s.lines, { autoAlpha: 1 });
  }

  return gsap.timeline().fromTo(
    s.lines,
    {
      autoAlpha: 0,
      y: 32,
      clipPath: "inset(0 0 100% 0)",
    },
    {
      autoAlpha: 1,
      y: 0,
      clipPath: "inset(0 0 0% 0)",
      duration: config?.duration ?? DURATIONS.cinematic,
      stagger: config?.stagger ?? 0.1,
      ease: config?.ease ?? EASINGS["cinematic-strong"],
    },
  );
}

/** Scroll-triggered text reveal */
export function scrollTextReveal(
  element: string | HTMLElement,
  config?: Partial<TextRevealConfig>,
): GSAPTimeline {
  const type = config?.type ?? "words";
  const s = split(element, type);

  const targets = (s as unknown as Record<string, HTMLElement[]>)[type];
  if (!targets) return gsap.timeline();

  if (prefersReducedMotion()) {
    return gsap.timeline().set(targets, { autoAlpha: 1 });
  }

  return gsap
    .timeline({
      scrollTrigger: {
        trigger: element instanceof Element ? element : document.querySelector(element as string),
        start: "top 82%",
        once: false,
      },
    })
    .fromTo(
      targets,
      { autoAlpha: 0, y: 24 },
      {
        autoAlpha: 1,
        y: 0,
        duration: config?.duration ?? DURATIONS.cinematic,
        stagger: config?.stagger ?? 0.03,
        ease: config?.ease ?? EASINGS.cinematic,
      },
    );
}
