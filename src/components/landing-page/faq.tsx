"use client";

import { useState } from "react";
import ChapterBanner from "../shared/chapter-banner";

const FAQ = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const faqItems = [
    {
      question: "How long does it take to complete my project?",
      answer:
        "Website usually takes around 4-6 weeks. Website + Branding can take 6-8 weeks.",
    },
    {
      question: "Do you offer payment plans?",
      answer:
        "Yes we do! We usually operate with payment milestones. There are 2 options: 50% upfront and 50% when the project is finished; or split the project into 4 phases and payments are completed upon each milestone.",
    },
    {
      question: "Will I be able to update my website myself?",
      answer:
        "Yes, your website will be connected to a Content Management System (CMS) that you'll have access to, and make changes without needing any technical expertise. The system is very user friendly and we'll take you through how to use it.\n\nHowever, for more drastic changes (such as adding a new page), we'll be happy to help.",
    },
    {
      question: "Do you provide ongoing support & maintenance?",
      answer:
        "Yes, when signing up with us there is a 6 month free maintenance period where we'll provide ongoing support. After that, maintenance is $25 a month - or $299 per year. This will include any small changes requested, but any drastic changes that take a lot of work may result in additional charges.",
    },
    {
      question: "Who do you work with?",
      answer:
        "We can work with any client that needs a website - we're very flexible. However, we focus mainly on creative niches, specializing in photography.",
    },
    {
      question: "Will my website help me get more bookings?",
      answer:
        "Yes, we have a heavy focus on increasing conversion rates as well as creating a visually stunning website & brand that represents you.",
    },
    {
      question: "What if I already have a logo/brand and just need a website?",
      answer:
        "Having your own brand is great! We suggest going with the single website package that starts at $2499.",
    },
    {
      question: "Do you optimise websites for mobile & other devices?",
      answer:
        "Absolutely! A website that works on mobile is one of our top priorities - we ensure that your mobile version is easy to use & navigate, and works just as well as your PC version.",
    },
    {
      question: "What do you use to build your websites?",
      answer:
        "We build our websites with React and NextJS, hosted on Vercel - providing you with the highest quality in terms of web development. The website is coded by hand (no website builders), ensuring lightning fast speeds and no limitations.",
    },
  ];

  const toggleAccordion = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="faq" className="w-full bg-primary-light relative">
      <ChapterBanner
        chapterNumber="Chapter 9"
        chapterTitle="COMMON QUESTIONS"
        className="border-b border-primary-dark"
      />

      <div className="px-4 md:px-[2.5vw] py-12 md:py-16 relative">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 gap-4 md:gap-6 relative z-10">
            {faqItems.map((item, index) => (
              <div
                key={index}
                className={`border border-primary-dark rounded-3xl overflow-hidden transition-all duration-300 cursor-pointer ${
                  expandedIndex === index
                    ? "bg-primary-dark text-primary-light"
                    : hoveredIndex === index
                    ? "bg-secondary-light"
                    : "bg-primary-light"
                }`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <button
                  className="w-full text-left p-6 md:p-8 flex justify-between items-center cursor-pointer"
                  onClick={() => toggleAccordion(index)}
                >
                  <span
                    className={`text-body-lg md:text-section-heading-small font-noto-serif font-semibold transition-colors duration-300 ${
                      expandedIndex === index
                        ? "text-primary-light"
                        : "text-primary-dark"
                    }`}
                  >
                    {item.question}
                  </span>
                  <span
                    className={`transform transition-transform duration-300 text-2xl ${
                      expandedIndex === index
                        ? "rotate-45 text-primary-light"
                        : "rotate-0"
                    }`}
                  >
                    +
                  </span>
                </button>

                <div
                  className={`transition-all duration-500 ease-in-out overflow-hidden ${
                    expandedIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-6 pb-6 md:px-8 md:pb-8">
                    <div className="w-full h-px bg-primary-light opacity-40 mb-4"></div>
                    <p className="text-body font-aileron leading-relaxed tracking-tight whitespace-pre-line">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
