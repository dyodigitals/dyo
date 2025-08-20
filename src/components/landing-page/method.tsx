"use client";

import { useState } from "react";
import ChapterBanner from "../shared/chapter-banner";
import Image from "next/image";
import Star from "../icons/star";
import Button from "../ui/button";

const Method = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(0); // Default first card open

  const methodSteps = [
    {
      number: "1.",
      title: "Discover & Strategy",
      description:
        "Before we start, take the time to understand your vision. We'll work closely with you to define your goals, target audience, and what makes you unique.",
      secondDescription:
        "This ensures that we're aligned and sets the foundation for a successful project together.",
      details: [
        "Identify target audiences",
        "Analyse user pain points",
        "Define your unique selling point",
      ],
      buttonText: "Book A call",
      bgColor: "bg-accent-primary",
      textColor: "text-primary-light",
      numberColor: "text-primary-light",
      buttonBg: "#4b2840",
      buttonTextColor: "#FFFDE4",
      buttonHoverBg: "#fffde4",
      buttonHoverText: "#292929",
      buttonHref: "#book-call",
      image: null,
      backgroundImage: null,
    },
    {
      number: "2.",
      title: "Branding & Design",
      description:
        "This is where you'll see the initial mock-up of your site. We start by creating a strategic visual identity and a user-friendly site map.",
      secondDescription:
        "From there, we move into designing every page, focusing on creating an authentic, impactful experience that captures your audience's attention.",
      details: [
        "Sitemap & wireframing",
        "Content structure & information architecture",
        "Branding with your visual identity",
        "Fully tailored design mockup",
      ],
      buttonText: "View Portfolio",
      bgColor: "bg-primary-dark",
      textColor: "text-primary-light",
      numberColor: "text-primary-light",
      buttonBg: "#FFFDE4",
      buttonTextColor: "#fffde4",
      buttonHoverBg: "#fffde4",
      buttonHoverText: "#292929",
      buttonHref: "#work",
      image: null,
      backgroundImage: null,
    },
    {
      number: "3.",
      title: "Development",
      description:
        "Once the design is approved, our developers get to work, transforming the visuals into a high-performance, custom-built website",
      secondDescription:
        "We focus on clean code, lightning-fast speeds, and a seamless experience across all devices. We'll also set you up with a custom content management system so you can easily manage your site.",
      details: [],
      buttonText: "Got a question?",
      bgColor: "bg-secondary-light",
      textColor: "text-primary-dark",
      numberColor: "text-primary-dark",
      buttonBg: "",
      buttonTextColor: "#292929",
      buttonHoverBg: "#4b2840",
      buttonHoverText: "#fffde4",
      buttonHref: "#faq",
      image: null,
      backgroundImage: null,
    },
    {
      number: "4.",
      title: "Launch & Support",
      description:
        "When the site is polished and ready, we press the launch button! But our work doesn't stop there",
      secondDescription:
        "We provide you with the resources and support you need to confidently manage your new online home.",
      details: [],
      buttonText: "Get Started",
      bgColor: "bg-secondary-dark",
      textColor: "text-primary-light",
      numberColor: "text-primary-light",
      buttonBg: "bg-primary-light",
      buttonTextColor: "#262523",
      buttonHoverBg: "#262523",
      buttonHoverText: "#FFFDE4",
      buttonHref: "#book-call",
      image: null,
      backgroundImage: "/launch-support-bg.webp", // You can replace this with your actual image path
    },
  ];

  return (
    <section id="method" className="w-full bg-primary-light">
      <ChapterBanner
        chapterNumber="Chapter 7"
        chapterTitle="THE DYO METHOD"
        className="border-b border-primary-dark"
      />

      <div className="overflow-hidden py-12 md:py-16">
        {/* Mobile Layout */}
        <div className="lg:hidden space-y-6 md:px-[2.5vw] px-4">
          {methodSteps.map((step, index) => (
            <div
              key={index}
              className={`${
                step.backgroundImage
                  ? "bg-cover bg-center bg-no-repeat"
                  : step.bgColor
              } ${
                step.textColor
              } border border-primary-dark rounded-2xl px-6 py-4 transition-all duration-300 relative overflow-hidden`}
              style={
                step.backgroundImage
                  ? {
                      backgroundImage: `url(${step.backgroundImage})`,
                    }
                  : {}
              }
            >
              {/* Background overlay for better text readability when using background image */}
              {step.backgroundImage && (
                <div className="absolute inset-0 bg-black/40 rounded-2xl"></div>
              )}

              <div className="relative z-10">
                <div className="flex items-end gap-4 justify-start mb-4">
                  <span
                    className={`text-4xl md:text-6xl font-noto-serif font-semibold ${step.numberColor}`}
                  >
                    {step.number}
                  </span>
                  <div className="text-right">
                    <h3 className="text-2xl font-noto-serif font-semibold">
                      {step.title}
                    </h3>
                  </div>
                </div>

                <p className="text-sm mb-4 opacity-90">{step.description}</p>

                <p className="text-sm mb-6 opacity-80 leading-relaxed">
                  {step.secondDescription}
                </p>

                {step.details.length > 0 && (
                  <ul className="space-y-2 mb-6">
                    {step.details.map((detail, detailIndex) => (
                      <li
                        key={detailIndex}
                        className="text-sm opacity-80 flex items-center"
                      >
                        <span className="w-1 h-1 bg-current rounded-full mr-3 flex-shrink-0"></span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                )}

                <Button
                  hoverBackgroundColor={step.buttonHoverBg}
                  textColor={step.buttonTextColor}
                  hoverTextColor={step.buttonHoverText}
                  borderColor="#888888"
                  className={`font-aileron font-semibold text-sm ${step.buttonBg}`}
                  showArrow={false}
                  href={`${step.buttonHref}`}
                >
                  {step.buttonText}
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:flex relative w-full md:min-h-[600px] items-stretch px-[2.5vw]">
          {methodSteps.map((step, index) => (
            <div
              key={index}
              className={`${
                step.backgroundImage
                  ? "bg-cover bg-center bg-no-repeat"
                  : step.bgColor
              } ${step.textColor} ${
                index === 0
                  ? "rounded-l-[55px]"
                  : index === methodSteps.length - 1
                  ? "rounded-r-[55px]"
                  : ""
              }  border border-primary-dark transition-all duration-500 ease-in-out cursor-pointer overflow-hidden relative ${
                hoveredCard === index ? "flex-[2]" : "flex-[0.5]"
              }`}
              style={{
                zIndex: methodSteps.length - index,
                marginLeft: index > 0 ? "-20px" : "0",
                ...(step.backgroundImage
                  ? {
                      backgroundImage: `url(${step.backgroundImage})`,
                    }
                  : {}),
              }}
              onMouseEnter={() => setHoveredCard(index)}
            >
              {/* Background overlay for better text readability when using background image */}
              {step.backgroundImage && (
                <div className="absolute inset-0 bg-black/40"></div>
              )}

              {/* Collapsed State */}
              <div
                className={`absolute inset-0 transition-opacity duration-300 z-20 ${
                  hoveredCard === index
                    ? "opacity-0 pointer-events-none"
                    : "opacity-100"
                }`}
              >
                <div className="h-full w-full flex flex-col justify-center items-center relative px-8">
                  {/* Rotated Title - centered */}
                  <div className="transform -rotate-90 absolute">
                    <h3 className="text-3xl font-noto-serif font-semibold whitespace-nowrap leading-none">
                      {step.title}
                    </h3>
                  </div>

                  {/* Number - positioned at bottom */}
                  <div className="absolute bottom-8 left-[55%] transform -translate-x-1/2">
                    <span
                      className={`text-8xl font-noto-serif font-semibold ${step.numberColor} leading-none`}
                    >
                      {step.number}
                    </span>
                  </div>
                </div>
              </div>

              {/* Expanded State */}
              <div
                className={`absolute inset-0 transition-opacity duration-300 z-20 ${
                  hoveredCard === index
                    ? "opacity-100"
                    : "opacity-0 pointer-events-none"
                }`}
                style={{
                  paddingLeft: index > 0 ? "48px" : "32px",
                  paddingRight: "32px",
                  paddingTop: "32px",
                  paddingBottom: "32px",
                }}
              >
                <div className="h-full flex flex-col relative">
                  {/* Title with Star Icon */}
                  <div className="flex-shrink-0 mb-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Star className="w-8 h-8" filled />
                      <h3 className="lg:text-4xl xl:text-5xl font-noto-serif font-semibold">
                        {step.title}
                      </h3>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 flex flex-col">
                    {/* Only show image for the 4th card (Launch & Support) */}
                    {step.image && index === 3 && (
                      <div className="mb-6 flex-shrink-0">
                        <Image
                          src={step.image}
                          alt={step.title}
                          width={400}
                          height={250}
                          className="w-full h-40 object-cover rounded-lg"
                        />
                      </div>
                    )}

                    <p className="lg:text-body xl:text-body-lg mb-4 opacity-90 leading-relaxed flex-shrink-0 tracking-tight">
                      {step.description}
                    </p>

                    <p className="lg:text-body xl:text-body-lg mb-6 leading-relaxed flex-shrink-0 tracking-tight font-semibold">
                      {step.secondDescription}
                    </p>

                    {step.details.length > 0 && (
                      <ul className="space-y-3 mb-8 flex-1">
                        {step.details.map((detail, detailIndex) => (
                          <li
                            key={detailIndex}
                            className="lg:text-[16px] xl:text-body text-secondary-light/90 flex items-center"
                          >
                            <span className="w-2 h-2 bg-current rounded-full mr-4 flex-shrink-0"></span>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  {/* Bottom section with button and number aligned */}
                  <div className="flex-shrink-0 flex items-end justify-between">
                    <Button
                      hoverBackgroundColor={step.buttonHoverBg}
                      textColor={step.buttonTextColor}
                      hoverTextColor={step.buttonHoverText}
                      borderColor="#888888"
                      className={`font-aileron font-semibold px-8 py-3 ${step.buttonBg}`}
                      showArrow={true}
                      href={`${step.buttonHref}`}
                    >
                      {step.buttonText}
                    </Button>

                    {/* Number aligned with button */}
                    <span
                      className={`text-8xl font-noto-serif font-semibold ${step.numberColor} leading-none`}
                    >
                      {step.number}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Method;
