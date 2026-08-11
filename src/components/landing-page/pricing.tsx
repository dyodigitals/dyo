"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import BroadStar from "../icons/broad-star";
import FanIcon from "../icons/fan-icon";
import ShinyStar from "../icons/flashy-star";
import ChapterBanner from "../shared/chapter-banner";
import PricingCard from "../ui/pricing-card";
import { AnimatedText } from "../animations/anim";

const Pricing = () => {
  const tabs = [
    { key: "branding", label: "Branding" },
    { key: "web-design", label: "Web Design" },
    { key: "branding-web", label: "Branding + Web Design" },
  ] as const;

  type TabKey = (typeof tabs)[number]["key"];
  const [activeTab, setActiveTab] = useState<TabKey>("branding-web");

  const pricingData = {
    branding: {
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
      price: "Starting at $750",
      icon: <BroadStar />,
      iconClassName: "text-primary-light scale-90",
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
      price: "Starting at $2500",
      icon: <ShinyStar />,
      iconClassName: "text-primary-light scale-80",
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
      price: "Starting at $3000",
      icon: <FanIcon />,
      iconClassName: "text-primary-light",
    },
  };

  return (
    <section id="pricing" className="w-full bg-primary-light overflow-hidden">
      <ChapterBanner
        chapterNumber="Chapter 8"
        chapterTitle="YOUR INVESTMENT"
        className="border-b border-primary-dark"
      />
      <div className="px-4 md:px-[2.5vw] py-12 md:py-16 flex flex-col lg:flex-row  items-center lg:items-start gap-10 lg:gap-0 justify-between">
        <div className="flex flex-col justify-start w-full lg:w-1/2">
         
          <AnimatedText className="text-section-heading text-primary-dark text-center lg:text-left font-aileron font-semibold leading-tight" text="Pricing packages? Nah, that's not our vibe. Your art is custom, and so is our work." />
        </div>
        <div>
          {/* Tab Navigation */}
          <motion.div
            className="flex flex-wrap gap-4 mb-12 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {tabs.map((tab, index) => (
              <motion.button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-6 py-3 hover:cursor-pointer rounded-full font-aileron font-medium text-body border transition-all duration-300 ${
                  activeTab === tab.key
                    ? "bg-accent-primary text-primary-light border-accent-primary"
                    : "bg-primary-light text-primary-dark border-primary-dark hover:bg-secondary-light"
                } ${tab.key === "branding-web" ? "px-8" : ""}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.1,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
              >
                {tab.label}
              </motion.button>
            ))}
          </motion.div>

          {/* Pricing Card with Premium Animation */}
          <div className="flex justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{
                  opacity: 0,
                  y: 50,
                  rotateX: 15,
                  scale: 0.9,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  rotateX: 0,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  y: -30,
                  rotateX: -10,
                  scale: 0.95,
                }}
                transition={{
                  duration: 0.5,
                  ease: [0.25, 0.46, 0.45, 0.94],
                  opacity: { duration: 0.3 },
                  scale: { duration: 0.4 },
                }}
                style={{
                  perspective: "1000px",
                  transformStyle: "preserve-3d",
                }}
              >
                <motion.div
                  initial={{ rotateY: 5 }}
                  animate={{ rotateY: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <PricingCard
                    title={pricingData[activeTab].title}
                    description={pricingData[activeTab].description}
                    features={pricingData[activeTab].features}
                    price={pricingData[activeTab].price}
                    icon={pricingData[activeTab].icon}
                    iconClassName={pricingData[activeTab].iconClassName}
                  />
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
