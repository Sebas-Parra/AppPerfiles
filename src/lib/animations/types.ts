export interface ScrollSceneConfig {
  trigger: string | Element;
  start?: string;
  end?: string;
  scrub?: boolean | number;
  pin?: boolean;
  pinSpacing?: boolean;
  markers?: boolean;
  once?: boolean;
  toggleActions?: string;
  invalidateOnRefresh?: boolean;
}

export interface CinematicSceneConfig {
  scrollTrigger: ScrollSceneConfig;
  timeline: (tl: GSAPTimeline) => void;
}

export interface ParallaxLayer {
  target: string | Element;
  speed: number; // 0 = fixed, 1 = natural scroll, >1 = faster than scroll
  direction?: "horizontal" | "vertical";
}

export interface ParallaxConfig {
  layers: ParallaxLayer[];
  speed?: number;
  container?: string | Element;
  scrollTrigger?: Partial<ScrollSceneConfig>;
}

export interface TextRevealConfig {
  type: "chars" | "words" | "lines";
  stagger?: number;
  duration?: number;
  ease?: string;
  from?: { y?: number; scale?: number; rotateX?: number };
  scrollTrigger?: boolean | ScrollSceneConfig;
}

export interface DepthLayerConfig {
  element: string | Element;
  speed: number; // 0 to 1 — slower = more depth illusion
  scale?: number;
}

export interface LenisConfig {
  duration?: number;
  lerp?: number;
  smoothWheel?: boolean;
  smoothTouch?: boolean;
  orientation?: "vertical" | "horizontal";
  gestureOrientation?: "vertical" | "horizontal";
  touchMultiplier?: number;
  infinite?: boolean;
}

export type EasingName =
  | "cinematic"
  | "cinematic-strong"
  | "smooth"
  | "smooth-strong"
  | "bounce-subtle"
  | "expo"
  | "back-subtle";

export interface FloatingConfig {
  amplitude?: number;
  direction?: "vertical" | "horizontal";
  speed?: number;
  rotation?: number;
}
