import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useAboutAnimation() {
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

      // Left — camera polaroid slides up, flower blooms in
      tl.fromTo(
        ".about-camera",
        { y: 60, opacity: 0, rotate: -6 },
        { y: 0, opacity: 1, rotate: -2, duration: 1 },
      ).fromTo(
        ".flower-wrapper",
        { scale: 0.5, opacity: 0, rotate: -10 },
        {
          scale: 1,
          opacity: 1,
          rotate: -10,
          duration: 1,
          ease: "back.out(1.6)",
        },
        "-=0.5",
      );

      // Right — staggered fade up
      tl.fromTo(
        ".about-eyebrow",
        { y: 24, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7 },
        "-=0.8",
      )
        .fromTo(
          ".about-title",
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 },
          "-=0.5",
        )
        .fromTo(
          ".about-divider",
          { scaleX: 0, opacity: 0, transformOrigin: "left center" },
          { scaleX: 1, opacity: 1, duration: 0.6 },
          "-=0.4",
        )
        .fromTo(
          ".about-body",
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7, stagger: 0.15 },
          "-=0.3",
        )
        .fromTo(
          ".flower-svg-wrapper",
          { scale: 0.7, opacity: 0, rotate: 10 },
          {
            scale: 1,
            opacity: 1,
            rotate: 0,
            duration: 0.8,
            ease: "back.out(1.4)",
          },
          "-=0.4",
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return sectionRef;
}
