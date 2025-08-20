"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "#work", label: "work" },
    { href: "#pricing", label: "pricing" },
    { href: "#faq", label: "faq" },
    { href: "#method", label: "process" },
    { href: "#book-call", label: "contact" },
  ];

  return (
    <nav className="w-full px-4 md:px-[2.5vw] bg-primary-light sticky top-0 z-50">
      <div className="flex justify-between items-center py-2">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/logo-light.svg"
            alt="DYO Digitals Logo"
            width={88}
            height={84}
            className="w-16 h-16 md:w-20 md:h-20 lg:w-[88px] lg:h-[84px] cursor-pointer"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6 lg:gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-aileron font-bold text-body lg:text-body-lg text-primary-dark hover:text-accent-primary transition-colors duration-300 tracking-tight relative group"
            >
              {link.label}
              <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-accent-primary transition-all duration-300 ease-out group-hover:w-full group-hover:left-0"></span>
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1 group"
          aria-label="Toggle mobile menu"
        >
          <span
            className={`w-6 h-0.5 bg-primary-dark transition-all duration-300 ${
              isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          ></span>
          <span
            className={`w-6 h-0.5 bg-primary-dark transition-all duration-300 ${
              isMobileMenuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`w-6 h-0.5 bg-primary-dark transition-all duration-300 ${
              isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          ></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="py-4 space-y-4 border-t border-primary-dark/10">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block font-aileron font-bold text-body-lg text-primary-dark hover:text-accent-primary transition-colors duration-300 tracking-tight py-2"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
