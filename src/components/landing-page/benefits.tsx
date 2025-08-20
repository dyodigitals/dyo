"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import ShinyStar from "../icons/flashy-star";
import Star from "../icons/star";
import ChapterBanner from "../shared/chapter-banner";
import { BenefitItem } from "../ui/benefit-item";
import Button from "../ui/button";
import { useSplitTextMask } from "@/hooks/useSplitTextMask";

const Benefits = () => {
  const [expandedItem, setExpandedItem] = useState<number | null>(0);
  const [scallop, setScallop] = useState({ rx: 1.1, ry: 15 });

  // Split text animation matching Framer Motion example
  const { textRef: headerTextRef } = useSplitTextMask({
    start: () => `top ${window.innerHeight * 0.9}px`,
    stagger: 0.01, // Exact match to reference (delay: 0.01 * i)
    duration: 0.6, // Match Framer Motion duration
    splitType: "words",
    maskType: "words",
    direction: "up",
    ease: "power3.out"
  });

  useEffect(() => {
    const updateScallop = () => {
      const width = window.innerWidth;

      if (width <= 479) {
        setScallop({ rx: 2.1, ry: 15 });
      } else if (width <= 639) {
        setScallop({ rx: 2.1, ry: 13 });
      } else if (width <= 767) {
        setScallop({ rx: 1.7, ry: 13.5 });
      } else if (width <= 1023) {
        setScallop({ rx: 1.3, ry: 14 });
      } else {
        setScallop({ rx: 1.1, ry: 15 });
      }
    };

    updateScallop();
    window.addEventListener("resize", updateScallop);
    return () => window.removeEventListener("resize", updateScallop);
  }, []);

  const benefitItems = [
    {
      title: "Blending in instead of standing out? ",
      content:
        "Template sites don't convert - you blend into the noise with thousands of others. We make everything from scratch down to the very last detail and make sure your site leaves a lasting impression; because your work deserves to feel exactly like you.",
      icon: Star,
      image: "/benefit-1.png",
    },
    {
      title: "Struggling to make something that feels exactly like you?",
      content:
        "We know it’s hard to capture and convey the mood, tone, and personality behind your work. That’s why we do it for you - you just tell us what your aesthetic is and we’ll handle the rest. ",
      icon: Star,
      image: "/benefit-2-v-2.png", // Replace with actual image
    },
    {
      title: "Your growth and why a brand matters",
      content:
        "A strong brand elevates your perceived value and lets you raise your prices confidently, and at the same time - land your ideal clients that you actually want.",
      icon: Star,
      image: "/benefit-3.jpg", // Replace with actual image
    },
  ];

  return (
    <section className="w-full">
      <ChapterBanner
        chapterNumber="Chapter 2"
        chapterTitle="WHY IT MATTERS"
        className="mt-8 border-b-[0.1px] border-primary-light"
      />

      {/* Purple header section */}
      <div className="w-full bg-accent-primary relative overflow-hidden py-8 md:py-10">
        {/* Dots background */}
        <div className="absolute -bottom-20 -right-20 opacity-90">
          <Image
            src="/dots-group-light.svg"
            alt=""
            width={300}
            height={335}
            className="object-contain"
          />
        </div>

        {/* Star icon top right */}
        <div className="hidden md:block absolute top-4 right-8 md:top-10 md:right-10">
          <ShinyStar className="w-8 h-10 md:w-18 md:h-18 text-primary-light" />
        </div>

        <div className="relative z-10 px-4 md:px-[2.5vw]">
          {/* Main content */}
          <div className="w-full">
            <h3 className="text-section-heading font-noto-serif font-semibold text-primary-light mb-4 leading-tight font-stretch-extra-condensed">
              <span className="italic"> Your craft is unique — </span>but does
              your brand and website show it?
            </h3>

            <p 
              ref={headerTextRef}
              className="text-body-lg font-aileron text-secondary-light mb-6 max-w-2xl leading-relaxed tracking-tight"
            >
              We help you turn your vision into a distinctive digital identity —
              one that reflects your personality, amplifies your brand, and
              works as hard as you do to attract the right people.
            </p>

            <Button
              hoverBackgroundColor="#292929"
              textColor="#292929"
              hoverTextColor="#FFFDE4"
              borderColor="#888888"
              className="font-aileron font-semibold text-body bg-primary-light"
              showArrow={false}
              href="#services"
            >
              Services
            </Button>
          </div>
        </div>

        {/* Responsive scalloped bottom border */}
        <div className="absolute bottom-0 left-0 w-full h-4 overflow-hidden">
          <svg
            viewBox="0 0 400 20"
            className="w-full h-full"
            preserveAspectRatio="none"
            style={{ transform: "scaleX(3)" }}
          >
            {Array.from({ length: 99 }, (_, i) => (
              <ellipse
                key={i}
                cx={i * 3.5 + 2.3}
                cy="20"
                rx={scallop.rx}
                ry={scallop.ry}
                fill="#FFFDE4"
              />
            ))}
          </svg>
        </div>
      </div>

      {/* Cream benefits section */}
      <div className="w-full bg-primary-light px-4 md:px-[2.5vw] py-12 md:py-16">
        <h2 className="text-section-heading-large font-noto-serif font-semibold text-primary-dark mb-12 font-stretch-extra-condensed">
          Benefits
        </h2>

        <div className="space-y-8">
          {benefitItems.map((item, index) => (
            <BenefitItem
              key={index}
              item={item}
              index={index}
              isExpanded={expandedItem === index}
              onToggle={() =>
                setExpandedItem(expandedItem === index ? null : index)
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
