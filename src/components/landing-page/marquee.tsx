"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Star from "@/components/icons/star";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Marquee() {
  const containerRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const marquee = marqueeRef.current;
    if (!marquee) return;

    // Get the width of one complete set
    const marqueeWidth = marquee.scrollWidth / 2;

    // Create the animation but don't start it yet
    const marqueeAnimation = gsap.to(marquee, {
      x: -marqueeWidth,
      duration: 30,
      ease: "none",
      repeat: -1,
      paused: true, // Start paused
    });

    // Use ScrollTrigger to control when animation plays
    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top bottom", // Start when top of marquee hits bottom of viewport
      end: "bottom top",   // End when bottom of marquee hits top of viewport
      onEnter: () => marqueeAnimation.play(),
      onLeave: () => marqueeAnimation.pause(),
      onEnterBack: () => marqueeAnimation.play(),
      onLeaveBack: () => marqueeAnimation.pause(),
    });

    // Cleanup function
    return () => {
      marqueeAnimation.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, { scope: containerRef });

  // Text items to display
  const items = [
    "What we do",
    "Conceptualization", 
    "Full Branding",
    "UI/UX Design"
  ];

  // Create the marquee content with text and stars
  const marqueeContent = items.map((item, index) => (
    <div key={index} className="flex items-center shrink-0">
      <span className="text-secondary-light font-noto-serif font-semibold text-lg md:text-xl whitespace-nowrap">
        {item}
      </span>
      <Star className="w-4 h-5 md:w-5 md:h-6 lg:w-6 lg:h-7 text-primary-light mx-16 md:mx-24 lg:mx-32 shrink-0" />
    </div>
  ));

  return (
    <div 
      ref={containerRef}
      className="w-full overflow-hidden bg-primary-dark py-3"
    >
      <div 
        ref={marqueeRef}
        className="flex items-center whitespace-nowrap"
      >
        {/* First set */}
        {marqueeContent}
        {/* Duplicate set for seamless loop */}
        {marqueeContent}
      </div>
    </div>
  );
}
