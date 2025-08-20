"use client";

import Image from "next/image";
import { useState } from "react";

interface WorkCardProps {
  date: string;
  title: string;
  category: string;
  image: string;
  description: string;
  href: string;
  className?: string;
}

const WorkCard = ({ date, title, category, image, description, href, className }: WorkCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group cursor-pointer flex flex-col w-full h-full ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Header section - Date */}
      <div className="mb-3">
        <p className="text-sm font-aileron text-primary-dark font-medium">
          {date}
        </p>
      </div>

      {/* Project name and category on same line */}
      <div className="flex items-end justify-between mb-4 gap-3">
        <h3 className="text-body-lg font-noto-serif font-semibold text-primary-dark leading-tight flex-1">
          {title}
        </h3>
        <p className="text-sm font-aileron text-primary-dark uppercase tracking-wider font-medium text-right whitespace-nowrap">
          {category}
        </p>
      </div>

      {/* Image section - consistent aspect ratio */}
      <div className="relative w-full aspect-[4/5] overflow-hidden mb-4 bg-gray-100 flex-1">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          priority
        />
      </div>

      {/* Footer section - Description with dashed borders top and bottom */}
      <div className="border-t border-b border-dashed border-primary-dark py-4 mt-auto">
        <div className="flex items-center justify-between gap-4">
          <p className="text-body font-aileron text-primary-dark flex-1 leading-relaxed">
            {description}
          </p>
          <div className={`flex-shrink-0 transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`}>
            <svg 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              className="text-primary-dark"
            >
              <path 
                d="M7 17L17 7M17 7H7M17 7V17" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </a>
  );
};

export default WorkCard;
