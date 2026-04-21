import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useTestimonialsAnimation() {
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

      // Left photo backdrop fades in
      tl.fromTo(
        ".testimonials-left",
        { opacity: 0, x: -40 },
        { opacity: 1, x: 0, duration: 1 }
      );

      // Right — content staggered up
      tl.fromTo(
        ".testimonials-eyebrow",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7 },
        "-=0.7"
      )
        .fromTo(
          ".testimonials-divider",
          { scaleX: 0, opacity: 0, transformOrigin: "left center" },
          { scaleX: 1, opacity: 1, duration: 0.5 },
          "-=0.3"
        )
        .fromTo(
          ".testimonials-quote",
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 },
          "-=0.3"
        )
        .fromTo(
          ".testimonials-author",
          { y: 16, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6 },
          "-=0.3"
        );

      // Polaroid drops in with rotation
      tl.fromTo(
        ".testimonials-polaroid",
        { y: 60, opacity: 0, rotate: 4 },
        { y: 0, opacity: 1, rotate: 10, duration: 1, ease: "back.out(1.2)" },
        "-=0.6"
      );

      // Stamp spins in
      tl.fromTo(
        ".testimonials-stamp",
        { scale: 0, opacity: 0, rotate: -20 },
        { scale: 1, opacity: 0.75, rotate: 12, duration: 0.8, ease: "back.out(1.6)" },
        "-=0.5"
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return sectionRef;
}
