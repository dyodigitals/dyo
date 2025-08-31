"use client";

import { useRef } from "react";
import { motion, useInView, useMotionValue, useAnimationFrame } from "motion/react";
import Star from "@/components/icons/star";

export default function Marquee() {
  const containerRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);
  
  // Track if marquee is in view with Motion's useInView
  const isInView = useInView(containerRef, { 
    once: false, // Allow retriggering when scrolling back
    margin: "0px 0px 0px 0px" // Trigger when fully in viewport
  });

  // Create a motion value for the x position
  const x = useMotionValue(0);
  
  // Use animation frame to create continuous movement when in view
  useAnimationFrame((time) => {
    if (!marqueeRef.current || !isInView) return;
    
    const marqueeWidth = marqueeRef.current.scrollWidth / 2;
    // Create continuous movement - 30 second duration like GSAP
    const speed = marqueeWidth / 30000; // pixels per millisecond
    const newX = (time * -speed) % marqueeWidth;
    x.set(newX);
  });

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
      <motion.div 
        ref={marqueeRef}
        className="flex items-center whitespace-nowrap"
        style={{ x }}
      >
        {/* First set */}
        {marqueeContent}
        {/* Duplicate set for seamless loop */}
        {marqueeContent}
      </motion.div>
    </div>
  );
}
