"use client";

import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

interface SplitTextMaskOptions {
  trigger?: string | HTMLElement | null;
  start?: string | (() => string);
  end?: string | (() => string);
  stagger?: number;
  duration?: number;
  ease?: string;
  splitType?: "words" | "chars" | "lines";
  direction?: "up" | "down" | "left" | "right";
  maskType?: "words" | "lines" | "chars";
  onComplete?: () => void;
  onStart?: () => void;
}

export const useSplitTextMask = (options: SplitTextMaskOptions = {}) => {
  const textRef = useRef<HTMLParagraphElement>(null);
  const splitTextRef = useRef<SplitText | null>(null);
  const scrollTriggerRef = useRef<ScrollTrigger | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const {
    trigger = null,
    start = () => `top ${window.innerHeight * 0.85}px`, // Better mobile timing
    end = () => `bottom ${window.innerHeight * 0.1}px`,
    stagger = 0.01,
    duration = 0.5,
    ease = "power2.out",
    splitType = "words",
    direction = "up",
    maskType = "words",
    onComplete,
    onStart
  } = options;

  useGSAP(() => {
    if (!textRef.current || isMobile) return; // Skip animation on mobile

    // Add a small delay to ensure DOM is ready, especially on mobile
    const initAnimation = () => {
      try {
        // Create SplitText instance with built-in masking
        splitTextRef.current = new SplitText(textRef.current, {
          type: splitType,
          mask: maskType,
          wordsClass: "split-word",
          charsClass: "split-char", 
          linesClass: "split-line"
        });

        const elements = splitTextRef.current[splitType];

        if (elements && elements.length > 0) {
          // Set initial state
          gsap.set(elements, {
            y: direction === "up" ? "100%" : direction === "down" ? "-100%" : 0,
            x: direction === "left" ? "100%" : direction === "right" ? "-100%" : 0,
          });

          // Create ScrollTrigger animation
          scrollTriggerRef.current = ScrollTrigger.create({
            trigger: trigger || textRef.current,
            start: typeof start === "function" ? start : start,
            end: typeof end === "function" ? end : end,
            onEnter: () => {
              onStart?.();
              gsap.to(elements, {
                y: 0,
                x: 0,
                duration: duration,
                stagger: stagger,
                ease: ease,
                onComplete: onComplete,
              });
            },
            onLeave: () => {
              gsap.to(elements, {
                y: direction === "up" ? "100%" : direction === "down" ? "-100%" : 0,
                x: direction === "left" ? "100%" : direction === "right" ? "-100%" : 0,
                duration: duration,
                stagger: stagger,
                ease: ease,
              });
            },
            onEnterBack: () => {
              onStart?.();
              gsap.to(elements, {
                y: 0,
                x: 0,
                duration: duration,
                stagger: stagger,
                ease: ease,
                onComplete: onComplete,
              });
            },
            onLeaveBack: () => {
              gsap.to(elements, {
                y: direction === "up" ? "100%" : direction === "down" ? "-100%" : 0,
                x: direction === "left" ? "100%" : direction === "right" ? "-100%" : 0,
                duration: duration,
                stagger: stagger,
                ease: ease,
              });
            },
          });
        }
      } catch (error) {
        console.warn("SplitText animation failed:", error);
      }
    };

    // Small delay for mobile compatibility
    const timer = setTimeout(initAnimation, 100);

    // Cleanup function
    return () => {
      clearTimeout(timer);
      if (scrollTriggerRef.current) {
        scrollTriggerRef.current.kill();
      }
      if (splitTextRef.current) {
        splitTextRef.current.revert();
      }
    };
  }, [trigger, start, end, stagger, duration, ease, splitType, direction, maskType, onComplete, onStart, isMobile]);

  return { textRef };
};
