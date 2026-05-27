import { useEffect } from "react";
import gsap from "gsap";
import { EASINGS } from "@/lib/animations/core";

/* ═══════════════════════════════════════════════════════════
   PageTransitionManager — MPA Page Transitions
   Bridges page navigation with GSAP animations via sessionStorage.

   How it works:
   1. On mount: reads sessionStorage for entrance transition → plays it
   2. Listens for clicks on [data-transition] links
   3. Prevents default, plays exit animation, saves transition, navigates
   ═══════════════════════════════════════════════════════════ */

type TransitionName =
  | "slide-right"
  | "scale-up"
  | "slide-up"
  | "clip-vertical"
  | "rotate-3d"
  | "fade-zoom";

const DUR = 0.45;
const EASE = "power3.inOut";

/* ─── Transition Definitions ───────────────────────────── */
// Each transition has exit (current page) and enter (new page)

function exitSlideRight(el: HTMLElement): GSAPTimeline {
  return gsap.timeline().to(el, {
    x: "-40%",
    opacity: 0,
    duration: DUR,
    ease: EASE,
  });
}
function enterSlideRight(el: HTMLElement): GSAPTimeline {
  return gsap.timeline().fromTo(
    el,
    { x: "40%", opacity: 0 },
    { x: "0%", opacity: 1, duration: DUR, ease: EASE },
  );
}

function exitScaleUp(el: HTMLElement): GSAPTimeline {
  return gsap.timeline().to(el, {
    scale: 0.85,
    opacity: 0,
    duration: DUR,
    ease: EASE,
  });
}
function enterScaleUp(el: HTMLElement): GSAPTimeline {
  return gsap.timeline().fromTo(
    el,
    { scale: 1.15, opacity: 0 },
    { scale: 1, opacity: 1, duration: DUR, ease: EASE },
  );
}

function exitSlideUp(el: HTMLElement): GSAPTimeline {
  return gsap.timeline().to(el, {
    y: "-40%",
    opacity: 0,
    duration: DUR,
    ease: EASE,
  });
}
function enterSlideUp(el: HTMLElement): GSAPTimeline {
  return gsap.timeline().fromTo(
    el,
    { y: "40%", opacity: 0 },
    { y: "0%", opacity: 1, duration: DUR, ease: EASE },
  );
}

function exitClipVertical(el: HTMLElement): GSAPTimeline {
  return gsap.timeline().to(el, {
    clipPath: "inset(0 50% 0 50%)",
    opacity: 0,
    duration: DUR,
    ease: EASE,
  });
}
function enterClipVertical(el: HTMLElement): GSAPTimeline {
  return gsap.timeline().fromTo(
    el,
    { clipPath: "inset(0 50% 0 50%)", opacity: 0 },
    { clipPath: "inset(0 0% 0 0%)", opacity: 1, duration: DUR, ease: EASE },
  );
}

function exitRotate3d(el: HTMLElement): GSAPTimeline {
  return gsap.timeline().to(el, {
    rotationY: -35,
    scale: 0.85,
    opacity: 0,
    duration: DUR,
    ease: EASE,
    transformPerspective: 1200,
  });
}
function enterRotate3d(el: HTMLElement): GSAPTimeline {
  return gsap.timeline().fromTo(
    el,
    { rotationY: 35, scale: 0.85, opacity: 0, transformPerspective: 1200 },
    { rotationY: 0, scale: 1, opacity: 1, duration: DUR, ease: EASE },
  );
}

function exitFadeZoom(el: HTMLElement): GSAPTimeline {
  return gsap.timeline().to(el, {
    scale: 0.92,
    opacity: 0,
    duration: DUR,
    ease: EASE,
  });
}
function enterFadeZoom(el: HTMLElement): GSAPTimeline {
  return gsap.timeline().fromTo(
    el,
    { scale: 1.08, opacity: 0 },
    { scale: 1, opacity: 1, duration: DUR, ease: EASE },
  );
}

const TRANSITIONS: Record<
  TransitionName,
  {
    exit: (el: HTMLElement) => GSAPTimeline;
    enter: (el: HTMLElement) => GSAPTimeline;
  }
> = {
  "slide-right": { exit: exitSlideRight, enter: enterSlideRight },
  "scale-up": { exit: exitScaleUp, enter: enterScaleUp },
  "slide-up": { exit: exitSlideUp, enter: enterSlideUp },
  "clip-vertical": { exit: exitClipVertical, enter: enterClipVertical },
  "rotate-3d": { exit: exitRotate3d, enter: enterRotate3d },
  "fade-zoom": { exit: exitFadeZoom, enter: enterFadeZoom },
};

/* ─── Transition names by profile index (0-based) ──────── */
const PROFILE_TRANSITIONS: TransitionName[] = [
  "slide-right",
  "scale-up",
  "slide-up",
  "clip-vertical",
  "rotate-3d",
  "fade-zoom",
];

const STORAGE_KEY = "pageTransition";

/* ═══════════════════════════════════════════════════════════
   Component
   ═══════════════════════════════════════════════════════════ */

export default function PageTransitionManager() {
  useEffect(() => {
    const main = document.querySelector<HTMLElement>(".page-content");
    if (!main) return;

    // ── Entrance animation (from previous page navigation) ──
    const stored = sessionStorage.getItem(STORAGE_KEY);
    if (stored && TRANSITIONS[stored as TransitionName]) {
      const trans = TRANSITIONS[stored as TransitionName];
      // Content is hidden by .transitioning class set in Layout inline script
      trans.enter(main).then(() => {
        document.documentElement.classList.remove("transitioning");
        gsap.set(main, { clearProps: "all" });
      });
      sessionStorage.removeItem(STORAGE_KEY);
    }

    // ── Exit animation (click interception) ──
    const handleClick = (e: MouseEvent) => {
      const link = (e.target as HTMLElement).closest<HTMLAnchorElement>(
        "[data-transition]",
      );
      if (!link) return;

      e.preventDefault();
      const href = link.getAttribute("href");
      if (!href) return;

      const transName = link.dataset.transition as TransitionName;
      const trans = TRANSITIONS[transName];
      if (!trans) {
        window.location.href = href;
        return;
      }

      // Save transition so next page knows what entrance to play
      sessionStorage.setItem(STORAGE_KEY, transName);

      // Play exit animation, then navigate
      trans.exit(main).then(() => {
        window.location.href = href;
      });
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return null;
}

/* ─── Export helper to determine transition from profile index ─── */
export function getTransitionForProfile(index: number): TransitionName {
  return PROFILE_TRANSITIONS[index % PROFILE_TRANSITIONS.length];
}
