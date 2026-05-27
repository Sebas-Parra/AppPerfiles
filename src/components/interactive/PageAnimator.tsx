import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ensurePlugins,
  EASINGS,
  DURATIONS,
  prefersReducedMotion,
} from "@/lib/animations/core";
import { initLenis, destroyLenis } from "@/lib/animations/lenis";
import {
  heroEntrance,
  staggerReveal,
  scaleInScene,
  zoomSection,
  clipRevealScene,
  createScrollScene,
} from "@/lib/animations/scroll";
import { animateWords, animateLines, scrollTextReveal } from "@/lib/animations/text";
import {
  createParallax,
  createFloatingElement,
  createSectionDepth,
} from "@/lib/animations/parallax";

/* ═══════════════════════════════════════════════════════════
   PageAnimator — Cinematic Motion Orchestrator
   Runs once on mount. Detects page via body[data-page].
   All animations respect prefers-reduced-motion via gsap.matchMedia.
   ═══════════════════════════════════════════════════════════ */

ensurePlugins();

const LIFT_SHADOW = "0 22px 44px -28px rgba(17, 17, 17, 0.34)";
const LIFT_Y = -6;

/* ─── Global Reveals (all pages) ──────────────────────── */
function setupGlobalReveals(): void {
  // Standard reveal blocks
  document
    .querySelectorAll<HTMLElement>("[data-motion='reveal']")
    .forEach((el) => {
      gsap.fromTo(
        el,
        { autoAlpha: 0, y: 28 },
        {
          autoAlpha: 1,
          y: 0,
          duration: DURATIONS.cinematic,
          ease: EASINGS.cinematic,
          scrollTrigger: { trigger: el, start: "top 84%", once: true },
        },
      );
    });

  // Hero sections (immediate entrance)
  document
    .querySelectorAll<HTMLElement>("[data-motion='hero']")
    .forEach((section) => {
      const children = section.querySelectorAll<HTMLElement>(
        "[data-motion-child]",
      );
      if (!children.length) return;
      gsap.fromTo(
        children,
        { autoAlpha: 0, y: 32 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.85,
          stagger: 0.1,
          ease: EASINGS.cinematic,
          clearProps: "all",
        },
      );
    });

  // Stagger groups
  document
    .querySelectorAll<HTMLElement>("[data-motion='stagger']")
    .forEach((group) => {
      const items = group.querySelectorAll<HTMLElement>("[data-motion-item]");
      if (!items.length) return;
      gsap.fromTo(
        items,
        { autoAlpha: 0, y: 24 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.72,
          stagger: 0.08,
          ease: EASINGS.cinematic,
          clearProps: "all",
          scrollTrigger: { trigger: group, start: "top 82%", once: true },
        },
      );
    });

  // Progress bars
  document
    .querySelectorAll<HTMLElement>("[data-motion='progress']")
    .forEach((bar) => {
      gsap.fromTo(
        bar,
        { scaleX: 0, transformOrigin: "left center" },
        {
          scaleX: 1,
          duration: 1,
          ease: EASINGS.cinematic,
          delay: 0.15,
          clearProps: "transform",
        },
      );
    });
}

/* ─── Hover Effects ───────────────────────────────────── */
function setupHoverEffects(ctx: gsap.Context): void {
  const listeners: Array<() => void> = [];

  document
    .querySelectorAll<HTMLElement>("[data-hover='lift']")
    .forEach((el) => {
      const enter = () =>
        gsap.to(el, {
          y: LIFT_Y,
          scale: 1.01,
          boxShadow: LIFT_SHADOW,
          duration: 0.28,
          ease: EASINGS["bounce-subtle"],
          overwrite: "auto",
        });

      const leave = () =>
        gsap.to(el, {
          y: 0,
          scale: 1,
          boxShadow: "0 0 0 rgba(0,0,0,0)",
          duration: 0.32,
          ease: EASINGS.smooth,
          overwrite: "auto",
        });

      el.addEventListener("pointerenter", enter);
      el.addEventListener("pointerleave", leave);
      el.addEventListener("focus", enter);
      el.addEventListener("blur", leave);

      listeners.push(() => {
        el.removeEventListener("pointerenter", enter);
        el.removeEventListener("pointerleave", leave);
        el.removeEventListener("focus", enter);
        el.removeEventListener("blur", leave);
      });
    });

  (ctx as any)._hoverListeners = listeners;
}

/* ─── Page: Home ──────────────────────────────────────── */
function setupHomeAnimations(): void {
  // Cinematic hero text — SplitType word stagger
  const heroTitle = document.querySelector<HTMLElement>(
    "[data-cinematic='hero-title']",
  );
  if (heroTitle) {
    const tl = animateWords(heroTitle, {
      stagger: 0.06,
      duration: DURATIONS.grand,
      ease: EASINGS["cinematic-strong"],
    });

    // Reveal subtitle and CTA after title
    const heroChildren = heroTitle
      .closest("section")
      ?.querySelectorAll<HTMLElement>("[data-cinematic='hero-child']");
    if (heroChildren?.length) {
      tl.fromTo(
        heroChildren,
        { autoAlpha: 0, y: 20 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.65,
          stagger: 0.15,
          ease: EASINGS.cinematic,
        },
        "-=0.3",
      );
    }
  }

  // Stats section — parallax depth
  const statsSection = document.querySelector<HTMLElement>(
    "[data-cinematic='stats-section']",
  );
  if (statsSection) {
    scaleInScene(statsSection, { scaleFrom: 0.96 });
  }

  // Profile cards — zoom storytelling
  const cardsContainer = document.querySelector<HTMLElement>(
    "[data-cinematic='cards-container']",
  );
  if (cardsContainer) {
    zoomSection(cardsContainer, { scaleFrom: 0.9, scaleTo: 1.02 });
  }

  // About section — parallax depth layers
  const aboutGrid = document.querySelector<HTMLElement>(
    "[data-cinematic='about-grid']",
  );
  if (aboutGrid) {
    const leftCol = aboutGrid.querySelector<HTMLElement>(":scope > :first-child");
    const rightCol = aboutGrid.querySelector<HTMLElement>(":scope > :last-child");
    if (leftCol && rightCol) {
      createSectionDepth(aboutGrid, [
        { element: leftCol, speed: 0.6 },
        { element: rightCol, speed: 0.3 },
      ]);
    }
  }

  // Floating decorative elements
  document
    .querySelectorAll<HTMLElement>("[data-cinematic='float']")
    .forEach((el, i) => {
      const amp = Number(el.dataset.floatAmplitude) || 16 + i * 4;
      const dir =
        (el.dataset.floatDirection as "vertical" | "horizontal") || "vertical";
      createFloatingElement(el, {
        amplitude: amp,
        direction: dir,
        speed: 3 + i * 0.5,
      });
    });
}

/* ─── Page: Profile List ──────────────────────────────── */
function setupProfileListAnimations(): void {
  // Hero text animation
  const heroText = document.querySelector<HTMLElement>(
    "[data-cinematic='list-hero-text']",
  );
  if (heroText) {
    animateWords(heroText, {
      stagger: 0.05,
      duration: 0.9,
      ease: EASINGS.cinematic,
    });
  }

  // Timeline items — sequential reveal with depth
  const timeline = document.querySelector<HTMLElement>(
    "[data-cinematic='timeline']",
  );
  if (timeline) {
    staggerReveal(timeline, "[data-motion-item]", {
      stagger: 0.09,
      start: "top 80%",
    });
  }

  // Stats badges — floating micro-animation
  document
    .querySelectorAll<HTMLElement>("[data-cinematic='float-badge']")
    .forEach((el) => {
      gsap.to(el, {
        y: -4,
        duration: 2.5,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });
    });
}

/* ─── Page: Profile Detail ────────────────────────────── */
function setupProfileDetailAnimations(): void {
  // Progress bar
  const progressBar = document.querySelector<HTMLElement>(
    "[data-motion='progress']",
  );
  if (progressBar) {
    gsap.fromTo(
      progressBar,
      { scaleX: 0, transformOrigin: "left center" },
      {
        scaleX: 1,
        duration: 1,
        ease: EASINGS.cinematic,
        delay: 0.2,
        clearProps: "transform",
      },
    );
  }

  // Section cards — scale-in reveal on scroll
  document
    .querySelectorAll<HTMLElement>("[data-cinematic='section-card']")
    .forEach((card) => {
      scaleInScene(card, { scaleFrom: 0.97 });
    });

  // Content blocks — staggered reveal
  document
    .querySelectorAll<HTMLElement>("[data-cinematic='content-block']")
    .forEach((block) => {
      const children =
        block.querySelectorAll<HTMLElement>("[data-cinematic='block-child']");
      if (!children.length) return;
      staggerReveal(block, "[data-cinematic='block-child']", {
        stagger: 0.06,
        start: "top 84%",
      });
    });

  // Navigation arrows — subtle float
  document
    .querySelectorAll<HTMLElement>("[data-cinematic='nav-arrow']")
    .forEach((arrow) => {
      createFloatingElement(arrow, {
        amplitude: 6,
        direction: "horizontal",
        speed: 2,
      });
    });
}

/* ═══════════════════════════════════════════════════════════
   Component
   ═══════════════════════════════════════════════════════════ */

export default function PageAnimator() {
  useEffect(() => {
    // ── Lenis ────────────────────────────────────────────
    initLenis({ duration: 1.2, lerp: 0.08 });

    // ── MatchMedia (prefers-reduced-motion gate) ─────────
    const media = gsap.matchMedia();

    media.add("(prefers-reduced-motion: no-preference)", () => {
      const context = gsap.context(() => {
        const page = document.body.dataset.page;

        // Global reveals (all pages)
        setupGlobalReveals();

        // Page-specific cinematic animations
        if (page === "home") setupHomeAnimations();
        if (page === "perfiles-index") setupProfileListAnimations();
        if (page === "perfil-detail") setupProfileDetailAnimations();

        // Global hover effects
        setupHoverEffects(context);
      });

      return () => context.revert();
    });

    if (prefersReducedMotion()) {
      // Still run global reveals without animation
      const ctx = gsap.context(() => {
        setupGlobalReveals();
        setupHoverEffects(ctx);
      });
      return () => {
        ctx.revert();
        media.revert();
        destroyLenis();
      };
    }

    return () => {
      media.revert();
      destroyLenis();
    };
  }, []);

  return null;
}
