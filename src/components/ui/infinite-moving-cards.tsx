"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import Star from "../icons/star";
import ProfileIcon from "../icons/profile-icon";
import Image from "next/image";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    quote: string;
    name: string;
    title: string;
    stars?: number;
    services: string[];
    image?: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [start, setStart] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  // Check if the viewport is mobile-sized
  const checkIfMobile = () => {
    setIsMobile(window.innerWidth < 768);
  };

  useEffect(() => {
    // Initial check on mount
    checkIfMobile();
    
    // Add window resize listener
    window.addEventListener("resize", checkIfMobile);
    
    // Initialize animations
    addAnimation();
    
    // Cleanup
    return () => {
      window.removeEventListener("resize", checkIfMobile);
    };
  }, []); // Remove addAnimation from dependencies

  // Simple touch handlers for mobile pause
  const handleTouchStart = () => {
    setIsPaused(true);
  };

  const handleTouchEnd = () => {
    setIsPaused(false);
  };

  // Remove the extra useEffect that was causing speed re-application
  
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      // Same speeds for both mobile and desktop - let CSS handle it
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "25s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "50s");
      }
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 mx-auto overflow-hidden [mask-image:linear-gradient(to_right,transparent,#FFFDE4_3%,#FFFDE4_97%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-8 py-4",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]",
          isPaused && "[animation-play-state:paused]"
        )}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {items.map((item, idx) => (
          <li
            className="md:min-w-[550px] w-[350px] flex flex-col gap-2 flex-shrink-0 flex-grow-0 bg-accent-primary px-2 pb-2 pt-2 rounded-2xl border border-secondary shadow-left"
            key={`${item.name}-${idx}`}
          >
            <div className="flex justify-between items-center px-1">
              <div className="flex items-center gap-2 flex-1">
                {item.services.map((service, index) => (
                  <span key={index}>
                    <span className="text-primary-light lg:text-[16px] text-sm font-aileron font-semibold">
                      {service}
                    </span>
                    {index < item.services.length - 1 && (
                      <span className="text-primary-light mx-2">•</span>
                    )}
                  </span>
                ))}
              </div>
              
              <Star className="text-primary-light w-5 h-6" filled/>
            </div>

            <div className="bg-primary-light w-full h-full rounded-lg p-4">
              <div className="flex flex-col h-full justify-between gap-4">
                <div className="flex-grow">
                  <p className="lg:text-[16px] text-sm font-aileron text-secondary-dark break-words tracking-tight">
                    &quot;{item.quote}&quot;
                  </p>
                </div>

                <div className="mt-4 h-14 flex items-end gap-3">
                  {item.image ? (
                    <div className="w-12 h-12 flex-shrink-0 rounded-full overflow-hidden border-2 border-accent-primary">
                      <Image
                        src={item.image}
                        alt={`${item.name} profile`}
                        width={48}
                        height={48}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : (
                    <ProfileIcon className="w-12 h-12 text-accent-primary flex-shrink-0" />
                  )}
                  
                  <div className="flex flex-col justify-end min-h-[48px]">
                    <p className="font-semibold text-body-lg font-noto-serif text-primary-dark leading-tight">
                      {item.name}
                    </p>
                    <p className="body-text-sm text-foreground font-aileron leading-tight">
                      {item.title}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};