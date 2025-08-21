"use client";
import Hero from "@/components/landing-page/hero";
import Marquee from "@/components/landing-page/marquee";
import dynamic from "next/dynamic";

// Dynamic imports for heavy components
const Benefits = dynamic(() => import("@/components/landing-page/benefits"));
const Work = dynamic(() => import("@/components/landing-page/work"));
const Services = dynamic(() => import("@/components/landing-page/services"), {
  loading: () => <div className="h-[300vh] bg-secondary-dark animate-pulse" />
});
const Testimonials = dynamic(() => import("@/components/landing-page/testimonials"));
const Method = dynamic(() => import("@/components/landing-page/method"));
const Pricing = dynamic(() => import("@/components/landing-page/pricing"));
const FAQ = dynamic(() => import("@/components/landing-page/faq"));
const BookCall = dynamic(() => import("@/components/landing-page/book-call"), {
  ssr: false,
});
const Footer = dynamic(() => import("@/components/shared/footer"));

export default function Home() {
  return (
   <>
   <Hero />
   <Marquee/>
   <Benefits/>
   <Work/>
   <Services/>
   <Testimonials/>
   <Method/>
   <Pricing/>
   <FAQ/>
   <BookCall/>
   <Footer/>
   </>
  );
}
