"use client"
import Calendar from "@/components/calendar/cal";
import Benefits from "@/components/landing-page/benefits";
import BookCall from "@/components/landing-page/book-call";
import FAQ from "@/components/landing-page/faq";
import Hero from "@/components/landing-page/hero";
import Marquee from "@/components/landing-page/marquee";
import Method from "@/components/landing-page/method";
import Pricing from "@/components/landing-page/pricing";
import Services from "@/components/landing-page/services";
import Testimonials from "@/components/landing-page/testimonials";
import Work from "@/components/landing-page/work";
import Footer from "@/components/shared/footer";

export default function Home() {
  return (
   <>
   <Hero/>
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
