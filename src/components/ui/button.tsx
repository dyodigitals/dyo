"use client";

import React from 'react';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { cn } from '@/lib/utils';
import ButtonArrow from '../icons/button-arrow';

gsap.registerPlugin(useGSAP, ScrollTrigger);

interface ButtonProps {
  children: React.ReactNode;
  backgroundColor?: string;
  hoverBackgroundColor?: string;
  textColor?: string;
  hoverTextColor?: string;
  borderColor?: string;
  href?: string;
  onClick?: () => void;
  className?: string;
  showArrow?: boolean;
  [key: string]: unknown;
}

export default function Button({
  children, 
  backgroundColor = "#4B2840", 
  hoverBackgroundColor,
  textColor = "#292929",
  hoverTextColor = "#FFFDE4",
  borderColor = "#888888",
  href,
  onClick,
  className = "",
  showArrow = false,
  ...attributes
}: ButtonProps) {
  const circle = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const timeline = useRef<gsap.core.Timeline | null>(null);
  const timeoutId = useRef<NodeJS.Timeout | null>(null);

  // Use provided hover background color or default to the main background color
  const finalHoverBgColor = hoverBackgroundColor || backgroundColor;

  useGSAP(() => {
    timeline.current = gsap.timeline({paused: true});
    timeline.current
      .to(circle.current, {top: "-25%", width: "150%", duration: 0.4, ease: "power3.in"}, "enter")
      .to(circle.current, {top: "-150%", width: "125%", duration: 0.25}, "exit");
  }, []);
  
  const manageMouseEnter = () => {
    if(timeoutId.current) clearTimeout(timeoutId.current);
    timeline.current?.tweenFromTo('enter', 'exit');
    
    // Animate text color change
    if (textRef.current) {
      gsap.to(textRef.current, {
        color: hoverTextColor,
        duration: 0.3,
        ease: "power2.out"
      });
    }
  };

  const manageMouseLeave = () => {
    timeoutId.current = setTimeout(() => {
      timeline.current?.play();
      
      // Animate text color back
      if (textRef.current) {
        gsap.to(textRef.current, {
          color: textColor,
          duration: 0.3,
          ease: "power2.out"
        });
      }
    }, 300);
  };

  const handleClick = (e: React.MouseEvent) => {
    if (href) {
      e.preventDefault();
      // Smooth scroll to the target section
      const targetElement = document.querySelector(href);
      if (targetElement) {
        targetElement.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
    if (onClick) {
      onClick();
    }
  };

  // Clean up timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutId.current) {
        clearTimeout(timeoutId.current);
      }
    };
  }, []);

  const buttonContent = (
    <div 
      className={cn(
        "relative overflow-hidden cursor-pointer",
        "rounded-[3em] border",
        "flex items-center justify-center",
        "px-10 py-3",
        "w-fit",
        className
      )}
      style={{
        borderColor: borderColor
      }}
      onMouseEnter={manageMouseEnter} 
      onMouseLeave={manageMouseLeave}
      onClick={handleClick}
      {...attributes}
    >
      <div 
        ref={textRef}
        className="relative z-10 flex items-center gap-3"
        style={{
          color: textColor
        }}
      >
        {children}
        {showArrow && (
          <ButtonArrow className="w-3 h-3" />
        )}
      </div>
      <div 
        ref={circle} 
        style={{backgroundColor: finalHoverBgColor}} 
        className={cn(
          "absolute w-full h-[150%]",
          "rounded-[50%] top-full"
        )}
      />
    </div>
  );

  // If href is provided, wrap in anchor tag for accessibility
  if (href) {
    return (
      <a href={href} className="inline-block" onClick={handleClick}>
        {buttonContent}
      </a>
    );
  }

  return buttonContent;
}