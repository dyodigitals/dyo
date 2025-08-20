"use client";

import React from "react";
import Image from "next/image";
import Star from "../icons/star";

const FooterContent = () => {
  return (
    <div className="h-full w-full bg-primary-light relative overflow-hidden flex flex-col">
      {/* Light overlay to match the beige tone in the design */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/bg-grid.png"
          alt="Background grid"
          fill
          className="object-cover opacity-80"
        />
      </div>
      <div className="absolute inset-0 flex items-center justify-center scale-110">
        <div className="relative flex items-center justify-center z-20">
          <Image
            src="/digital-dots.svg"
            alt=""
            width={400}
            height={400}
            className="object-contain w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] md:w-[380px] md:h-[380px] lg:w-[400px] lg:h-[400px]"
            priority
          />

          <div className="absolute inset-0 flex items-center justify-center z-10">
            <div className="w-32 h-40 sm:w-36 sm:h-44 md:w-48 md:h-60 lg:w-54 lg:h-68 relative">
              <Image
                src="/footer.png"
                alt="Creative showcase"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Main content area */}
      <div className="w-full flex flex-col justify-between px-4 md:px-[2.5vw] py-8 md:py-12 relative z-10 h-full">
        <div className="w-full flex items-start justify-between sm:gap-4">
          {/* Contact - Top Left */}
          <div className="">
            <h3 className="text-section-heading-small sm:text-section-heading leading-none font-noto-serif font-semibold text-primary-dark mb-3 md:mb-4">
              Contact
            </h3>
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-5">
              <span className="text-body-sm sm:text-body font-aileron text-primary-dark">
                dyodigitals@gmail.com
              </span>
              <span className="text-primary-dark hidden sm:block">|</span>
              <div className="flex items-center justify-start sm:justify-center">
                <Image
                  src="/insta-icon.svg"
                  alt="Instagram"
                  width={20}
                  height={20}
                  className="sm:w-6 sm:h-6"
                />
              </div>
            </div>
          </div>

          {/* Navigation Links - Top Right */}
          <div className="w-1/2 flex justify-end items-center">
           <div className="flex flex-row-reverse justify-start gap-4 sm:flex-col items-start flex-wrap sm:flex-nowrap sm:items-start">
             <div className="flex justify-start items-center gap-2 md:gap-3">
              <Star className="w-3 h-4 md:w-4 md:h-5 text-primary-dark" />
              <a
                href="#work"
                className="block text-left text-body sm:text-section-heading-small font-noto-serif font-semibold text-primary-dark hover:text-accent-primary transition-colors duration-300 relative group"
              >
                Work
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-primary-dark group-hover:bg-accent-primary transition-all duration-300 ease-out group-hover:w-full group-hover:left-0 transform origin-center"></span>
              </a>
            </div>
            <div className="flex items-center gap-2 md:gap-3">
              <Star className="w-3 h-4 md:w-4 md:h-5 text-primary-dark" />
              <a
                href="#pricing"
                className="block text-left text-body sm:text-section-heading-small font-noto-serif font-semibold text-primary-dark hover:text-accent-primary transition-colors duration-300 relative group"
              >
                Pricing
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-primary-dark group-hover:bg-accent-primary transition-all duration-300 ease-out group-hover:w-full group-hover:left-0 transform origin-center"></span>
              </a>
            </div>
            <div className="flex items-center gap-2 md:gap-3">
              <Star className="w-3 h-4 md:w-4 md:h-5 text-primary-dark" />
              <a
                href="#method"
                className="block text-left text-body sm:text-section-heading-small font-noto-serif font-semibold text-primary-dark hover:text-accent-primary transition-colors duration-300 relative group"
              >
                Process
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-primary-dark group-hover:bg-accent-primary transition-all duration-300 ease-out group-hover:w-full group-hover:left-0 transform origin-center"></span>
              </a>
            </div>
            <div className="flex items-center gap-2 md:gap-3">
              <Star className="w-3 h-4 md:w-4 md:h-5 text-primary-dark" />
              <a
                href="#faq"
                className="block text-left text-body sm:text-section-heading-small font-noto-serif font-semibold text-primary-dark hover:text-accent-primary transition-colors duration-300 relative group"
              >
                Faq
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-primary-dark group-hover:bg-accent-primary transition-all duration-300 ease-out group-hover:w-full group-hover:left-0 transform origin-center"></span>
              </a>
            </div>
            <div className="flex items-center gap-2 md:gap-3">
              <Star className="w-3 h-4 md:w-4 md:h-5 text-primary-dark" />
              <a
                href="#book-call"
                className="block text-left text-body sm:text-section-heading-small font-noto-serif font-semibold text-primary-dark hover:text-accent-primary transition-colors duration-300 relative group"
              >
                Book a call
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-primary-dark group-hover:bg-accent-primary transition-all duration-300 ease-out group-hover:w-full group-hover:left-0 transform origin-center"></span>
              </a>
            </div>
           </div>
          </div>
        </div>

        <div className="w-full flex items-end justify-between">
          {/* Logo - Bottom Left */}
          <div className="">
            <Image
              src="/logo-light.svg"
              alt="DYO Digitals"
              width={120}
              height={129}
              className="sm:w-[140px] sm:h-[151px] md:w-[160px] md:h-[172px] lg:w-[180px] lg:h-[194px] md:-mb-3"
            />
          </div>
          {/* Copyright Footer - positioned at bottom right */}

          <div className="flex justify-end w-full sm:w-auto">
            <p className="text-body-sm sm:text-body leading-none z-10 font-aileron text-primary-dark/70">
              2025, Dyo Digitals, All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <div
      className="relative h-[600px]"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="relative h-[calc(100vh+600px)] -top-[100vh]">
        <div className="h-[600px] sticky top-[calc(100vh-600px)]">
          <FooterContent />
        </div>
      </div>
    </div>
  );
};

export default Footer;
