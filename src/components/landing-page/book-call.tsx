"use client";

import Image from "next/image";
import dynamic from "next/dynamic";
import { Suspense } from "react";

// Dynamic import the actual Cal component - this is where the heavy Cal.com code is
const Cal = dynamic(() => import("../calendar/cal"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[600px] bg-secondary-light rounded-2xl flex items-center justify-center">
      <div className="text-primary-dark font-aileron">Loading calendar...</div>
    </div>
  )
});

const BookCall = () => {
  return (
    <section id="book-call" className="relative w-full min-h-screen z-10">
      {/* Chapter Banner - positioned at top */}
      <div className="relative z-30">
        <div className={`w-full flex items-center justify-between px-4 md:px-[2.5vw] border-y border-primary-light bg-accent-primary`}>
          <p className="text-primary-light text-chapter-number font-noto-serif font-stretch-extra-condensed font-semibold">
            Chapter 9
          </p>
          <p className="text-secondary-light text-body-lg font-aileron font-bold">
            READY FOR THE SOLUTION?
          </p>
        </div>
      </div>
      
      {/* Background Image */}
      <div className="absolute inset-0 z-10">
        <Image
          src="/cta-bg.webp"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
      </div> 
      
      {/* Content Overlay */}
      <div className="relative z-10 px-4 md:px-8 py-20">
        <div className="max-w-7xl mx-auto lg:pt-10 lg:ring-[0.5px] lg:ring-primary-light/50 bg-primary-dark/40 backdrop-blur-md rounded-lg">
          <Suspense fallback={
            <div className="w-full h-[600px] flex items-center justify-center">
              <div className="text-primary-dark font-aileron">Loading calendar...</div>
            </div>
          }>
            <Cal />
          </Suspense>
        </div>
      </div>
    </section>
  );
};

export default BookCall;
