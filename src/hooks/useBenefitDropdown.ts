"use client";

import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export const useBenefitDropdown = (isExpanded: boolean) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [shouldRender, setShouldRender] = useState(isExpanded);

  useEffect(() => {
    if (isExpanded) {
      setShouldRender(true);
    }
  }, [isExpanded]);

  useGSAP(() => {
    const content = contentRef.current;
    const image = imageRef.current;

    if (isExpanded) {
      // Animate content in
      if (content) {
        gsap.fromTo(
          content,
          {
            height: 0,
            opacity: 0,
            y: -20,
          },
          {
            height: "auto",
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: "power2.out",
          }
        );
      }

      // Animate image in with clip-path
      if (image) {
        gsap.fromTo(
          image,
          {
            clipPath: "inset(50%)",

            scale: 0.8,
          },
          {
            clipPath: "inset(0%)",

            scale: 1,
            duration: 0.6,
            delay: 0.2,
            ease: "power2.out",
          }
        );
      }
    } else if (shouldRender) {
      // Animate image out first
      if (image) {
        gsap.to(image, {
          clipPath: "inset(50%)",

          scale: 0.8,
          duration: 0.4,
          ease: "power2.in",
        });
      }

      // Animate content out with delay
      if (content) {
        gsap.to(content, {
          height: 0,
          opacity: 0,
          y: -20,
          duration: 0.5,
          delay: 0.1,
          ease: "power2.inOut",
          onComplete: () => {
            setShouldRender(false);
          },
        });
      }
    }
  }, [isExpanded, shouldRender]);

  return { contentRef, imageRef, containerRef, shouldRender };
};
