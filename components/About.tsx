"use client";
import "./About.scss";
import Image from "next/image";
import { useAboutAnimation } from "@/hooks/useAboutAnimation";

const About = () => {
  const sectionRef = useAboutAnimation();

  return (
    <section className="about" id="about" ref={sectionRef}>
      <div className="about-left">
        <Image
          src="/images/camera.webp"
          alt="Instax camera with photos"
          width={600}
          height={600}
          className="about-camera"
        />
        <div className="flower-wrapper">
          <Image
            src="/images/flower.webp"
            alt="flowers"
            width={600}
            height={600}
            className="flower-image"
            priority
          />
        </div>
      </div>
      <div className="about-right">
        {" "}
        <span className="about-eyebrow">About Us</span>
        <h2 className="about-title">
          Made for memories
          <br />
          you can hold.
        </h2>
        <div className="about-divider"></div>
        <p className="about-body">
          We use the Instax mini LiPlay+ to deliver high-quality prints with a
          classic touch.
        </p>
        <p className="about-body">
          Compact, stylish, and designed to print the moments that matter.
          Because some memories deserve more than just a screen.
        </p>
        <div className="flower-svg-wrapper">
          {" "}
          <Image
            src="/flower.svg"
            alt="flowers"
            width={100}
            height={100}
            className="flower-svg"
            priority
          />
          <span className="flower-quote">Every photo tells a story.</span>
        </div>
      </div>
    </section>
  );
};

export default About;
