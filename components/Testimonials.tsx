"use client";
import "./Testimonials.scss";
import Image from "next/image";

const Testimonials = () => {
  return (
    <section className="testimonials" id="testimonials">
      <div className="testimonials-left">
        <Image
          src="/images/polaroid-scatter.jpg"
          alt="Scattered polaroid photos"
          fill
          className="testimonials-bg-image"
        />
        <div className="testimonials-overlay" />
      </div>

      <div className="testimonials-right">
        <div className="testimonials-content">
          <span className="testimonials-eyebrow">Loved by Many</span>
          <div className="testimonials-divider">
            <span className="line" />
            <span className="diamond">✦</span>
          </div>
          <blockquote className="testimonials-quote">
            &ldquo;The prints are so beautiful!
            <br />
            Super worth it and the service is excellent.&rdquo;
          </blockquote>
          <p className="testimonials-author">— Nicole, Iloilo City</p>
        </div>
        <div className="testimonials-visuals">
          <div className="testimonials-polaroid">
            <div className="testimonials-tape" />
            <div className="testimonials-photo-wrapper">
              <Image
                src="/images/review-photo.jpg"
                alt="Happy customer with prints"
                fill
                className="testimonials-photo"
              />
            </div>
          </div>
          <div className="testimonials-stamp">
            <span>Thank You</span>
            <span className="stamp-heart">♥</span>
            <span>So Much!</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
