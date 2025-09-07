import Image from "next/image";
import ChapterBanner from "../shared/chapter-banner";
import { AnimatedText } from "../animations/anim";
import Button from "../ui/button";

export default function About() {
  return (
    <section className="relative w-full bg-primary-light py-16 md:py-20 lg:py-24 overflow-hidden">
      <div className="">
        {/* Chapter Header */}
        <ChapterBanner
          chapterNumber="Chapter 9"
          chapterTitle="DYO'S BTS"
          className="border-b border-primary-dark"
        />
        {/* Character Illustrations */}
        <div className="absolute bottom-0 right-0 flex items-end justify-center lg:justify-end">
          {/* Allen */}
          <div className="text-center -mr-5 lg:-mr-10 relative">
            {/* Allen Arrow */}
            <div className="absolute top-8 -left-1/4 md:-left-10 lg:-left-4 z-10">
              <Image
                src="/allen-arrow.svg"
                alt="decorative arrow pointing to Allen"
                width={79}
                height={77}
                className="-rotate-10 scale-70 md:scale-100"
              />
              <span className="absolute top-14 left-0 md:top-16 md:-left-4 font-noto-serif text-body text-primary-dark">
                Allen
              </span>
            </div>
            <div className="relative">
              <Image
                src="/doodle-allen.png"
                alt="Allen - Co-founder of Dyo"
                width={218}
                height={218}
                className="w-30 h-30 md:w-40 md:h-40 lg:w-54 lg:h-54"
                
              />
            </div>
          </div>

          {/* Prem */}
          <div className="text-center relative">
            {/* Prem Arrow */}
            <div className="absolute -top-14 md:-top-17 left-0 md:left-1/4 z-10">
              <Image
                src="/prem-arrow.svg"
                alt="decorative arrow pointing to Prem"
                width={80}
                height={86}
                className="scale-70 md:scale-100"
              />
              <span className="absolute top-4 -left-7 md:-left-2/3 font-noto-serif text-body text-primary-dark whitespace-nowrap">
                Prem
              </span>
            </div>
            <div className="relative">
              <Image
                src="/doodle-prem.png"
                alt="Prem - Co-founder of Dyo"
                width={258}
                height={258}
                className="w-35 h-35 md:w-50 md:h-50 lg:w-64 lg:h-64"

              />
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="relative flex flex-col items-start py-10 px-4 md:px-[2.5vw] gap-6 lg:gap-8">
          {/* Text Content */}
          <div className="flex-1 items-start w-full md:max-w-xl lg:max-w-3xl">
            <div className="flex items-start gap-4 mb-4 lg:mb-6">
              <AnimatedText
                className="font-aileron font-semibold tracking-tight leading-tight text-section-heading-small"
                text="Behind Dyo, you'll find us — Allen and Prem (the taller one). We're the duo in dyo digitals. We started this agency to do what we love: build beautiful, effective digital experiences without the big agency fuss. When you work with us, you work with us."
              />
            </div>
          </div>
         
          <Button
            textColor="#292929"
            hoverTextColor="#292929"
            borderColor="#888888"
            className="font-aileron font-semibold text-body-lg px-4 py-1 rounded-none"
            showArrow={true}
            href="#book-call"
          >
            Reach out & say hii
          </Button>
        </div>
      </div>
    </section>
  );
}
