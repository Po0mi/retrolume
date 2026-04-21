import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useFooterAnimation() {
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Contact section
      const contactTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".footer-contact",
          start: "top 80%",
          once: true,
        },
        defaults: { ease: "power3.out" },
      });

      contactTl
        .fromTo(
          ".contact-title",
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.9 }
        )
        .fromTo(
          ".footer-divider",
          { scaleX: 0, opacity: 0, transformOrigin: "left center" },
          { scaleX: 1, opacity: 1, duration: 0.5 },
          "-=0.4"
        )
        .fromTo(
          ".contact-body",
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7 },
          "-=0.3"
        )
        .fromTo(
          ".contact-cta",
          { y: 16, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6 },
          "-=0.3"
        )
        .fromTo(
          ".contact-link",
          { x: 20, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.6, stagger: 0.12 },
          "-=0.5"
        )
        .fromTo(
          ".contact-flower",
          { scale: 0.6, opacity: 0, rotate: -20 },
          { scale: 1, opacity: 1, rotate: 0, duration: 1, ease: "back.out(1.4)" },
          "-=0.8"
        );

      // Photo strip — items reveal left to right
      gsap.fromTo(
        ".strip-item",
        { opacity: 0, scale: 1.1 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          stagger: 0.08,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".footer-strip",
            start: "top 90%",
            once: true,
          },
        }
      );

      // Bottom bar fades up
      gsap.fromTo(
        ".footer-bar",
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".footer-bar",
            start: "top 95%",
            once: true,
          },
        }
      );
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return footerRef;
}
