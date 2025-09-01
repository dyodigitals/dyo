"use client";

import { ReactNode } from "react";
import { easeOut, motion } from "motion/react";
import Star from "../icons/star";
import Image from "next/image";
import Button from "./button";

interface PricingCardProps {
  title: string;
  description: string;
  features: string[];
  price: string;
  icon?: ReactNode;
  iconClassName?: string;
  className?: string;
}

const PricingCard = ({
  title,
  description,
  features,
  price,
  icon,
  iconClassName = "",
  className = "",
}: PricingCardProps) => {
  return (
    <motion.div 
      className={`max-w-xl relative mx-auto ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="absolute w-[114%] bottom-0 left-1/2 -translate-x-1/2 h-6 bg-primary-light z-20"
        style={{
          maskImage: "url('/ticket-dots.svg')",
          maskRepeat: "repeat-x",
          maskPosition: "0 bottom",
          WebkitMaskImage: "url('/ticket-dots.svg')",
          WebkitMaskRepeat: "repeat-x",
          WebkitMaskPosition: "0 bottom",
        }}
        initial={{ scaleX: 0.8, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      />
      
      {/* Card container */}
      <div className="rounded-2xl relative">
        {/* Header with price */}
        <motion.div 
          className="w-full px-6 bg-primary-light rounded-tl-2xl rounded-tr-2xl border border-primary-dark flex items-center justify-center py-6"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <motion.p 
            className="font-aileron font-bold lg:text-2xl md:text-xl text-lg leading-none text-primary-dark"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.4, delay: 0.3, type: "spring", stiffness: 90 }}
          >
            {price}
          </motion.p>
        </motion.div>

        {/* Main content area */}
        <motion.div 
          className="w-full bg-primary-dark relative pb-10 pt-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          {/* Title, description and icon section */}
          <motion.div 
            className="w-full px-6 py-6 flex items-start justify-between mb-8"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {/* Title and description */}
            <div className="flex-1 pr-4">
              <motion.h3 
                className="text-primary-light font-noto-serif font-stretch-extra-condensed lg:text-3xl md:text-2xl text-xl font-bold mb-3 leading-tight"
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.4 }}
              >
                {title}
              </motion.h3>
              <motion.p 
                className="text-primary-light/90 font-aileron text-body tracking-tight font-medium leading-relaxed"
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.5 }}
              >
                {description}
              </motion.p>
            </div>

            {/* Icon */}
            {icon && (
              <motion.div 
                className={`flex-shrink-0 ${iconClassName}`}
                initial={{ clipPath: "inset(100% 100% 100% 100%)", rotate: 180 }}
                animate={{ clipPath: "inset(0% 0% 0% 0%)", rotate: 0 }}
                transition={{ 
                  duration: 0.8, 
                  delay: 0.6,
                  ease: easeOut,
                }}
              >
                {icon}
              </motion.div>
            )}
          </motion.div>

          {/* Semi-circles and dotted line section */}
          <motion.div 
            className="relative px-6 mb-8"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {/* Left semi-circle */}
            <motion.div 
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2 z-10"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <Image
                src="/semi-circle.svg"
                alt=""
                width={32}
                height={48}
                className="text-primary-light"
              />
            </motion.div>

            {/* Right semi-circle */}
            <motion.div 
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2 z-10"
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <Image
                src="/semi-circle.svg"
                alt=""
                width={32}
                height={48}
                className="text-primary-light rotate-180"
              />
            </motion.div>

            {/* Dotted line aligned with semi-circles */}
            <motion.div 
              className="border-t-[2px] border-dashed border-secondary-light/80"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
            />
          </motion.div>

          {/* Features list - positioned below the line */}
          <div className="space-y-4 pb-8 pt-2 px-6">
            {features.map((feature, index) => (
              <motion.div 
                key={index} 
                className="flex items-center gap-4"
                initial={{ x: -30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ 
                  duration: 0.4, 
                  delay: 0.9 + (index * 0.1),
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
              >
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ 
                    duration: 0.3, 
                    delay: 1 + (index * 0.1),
                    type: "spring",
                    stiffness: 100
                  }}
                >
                  <Star className="w-4 h-4 text-primary-light flex-shrink-0 mt-0.5" filled />
                </motion.div>
                <span className="text-primary-light/90 font-aileron text-body leading-relaxed">
                  {feature}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Button section */}
          <motion.div 
            className="px-6 pb-8"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.2 }}
          >
            <Button
              textColor="#1e1e1e"
              hoverTextColor="#1e1e1e"
              borderColor="#888888"
              className="font-aileron font-semibold text-body w-full justify-center bg-primary-light"
              showArrow={true}
              href="#book-call"
            >
              Get Started
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default PricingCard;
