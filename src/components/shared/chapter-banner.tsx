import React from 'react';

interface ChapterBannerProps {
  chapterNumber: string;
  chapterTitle: string;
  className?: string;

}

const ChapterBanner = ({ chapterNumber, chapterTitle, className }: ChapterBannerProps) => {
  return (
    <div className={`w-full flex items-center justify-between px-4 md:px-[2.5vw] bg-primary-dark ${className}`}>
      <p className="text-primary-light text-chapter-number font-noto-serif font-stretch-extra-condensed">
        {chapterNumber}
      </p>
      <p className="text-secondary-light text-body-lg font-aileron font-semibold">
        {chapterTitle}
      </p>
    </div>
  );
};

export default ChapterBanner;
