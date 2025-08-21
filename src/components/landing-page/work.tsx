"use client";

import ChapterBanner from "../shared/chapter-banner";
import Button from "../ui/button";
import WorkCard from "../ui/work-card";

const Work = () => {
  const workItems = [
    {
      date: "01/03",
      title: "Theothersideoflife",
      category: "Coach site",
      image: "/work-conor.webp",
      description: "Helping you become the best ver...",
      href: "https://theothersideoflife.co.uk",
    },
    {
      date: "02/03",
      title: "Upcreatrorz",
      category: "Agency site",
      image: "/work-upcreatorz-2.webp",
      description: "India's First Luxury Branding House...",
      href: "https://upcreatorz.com/",
    },
    {
      date: "03/03",
      title: "PiksByVik",
      category: "Photographer site",
      image: "/work-victoria.webp",
      description: "Capturing Captivating & Genuine...",
      href: "https://piksbyvik.vercel.app",
    },
  ];

  // For mobile, we want to show the third item first
  const mobileOrderItems = [workItems[2], workItems[0], workItems[1]];

  return (
    <section id="work" className="w-full bg-primary-light">
      <ChapterBanner
        chapterNumber="Chapter 3"
        chapterTitle="OUR RECENT WORK"
        className="border-b border-primary-dark"
      />

      <div className="px-4 md:px-[2.5vw] py-12 md:py-16">
        {/* Mobile layout - stacked with reordered items */}
        <div className="md:hidden space-y-8">
          {/* Section intro */}
          <div className="mb-8">
            <p className="text-section-heading-small font-noto-serif font-semibold text-primary-dark italic leading-tight max-w-4xl">
              Every project tells a story — of vision brought to life, of brands
              finding their voice, and of design that works harder than it
              looks. Here&apos;s a glimpse at what we&apos;ve built for those who dared to
              stand out.
            </p>
          </div>

          {mobileOrderItems.map((item) => (
            <WorkCard
              key={item.date}
              date={item.date}
              title={item.title}
              category={item.category}
              image={item.image}
              description={item.description}
              href={item.href}
            />
          ))}
        </div>

        {/* Desktop layout - structured grid for md-xl, artistic for xl+ */}
        <div className="hidden md:block">
          {/* Structured grid layout for md to xl (768px - 1279px) */}
          <div className="xl:hidden">
            {/* Section intro */}
            <div className="mb-12">
              <p className="text-section-heading-small font-noto-serif font-semibold text-primary-dark italic leading-tight max-w-4xl">
                Every project tells a story — of vision brought to life, of
                brands finding their voice, and of design that works harder than
                it looks. Here&apos;s a glimpse at what we&apos;ve built for those who
                dared to stand out.
              </p>
            </div>

            {/* Grid layout for cards */}
            <div className="grid grid-cols-2 gap-8 lg:gap-12">
              {workItems.map((item, index) => (
                <div
                  key={index}
                  className={index === 2 ? "col-span-2 max-w-md mx-auto" : ""}
                >
                  <WorkCard
                    date={item.date}
                    title={item.title}
                    category={item.category}
                    image={item.image}
                    description={item.description}
                    href={item.href}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Artistic layout for xl+ (1280px+) */}
          <div className="hidden xl:block relative">
            {/* First row: Text + Right card */}
            <div className="flex items-start justify-between mb-6 lg:mb-8">
              {/* Section intro - left side */}
              <div className="flex-1 xl:max-w-3xl 2xl:max-w-5xl pr-8">
                <p className="text-section-heading-small font-noto-serif font-semibold text-primary-dark italic leading-tight">
                  Every project tells a story — of vision brought to life, of
                  brands finding their voice, and of design that works harder
                  than it looks. Here&apos;s a glimpse at what we&apos;ve built for those
                  who dared to stand out.
                </p>
              </div>

              {/* Third card - right side, aligned with text top */}
              <div className="flex-shrink-0 scale-110 origin-top-right">
                <WorkCard
                  date={workItems[2].date}
                  title={workItems[2].title}
                  category={workItems[2].category}
                  image={workItems[2].image}
                  description={workItems[2].description}
                  href={workItems[2].href}
                />
              </div>
            </div>

            {/* Second row: Two cards - positioned absolutely with equal spacing */}
            <div className="absolute top-40 left-0 right-0">
              <div className="relative w-full">
                {/* First card - left position */}
                <div className="absolute left-0 origin-top-left">
                  <WorkCard
                    date={workItems[0].date}
                    title={workItems[0].title}
                    category={workItems[0].category}
                    image={workItems[0].image}
                    description={workItems[0].description}
                    href={workItems[0].href}
                  />
                </div>

                {/* Second card - center position with equal spacing */}
                <div className="absolute left-1/2 transform -translate-x-1/2 mt-6 lg:mt-40 origin-top-left scale-90">
                  <WorkCard
                    date={workItems[1].date}
                    title={workItems[1].title}
                    category={workItems[1].category}
                    image={workItems[1].image}
                    description={workItems[1].description}
                    href={workItems[1].href}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Get Added button */}
        <div className="mt-12 xl:mt-54">
          <Button
            hoverBackgroundColor="#fffde4"
            textColor="#fffde4"
            hoverTextColor="#292929"
            borderColor="#888888"
            className="font-aileron font-semibold text-body py-4 bg-accent-primary"
            showArrow={true}
            href="#book-call"
          >
            Get added here
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Work;
