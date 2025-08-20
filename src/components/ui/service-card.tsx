"use client";

import Image from "next/image";
import { ReactNode } from "react";

interface ServiceCardProps {
  title: string;
  description: string;
  features: string[];
  bottomText: string;
  icon: ReactNode;
  bottomIcon: ReactNode;
  image: string;
  dotsImage: string;
  className?: string;
  cardClassName?: string;
  headingClassName?: string;
  featuresClassName?: string;
  descriptionClassName?: string;
  bottomTextClassName?: string;
}

const ServiceCard = ({ 
  title, 
  description, 
  features, 
  bottomText, 
  icon,
  bottomIcon,
  image,
  dotsImage,
  className,
  cardClassName = "bg-primary-light border border-primary-dark",
  headingClassName = "text-primary-dark",
  featuresClassName = "text-primary-dark",
  descriptionClassName = "text-primary-dark",
  bottomTextClassName = "text-primary-dark"
}: ServiceCardProps) => {
  return (
    <div className={`relative w-full h-full py-6 sm:py-8 md:py-10 bg-primary-light flex items-center ${className}`}>
      {/* Main card container with border */}
      <div className={`relative mx-3 sm:mx-4 md:mx-[2.5vw] rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-12 w-full h-full flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-12 overflow-hidden ${cardClassName}`}>
        
        {/* Left content - heading, points, bottom text */}
        <div className="flex-1 flex flex-col justify-between h-full">
          {/* Header with star and title */}
          <div>
            <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
              <div className="origin-top-left w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 text-accent-primary flex-shrink-0">
                {icon}
              </div>
              <h2 className={`text-section-heading-large font-noto-serif font-semibold leading-tight ${headingClassName}`}>
                {title}
              </h2>
            </div>

            {/* Features list */}
            <ul className="space-y-3 sm:space-y-4">
              {features.map((feature, index) => {
                const [label, ...descParts] = feature.split(' - ');
                const description = descParts.join(' - ');
                
                return (
                  <li key={index} className="flex items-start gap-2 sm:gap-3">
                    <div className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full mt-2 sm:mt-3 flex-shrink-0 ${featuresClassName.includes('text-primary-dark') ? 'bg-primary-dark' : 'bg-primary-light'}`}></div>
                    <div>
                      <span className={`text-sm sm:text-body font-aileron font-semibold ${featuresClassName}`}>
                        {label}
                      </span>
                      {description && (
                        <span className={`text-sm sm:text-body font-aileron ${featuresClassName}`}>
                          {' - '}{description}
                        </span>
                      )}
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Bottom text with embedded star icon */}
          <div className="mt-6 sm:mt-8">
            <div className="flex items-start gap-2">
              <p className={`text-base sm:text-lg md:text-body-lg font-noto-serif font-medium italic leading-relaxed flex-1 max-w-full lg:max-w-2xl ${bottomTextClassName}`}>
                {bottomText.split('—').map((part, index) => (
                  <span key={index}>
                    {part}
                    {index === 0 && bottomText.includes('—') && (
                      <span className="inline-block mx-1 sm:mx-2 w-4 h-8 sm:w-5 sm:h-10 md:w-6 md:h-12 text-accent-primary align-middle">
                        {bottomIcon}
                      </span>
                    )}
                  </span>
                ))}
              </p>
            </div>
          </div>
        </div>

        {/* Right side - description and image */}
        <div className="w-full lg:w-1/2 xl:w-[35%] flex flex-col justify-between h-full gap-6 lg:gap-0">
          {/* Description text at top to align with heading */}
          <p className={`text-base sm:text-lg md:text-body-lg font-semibold text-left lg:text-right font-aileron leading-relaxed ${descriptionClassName}`}>
            {description}
          </p>

          {/* Image container at bottom */}
          <div className="relative flex justify-center lg:justify-end">
            {/* Background dots */}
            <div className="absolute -bottom-1/4 -right-1/4 opacity-50 z-0">
              <Image
                src={dotsImage}
                alt=""
                width={300}
                height={300}
                className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96"
              />
            </div>

            {/* Image with border and padding */}
            <div className={`relative rounded-lg p-2 lg:ml-0 xl:ml-25 ${cardClassName.includes('bg-primary-dark') ? 'border border-primary-light bg-primary-dark' : 'border border-primary-dark bg-primary-light'}`}>
              <div className="relative w-64 sm:w-72 md:w-72 h-64 md:h-80 lg:h-96 rounded-md overflow-hidden">
                <Image
                  src={image}
                  alt={title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 256px, (max-width: 768px) 320px, (max-width: 1024px) 384px, 384px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
