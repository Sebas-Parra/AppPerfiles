import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

let pluginsRegistered = false;

if (!pluginsRegistered) {
  gsap.registerPlugin(ScrollTrigger);
  pluginsRegistered = true;
}

const CARD_SHADOW = "0 22px 44px -28px rgba(17, 17, 17, 0.34)";

export default function PageAnimator() {
  useEffect(() => {
    const media = gsap.matchMedia();

    media.add("(prefers-reduced-motion: no-preference)", () => {
      const listeners: Array<() => void> = [];

      const context = gsap.context(() => {
        document.querySelectorAll<HTMLElement>("[data-motion='hero']").forEach((section) => {
          const items = section.querySelectorAll<HTMLElement>("[data-motion-child]");
          if (!items.length) return;

          gsap.fromTo(
            items,
            { autoAlpha: 0, y: 28 },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.9,
              stagger: 0.1,
              ease: "power3.out",
              clearProps: "all",
            },
          );
        });

        document.querySelectorAll<HTMLElement>("[data-motion='reveal']").forEach((element) => {
          gsap.fromTo(
            element,
            { autoAlpha: 0, y: 26 },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.82,
              ease: "power3.out",
              clearProps: "all",
              scrollTrigger: {
                trigger: element,
                start: "top 84%",
                once: true,
              },
            },
          );
        });

        document.querySelectorAll<HTMLElement>("[data-motion='stagger']").forEach((group) => {
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
              ease: "power3.out",
              clearProps: "all",
              scrollTrigger: {
                trigger: group,
                start: "top 82%",
                once: true,
              },
            },
          );
        });

        document.querySelectorAll<HTMLElement>("[data-motion='progress']").forEach((bar) => {
          gsap.fromTo(
            bar,
            { scaleX: 0, transformOrigin: "left center" },
            {
              scaleX: 1,
              duration: 1,
              ease: "power3.out",
              delay: 0.15,
              clearProps: "transform",
            },
          );
        });

        document.querySelectorAll<HTMLElement>("[data-hover='lift']").forEach((element) => {
          const onEnter = () => {
            gsap.to(element, {
              y: -6,
              scale: 1.01,
              boxShadow: CARD_SHADOW,
              duration: 0.28,
              ease: "power2.out",
              overwrite: "auto",
            });
          };

          const onLeave = () => {
            gsap.to(element, {
              y: 0,
              scale: 1,
              boxShadow: "0 0 0 rgba(0, 0, 0, 0)",
              duration: 0.32,
              ease: "power2.out",
              overwrite: "auto",
            });
          };

          element.addEventListener("pointerenter", onEnter);
          element.addEventListener("pointerleave", onLeave);
          element.addEventListener("focus", onEnter);
          element.addEventListener("blur", onLeave);

          listeners.push(() => {
            element.removeEventListener("pointerenter", onEnter);
            element.removeEventListener("pointerleave", onLeave);
            element.removeEventListener("focus", onEnter);
            element.removeEventListener("blur", onLeave);
          });
        });
      });

      return () => {
        listeners.forEach((cleanup) => cleanup());
        context.revert();
      };
    });

    return () => {
      media.revert();
    };
  }, []);

  return null;
}
