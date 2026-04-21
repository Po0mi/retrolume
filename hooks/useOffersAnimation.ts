import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useOffersAnimation() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
        defaults: { ease: "power3.out" },
      });

      // Header fades up
      tl.fromTo(
        ".offers-eyebrow",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 }
      ).fromTo(
        ".offers-divider",
        { scaleX: 0, opacity: 0, transformOrigin: "center" },
        { scaleX: 1, opacity: 1, duration: 0.6 },
        "-=0.4"
      );

      // Cards stagger in from below with slight rotation settling
      tl.fromTo(
        ".offer-card",
        { y: 80, opacity: 0, rotate: 0 },
        {
          y: 0,
          opacity: 1,
          rotate: (i) => [-1.5, 0.5, -0.8][i] ?? 0,
          duration: 0.9,
          stagger: 0.15,
          ease: "power2.out",
        },
        "-=0.3"
      );

      // Decorative flower blooms in
      tl.fromTo(
        ".offers .flower-wrapper",
        { scale: 0.5, opacity: 0, rotate: -30 },
        { scale: 1, opacity: 1, rotate: 0, duration: 1, ease: "back.out(1.4)" },
        "-=1"
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return sectionRef;
}
