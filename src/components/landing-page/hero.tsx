"use client";
import React from "react";
import Navbar from "../shared/navbar";
import ChapterBanner from "../shared/chapter-banner";
import { GroupedStars } from "../icons/grouped-stars";
import Image from "next/image";
import Button from "../ui/button";

const Hero = () => {
  return (
    <section className="w-full bg-primary-light min-h-screen relative overflow-hidden">
      <Navbar />
      <ChapterBanner
        chapterNumber="Chapter 1"
        chapterTitle="THE INTRODUCTION"
        className="mt-2"
      />

      {/* Desktop Layout */}
      <div className="hidden md:flex w-full px-4 md:px-[2.5vw] h-[calc(100vh-120px)] flex-col justify-between py-12 relative">
        {/* Right side container for image and dots - desktop */}
        <div className="absolute inset-y-0 left-[54%] lg:left-[58%] 2xl:left-[54%] transform -translate-x-1/2 w-[46%] lg:w-[50%] h-full flex items-center justify-center pointer-events-none">
          <div className="relative flex items-center justify-center">
            <Image
              src="/digital-dots.svg"
              alt=""
              width={460}
              height={460}
              className="opacity-50 hero-dots object-contain"
              priority
            />

            <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-auto">
              <div className="relative hero-image-container ring-1 ring-primary-dark rounded-xl bg-primary-light scale-95">
                <div className="absolute -top-18 -right-17 z-30">
                  <GroupedStars className="w-12 h-16 lg:w-16 lg:h-20 xl:w-18 xl:h-22 text-accent-primary" />
                </div>

                <div className="absolute -bottom-12 -left-14 z-30">
                  <GroupedStars className="w-10 h-12 lg:w-14 lg:h-16 xl:w-16 xl:h-18 text-accent-primary scale-75" />
                </div>

                <Image
                  src="/hero-2.webp"
                  alt="Creative design showcase"
                  width={240}
                  height={315}
                  className="hero-image-frame object-cover rounded-[6px]"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* Desktop content */}
        <div className=" z-20">
          <h1 className="text-hero font-noto-serif font-semibold text-primary-dark mb-8 leading-none font-stretch-extra-condensed">
            We Create Brands
          </h1>

          <p className="text-body-lg font-semibold font-aileron text-primary-dark mb-8 xl:max-w-[480px] lg:max-w-md max-w-sm leading-relaxed tracking-tight">
            Elevate your business with stunning, custom-coded websites that
            leave an impression. Designed with you in mind.
          </p>

          <Button
            hoverBackgroundColor="#4B2840"
            textColor="#292929"
            hoverTextColor="#FFFDE4"
            borderColor="#888888"
            className="font-aileron font-semibold text-body"
            showArrow={true}
            href="#book-call"
          >
            Contact
          </Button>
        </div>

        <div className="w-full flex justify-end z-20">
          <h2 className="text-hero-secondary font-noto-serif font-semibold text-primary-dark italic leading-none font-stretch-extra-condensed">
            That Feel Like You
          </h2>
        </div>
      </div>

      {/* Mobile/Tablet Layout */}
      <div className="md:hidden w-full px-4 py-8 space-y-8 relative min-h-[calc(100vh-120px)]">
        {/* Combined mobile hero text */}
        <div className="text-center space-y-3">
          <h1 className="text-hero font-noto-serif font-semibold text-primary-dark leading-none font-stretch-extra-condensed">
            We Create Brands
          </h1>
          <h2 className="text-hero-secondary font-noto-serif font-semibold text-primary-dark italic leading-none font-stretch-extra-condensed">
            That Feel Like You
          </h2>
        </div>

        {/* Mobile image container */}
        <div className="flex justify-center items-center relative">
          <div className="relative flex items-center justify-center">
            <Image
              src="/digital-dots.svg"
              alt=""
              width={320}
              height={320}
              className="opacity-50 hero-dots object-contain"
              priority
            />

            <div className="absolute inset-0 flex items-center justify-center z-10">
              <div className="relative hero-image-container border border-primary-dark rounded-xl bg-primary-light shadow-sm">
                {/* Mobile stars - smaller and closer */}
                <div className="absolute -top-8 -right-8 z-30">
                  <GroupedStars className="w-8 h-10 text-accent-primary" />
                </div>

                <div className="absolute -bottom-6 -left-6 z-30">
                  <GroupedStars className="w-6 h-8 text-accent-primary scale-75" />
                </div>

                <Image
                  src="/hero-1.jpg"
                  alt="Creative design showcase"
                  width={160}
                  height={210}
                  className="hero-image-frame object-cover rounded-[6px]"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* Mobile content */}
        <div className="text-center space-y-6 px-4">
          <p className="text-body-lg font-semibold font-aileron text-primary-dark leading-relaxed max-w-sm mx-auto tracking-tight">
            Elevate your business with stunning, custom-coded websites that
            leave an impression. Designed with you in mind.
          </p>

          <div className="flex justify-center">
            <Button
              backgroundColor="#4B2840"
              hoverBackgroundColor="#4B2840"
              textColor="#292929"
              hoverTextColor="#FFFDE4"
              borderColor="#888888"
              className="font-aileron font-semibold text-body"
              showArrow={true}
              href="#book-call"
            >
              Contact
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
