"use client";
import "./Footer.scss";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";

const galleryImages = [
  { src: "/images/gallery-1.jpg", alt: "Instax moment 1" },
  { src: "/images/gallery-2.jpg", alt: "Instax moment 2" },
  { src: "/images/gallery-3.jpg", alt: "Instax moment 3" },
  { src: "/images/gallery-4.jpg", alt: "Instax moment 4" },
  { src: "/images/gallery-5.jpg", alt: "Instax moment 5" },
  { src: "/images/gallery-6.jpg", alt: "Instax moment 6" },
  { src: "/images/gallery-7.jpg", alt: "Instax moment 7" },
];

const Footer = () => {
  return (
    <footer className="footer" id="contact">
      {/* ── Contact ───────────────────────────────────── */}
      <div className="footer-contact">
        <div className="contact-info">
          <h2 className="contact-title">
            Let&rsquo;s Keep
            <br />
            In Touch
          </h2>
          <div className="contact-divider">
            <div className="footer-divider">
              <span className="line"></span>
              <span className="diamond">✦</span>
              <span className="line"></span>
            </div>
          </div>
          <p className="contact-body">
            Have a question or want to place an order?
            <br />
            Send us a message. We&rsquo;d love to hear from you!
          </p>
          <a href="mailto:hello@retrolume.ph" className="contact-cta">
            Message Us
          </a>
        </div>

        <div className="contact-links">
          <a
            href="https://instagram.com/retrolume.ph"
            className="contact-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} className="contact-link-icon" />
            <span>@retrolume.ph</span>
          </a>
          <a
            href="https://facebook.com/RetrolumePH"
            className="contact-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faFacebook} className="contact-link-icon" />
            <span>Retrolume PH</span>
          </a>
          <a href="mailto:hello@retrolume.ph" className="contact-link">
            <FontAwesomeIcon icon={faEnvelope} className="contact-link-icon" />
            <span>hello@retrolume.ph</span>
          </a>
          <div className="contact-link contact-link--static">
            <FontAwesomeIcon
              icon={faLocationDot}
              className="contact-link-icon"
            />
            <span>Iloilo City, Philippines</span>
          </div>
        </div>

        <div className="contact-deco">
          <Image
            src="/images/flower.webp"
            alt=""
            width={260}
            height={260}
            className="contact-flower"
            aria-hidden
          />
          <div className="contact-tape" />
        </div>
      </div>

      {/* ── Photo strip ───────────────────────────────── */}
      <div className="footer-strip">
        {galleryImages.map((img, i) => (
          <div className="strip-item" key={i}>
            <Image src={img.src} alt={img.alt} fill className="strip-image" />
          </div>
        ))}
      </div>

      {/* ── Bottom bar ────────────────────────────────── */}
      <div className="footer-bar">
        <span className="footer-copy">
          © 2024 Retrolume. All rights reserved.
        </span>
        <div className="footer-brand">
          <span className="footer-logo">retrolume</span>
          <span className="footer-tagline">
            instax printing service · iloilo
          </span>
        </div>
        <span className="footer-note">Printed with love in Iloilo City.</span>
      </div>
    </footer>
  );
};

export default Footer;
