import { useEffect } from "react";
import { useMotionValueEvent, useReducedMotion, useScroll, useSpring } from "framer-motion";

const clamp = (value: number, min = 0, max = 1) => Math.min(Math.max(value, min), max);
const lerp = (from: number, to: number, progress: number) => from + (to - from) * progress;

export default function ScrollMotionController() {
  const reduceMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const smoothScrollY = useSpring(scrollY, {
    stiffness: 62,
    damping: 21,
    mass: 0.72,
  });

  useEffect(() => {
    if (reduceMotion) return;
    updateScrollMotion();

    window.addEventListener("resize", updateScrollMotion);
    return () => window.removeEventListener("resize", updateScrollMotion);
  }, [reduceMotion]);

  useMotionValueEvent(smoothScrollY, "change", () => {
    if (!reduceMotion) updateScrollMotion();
  });

  return null;
}

function updateScrollMotion() {
  const scenes = Array.from(document.querySelectorAll("[data-scroll-scene]"));
  const viewportHeight = window.innerHeight || 1;

  scenes.forEach((scene) => {
    if (!(scene instanceof HTMLElement)) return;

    const rect = scene.getBoundingClientRect();
    const progress = clamp((viewportHeight - rect.top) / (viewportHeight + rect.height));
    const eased = 1 - Math.pow(1 - progress, 3);

    const hero = scene.querySelector("[data-scroll-hero]");
    if (hero instanceof HTMLElement) {
      hero.style.setProperty("--scroll-hero-y", String(lerp(76, -46, eased)));
      hero.style.setProperty("--scroll-hero-scale", String(lerp(0.9, 1.045, eased)));
    }

    scene.querySelectorAll("[data-scroll-card]").forEach((card, index) => {
      if (!(card instanceof HTMLElement)) return;
      const direction = index % 2 === 0 ? -1 : 1;
      const spread = window.innerWidth >= 1024 ? 92 : 28;
      card.style.setProperty("--scroll-card-x", String(lerp(direction * spread, 0, eased)));
      card.style.setProperty("--scroll-card-y", String(lerp(96 + index * 20, 0, eased)));
      card.style.setProperty("--scroll-card-rotate", `${lerp(direction * 7, 0, eased)}deg`);
      card.style.setProperty("--scroll-card-scale", String(lerp(0.88, 1, eased)));
      card.style.setProperty("--scroll-card-opacity", String(lerp(0.12, 1, clamp(eased * 1.45))));
    });

    scene.querySelectorAll("[data-scroll-column]").forEach((column, index) => {
      if (!(column instanceof HTMLElement)) return;
      const travel = index === 1 ? 150 : -120;
      const start = index === 1 ? -90 : 96;
      column.style.setProperty("--scroll-column-y", String(lerp(start, travel, progress)));
      column.style.setProperty("--scroll-column-opacity", String(lerp(0.45, 1, clamp(progress * 1.4))));
    });
  });
}
