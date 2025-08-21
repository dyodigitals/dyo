"use client";
import Image from "next/image";
import ChapterBanner from "../shared/chapter-banner";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

const Testimonials = () => {
  const testimonials = [
    {
      quote:
        "Wow where do I start? The website they've made for me is just perfect. They got the exact vibe that I was going for and it just feels so me. They even made me a logo without me asking for it - and I loved it! Also working with them was so easy, I was super busy but they managed to navigate around that and they basically did everything for me after I told them what vibe I wanted.",
      name: "Victoria Rezny",
      title: "Owner, PiksByVik",
      services: ["PiksByVik", "Branding", "Web Design"],
      image: "/victoria.jpg", // Add your image path here
    },
    {
      quote:
        "Honestly, I was blown away at how well Allen and Prem made my website. I just gave them rough ideas about my fitness brand and they turned them into something awesome that totally represents my training style and who I am as a trainer. It looks clean, has amazing animations, and really gets my brand and vision",
      name: "Adam Brennan",
      title: "MindMuscleMasterclass",
      services: ["Conceptualization", "Web Design", "Development"],
      image: "/adam.jpg"
      // No image property = will use ProfileIcon
    },

    {
      quote:
        "Working with Dyo was an absolute game-changer for our agency.. I shared the Branding & the overall aesthetics  we wanted for Upcreatorz, and they turned it into a clean, bold website that truly reflects our agency. From smooth animations to a layout that highlights our services perfectly, they nailed it-without us having to manage every detail.",
      name: "Parth Vadhera",
      title: "CTO Upcreatorz",
      services: ["Conceptualization", "Web Design", "Development"],
      image: "/parth.jpg"
    },
    
    {
      quote:
        "Wow where do I start? The website they've made for me is just perfect. They got the exact vibe that I was going for and it just feels so me. They even made me a logo without me asking for it - and I loved it! Also working with them was so easy, I was super busy but they managed to navigate around that and they basically did everything for me after I told them what vibe I wanted.",
      name: "Victoria Rezny",
      title: "Owner, PiksByVik",
      services: ["PiksByVik", "Branding", "Website Design"],
      image: "/victoria.jpg", // Add your image path here
    },
    
    {
      quote:
        "I can't say enough good things about the branding and website they created for my business. I do breathwork, personal wellness coaching, and school talks at the same time, and they somehow managed to merge all 3 into a brand that works! The site and content is very easy to navigate despite having so many parts to my business, and they've also made me a custom booking system that works just for me. Also forgot to mention that everything literally loads instantly with how fast it is.",
      name: "Conor Harris",
      title: "Founder, Theothersideoflife",
      services: ["Branding", "Web Design", "Development"],
      image: "/conor.jpg", // Add your image path here
    },
  ];

  return (
    <section className="w-full relative">
      <ChapterBanner
        chapterNumber="Chapter 5"
        chapterTitle="KIND WORDS"
        className="border-b border-primary-dark"
      />

      <div className="relative z-10 py-12 md:py-16">
        <div className="absolute inset-0 opacity-90 -z-10">
          <Image
            src="/bg-grid.webp"
            alt="Background Grid"
            fill
            className="object-contain repeat"
          />
        </div>
        {/* Section intro */}
        <div className="px-4 md:px-[2.5vw] mb-12 z-10">
          <p className="text-section-heading-small font-noto-serif font-semibold text-primary-dark italic leading-tight max-w-4xl">
            Don&apos;t just take our word for it — hear what our clients have to say
            about working with us and the results we&apos;ve delivered together.
          </p>
        </div>

        {/* Infinite moving cards */}
        <div className="relative">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
            pauseOnHover={true}
            className="w-full max-w-[1440px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
