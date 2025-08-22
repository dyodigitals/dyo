"use client";

import { useState } from "react";
import BroadStar from "../icons/broad-star";
import FanIcon from "../icons/fan-icon";
import ShinyStar from "../icons/flashy-star";
import ChapterBanner from "../shared/chapter-banner";
import PricingCard from "../ui/pricing-card";

const Pricing = () => {
  const [activeTab, setActiveTab] = useState<
    "design" | "web-design" | "branding-web"
  >("branding-web");

  const pricingData = {
    design: {
      title: "Branding",
      description:
        "Perfect for new businesses or those ready to refresh their visual identity.",
      features: [
        "Brand strategy session (1-2 hours)",
        "Color palette",
        "Primary logo + alternate logo variations",
        "Typography selection & usage guide",
        "Social media profile & cover designs (optional add-on)",
      ],
      price: "Starting from $ 999 USD",
      icon: <BroadStar className="text-accent-primary" />,
    },
    "web-design": {
      title: "Web Design",
      description:
        "Complete web design solution for businesses ready to make an impact online.",
      features: [
        "Custom Figma website design",
        "Pixel-perfect layouts built around your brand",
        "Hand-coded development (no templates)",
        "Mobile-responsive and adaptive design",
        "User experience optimization",
        "Seamless integration with CMS if needed",
      ],
      price: "Starting from $ 2499 USD",
      icon: <ShinyStar className="text-primary-dark scale-80 " />,
    },
    "branding-web": {
      title: "Branding + Web Design",
      description:
        "Complete brand identity and web presence package for businesses that want to stand out.",
      features: [
        "Complete brand identity package",
        "Custom Figma website design & hand-coded development",
        "Logo design + brand guidelines",
        "Social media templates (optional add-on)",
        "3 months of support included",
      ],
      price: "Starting from $ 2999 USD",
      icon: <FanIcon className="text-accent-primary" />,
    },
  };

  return (
    <section id="pricing" className="w-full bg-primary-light">
      <ChapterBanner
        chapterNumber="Chapter 8"
        chapterTitle="YOUR INVESTMENT"
        className="border-b border-primary-dark"
      />

      <div className="px-4 md:px-[2.5vw] py-12 md:py-16">
        {/* Tab Navigation */}
        <div className="flex flex-wrap gap-4 mb-12 justify-center">
          <button
            onClick={() => setActiveTab("design")}
            className={`px-6 py-3 rounded-full font-aileron font-medium text-body border transition-all duration-300 ${
              activeTab === "design"
                ? "bg-accent-primary text-primary-light border-accent-primary"
                : "bg-primary-light text-primary-dark border-primary-dark hover:bg-secondary-light"
            }`}
          >
            Design
          </button>
          <button
            onClick={() => setActiveTab("web-design")}
            className={`px-6 py-3 rounded-full font-aileron font-medium text-body border transition-all duration-300 ${
              activeTab === "web-design"
                ? "bg-accent-primary text-primary-light border-accent-primary"
                : "bg-primary-light text-primary-dark border-primary-dark hover:bg-secondary-light"
            }`}
          >
            Web Design
          </button>
          <button
            onClick={() => setActiveTab("branding-web")}
            className={`px-8 py-3 rounded-full font-aileron font-medium text-body border transition-all duration-300 ${
              activeTab === "branding-web"
                ? "bg-accent-primary text-primary-light border-accent-primary"
                : "bg-primary-light text-primary-dark border-primary-dark hover:bg-secondary-light"
            }`}
          >
            Branding + Web Design
          </button>
        </div>

        {/* Pricing Card */}
        <div className="flex justify-center">
          <PricingCard
            title={pricingData[activeTab].title}
            description={pricingData[activeTab].description}
            features={pricingData[activeTab].features}
            price={pricingData[activeTab].price}
            icon={pricingData[activeTab].icon}
          />
        </div>

        <div className="text-center mt-16">
          <p className="text-body text-primary-dark/70 mb-8 max-w-2xl mx-auto leading-relaxed">
            Not sure which package is right for you? Let&apos;s have a
            conversation about your specific needs and goals.
          </p>
          <a
            href="#book-call"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("book-call")?.scrollIntoView({
                behavior: "smooth", // or "auto" for instant
              });
            }}
            className="bg-accent-primary text-primary-light px-12 py-4 rounded-full font-noto-serif font-semibold text-body transition-all duration-300 hover:cursor-pointer hover:scale-102 hover:shadow-lg hover:shadow-secondary-dark/20 border border-secondary-dark hover:border-accent-primary"
          >
            Schedule a Free Consultation
          </a>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
