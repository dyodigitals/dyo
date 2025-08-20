"use client";

import { ReactNode } from "react";
import Star from "../icons/star";

interface PricingCardProps {
  title: string;
  description: string;
  features: string[];
  price: string;
  icon?: ReactNode;
  className?: string;
}

const PricingCard = ({
  description,
  features,
  price,
  icon,
  className = "",
}: PricingCardProps) => {
  return (
    <div className={`max-w-2xl mx-auto ${className}`}>
      {/* Card container */}
      <div className="bg-primary-light border border-primary-dark rounded-2xl pt-4 relative">
        <div className="w-full px-6 flex flex-row-reverse items-center justify-between pb-3 mb-6 border-b border-primary-dark">
          {/* Header with icon */}
          {icon && <div className="">{icon}</div>}

          {/* Title and description */}
          <div className="w-2/3">
            <p className="text-primary-dark font-aileron text-body tracking-tight font-semibold">
              {description}
            </p>
          </div>
        </div>

        {/* Features list */}
        <div className="space-y-3 mb-6  px-6">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-4">
              <Star className="w-4 h-4 text-primary-dark" filled />
              <span className="text-primary-dark font-aileron text-body leading-relaxed">
                {feature}
              </span>
            </div>
          ))}
        </div>

        {/* Price section */}
        <div className="bg-secondary-dark text-primary-light rounded-br-2xl rounded-bl-2xl px-4 py-3 text-center">
          <p className="font-aileron font-semibold text-body">{price}</p>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
