"use client"
import Image from "next/image";
import Calendar from "../calendar/cal";

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
          src="/cta-bg.jpg"
          alt="Background"
          fill
          
          className="object-cover"
          priority
        />
       
      </div> 
      

      {/* Content Overlay */}
      <div className="relative z-10 px-4 md:px-8 py-20">
        <div className="max-w-7xl mx-auto lg:pt-10 lg:ring-[0.5px] lg:ring-primary-light/50 bg-primary-dark/40 backdrop-blur-md rounded-lg">
          <Calendar />
        </div>
      </div>
    </section>
  );
};

export default BookCall;
