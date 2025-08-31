"use client";
import React from 'react';
import { useEffect, useRef } from 'react';
import { motion, useAnimate } from 'motion/react';
import { cn } from '@/lib/utils';
import ButtonArrow from '../icons/button-arrow';

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
  const originalTextRef = useRef<HTMLDivElement>(null);
  const duplicateTextRef = useRef<HTMLDivElement>(null);
  const timeoutId = useRef<NodeJS.Timeout | null>(null);
  const [scope, animate] = useAnimate();
  
  const manageMouseEnter = () => {
    if(timeoutId.current) clearTimeout(timeoutId.current);
    
    // Animate text slide up effect only
    if (originalTextRef.current && duplicateTextRef.current) {
      // Slide original text up and out
      animate(originalTextRef.current, {
        y: "-100%",
      }, {
        duration: 0.3,
        ease: [0.25, 0.46, 0.45, 0.94],
      });
      
      // Slide duplicate text up from bottom
      animate(duplicateTextRef.current, {
        y: "0%",
      }, {
        duration: 0.3,
        ease: [0.25, 0.46, 0.45, 0.94],
      });
    }
  };

  const manageMouseLeave = () => {
    // Remove timeout - animate immediately
    if (originalTextRef.current && duplicateTextRef.current) {
      // Slide original text back down
      animate(originalTextRef.current, {
        y: "0%",
      }, {
        duration: 0.3,
        ease: [0.25, 0.46, 0.45, 0.94],
      });
      
      // Slide duplicate text back down below
      animate(duplicateTextRef.current, {
        y: "100%",
      }, {
        duration: 0.3,
        ease: [0.25, 0.46, 0.45, 0.94],
      });
    }
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
    <motion.div
      ref={scope}
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
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.1 }}
      {...attributes}
    >
      <div className="relative z-10 flex items-center gap-3 overflow-hidden">
        {/* Original text */}
        <div 
          ref={originalTextRef}
          className="flex items-center gap-3"
          style={{ color: textColor }}
        >
          {children}
          {showArrow && (
            <ButtonArrow className="w-3 h-3" />
          )}
        </div>
        
        {/* Duplicate text for slide effect */}
        <div 
          ref={duplicateTextRef}
          className="absolute inset-0 flex items-center gap-3"
          style={{ 
            transform: 'translateY(100%)',
            color: hoverTextColor
          }}
        >
          {children}
          {showArrow && (
            <ButtonArrow className="w-3 h-3" />
          )}
        </div>
      </div>
    </motion.div>
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