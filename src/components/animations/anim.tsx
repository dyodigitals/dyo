"use client";

import React from "react";
import { motion, useInView, Variants } from "motion/react";
import { useRef } from "react";

export const slideUp: Variants = {
  initial: {
    y: "100%"
  },
  open: (i: number) => ({
    y: "0%",
    transition: { duration: 0.5, delay: 0.01 * i }
  }),
  closed: {
    y: "100%",
    transition: { duration: 0.5 }
  }
};

export const opacity: Variants = {
  initial: {
    opacity: 0
  },
  open: {
    opacity: 1,
    transition: { duration: 0.5 }
  },
  closed: {
    opacity: 0,
    transition: { duration: 0.5 }
  }
};

interface AnimatedTextProps {
  text: string;
  className?: string;
  wordClassName?: string;
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({ 
  text, 
  className = "", 
  wordClassName = "" 
}) => {
  const description = useRef(null);
  const isInView = useInView(description);

  return (
    <div ref={description} className={className}>
      <p>
        {text.split(" ").map((word, index) => (
          <span 
            key={index} 
            className={`inline-block overflow-hidden ${wordClassName}`}
            style={{ marginRight: '0.25em' }}
          >
            <motion.span 
              variants={slideUp} 
              custom={index} 
              animate={isInView ? "open" : "closed"}
              className="inline-block"
            >
              {word}
            </motion.span>
          </span>
        ))}
      </p>
    </div>
  );
};