import { useEffect, useRef } from "react";
import gsap from "gsap";

export function useHeroAnimation() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        ".hero-eyebrow",
        { y: 24, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
      )
        .fromTo(
          ".hero-title",
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.9 },
          "-=0.5",
        )
        .fromTo(
          ".hero-divider",
          { scaleX: 0, opacity: 0, transformOrigin: "left center" },
          { scaleX: 1, opacity: 1, duration: 0.6 },
          "-=0.4",
        )
        .fromTo(
          ".hero-subtitle",
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7 },
          "-=0.3",
        )
        .fromTo(
          ".hero-cta",
          { y: 16, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6 },
          "-=0.3",
        );

      tl.fromTo(
        ".letter-wrapper",
        { x: 60, opacity: 0 },
        { x: 0, opacity: 1, duration: 1, ease: "power2.out" },
        "-=1.2",
      )
        .fromTo(
          ".photos-wrapper",
          { x: -40, y: 30, opacity: 0 },
          { x: 0, y: 0, opacity: 1, duration: 0.9 },
          "-=0.7",
        )
        .fromTo(
          ".pictures-wrapper",
          { x: 40, y: 40, opacity: 0 },
          { x: 0, y: 0, opacity: 1, duration: 0.9 },
          "-=0.6",
        )
        .fromTo(
          ".flower-wrapper",
          { scale: 0.6, opacity: 0, rotate: -20 },
          {
            scale: 1,
            opacity: 1,
            rotate: 0,
            duration: 1,
            ease: "back.out(1.4)",
          },
          "-=0.7",
        )
        .fromTo(
          ".flower2-wrapper",
          { scale: 0.6, opacity: 0, rotate: 20 },
          {
            scale: 1,
            opacity: 1,
            rotate: 0,
            duration: 1,
            ease: "back.out(1.4)",
          },
          "-=0.8",
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return sectionRef;
}
