"use client"
import { useBenefitDropdown } from "@/hooks/useBenefitDropdown";
import Image from "next/image";

interface IconProps {
  className?: string;
  filled?: boolean;
}

interface BenefitItemProps {
  item: {
    title: string;
    content: string;
    icon: React.ComponentType<IconProps>;
    image: string;
  };
  index: number;
  isExpanded: boolean;
  onToggle: () => void;
}

export const BenefitItem: React.FC<BenefitItemProps> = ({ item, isExpanded, onToggle }) => {
  const { contentRef, imageRef, containerRef, shouldRender } = useBenefitDropdown(isExpanded);

  return (
    <div ref={containerRef} className="border-b border-primary-dark pb-6">
      <div className="flex items-start justify-between gap-8">
        <div className="flex-1">
          <button
            onClick={onToggle}
            className="w-full flex items-center text-left group mb-4 hover:opacity-80 transition-opacity duration-200 hover:cursor-pointer"
          >
            <item.icon 
                filled={isExpanded}
              className="w-6 h-7 text-primary-dark shrink-0 mr-4 transition-all duration-200 group-hover:scale-110"
            />
            <h3 className="text-section-heading-small font-noto-serif font-semibold text-primary-dark">
              {item.title}
            </h3>
          </button>

          {shouldRender && (
            <div ref={contentRef} className="overflow-hidden">
              <div className="pl-10 overflow-hidden">
                <p className="text-body-lg font-aileron font-semibold text-primary-dark leading-relaxed tracking-tight max-w-2xl overflow-hidden">
                  {item.content}
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Image for expanded item with GSAP clip-path animation */}
        {shouldRender && (
          <div 
            ref={imageRef}
            className="hidden md:block h-60 w-50 relative rounded-lg shrink-0 overflow-hidden"
            style={{ clipPath: "inset(50% 50% 50% 50%)" }}
          >
            <Image
              src={item.image}
              fill
              alt={`${item.title} showcase`}
              className="object-cover"
              
            />
          </div>
        )}
      </div>
    </div>
  );
};