"use client";
import "./Offers.scss";
import Image from "next/image";

const offers = [
  {
    image: "/images/basic-prints.jpg",
    alt: "Hand holding instax prints",
    title: "Basic Prints",
    description: "High-quality instax prints perfect for everyday memories.",
    price: "₱18 / print",
  },
  {
    image: "/images/event-packages.jpg",
    alt: "Camera boxes on grass",
    title: "Event Packages",
    description: "Ideal for birthdays, weddings, and special occasions.",
    price: "Starts at ₱1,200",
  },
  {
    image: "/images/custom-sets.jpg",
    alt: "Camera printing a photo",
    title: "Custom Sets",
    description: "Personalized layouts and designs made just for you.",
    price: "Starts at ₱250",
  },
];

const Offers = () => {
  return (
    <section className="offers" id="offers">
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
      <div className="offers-header">
        <span className="offers-eyebrow">Our Offers</span>
        <div className="offers-divider">
          <span className="line"></span>
          <span className="diamond">✦</span>
          <span className="line"></span>
        </div>
      </div>
      <div className="offers-grid">
        {offers.map((offer, i) => (
          <div className="offer-card" key={i}>
            <div className="offer-tape" />
            <div className="offer-image-wrapper">
              <span className="offer-badge">✦</span>
              <Image
                src={offer.image}
                alt={offer.alt}
                fill
                className="offer-image"
              />
            </div>
            <h3 className="offer-title">{offer.title}</h3>
            <p className="offer-description">{offer.description}</p>
            <div className="offer-price-row">
              <span className="offer-price">{offer.price}</span>
              <a href="#contact" className="offer-cta">
                Book Now
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Offers;
