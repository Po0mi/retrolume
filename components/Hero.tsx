"use client";
import "./Hero.scss";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="hero-container">
        <div className="hero-left">
          <span className="hero-eyebrow">instax printing service Iloilo</span>
          <h1 className="hero-title">
            You bring the memories.
            <span>We bring them to life.</span>
          </h1>
          <div className="hero-divider"></div>
          <p className="hero-subtitle">
            Retrolume is an intax printing service based in Iloilo City. We turn
            your favorite moments into tangible keepsakes you can hold, share,
            and treasure forever.
          </p>
          <a href="#" className="hero-cta">
            Explore Offers
          </a>
        </div>
        <div className="hero-right">
          <div className="hero-visuals">
            <div className="letter-wrapper">
              <Image
                src="/images/letter.webp"
                alt="Letter"
                width={1264}
                height={842}
                className="letter-image"
                priority
              />
            </div>
            <div className="photos-wrapper">
              <Image
                src="/images/photos.webp"
                alt="photos"
                width={600}
                height={600}
                className="photos-image"
                priority
              />
            </div>
            <div className="pictures-wrapper">
              <Image
                src="/images/pictures.webp"
                alt="pictures"
                width={600}
                height={600}
                className="pictures-image"
                priority
              />
            </div>
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
            <div className="flower2-wrapper">
              <Image
                src="/images/flower.webp"
                alt="flowers"
                width={600}
                height={600}
                className="flower2-image"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
