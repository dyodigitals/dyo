"use client";

import Image from "next/image";
import { useBenefitDropdown } from "@/hooks/useBenefitDropdown";

interface BenefitItemProps {
  item: {
    title: string;
    content: string;
    icon: React.ComponentType<{ className?: string; filled?: boolean }>;
    image: string;
  };
  index: number;
  isExpanded: boolean;
  onToggle: () => void;
}

export const BenefitItem = ({
  item,
  index,
  isExpanded,
  onToggle,
}: BenefitItemProps) => {
  const Icon = item.icon;
  const { contentRef, imageRef, containerRef, shouldRender } =
    useBenefitDropdown(isExpanded);

  return (
    <div ref={containerRef} className="w-full">
      {/* Header with icon, title and toggle */}
      <button
        className="w-full text-left flex justify-between items-start cursor-pointer group py-4" // Tighter bottom padding
        onClick={onToggle}
      >
        <div className="flex items-center gap-4 flex-1">
          <Icon className="w-6 h-6 text-accent-primary flex-shrink-0" filled={isExpanded} />
          <h3 className="text-section-heading-small font-noto-serif font-semibold text-primary-dark group-hover:text-accent-primary transition-colors duration-200">
            {item.title}
          </h3>
        </div>
      </button>

      {/* Expandable content */}
      {shouldRender && (
        <div ref={contentRef} className="overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-10 pb-0">
            {/* Left column - Text content */}
            <div>
              <p className="ml-10 text-body-lg font-aileron text-primary-dark leading-relaxed tracking-tight max-w-2xl font-semibold">
                {item.content}
              </p>
            </div>

            {/* Right column - Image */}
            <div
              ref={imageRef}
              className="hidden lg:flex justify-center lg:justify-end self-start"
            >
              <Image
                src={item.image}
                alt={item.title}
                width={250}
                height={300}
                className="h-64 md:h-72 object-cover"
              />
            </div>
          </div>
        </div>
      )}

      {/* Separator line */}
      <div className="w-full h-[1px] bg-primary-dark mt-6"></div>
    </div>
  );
};
