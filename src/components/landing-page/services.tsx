"use client";
import { motion, useScroll, useTransform } from "motion/react";
import { useMemo, useRef, useState, useEffect } from "react";
import BroadStar from "../icons/broad-star";
import FanIcon from "../icons/fan-icon";
import ShinyStar from "../icons/flashy-star";
import ChapterBanner from "../shared/chapter-banner";
import ServiceCard from "../ui/service-card";

const Services = () => {
  // Check if desktop on client-side only
  const [isDesktop, setIsDesktop] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
  setIsMounted(true);
  const checkIsDesktop = () => setIsDesktop(window.innerWidth >= 1024);

  const handleResize = () => requestAnimationFrame(checkIsDesktop);
  checkIsDesktop();

  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
}, []);


  // Mask section refs
  const maskContainerRef = useRef<HTMLDivElement>(null);
  const maskStickyRef = useRef<HTMLDivElement>(null);

  // Get scroll progress - only on desktop and after mount
  const shouldUseScroll = isMounted && isDesktop;
  const { scrollYProgress } = useScroll({
    target: shouldUseScroll ? maskContainerRef : undefined,
    offset: ["-280px start", "end end"]
  });

  // Memoize expensive calculations - only on desktop and after mount
  const maskConfig = useMemo(() => {
    if (!isMounted || !isDesktop) return { maxSize: 0 };

    const { innerWidth: width, innerHeight: height } = window;
    const maxSize = 1.25 * width + 1.25 * height;

    return { maxSize };
  }, [isDesktop, isMounted]);

  // Transform scroll progress to mask sizes for each section
  const section1MaskSize = useTransform(
    scrollYProgress,
    [0, 0.33, 1],
    ["0px", `${maskConfig.maxSize}px`, `${maskConfig.maxSize}px`]
  );

  const section2MaskSize = useTransform(
    scrollYProgress,
    [0, 0.33, 0.66, 1],
    ["0px", "0px", `${maskConfig.maxSize}px`, `${maskConfig.maxSize}px`]
  );

  const section3MaskSize = useTransform(
    scrollYProgress,
    [0, 0.66, 1],
    ["0px", "0px", `${maskConfig.maxSize}px`]
  );

  const serviceData = [
    {
      title: "Branding",
      description: "Crafting your unique visual identity that reflects who you are.",
      features: [
        "Logo - Memorable and instantly recognisable",
        "Colours - A palette that evokes the right emotions",
        "Fonts - Typography that feels on-brand & professional",
        "Style - Consistent across the whole site",
        "Content - Messaging that inspires action",
      ],
      bottomText: "Branding goes beyond visuals — we create an experience that tells your story and leaves an impression.",
      icon: <BroadStar className="w-full h-full" />,
      bottomIcon: <ShinyStar className="w-full h-full scale-125" />,
      image: "/branding.webp",
      dotsImage: "/digital-dots.svg",
      cardClassName: "bg-secondary-light border border-primary-dark"
    },
    {
      title: "Web Design",
      description: "We design stunning, high-converting websites that turn visitors into clients.",
      features: [
        "UX design ~ User friendly navigation with effortless flow",
        "UI design ~ Beautifully designed to capture attention and leave a lasting impression.",
      ],
      bottomText: "From sleek, modern layouts — to vintage-inspired, premium designs, we build a site that feels authentic to you.",
      icon: <ShinyStar className="w-full h-full text-secondary-light" />,
      bottomIcon: <BroadStar className="w-full h-full text-secondary-light scale-80" />,
      image: "/design.webp",
      dotsImage: "/dots-group-light.svg",
      cardClassName: "bg-primary-dark border border-primary-light",
      headingClassName: "text-primary-light",
      featuresClassName: "text-secondary-light",
      descriptionClassName: "text-primary-light",
      bottomTextClassName: "text-secondary-light"
    },
    {
      title: "Development",
      description: "After design, we bring your website to life with high-performance, custom-coded technology.",
      features: [
        "Lightning-fast load times with top technical SEO scores",
        "Limitless functionality – If you can imagine it, we can build it",
        "Fully responsive - Seamlessly adapts to mobile, tablet & desktop",
        "A custom CMS so you can change text & images anytime without looking at the code",
      ],
      bottomText: "Strategy that transforms your digital presence — we turn it into a powerful business asset.",
      icon: <FanIcon className="w-full h-full text-primary-light scale-70" />,
      bottomIcon: <BroadStar className="w-full h-full text-primary-light scale-80" />,
      image: "/development.webp",
      dotsImage: "/dots-group-light.svg",
      cardClassName: "bg-accent-primary border border-primary-light",
      headingClassName: "text-primary-light",
      featuresClassName: "text-white/80",
      descriptionClassName: "text-primary-light",
      bottomTextClassName: "text-secondary-light"
    },
  ];

  return (
    <section id="services" className="w-full lg:bg-secondary-dark">
      <ChapterBanner
        chapterNumber="Chapter 4"
        chapterTitle="THIS IS WHAT WE DO"
        className="border-b border-primary-light"
      />

      {isMounted && isDesktop ? (
        // Desktop Layout - Complex Animation
        <div 
          ref={maskContainerRef}
          className="relative h-[300vh] will-change-scroll"
        >
          <div
            ref={maskStickyRef}
            className="sticky top-0 h-screen w-full will-change-transform"
          >
            {/* Section 1 - Branding */}
            <motion.div
              className="absolute inset-0 w-full h-full will-change-transform"
              style={{
                WebkitMaskImage: "url('/mask-star.svg')",
                maskImage: "url('/mask-star.svg')",
                WebkitMaskPosition: "center",
                maskPosition: "center",
                WebkitMaskRepeat: "no-repeat",
                maskRepeat: "no-repeat",
                WebkitMaskSize: section1MaskSize,
                maskSize: section1MaskSize,
              }}
            >
              <ServiceCard {...serviceData[0]} />
            </motion.div>

            {/* Section 2 - Web Design */}
            <motion.div
              className="absolute inset-0 w-full h-full will-change-transform"
              style={{
                WebkitMaskImage: "url('/mask-star.svg')",
                maskImage: "url('/mask-star.svg')",
                WebkitMaskPosition: "center",
                maskPosition: "center",
                WebkitMaskRepeat: "no-repeat",
                maskRepeat: "no-repeat",
                WebkitMaskSize: section2MaskSize,
                maskSize: section2MaskSize,
              }}
            >
              <ServiceCard {...serviceData[1]} />
            </motion.div>

            {/* Section 3 - Development */}
            <motion.div
              className="absolute inset-0 w-full h-full will-change-transform"
              style={{
                WebkitMaskImage: "url('/mask-star.svg')",
                maskImage: "url('/mask-star.svg')",
                WebkitMaskPosition: "center",
                maskPosition: "center",
                WebkitMaskRepeat: "no-repeat",
                maskRepeat: "no-repeat",
                WebkitMaskSize: section3MaskSize,
                maskSize: section3MaskSize,
              }}
            >
              <ServiceCard {...serviceData[2]} />
            </motion.div>
          </div>
        </div>
      ) : (
        // Mobile Layout - Simple Stack
        <div className="py-16">
          {serviceData.map((service, index) => (
            <div key={index}>
              <ServiceCard
                {...service}
              />
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Services;