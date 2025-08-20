"use client";

import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ChapterBanner from "../shared/chapter-banner";
import ServiceCard from "../ui/service-card";
import ShinyStar from "../icons/flashy-star";
import BroadStar from "../icons/broad-star";
import FanIcon from "../icons/fan-icon";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Services = () => {
  // Mask section refs
  const maskContainerRef = useRef<HTMLDivElement>(null);
  const maskStickyRef = useRef<HTMLDivElement>(null);
  const section1Ref = useRef<HTMLDivElement>(null);
  const section2Ref = useRef<HTMLDivElement>(null);
  const section3Ref = useRef<HTMLDivElement>(null);

  const serviceData = [
    {
      title: "Branding",
      description:
        "Crafting your unique visual identity that reflects who you are.",
      features: [
        "Logo - Memorable and instantly recognisable",
        "Colours - A palette that evokes the right emotions",
        "Fonts - Typography that feels on-brand & professional",
        "Style - Consistent across the whole site",
        "Content - Messaging that inspires action",
      ],
      bottomText:
        "Branding goes beyond visuals — we create an experience that tells your story and leaves an impression.",
      icon: <BroadStar className="w-full h-full" />,
      bottomIcon: <ShinyStar className="w-full h-full scale-125" />,
      image: "/branding.png",
      dotsImage: "/digital-dots.svg",
    },
    {
      title: "Web Design",
      description:
        "We design stunning, high-converting websites that turn visitors into clients.",
      features: [
        "UX design ~ User friendly navigation with effortless flow",
        "UI design ~ Beautifully designed to capture attention and leave a lasting impression. ",
      ],
      bottomText:
        "From sleek, modern layouts — to vintage-inspired, premium designs, we build a site that feels authentic to you.",
      icon: <ShinyStar className="w-full h-full text-secondary-light" />,
      bottomIcon: (
        <BroadStar className="w-full h-full text-secondary-light scale-80" />
      ),
      image: "/branding.jpg",
      dotsImage: "/dots-group-light.svg",
    },
    {
      title: "Development",
      description:
        "After design, we bring your website to life with high-performance, custom-coded technology.",
      features: [
        " Lightning-fast load times with top technical SEO scores",
        "Limitless functionality – If you can imagine it, we can build it",
        "Fully responsive - Seamlessly adapts to mobile, tablet & desktop",
        "A custom CMS so you can change text & images anytime without looking at the code",
      ],
      bottomText:
        "Strategy that transforms your digital presence — we turn it into a powerful business asset.",
      icon: <FanIcon className="w-full h-full text-primary-light scale-70" />,
      bottomIcon: (
        <BroadStar className="w-full h-full text-primary-light scale-80" />
      ),
      image: "/development.jpg",
      dotsImage: "/dots-group-light.svg",
    },
  ];

  useGSAP(
    () => {
      const sections = [
        section1Ref.current,
        section2Ref.current,
        section3Ref.current,
      ];

      // Initial setup - set mask to star SVG at center with small initial size for visibility
      gsap.set(sections, {
        WebkitMaskImage:
          "url('https://blog.olivierlarose.com/_next/static/media/star.c9387850.svg')",
        WebkitMaskPosition: "center",
        WebkitMaskRepeat: "no-repeat",
        WebkitMaskSize: "0px", // Start with small visible size instead of 0
      });

      // Create scroll-triggered animations for each section
      sections.forEach((section, index) => {
        ScrollTrigger.create({
          trigger: maskContainerRef.current,
          start: "top 70%",
          end: "bottom bottom",
          scrub: 1,
          onUpdate: (self) => {
            const progress = self.progress;

            // Calculate section progress based on thirds
            const startProgress = index * 0.33;
            const sectionProgress = Math.max(
              0,
              Math.min(1, (progress - startProgress) / 0.33)
            );

            // Calculate mask size with minimum base size for visibility
            const { innerWidth: width, innerHeight: height } = window;
            const maxSize = 1.25 * width + 1.25 * height;
            const maskSize = sectionProgress * maxSize;

            if (section) {
              gsap.set(section, {
                WebkitMaskSize: `${maskSize}px`,
                WebkitMaskImage:
                  "url('https://blog.olivierlarose.com/_next/static/media/star.c9387850.svg')",
                WebkitMaskPosition: "center",
                WebkitMaskRepeat: "no-repeat",
              });
            }
          },
        });
      });
    },
    { scope: maskContainerRef }
  );

  return (
    <section
      id="services"
      ref={maskContainerRef}
      className="w-full bg-secondary-dark relative h-[300vh]" // Changed from bg-primary-light to bg-secondary-dark
    >
      <ChapterBanner
        chapterNumber="Chapter 4"
        chapterTitle="THIS IS WHAT WE DO"
        className="border-b border-primary-light"
      />

      <div ref={maskStickyRef} className="sticky top-0 h-screen w-full">
        {/* Section 1 - Branding */}
        <div ref={section1Ref} className="absolute inset-0 w-full h-full">
          <ServiceCard
            title={serviceData[0].title}
            description={serviceData[0].description}
            features={serviceData[0].features}
            bottomText={serviceData[0].bottomText}
            icon={serviceData[0].icon}
            bottomIcon={serviceData[0].bottomIcon}
            image={serviceData[0].image}
            dotsImage={serviceData[0].dotsImage}
            cardClassName="bg-secondary-light border border-primary-dark"
          />
        </div>

        {/* Section 2 - Web Development */}
        <div ref={section2Ref} className="absolute inset-0 w-full h-full">
          <ServiceCard
            title={serviceData[1].title}
            description={serviceData[1].description}
            features={serviceData[1].features}
            bottomText={serviceData[1].bottomText}
            icon={serviceData[1].icon}
            bottomIcon={serviceData[1].bottomIcon}
            image={serviceData[1].image}
            dotsImage={serviceData[1].dotsImage}
            cardClassName="bg-primary-dark border border-primary-light"
            headingClassName="text-primary-light"
            featuresClassName="text-secondary-light"
            descriptionClassName="text-primary-light"
            bottomTextClassName="text-secondary-light"
          />
        </div>

        {/* Section 3 - Digital Strategy */}
        <div ref={section3Ref} className="absolute inset-0 w-full h-full">
          <ServiceCard
            title={serviceData[2].title}
            description={serviceData[2].description}
            features={serviceData[2].features}
            bottomText={serviceData[2].bottomText}
            icon={serviceData[2].icon}
            bottomIcon={serviceData[2].bottomIcon}
            image={serviceData[2].image}
            dotsImage={serviceData[2].dotsImage}
            cardClassName="bg-accent-primary border border-primary-light"
            headingClassName="text-primary-light"
            featuresClassName="text-white/80"
            descriptionClassName="text-primary-light"
            bottomTextClassName="text-secondary-light"
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
