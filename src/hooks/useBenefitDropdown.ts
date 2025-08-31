"use client";

import { useRef, useState, useEffect } from "react";
import { useAnimate } from "motion/react";

export const useBenefitDropdown = (isExpanded: boolean) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [shouldRender, setShouldRender] = useState(isExpanded);
  const [scope, animate] = useAnimate();

  useEffect(() => {
    if (isExpanded) {
      setShouldRender(true);
    }
  }, [isExpanded]);

  useEffect(() => {
    const content = contentRef.current;
    const image = imageRef.current;

    if (isExpanded && content && image) {
      // Set initial states BEFORE animating to prevent jitter
      content.style.height = "0px";
      content.style.opacity = "0";
      content.style.transform = "translateY(-20px)";
      
      image.style.clipPath = "inset(50%)";
      image.style.transform = "scale(0.8)";

      // Animate content in
      animate(content, 
        {
          height: "auto",
          opacity: 1,
          y: 0,
        },
        {
          duration: 0.5,
          ease: [0.25, 0.46, 0.45, 0.94],
        }
      );

      // Animate image in with clip-path (slight delay for smoother sequence)
      setTimeout(() => {
        animate(image,
          {
            clipPath: "inset(0%)",
            scale: 1,
          },
          {
            duration: 0.6,
            ease: [0.25, 0.46, 0.45, 0.94],
          }
        );
      }, 100);

    } else if (shouldRender && content && image) {
      // Animate image out first
      animate(image, {
        clipPath: "inset(50%)",
        scale: 0.8,
      }, {
        duration: 0.4,
        ease: [0.55, 0.06, 0.68, 0.19],
      });

      // Animate content out with delay
      animate(content, {
        height: "0px",
        opacity: 0,
        y: -20,
      }, {
        duration: 0.5,
        delay: 0.1,
        ease: [0.45, 0, 0.55, 1],
      }).then(() => {
        setShouldRender(false);
      });
    }
  }, [isExpanded, shouldRender, animate]);

  return { contentRef, imageRef, containerRef, shouldRender };
};
