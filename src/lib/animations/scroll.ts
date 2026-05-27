import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ensurePlugins, EASINGS, DURATIONS, prefersReducedMotion } from "./core";
import type { ScrollSceneConfig, CinematicSceneConfig } from "./types";

ensurePlugins();

/* ─── Scene Factory ────────────────────────────────────── */
export function createScrollScene(config: CinematicSceneConfig): GSAPTimeline {
  if (prefersReducedMotion()) {
    const tl = gsap.timeline();
    config.timeline(tl);
    tl.progress(1);
    return tl;
  }

  const tl = gsap.timeline({
    scrollTrigger: {
      ...config.scrollTrigger,
      invalidateOnRefresh: true,
    },
  });

  config.timeline(tl);
  return tl;
}

/* ─── PRESETS ──────────────────────────────────────────── */

/** Standard fade + slide-up reveal */
export function revealScene(
  trigger: string | Element,
  opts?: { y?: number; duration?: number; ease?: string },
): GSAPTimeline {
  return createScrollScene({
    scrollTrigger: { trigger, start: "top 85%", once: true },
    timeline: (tl) => {
      tl.fromTo(
        trigger,
        { autoAlpha: 0, y: opts?.y ?? 28 },
        {
          autoAlpha: 1,
          y: 0,
          duration: opts?.duration ?? DURATIONS.cinematic,
          ease: opts?.ease ?? EASINGS.cinematic,
        },
      );
    },
  });
}

/** Hero entrance — immediate, no scroll trigger */
export function heroEntrance(
  container: string | Element,
  children: string,
): GSAPTimeline {
  if (prefersReducedMotion()) {
    gsap.set([container, children], { autoAlpha: 1 });
    return gsap.timeline();
  }

  const tl = gsap.timeline({ defaults: { ease: EASINGS.cinematic } });

  tl.fromTo(
    container,
    { autoAlpha: 0, y: 36, scale: 0.97 },
    { autoAlpha: 1, y: 0, scale: 1, duration: DURATIONS.grand },
  );

  tl.fromTo(
    children,
    { autoAlpha: 0, y: 24 },
    { autoAlpha: 1, y: 0, stagger: 0.1, duration: 0.75 },
    "-=0.5",
  );

  return tl;
}

/** Card stacking — cards pile on scroll with pin */
export function cardStackScene(
  container: string | Element,
  cardsSelector: string,
  opts?: { start?: string; end?: string },
): GSAPTimeline {
  if (prefersReducedMotion()) return gsap.timeline();

  return createScrollScene({
    scrollTrigger: {
      trigger: container,
      start: opts?.start ?? "top top",
      end: opts?.end ?? "+=300%",
      pin: true,
      scrub: 1,
    },
    timeline: (tl) => {
      const cards = gsap.utils.toArray(cardsSelector);
      cards.forEach((card, i) => {
        if (i === 0) return;
        tl.fromTo(
          card as Element,
          { y: "100%", scale: 0.9, autoAlpha: 0 },
          { y: 0, scale: 1, autoAlpha: 1, duration: 1.8 },
          i * 0.4,
        );
      });
    },
  });
}

/** Zoom storytelling — container scales in on scroll */
export function zoomSection(
  trigger: string | Element,
  opts?: { scaleFrom?: number; scaleTo?: number; start?: string; end?: string },
): GSAPTimeline {
  if (prefersReducedMotion()) return gsap.timeline();

  return createScrollScene({
    scrollTrigger: {
      trigger,
      start: opts?.start ?? "top bottom",
      end: opts?.end ?? "bottom top",
      scrub: 1.2,
    },
    timeline: (tl) => {
      tl.fromTo(
        trigger,
        { scale: opts?.scaleFrom ?? 0.85, autoAlpha: 0.5 },
        { scale: opts?.scaleTo ?? 1, autoAlpha: 1, ease: "none" },
      );
    },
  });
}

/** Stagger children reveal on scroll */
export function staggerReveal(
  container: string | Element,
  childrenSelector: string,
  opts?: { stagger?: number; start?: string },
): GSAPTimeline {
  return createScrollScene({
    scrollTrigger: {
      trigger: container,
      start: opts?.start ?? "top 78%",
      once: true,
    },
    timeline: (tl) => {
      tl.fromTo(
        childrenSelector,
        { autoAlpha: 0, y: 24 },
        {
          autoAlpha: 1,
          y: 0,
          duration: DURATIONS.cinematic,
          stagger: opts?.stagger ?? 0.07,
          ease: EASINGS.cinematic,
        },
      );
    },
  });
}

/** Scale-in transition — element scales + fades in on scroll */
export function scaleInScene(
  trigger: string | Element,
  opts?: { scaleFrom?: number },
): GSAPTimeline {
  if (prefersReducedMotion()) return gsap.timeline();

  return createScrollScene({
    scrollTrigger: { trigger, start: "top bottom", end: "bottom top", scrub: 1 },
    timeline: (tl) => {
      tl.fromTo(
        trigger,
        { scale: opts?.scaleFrom ?? 0.92, autoAlpha: 0.4 },
        { scale: 1, autoAlpha: 1, ease: "none" },
      );
    },
  });
}

/** Clip-path reveal — vertical wipe from center */
export function clipRevealScene(
  trigger: string | Element,
): GSAPTimeline {
  if (prefersReducedMotion()) return gsap.timeline();

  return createScrollScene({
    scrollTrigger: { trigger, start: "top 82%", once: true },
    timeline: (tl) => {
      tl.fromTo(
        trigger,
        { clipPath: "inset(0 50% 0 50%)", autoAlpha: 0 },
        {
          clipPath: "inset(0 0% 0 0%)",
          autoAlpha: 1,
          duration: DURATIONS.cinematic,
          ease: EASINGS["cinematic-strong"],
        },
      );
    },
  });
}

/** Pin section for narrative stops */
export function pinSection(
  trigger: string | Element,
  duration: string | number = "+=150%",
): ScrollTrigger {
  if (prefersReducedMotion()) {
    return ScrollTrigger.create({ trigger, start: "top top" });
  }
  return ScrollTrigger.create({
    trigger,
    start: "top top",
    end: duration,
    pin: true,
    pinSpacing: true,
    scrub: 1,
  });
}

/** Horizontal scroll section */
export function horizontalScroll(
  container: string | Element,
  opts?: { start?: string; end?: string },
): GSAPTimeline {
  if (prefersReducedMotion()) return gsap.timeline();

  const el =
    typeof container === "string"
      ? document.querySelector(container)
      : container;
  if (!el) return gsap.timeline();

  const scrollWidth = el.scrollWidth - window.innerWidth;

  return createScrollScene({
    scrollTrigger: {
      trigger: container,
      start: opts?.start ?? "top top",
      end: opts?.end ?? `+=${scrollWidth}`,
      pin: true,
      scrub: 1,
    },
    timeline: (tl) => {
      tl.to(el, { x: -scrollWidth, ease: "none" });
    },
  });
}

/* ─── Cleanup ──────────────────────────────────────────── */
export function killAllTriggers(): void {
  ScrollTrigger.getAll().forEach((st) => st.kill());
}
