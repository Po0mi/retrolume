"use client";

import React, { useState, useEffect } from "react";
import "./Navbar.scss";

// ──────────────────────────────────────────────────────
// TYPES
// ──────────────────────────────────────────────────────

export interface NavLink {
  id: string;
  label: string;
  href: string;
}

export interface NavbarProps {
  links?: NavLink[];
  logoText?: string;
  ctaLabel?: string;
  ctaHref?: string;
}

// ──────────────────────────────────────────────────────
// COMPONENT
// ──────────────────────────────────────────────────────

const Navbar: React.FC<NavbarProps> = ({
  links = [
    { id: "home", label: "Home", href: "#home" },
    { id: "about", label: "About", href: "#about" },
    { id: "offers", label: "Offers", href: "#offers" },
    { id: "contact", label: "Contact", href: "#contact" },
  ],
  logoText = "retrolume",
  ctaLabel = "Explore Offers",
  ctaHref = "#offers",
}) => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>("");

  // Scroll Listener
  useEffect(() => {
    const handleScroll = (): void => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Active Section Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 },
    );

    links.forEach((link) => {
      const element = document.getElementById(link.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [links]);

  const toggleMenu = (): void => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const handleLinkClick = (): void => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`navbar ${isScrolled ? "scrolled" : ""} ${isMobileMenuOpen ? "menu-open" : ""}`}
    >
      {/* Logo */}
      <a href="#home" className="logo" onClick={handleLinkClick}>
        {logoText}
      </a>

      {/* Navigation Links */}
      <ul className={`desktop-menu ${isMobileMenuOpen ? "open" : ""}`}>
        {links.map((link: NavLink) => (
          <li key={link.id}>
            <a
              href={link.href}
              className={`nav-link ${activeSection === link.id ? "active" : ""}`}
              onClick={handleLinkClick}
            >
              {link.label}
            </a>
          </li>
        ))}

        {/* Mobile-only CTA: Appears inside the mobile menu */}
        <li className="mobile-cta-item">
          <a href={ctaHref} className="cta-btn" onClick={handleLinkClick}>
            {ctaLabel}
          </a>
        </li>
      </ul>

      {/* Desktop CTA: Visible only on desktop (hidden via CSS on mobile) */}
      <a href={ctaHref} className="cta-btn">
        {ctaLabel}
      </a>

      {/* Hamburger Button */}
      <button
        className={`mobile-toggle ${isMobileMenuOpen ? "open" : ""}`}
        onClick={toggleMenu}
        aria-label="Toggle navigation menu"
        aria-expanded={isMobileMenuOpen}
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>
    </nav>
  );
};

export default Navbar;
