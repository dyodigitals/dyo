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
        "Website can take up to 8 weeks. Website + Branding can take up to 10 weeks.",
    },
    {
      question: "Do you offer payment plans?",
      answer:
        "Yes we do! We usually operate with payment milestones. There are 2 options: 50% upfront and 50% when the project is finished; or split the project into 3 phases and payments are completed upon each milestone.",
    },
    {
      question: "Will I be able to update my website myself?",
      answer:
        "Yes, your website will be connected to a Content Management System (CMS) that you'll have access to, and make changes without needing any technical expertise. The system is very user friendly and we'll take you through how to use it.\n\nHowever, for more drastic changes (such as adding a new page), you'll have to contact us.",
    },
    {
      question: "Do you provide ongoing support & maintenance?",
      answer:
        "Yes, any small changes we'd be happy to help. However, any drastic work may result in additional charges.",
    },
    {
      question: "Who do you work with?",
      answer:
        "We can work with any client that needs a website - we're very flexible. However, we focus mainly on creative niches, specializing in photography.",
    },
    {
      question: "Do you optimise websites for mobile & other devices?",
      answer:
        "Absolutely! A website that works on all devices is one of our top priorities - we ensure that your mobile version looks just as good as your PC version. We also focus on responsiveness across all screen sizes, so that every user can have a smooth experience with your website.",
    },
    {
      question: "What do you use to build your websites?",
      answer:
        "We build our websites with either Webflow or Showit depending on your needs. Showit is great for creative websites and has great blogging capabilities; and Webflow offers very high flexibility and performance, being considered the best website builder.",
    },
  ];

  const toggleAccordion = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="faq" className="w-full bg-primary-light relative">
      <ChapterBanner
        chapterNumber="Chapter 10"
        chapterTitle="FREQUENT QUESTIONS"
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
